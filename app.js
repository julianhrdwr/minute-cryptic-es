/* =========================================================
   CRÍPTICO DIARIO — APP
========================================================= */

(() => {
  "use strict";


  /* =======================================================
     CONFIGURACIÓN
  ======================================================= */

  const STORAGE_KEY = "criptico_diario_v2";


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
     MODO PRUEBA
  ======================================================= */

  // El modo prueba permite elegir cualquier puzzle sin modificar
  // el progreso real guardado en el navegador.
  let testMode = false;
  let realStateBackup = null;
  let testUIReady = false;


  /* =======================================================
     SELECTORES
  ======================================================= */

  const $ = selector =>
    document.querySelector(selector);

  const $$ = selector =>
    [...document.querySelectorAll(selector)];


  const homeScreen =
    $("#homeScreen");

  const gameScreen =
    $("#gameScreen");

  const learnScreen =
    $("#learnScreen");


  const playBtn =
    $("#playBtn");

  const backBtn =
    $("#backBtn");

  const learnBtn =
    $("#learnBtn");

  const learnBackBtn =
    $("#learnBackBtn");


  const clueText =
    $("#clueText");

  const answerContainer =
    $("#answerContainer");

  const timer =
    $("#timer");


  const hintBtn =
    $("#hintBtn");

  const revealBtn =
    $("#revealBtn");

  const checkBtn =
    $("#checkBtn");


  const hintModal =
    $("#hintModal");

  const resultModal =
    $("#resultModal");

  const lessonModal =
    $("#lessonModal");

  const statsModal =
    $("#statsModal");


  const resultAnswer =
    $("#resultAnswer");

  const resultExplanation =
    $("#resultExplanation");

  const resultTime =
    $("#resultTime");

  const resultStreak =
    $("#resultStreak");


  const statsBtn =
    $("#statsBtn");

  const shareBtn =
    $("#shareBtn");

  const resultCloseBtn =
    $("#resultCloseBtn");


  const difficultyBadge =
    $("#difficultyBadge");

  const mechanismBadge =
    $("#mechanismBadge");


  const alreadySolved =
    $("#alreadySolved");


  /* =======================================================
     STORAGE
  ======================================================= */

  function loadState() {

    try {

      const saved =
        localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return;
      }

      const parsed =
        JSON.parse(saved);


      state = {

        ...state,

        ...parsed,

        hintsUsed: {
          ...state.hintsUsed,
          ...(parsed.hintsUsed || {})
        },

        answer:
          Array.isArray(parsed.answer)
            ? parsed.answer
            : [],

        revealed:
          Array.isArray(parsed.revealed)
            ? parsed.revealed
            : [],

        completedDates:
          Array.isArray(parsed.completedDates)
            ? parsed.completedDates
            : [],

        times:
          Array.isArray(parsed.times)
            ? parsed.times
            : []

      };

    } catch (error) {

      console.warn(
        "No se pudo cargar el progreso:",
        error
      );

    }

  }


  function saveState() {

    // Nunca guardamos cambios del modo prueba.
    if (testMode) {
      return;
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

  }


  /* =======================================================
     FECHA
  ======================================================= */

  function getDateKey(
    date = new Date()
  ) {

    const year =
      date.getFullYear();

    const month =
      String(
        date.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        date.getDate()
      ).padStart(2, "0");


    return `${year}-${month}-${day}`;

  }


  function getDayNumber(
    date = new Date()
  ) {

    const start =
      new Date(
        date.getFullYear(),
        0,
        0
      );


    const diff =
      date -
      start +
      (
        (
          start.getTimezoneOffset() -
          date.getTimezoneOffset()
        ) *
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

    if (
      !Array.isArray(PUZZLES) ||
      PUZZLES.length === 0
    ) {

      console.error(
        "No hay puzzles disponibles."
      );

      return null;

    }


    const dayNumber =
      getDayNumber();


    const index =
      (dayNumber - 1) %
      PUZZLES.length;


    return PUZZLES[index];

  }


  function getCurrentPuzzle() {

    return (
      PUZZLES.find(
        puzzle =>
          puzzle.id ===
          state.currentPuzzleId
      )
      ||
      getPuzzleOfTheDay()
    );

  }


  /* =======================================================
     INICIALIZACIÓN
  ======================================================= */

  function init() {

    loadState();


    const today =
      getDateKey();


    const puzzle =
      getPuzzleOfTheDay();


    if (!puzzle) {
      return;
    }


    /*
      Si estamos ante un nuevo día,
      reiniciamos el puzzle.
    */

    if (
      state.currentDate !== today
    ) {

      state.currentDate =
        today;

      state.currentPuzzleId =
        puzzle.id;


      state.answer = [];

      state.revealed = [];


      state.started = false;

      state.finished = false;


      state.startTime =
        null;

      state.elapsed =
        0;


      state.hintsUsed = {

        fodder: false,

        indicator: false,

        definition: false

      };


      saveState();

    }


    updateHome();

    createTestModeUI();

    bindEvents();

  }


  /* =======================================================
     NAVEGACIÓN
  ======================================================= */

  function showScreen(screen) {

    [
      homeScreen,
      gameScreen,
      learnScreen
    ]
      .forEach(element => {

        element.classList.remove(
          "active"
        );

      });


    screen.classList.add(
      "active"
    );


    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  }


  function openGame() {

    // En modo prueba no debemos volver a cambiar al puzzle del día.
    if (testMode) {

      const puzzle =
        getCurrentPuzzle();


      if (!puzzle) {
        return;
      }


      renderPuzzle(
        puzzle
      );


      if (state.finished) {

        stopTimer();

      } else if (state.started) {

        startTimer();

      }


      showScreen(
        gameScreen
      );


      setTestBadge(true);

      return;

    }


    const puzzle =
      getPuzzleOfTheDay();


    if (!puzzle) {
      return;
    }


    state.currentPuzzleId =
      puzzle.id;


    renderPuzzle(
      puzzle
    );


    if (state.finished) {

      stopTimer();

    } else if (state.started) {

      startTimer();

    }


    showScreen(
      gameScreen
    );

  }


  function goHome() {

    if (testMode) {

      exitTestMode();

      return;

    }


    stopTimer();

    updateHome();

    showScreen(
      homeScreen
    );

  }


  /* =======================================================
     HOME
  ======================================================= */

  function updateHome() {

    const today =
      getDateKey();


    const solvedToday =
      state.completedDates.includes(
        today
      );


    if (
      solvedToday ||
      state.finished
    ) {

      playBtn.classList.add(
        "hidden"
      );

      alreadySolved.classList.remove(
        "hidden"
      );

    } else {

      playBtn.classList.remove(
        "hidden"
      );

      alreadySolved.classList.add(
        "hidden"
      );

    }

  }


  /* =======================================================
     RENDER PUZZLE
  ======================================================= */

  function renderPuzzle(
    puzzle
  ) {

    renderClue(
      puzzle
    );


    difficultyBadge.textContent =
      String(
        puzzle.difficulty ||
        "medium"
      ).toUpperCase();


    const mechanisms =
      puzzle.mechanisms ||
      [];


    if (
      mechanisms.length === 1
    ) {

      mechanismBadge.textContent =
        mechanismNames[
          mechanisms[0]
        ] ||
        mechanisms[0];

    } else {

      mechanismBadge.textContent =
        `${mechanisms.length} mecanismos`;

    }


    renderAnswer();

    renderKeyboard();

    updateTimerDisplay();

  }


  /* =======================================================
     RENDER DE LA PISTA
  ======================================================= */

  function renderClue(
    puzzle
  ) {

    if (!puzzle) {
      return;
    }


    /*
      Si no hay pistas utilizadas,
      mostramos el texto normal.
    */

    const activeHints =
      Object.keys(
        state.hintsUsed
      )
      .filter(
        type =>
          state.hintsUsed[type]
      );


    if (
      activeHints.length === 0
    ) {

      clueText.textContent =
        puzzle.clue;

      return;

    }


    /*
      Creamos segmentos de la frase
      para poder tener varios subrayados
      simultáneamente.
    */

    const text =
      String(puzzle.clue);


    const ranges = [];


    activeHints.forEach(
      type => {

        let target = "";


        if (
          type === "fodder"
        ) {

          target =
            puzzle.fodder ||
            "";

        }


        if (
          type === "indicator"
        ) {

          if (
            Array.isArray(
              puzzle.indicators
            )
          ) {

            target =
              puzzle.indicators[0] ||
              "";

          } else {

            target =
              puzzle.indicators ||
              "";

          }

        }


        if (
          type === "definition"
        ) {

          target =
            puzzle.definition ||
            "";

        }


        if (!target) {
          return;
        }


        const index =
          text.toLocaleLowerCase()
            .indexOf(
              String(target)
                .toLocaleLowerCase()
            );


        if (
          index === -1
        ) {

          console.warn(
            `No se encontró "${target}" dentro de la pista.`
          );

          return;

        }


        ranges.push({

          start: index,

          end:
            index +
            String(target).length,

          type

        });

      }
    );


    /*
      Ordenamos los fragmentos.
    */

    ranges.sort(
      (a, b) =>
        a.start - b.start
    );


    /*
      Evitamos problemas si dos ayudas
      apuntan exactamente al mismo texto.
    */

    const finalRanges = [];


    ranges.forEach(
      range => {

        const overlaps =
          finalRanges.some(
            existing =>
              range.start <
                existing.end &&
              range.end >
                existing.start
          );


        if (!overlaps) {

          finalRanges.push(
            range
          );

        }

      }
    );


    /*
      Construimos HTML seguro.
    */

    let html = "";

    let cursor = 0;


    finalRanges.forEach(
      range => {

        html +=
          escapeHTML(
            text.slice(
              cursor,
              range.start
            )
          );


        html +=
          `<span class="clue-highlight ${range.type}">` +
          escapeHTML(
            text.slice(
              range.start,
              range.end
            )
          ) +
          `</span>`;


        cursor =
          range.end;

      }
    );


    html +=
      escapeHTML(
        text.slice(cursor)
      );


    clueText.innerHTML =
      html;

  }


  /* =======================================================
     RESPUESTA
  ======================================================= */

  function normalizeAnswer(
    value
  ) {

    return String(value || "")
      .normalize("NFD")
      .replace(
        /[\u0300-\u036f]/g,
        ""
      )
      .toUpperCase()
      .replace(
        /[^A-ZÑ]/g,
        ""
      );

  }


  function renderAnswer() {

    const puzzle =
      getCurrentPuzzle();


    if (!puzzle) {
      return;
    }


    const answer =
      normalizeAnswer(
        puzzle.answer
      );


    answerContainer.innerHTML =
      "";


    for (
      let i = 0;
      i < answer.length;
      i++
    ) {

      const box =
        document.createElement(
          "div"
        );


      box.className =
        "answer-letter";


      const value =
        state.answer[i] ||
        "";


      const isRevealed =
        state.revealed.includes(
          i
        );


      if (isRevealed) {

        box.classList.add(
          "revealed"
        );

        box.textContent =
          answer[i];

      } else {

        box.textContent =
          value;

      }


      if (
        !state.finished &&
        i ===
          getNextInputPosition()
      ) {

        box.classList.add(
          "active"
        );

      }


      answerContainer.appendChild(
        box
      );

    }

  }


  function getNextInputPosition() {

    const puzzle =
      getCurrentPuzzle();


    if (!puzzle) {
      return 0;
    }


    const answer =
      normalizeAnswer(
        puzzle.answer
      );


    /*
      Primero buscamos un hueco vacío.
    */

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
      Si no hay huecos vacíos,
      buscamos el primer casillero
      que todavía pueda editarse.
    */

    for (
      let i = 0;
      i < answer.length;
      i++
    ) {

      if (
        !state.revealed.includes(i)
      ) {

        return i;

      }

    }


    return answer.length - 1;

  }


  function addLetter(
    letter
  ) {

    if (state.finished) {
      return;
    }


    const puzzle =
      getCurrentPuzzle();


    if (!puzzle) {
      return;
    }


    const answer =
      normalizeAnswer(
        puzzle.answer
      );


    if (!state.started) {
      startGame();
    }


    let position =
      getNextInputPosition();


    while (
      position < answer.length &&
      state.revealed.includes(
        position
      )
    ) {

      position++;

    }


    if (
      position >=
      answer.length
    ) {

      return;

    }


    state.answer[position] =
      normalizeAnswer(
        letter
      ).slice(0, 1);


    renderAnswer();

    renderKeyboard();

    saveState();

  }


  function removeLetter() {

    if (state.finished) {
      return;
    }


    for (
      let i =
        state.answer.length - 1;
      i >= 0;
      i--
    ) {

      if (
        state.answer[i] &&
        !state.revealed.includes(
          i
        )
      ) {

        state.answer[i] =
          "";


        renderAnswer();

        renderKeyboard();

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


    const puzzle =
      getCurrentPuzzle();


    if (!puzzle) {
      return;
    }


    const answer =
      normalizeAnswer(
        puzzle.answer
      );


    if (!state.started) {
      startGame();
    }


    let position = -1;


    /*
      Siempre revela la primera letra
      que todavía no fue revelada.
    */

    for (
      let i = 0;
      i < answer.length;
      i++
    ) {

      if (
        !state.revealed.includes(i)
      ) {

        position = i;

        break;

      }

    }


    if (position === -1) {
      return;
    }


    state.answer[position] =
      answer[position];


    state.revealed.push(
      position
    );


    state.revealed.sort(
      (a, b) => a - b
    );


    renderAnswer();

    renderKeyboard();

    saveState();


    /*
      Si todas las letras fueron reveladas,
      comprobamos automáticamente.
    */

    if (
      state.revealed.length ===
      answer.length
    ) {

      setTimeout(
        () => checkAnswer(),
        300
      );

    }

  }


  /* =======================================================
     COMPROBAR
  ======================================================= */

  function checkAnswer() {

    if (state.finished) {
      return;
    }


    const puzzle =
      getCurrentPuzzle();


    if (!puzzle) {
      return;
    }


    const correct =
      normalizeAnswer(
        puzzle.answer
      );


    const userAnswer =
      state.answer
        .map(
          letter =>
            letter || ""
        )
        .join("");


    if (
      userAnswer.length !==
      correct.length
    ) {

      shakeCard();

      return;

    }


    if (
      userAnswer === correct
    ) {

      solvePuzzle();

    } else {

      shakeCard();

      answerContainer.classList.add(
        "wrong"
      );


      setTimeout(
        () => {

          answerContainer.classList.remove(
            "wrong"
          );

        },
        450
      );

    }

  }


  function shakeCard() {

    const card =
      document.querySelector(
        ".game-card"
      );


    if (!card) {
      return;
    }


    card.animate(
      [
        {
          transform:
            "translateX(0)"
        },
        {
          transform:
            "translateX(-7px)"
        },
        {
          transform:
            "translateX(7px)"
        },
        {
          transform:
            "translateX(-5px)"
        },
        {
          transform:
            "translateX(5px)"
        },
        {
          transform:
            "translateX(0)"
        }
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

    state.finished =
      true;


    stopTimer();


    const puzzle =
      getCurrentPuzzle();


    if (!puzzle) {
      return;
    }


    if (state.startTime) {

      state.elapsed =
        Math.floor(
          (
            Date.now() -
            state.startTime
          ) / 1000
        );

    }


    // En modo prueba mostramos el resultado, pero no modificamos
    // estadísticas, racha ni fechas completadas.
    if (!testMode) {

      state.solved++;


      state.times.push(
        state.elapsed
      );


      const today =
        getDateKey();


      if (
        !state.completedDates.includes(
          today
        )
      ) {

        state.completedDates.push(
          today
        );

      }


      updateStreak();


      saveState();

    }


    const answer =
      normalizeAnswer(
        puzzle.answer
      );


    state.answer =
      answer.split("");


    renderAnswer();

    renderKeyboard();


    setTimeout(
      () => showResult(),
      350
    );

  }


  /* =======================================================
     RACHA
  ======================================================= */

  function updateStreak() {

    const today =
      new Date();


    const todayKey =
      getDateKey(
        today
      );


    const yesterday =
      new Date(
        today
      );


    yesterday.setDate(
      yesterday.getDate() - 1
    );


    const yesterdayKey =
      getDateKey(
        yesterday
      );


    if (
      state.completedDates.includes(
        yesterdayKey
      ) &&
      state.completedDates.includes(
        todayKey
      )
    ) {

      /*
        Si ya había una racha activa,
        la aumentamos solamente una vez.
      */

      if (
        state.streak < 1
      ) {

        state.streak = 2;

      } else {

        state.streak++;

      }

    } else if (
      state.completedDates.includes(
        todayKey
      )
    ) {

      state.streak = 1;

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


    state.started =
      true;


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
      setInterval(
        () => {

          state.elapsed =
            Math.floor(
              (
                Date.now() -
                state.startTime
              ) / 1000
            );


          updateTimerDisplay();

        },
        1000
      );

  }


  function stopTimer() {

    if (
      timerInterval
    ) {

      clearInterval(
        timerInterval
      );

      timerInterval =
        null;

    }

  }


  function updateTimerDisplay() {

    timer.textContent =
      formatTime(
        state.elapsed
      );

  }


  function formatTime(
    seconds
  ) {

    seconds =
      Math.max(
        0,
        Number(seconds) || 0
      );


    const minutes =
      Math.floor(
        seconds / 60
      );


    const secs =
      seconds % 60;


    return (
      String(minutes)
        .padStart(2, "0") +
      ":" +
      String(secs)
        .padStart(2, "0")
    );

  }


  /* =======================================================
     TECLADO
  ======================================================= */

  function renderKeyboard() {

    $$(".key").forEach(
      key => {

        key.classList.remove(
          "used"
        );

      }
    );


    state.answer.forEach(
      letter => {

        if (!letter) {
          return;
        }


        $$(".key").forEach(
          key => {

            if (
              key.textContent.trim() ===
              letter
            ) {

              key.classList.add(
                "used"
              );

            }

          }
        );

      }
    );

  }


  function handleKeyboardKey(
    key
  ) {

    if (
      key.dataset.action ===
      "backspace"
    ) {

      removeLetter();

      return;

    }


    if (
      key.dataset.action ===
      "enter"
    ) {

      checkAnswer();

      return;

    }


    const letter =
      key.textContent.trim();


    if (
      letter.length === 1
    ) {

      addLetter(
        letter
      );

    }

  }


  /* =======================================================
     MENÚ DE PISTAS
  ======================================================= */

  function openHintMenu() {

    if (state.finished) {
      return;
    }


    $$(".hint-option")
      .forEach(
        button => {

          const type =
            button.dataset.hint;


          if (
            state.hintsUsed[type]
          ) {

            button.disabled =
              true;

            button.style.opacity =
              ".45";

          } else {

            button.disabled =
              false;

            button.style.opacity =
              "1";

          }

        }
      );


    openModal(
      hintModal
    );

  }


  function useHint(
    type
  ) {

    const puzzle =
      getCurrentPuzzle();


    if (!puzzle) {
      return;
    }


    if (
      state.hintsUsed[type]
    ) {

      return;

    }


    state.hintsUsed[type] =
      true;


    saveState();


    closeModal(
      hintModal
    );


    /*
      En lugar de abrir otro cartel,
      simplemente marcamos la parte
      correspondiente de la pista.
    */

    renderClue(
      puzzle
    );

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
      testMode
        ? "—"
        : state.streak;


    openModal(
      resultModal
    );

  }


  /* =======================================================
     COMPARTIR
  ======================================================= */

  async function shareResult() {

    const puzzle =
      getCurrentPuzzle();

    const text = testMode
      ? `🧪 Críptico Diario — Modo prueba\n` +
        `✓ Resuelto\n` +
        `Respuesta: ${normalizeAnswer(puzzle?.answer || "")}`
      : `🧩 Críptico Diario\n` +
        `✓ Resuelto\n` +
        `⏱️ ${formatTime(state.elapsed)}\n` +
        `🔥 Racha: ${state.streak}\n\n` +
        `¿Podés resolverlo vos?`;


    try {

      if (
        navigator.share
      ) {

        await navigator.share({
          title:
            "Críptico Diario",
          text
        });

        return;

      }


      await navigator.clipboard.writeText(
        text
      );


      shareBtn.textContent =
        "¡Copiado!";


      setTimeout(
        () => {

          shareBtn.textContent =
            "Compartir resultado";

        },
        1500
      );


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


    if (
      state.times.length
    ) {

      const average =
        state.times.reduce(
          (
            sum,
            value
          ) =>
            sum + value,
          0
        ) /
        state.times.length;


      $("#statAverage").textContent =
        formatTime(
          Math.round(
            average
          )
        );

    } else {

      $("#statAverage").textContent =
        "—";

    }


    openModal(
      statsModal
    );

  }


  /* =======================================================
     LECCIONES
  ======================================================= */

  const LESSONS = {

    anagram: {

      title:
        "Anagramas",

      content: `
        <p>
          En un anagrama, las letras de una palabra
          o grupo de palabras se reorganizan para
          formar la respuesta.
        </p>

        <div class="lesson-example">
          <strong>Indicadores</strong>
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

      title:
        "Hiddens",

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
      `

    },


    reversal: {

      title:
        "Reversals",

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

      title:
        "Deletions",

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

      title:
        "Sinónimos",

      content: `
        <p>
          Una palabra de la pista puede sustituirse
          por un sinónimo.
        </p>

        <div class="lesson-example">
          <strong>Clave</strong>
          La definición puede pedir una palabra
          equivalente sin decirla directamente.
        </div>
      `

    },


    container: {

      title:
        "Containers",

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

      title:
        "Homófonos",

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

      title:
        "Traducciones",

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

      title:
        "Doble definición",

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

      title:
        "Rebuses",

      content: `
        <p>
          Los rebuses juegan con símbolos, letras,
          posiciones o representaciones visuales.
        </p>

        <div class="lesson-example">
          <strong>Más raro = más atención</strong>
          Acá la pista puede estar hablando de
          cómo se presenta una palabra.
        </div>
      `

    }

  };


  function openLesson(
    id
  ) {

    const lesson =
      LESSONS[id];


    if (!lesson) {
      return;
    }


    $("#lessonEyebrow")
      .textContent =
      "LECCIÓN";


    $("#lessonTitle")
      .textContent =
      lesson.title;


    $("#lessonContent")
      .innerHTML =
      lesson.content;


    $("#lessonCloseBtn")
      .textContent =
      "Entendido";


    openModal(
      lessonModal
    );

  }


  /* =======================================================
     MODALES
  ======================================================= */

  function openModal(
    modal
  ) {

    modal.classList.remove(
      "hidden"
    );

  }


  function closeModal(
    modal
  ) {

    modal.classList.add(
      "hidden"
    );

  }


  function bindModalCloseButtons() {

    $$("[data-close]")
      .forEach(
        button => {

          button.addEventListener(
            "click",
            () => {

              const id =
                button.dataset.close;


              const modal =
                document.getElementById(
                  id
                );


              if (modal) {

                closeModal(
                  modal
                );

              }

            }
          );

        }
      );


    $$(".modal")
      .forEach(
        modal => {

          modal.addEventListener(
            "click",
            event => {

              if (
                event.target ===
                modal
              ) {

                closeModal(
                  modal
                );

              }

            }
          );

        }
      );

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
      () =>
        showScreen(
          learnScreen
        )
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

        closeModal(
          resultModal
        );

        if (testMode) {
          openTestModeModal();
        } else {
          goHome();
        }

      }
    );


    statsBtn.addEventListener(
      "click",
      showStats
    );


    $("#lessonCloseBtn")
      .addEventListener(
        "click",
        () =>
          closeModal(
            lessonModal
          )
      );


    $$(".key")
      .forEach(
        key => {

          key.addEventListener(
            "click",
            () =>
              handleKeyboardKey(
                key
              )
          );

        }
      );


    $$(".hint-option")
      .forEach(
        button => {

          button.addEventListener(
            "click",
            () =>
              useHint(
                button.dataset.hint
              )
          );

        }
      );


    $$(".lesson-btn")
      .forEach(
        button => {

          button.addEventListener(
            "click",
            () =>
              openLesson(
                button.dataset.lesson
              )
          );

        }
      );


    bindModalCloseButtons();


    /*
      TECLADO FÍSICO
    */

    document.addEventListener(
      "keydown",
      event => {

        if (
          state.finished
        ) {

          return;

        }


        const key =
          event.key.toUpperCase();


        if (
          /^[A-ZÑ]$/.test(key)
        ) {

          event.preventDefault();

          addLetter(
            key
          );

          return;

        }


        if (
          event.key ===
          "Backspace"
        ) {

          event.preventDefault();

          removeLetter();

          return;

        }


        if (
          event.key ===
          "Enter"
        ) {

          event.preventDefault();

          checkAnswer();

        }

      }
    );


    /*
      ESC PARA CERRAR MODALES
    */

    document.addEventListener(
      "keydown",
      event => {

        if (
          event.key !==
          "Escape"
        ) {

          return;

        }


        $$(".modal")
          .forEach(
            modal => {

              if (
                !modal.classList.contains(
                  "hidden"
                )
              ) {

                closeModal(
                  modal
                );

              }

            }
          );

      }
    );

  }


  /* =======================================================
     MODO PRUEBA — INTERFAZ
  ======================================================= */

  function createTestModeUI() {

    if (testUIReady) {
      return;
    }


    const button =
      document.createElement(
        "button"
      );


    button.id =
      "testModeBtn";


    button.type =
      "button";


    button.textContent =
      "🧪 Modo prueba";


    Object.assign(
      button.style,
      {
        display: "block",
        width: "100%",
        marginTop: "12px",
        padding: "12px 16px",
        border: "3px solid #111",
        borderRadius: "14px",
        background: "#ffd6e7",
        color: "#111",
        fontWeight: "800",
        fontSize: "15px",
        cursor: "pointer",
        boxSizing: "border-box"
      }
    );


    if (
      playBtn?.parentElement
    ) {

      playBtn.parentElement.appendChild(
        button
      );

    }


    const modal =
      document.createElement(
        "div"
      );


    modal.id =
      "testModeModal";


    modal.className =
      "modal hidden";


    Object.assign(
      modal.style,
      {
        position: "fixed",
        inset: "0",
        zIndex: "9999",
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "rgba(0,0,0,.55)",
        boxSizing: "border-box"
      }
    );


    modal.innerHTML = `
      <div style="
        width:min(520px,100%);
        max-height:90vh;
        overflow:auto;
        background:#fff;
        color:#111;
        border:4px solid #111;
        border-radius:24px;
        padding:24px;
        box-sizing:border-box;
        box-shadow:8px 8px 0 #111;
      ">

        <div style="
          font-size:13px;
          font-weight:900;
          letter-spacing:.08em;
          margin-bottom:6px;
        ">
          🧪 MODO PRUEBA
        </div>


        <h2 style="
          margin:0 0 8px;
          font-size:28px;
        ">
          Probá cualquier pista
        </h2>


        <p style="
          margin:0 0 18px;
          line-height:1.45;
        ">
          Este modo no cambia tu racha,
          estadísticas ni puzzle del día.
        </p>


        <label
          for="testPasswordInput"
          style="
            display:block;
            font-weight:800;
            margin-bottom:7px;
          "
        >
          Contraseña
        </label>


        <input
          id="testPasswordInput"
          type="password"
          inputmode="numeric"
          autocomplete="off"
          placeholder="Ingresá la contraseña"
          style="
            width:100%;
            padding:13px 14px;
            border:3px solid #111;
            border-radius:12px;
            font-size:17px;
            box-sizing:border-box;
            margin-bottom:10px;
          "
        />


        <div
          id="testPasswordError"
          style="
            display:none;
            color:#b00020;
            font-weight:800;
            margin:6px 0 12px;
          "
        >
          Contraseña incorrecta.
        </div>


        <button
          id="testPasswordBtn"
          type="button"
          style="
            width:100%;
            padding:13px 16px;
            border:3px solid #111;
            border-radius:12px;
            background:#ffe66d;
            color:#111;
            font-weight:900;
            font-size:16px;
            cursor:pointer;
          "
        >
          Entrar
        </button>


        <div
          id="testPuzzleChooser"
          style="
            display:none;
            margin-top:22px;
          "
        >

          <label
            for="testPuzzleSelect"
            style="
              display:block;
              font-weight:800;
              margin-bottom:7px;
            "
          >
            Elegí una pista
          </label>


          <select
            id="testPuzzleSelect"
            style="
              width:100%;
              padding:13px 14px;
              border:3px solid #111;
              border-radius:12px;
              font-size:15px;
              background:#fff;
              box-sizing:border-box;
            "
          ></select>


          <button
            id="testOpenPuzzleBtn"
            type="button"
            style="
              width:100%;
              padding:13px 16px;
              margin-top:10px;
              border:3px solid #111;
              border-radius:12px;
              background:#bde0fe;
              color:#111;
              font-weight:900;
              font-size:16px;
              cursor:pointer;
            "
          >
            Probar esta pista
          </button>


          <button
            id="testCancelBtn"
            type="button"
            style="
              width:100%;
              padding:11px 16px;
              margin-top:8px;
              border:0;
              border-radius:12px;
              background:transparent;
              color:#111;
              font-weight:800;
              font-size:15px;
              cursor:pointer;
            "
          >
            Cancelar
          </button>

        </div>

      </div>
    `;


    document.body.appendChild(
      modal
    );


    const passwordInput =
      $("#testPasswordInput");


    const passwordBtn =
      $("#testPasswordBtn");


    const passwordError =
      $("#testPasswordError");


    const chooser =
      $("#testPuzzleChooser");


    const puzzleSelect =
      $("#testPuzzleSelect");


    const openPuzzleBtn =
      $("#testOpenPuzzleBtn");


    const cancelBtn =
      $("#testCancelBtn");


    function unlockTestMode() {

      if (
        passwordInput.value.trim() !==
        "1999"
      ) {

        passwordError.style.display =
          "block";


        passwordInput.focus();

        passwordInput.select();

        return;

      }


      passwordError.style.display =
        "none";


      chooser.style.display =
        "block";


      passwordInput.style.display =
        "none";


      passwordBtn.style.display =
        "none";


      populateTestPuzzleSelect();

      puzzleSelect.focus();

    }


    passwordBtn.addEventListener(
      "click",
      unlockTestMode
    );


    passwordInput.addEventListener(
      "keydown",
      event => {

        if (
          event.key ===
          "Enter"
        ) {

          event.preventDefault();

          unlockTestMode();

        }

      }
    );


    openPuzzleBtn.addEventListener(
      "click",
      () => {

        const index =
          Number(
            puzzleSelect.value
          );


        if (
          !Number.isInteger(index) ||
          !PUZZLES[index]
        ) {

          return;

        }


        closeTestModeModal();

        enterTestMode(
          PUZZLES[index]
        );

      }
    );


    cancelBtn.addEventListener(
      "click",
      closeTestModeModal
    );


    modal.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          modal
        ) {

          closeTestModeModal();

        }

      }
    );


    button.addEventListener(
      "click",
      openTestModeModal
    );


    testUIReady =
      true;

  }


  function populateTestPuzzleSelect() {

    const select =
      $("#testPuzzleSelect");


    if (
      !select ||
      !Array.isArray(PUZZLES)
    ) {

      return;

    }


    select.innerHTML =
      "";


    PUZZLES.forEach(
      (puzzle, index) => {

        const option =
          document.createElement(
            "option"
          );


        option.value =
          String(index);


        const difficulty =
          String(
            puzzle.difficulty ||
            "medium"
          );


        const mechanism =
          Array.isArray(
            puzzle.mechanisms
          )
            ? puzzle.mechanisms.join(
                ", "
              )
            : "";


        option.textContent =
          `${index + 1}. ` +
          `${puzzle.id || "puzzle"} — ` +
          `${difficulty}` +
          (
            mechanism
              ? ` — ${mechanism}`
              : ""
          );


        select.appendChild(
          option
        );

      }
    );

  }


  function resetTestPasswordForm() {

    const passwordInput =
      $("#testPasswordInput");


    const passwordBtn =
      $("#testPasswordBtn");


    const passwordError =
      $("#testPasswordError");


    const chooser =
      $("#testPuzzleChooser");


    if (
      passwordInput
    ) {

      passwordInput.value =
        "";


      passwordInput.style.display =
        "";

    }


    if (
      passwordBtn
    ) {

      passwordBtn.style.display =
        "";

    }


    if (
      passwordError
    ) {

      passwordError.style.display =
        "none";

    }


    if (
      chooser
    ) {

      chooser.style.display =
        "none";

    }

  }


  function openTestModeModal() {

    const modal =
      $("#testModeModal");


    if (!modal) {
      return;
    }


    resetTestPasswordForm();


    modal.classList.remove(
      "hidden"
    );


    modal.style.display =
      "flex";


    setTimeout(
      () =>
        $("#testPasswordInput")?.focus(),
      50
    );

  }


  function closeTestModeModal() {

    const modal =
      $("#testModeModal");


    if (!modal) {
      return;
    }


    modal.classList.add(
      "hidden"
    );


    modal.style.display =
      "none";

  }


  function enterTestMode(
    puzzle
  ) {

    if (!puzzle) {
      return;
    }


    realStateBackup =
      JSON.parse(
        JSON.stringify(
          state
        )
      );


    testMode =
      true;


    state = {

      ...state,

      currentPuzzleId:
        puzzle.id,

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

      }

    };


    stopTimer();


    renderPuzzle(
      puzzle
    );


    showScreen(
      gameScreen
    );


    setTestBadge(
      true
    );

  }


  function exitTestMode() {

    stopTimer();


    closeModal(
      resultModal
    );


    closeModal(
      hintModal
    );


    testMode =
      false;


    if (
      realStateBackup
    ) {

      state =
        realStateBackup;

    }


    realStateBackup =
      null;


    setTestBadge(
      false
    );


    updateHome();


    showScreen(
      homeScreen
    );

  }


  function setTestBadge(
    visible
  ) {

    let badge =
      $("#testModeBadge");


    if (!badge) {

      badge =
        document.createElement(
          "div"
        );


      badge.id =
        "testModeBadge";


      Object.assign(
        badge.style,
        {

          display: "none",

          width: "fit-content",

          margin:
            "0 auto 10px",

          padding:
            "6px 11px",

          border:
            "2px solid #111",

          borderRadius:
            "999px",

          background:
            "#ffd6e7",

          color:
            "#111",

          fontSize:
            "12px",

          fontWeight:
            "900",

          letterSpacing:
            ".05em",

          boxSizing:
            "border-box"

        }
      );


      if (
        gameScreen
      ) {

        gameScreen.prepend(
          badge
        );

      }

    }


    badge.style.display =
      visible
        ? "block"
        : "none";

  }


  /* =======================================================
     SEGURIDAD
  ======================================================= */

  function escapeHTML(
    value
  ) {

    return String(value)
      .replaceAll(
        "&",
        "&amp;"
      )
      .replaceAll(
        "<",
        "&lt;"
      )
      .replaceAll(
        ">",
        "&gt;"
      )
      .replaceAll(
        '"',
        "&quot;"
      )
      .replaceAll(
        "'",
        "&#039;"
      );

  }


  /* =======================================================
     ARRANQUE
  ======================================================= */

  init();

})();
