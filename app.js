/* =========================================================
   CRÍPTICO DIARIO — APP
========================================================= */

(() => {
  "use strict";

  /* =======================================================
     CONFIGURACIÓN
  ======================================================= */

  const STORAGE_KEY = "criptico_diario_v1";

  const mechanismNames = {
    anagram: "Anagrama",
    hidden: "Hidden",
    reversal: "Reversal",
    deletion: "Deletion",
    initials: "Iniciales",
    finals: "Finales",
    synonym: "Sinónimo",
    container: "Container",
    homophone: "Homófono",
    "double-definition": "Doble definición",
    translation: "Traducción",
    rebus: "Rebus"
  };


  /* =======================================================
     ESTADO
  ======================================================= */

  let state = {
    currentPuzzleId: null,
    currentDate: null,

    answer: [],
    revealed: [],

    started: false,
    finished: false,

    startTime: null,
    elapsed: 0,

    hintsUsed: {
      fodder: false,
      indicator: false,
      definition: false
    },

    solved: 0,
    streak: 0,
    bestStreak: 0,
    times: [],

    completedDates: []
  };


  let timerInterval = null;


  /* =======================================================
     ELEMENTOS
  ======================================================= */

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const homeScreen = $("#homeScreen");
  const gameScreen = $("#gameScreen");
  const learnScreen = $("#learnScreen");

  const playBtn = $("#playBtn");
  const backBtn = $("#backBtn");
  const learnBtn = $("#learnBtn");
  const learnBackBtn = $("#learnBackBtn");

  const clueText = $("#clueText");
  const answerContainer = $("#answerContainer");

  const keyboard = $("#keyboard");

  const timer = $("#timer");

  const hintBtn = $("#hintBtn");
  const revealBtn = $("#revealBtn");
  const checkBtn = $("#checkBtn");

  const hintModal = $("#hintModal");
  const resultModal = $("#resultModal");
  const lessonModal = $("#lessonModal");
  const statsModal = $("#statsModal");

  const resultAnswer = $("#resultAnswer");
  const resultExplanation = $("#resultExplanation");
  const resultTime = $("#resultTime");
  const resultStreak = $("#resultStreak");

  const statsBtn = $("#statsBtn");
  const shareBtn = $("#shareBtn");
  const resultCloseBtn = $("#resultCloseBtn");

  const difficultyBadge = $("#difficultyBadge");
  const mechanismBadge = $("#mechanismBadge");

  const alreadySolved = $("#alreadySolved");


  /* =======================================================
     STORAGE
  ======================================================= */

  function loadState() {

    try {

      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return;
      }

      const parsed = JSON.parse(saved);

      state = {
        ...state,
        ...parsed,

        hintsUsed: {
          ...state.hintsUsed,
          ...(parsed.hintsUsed || {})
        },

        answer: Array.isArray(parsed.answer)
          ? parsed.answer
          : [],

        revealed: Array.isArray(parsed.revealed)
          ? parsed.revealed
          : [],

        completedDates: Array.isArray(parsed.completedDates)
          ? parsed.completedDates
          : [],

        times: Array.isArray(parsed.times)
          ? parsed.times
          : []
      };

    } catch (error) {

      console.warn("No se pudo cargar el progreso:", error);

    }

  }


  function saveState() {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

  }


  /* =======================================================
     FECHA
  ======================================================= */

  function getDateKey(date = new Date()) {

    const year = date.getFullYear();

    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      date.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;

  }


  function getDayNumber(date = new Date()) {

    const start = new Date(
      date.getFullYear(),
      0,
      0
    );

    const diff =
      date - start +
      (
        (start.getTimezoneOffset() -
        date.getTimezoneOffset()) *
        60 *
        1000
      );

    return Math.floor(
      diff / 86400000
    );

  }


  /* =======================================================
     PUZZLE DEL DÍA
  ======================================================= */

  function getPuzzleOfTheDay() {

    if (!Array.isArray(PUZZLES) || PUZZLES.length === 0) {
      console.error("No hay puzzles disponibles.");
      return null;
    }

    const dayNumber = getDayNumber();

    const index =
      (dayNumber - 1) % PUZZLES.length;

    return PUZZLES[index];

  }


  function getCurrentPuzzle() {

    return PUZZLES.find(
      puzzle => puzzle.id === state.currentPuzzleId
    ) || getPuzzleOfTheDay();

  }


  /* =======================================================
     INICIALIZACIÓN
  ======================================================= */

  function init() {

    loadState();

    const today = getDateKey();

    const puzzle = getPuzzleOfTheDay();

    if (!puzzle) {
      return;
    }


    /*
      Si cambió el día, reiniciamos únicamente
      el estado específico del puzzle.
    */

    if (state.currentDate !== today) {

      state.currentDate = today;
      state.currentPuzzleId = puzzle.id;

      state.answer = [];
      state.revealed = [];

      state.started = false;
      state.finished = false;

      state.startTime = null;
      state.elapsed = 0;

      state.hintsUsed = {
        fodder: false,
        indicator: false,
        definition: false
      };

      saveState();

    }


    updateHome();

    bindEvents();

  }


  /* =======================================================
     NAVEGACIÓN
  ======================================================= */

  function showScreen(screen) {

    [homeScreen, gameScreen, learnScreen]
      .forEach(element => {
        element.classList.remove("active");
      });

    screen.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  }


  function openGame() {

    const puzzle = getPuzzleOfTheDay();

    if (!puzzle) {
      return;
    }


    state.currentPuzzleId = puzzle.id;

    renderPuzzle(puzzle);


    if (state.finished) {

      stopTimer();

    } else {

      if (state.started) {
        startTimer();
      }

    }


    showScreen(gameScreen);

  }


  function goHome() {

    stopTimer();

    updateHome();

    showScreen(homeScreen);

  }


  /* =======================================================
     HOME
  ======================================================= */

  function updateHome() {

    const puzzle = getPuzzleOfTheDay();

    if (!puzzle) {
      return;
    }

    const today = getDateKey();

    const solvedToday =
      state.completedDates.includes(today);


    if (solvedToday || state.finished) {

      playBtn.classList.add("hidden");
      alreadySolved.classList.remove("hidden");

    } else {

      playBtn.classList.remove("hidden");
      alreadySolved.classList.add("hidden");

    }

  }


  /* =======================================================
     RENDER PUZZLE
  ======================================================= */

  function renderPuzzle(puzzle) {

    clueText.textContent = puzzle.clue;


    difficultyBadge.textContent =
      String(puzzle.difficulty || "medium")
        .toUpperCase();


    const mechanisms =
      puzzle.mechanisms || [];


    if (mechanisms.length === 1) {

      mechanismBadge.textContent =
        mechanismNames[mechanisms[0]]
        || mechanisms[0];

    } else {

      mechanismBadge.textContent =
        `${mechanisms.length} mecanismos`;

    }


    renderAnswer();

    renderKeyboard();

    updateTimerDisplay();

  }


  /* =======================================================
     RESPUESTA
  ======================================================= */

  function normalizeAnswer(value) {

    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase()
      .replace(/[^A-ZÑ]/g, "");

  }


  function renderAnswer() {

    const puzzle = getCurrentPuzzle();

    if (!puzzle) {
      return;
    }


    const answer = normalizeAnswer(
      puzzle.answer
    );


    answerContainer.innerHTML = "";


    for (
      let i = 0;
      i < answer.length;
      i++
    ) {

      const box =
        document.createElement("div");

      box.className = "answer-letter";


      const value =
        state.answer[i] || "";


      const isRevealed =
        state.revealed.includes(i);


      if (isRevealed) {

        box.classList.add("revealed");

        box.textContent =
          answer[i];

      } else {

        box.textContent =
          value;

      }


      if (
        !state.finished &&
        i === getNextInputPosition()
      ) {

        box.classList.add("active");

      }


      answerContainer.appendChild(box);

    }

  }


  function getNextInputPosition() {

    const puzzle = getCurrentPuzzle();

    if (!puzzle) {
      return 0;
    }


    const answer =
      normalizeAnswer(puzzle.answer);


    for (
      let i = 0;
      i < answer.length;
      i++
    ) {

      if (
        !state.revealed.includes(i) &&
        !state.answer[i]
      ) {

        return i;

      }

    }


    /*
      Si todos los casilleros están llenos,
      seleccionamos el último no revelado.
    */

    for (
      let i = 0;
      i < answer.length;
      i++
    ) {

      if (!state.revealed.includes(i)) {
        return i;
      }

    }


    return answer.length - 1;

  }


  function addLetter(letter) {

    if (state.finished) {
      return;
    }


    const puzzle = getCurrentPuzzle();

    if (!puzzle) {
      return;
    }


    const answer =
      normalizeAnswer(puzzle.answer);


    if (!state.started) {
      startGame();
    }


    let position = getNextInputPosition();


    /*
      Buscar el primer hueco editable.
    */

    while (
      position < answer.length &&
      state.revealed.includes(position)
    ) {

      position++;

    }


    if (position >= answer.length) {
      return;
    }


    state.answer[position] =
      normalizeAnswer(letter).slice(0, 1);


    renderAnswer();

    saveState();

  }


  function removeLetter() {

    if (state.finished) {
      return;
    }


    /*
      Borra la última letra introducida
      que no haya sido revelada.
    */

    for (
      let i = state.answer.length - 1;
      i >= 0;
      i--
    ) {

      if (
        state.answer[i] &&
        !state.revealed.includes(i)
      ) {

        state.answer[i] = "";

        renderAnswer();

        saveState();

        return;

      }

    }

  }


  /* =======================================================
     MOSTRAR LETRA
  ======================================================= */

  function revealNextLetter() {

    if (state.finished) {
      return;
    }


    const puzzle = getCurrentPuzzle();

    if (!puzzle) {
      return;
    }


    const answer =
      normalizeAnswer(puzzle.answer);


    if (!state.started) {
      startGame();
    }


    /*
      Primero buscamos una posición que todavía
      no haya sido revelada.
    */

    let position = -1;


    for (
      let i = 0;
      i < answer.length;
      i++
    ) {

      if (!state.revealed.includes(i)) {

        position = i;
        break;

      }

    }


    if (position === -1) {
      return;
    }


    state.answer[position] =
      answer[position];

    state.revealed.push(position);


    state.revealed.sort(
      (a, b) => a - b
    );


    renderAnswer();

    saveState();


    /*
      Si ya completó todas las letras,
      comprobamos automáticamente.
    */

    if (
      state.revealed.length === answer.length
    ) {

      setTimeout(() => {

        checkAnswer();

      }, 300);

    }

  }


  /* =======================================================
     COMPROBAR
  ======================================================= */

  function checkAnswer() {

    if (state.finished) {
      return;
    }


    const puzzle = getCurrentPuzzle();

    if (!puzzle) {
      return;
    }


    const correct =
      normalizeAnswer(puzzle.answer);


    const userAnswer =
      state.answer
        .map(letter => letter || "")
        .join("");


    if (userAnswer.length !== correct.length) {

      shakeCard();

      return;

    }


    if (userAnswer === correct) {

      solvePuzzle();

    } else {

      shakeCard();

      answerContainer.classList.add("wrong");

      setTimeout(() => {

        answerContainer.classList.remove("wrong");

      }, 450);

    }

  }


  function shakeCard() {

    const card =
      document.querySelector(".game-card");

    if (!card) {
      return;
    }


    card.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-7px)" },
        { transform: "translateX(7px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0)" }
      ],
      {
        duration: 300
      }
    );

  }


  /* =======================================================
     RESOLVER
  ======================================================= */

  function solvePuzzle() {

    state.finished = true;


    stopTimer();


    const puzzle = getCurrentPuzzle();

    if (!puzzle) {
      return;
    }


    state.elapsed =
      Math.floor(
        (Date.now() - state.startTime) / 1000
      );


    /*
      Actualizamos estadísticas.
    */

    state.solved++;

    state.times.push(state.elapsed);


    /*
      Evitamos duplicar el día.
    */

    const today = getDateKey();


    if (!state.completedDates.includes(today)) {

      state.completedDates.push(today);

    }


    updateStreak();


    saveState();


    /*
      Mostramos la respuesta completa.
    */

    const answer =
      normalizeAnswer(puzzle.answer);


    state.answer =
      answer.split("");


    renderAnswer();


    setTimeout(() => {

      showResult();

    }, 350);

  }


  /* =======================================================
     RACHA
  ======================================================= */

  function updateStreak() {

    const dates =
      [...state.completedDates]
        .sort();


    if (dates.length === 1) {

      state.streak = 1;

    } else {

      const today = new Date();


      const todayKey =
        getDateKey(today);


      const yesterday =
        new Date(today);

      yesterday.setDate(
        yesterday.getDate() - 1
      );


      const yesterdayKey =
        getDateKey(yesterday);


      if (
        state.completedDates.includes(
          yesterdayKey
        ) &&
        state.completedDates.includes(
          todayKey
        )
      ) {

        state.streak++;

      } else if (
        state.completedDates.includes(
          todayKey
        )
      ) {

        state.streak = 1;

      }

    }


    state.bestStreak =
      Math.max(
        state.bestStreak,
        state.streak
      );

  }


  /* =======================================================
     TIMER
  ======================================================= */

  function startGame() {

    if (state.started) {
      return;
    }


    state.started = true;

    state.startTime =
      Date.now() -
      state.elapsed * 1000;


    saveState();

    startTimer();

  }


  function startTimer() {

    stopTimer();


    if (
      state.finished ||
      !state.started
    ) {

      return;

    }


    timerInterval =
      setInterval(() => {

        state.elapsed =
          Math.floor(
            (Date.now() - state.startTime) /
            1000
          );


        updateTimerDisplay();

      }, 1000);

  }


  function stopTimer() {

    if (timerInterval) {

      clearInterval(
        timerInterval
      );

      timerInterval = null;

    }

  }


  function updateTimerDisplay() {

    timer.textContent =
      formatTime(state.elapsed);

  }


  function formatTime(seconds) {

    seconds =
      Math.max(
        0,
        Number(seconds) || 0
      );


    const minutes =
      Math.floor(seconds / 60);


    const secs =
      seconds % 60;


    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(secs).padStart(2, "0")
    );

  }


  /* =======================================================
     TECLADO
  ======================================================= */

  function renderKeyboard() {

    $$(".key").forEach(key => {

      key.classList.remove("used");

    });


    /*
      Marcamos las letras que ya están
      colocadas visualmente.
    */

    state.answer.forEach(letter => {

      if (!letter) {
        return;
      }


      $$(".key").forEach(key => {

        if (
          key.textContent.trim() === letter
        ) {

          key.classList.add("used");

        }

      });

    });

  }


  function handleKeyboardKey(key) {

    if (key.dataset.action === "backspace") {

      removeLetter();

      return;

    }


    if (key.dataset.action === "enter") {

      checkAnswer();

      return;

    }


    const letter =
      key.textContent.trim();


    if (
      letter.length === 1
    ) {

      addLetter(letter);

    }

  }


  /* =======================================================
     PISTAS
  ======================================================= */

  function openHintMenu() {

    if (state.finished) {
      return;
    }


    $$(".hint-option").forEach(button => {

      const type =
        button.dataset.hint;


      if (
        state.hintsUsed[type]
      ) {

        button.disabled = true;

        button.style.opacity = ".45";

      } else {

        button.disabled = false;

        button.style.opacity = "1";

      }

    });


    openModal(hintModal);

  }


  function useHint(type) {

    const puzzle =
      getCurrentPuzzle();


    if (!puzzle) {
      return;
    }


    if (state.hintsUsed[type]) {
      return;
    }


    state.hintsUsed[type] = true;


    saveState();

    closeModal(hintModal);


    let title = "";
    let content = "";


    if (type === "fodder") {

      title = "Fodder";

      content =
        puzzle.fodder ||
        "Esta pista no necesita fodder explícito.";

    }


    if (type === "indicator") {

      title = "Indicador";

      const indicators =
        puzzle.indicators;


      if (Array.isArray(indicators)) {

        content =
          indicators.join(" · ");

      } else {

        content =
          indicators ||
          "No hay un indicador explícito.";

      }

    }


    if (type === "definition") {

      title = "Definición";

      content =
        puzzle.definition ||
        "No hay una definición separada.";

    }


    showInformationModal(
      title,
      content
    );

  }


  function showInformationModal(
    title,
    content
  ) {

    const box =
      document.querySelector(
        "#lessonModal .modal-box"
      );


    $("#lessonEyebrow").textContent =
      "PISTA";


    $("#lessonTitle").textContent =
      title;


    $("#lessonContent").innerHTML = `
      <div class="lesson-example">
        <strong>${escapeHTML(content)}</strong>
      </div>
    `;


    $("#lessonCloseBtn").textContent =
      "Volver al críptico";


    openModal(lessonModal);

  }


  /* =======================================================
     RESULTADO
  ======================================================= */

  function showResult() {

    const puzzle =
      getCurrentPuzzle();


    if (!puzzle) {
      return;
    }


    resultAnswer.textContent =
      normalizeAnswer(
        puzzle.answer
      );


    resultExplanation.textContent =
      puzzle.explanation ||
      "Pista resuelta correctamente.";


    resultTime.textContent =
      formatTime(
        state.elapsed
      );


    resultStreak.textContent =
      state.streak;


    openModal(resultModal);

  }


  /* =======================================================
     COMPARTIR
  ======================================================= */

  async function shareResult() {

    const puzzle =
      getCurrentPuzzle();


    if (!puzzle) {
      return;
    }


    const text =
      `🧩 Críptico Diario\n` +
      `✓ Resuelto\n` +
      `⏱️ ${formatTime(state.elapsed)}\n` +
      `🔥 Racha: ${state.streak}\n\n` +
      `¿Podés resolverlo vos?`;


    try {

      if (
        navigator.share
      ) {

        await navigator.share({
          title: "Críptico Diario",
          text
        });

        return;

      }


      await navigator.clipboard.writeText(
        text
      );


      shareBtn.textContent =
        "¡Copiado!";


      setTimeout(() => {

        shareBtn.textContent =
          "Compartir resultado";

      }, 1500);


    } catch (error) {

      console.warn(
        "No se pudo compartir:",
        error
      );

    }

  }


  /* =======================================================
     ESTADÍSTICAS
  ======================================================= */

  function showStats() {

    $("#statSolved").textContent =
      state.solved;


    $("#statStreak").textContent =
      state.streak;


    $("#statBest").textContent =
      state.bestStreak;


    if (state.times.length) {

      const average =
        state.times.reduce(
          (sum, value) =>
            sum + value,
          0
        ) /
        state.times.length;


      $("#statAverage").textContent =
        formatTime(
          Math.round(average)
        );

    } else {

      $("#statAverage").textContent =
        "—";

    }


    openModal(statsModal);

  }


  /* =======================================================
     LECCIONES
  ======================================================= */

  const LESSONS = {

    anagram: {
      title: "Anagramas",
      content: `
        <p>
          En un anagrama, las letras de una palabra
          o grupo de palabras se reorganizan para
          formar la respuesta.
        </p>

        <div class="lesson-example">
          <strong>Indicadores típicos</strong>
          desordenado · alterado · roto · mezclado ·
          revuelto
        </div>

        <p>
          La clave es detectar qué palabra aporta
          las letras y qué palabra indica que debemos
          mezclarlas.
        </p>
      `
    },


    hidden: {
      title: "Hiddens",
      content: `
        <p>
          La respuesta está escondida dentro de otras
          palabras, incluso atravesando los límites
          entre ellas.
        </p>

        <div class="lesson-example">
          <strong>Indicadores</strong>
          escondido · dentro de · oculto · en
        </div>

        <p>
          No hace falta modificar las letras:
          simplemente hay que encontrarlas.
        </p>
      `
    },


    reversal: {
      title: "Reversals",
      content: `
        <p>
          Un reversal toma unas letras y las lee
          al revés.
        </p>

        <div class="lesson-example">
          <strong>Indicadores</strong>
          atrás · devuelto · invertido · de vuelta ·
          al revés
        </div>

        <p>
          Los reversals suelen combinarse con otros
          mecanismos.
        </p>
      `
    },


    deletion: {
      title: "Deletions",
      content: `
        <p>
          En una deletion eliminamos una o más letras
          de una palabra.
        </p>

        <div class="lesson-example">
          <strong>Indicadores</strong>
          sin cabeza · sin final · perdiendo ·
          quitando
        </div>
      `
    },


    synonym: {
      title: "Sinónimos",
      content: `
        <p>
          Una palabra de la pista puede sustituirse
          por un sinónimo.
        </p>

        <div class="lesson-example">
          <strong>Ejemplo</strong>
          Una definición puede pedir una palabra
          equivalente sin decirla directamente.
        </div>
      `
    },


    container: {
      title: "Containers",
      content: `
        <p>
          Una palabra o conjunto de letras se mete
          dentro de otra.
        </p>

        <div class="lesson-example">
          <strong>Indicadores</strong>
          dentro de · rodeando · abrazando ·
          conteniendo
        </div>
      `
    },


    homophone: {
      title: "Homófonos",
      content: `
        <p>
          La respuesta suena igual o muy parecido
          a otra palabra.
        </p>

        <div class="lesson-example">
          <strong>Indicadores</strong>
          según suena · al oído · dicen ·
          escuchado
        </div>
      `
    },


    translation: {
      title: "Traducciones",
      content: `
        <p>
          Una palabra puede aparecer en otro idioma
          y formar parte de la respuesta.
        </p>

        <div class="lesson-example">
          <strong>La trampa</strong>
          La pista puede parecer una definición
          normal hasta que aparece la indicación
          del idioma.
        </div>
      `
    },


    double: {
      title: "Doble definición",
      content: `
        <p>
          Una misma respuesta tiene dos significados
          distintos, ambos definidos por la pista.
        </p>

        <div class="lesson-example">
          <strong>Clave</strong>
          Si no encontrás wordplay, probá preguntarte:
          ¿podría haber dos definiciones?
        </div>
      `
    },


    rebus: {
      title: "Rebuses",
      content: `
        <p>
          Los rebuses juegan con símbolos, letras,
          posiciones o representaciones visuales.
        </p>

        <div class="lesson-example">
          <strong>Más raro = más atención</strong>
          Acá la pista puede estar hablando de
          cómo se presenta una palabra, no solamente
          de qué significa.
        </div>
      `
    }

  };


  function openLesson(id) {

    const lesson =
      LESSONS[id];


    if (!lesson) {
      return;
    }


    $("#lessonEyebrow").textContent =
      "LECCIÓN";


    $("#lessonTitle").textContent =
      lesson.title;


    $("#lessonContent").innerHTML =
      lesson.content;


    $("#lessonCloseBtn").textContent =
      "Entendido";


    openModal(lessonModal);

  }


  /* =======================================================
     MODALES
  ======================================================= */

  function openModal(modal) {

    modal.classList.remove("hidden");

  }


  function closeModal(modal) {

    modal.classList.add("hidden");

  }


  function bindModalCloseButtons() {

    $$("[data-close]").forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            button.dataset.close;


          const modal =
            document.getElementById(id);


          if (modal) {
            closeModal(modal);
          }

        }
      );

    });


    $$(".modal").forEach(modal => {

      modal.addEventListener(
        "click",
        event => {

          if (
            event.target === modal
          ) {

            closeModal(modal);

          }

        }
      );

    });

  }


  /* =======================================================
     EVENTOS
  ======================================================= */

  function bindEvents() {

    playBtn.addEventListener(
      "click",
      openGame
    );


    backBtn.addEventListener(
      "click",
      goHome
    );


    learnBtn.addEventListener(
      "click",
      () => showScreen(learnScreen)
    );


    learnBackBtn.addEventListener(
      "click",
      goHome
    );


    hintBtn.addEventListener(
      "click",
      openHintMenu
    );


    revealBtn.addEventListener(
      "click",
      revealNextLetter
    );


    checkBtn.addEventListener(
      "click",
      checkAnswer
    );


    shareBtn.addEventListener(
      "click",
      shareResult
    );


    resultCloseBtn.addEventListener(
      "click",
      () => {

        closeModal(resultModal);
        goHome();

      }
    );


    statsBtn.addEventListener(
      "click",
      showStats
    );


    $("#lessonCloseBtn").addEventListener(
      "click",
      () => closeModal(lessonModal)
    );


    $$(".key").forEach(key => {

      key.addEventListener(
        "click",
        () => handleKeyboardKey(key)
      );

    });


    $$(".hint-option").forEach(button => {

      button.addEventListener(
        "click",
        () => {

          useHint(
            button.dataset.hint
          );

        }
      );

    });


    $$(".lesson-btn").forEach(button => {

      button.addEventListener(
        "click",
        () => {

          openLesson(
            button.dataset.lesson
          );

        }
      );

    });


    bindModalCloseButtons();


    /*
      Teclado físico
    */

    document.addEventListener(
      "keydown",
      event => {

        if (state.finished) {
          return;
        }


        const key =
          event.key.toUpperCase();


        if (
          /^[A-ZÑ]$/.test(key)
        ) {

          event.preventDefault();

          addLetter(key);

          return;

        }


        if (
          event.key === "Backspace"
        ) {

          event.preventDefault();

          removeLetter();

          return;

        }


        if (
          event.key === "Enter"
        ) {

          event.preventDefault();

          checkAnswer();

        }

      }
    );


    /*
      Cerrar modales con ESC
    */

    document.addEventListener(
      "keydown",
      event => {

        if (event.key !== "Escape") {
          return;
        }


        $$(".modal").forEach(modal => {

          if (
            !modal.classList.contains(
              "hidden"
            )
          ) {

            closeModal(modal);

          }

        });

      }
    );

  }


  /* =======================================================
     SEGURIDAD HTML
  ======================================================= */

  function escapeHTML(value) {

    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  }


  /* =======================================================
     ARRANQUE
  ======================================================= */

  init();

})();
