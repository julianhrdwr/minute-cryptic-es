const PUZZLES = [

  /* =====================================================
     01 — ANAGRAMA
  ===================================================== */

  {
    id: "d001",
    difficulty: "medio",
    clue: "El trato, revuelto, acabó convertido en postre. (5)",
    answer: "TORTA",
    mechanisms: ["anagram"],
    definition: "postre",
    fodder: "trato",
    indicators: ["revuelto"],
    explanation:
      "«Postre» es la definición. «trato» es el fodder y «revuelto» indica que hay que reordenar sus letras: TRATO → TORTA."
  },


  /* =====================================================
     02 — ANAGRAMA
  ===================================================== */

  {
    id: "d002",
    difficulty: "medio",
    clue: "El saco, desordenado, terminó siendo un asunto. (4)",
    answer: "CASO",
    mechanisms: ["anagram"],
    definition: "asunto",
    fodder: "saco",
    indicators: ["desordenado"],
    explanation:
      "«Asunto» define CASO. Las letras de «saco», al estar «desordenado», forman CASO."
  },


  /* =====================================================
     03 — ANAGRAMA
  ===================================================== */

  {
    id: "d003",
    difficulty: "medio+",
    clue: "El trapo, alterado, anuncia un nacimiento. (5)",
    answer: "PARTO",
    mechanisms: ["anagram"],
    definition: "nacimiento",
    fodder: "trapo",
    indicators: ["alterado"],
    explanation:
      "«Nacimiento» es la definición. TRAPO alterado puede reorganizarse como PARTO."
  },


  /* =====================================================
     04 — ANAGRAMA
  ===================================================== */

  {
    id: "d004",
    difficulty: "medio+",
    clue: "Parte del calzado que sale de un canto revuelto. (5)",
    answer: "TACON",
    mechanisms: ["anagram"],
    definition: "Parte del calzado",
    fodder: "canto",
    indicators: ["revuelto"],
    explanation:
      "La definición es «Parte del calzado». Las letras de CANTO, revueltas, forman TACON: CANTO → TACON."
  },


  /* =====================================================
     05 — ANAGRAMA
  ===================================================== */

  {
    id: "d005",
    difficulty: "medio",
    clue: "Comienza a existir cuando la cena se desordena. (4)",
    answer: "NACE",
    mechanisms: ["anagram"],
    definition: "Comienza a existir",
    fodder: "cena",
    indicators: ["desordena"],
    explanation:
      "«Comienza a existir» define NACE. CENA desordenada produce NACE."
  },


  /* =====================================================
     06 — ANAGRAMA
  ===================================================== */

  {
    id: "d006",
    difficulty: "medio+",
    clue: "Adorno antiguo del cuello que nace de un lago revuelto. (4)",
    answer: "GOLA",
    mechanisms: ["anagram"],
    definition: "Adorno antiguo del cuello",
    fodder: "lago",
    indicators: ["revuelto"],
    explanation:
      "GOLA es un adorno o pieza que se llevaba alrededor del cuello. Se obtiene reordenando LAGO."
  },


  /* =====================================================
     07 — ANAGRAMA
  ===================================================== */

  {
    id: "d007",
    difficulty: "medio",
    clue: "Cubierta que aparece cuando una pata se desordena. (4)",
    answer: "TAPA",
    mechanisms: ["anagram"],
    definition: "Cubierta",
    fodder: "pata",
    indicators: ["desordena"],
    explanation:
      "«Cubierta» define TAPA. Las letras de PATA, desordenadas, forman TAPA."
  },


  /* =====================================================
     08 — ANAGRAMA
  ===================================================== */

  {
    id: "d008",
    difficulty: "medio+",
    clue: "Retira, si la casa se revuelve. (4)",
    answer: "SACA",
    mechanisms: ["anagram"],
    definition: "Retira",
    fodder: "casa",
    indicators: ["revuelve"],
    explanation:
      "«Retira» es la definición verbal: SACA. CASA revuelta da SACA."
  },


  /* =====================================================
     09 — REVERSAL
  ===================================================== */

  {
    id: "d009",
    difficulty: "medio+",
    clue: "Ciudad del norte que aparece cuando el atlas vuelve sobre sus pasos. (5)",
    answer: "SALTA",
    mechanisms: ["reversal"],
    definition: "Ciudad del norte",
    fodder: "atlas",
    indicators: ["vuelve"],
    explanation:
      "La definición es «Ciudad del norte». Al invertir ATLAS obtenemos SALTA."
  },


  /* =====================================================
     10 — REVERSAL
  ===================================================== */

  {
    id: "d010",
    difficulty: "medio+",
    clue: "Agarrar, si la risa vuelve sobre sí misma. (4)",
    answer: "ASIR",
    mechanisms: ["reversal"],
    definition: "Agarrar",
    fodder: "risa",
    indicators: ["vuelve"],
    explanation:
      "ASIR significa agarrar. RISA leída al revés produce ASIR."
  },


  /* =====================================================
     11 — REVERSAL
  ===================================================== */

  {
    id: "d011",
    difficulty: "medio+",
    clue: "Animal de fama astuta, si el arroz vuelve sobre sus pasos. (5)",
    answer: "ZORRA",
    mechanisms: ["reversal"],
    definition: "Animal de fama astuta",
    fodder: "arroz",
    indicators: ["vuelve"],
    explanation:
      "ARROZ leído de derecha a izquierda forma ZORRA. «Animal de fama astuta» es la definición."
  },


  /* =====================================================
     12 — DELETION
  ===================================================== */

  {
    id: "d012",
    difficulty: "medio",
    clue: "Metal precioso que queda si al loro le falta la cabeza. (3)",
    answer: "ORO",
    mechanisms: ["deletion"],
    definition: "Metal precioso",
    fodder: "loro",
    indicators: ["falta la cabeza"],
    explanation:
      "Quitamos la primera letra de LORO: L + ORO → ORO. La definición es «Metal precioso»."
  },


  /* =====================================================
     13 — DELETION
  ===================================================== */

  {
    id: "d013",
    difficulty: "medio+",
    clue: "Instrumento que queda cuando el barco pierde la cabeza. (4)",
    answer: "ARCO",
    mechanisms: ["deletion"],
    definition: "Instrumento",
    fodder: "barco",
    indicators: ["pierde la cabeza"],
    explanation:
      "BARCO sin su primera letra queda ARCO, que es un instrumento musical."
  },


  /* =====================================================
     14 — DELETION
  ===================================================== */

  {
    id: "d014",
    difficulty: "medio",
    clue: "Elevado, si a un salto le quitan el principio. (4)",
    answer: "ALTO",
    mechanisms: ["deletion"],
    definition: "Elevado",
    fodder: "salto",
    indicators: ["quitan el principio"],
    explanation:
      "SALTO sin su primera letra, S, queda ALTO. «Elevado» funciona como definición."
  },


  /* =====================================================
     15 — DELETION
  ===================================================== */

  {
    id: "d015",
    difficulty: "medio+",
    clue: "Parte de un árbol que pierde la primera letra de un drama. (4)",
    answer: "RAMA",
    mechanisms: ["deletion"],
    definition: "Parte de un árbol",
    fodder: "drama",
    indicators: ["pierde la primera letra"],
    explanation:
      "DRAMA sin su primera letra, D, queda RAMA. La definición es «Parte de un árbol»."
  },


  /* =====================================================
     16 — DELETION
  ===================================================== */

  {
    id: "d016",
    difficulty: "medio+",
    clue: "Momento breve que queda si un trato pierde su primera letra. (4)",
    answer: "RATO",
    mechanisms: ["deletion"],
    definition: "Momento breve",
    fodder: "trato",
    indicators: ["pierde su primera letra"],
    explanation:
      "TRATO sin la T inicial produce RATO. «Momento breve» define RATO."
  },


  /* =====================================================
     17 — HIDDEN
  ===================================================== */

  {
    id: "d017",
    difficulty: "medio+",
    clue: "Madera apreciada que aparece dentro de la biblioteca. (4)",
    answer: "TECA",
    mechanisms: ["hidden"],
    definition: "Madera apreciada",
    fodder: "biblioteca",
    indicators: ["dentro de"],
    explanation:
      "TECA está escondida dentro de biblioTECA. «Madera apreciada» es la definición."
  },


  /* =====================================================
     18 — HIDDEN
  ===================================================== */

  {
    id: "d018",
    difficulty: "medio+",
    clue: "Comida nocturna que el director dejó escondida en el escenario. (4)",
    answer: "CENA",
    mechanisms: ["hidden"],
    definition: "Comida nocturna",
    fodder: "escenario",
    indicators: ["escondida en"],
    explanation:
      "CENA aparece consecutivamente dentro de ES CENA RIO. La palabra está escondida en «escenario»."
  },


  /* =====================================================
     19 — HIDDEN
  ===================================================== */

  {
    id: "d019",
    difficulty: "medio+",
    clue: "Fuente de luz que una novela guarda en silencio. (4)",
    answer: "VELA",
    mechanisms: ["hidden"],
    definition: "Fuente de luz",
    fodder: "novela",
    indicators: ["guarda"],
    explanation:
      "VELA está escondida dentro de noVELA. Puede ser una fuente de luz."
  },


  /* =====================================================
     20 — HIDDEN
  ===================================================== */

  {
    id: "d020",
    difficulty: "medio+",
    clue: "Curso de agua que el periodista dejó oculto en el escenario. (3)",
    answer: "RIO",
    mechanisms: ["hidden"],
    definition: "Curso de agua",
    fodder: "escenario",
    indicators: ["oculto en"],
    explanation:
      "RIO aparece al final de esCENARIO. «Curso de agua» es la definición."
  },


  /* =====================================================
     21 — CONTAINER
  ===================================================== */

  {
    id: "d021",
    difficulty: "medio+",
    clue: "Metal que hace sitio a una L dentro de una pata. (5)",
    answer: "PLATA",
    mechanisms: ["container"],
    definition: "Metal",
    fodder: "pata",
    indicators: ["dentro"],
    explanation:
      "PATA contiene una L: P + L + ATA = PLATA. «Metal» es la definición."
  },


  /* =====================================================
     22 — CONTAINER
  ===================================================== */

  {
    id: "d022",
    difficulty: "medio+",
    clue: "Utensilio que recibe una L dentro de un pato. (5)",
    answer: "PLATO",
    mechanisms: ["container"],
    definition: "Utensilio",
    fodder: "pato",
    indicators: ["dentro"],
    explanation:
      "Introduciendo L en PATO obtenemos PLATO. «Utensilio» es la definición."
  },


  /* =====================================================
     23 — CONTAINER
  ===================================================== */

  {
    id: "d023",
    difficulty: "medio+",
    clue: "Viento suave que deja entrar una B en la risa. (5)",
    answer: "BRISA",
    mechanisms: ["container"],
    definition: "Viento suave",
    fodder: "risa",
    indicators: ["deja entrar"],
    explanation:
      "RISA recibe una B al principio: B + RISA = BRISA. «Viento suave» es la definición."
  },


  /* =====================================================
     24 — CONTAINER
  ===================================================== */

  {
    id: "d024",
    difficulty: "medio+",
    clue: "Apuro que aparece cuando una P entra en la risa. (5)",
    answer: "PRISA",
    mechanisms: ["container"],
    definition: "Apuro",
    fodder: "risa",
    indicators: ["entra"],
    explanation:
      "RISA recibe una P al principio y forma PRISA. «Apuro» es la definición."
  },


  /* =====================================================
     25 — HOMÓFONO
  ===================================================== */

  {
    id: "d025",
    difficulty: "medio+",
    clue: "Bonito, según suena aquello que cubre la piel. (5)",
    answer: "BELLO",
    mechanisms: ["homophone"],
    definition: "Bonito",
    fodder: "vello",
    indicators: ["según suena"],
    explanation:
      "«Bonito» define BELLO. La palabra «vello», aquello que cubre la piel, suena como BELLO."
  },


  /* =====================================================
     26 — HOMÓFONO
  ===================================================== */

  {
    id: "d026",
    difficulty: "medio+",
    clue: "Se vino abajo, al oído, como si alguien hubiera guardado silencio. (4)",
    answer: "CAYO",
    mechanisms: ["homophone"],
    definition: "Se vino abajo",
    fodder: "calló",
    indicators: ["al oído"],
    explanation:
      "CAYÓ significa «se vino abajo». Suena igual que CALLÓ, que significa que alguien guardó silencio."
  },


  /* =====================================================
     27 — DOBLE DEFINICIÓN
  ===================================================== */

  {
    id: "d027",
    difficulty: "medio+",
    clue: "Puede servir para sentarse o para guardar dinero. (5)",
    answer: "BANCO",
    mechanisms: ["double-definition"],
    definition: "Puede servir para sentarse",
    fodder: "",
    indicators: [],
    explanation:
      "BANCO tiene dos definiciones: puede ser un asiento y también una institución donde se guarda o administra dinero."
  },


  /* =====================================================
     28 — DOBLE DEFINICIÓN
  ===================================================== */

  {
    id: "d028",
    difficulty: "medio+",
    clue: "Puede cortar un tronco o atravesar una cordillera. (6)",
    answer: "SIERRA",
    mechanisms: ["double-definition"],
    definition: "Puede cortar un tronco",
    fodder: "",
    indicators: [],
    explanation:
      "SIERRA tiene dos sentidos: es una herramienta para cortar y también una formación montañosa o cordillera."
  },


  /* =====================================================
     29 — DOBLE DEFINICIÓN
  ===================================================== */

  {
    id: "d029",
    difficulty: "medio+",
    clue: "Se abre con una mano y también puede resolver un misterio. (5)",
    answer: "LLAVE",
    mechanisms: ["double-definition"],
    definition: "Se abre con una mano",
    fodder: "",
    indicators: [],
    explanation:
      "LLAVE puede ser el objeto con el que abrimos una cerradura y también aquello que proporciona la solución o clave para resolver algo."
  },


  /* =====================================================
     30 — DOBLE DEFINICIÓN
  ===================================================== */

  {
    id: "d030",
    difficulty: "medio+",
    clue: "Vive en una maceta y también puede ocupar un edificio. (6)",
    answer: "PLANTA",
    mechanisms: ["double-definition"],
    definition: "Vive en una maceta",
    fodder: "",
    indicators: [],
    explanation:
      "PLANTA tiene dos sentidos: un vegetal que puede vivir en una maceta y cada uno de los niveles de un edificio."
  }

];
