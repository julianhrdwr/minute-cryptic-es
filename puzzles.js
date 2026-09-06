// Banco de 356 pistas — revisión criptográfica v5.
const MECHANISM_INDICATORS = {
  "anagram": [
    "perdió el rumbo",
    "cambió de lugar",
    "se mezcló",
    "salió desordenado",
    "mudó de sitio"
  ],
  "hidden": [
    "sin llamar la atención",
    "sin hacerse notar",
    "a escondidas",
    "perdido en",
    "entre líneas"
  ],
  "deletion": [
    "queda sin",
    "pierde",
    "deja atrás",
    "se desprende de"
  ],
  "reversal": [
    "vuelve sobre sus pasos",
    "se da vuelta",
    "al volver",
    "mira al revés"
  ],
  "charade": [
    "junto a",
    "al lado de",
    "después de",
    "pegado a"
  ],
  "container": [
    "abraza",
    "encierra",
    "lleva dentro",
    "rodea"
  ],
  "initials": [
    "de entrada",
    "al principio",
    "por sus inicios",
    "en sus comienzos"
  ],
  "finals": [
    "por el final",
    "en los remates",
    "por sus finales"
  ],
  "homophone": [
    "al oído",
    "por cómo suena",
    "dicho en voz alta"
  ],
  "substitution": [
    "cambia una letra",
    "reemplaza una letra",
    "corrige una letra"
  ]
};
const ANAGRAM_INDICATORS = MECHANISM_INDICATORS.anagram;

const PUZZLES = [
  {
    "id": "d001",
    "difficulty": "muy-dificil",
    "clue": "Abertura: cabo perdió el orden antes de la escena. (4)",
    "answer": "BOCA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Abertura",
    "fodder": "CABO",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de CABO = BOCA.",
    "_def": "Abertura para comer o hablar"
  },
  {
    "id": "d002",
    "difficulty": "experto",
    "clue": "Puede ser una partida; fuego cambia una letra: f por j. (5)",
    "answer": "JUEGO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Puede ser una partida",
    "fodder": "FUEGO",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "FUEGO cambia F por J = JUEGO.",
    "_def": "Actividad con reglas"
  },
  {
    "id": "d003",
    "difficulty": "muy-dificil",
    "clue": "Voz emitida con fuerza; gira revisa Inés todo otra, de entrada, dicen más de lo que parece. (5)",
    "answer": "GRITO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Voz emitida con fuerza",
    "fodder": "gira revisa Inés todo otra",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «gira revisa Inés todo otra» forman GRITO.",
    "_def": "Voz lanzada con fuerza"
  },
  {
    "id": "d004",
    "difficulty": "dificil",
    "clue": "Animal capturado: peras perdió el rumbo antes de llegar. (5)",
    "answer": "PRESA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Animal capturado",
    "fodder": "peras",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de PERAS = PRESA.",
    "_def": "Animal capturado"
  },
  {
    "id": "d005",
    "difficulty": "dificil",
    "clue": "Material que retiene partículas; fuera indica la todo resulta obviamente, de entrada, dicen más de lo que parece. (6)",
    "answer": "FILTRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Material que retiene partículas",
    "fodder": "fuera indica la todo resulta obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «fuera indica la todo resulta obviamente» forman FILTRO.",
    "_def": "Lo que deja pasar una parte"
  },
  {
    "id": "d006",
    "difficulty": "muy-dificil",
    "clue": "Pequeño roedor; RATONES queda sin S antes de seguir. (5)",
    "answer": "RATON",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pequeño roedor",
    "fodder": "RATONES",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de RATONES para obtener RATON.",
    "_def": "Pequeño roedor"
  },
  {
    "id": "d007",
    "difficulty": "dificil",
    "clue": "Pieza de la dentadura; se cuela en expediente cerrado ayer, sin llamar la atención. (6)",
    "answer": "DIENTE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Pieza de la dentadura",
    "fodder": "DIENTE",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "DIENTE aparece oculto en «expediente cerrado ayer».",
    "_def": "Pieza de la boca"
  },
  {
    "id": "d008",
    "difficulty": "dificil",
    "clue": "Parte de un recorrido; TRAMOS queda sin S antes de seguir. (5)",
    "answer": "TRAMO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte de un recorrido",
    "fodder": "TRAMOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de TRAMOS para obtener TRAMO.",
    "_def": "Parte de un recorrido"
  },
  {
    "id": "d009",
    "difficulty": "experto",
    "clue": "Prenda de vestir; FALDAS queda sin S antes de seguir. (5)",
    "answer": "FALDA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Prenda de vestir",
    "fodder": "FALDAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de FALDAS para obtener FALDA.",
    "_def": "Prenda que cuelga desde la cintura"
  },
  {
    "id": "d010",
    "difficulty": "dificil",
    "clue": "Lugar por donde se sale, perdido en salidas, sin llamar la atención. (6)",
    "answer": "SALIDA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Lugar por donde se sale",
    "fodder": "salida",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "SALIDA aparece oculto en salidas.",
    "_def": "Lugar por donde se sale"
  },
  {
    "id": "d011",
    "difficulty": "muy-dificil",
    "clue": "Objeto para mejorar la visión; gira Ana finalmente Ayer solo, de entrada, dicen más de lo que parece. (5)",
    "answer": "GAFAS",
    "mechanisms": [
      "initials"
    ],
    "definition": "Objeto para mejorar la visión",
    "fodder": "gira Ana finalmente Ayer solo",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «gira Ana finalmente Ayer solo» forman GAFAS.",
    "_def": "Objeto para mejorar la visión"
  },
  {
    "id": "d012",
    "difficulty": "muy-dificil",
    "clue": "Bolsa: ocas perdió el orden antes de la escena. (4)",
    "answer": "SACO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Bolsa",
    "fodder": "OCAS",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de OCAS = SACO.",
    "_def": "Bolsa de tela"
  },
  {
    "id": "d013",
    "difficulty": "experto",
    "clue": "Importa en la balanza; PESOS queda sin S antes de seguir. (4)",
    "answer": "PESO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Importa en la balanza",
    "fodder": "PESOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PESOS para obtener PESO.",
    "_def": "Medida de gravedad"
  },
  {
    "id": "d014",
    "difficulty": "experto",
    "clue": "Poder sobre algo; durante otra mientras Inés nadie indica observa, de entrada, dicen más de lo que parece. (7)",
    "answer": "DOMINIO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Poder sobre algo",
    "fodder": "durante otra mientras Inés nadie indica observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «durante otra mientras Inés nadie indica observa» forman DOMINIO.",
    "_def": "Control o ámbito"
  },
  {
    "id": "d015",
    "difficulty": "muy-dificil",
    "clue": "Comunicación de advertencia; Ayer vino Inés sin objeciones, de entrada, dejan la respuesta escondida. (5)",
    "answer": "AVISO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Comunicación de advertencia",
    "fodder": "Ayer vino Inés sin objeciones",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Ayer vino Inés sin objeciones» forman AVISO.",
    "_def": "Comunicación breve"
  },
  {
    "id": "d016",
    "difficulty": "experto",
    "clue": "Camino más corto; Ayer tal Ahora juzga obviamente, de entrada, dicen más de lo que parece. (5)",
    "answer": "ATAJO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Camino más corto",
    "fodder": "Ayer tal Ahora juzga obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Ayer tal Ahora juzga obviamente» forman ATAJO.",
    "_def": "Camino más corto"
  },
  {
    "id": "d017",
    "difficulty": "muy-dificil",
    "clue": "Peso transportado; CARGAS queda sin S antes de seguir. (5)",
    "answer": "CARGA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Peso transportado",
    "fodder": "CARGAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de CARGAS para obtener CARGA.",
    "_def": "Peso que se transporta"
  },
  {
    "id": "d018",
    "difficulty": "experto",
    "clue": "Torre que guía a los barcos; nota musical, ro como rumor, abreviado. (4)",
    "answer": "FARO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Torre que guía a los barcos",
    "fodder": "nota musical",
    "indicators": [
      "como"
    ],
    "explanation": "FA+RO=FARO",
    "_def": "Torre luminosa"
  },
  {
    "id": "d019",
    "difficulty": "muy-dificil",
    "clue": "Sustancia de las abejas; centro, abreviado, ra como rango, abreviado. (4)",
    "answer": "CERA",
    "mechanisms": [
      "charade"
    ],
    "definition": "Sustancia de las abejas",
    "fodder": "centro",
    "indicators": [
      "como"
    ],
    "explanation": "CE+RA=CERA",
    "_def": "Sustancia de velas"
  },
  {
    "id": "d020",
    "difficulty": "muy-dificil",
    "clue": "Trozo de madera; padre, abreviado, lo como pronombre. (4)",
    "answer": "PALO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Trozo de madera",
    "fodder": "padre",
    "indicators": [
      "como"
    ],
    "explanation": "PA+LO=PALO",
    "_def": "Barra de madera"
  },
  {
    "id": "d021",
    "difficulty": "dificil",
    "clue": "Color de la sangre; ROJOS queda sin S antes de seguir. (4)",
    "answer": "ROJO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Color de la sangre",
    "fodder": "ROJOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de ROJOS para obtener ROJO.",
    "_def": "Color de señal de peligro"
  },
  {
    "id": "d022",
    "difficulty": "experto",
    "clue": "Animal del desierto; con Apenas muy esa la la otro, de entrada, dicen más de lo que parece. (7)",
    "answer": "CAMELLO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Animal del desierto",
    "fodder": "con Apenas muy esa la la otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «con Apenas muy esa la la otro» forman CAMELLO.",
    "_def": "Mamífero de joroba"
  },
  {
    "id": "d023",
    "difficulty": "experto",
    "clue": "Información concreta; DATOS queda sin S antes de seguir. (4)",
    "answer": "DATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Información concreta",
    "fodder": "DATOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de DATOS para obtener DATO.",
    "_def": "Información concreta"
  },
  {
    "id": "d024",
    "difficulty": "muy-dificil",
    "clue": "Desafío; nota musical, to como tocado, abreviado. (4)",
    "answer": "RETO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Desafío",
    "fodder": "nota musical",
    "indicators": [
      "como"
    ],
    "explanation": "RE+TO=RETO",
    "_def": "Desafío"
  },
  {
    "id": "d025",
    "difficulty": "muy-dificil",
    "clue": "Animal doméstico: toga perdió el orden antes de la escena. (4)",
    "answer": "GATO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Animal doméstico",
    "fodder": "TOGA",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de TOGA = GATO.",
    "_def": "Felino doméstico"
  },
  {
    "id": "d026",
    "difficulty": "experto",
    "clue": "Satélite natural de la Tierra; se cuela en la luna apareció, sin llamar la atención. (4)",
    "answer": "LUNA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Satélite natural de la Tierra",
    "fodder": "LUNA",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "LUNA aparece oculto en «la luna apareció».",
    "_def": "Satélite natural"
  },
  {
    "id": "d027",
    "difficulty": "experto",
    "clue": "Fuera de la ciudad hay uno; cierra Ayer mientras por otro, de entrada, dicen más de lo que parece. (5)",
    "answer": "CAMPO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Fuera de la ciudad hay uno",
    "fodder": "cierra Ayer mientras por otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «cierra Ayer mientras por otro» forman CAMPO.",
    "_def": "Terreno abierto"
  },
  {
    "id": "d028",
    "difficulty": "dificil",
    "clue": "Magnitud que ordena los sucesos; tiempos queda sin s antes de seguir. (6)",
    "answer": "TIEMPO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Magnitud que ordena los sucesos",
    "fodder": "tiempos",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de TIEMPOS para obtener TIEMPO.",
    "_def": "Tiempo"
  },
  {
    "id": "d029",
    "difficulty": "dificil",
    "clue": "Espacio reservado en un teatro; Pablo abrió lentamente cada objeto, de entrada, dejan la respuesta escondida. (5)",
    "answer": "PALCO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Espacio reservado en un teatro",
    "fodder": "Pablo abrió lentamente cada objeto",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Pablo abrió lentamente cada objeto» forman PALCO.",
    "_def": "Balcón de un teatro"
  },
  {
    "id": "d030",
    "difficulty": "muy-dificil",
    "clue": "Vegetal; Ser vegetal, perdido en plantación, sin llamar la atención. (6)",
    "answer": "PLANTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Vegetal",
    "fodder": "planta",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "PLANTA aparece oculto en plantación.",
    "_def": "Ser vegetal"
  },
  {
    "id": "d031",
    "difficulty": "muy-dificil",
    "clue": "Significado: destino perdió el orden antes de la escena. (7)",
    "answer": "SENTIDO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Significado",
    "fodder": "DESTINO",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de DESTINO = SENTIDO.",
    "_def": "Significado o dirección"
  },
  {
    "id": "d032",
    "difficulty": "muy-dificil",
    "clue": "Canal por el que pasa algo; casi otra nunca durante un casi tal otro, de entrada, dicen más de lo que parece. (8)",
    "answer": "CONDUCTO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Canal por el que pasa algo",
    "fodder": "casi otra nunca durante un casi tal otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «casi otra nunca durante un casi tal otro» forman CONDUCTO.",
    "_def": "Canal para transportar algo"
  },
  {
    "id": "d033",
    "difficulty": "dificil",
    "clue": "Calzado que cubre el pie y parte de la pierna; nota cambia una letra: n por b. (4)",
    "answer": "BOTA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Calzado que cubre el pie y parte de la pierna",
    "fodder": "NOTA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "NOTA cambia N por B = BOTA.",
    "_def": "Calzado que cubre el tobillo"
  },
  {
    "id": "d034",
    "difficulty": "muy-dificil",
    "clue": "Asunto del que se habla; toma cambia una letra: o por e. (4)",
    "answer": "TEMA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Asunto del que se habla",
    "fodder": "TOMA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "TOMA cambia O por E = TEMA.",
    "_def": "Asunto del que se habla"
  },
  {
    "id": "d035",
    "difficulty": "experto",
    "clue": "Punto de conexión; Nunca olvides dejarlo ordenado, de entrada, dejan la respuesta escondida. (4)",
    "answer": "NODO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Punto de conexión",
    "fodder": "Nunca olvides dejarlo ordenado",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Nunca olvides dejarlo ordenado» forman NODO.",
    "_def": "Punto de conexión"
  },
  {
    "id": "d036",
    "difficulty": "dificil",
    "clue": "Persona que trabaja a bordo; mira Apenas resulta Inés nunca el rápido otra, de entrada, dicen más de lo que parece. (8)",
    "answer": "MARINERO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Persona que trabaja a bordo",
    "fodder": "mira Apenas resulta Inés nunca el rápido otra",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «mira Apenas resulta Inés nunca el rápido otra» forman MARINERO.",
    "_def": "Quien trabaja a bordo"
  },
  {
    "id": "d037",
    "difficulty": "experto",
    "clue": "Montón de objetos; pipa cambia una letra: p por l. (4)",
    "answer": "PILA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Montón de objetos",
    "fodder": "PIPA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "PIPA cambia P por L = PILA.",
    "_def": "Conjunto o batería"
  },
  {
    "id": "d038",
    "difficulty": "experto",
    "clue": "Parte de la mano; deda cambia una letra: a por o. (4)",
    "answer": "DEDO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Parte de la mano",
    "fodder": "DEDA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "DEDA cambia A por O = DEDO.",
    "_def": "Extremidad de la mano"
  },
  {
    "id": "d039",
    "difficulty": "muy-dificil",
    "clue": "Porción de tierra rodeada de agua: sila perdió el orden antes de la escena. (4)",
    "answer": "ISLA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Porción de tierra rodeada de agua",
    "fodder": "SILA",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de SILA = ISLA.",
    "_def": "Porción de tierra rodeada de agua"
  },
  {
    "id": "d040",
    "difficulty": "dificil",
    "clue": "Rastro que deja un objeto al moverse; esa sobre también en los Ana, de entrada, dicen más de lo que parece. (6)",
    "answer": "ESTELA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Rastro que deja un objeto al moverse",
    "fodder": "esa sobre también en los Ana",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «esa sobre también en los Ana» forman ESTELA.",
    "_def": "Rastro que queda"
  },
  {
    "id": "d041",
    "difficulty": "muy-dificil",
    "clue": "Pieza del juego de bolos; bolos queda sin s antes de seguir. (4)",
    "answer": "BOLO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza del juego de bolos",
    "fodder": "bolos",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de BOLOS para obtener BOLO.",
    "_def": "Pieza que se derriba jugando"
  },
  {
    "id": "d042",
    "difficulty": "experto",
    "clue": "Serie graduada; se cuela en la escala del plano, sin llamar la atención. (6)",
    "answer": "ESCALA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Serie graduada",
    "fodder": "ESCALA",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "ESCALA aparece oculto en «la escala del plano».",
    "_def": "Relación entre tamaños"
  },
  {
    "id": "d043",
    "difficulty": "experto",
    "clue": "Ave acuática; PLATO queda sin O antes de seguir. (4)",
    "answer": "PATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Ave acuática",
    "fodder": "PLATO",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PLATO para obtener PATO.",
    "_def": "Ave acuática"
  },
  {
    "id": "d044",
    "difficulty": "muy-dificil",
    "clue": "Pieza que sujeta; grada cambia una letra: d por p. (5)",
    "answer": "GRAPA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Pieza que sujeta",
    "fodder": "GRADA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "GRADA cambia D por P = GRAPA.",
    "_def": "Pieza para sujetar"
  },
  {
    "id": "d045",
    "difficulty": "muy-dificil",
    "clue": "Parte posterior del pie; salon cambia una letra: s por t. (5)",
    "answer": "TALON",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Parte posterior del pie",
    "fodder": "SALON",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "SALON cambia S por T = TALON.",
    "_def": "Parte posterior del pie"
  },
  {
    "id": "d046",
    "difficulty": "dificil",
    "clue": "Lo que queda; RESTOS queda sin S antes de seguir. (5)",
    "answer": "RESTO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Lo que queda",
    "fodder": "RESTOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de RESTOS para obtener RESTO.",
    "_def": "Lo que queda"
  },
  {
    "id": "d047",
    "difficulty": "experto",
    "clue": "Abre una puerta; LLAVES queda sin S antes de seguir. (5)",
    "answer": "LLAVE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Abre una puerta",
    "fodder": "LLAVES",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de LLAVES para obtener LLAVE.",
    "_def": "Instrumento para abrir"
  },
  {
    "id": "d048",
    "difficulty": "experto",
    "clue": "Acción de dar algo; en nunca también revisa entre graba Ayer, de entrada, dicen más de lo que parece. (7)",
    "answer": "ENTREGA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Acción de dar algo",
    "fodder": "en nunca también revisa entre graba Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «en nunca también revisa entre graba Ayer» forman ENTREGA.",
    "_def": "Acto de dar algo"
  },
  {
    "id": "d049",
    "difficulty": "dificil",
    "clue": "Máquina para trabajar piezas: trono perdió el orden antes de la escena. (5)",
    "answer": "TORNO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Máquina para trabajar piezas",
    "fodder": "TRONO",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de TRONO = TORNO.",
    "_def": "Máquina que gira una pieza"
  },
  {
    "id": "d050",
    "difficulty": "muy-dificil",
    "clue": "Espacio abierto dentro de una vivienda; PATIOS queda sin S antes de seguir. (5)",
    "answer": "PATIO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Espacio abierto dentro de una vivienda",
    "fodder": "PATIOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PATIOS para obtener PATIO.",
    "_def": "Espacio abierto de una casa"
  },
  {
    "id": "d051",
    "difficulty": "dificil",
    "clue": "Parte de la mano; PALMAS queda sin S antes de seguir. (5)",
    "answer": "PALMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte de la mano",
    "fodder": "PALMAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PALMAS para obtener PALMA.",
    "_def": "Parte de la mano"
  },
  {
    "id": "d052",
    "difficulty": "experto",
    "clue": "Prenda con mangas; casi Ahora mira Inés sin Alguien, de entrada, dicen más de lo que parece. (6)",
    "answer": "CAMISA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Prenda con mangas",
    "fodder": "casi Ahora mira Inés sin Alguien",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «casi Ahora mira Inés sin Alguien» forman CAMISA.",
    "_def": "Prenda de vestir"
  },
  {
    "id": "d053",
    "difficulty": "muy-dificil",
    "clue": "Apunte escrito; negación, ta como nota musical solfada, abreviada. (4)",
    "answer": "NOTA",
    "mechanisms": [
      "charade"
    ],
    "definition": "Apunte escrito",
    "fodder": "negación",
    "indicators": [
      "como"
    ],
    "explanation": "NO+TA=NOTA",
    "_def": "Apunte breve o sonido musical"
  },
  {
    "id": "d054",
    "difficulty": "experto",
    "clue": "Herramienta abrasiva; CLIMA queda sin A antes de seguir. (4)",
    "answer": "LIMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Herramienta abrasiva",
    "fodder": "CLIMA",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de CLIMA para obtener LIMA.",
    "_def": "Fruta cítrica o herramienta"
  },
  {
    "id": "d055",
    "difficulty": "experto",
    "clue": "Casa familiar; hace obviamente graba Ahora recuerda, de entrada, dicen más de lo que parece. (5)",
    "answer": "HOGAR",
    "mechanisms": [
      "initials"
    ],
    "definition": "Casa familiar",
    "fodder": "hace obviamente graba Ahora recuerda",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «hace obviamente graba Ahora recuerda» forman HOGAR.",
    "_def": "Casa o lugar familiar"
  },
  {
    "id": "d056",
    "difficulty": "muy-dificil",
    "clue": "Periodo de enseñanza; con usa resulta sin obviamente, de entrada, dicen más de lo que parece. (5)",
    "answer": "CURSO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Periodo de enseñanza",
    "fodder": "con usa resulta sin obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «con usa resulta sin obviamente» forman CURSO.",
    "_def": "Recorrido o formación"
  },
  {
    "id": "d057",
    "difficulty": "experto",
    "clue": "Te devuelve la cara; esa sin por entre junta obviamente, de entrada, dicen más de lo que parece. (6)",
    "answer": "ESPEJO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Te devuelve la cara",
    "fodder": "esa sin por entre junta obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «esa sin por entre junta obviamente» forman ESPEJO.",
    "_def": "Superficie que devuelve una imagen"
  },
  {
    "id": "d058",
    "difficulty": "experto",
    "clue": "Rodea una caja; breve Alguien no durante Ayer, de entrada, dicen más de lo que parece. (5)",
    "answer": "BANDA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Rodea una caja",
    "fodder": "breve Alguien no durante Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «breve Alguien no durante Ayer» forman BANDA.",
    "_def": "Franja o grupo"
  },
  {
    "id": "d059",
    "difficulty": "muy-dificil",
    "clue": "Fibra para coser; hasta Inés la otra, de entrada, dicen más de lo que parece. (4)",
    "answer": "HILO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Fibra para coser",
    "fodder": "hasta Inés la otra",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «hasta Inés la otra» forman HILO.",
    "_def": "Fibra continua"
  },
  {
    "id": "d060",
    "difficulty": "experto",
    "clue": "Pieza circular que gira; ruedas queda sin s antes de seguir. (5)",
    "answer": "RUEDA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza circular que gira",
    "fodder": "ruedas",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de RUEDAS para obtener RUEDA.",
    "_def": "Pieza circular que gira"
  },
  {
    "id": "d061",
    "difficulty": "experto",
    "clue": "Sensación producida por una temperatura alta; CALORES queda sin S antes de seguir. (5)",
    "answer": "CALOR",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Sensación producida por una temperatura alta",
    "fodder": "CALORES",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de CALORES para obtener CALOR.",
    "_def": "Energía térmica"
  },
  {
    "id": "d062",
    "difficulty": "muy-dificil",
    "clue": "Viene al mundo: cena perdió el orden antes de la escena. (4)",
    "answer": "NACE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Viene al mundo",
    "fodder": "CENA",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de CENA = NACE.",
    "_def": "Empieza a existir"
  },
  {
    "id": "d063",
    "difficulty": "muy-dificil",
    "clue": "Mensaje escrito; carro, abreviado, ta como tarde, abreviada. (5)",
    "answer": "CARTA",
    "mechanisms": [
      "charade"
    ],
    "definition": "Mensaje escrito",
    "fodder": "carro",
    "indicators": [
      "como"
    ],
    "explanation": "CAR+TA=CARTA",
    "_def": "Mensaje escrito"
  },
  {
    "id": "d064",
    "difficulty": "muy-dificil",
    "clue": "Extremidad de un animal; padre, abreviado, ta como tarde, abreviada. (4)",
    "answer": "PATA",
    "mechanisms": [
      "charade"
    ],
    "definition": "Extremidad de un animal",
    "fodder": "padre",
    "indicators": [
      "como"
    ],
    "explanation": "PA+TA=PATA",
    "_def": "Extremidad de un animal"
  },
  {
    "id": "d065",
    "difficulty": "muy-dificil",
    "clue": "Puede devolverte la cara; revisa el fuera la el junta otra, de entrada, dicen más de lo que parece. (7)",
    "answer": "REFLEJO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Puede devolverte la cara",
    "fodder": "revisa el fuera la el junta otra",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «revisa el fuera la el junta otra» forman REFLEJO.",
    "_def": "Imagen devuelta por una superficie"
  },
  {
    "id": "d066",
    "difficulty": "experto",
    "clue": "Conjunto de fibras retorcidas; cierra usa el rápido de Ayer, de entrada, dicen más de lo que parece. (6)",
    "answer": "CUERDA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Conjunto de fibras retorcidas",
    "fodder": "cierra usa el rápido de Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «cierra usa el rápido de Ayer» forman CUERDA.",
    "_def": "Conjunto de fibras trenzadas"
  },
  {
    "id": "d067",
    "difficulty": "experto",
    "clue": "Parte lateral; LADOS queda sin S antes de seguir. (4)",
    "answer": "LADO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte lateral",
    "fodder": "LADOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de LADOS para obtener LADO.",
    "_def": "Parte lateral"
  },
  {
    "id": "d068",
    "difficulty": "muy-dificil",
    "clue": "Sentido de la visión; pista cambia una letra: p por v. (5)",
    "answer": "VISTA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Sentido de la visión",
    "fodder": "PISTA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "PISTA cambia P por V = VISTA.",
    "_def": "Facultad de ver"
  },
  {
    "id": "d069",
    "difficulty": "dificil",
    "clue": "Puede abrir una cerradura; clase, abreviada, ve como ve. (5)",
    "answer": "CLAVE",
    "mechanisms": [
      "charade"
    ],
    "definition": "Puede abrir una cerradura",
    "fodder": "clase",
    "indicators": [
      "como"
    ],
    "explanation": "CLA+VE=CLAVE",
    "_def": "Dato para abrir o entender"
  },
  {
    "id": "d070",
    "difficulty": "muy-dificil",
    "clue": "Aparato que recibe emisiones; Segmento desde el centro a la circunferencia, perdido en radiografía, sin llamar la atención. (5)",
    "answer": "RADIO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Aparato que recibe emisiones",
    "fodder": "radio",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "RADIO aparece oculto en radiografía.",
    "_def": "Segmento desde el centro a la circunferencia"
  },
  {
    "id": "d071",
    "difficulty": "experto",
    "clue": "Salida de un tallo; Bruno recordó otra tarde especialmente, de entrada, dejan la respuesta escondida. (5)",
    "answer": "BROTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Salida de un tallo",
    "fodder": "Bruno recordó otra tarde especialmente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Bruno recordó otra tarde especialmente» forman BROTE.",
    "_def": "Yema o comienzo"
  },
  {
    "id": "d072",
    "difficulty": "muy-dificil",
    "clue": "Facultad de pensar; mañana el no también en, de entrada, dicen más de lo que parece. (5)",
    "answer": "MENTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Facultad de pensar",
    "fodder": "mañana el no también en",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «mañana el no también en» forman MENTE.",
    "_def": "Facultad de pensar"
  },
  {
    "id": "d073",
    "difficulty": "experto",
    "clue": "Extremidad superior; baja revisa Ana zurdo obviamente, de entrada, dicen más de lo que parece. (5)",
    "answer": "BRAZO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Extremidad superior",
    "fodder": "baja revisa Ana zurdo obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «baja revisa Ana zurdo obviamente» forman BRAZO.",
    "_def": "Extremidad superior"
  },
  {
    "id": "d074",
    "difficulty": "dificil",
    "clue": "Recipiente con asa; barra cambia una letra: b por j. (5)",
    "answer": "JARRA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Recipiente con asa",
    "fodder": "BARRA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "BARRA cambia B por J = JARRA.",
    "_def": "Recipiente de mesa"
  },
  {
    "id": "d075",
    "difficulty": "experto",
    "clue": "Alimento usado para atraer animales; cierra el breve otro, de entrada, dicen más de lo que parece. (4)",
    "answer": "CEBO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Alimento usado para atraer animales",
    "fodder": "cierra el breve otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «cierra el breve otro» forman CEBO.",
    "_def": "Señuelo para atraer"
  },
  {
    "id": "d076",
    "difficulty": "experto",
    "clue": "Expresión que indica cantidad; no un muy entre resulta observa, de entrada, dicen más de lo que parece. (6)",
    "answer": "NUMERO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Expresión que indica cantidad",
    "fodder": "no un muy entre resulta observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «no un muy entre resulta observa» forman NUMERO.",
    "_def": "Signo que representa una cantidad"
  },
  {
    "id": "d077",
    "difficulty": "experto",
    "clue": "Une dos orillas; puede, sin final, nte como ente, abreviado. (6)",
    "answer": "PUENTE",
    "mechanisms": [
      "charade"
    ],
    "definition": "Une dos orillas",
    "fodder": "puede",
    "indicators": [
      "como"
    ],
    "explanation": "PUE+NTE=PUENTE",
    "_def": "Obra para cruzar un obstáculo"
  },
  {
    "id": "d078",
    "difficulty": "muy-dificil",
    "clue": "Parte lateral del cuerpo; cada observa solo todo Ana desde otro, de entrada, dicen más de lo que parece. (7)",
    "answer": "COSTADO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Parte lateral del cuerpo",
    "fodder": "cada observa solo todo Ana desde otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «cada observa solo todo Ana desde otro» forman COSTADO.",
    "_def": "Lado del cuerpo o de algo"
  },
  {
    "id": "d079",
    "difficulty": "dificil",
    "clue": "Un momento breve; Rato, perdido en ratonera, sin llamar la atención. (4)",
    "answer": "RATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Un momento breve",
    "fodder": "rato",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "RATO aparece oculto en ratonera.",
    "_def": "Rato"
  },
  {
    "id": "d080",
    "difficulty": "dificil",
    "clue": "Ayuda; Apenas por otra yo observa, de entrada, dicen más de lo que parece. (5)",
    "answer": "APOYO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Ayuda",
    "fodder": "Apenas por otra yo observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Apenas por otra yo observa» forman APOYO.",
    "_def": "Ayuda o sostén"
  },
  {
    "id": "d081",
    "difficulty": "dificil",
    "clue": "Sentir amor: rama perdió el rumbo antes de llegar. (4)",
    "answer": "AMAR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Sentir amor",
    "fodder": "rama",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de RAMA = AMAR.",
    "_def": "Querer profundamente"
  },
  {
    "id": "d082",
    "difficulty": "muy-dificil",
    "clue": "Curva entre dos puntos; OCRA vuelve sobre sus pasos. (4)",
    "answer": "ARCO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Curva entre dos puntos",
    "fodder": "OCRA",
    "indicators": [
      "vuelve sobre sus pasos"
    ],
    "explanation": "OCRA al revés = ARCO.",
    "_def": "Arco"
  },
  {
    "id": "d083",
    "difficulty": "dificil",
    "clue": "Vaso con pie; COPAS queda sin S antes de seguir. (4)",
    "answer": "COPA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Vaso con pie",
    "fodder": "COPAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de COPAS para obtener COPA.",
    "_def": "Vaso con pie"
  },
  {
    "id": "d084",
    "difficulty": "muy-dificil",
    "clue": "Del mar; muy Ana revisa imagina nos observa, de entrada, dicen más de lo que parece. (6)",
    "answer": "MARINO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Del mar",
    "fodder": "muy Ana revisa imagina nos observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «muy Ana revisa imagina nos observa» forman MARINO.",
    "_def": "Del mar"
  },
  {
    "id": "d085",
    "difficulty": "experto",
    "clue": "Material elástico; GOMAS queda sin S antes de seguir. (4)",
    "answer": "GOMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Material elástico",
    "fodder": "GOMAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de GOMAS para obtener GOMA.",
    "_def": "Material elástico"
  },
  {
    "id": "d086",
    "difficulty": "muy-dificil",
    "clue": "Obra escrita; la imagina breve revisa otro, de entrada, dicen más de lo que parece. (5)",
    "answer": "LIBRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Obra escrita",
    "fodder": "la imagina breve revisa otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «la imagina breve revisa otro» forman LIBRO.",
    "_def": "Conjunto de páginas"
  },
  {
    "id": "d087",
    "difficulty": "muy-dificil",
    "clue": "Parte por donde se agarra una herramienta; MANGOS queda sin S antes de seguir. (5)",
    "answer": "MANGO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte por donde se agarra una herramienta",
    "fodder": "MANGOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de MANGOS para obtener MANGO.",
    "_def": "Parte por donde se agarra"
  },
  {
    "id": "d088",
    "difficulty": "muy-dificil",
    "clue": "Mamífero carnívoro: bolo perdió el orden antes de la escena. (4)",
    "answer": "LOBO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Mamífero carnívoro",
    "fodder": "BOLO",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de BOLO = LOBO.",
    "_def": "Mamífero salvaje"
  },
  {
    "id": "d089",
    "difficulty": "experto",
    "clue": "Persona que juzga; Jamás una es zanja, de entrada, dejan la respuesta escondida. (4)",
    "answer": "JUEZ",
    "mechanisms": [
      "initials"
    ],
    "definition": "Persona que juzga",
    "fodder": "Jamás una es zanja",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Jamás una es zanja» forman JUEZ.",
    "_def": "Quien imparte justicia"
  },
  {
    "id": "d090",
    "difficulty": "muy-dificil",
    "clue": "Cavidad profunda: misa perdió el rumbo antes de llegar. (4)",
    "answer": "SIMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Cavidad profunda",
    "fodder": "misa",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de MISA = SIMA.",
    "_def": "Cavidad profunda"
  },
  {
    "id": "d091",
    "difficulty": "muy-dificil",
    "clue": "Objeto fino para coser; Ahora guarda usa jamás Ana, de entrada, dicen más de lo que parece. (5)",
    "answer": "AGUJA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Objeto fino para coser",
    "fodder": "Ahora guarda usa jamás Ana",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Ahora guarda usa jamás Ana» forman AGUJA.",
    "_def": "Objeto fino y puntiagudo"
  },
  {
    "id": "d092",
    "difficulty": "muy-dificil",
    "clue": "Pieza de dinero; mientras otro nadie en de Ana, de entrada, dicen más de lo que parece. (6)",
    "answer": "MONEDA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Pieza de dinero",
    "fodder": "mientras otro nadie en de Ana",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «mientras otro nadie en de Ana» forman MONEDA.",
    "_def": "Pieza metálica de curso legal"
  },
  {
    "id": "d093",
    "difficulty": "dificil",
    "clue": "Indicio que comunica algo; sin entre no Ahora la, de entrada, dicen más de lo que parece. (5)",
    "answer": "SENAL",
    "mechanisms": [
      "initials"
    ],
    "definition": "Indicio que comunica algo",
    "fodder": "sin entre no Ahora la",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «sin entre no Ahora la» forman SENAL.",
    "_def": "Marca que comunica"
  },
  {
    "id": "d094",
    "difficulty": "experto",
    "clue": "Mandato; Disposición o mandato, perdido en ordenado, sin llamar la atención. (5)",
    "answer": "ORDEN",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Mandato",
    "fodder": "orden",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "ORDEN aparece oculto en ordenado.",
    "_def": "Disposición o mandato"
  },
  {
    "id": "d095",
    "difficulty": "dificil",
    "clue": "Sujetar; atars queda sin s antes de seguir. (4)",
    "answer": "ATAR",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Sujetar",
    "fodder": "atars",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de ATARS para obtener ATAR.",
    "_def": "Atar"
  },
  {
    "id": "d096",
    "difficulty": "muy-dificil",
    "clue": "Categoría: grano perdió el rumbo antes de llegar. (5)",
    "answer": "RANGO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Categoría",
    "fodder": "grano",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de GRANO = RANGO.",
    "_def": "Posición dentro de una escala"
  },
  {
    "id": "d097",
    "difficulty": "experto",
    "clue": "Articulación del brazo; CODOS queda sin S antes de seguir. (4)",
    "answer": "CODO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Articulación del brazo",
    "fodder": "CODOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de CODOS para obtener CODO.",
    "_def": "Articulación del brazo"
  },
  {
    "id": "d098",
    "difficulty": "experto",
    "clue": "Señal que representa algo; sin intenta gira no observa, de entrada, dicen más de lo que parece. (5)",
    "answer": "SIGNO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Señal que representa algo",
    "fodder": "sin intenta gira no observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «sin intenta gira no observa» forman SIGNO.",
    "_def": "Señal que representa algo"
  },
  {
    "id": "d099",
    "difficulty": "muy-dificil",
    "clue": "Borde de un sólido; Alguien recuerda imagina siempre también Alguien, de entrada, dicen más de lo que parece. (6)",
    "answer": "ARISTA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Borde de un sólido",
    "fodder": "Alguien recuerda imagina siempre también Alguien",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Alguien recuerda imagina siempre también Alguien» forman ARISTA.",
    "_def": "Borde donde se encuentran caras"
  },
  {
    "id": "d100",
    "difficulty": "dificil",
    "clue": "Caminata; PASEOS queda sin S antes de seguir. (5)",
    "answer": "PASEO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Caminata",
    "fodder": "PASEOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PASEOS para obtener PASEO.",
    "_def": "Caminata"
  },
  {
    "id": "d101",
    "difficulty": "experto",
    "clue": "Prenda ligera de manga corta; casi Ana muy indica sobre entre todo Ahora, de entrada, dicen más de lo que parece. (8)",
    "answer": "CAMISETA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Prenda ligera de manga corta",
    "fodder": "casi Ana muy indica sobre entre todo Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «casi Ana muy indica sobre entre todo Ahora» forman CAMISETA.",
    "_def": "Prenda de manga corta"
  },
  {
    "id": "d102",
    "difficulty": "experto",
    "clue": "Líquido; Ayer guarda usa Ayer, de entrada, dicen más de lo que parece. (4)",
    "answer": "AGUA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Líquido",
    "fodder": "Ayer guarda usa Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Ayer guarda usa Ayer» forman AGUA.",
    "_def": "Líquido esencial"
  },
  {
    "id": "d103",
    "difficulty": "dificil",
    "clue": "Mueble para dormir; CAMAS queda sin S antes de seguir. (4)",
    "answer": "CAMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Mueble para dormir",
    "fodder": "CAMAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de CAMAS para obtener CAMA.",
    "_def": "Mueble para dormir"
  },
  {
    "id": "d104",
    "difficulty": "experto",
    "clue": "Grada para espectadores, perdido en tribunal, sin llamar la atención. (7)",
    "answer": "TRIBUNA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Grada para espectadores",
    "fodder": "tribuna",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "TRIBUNA aparece oculto en tribunal.",
    "_def": "Grada para espectadores"
  },
  {
    "id": "d105",
    "difficulty": "dificil",
    "clue": "Estructura para embarcaciones; mientras usa el luego los esa, de entrada, dicen más de lo que parece. (6)",
    "answer": "MUELLE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Estructura para embarcaciones",
    "fodder": "mientras usa el luego los esa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «mientras usa el luego los esa» forman MUELLE.",
    "_def": "Lugar de atraque"
  },
  {
    "id": "d106",
    "difficulty": "experto",
    "clue": "Extremidad superior; se cuela en la mano derecha, sin llamar la atención. (4)",
    "answer": "MANO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Extremidad superior",
    "fodder": "MANO",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "MANO aparece oculto en «la mano derecha».",
    "_def": "Extremidad superior"
  },
  {
    "id": "d107",
    "difficulty": "experto",
    "clue": "Órgano de la boca; Órgano o idioma, perdido en lenguaje, sin llamar la atención. (6)",
    "answer": "LENGUA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Órgano de la boca",
    "fodder": "lengua",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "LENGUA aparece oculto en lenguaje.",
    "_def": "Órgano o idioma"
  },
  {
    "id": "d108",
    "difficulty": "dificil",
    "clue": "Cantidad de materia; mesa cambia una letra: e por a. (4)",
    "answer": "MASA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Cantidad de materia",
    "fodder": "MESA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "MESA cambia E por A = MASA.",
    "_def": "Cantidad reunida"
  },
  {
    "id": "d109",
    "difficulty": "experto",
    "clue": "Recipiente metálico; la Alguien tras Apenas, de entrada, dicen más de lo que parece. (4)",
    "answer": "LATA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Recipiente metálico",
    "fodder": "la Alguien tras Apenas",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «la Alguien tras Apenas» forman LATA.",
    "_def": "Lata"
  },
  {
    "id": "d110",
    "difficulty": "experto",
    "clue": "Porción de un todo; partes queda sin s antes de seguir. (5)",
    "answer": "PARTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Porción de un todo",
    "fodder": "partes",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PARTES para obtener PARTE.",
    "_def": "Porción o informe"
  },
  {
    "id": "d111",
    "difficulty": "dificil",
    "clue": "Movimiento al caminar: sopa perdió el rumbo antes de llegar. (4)",
    "answer": "PASO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Movimiento al caminar",
    "fodder": "sopa",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de SOPA = PASO.",
    "_def": "Movimiento al andar"
  },
  {
    "id": "d112",
    "difficulty": "muy-dificil",
    "clue": "Acuerdo entre personas; TRATOS queda sin S antes de seguir. (5)",
    "answer": "TRATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Acuerdo entre personas",
    "fodder": "TRATOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de TRATOS para obtener TRATO.",
    "_def": "Modo de relacionarse"
  },
  {
    "id": "d113",
    "difficulty": "muy-dificil",
    "clue": "Frutas de pepita: pesar perdió el orden antes de la escena. (5)",
    "answer": "PERAS",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Frutas de pepita",
    "fodder": "PESAR",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de PESAR = PERAS.",
    "_def": "Frutos del peral"
  },
  {
    "id": "d114",
    "difficulty": "dificil",
    "clue": "Extremidad inferior; se cuela en ese pie de página, sin llamar la atención. (3)",
    "answer": "PIE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Extremidad inferior",
    "fodder": "PIE",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "PIE aparece oculto en «ese pie de página».",
    "_def": "Extremo del cuerpo"
  },
  {
    "id": "d115",
    "difficulty": "experto",
    "clue": "Hoja fina de metal u otro material; luego Apenas mañana Inés nadie Ana, de entrada, dicen más de lo que parece. (6)",
    "answer": "LAMINA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Hoja fina de metal u otro material",
    "fodder": "luego Apenas mañana Inés nadie Ana",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «luego Apenas mañana Inés nadie Ana» forman LAMINA.",
    "_def": "Hoja delgada"
  },
  {
    "id": "d116",
    "difficulty": "dificil",
    "clue": "Habitación amplia: alas perdió el rumbo antes de llegar. (4)",
    "answer": "SALA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Habitación amplia",
    "fodder": "alas",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de ALAS = SALA.",
    "_def": "Sala"
  },
  {
    "id": "d117",
    "difficulty": "muy-dificil",
    "clue": "Configuración externa; foro, abreviado, ma como madre, abreviada. (5)",
    "answer": "FORMA",
    "mechanisms": [
      "charade"
    ],
    "definition": "Configuración externa",
    "fodder": "foro",
    "indicators": [
      "como"
    ],
    "explanation": "FOR+MA=FORMA",
    "_def": "Configuración exterior"
  },
  {
    "id": "d118",
    "difficulty": "experto",
    "clue": "Punto que no se debe superar; la intenta muy indica tal entre, de entrada, dicen más de lo que parece. (6)",
    "answer": "LIMITE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Punto que no se debe superar",
    "fodder": "la intenta muy indica tal entre",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «la intenta muy indica tal entre» forman LIMITE.",
    "_def": "Punto que no se debe superar"
  },
  {
    "id": "d119",
    "difficulty": "experto",
    "clue": "Zona de una ciudad; breve Ana resulta revisa imagina otro, de entrada, dicen más de lo que parece. (6)",
    "answer": "BARRIO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Zona de una ciudad",
    "fodder": "breve Ana resulta revisa imagina otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «breve Ana resulta revisa imagina otro» forman BARRIO.",
    "_def": "Zona de una ciudad"
  },
  {
    "id": "d120",
    "difficulty": "dificil",
    "clue": "Sonido producido al hablar; Sonido de la garganta, perdido en vozarrón, sin llamar la atención. (3)",
    "answer": "VOZ",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Sonido producido al hablar",
    "fodder": "voz",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "VOZ aparece oculto en vozarrón.",
    "_def": "Sonido de la garganta"
  },
  {
    "id": "d121",
    "difficulty": "dificil",
    "clue": "Ciudad principal; casi Ayer para indica tal Ana luego, de entrada, dicen más de lo que parece. (7)",
    "answer": "CAPITAL",
    "mechanisms": [
      "initials"
    ],
    "definition": "Ciudad principal",
    "fodder": "casi Ayer para indica tal Ana luego",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «casi Ayer para indica tal Ana luego» forman CAPITAL.",
    "_def": "Ciudad principal"
  },
  {
    "id": "d122",
    "difficulty": "muy-dificil",
    "clue": "No cede; firmes queda sin s antes de seguir. (5)",
    "answer": "FIRME",
    "mechanisms": [
      "deletion"
    ],
    "definition": "No cede",
    "fodder": "firmes",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de FIRMES para obtener FIRME.",
    "_def": "Que no cede"
  },
  {
    "id": "d123",
    "difficulty": "muy-dificil",
    "clue": "Refugio de aves; se cuela en caminó al nido, sin llamar la atención. (4)",
    "answer": "NIDO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Refugio de aves",
    "fodder": "NIDO",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "NIDO aparece oculto en «caminó al nido».",
    "_def": "Refugio de un ave"
  },
  {
    "id": "d124",
    "difficulty": "experto",
    "clue": "Instrumento para orientarse; busca resulta usted juzga una luego Ahora, de entrada, dicen más de lo que parece. (7)",
    "answer": "BRUJULA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Instrumento para orientarse",
    "fodder": "busca resulta usted juzga una luego Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «busca resulta usted juzga una luego Ahora» forman BRUJULA.",
    "_def": "Instrumento para orientarse"
  },
  {
    "id": "d125",
    "difficulty": "dificil",
    "clue": "Fruto seco; PASTA queda sin A antes de seguir. (4)",
    "answer": "PASA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Fruto seco",
    "fodder": "PASTA",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PASTA para obtener PASA.",
    "_def": "Fruta arrugada o verbo"
  },
  {
    "id": "d126",
    "difficulty": "dificil",
    "clue": "Conductor de electricidad; Cable, perdido en cableado, sin llamar la atención. (5)",
    "answer": "CABLE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Conductor de electricidad",
    "fodder": "cable",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "CABLE aparece oculto en cableado.",
    "_def": "Cable"
  },
  {
    "id": "d127",
    "difficulty": "dificil",
    "clue": "Repetición de un sonido; Elena cambió opiniones, de entrada, dejan la respuesta escondida. (3)",
    "answer": "ECO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Repetición de un sonido",
    "fodder": "Elena cambió opiniones",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Elena cambió opiniones» forman ECO.",
    "_def": "Sonido devuelto"
  },
  {
    "id": "d128",
    "difficulty": "muy-dificil",
    "clue": "Pieza maciza; bloques queda sin s antes de seguir. (6)",
    "answer": "BLOQUE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza maciza",
    "fodder": "bloques",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de BLOQUES para obtener BLOQUE.",
    "_def": "Pieza sólida de material"
  },
  {
    "id": "d129",
    "difficulty": "experto",
    "clue": "Elemento que sostiene; siempre otra primero otro recuerda también esa, de entrada, dicen más de lo que parece. (7)",
    "answer": "SOPORTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Elemento que sostiene",
    "fodder": "siempre otra primero otro recuerda también esa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «siempre otra primero otro recuerda también esa» forman SOPORTE.",
    "_def": "Base que sostiene"
  },
  {
    "id": "d130",
    "difficulty": "experto",
    "clue": "Espacio público; para los Ayer zurdo Ahora, de entrada, dicen más de lo que parece. (5)",
    "answer": "PLAZA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Espacio público",
    "fodder": "para los Ayer zurdo Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «para los Ayer zurdo Ahora» forman PLAZA.",
    "_def": "Espacio público abierto"
  },
  {
    "id": "d131",
    "difficulty": "muy-dificil",
    "clue": "Piedra: cora perdió el orden antes de la escena. (4)",
    "answer": "ROCA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Piedra",
    "fodder": "CORA",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de CORA = ROCA.",
    "_def": "Piedra grande"
  },
  {
    "id": "d132",
    "difficulty": "dificil",
    "clue": "Recipiente para comida; se cuela en el plato quedó vacío, sin llamar la atención. (5)",
    "answer": "PLATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Recipiente para comida",
    "fodder": "PLATO",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "PLATO aparece oculto en «el plato quedó vacío».",
    "_def": "Recipiente para comer"
  },
  {
    "id": "d133",
    "difficulty": "experto",
    "clue": "Estructura que cubre a un ave; PLUMAS queda sin S antes de seguir. (5)",
    "answer": "PLUMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Estructura que cubre a un ave",
    "fodder": "PLUMAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PLUMAS para obtener PLUMA.",
    "_def": "Estructura que recubre a las aves"
  },
  {
    "id": "d134",
    "difficulty": "muy-dificil",
    "clue": "Objeto que atrae hierro; indica mientras Alguien nadie, de entrada, dicen más de lo que parece. (4)",
    "answer": "IMAN",
    "mechanisms": [
      "initials"
    ],
    "definition": "Objeto que atrae hierro",
    "fodder": "indica mientras Alguien nadie",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «indica mientras Alguien nadie» forman IMAN.",
    "_def": "Objeto que atrae ciertos metales"
  },
  {
    "id": "d135",
    "difficulty": "experto",
    "clue": "Vivienda; Casa, perdido en casamiento, sin llamar la atención. (4)",
    "answer": "CASA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Vivienda",
    "fodder": "casa",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "CASA aparece oculto en casamiento.",
    "_def": "Casa"
  },
  {
    "id": "d136",
    "difficulty": "dificil",
    "clue": "Extremidades de un ave; SALA vuelve sobre sus pasos. (4)",
    "answer": "ALAS",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Extremidades de un ave",
    "fodder": "SALA",
    "indicators": [
      "vuelve sobre sus pasos"
    ],
    "explanation": "SALA al revés = ALAS.",
    "_def": "Lo que permite volar"
  },
  {
    "id": "d137",
    "difficulty": "dificil",
    "clue": "Latido arterial; Latido perceptible, perdido en impulso, sin llamar la atención. (5)",
    "answer": "PULSO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Latido arterial",
    "fodder": "pulso",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "PULSO aparece oculto en impulso.",
    "_def": "Latido perceptible"
  },
  {
    "id": "d138",
    "difficulty": "muy-dificil",
    "clue": "Plato líquido: paso perdió el orden antes de la escena. (4)",
    "answer": "SOPA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Plato líquido",
    "fodder": "PASO",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de PASO = SOPA.",
    "_def": "Plato de cuchara"
  },
  {
    "id": "d139",
    "difficulty": "dificil",
    "clue": "Representación mental; Inés donde en Alguien, de entrada, dicen más de lo que parece. (4)",
    "answer": "IDEA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Representación mental",
    "fodder": "Inés donde en Alguien",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Inés donde en Alguien» forman IDEA.",
    "_def": "Ocurrencia"
  },
  {
    "id": "d140",
    "difficulty": "experto",
    "clue": "Pieza elástica; resortes queda sin s antes de seguir. (7)",
    "answer": "RESORTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza elástica",
    "fodder": "resortes",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de RESORTES para obtener RESORTE.",
    "_def": "Pieza elástica"
  },
  {
    "id": "d141",
    "difficulty": "muy-dificil",
    "clue": "Herramienta para golpear; muy Ahora revisa tal intenta luego luego obviamente, de entrada, dicen más de lo que parece. (8)",
    "answer": "MARTILLO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Herramienta para golpear",
    "fodder": "muy Ahora revisa tal intenta luego luego obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «muy Ahora revisa tal intenta luego luego obviamente» forman MARTILLO.",
    "_def": "Herramienta para golpear"
  },
  {
    "id": "d142",
    "difficulty": "dificil",
    "clue": "Superficie para escribir; primero intenta zanja Alguien rápido revisa Ayer, de entrada, dicen más de lo que parece. (7)",
    "answer": "PIZARRA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Superficie para escribir",
    "fodder": "primero intenta zanja Alguien rápido revisa Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «primero intenta zanja Alguien rápido revisa Ayer» forman PIZARRA.",
    "_def": "Superficie para escribir"
  },
  {
    "id": "d143",
    "difficulty": "experto",
    "clue": "Contacto afectuoso con los labios; bebida, abreviada, so como sur-oriente, abreviado. (4)",
    "answer": "BESO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Contacto afectuoso con los labios",
    "fodder": "bebida",
    "indicators": [
      "como"
    ],
    "explanation": "BE+SO=BESO",
    "_def": "Contacto afectuoso"
  },
  {
    "id": "d144",
    "difficulty": "experto",
    "clue": "Altura respecto a una referencia; nadie Inés vuelve entre los, de entrada, dicen más de lo que parece. (5)",
    "answer": "NIVEL",
    "mechanisms": [
      "initials"
    ],
    "definition": "Altura respecto a una referencia",
    "fodder": "nadie Inés vuelve entre los",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «nadie Inés vuelve entre los» forman NIVEL.",
    "_def": "Grado o altura"
  },
  {
    "id": "d145",
    "difficulty": "experto",
    "clue": "Persona que actúa en nombre de otra; Apenas guarda esa nos también entre, de entrada, dicen más de lo que parece. (6)",
    "answer": "AGENTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Persona que actúa en nombre de otra",
    "fodder": "Apenas guarda esa nos también entre",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Apenas guarda esa nos también entre» forman AGENTE.",
    "_def": "Persona que actúa en nombre de otra"
  },
  {
    "id": "d146",
    "difficulty": "muy-dificil",
    "clue": "Filamento que nace en la piel; peso cambia una letra: s por l. (4)",
    "answer": "PELO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Filamento que nace en la piel",
    "fodder": "PESO",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "PESO cambia S por L = PELO.",
    "_def": "Filamento que nace de la piel"
  },
  {
    "id": "d147",
    "difficulty": "muy-dificil",
    "clue": "Extensión que ocupa algo; entre siempre primero Ayer casi indica obviamente, de entrada, dicen más de lo que parece. (7)",
    "answer": "ESPACIO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Extensión que ocupa algo",
    "fodder": "entre siempre primero Ayer casi indica obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «entre siempre primero Ayer casi indica obviamente» forman ESPACIO.",
    "_def": "Extensión disponible"
  },
  {
    "id": "d148",
    "difficulty": "muy-dificil",
    "clue": "Elemento que forma parte de un conjunto; se cuela en empieza la función, sin llamar la atención. (5)",
    "answer": "PIEZA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Elemento que forma parte de un conjunto",
    "fodder": "PIEZA",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "PIEZA aparece oculto en «empieza la función».",
    "_def": "Parte de un conjunto"
  },
  {
    "id": "d149",
    "difficulty": "muy-dificil",
    "clue": "Conjunto ordenado; solo entre resulta imagina entre, de entrada, dicen más de lo que parece. (5)",
    "answer": "SERIE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Conjunto ordenado",
    "fodder": "solo entre resulta imagina entre",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «solo entre resulta imagina entre» forman SERIE.",
    "_def": "Conjunto ordenado"
  },
  {
    "id": "d150",
    "difficulty": "experto",
    "clue": "Tabique vertical; pareds queda sin s antes de seguir. (5)",
    "answer": "PARED",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Tabique vertical",
    "fodder": "pareds",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PAREDS para obtener PARED.",
    "_def": "Construcción vertical"
  },
  {
    "id": "d151",
    "difficulty": "muy-dificil",
    "clue": "Trabajo realizado, perdido en obrador, sin llamar la atención. (4)",
    "answer": "OBRA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Trabajo realizado",
    "fodder": "obra",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "OBRA aparece oculto en obrador.",
    "_def": "Trabajo realizado"
  },
  {
    "id": "d152",
    "difficulty": "dificil",
    "clue": "Motocicleta; MOTOS queda sin S antes de seguir. (4)",
    "answer": "MOTO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Motocicleta",
    "fodder": "MOTOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de MOTOS para obtener MOTO.",
    "_def": "Vehículo de dos ruedas"
  },
  {
    "id": "d153",
    "difficulty": "experto",
    "clue": "Herramienta de dientes; tierra cambia una letra: t por s. (6)",
    "answer": "SIERRA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Herramienta de dientes",
    "fodder": "TIERRA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "TIERRA cambia T por S = SIERRA.",
    "_def": "Herramienta de dientes o cordillera"
  },
  {
    "id": "d154",
    "difficulty": "muy-dificil",
    "clue": "Tristeza; se cuela en apenas empezaba la charla, sin llamar la atención. (4)",
    "answer": "PENA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Tristeza",
    "fodder": "PENA",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "PENA aparece oculto en «apenas empezaba la charla».",
    "_def": "Castigo o tristeza"
  },
  {
    "id": "d155",
    "difficulty": "muy-dificil",
    "clue": "Instrumento de ataque: rama perdió el orden antes de la escena. (4)",
    "answer": "ARMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Instrumento de ataque",
    "fodder": "RAMA",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de RAMA = ARMA.",
    "_def": "Instrumento para atacar"
  },
  {
    "id": "d156",
    "difficulty": "muy-dificil",
    "clue": "Modo de funcionar; MARCHAS queda sin S antes de seguir. (6)",
    "answer": "MARCHA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Modo de funcionar",
    "fodder": "MARCHAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de MARCHAS para obtener MARCHA.",
    "_def": "Forma de caminar o funcionamiento"
  },
  {
    "id": "d157",
    "difficulty": "dificil",
    "clue": "Condimento; Sal, perdido en salto, sin llamar la atención. (3)",
    "answer": "SAL",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Condimento",
    "fodder": "sal",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "SAL aparece oculto en salto.",
    "_def": "Sal"
  },
  {
    "id": "d158",
    "difficulty": "muy-dificil",
    "clue": "Representación geográfica; mata cambia una letra: t por p. (4)",
    "answer": "MAPA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Representación geográfica",
    "fodder": "MATA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "MATA cambia T por P = MAPA.",
    "_def": "Representación de un territorio"
  },
  {
    "id": "d159",
    "difficulty": "muy-dificil",
    "clue": "Vehículo de dos ruedas; cada Alguien resulta rápido en todo Ahora, de entrada, dicen más de lo que parece. (7)",
    "answer": "CARRETA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Vehículo de dos ruedas",
    "fodder": "cada Alguien resulta rápido en todo Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «cada Alguien resulta rápido en todo Ahora» forman CARRETA.",
    "_def": "Vehículo tirado por animales"
  },
  {
    "id": "d160",
    "difficulty": "experto",
    "clue": "Pieza para ejercitarse; PESAS queda sin S antes de seguir. (4)",
    "answer": "PESA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza para ejercitarse",
    "fodder": "PESAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PESAS para obtener PESA.",
    "_def": "Objeto usado para medir masa"
  },
  {
    "id": "d161",
    "difficulty": "experto",
    "clue": "Parte de un conjunto, perdido en sectorial, sin llamar la atención. (6)",
    "answer": "SECTOR",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Parte de un conjunto",
    "fodder": "sector",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "SECTOR aparece oculto en sectorial.",
    "_def": "Parte de un conjunto"
  },
  {
    "id": "d162",
    "difficulty": "experto",
    "clue": "Parte lateral de una embarcación; baja observa revisa desde observa, de entrada, dicen más de lo que parece. (5)",
    "answer": "BORDO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Parte lateral de una embarcación",
    "fodder": "baja observa revisa desde observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «baja observa revisa desde observa» forman BORDO.",
    "_def": "Parte interior de una embarcación"
  },
  {
    "id": "d163",
    "difficulty": "muy-dificil",
    "clue": "Materia de granos finos; Alguien recuerda esa no Ahora, de entrada, dicen más de lo que parece. (5)",
    "answer": "ARENA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Materia de granos finos",
    "fodder": "Alguien recuerda esa no Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Alguien recuerda esa no Ahora» forman ARENA.",
    "_def": "Grano de roca suelto"
  },
  {
    "id": "d164",
    "difficulty": "dificil",
    "clue": "Lugar donde se aprende; en solo como usa esa la Apenas, de entrada, dicen más de lo que parece. (7)",
    "answer": "ESCUELA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Lugar donde se aprende",
    "fodder": "en solo como usa esa la Apenas",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «en solo como usa esa la Apenas» forman ESCUELA.",
    "_def": "Escuela"
  },
  {
    "id": "d165",
    "difficulty": "muy-dificil",
    "clue": "Conjunto de flores: roma perdió el rumbo antes de llegar. (4)",
    "answer": "RAMO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Conjunto de flores",
    "fodder": "roma",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de ROMA = RAMO.",
    "_def": "Conjunto de flores"
  },
  {
    "id": "d166",
    "difficulty": "experto",
    "clue": "Pared resistente; muy usa recuerda obviamente, de entrada, dicen más de lo que parece. (4)",
    "answer": "MURO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Pared resistente",
    "fodder": "muy usa recuerda obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «muy usa recuerda obviamente» forman MURO.",
    "_def": "Pared gruesa"
  },
  {
    "id": "d167",
    "difficulty": "experto",
    "clue": "Discusión de ideas; durante el breve Alguien todo en, de entrada, dicen más de lo que parece. (6)",
    "answer": "DEBATE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Discusión de ideas",
    "fodder": "durante el breve Alguien todo en",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «durante el breve Alguien todo en» forman DEBATE.",
    "_def": "Discusión"
  },
  {
    "id": "d168",
    "difficulty": "muy-dificil",
    "clue": "Elevación pequeña del terreno; como en rápido recuerda obviamente, de entrada, dicen más de lo que parece. (5)",
    "answer": "CERRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Elevación pequeña del terreno",
    "fodder": "como en rápido recuerda obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «como en rápido recuerda obviamente» forman CERRO.",
    "_def": "Elevación del terreno"
  },
  {
    "id": "d169",
    "difficulty": "experto",
    "clue": "Entonación particular; Apenas como en nadie tras otro, de entrada, dicen más de lo que parece. (6)",
    "answer": "ACENTO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Entonación particular",
    "fodder": "Apenas como en nadie tras otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Apenas como en nadie tras otro» forman ACENTO.",
    "_def": "Rasgo de pronunciación"
  },
  {
    "id": "d170",
    "difficulty": "muy-dificil",
    "clue": "Argumento de una obra; Enredo o argumento, perdido en tramado, sin llamar la atención. (5)",
    "answer": "TRAMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Argumento de una obra",
    "fodder": "trama",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "TRAMA aparece oculto en tramado.",
    "_def": "Enredo o argumento"
  },
  {
    "id": "d171",
    "difficulty": "muy-dificil",
    "clue": "Fuerza para mover algo; empujes queda sin s antes de seguir. (6)",
    "answer": "EMPUJE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Fuerza para mover algo",
    "fodder": "empujes",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de EMPUJES para obtener EMPUJE.",
    "_def": "Fuerza que hace avanzar"
  },
  {
    "id": "d172",
    "difficulty": "experto",
    "clue": "Vía urbana; con Ana le la el, de entrada, dicen más de lo que parece. (5)",
    "answer": "CALLE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Vía urbana",
    "fodder": "con Ana le la el",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «con Ana le la el» forman CALLE.",
    "_def": "Vía urbana"
  },
  {
    "id": "d173",
    "difficulty": "muy-dificil",
    "clue": "Conjunto de acciones organizadas; campañas queda sin s antes de seguir. (7)",
    "answer": "CAMPAÑA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Conjunto de acciones organizadas",
    "fodder": "campañas",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de CAMPAÑAS para obtener CAMPAÑA.",
    "_def": "Conjunto organizado de acciones"
  },
  {
    "id": "d174",
    "difficulty": "dificil",
    "clue": "Conducto de agua: ancla perdió el rumbo antes de llegar. (5)",
    "answer": "CANAL",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Conducto de agua",
    "fodder": "ancla",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de ANCLA = CANAL.",
    "_def": "Conducto de agua"
  },
  {
    "id": "d175",
    "difficulty": "experto",
    "clue": "Llegada a tierra; donde el solo esa mientras buen Apenas resulta cierra obviamente, de entrada, dicen más de lo que parece. (10)",
    "answer": "DESEMBARCO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Llegada a tierra",
    "fodder": "donde el solo esa mientras buen Apenas resulta cierra obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «donde el solo esa mientras buen Apenas resulta cierra obviamente» forman DESEMBARCO.",
    "_def": "Llegada a tierra"
  },
  {
    "id": "d176",
    "difficulty": "experto",
    "clue": "Marca estampada; sillo cambia una letra: i por e. (5)",
    "answer": "SELLO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Marca estampada",
    "fodder": "SILLO",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "SILLO cambia I por E = SELLO.",
    "_def": "Marca o pequeña estampa"
  },
  {
    "id": "d177",
    "difficulty": "experto",
    "clue": "Lugar donde paran trenes; entre solo tal Ana casi indica obviamente nos, de entrada, dicen más de lo que parece. (8)",
    "answer": "ESTACION",
    "mechanisms": [
      "initials"
    ],
    "definition": "Lugar donde paran trenes",
    "fodder": "entre solo tal Ana casi indica obviamente nos",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «entre solo tal Ana casi indica obviamente nos» forman ESTACION.",
    "_def": "Lugar de parada o periodo del año"
  },
  {
    "id": "d178",
    "difficulty": "dificil",
    "clue": "Lugar al que se dirige alguien: sentido perdió el rumbo antes de llegar. (7)",
    "answer": "DESTINO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Lugar al que se dirige alguien",
    "fodder": "sentido",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de SENTIDO = DESTINO.",
    "_def": "Lugar al que se llega"
  },
  {
    "id": "d179",
    "difficulty": "experto",
    "clue": "Dulce de azúcar; cada Apenas rápido Ayer mañana el los observa, de entrada, dicen más de lo que parece. (8)",
    "answer": "CARAMELO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Dulce de azúcar",
    "fodder": "cada Apenas rápido Ayer mañana el los observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «cada Apenas rápido Ayer mañana el los observa» forman CARAMELO.",
    "_def": "Dulce"
  },
  {
    "id": "d180",
    "difficulty": "dificil",
    "clue": "De sabor áspero; Apenas mientras Ahora recuerda guarda obviamente, de entrada, dicen más de lo que parece. (6)",
    "answer": "AMARGO",
    "mechanisms": [
      "initials"
    ],
    "definition": "De sabor áspero",
    "fodder": "Apenas mientras Ahora recuerda guarda obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Apenas mientras Ahora recuerda guarda obviamente» forman AMARGO.",
    "_def": "Amargo"
  },
  {
    "id": "d181",
    "difficulty": "experto",
    "clue": "Fuente de luz; finalmente otro cada otra, de entrada, dicen más de lo que parece. (4)",
    "answer": "FOCO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Fuente de luz",
    "fodder": "finalmente otro cada otra",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «finalmente otro cada otra» forman FOCO.",
    "_def": "Punto de luz o atención"
  },
  {
    "id": "d182",
    "difficulty": "muy-dificil",
    "clue": "Sufrimiento físico; color cambia una letra: c por d. (5)",
    "answer": "DOLOR",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Sufrimiento físico",
    "fodder": "COLOR",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "COLOR cambia C por D = DOLOR.",
    "_def": "Molestia física"
  },
  {
    "id": "d183",
    "difficulty": "dificil",
    "clue": "Proyectil con punta; Finalmente Lucas entregó cartas hacia arriba, de entrada, dejan la respuesta escondida. (6)",
    "answer": "FLECHA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Proyectil con punta",
    "fodder": "Finalmente Lucas entregó cartas hacia arriba",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Finalmente Lucas entregó cartas hacia arriba» forman FLECHA.",
    "_def": "Proyectil con punta"
  },
  {
    "id": "d184",
    "difficulty": "experto",
    "clue": "Obra pictórica; Cuando una artista decide, recorta originales, de entrada, dejan la respuesta escondida. (6)",
    "answer": "CUADRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Obra pictórica",
    "fodder": "Cuando una artista decide, recorta originales",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Cuando una artista decide, recorta originales» forman CUADRO.",
    "_def": "Obra pictórica o conjunto"
  },
  {
    "id": "d185",
    "difficulty": "experto",
    "clue": "Pequeña porción de líquido: toga perdió el orden antes de la escena. (4)",
    "answer": "GOTA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Pequeña porción de líquido",
    "fodder": "TOGA",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de TOGA = GOTA.",
    "_def": "Porción muy pequeña de líquido"
  },
  {
    "id": "d186",
    "difficulty": "experto",
    "clue": "Rúbrica personal; FIRMAS queda sin S antes de seguir. (5)",
    "answer": "FIRMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Rúbrica personal",
    "fodder": "FIRMAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de FIRMAS para obtener FIRMA.",
    "_def": "Rasgo escrito que identifica"
  },
  {
    "id": "d187",
    "difficulty": "muy-dificil",
    "clue": "Parte del calzado: canto perdió el orden antes de la escena. (5)",
    "answer": "TACON",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Parte del calzado",
    "fodder": "CANTO",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de CANTO = TACON.",
    "_def": "Parte elevada de un zapato"
  },
  {
    "id": "d188",
    "difficulty": "experto",
    "clue": "Instrumento que mide el tiempo; revisa en luego obviamente junto, de entrada, dicen más de lo que parece. (5)",
    "answer": "RELOJ",
    "mechanisms": [
      "initials"
    ],
    "definition": "Instrumento que mide el tiempo",
    "fodder": "revisa en luego obviamente junto",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «revisa en luego obviamente junto» forman RELOJ.",
    "_def": "Instrumento para medir el tiempo"
  },
  {
    "id": "d189",
    "difficulty": "dificil",
    "clue": "Encima de; envoltorio; se cuela en sobre la mesa, sin llamar la atención. (5)",
    "answer": "SOBRE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Encima de",
    "fodder": "SOBRE",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "SOBRE oculto en sobre la mesa.",
    "_def": "Encima de; envoltorio"
  },
  {
    "id": "d190",
    "difficulty": "experto",
    "clue": "La lleva un rey; como otra resulta otra nos Ahora, de entrada, dicen más de lo que parece. (6)",
    "answer": "CORONA",
    "mechanisms": [
      "initials"
    ],
    "definition": "La lleva un rey",
    "fodder": "como otra resulta otra nos Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «como otra resulta otra nos Ahora» forman CORONA.",
    "_def": "Adorno circular de la cabeza"
  },
  {
    "id": "d191",
    "difficulty": "muy-dificil",
    "clue": "Pendiente de un terreno; cuesta, abreviado, sta como estación, abreviada. (6)",
    "answer": "CUESTA",
    "mechanisms": [
      "charade"
    ],
    "definition": "Pendiente de un terreno",
    "fodder": "cuesta",
    "indicators": [
      "como"
    ],
    "explanation": "CUE+STA=CUESTA",
    "_def": "Pendiente"
  },
  {
    "id": "d192",
    "difficulty": "experto",
    "clue": "Embarcación; Embarcación o nave espacial, perdido en navegante, sin llamar la atención. (4)",
    "answer": "NAVE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Embarcación",
    "fodder": "nave",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "NAVE aparece oculto en navegante.",
    "_def": "Embarcación o nave espacial"
  },
  {
    "id": "d193",
    "difficulty": "dificil",
    "clue": "Que no es buena: alma perdió el orden antes de la escena. (4)",
    "answer": "MALA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Que no es buena",
    "fodder": "ALMA",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de ALMA = MALA.",
    "_def": "Que no es buena"
  },
  {
    "id": "d194",
    "difficulty": "experto",
    "clue": "Superficie que se pisa; pi, constante, so como sur-oeste, abreviado. (4)",
    "answer": "PISO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Superficie que se pisa",
    "fodder": "pi",
    "indicators": [
      "como"
    ],
    "explanation": "PI+SO=PISO",
    "_def": "Suelo de una planta"
  },
  {
    "id": "d195",
    "difficulty": "muy-dificil",
    "clue": "Recipiente con paredes; con Apenas juzga Ana, de entrada, dicen más de lo que parece. (4)",
    "answer": "CAJA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Recipiente con paredes",
    "fodder": "con Apenas juzga Ana",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «con Apenas juzga Ana» forman CAJA.",
    "_def": "Caja"
  },
  {
    "id": "d196",
    "difficulty": "experto",
    "clue": "Acción de salvar; resulta entre sin como Alguien también el, de entrada, dicen más de lo que parece. (7)",
    "answer": "RESCATE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Acción de salvar",
    "fodder": "resulta entre sin como Alguien también el",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «resulta entre sin como Alguien también el» forman RESCATE.",
    "_def": "Acción de salvar"
  },
  {
    "id": "d197",
    "difficulty": "dificil",
    "clue": "Marca dejada al pisar; huellas queda sin s antes de seguir. (6)",
    "answer": "HUELLA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Marca dejada al pisar",
    "fodder": "huellas",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de HUELLAS para obtener HUELLA.",
    "_def": "Rastro dejado al pasar"
  },
  {
    "id": "d198",
    "difficulty": "experto",
    "clue": "Puede interrumpir una llamada; cierra otra revisa tal el, de entrada, dicen más de lo que parece. (5)",
    "answer": "CORTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Puede interrumpir una llamada",
    "fodder": "cierra otra revisa tal el",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «cierra otra revisa tal el» forman CORTE.",
    "_def": "Sección o interrupción"
  },
  {
    "id": "d199",
    "difficulty": "muy-dificil",
    "clue": "Acuerdo con obligaciones; se cuela en contrato, sin llamar la atención. (8)",
    "answer": "CONTRATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Acuerdo con obligaciones",
    "fodder": "CONTRATO",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "CONTRATO oculto en contrato.",
    "_def": "Acuerdo legal"
  },
  {
    "id": "d200",
    "difficulty": "experto",
    "clue": "Aro que se lleva en un dedo; Ahora nos indica le la otro, de entrada, dicen más de lo que parece. (6)",
    "answer": "ANILLO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Aro que se lleva en un dedo",
    "fodder": "Ahora nos indica le la otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Ahora nos indica le la otro» forman ANILLO.",
    "_def": "Aro"
  },
  {
    "id": "d201",
    "difficulty": "experto",
    "clue": "Flor; se cuela en la rosa del jardín, sin llamar la atención. (4)",
    "answer": "ROSA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Flor",
    "fodder": "ROSA",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "ROSA aparece oculto en «la rosa del jardín».",
    "_def": "Flor"
  },
  {
    "id": "d202",
    "difficulty": "muy-dificil",
    "clue": "Parte posterior; COLAS queda sin S antes de seguir. (4)",
    "answer": "COLA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte posterior",
    "fodder": "COLAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de COLAS para obtener COLA.",
    "_def": "Parte posterior"
  },
  {
    "id": "d203",
    "difficulty": "experto",
    "clue": "Protección para la cabeza; CASCOS queda sin S antes de seguir. (5)",
    "answer": "CASCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Protección para la cabeza",
    "fodder": "CASCOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de CASCOS para obtener CASCO.",
    "_def": "Protección para la cabeza"
  },
  {
    "id": "d204",
    "difficulty": "experto",
    "clue": "Golpe dado con fuerza; Ayer zurdo otro tal el, de entrada, dicen más de lo que parece. (5)",
    "answer": "AZOTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Golpe dado con fuerza",
    "fodder": "Ayer zurdo otro tal el",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Ayer zurdo otro tal el» forman AZOTE.",
    "_def": "Golpe fuerte"
  },
  {
    "id": "d205",
    "difficulty": "experto",
    "clue": "Palabra que identifica; nos obviamente mira busca rápido en, de entrada, dicen más de lo que parece. (6)",
    "answer": "NOMBRE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Palabra que identifica",
    "fodder": "nos obviamente mira busca rápido en",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «nos obviamente mira busca rápido en» forman NOMBRE.",
    "_def": "Palabra que designa"
  },
  {
    "id": "d206",
    "difficulty": "muy-dificil",
    "clue": "Parte de una planta; revisa Ayer intenta zanja, de entrada, dicen más de lo que parece. (4)",
    "answer": "RAIZ",
    "mechanisms": [
      "initials"
    ],
    "definition": "Parte de una planta",
    "fodder": "revisa Ayer intenta zanja",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «revisa Ayer intenta zanja» forman RAIZ.",
    "_def": "Parte de la planta bajo tierra"
  },
  {
    "id": "d207",
    "difficulty": "experto",
    "clue": "Magnitud obtenida al medir; mira el desde intenta de Ayer, de entrada, dicen más de lo que parece. (6)",
    "answer": "MEDIDA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Magnitud obtenida al medir",
    "fodder": "mira el desde intenta de Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «mira el desde intenta de Ayer» forman MEDIDA.",
    "_def": "Cantidad expresada mediante una unidad"
  },
  {
    "id": "d208",
    "difficulty": "muy-dificil",
    "clue": "Embarcación; BARCOS queda sin S antes de seguir. (5)",
    "answer": "BARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Embarcación",
    "fodder": "BARCOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de BARCOS para obtener BARCO.",
    "_def": "Embarcación"
  },
  {
    "id": "d209",
    "difficulty": "dificil",
    "clue": "Capital italiana; AMOR vuelve sobre sus pasos. (4)",
    "answer": "ROMA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Capital italiana",
    "fodder": "AMOR",
    "indicators": [
      "vuelve sobre sus pasos"
    ],
    "explanation": "AMOR al revés = ROMA.",
    "_def": "Capital del Lacio"
  },
  {
    "id": "d210",
    "difficulty": "experto",
    "clue": "Persona que acompaña; casi observa mañana primero Apenas nadie esa revisa otro, de entrada, dicen más de lo que parece. (9)",
    "answer": "COMPANERO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Persona que acompaña",
    "fodder": "casi observa mañana primero Apenas nadie esa revisa otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «casi observa mañana primero Apenas nadie esa revisa otro» forman COMPANERO.",
    "_def": "Persona que acompaña"
  },
  {
    "id": "d211",
    "difficulty": "muy-dificil",
    "clue": "Línea que no es recta; CURVAS queda sin S antes de seguir. (5)",
    "answer": "CURVA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Línea que no es recta",
    "fodder": "CURVAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de CURVAS para obtener CURVA.",
    "_def": "Línea que no es recta"
  },
  {
    "id": "d212",
    "difficulty": "dificil",
    "clue": "Señal gráfica redonda; punta cambia una letra: a por o. (5)",
    "answer": "PUNTO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Señal gráfica redonda",
    "fodder": "PUNTA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "PUNTA cambia A por O = PUNTO.",
    "_def": "Lugar exacto"
  },
  {
    "id": "d213",
    "difficulty": "dificil",
    "clue": "Sucesión de peldaños; entre sin con Ahora luego el rápido Ana, de entrada, dicen más de lo que parece. (8)",
    "answer": "ESCALERA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Sucesión de peldaños",
    "fodder": "entre sin con Ahora luego el rápido Ana",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «entre sin con Ahora luego el rápido Ana» forman ESCALERA.",
    "_def": "Sucesión de peldaños"
  },
  {
    "id": "d214",
    "difficulty": "experto",
    "clue": "Parte más alta; cien, abreviado, ma como madre, abreviada. (4)",
    "answer": "CIMA",
    "mechanisms": [
      "charade"
    ],
    "definition": "Parte más alta",
    "fodder": "cien",
    "indicators": [
      "como"
    ],
    "explanation": "CI+MA=CIMA",
    "_def": "Parte más alta"
  },
  {
    "id": "d215",
    "difficulty": "dificil",
    "clue": "Roedor; rta abraza a a. (4)",
    "answer": "RATA",
    "mechanisms": [
      "container"
    ],
    "definition": "Roedor",
    "fodder": "A",
    "indicators": [
      "abraza"
    ],
    "explanation": "A dentro de RTA = RATA.",
    "_def": "Rata"
  },
  {
    "id": "d216",
    "difficulty": "muy-dificil",
    "clue": "Mujer distinguida; gama cambia una letra: g por d. (4)",
    "answer": "DAMA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Mujer distinguida",
    "fodder": "GAMA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "GAMA cambia G por D = DAMA.",
    "_def": "Mujer distinguida"
  },
  {
    "id": "d217",
    "difficulty": "muy-dificil",
    "clue": "Objeto para guardar documentos; casi Ana resulta primero esa tras Ayer, de entrada, dicen más de lo que parece. (7)",
    "answer": "CARPETA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Objeto para guardar documentos",
    "fodder": "casi Ana resulta primero esa tras Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «casi Ana resulta primero esa tras Ayer» forman CARPETA.",
    "_def": "Objeto para guardar papeles"
  },
  {
    "id": "d218",
    "difficulty": "muy-dificil",
    "clue": "Extremo de algo; casa, abreviada, bo como buque, abreviado. (4)",
    "answer": "CABO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Extremo de algo",
    "fodder": "casa",
    "indicators": [
      "como"
    ],
    "explanation": "CA+BO=CABO",
    "_def": "Extremo o jefe intermedio"
  },
  {
    "id": "d219",
    "difficulty": "muy-dificil",
    "clue": "Sin asperezas: isla perdió el rumbo antes de llegar. (4)",
    "answer": "LISA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Sin asperezas",
    "fodder": "isla",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de ISLA = LISA.",
    "_def": "Lisa"
  },
  {
    "id": "d220",
    "difficulty": "muy-dificil",
    "clue": "Descarga eléctrica atmosférica; rayos queda sin s antes de seguir. (4)",
    "answer": "RAYO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Descarga eléctrica atmosférica",
    "fodder": "rayos",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de RAYOS para obtener RAYO.",
    "_def": "Descarga luminosa"
  },
  {
    "id": "d221",
    "difficulty": "experto",
    "clue": "Habitación amplia; sal, on como encendido, en inglés. (5)",
    "answer": "SALON",
    "mechanisms": [
      "charade"
    ],
    "definition": "Habitación amplia",
    "fodder": "sal",
    "indicators": [
      "como"
    ],
    "explanation": "SAL+ON=SALON",
    "_def": "Habitación amplia"
  },
  {
    "id": "d222",
    "difficulty": "experto",
    "clue": "Borde de una página; Mientras alguien revisaba, ganó espacio, naturalmente, de entrada, dejan la respuesta escondida. (6)",
    "answer": "MARGEN",
    "mechanisms": [
      "initials"
    ],
    "definition": "Borde de una página",
    "fodder": "Mientras alguien revisaba, ganó espacio, naturalmente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Mientras alguien revisaba, ganó espacio, naturalmente» forman MARGEN.",
    "_def": "Borde o espacio lateral"
  },
  {
    "id": "d223",
    "difficulty": "experto",
    "clue": "Aspecto exterior; por imagina nos también Ana, de entrada, dicen más de lo que parece. (5)",
    "answer": "PINTA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Aspecto exterior",
    "fodder": "por imagina nos también Ana",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «por imagina nos también Ana» forman PINTA.",
    "_def": "Aspecto exterior"
  },
  {
    "id": "d224",
    "difficulty": "muy-dificil",
    "clue": "Movimiento hacia delante; Ana varias Ana nos cierra esa, de entrada, dicen más de lo que parece. (6)",
    "answer": "AVANCE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Movimiento hacia delante",
    "fodder": "Ana varias Ana nos cierra esa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Ana varias Ana nos cierra esa» forman AVANCE.",
    "_def": "Progreso"
  },
  {
    "id": "d225",
    "difficulty": "experto",
    "clue": "Parte dura del esqueleto; Hoy una enfermera salió observando, de entrada, dejan la respuesta escondida. (5)",
    "answer": "HUESO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Parte dura del esqueleto",
    "fodder": "Hoy una enfermera salió observando",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Hoy una enfermera salió observando» forman HUESO.",
    "_def": "Parte dura del esqueleto"
  },
  {
    "id": "d226",
    "difficulty": "experto",
    "clue": "Masa de agua interior; LARGO queda sin O antes de seguir. (4)",
    "answer": "LAGO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Masa de agua interior",
    "fodder": "LARGO",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de LARGO para obtener LAGO.",
    "_def": "Masa de agua interior"
  },
  {
    "id": "d227",
    "difficulty": "muy-dificil",
    "clue": "Lo que cubre el rostro; mira Alguien siempre casi Ayer rápido Apenas, de entrada, dicen más de lo que parece. (7)",
    "answer": "MASCARA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Lo que cubre el rostro",
    "fodder": "mira Alguien siempre casi Ayer rápido Apenas",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «mira Alguien siempre casi Ayer rápido Apenas» forman MASCARA.",
    "_def": "Objeto que cubre el rostro"
  },
  {
    "id": "d228",
    "difficulty": "experto",
    "clue": "Modifica algo; casi Ahora muy baja indica Apenas, de entrada, dicen más de lo que parece. (6)",
    "answer": "CAMBIA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Modifica algo",
    "fodder": "casi Ahora muy baja indica Apenas",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «casi Ahora muy baja indica Apenas» forman CAMBIA.",
    "_def": "Modifica"
  },
  {
    "id": "d229",
    "difficulty": "dificil",
    "clue": "Alegría sonora; ASIR vuelve sobre sus pasos. (4)",
    "answer": "RISA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Alegría sonora",
    "fodder": "ASIR",
    "indicators": [
      "vuelve sobre sus pasos"
    ],
    "explanation": "ASIR al revés = RISA.",
    "_def": "Risa"
  },
  {
    "id": "d230",
    "difficulty": "experto",
    "clue": "Grupo de alumnos; clave cambia una letra: v por s. (5)",
    "answer": "CLASE",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Grupo de alumnos",
    "fodder": "CLAVE",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "CLAVE cambia V por S = CLASE.",
    "_def": "Grupo de alumnos o categoría"
  },
  {
    "id": "d231",
    "difficulty": "experto",
    "clue": "Espacio sobre nuestras cabezas; CIELOS queda sin S antes de seguir. (5)",
    "answer": "CIELO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Espacio sobre nuestras cabezas",
    "fodder": "CIELOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de CIELOS para obtener CIELO.",
    "_def": "Espacio sobre nuestras cabezas"
  },
  {
    "id": "d232",
    "difficulty": "experto",
    "clue": "Número de ejemplares impresos; tal indica resulta Ayer desde Alguien, de entrada, dicen más de lo que parece. (6)",
    "answer": "TIRADA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Número de ejemplares impresos",
    "fodder": "tal indica resulta Ayer desde Alguien",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «tal indica resulta Ayer desde Alguien» forman TIRADA.",
    "_def": "Conjunto de ejemplares impresos"
  },
  {
    "id": "d233",
    "difficulty": "experto",
    "clue": "Puede llevar compras; bajo obviamente luego sin Ayer, de entrada, dicen más de lo que parece. (5)",
    "answer": "BOLSA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Puede llevar compras",
    "fodder": "bajo obviamente luego sin Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «bajo obviamente luego sin Ayer» forman BOLSA.",
    "_def": "Recipiente flexible"
  },
  {
    "id": "d234",
    "difficulty": "muy-dificil",
    "clue": "Asiento de un monarca: torno perdió el orden antes de la escena. (5)",
    "answer": "TRONO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Asiento de un monarca",
    "fodder": "TORNO",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de TORNO = TRONO.",
    "_def": "Asiento de un monarca"
  },
  {
    "id": "d235",
    "difficulty": "experto",
    "clue": "Construcción elevada; Construcción alta, perdido en torreón, sin llamar la atención. (5)",
    "answer": "TORRE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Construcción elevada",
    "fodder": "torre",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "TORRE aparece oculto en torreón.",
    "_def": "Construcción alta"
  },
  {
    "id": "d236",
    "difficulty": "dificil",
    "clue": "Representación a escala; pleno cambia una letra: e por a. (5)",
    "answer": "PLANO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Representación a escala",
    "fodder": "PLENO",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "PLENO cambia E por A = PLANO.",
    "_def": "Sin relieve"
  },
  {
    "id": "d237",
    "difficulty": "experto",
    "clue": "Puede ocultar al protagonista; primero Apenas nunca todo Alguien le luego Ahora, de entrada, dicen más de lo que parece. (8)",
    "answer": "PANTALLA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Puede ocultar al protagonista",
    "fodder": "primero Apenas nunca todo Alguien le luego Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «primero Apenas nunca todo Alguien le luego Ahora» forman PANTALLA.",
    "_def": "Superficie donde se muestra algo"
  },
  {
    "id": "d238",
    "difficulty": "dificil",
    "clue": "Acción de encajar; en nunca cierra Ana junto entre, de entrada, dicen más de lo que parece. (6)",
    "answer": "ENCAJE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Acción de encajar",
    "fodder": "en nunca cierra Ana junto entre",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «en nunca cierra Ana junto entre» forman ENCAJE.",
    "_def": "Tejido ornamental"
  },
  {
    "id": "d239",
    "difficulty": "muy-dificil",
    "clue": "Separación entre dos puntos; donde indica solo todo Ayer no cada Inés Ayer, de entrada, dicen más de lo que parece. (9)",
    "answer": "DISTANCIA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Separación entre dos puntos",
    "fodder": "donde indica solo todo Ayer no cada Inés Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «donde indica solo todo Ayer no cada Inés Ayer» forman DISTANCIA.",
    "_def": "Espacio entre dos puntos"
  },
  {
    "id": "d240",
    "difficulty": "dificil",
    "clue": "Órgano de la visión; Ojo, perdido en ojota, sin llamar la atención. (3)",
    "answer": "OJO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Órgano de la visión",
    "fodder": "ojo",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "OJO aparece oculto en ojota.",
    "_def": "Ojo"
  },
  {
    "id": "d241",
    "difficulty": "muy-dificil",
    "clue": "Fija el barco: canal perdió el rumbo antes de llegar. (5)",
    "answer": "ANCLA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Fija el barco",
    "fodder": "canal",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de CANAL = ANCLA.",
    "_def": "Pieza que sujeta una embarcación"
  },
  {
    "id": "d242",
    "difficulty": "experto",
    "clue": "Defensa protectora; en sin con usted donde observa, de entrada, dicen más de lo que parece. (6)",
    "answer": "ESCUDO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Defensa protectora",
    "fodder": "en sin con usted donde observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «en sin con usted donde observa» forman ESCUDO.",
    "_def": "Emblema protector"
  },
  {
    "id": "d243",
    "difficulty": "muy-dificil",
    "clue": "Pieza que cubre: pata perdió el rumbo antes de llegar. (4)",
    "answer": "TAPA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Pieza que cubre",
    "fodder": "pata",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de PATA = TAPA.",
    "_def": "Cubierta de un recipiente"
  },
  {
    "id": "d244",
    "difficulty": "experto",
    "clue": "Pieza alargada, perdido en barranco, sin llamar la atención. (5)",
    "answer": "BARRA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Pieza alargada",
    "fodder": "barra",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "BARRA aparece oculto en barranco.",
    "_def": "Pieza alargada"
  },
  {
    "id": "d245",
    "difficulty": "experto",
    "clue": "Acción de montar; mira otra nadie también Ana jamás esa, de entrada, dicen más de lo que parece. (7)",
    "answer": "MONTAJE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Acción de montar",
    "fodder": "mira otra nadie también Ana jamás esa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «mira otra nadie también Ana jamás esa» forman MONTAJE.",
    "_def": "Proceso de ensamblar"
  },
  {
    "id": "d246",
    "difficulty": "muy-dificil",
    "clue": "Recorrido cerrado; casi imagina resulta con una intenta tal otra, de entrada, dicen más de lo que parece. (8)",
    "answer": "CIRCUITO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Recorrido cerrado",
    "fodder": "casi imagina resulta con una intenta tal otra",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «casi imagina resulta con una intenta tal otra» forman CIRCUITO.",
    "_def": "Recorrido cerrado de corriente o movimiento"
  },
  {
    "id": "d247",
    "difficulty": "dificil",
    "clue": "Gran extensión salada; Mar, perdido en comarca, sin llamar la atención. (3)",
    "answer": "MAR",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Gran extensión salada",
    "fodder": "mar",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "MAR aparece oculto en comarca.",
    "_def": "Mar"
  },
  {
    "id": "d248",
    "difficulty": "experto",
    "clue": "Primate; mira otro no otro, de entrada, dicen más de lo que parece. (4)",
    "answer": "MONO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Primate",
    "fodder": "mira otro no otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «mira otro no otro» forman MONO.",
    "_def": "Animal primate o prenda"
  },
  {
    "id": "d249",
    "difficulty": "experto",
    "clue": "Espacio de entrada de un edificio; Ana tal resulta intenta otra, de entrada, dicen más de lo que parece. (5)",
    "answer": "ATRIO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Espacio de entrada de un edificio",
    "fodder": "Ana tal resulta intenta otra",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Ana tal resulta intenta otra» forman ATRIO.",
    "_def": "Espacio previo a un edificio"
  },
  {
    "id": "d250",
    "difficulty": "muy-dificil",
    "clue": "Lo esperas en una fila; turista, abreviado, no como negación. (5)",
    "answer": "TURNO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Lo esperas en una fila",
    "fodder": "turista",
    "indicators": [
      "como"
    ],
    "explanation": "TUR+NO=TURNO",
    "_def": "Orden de intervención"
  },
  {
    "id": "d251",
    "difficulty": "experto",
    "clue": "Superficie que se pisa; sobre usted en la observa, de entrada, dicen más de lo que parece. (5)",
    "answer": "SUELO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Superficie que se pisa",
    "fodder": "sobre usted en la observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «sobre usted en la observa» forman SUELO.",
    "_def": "Superficie que pisamos"
  },
  {
    "id": "d252",
    "difficulty": "muy-dificil",
    "clue": "Disminución de un dolor; alivios queda sin s antes de seguir. (6)",
    "answer": "ALIVIO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Disminución de un dolor",
    "fodder": "alivios",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de ALIVIOS para obtener ALIVIO.",
    "_def": "Sensación de descanso"
  },
  {
    "id": "d253",
    "difficulty": "dificil",
    "clue": "Material para confeccionar ropa; Tela, perdido en estela, sin llamar la atención. (4)",
    "answer": "TELA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Material para confeccionar ropa",
    "fodder": "tela",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "TELA aparece oculto en estela.",
    "_def": "Tela"
  },
  {
    "id": "d254",
    "difficulty": "experto",
    "clue": "Pieza que gira y produce impulso; hace entre la intenta casi esa, de entrada, dicen más de lo que parece. (6)",
    "answer": "HELICE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Pieza que gira y produce impulso",
    "fodder": "hace entre la intenta casi esa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «hace entre la intenta casi esa» forman HELICE.",
    "_def": "Elemento que gira para propulsar"
  },
  {
    "id": "d255",
    "difficulty": "dificil",
    "clue": "Acción de elevarse del suelo; SALTOS queda sin S antes de seguir. (5)",
    "answer": "SALTO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Acción de elevarse del suelo",
    "fodder": "SALTOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de SALTOS para obtener SALTO.",
    "_def": "Brinco"
  },
  {
    "id": "d256",
    "difficulty": "experto",
    "clue": "Recinto para animales; como otra recuerda rápido Ayer luego, de entrada, dicen más de lo que parece. (6)",
    "answer": "CORRAL",
    "mechanisms": [
      "initials"
    ],
    "definition": "Recinto para animales",
    "fodder": "como otra recuerda rápido Ayer luego",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «como otra recuerda rápido Ayer luego» forman CORRAL.",
    "_def": "Recinto para animales"
  },
  {
    "id": "d257",
    "difficulty": "experto",
    "clue": "Representación resumida; entre solo quizá una entre mientras Ana, de entrada, dicen más de lo que parece. (7)",
    "answer": "ESQUEMA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Representación resumida",
    "fodder": "entre solo quizá una entre mientras Ana",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «entre solo quizá una entre mientras Ana» forman ESQUEMA.",
    "_def": "Representación simplificada"
  },
  {
    "id": "d258",
    "difficulty": "experto",
    "clue": "Representación visual; se cuela en la imagen quedó nítida, sin llamar la atención. (6)",
    "answer": "IMAGEN",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Representación visual",
    "fodder": "IMAGEN",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "IMAGEN aparece oculto en «la imagen quedó nítida».",
    "_def": "Representación visual"
  },
  {
    "id": "d259",
    "difficulty": "experto",
    "clue": "Extremo de un eje; palo cambia una letra: a por o. (4)",
    "answer": "POLO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Extremo de un eje",
    "fodder": "PALO",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "PALO cambia A por O = POLO.",
    "_def": "Extremo de un eje o prenda"
  },
  {
    "id": "d260",
    "difficulty": "experto",
    "clue": "Cuerpo celeste; Ahora sobre todo recuerda observa, de entrada, dicen más de lo que parece. (5)",
    "answer": "ASTRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Cuerpo celeste",
    "fodder": "Ahora sobre todo recuerda observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Ahora sobre todo recuerda observa» forman ASTRO.",
    "_def": "Cuerpo celeste"
  },
  {
    "id": "d261",
    "difficulty": "experto",
    "clue": "Cubo de juego; dato cambia una letra: t por d. (4)",
    "answer": "DADO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Cubo de juego",
    "fodder": "DATO",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "DATO cambia T por D = DADO.",
    "_def": "Cubo para juegos"
  },
  {
    "id": "d262",
    "difficulty": "experto",
    "clue": "Se abre en una pared; ve en nos todo Ana nadie Ayer, de entrada, dicen más de lo que parece. (7)",
    "answer": "VENTANA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Se abre en una pared",
    "fodder": "ve en nos todo Ana nadie Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «ve en nos todo Ana nadie Ayer» forman VENTANA.",
    "_def": "Abertura con luz"
  },
  {
    "id": "d263",
    "difficulty": "muy-dificil",
    "clue": "Establecimiento abierto al público; luego observa cada Ahora la, de entrada, dicen más de lo que parece. (5)",
    "answer": "LOCAL",
    "mechanisms": [
      "initials"
    ],
    "definition": "Establecimiento abierto al público",
    "fodder": "luego observa cada Ahora la",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «luego observa cada Ahora la» forman LOCAL.",
    "_def": "Del lugar"
  },
  {
    "id": "d264",
    "difficulty": "experto",
    "clue": "Borde de un río o mar; otro rápido Inés le la Ahora, de entrada, dicen más de lo que parece. (6)",
    "answer": "ORILLA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Borde de un río o mar",
    "fodder": "otro rápido Inés le la Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «otro rápido Inés le la Ahora» forman ORILLA.",
    "_def": "Borde del agua o terreno"
  },
  {
    "id": "d265",
    "difficulty": "muy-dificil",
    "clue": "Motivo de algo; CAUSAS queda sin S antes de seguir. (5)",
    "answer": "CAUSA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Motivo de algo",
    "fodder": "CAUSAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de CAUSAS para obtener CAUSA.",
    "_def": "Motivo de un hecho"
  },
  {
    "id": "d266",
    "difficulty": "muy-dificil",
    "clue": "Acción de disparar; disparos queda sin s antes de seguir. (7)",
    "answer": "DISPARO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Acción de disparar",
    "fodder": "disparos",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de DISPAROS para obtener DISPARO.",
    "_def": "Acción de lanzar un proyectil"
  },
  {
    "id": "d267",
    "difficulty": "muy-dificil",
    "clue": "Producto de una combustión; hasta usted mañana obviamente, de entrada, dicen más de lo que parece. (4)",
    "answer": "HUMO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Producto de una combustión",
    "fodder": "hasta usted mañana obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «hasta usted mañana obviamente» forman HUMO.",
    "_def": "Producto gaseoso de una combustión"
  },
  {
    "id": "d268",
    "difficulty": "muy-dificil",
    "clue": "Pieza de un juego; fue intenta cierra hace Ahora, de entrada, dicen más de lo que parece. (5)",
    "answer": "FICHA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Pieza de un juego",
    "fodder": "fue intenta cierra hace Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «fue intenta cierra hace Ahora» forman FICHA.",
    "_def": "Pieza o registro pequeño"
  },
  {
    "id": "d269",
    "difficulty": "experto",
    "clue": "Sacerdote; cuba cambia una letra: b por r. (4)",
    "answer": "CURA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Sacerdote",
    "fodder": "CUBA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "CUBA cambia B por R = CURA.",
    "_def": "Sacerdote o remedio"
  },
  {
    "id": "d270",
    "difficulty": "experto",
    "clue": "Puede tener curvas y asfalto; pero intenta siempre tal Alguien, de entrada, dicen más de lo que parece. (5)",
    "answer": "PISTA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Puede tener curvas y asfalto",
    "fodder": "pero intenta siempre tal Alguien",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «pero intenta siempre tal Alguien» forman PISTA.",
    "_def": "Indicio o lugar de carrera"
  },
  {
    "id": "d271",
    "difficulty": "muy-dificil",
    "clue": "Suelo; sierra cambia una letra: s por t. (6)",
    "answer": "TIERRA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Suelo",
    "fodder": "SIERRA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "SIERRA cambia S por T = TIERRA.",
    "_def": "Suelo o planeta"
  },
  {
    "id": "d272",
    "difficulty": "muy-dificil",
    "clue": "Parte de una prenda; MANGAS queda sin S antes de seguir. (5)",
    "answer": "MANGA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte de una prenda",
    "fodder": "MANGAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de MANGAS para obtener MANGA.",
    "_def": "Parte de una prenda"
  },
  {
    "id": "d273",
    "difficulty": "muy-dificil",
    "clue": "Pieza metálica para fijar; Pieza para unir mediante golpe, perdido en clavote, sin llamar la atención. (5)",
    "answer": "CLAVO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Pieza metálica para fijar",
    "fodder": "clavo",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "CLAVO aparece oculto en clavote.",
    "_def": "Pieza para unir mediante golpe"
  },
  {
    "id": "d274",
    "difficulty": "experto",
    "clue": "Superficie de tierra; tal esa revisa resulta en nadie obviamente, de entrada, dicen más de lo que parece. (7)",
    "answer": "TERRENO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Superficie de tierra",
    "fodder": "tal esa revisa resulta en nadie obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «tal esa revisa resulta en nadie obviamente» forman TERRENO.",
    "_def": "Superficie de tierra"
  },
  {
    "id": "d275",
    "difficulty": "dificil",
    "clue": "Suena; can, perro, to como to, interjección. (5)",
    "answer": "CANTO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Suena",
    "fodder": "can",
    "indicators": [
      "como"
    ],
    "explanation": "CAN+TO=CANTO",
    "_def": "Borde de una pieza"
  },
  {
    "id": "d276",
    "difficulty": "dificil",
    "clue": "Parte puntiaguda; se cuela en el pequeño pico nevado, sin llamar la atención. (4)",
    "answer": "PICO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Parte puntiaguda",
    "fodder": "PICO",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "PICO aparece oculto en «el pequeño pico nevado».",
    "_def": "Punta aguda"
  },
  {
    "id": "d277",
    "difficulty": "experto",
    "clue": "Contorno de una figura; por el revisa frente indica le, de entrada, dicen más de lo que parece. (6)",
    "answer": "PERFIL",
    "mechanisms": [
      "initials"
    ],
    "definition": "Contorno de una figura",
    "fodder": "por el revisa frente indica le",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «por el revisa frente indica le» forman PERFIL.",
    "_def": "Contorno de una figura"
  },
  {
    "id": "d278",
    "difficulty": "dificil",
    "clue": "Da entrada a una casa; Abertura de paso, perdido en puertazo, sin llamar la atención. (6)",
    "answer": "PUERTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Da entrada a una casa",
    "fodder": "puerta",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "PUERTA aparece oculto en puertazo.",
    "_def": "Abertura de paso"
  },
  {
    "id": "d279",
    "difficulty": "experto",
    "clue": "Objeto que arde con una mecha; bela cambia una letra: b por v. (4)",
    "answer": "VELA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Objeto que arde con una mecha",
    "fodder": "BELA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "BELA cambia B por V = VELA.",
    "_def": "Objeto de cera o tela para navegar"
  },
  {
    "id": "d280",
    "difficulty": "experto",
    "clue": "Actividad para ocupar el tiempo; Actividad para ocupar el tiempo, perdido en pasatiempo, sin llamar la atención. (10)",
    "answer": "PASATIEMPO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Actividad para ocupar el tiempo",
    "fodder": "pasatiempo",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "PASATIEMPO aparece oculto en pasatiempo.",
    "_def": "Actividad para ocupar el tiempo"
  },
  {
    "id": "d281",
    "difficulty": "dificil",
    "clue": "Malla de hilos; se cuela en la redacción quedó lista, sin llamar la atención. (3)",
    "answer": "RED",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Malla de hilos",
    "fodder": "RED",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "RED aparece oculto en «la redacción quedó lista».",
    "_def": "Malla para atrapar"
  },
  {
    "id": "d282",
    "difficulty": "experto",
    "clue": "Tira estrecha de material; CINTAS queda sin S antes de seguir. (5)",
    "answer": "CINTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Tira estrecha de material",
    "fodder": "CINTAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de CINTAS para obtener CINTA.",
    "_def": "Tira estrecha"
  },
  {
    "id": "d283",
    "difficulty": "experto",
    "clue": "Parte plana de una planta; hace observa junta Ayer, de entrada, dicen más de lo que parece. (4)",
    "answer": "HOJA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Parte plana de una planta",
    "fodder": "hace observa junta Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «hace observa junta Ayer» forman HOJA.",
    "_def": "Parte plana de una planta"
  },
  {
    "id": "d284",
    "difficulty": "muy-dificil",
    "clue": "Proyectil; BALAS queda sin S antes de seguir. (4)",
    "answer": "BALA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Proyectil",
    "fodder": "BALAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de BALAS para obtener BALA.",
    "_def": "Proyectil pequeño"
  },
  {
    "id": "d285",
    "difficulty": "experto",
    "clue": "Unión entre cosas; esa nos la Ana cada el, de entrada, dicen más de lo que parece. (6)",
    "answer": "ENLACE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Unión entre cosas",
    "fodder": "esa nos la Ana cada el",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «esa nos la Ana cada el» forman ENLACE.",
    "_def": "Unión"
  },
  {
    "id": "d286",
    "difficulty": "experto",
    "clue": "Que contiene dos veces una cantidad; donde otro buen los en, de entrada, dicen más de lo que parece. (5)",
    "answer": "DOBLE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Que contiene dos veces una cantidad",
    "fodder": "donde otro buen los en",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «donde otro buen los en» forman DOBLE.",
    "_def": "Que vale dos"
  },
  {
    "id": "d287",
    "difficulty": "muy-dificil",
    "clue": "Pelota para jugar; bajo Ana luego otra nunca, de entrada, dicen más de lo que parece. (5)",
    "answer": "BALON",
    "mechanisms": [
      "initials"
    ],
    "definition": "Pelota para jugar",
    "fodder": "bajo Ana luego otra nunca",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «bajo Ana luego otra nunca» forman BALON.",
    "_def": "Pelota usada en deportes"
  },
  {
    "id": "d288",
    "difficulty": "experto",
    "clue": "Parte posterior; dorsos queda sin s antes de seguir. (5)",
    "answer": "DORSO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte posterior",
    "fodder": "dorsos",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de DORSOS para obtener DORSO.",
    "_def": "Parte posterior"
  },
  {
    "id": "d289",
    "difficulty": "experto",
    "clue": "Prenda para la mano, perdido en guantelete, sin llamar la atención. (6)",
    "answer": "GUANTE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Prenda para la mano",
    "fodder": "guante",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "GUANTE aparece oculto en guantelete.",
    "_def": "Prenda para la mano"
  },
  {
    "id": "d290",
    "difficulty": "dificil",
    "clue": "De gran altura; Ahora le tras observa, de entrada, dicen más de lo que parece. (4)",
    "answer": "ALTO",
    "mechanisms": [
      "initials"
    ],
    "definition": "De gran altura",
    "fodder": "Ahora le tras observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Ahora le tras observa» forman ALTO.",
    "_def": "Alto"
  },
  {
    "id": "d291",
    "difficulty": "muy-dificil",
    "clue": "Comida de la noche: nace perdió el orden antes de la escena. (4)",
    "answer": "CENA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Comida de la noche",
    "fodder": "NACE",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de NACE = CENA.",
    "_def": "Comida de la noche"
  },
  {
    "id": "d292",
    "difficulty": "muy-dificil",
    "clue": "Relativo a la conducta, perdido en moralista, sin llamar la atención. (5)",
    "answer": "MORAL",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Relativo a la conducta",
    "fodder": "moral",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "MORAL aparece oculto en moralista.",
    "_def": "Relativo a la conducta"
  },
  {
    "id": "d293",
    "difficulty": "experto",
    "clue": "Señal distintiva; marta cambia una letra: t por c. (5)",
    "answer": "MARCA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Señal distintiva",
    "fodder": "MARTA",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "MARTA cambia T por C = MARCA.",
    "_def": "Señal distintiva"
  },
  {
    "id": "d294",
    "difficulty": "muy-dificil",
    "clue": "Conjunto de cables; cierra Ana bajo la en Ahora de observa, de entrada, dicen más de lo que parece. (8)",
    "answer": "CABLEADO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Conjunto de cables",
    "fodder": "cierra Ana bajo la en Ahora de observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «cierra Ana bajo la en Ahora de observa» forman CABLEADO.",
    "_def": "Conjunto de cables"
  },
  {
    "id": "d295",
    "difficulty": "dificil",
    "clue": "Parte frontal de la cabeza; se cuela en la caravana siguió de largo, sin llamar la atención. (4)",
    "answer": "CARA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Parte frontal de la cabeza",
    "fodder": "CARA",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "CARA aparece oculto en «la caravana siguió de largo».",
    "_def": "Parte delantera de algo"
  },
  {
    "id": "d296",
    "difficulty": "muy-dificil",
    "clue": "Parte principal de un árbol; TRONCOS queda sin S antes de seguir. (6)",
    "answer": "TRONCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte principal de un árbol",
    "fodder": "TRONCOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de TRONCOS para obtener TRONCO.",
    "_def": "Parte principal de un árbol"
  },
  {
    "id": "d297",
    "difficulty": "dificil",
    "clue": "Utensilio para trasvasar líquidos; embudos queda sin s antes de seguir. (6)",
    "answer": "EMBUDO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Utensilio para trasvasar líquidos",
    "fodder": "embudos",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de EMBUDOS para obtener EMBUDO.",
    "_def": "Utensilio para trasvasar líquidos"
  },
  {
    "id": "d298",
    "difficulty": "dificil",
    "clue": "El colectivo la hace; primero Apenas recuerda Alguien donde Apenas, de entrada, dicen más de lo que parece. (6)",
    "answer": "PARADA",
    "mechanisms": [
      "initials"
    ],
    "definition": "El colectivo la hace",
    "fodder": "primero Apenas recuerda Alguien donde Apenas",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «primero Apenas recuerda Alguien donde Apenas» forman PARADA.",
    "_def": "Lugar donde se detiene un transporte"
  },
  {
    "id": "d299",
    "difficulty": "dificil",
    "clue": "Palo para golpear una pelota; se cuela en el combate terminó temprano, sin llamar la atención. (4)",
    "answer": "BATE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Palo para golpear una pelota",
    "fodder": "BATE",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "BATE aparece oculto en «el combate terminó temprano».",
    "_def": "Golpea desde el banco"
  },
  {
    "id": "d300",
    "difficulty": "experto",
    "clue": "Documento de una reunión; Ayer cierra todo Ahora, de entrada, dicen más de lo que parece. (4)",
    "answer": "ACTA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Documento de una reunión",
    "fodder": "Ayer cierra todo Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Ayer cierra todo Ahora» forman ACTA.",
    "_def": "Documento que deja constancia"
  },
  {
    "id": "d301",
    "difficulty": "dificil",
    "clue": "Parte de un árbol: arma perdió el rumbo antes de llegar. (4)",
    "answer": "RAMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Parte de un árbol",
    "fodder": "arma",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de ARMA = RAMA.",
    "_def": "Rama"
  },
  {
    "id": "d302",
    "difficulty": "muy-dificil",
    "clue": "Masa visible de vapor de agua; NUBES queda sin S antes de seguir. (4)",
    "answer": "NUBE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Masa visible de vapor de agua",
    "fodder": "NUBES",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de NUBES para obtener NUBE.",
    "_def": "Masa visible de gotas"
  },
  {
    "id": "d303",
    "difficulty": "experto",
    "clue": "Tejido muscular animal; coche, abreviado, ne como noreste, abreviado. (5)",
    "answer": "CARNE",
    "mechanisms": [
      "charade"
    ],
    "definition": "Tejido muscular animal",
    "fodder": "coche",
    "indicators": [
      "como"
    ],
    "explanation": "CAR+NE=CARNE",
    "_def": "Tejido muscular comestible"
  },
  {
    "id": "d304",
    "difficulty": "muy-dificil",
    "clue": "Viento suave; BRISAS queda sin S antes de seguir. (5)",
    "answer": "BRISA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Viento suave",
    "fodder": "BRISAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de BRISAS para obtener BRISA.",
    "_def": "Viento suave"
  },
  {
    "id": "d305",
    "difficulty": "dificil",
    "clue": "Lámpara portátil; los imagina no tras en recuerda nadie Alguien, de entrada, dicen más de lo que parece. (8)",
    "answer": "LINTERNA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Lámpara portátil",
    "fodder": "los imagina no tras en recuerda nadie Alguien",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «los imagina no tras en recuerda nadie Alguien» forman LINTERNA.",
    "_def": "Luz portátil"
  },
  {
    "id": "d306",
    "difficulty": "muy-dificil",
    "clue": "Parte superior de una habitación; tras entre casi hoy obviamente, de entrada, dicen más de lo que parece. (5)",
    "answer": "TECHO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Parte superior de una habitación",
    "fodder": "tras entre casi hoy obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «tras entre casi hoy obviamente» forman TECHO.",
    "_def": "Cubierta superior de un edificio"
  },
  {
    "id": "d307",
    "difficulty": "experto",
    "clue": "Choque o impacto; gira observa la por en, de entrada, dicen más de lo que parece. (5)",
    "answer": "GOLPE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Choque o impacto",
    "fodder": "gira observa la por en",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «gira observa la por en» forman GOLPE.",
    "_def": "Impacto"
  },
  {
    "id": "d308",
    "difficulty": "experto",
    "clue": "Vía para desplazarse; camino, abreviado, ino como interior, abreviado. (6)",
    "answer": "CAMINO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Vía para desplazarse",
    "fodder": "camino",
    "indicators": [
      "como"
    ],
    "explanation": "CAM+INO=CAMINO",
    "_def": "Vía para ir de un sitio a otro"
  },
  {
    "id": "d309",
    "difficulty": "dificil",
    "clue": "Comida mexicana; se cuela en el taco de billar, sin llamar la atención. (4)",
    "answer": "TACO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Comida mexicana",
    "fodder": "TACO",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "TACO aparece oculto en «el taco de billar».",
    "_def": "Porción o pieza compacta"
  },
  {
    "id": "d310",
    "difficulty": "dificil",
    "clue": "Elevación de agua; suena como hola al oído. (3)",
    "answer": "OLA",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Elevación de agua",
    "fodder": "hola",
    "indicators": [
      "al oído"
    ],
    "explanation": "OLA suena como hola.",
    "_def": "Masa de agua que avanza"
  },
  {
    "id": "d311",
    "difficulty": "dificil",
    "clue": "Juguete que vuela con hilo; como obviamente muy esa tal Ahora, de entrada, dicen más de lo que parece. (6)",
    "answer": "COMETA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Juguete que vuela con hilo",
    "fodder": "como obviamente muy esa tal Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «como obviamente muy esa tal Ahora» forman COMETA.",
    "_def": "Cuerpo que sigue una órbita larga"
  },
  {
    "id": "d312",
    "difficulty": "experto",
    "clue": "Altura de un sonido; tino cambia una letra: i por o. (4)",
    "answer": "TONO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Altura de un sonido",
    "fodder": "TINO",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "TINO cambia I por O = TONO.",
    "_def": "Grado de color o sonido"
  },
  {
    "id": "d313",
    "difficulty": "experto",
    "clue": "Ave doméstica; guarda Ana la luego Inés nunca Ayer, de entrada, dicen más de lo que parece. (7)",
    "answer": "GALLINA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Ave doméstica",
    "fodder": "guarda Ana la luego Inés nunca Ayer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «guarda Ana la luego Inés nunca Ayer» forman GALLINA.",
    "_def": "Ave doméstica"
  },
  {
    "id": "d314",
    "difficulty": "dificil",
    "clue": "Línea alrededor de la que gira algo; el junta esa, de entrada, dicen más de lo que parece. (3)",
    "answer": "EJE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Línea alrededor de la que gira algo",
    "fodder": "el junta esa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «el junta esa» forman EJE.",
    "_def": "Pivote de un mecanismo"
  },
  {
    "id": "d315",
    "difficulty": "experto",
    "clue": "Acción de rodar; recuerda otro de Ana, de entrada, dicen más de lo que parece. (4)",
    "answer": "RODA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Acción de rodar",
    "fodder": "recuerda otro de Ana",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «recuerda otro de Ana» forman RODA.",
    "_def": "Quilla de la proa"
  },
  {
    "id": "d316",
    "difficulty": "experto",
    "clue": "Caja para recibir cartas; buen una zona observa nos, de entrada, dicen más de lo que parece. (5)",
    "answer": "BUZON",
    "mechanisms": [
      "initials"
    ],
    "definition": "Caja para recibir cartas",
    "fodder": "buen una zona observa nos",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «buen una zona observa nos» forman BUZON.",
    "_def": "Caja para cartas"
  },
  {
    "id": "d317",
    "difficulty": "experto",
    "clue": "Objeto que da forma; Mientras observa, luego decide, entra, de entrada, dejan la respuesta escondida. (5)",
    "answer": "MOLDE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Objeto que da forma",
    "fodder": "Mientras observa, luego decide, entra",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Mientras observa, luego decide, entra» forman MOLDE.",
    "_def": "Forma para reproducir"
  },
  {
    "id": "d318",
    "difficulty": "experto",
    "clue": "Figura de dos líneas que se cortan; con resulta usa zurdo, de entrada, dicen más de lo que parece. (4)",
    "answer": "CRUZ",
    "mechanisms": [
      "initials"
    ],
    "definition": "Figura de dos líneas que se cortan",
    "fodder": "con resulta usa zurdo",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «con resulta usa zurdo» forman CRUZ.",
    "_def": "Figura de dos brazos"
  },
  {
    "id": "d319",
    "difficulty": "muy-dificil",
    "clue": "Línea aparente del cielo; hacia otro recuerda Inés zurdo otro nadie tal esa, de entrada, dicen más de lo que parece. (9)",
    "answer": "HORIZONTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Línea aparente del cielo",
    "fodder": "hacia otro recuerda Inés zurdo otro nadie tal esa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «hacia otro recuerda Inés zurdo otro nadie tal esa» forman HORIZONTE.",
    "_def": "Línea aparente donde cielo y tierra se encuentran"
  },
  {
    "id": "d320",
    "difficulty": "experto",
    "clue": "Combustión con llamas; juego cambia una letra: j por f. (5)",
    "answer": "FUEGO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Combustión con llamas",
    "fodder": "JUEGO",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "JUEGO cambia J por F = FUEGO.",
    "_def": "Combustión"
  },
  {
    "id": "d321",
    "difficulty": "muy-dificil",
    "clue": "Conjunto de instrumentos de percusión; baja Ana tras en recuerda intenta Apenas, de entrada, dicen más de lo que parece. (7)",
    "answer": "BATERIA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Conjunto de instrumentos de percusión",
    "fodder": "baja Ana tras en recuerda intenta Apenas",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «baja Ana tras en recuerda intenta Apenas» forman BATERIA.",
    "_def": "Conjunto de elementos o instrumento de percusión"
  },
  {
    "id": "d322",
    "difficulty": "dificil",
    "clue": "Mueble para apoyar cosas; Mesa, perdido en mesada, sin llamar la atención. (4)",
    "answer": "MESA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Mueble para apoyar cosas",
    "fodder": "mesa",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "MESA aparece oculto en mesada.",
    "_def": "Mesa"
  },
  {
    "id": "d323",
    "difficulty": "experto",
    "clue": "Puede esperarte en una sala; Alguien sin intenta entre nos también otro, de entrada, dicen más de lo que parece. (7)",
    "answer": "ASIENTO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Puede esperarte en una sala",
    "fodder": "Alguien sin intenta entre nos también otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «Alguien sin intenta entre nos también otro» forman ASIENTO.",
    "_def": "Lugar para sentarse"
  },
  {
    "id": "d324",
    "difficulty": "muy-dificil",
    "clue": "Queda escrito en un archivo; revisa entre gira indica sobre tras recuerda otro, de entrada, dicen más de lo que parece. (8)",
    "answer": "REGISTRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Queda escrito en un archivo",
    "fodder": "revisa entre gira indica sobre tras recuerda otro",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «revisa entre gira indica sobre tras recuerda otro» forman REGISTRO.",
    "_def": "Constancia escrita"
  },
  {
    "id": "d325",
    "difficulty": "muy-dificil",
    "clue": "Máquina que produce movimiento; MOTORES queda sin S antes de seguir. (5)",
    "answer": "MOTOR",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Máquina que produce movimiento",
    "fodder": "MOTORES",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de MOTORES para obtener MOTOR.",
    "_def": "Máquina que genera movimiento"
  },
  {
    "id": "d326",
    "difficulty": "experto",
    "clue": "Está debajo de todo; finalmente otra nos donde obviamente, de entrada, dicen más de lo que parece. (5)",
    "answer": "FONDO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Está debajo de todo",
    "fodder": "finalmente otra nos donde obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «finalmente otra nos donde obviamente» forman FONDO.",
    "_def": "Parte más profunda"
  },
  {
    "id": "d327",
    "difficulty": "experto",
    "clue": "Fila de asientos; gradas queda sin s antes de seguir. (5)",
    "answer": "GRADA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Fila de asientos",
    "fodder": "gradas",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de GRADAS para obtener GRADA.",
    "_def": "Peldaño amplio"
  },
  {
    "id": "d328",
    "difficulty": "experto",
    "clue": "Masa gaseosa luminosa de un fuego; se cuela en la llama del mechero, sin llamar la atención. (5)",
    "answer": "LLAMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Masa gaseosa luminosa de un fuego",
    "fodder": "LLAMA",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "LLAMA aparece oculto en «la llama del mechero».",
    "_def": "Lengua de fuego o animal andino"
  },
  {
    "id": "d329",
    "difficulty": "experto",
    "clue": "Parte entre cabeza y tronco; con usted el la luego otra, de entrada, dicen más de lo que parece. (6)",
    "answer": "CUELLO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Parte entre cabeza y tronco",
    "fodder": "con usted el la luego otra",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «con usted el la luego otra» forman CUELLO.",
    "_def": "Parte que une cabeza y tronco"
  },
  {
    "id": "d330",
    "difficulty": "muy-dificil",
    "clue": "Celebración religiosa: sima perdió el orden antes de la escena. (4)",
    "answer": "MISA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Celebración religiosa",
    "fodder": "SIMA",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de SIMA = MISA.",
    "_def": "Celebración religiosa"
  },
  {
    "id": "d331",
    "difficulty": "muy-dificil",
    "clue": "Algo que queda por hacer; primero en no donde intenta el nadie tal el, de entrada, dicen más de lo que parece. (9)",
    "answer": "PENDIENTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "Algo que queda por hacer",
    "fodder": "primero en no donde intenta el nadie tal el",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «primero en no donde intenta el nadie tal el» forman PENDIENTE.",
    "_def": "Que queda por hacer o arete"
  },
  {
    "id": "d332",
    "difficulty": "experto",
    "clue": "De sabor azucarado, perdido en dulcemente, sin llamar la atención. (5)",
    "answer": "DULCE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "De sabor azucarado",
    "fodder": "dulce",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "DULCE aparece oculto en dulcemente.",
    "_def": "De sabor azucarado"
  },
  {
    "id": "d333",
    "difficulty": "muy-dificil",
    "clue": "Sucesión de puntos; luego indica nos el Ahora, de entrada, dicen más de lo que parece. (5)",
    "answer": "LINEA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Sucesión de puntos",
    "fodder": "luego indica nos el Ahora",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «luego indica nos el Ahora» forman LINEA.",
    "_def": "Trazado que une puntos"
  },
  {
    "id": "d334",
    "difficulty": "experto",
    "clue": "Unidad de medida; grano cambia una letra: n por d. (5)",
    "answer": "GRADO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Unidad de medida",
    "fodder": "GRANO",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "GRANO cambia N por D = GRADO.",
    "_def": "Unidad de medida o nivel"
  },
  {
    "id": "d335",
    "difficulty": "experto",
    "clue": "Camino previsto; FRUTA queda sin A antes de seguir. (4)",
    "answer": "RUTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Camino previsto",
    "fodder": "FRUTA",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de FRUTA para obtener RUTA.",
    "_def": "Itinerario"
  },
  {
    "id": "d336",
    "difficulty": "muy-dificil",
    "clue": "Semilla pequeña: rango perdió el orden antes de la escena. (5)",
    "answer": "GRANO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Semilla pequeña",
    "fodder": "RANGO",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de RANGO = GRANO.",
    "_def": "Semilla pequeña"
  },
  {
    "id": "d337",
    "difficulty": "experto",
    "clue": "Serie que se repite; Clara inició cada labor ordenada, de entrada, dejan la respuesta escondida. (5)",
    "answer": "CICLO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Serie que se repite",
    "fodder": "Clara inició cada labor ordenada",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de «Clara inició cada labor ordenada» forman CICLO.",
    "_def": "Serie que se repite"
  },
  {
    "id": "d338",
    "difficulty": "experto",
    "clue": "Tiempo vivido; edads queda sin s antes de seguir. (4)",
    "answer": "EDAD",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Tiempo vivido",
    "fodder": "edads",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de EDADS para obtener EDAD.",
    "_def": "Tiempo vivido"
  },
  {
    "id": "d339",
    "difficulty": "dificil",
    "clue": "Agarrar; RISA vuelve sobre sus pasos. (4)",
    "answer": "ASIR",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Agarrar",
    "fodder": "RISA",
    "indicators": [
      "vuelve sobre sus pasos"
    ],
    "explanation": "RISA al revés = ASIR.",
    "_def": "Agarrar"
  },
  {
    "id": "d340",
    "difficulty": "experto",
    "clue": "Impresión producida por la luz; dolor cambia una letra: d por c. (5)",
    "answer": "COLOR",
    "mechanisms": [
      "substitution"
    ],
    "definition": "Impresión producida por la luz",
    "fodder": "DOLOR",
    "indicators": [
      "cambia una letra"
    ],
    "explanation": "DOLOR cambia D por C = COLOR.",
    "_def": "Propiedad visual"
  },
  {
    "id": "d341",
    "difficulty": "muy-dificil",
    "clue": "Borde que rodea una imagen; MARCOS queda sin S antes de seguir. (5)",
    "answer": "MARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Borde que rodea una imagen",
    "fodder": "MARCOS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de MARCOS para obtener MARCO.",
    "_def": "Borde que rodea"
  },
  {
    "id": "d342",
    "difficulty": "experto",
    "clue": "Asiento alargado; breve Ahora nunca cada observa, de entrada, dicen más de lo que parece. (5)",
    "answer": "BANCO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Asiento alargado",
    "fodder": "breve Ahora nunca cada observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «breve Ahora nunca cada observa» forman BANCO.",
    "_def": "Asiento o entidad financiera"
  },
  {
    "id": "d343",
    "difficulty": "experto",
    "clue": "Fuerza que mueve; indica muy primero usted los sin observa, de entrada, dicen más de lo que parece. (7)",
    "answer": "IMPULSO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Fuerza que mueve",
    "fodder": "indica muy primero usted los sin observa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «indica muy primero usted los sin observa» forman IMPULSO.",
    "_def": "Fuerza que inicia movimiento"
  },
  {
    "id": "d344",
    "difficulty": "dificil",
    "clue": "Radiación que permite ver; le un zanja, de entrada, dicen más de lo que parece. (3)",
    "answer": "LUZ",
    "mechanisms": [
      "initials"
    ],
    "definition": "Radiación que permite ver",
    "fodder": "le un zanja",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «le un zanja» forman LUZ.",
    "_def": "Lo contrario de la oscuridad"
  },
  {
    "id": "d345",
    "difficulty": "muy-dificil",
    "clue": "Principio espiritual: lama perdió el orden antes de la escena. (4)",
    "answer": "ALMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Principio espiritual",
    "fodder": "LAMA",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de LAMA = ALMA.",
    "_def": "Parte espiritual o esencia"
  },
  {
    "id": "d346",
    "difficulty": "muy-dificil",
    "clue": "Objeto indefinido: saco perdió el rumbo antes de llegar. (4)",
    "answer": "COSA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Objeto indefinido",
    "fodder": "saco",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de SACO = COSA.",
    "_def": "Objeto indeterminado"
  },
  {
    "id": "d347",
    "difficulty": "muy-dificil",
    "clue": "Pieza que se pulsa; TECLAS queda sin S antes de seguir. (5)",
    "answer": "TECLA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza que se pulsa",
    "fodder": "TECLAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de TECLAS para obtener TECLA.",
    "_def": "Botón que se pulsa"
  },
  {
    "id": "d348",
    "difficulty": "experto",
    "clue": "Herramienta para cavar; PALAS queda sin S antes de seguir. (4)",
    "answer": "PALA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Herramienta para cavar",
    "fodder": "PALAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PALAS para obtener PALA.",
    "_def": "Herramienta para cavar"
  },
  {
    "id": "d349",
    "difficulty": "muy-dificil",
    "clue": "Asiento con respaldo; SILLAS queda sin S antes de seguir. (5)",
    "answer": "SILLA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Asiento con respaldo",
    "fodder": "SILLAS",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de SILLAS para obtener SILLA.",
    "_def": "Asiento con respaldo"
  },
  {
    "id": "d350",
    "difficulty": "experto",
    "clue": "Pieza que une dos partes móviles; breve intenta solo Ayer guarda resulta Alguien, de entrada, dicen más de lo que parece. (7)",
    "answer": "BISAGRA",
    "mechanisms": [
      "initials"
    ],
    "definition": "Pieza que une dos partes móviles",
    "fodder": "breve intenta solo Ayer guarda resulta Alguien",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «breve intenta solo Ayer guarda resulta Alguien» forman BISAGRA.",
    "_def": "Pieza que permite girar una puerta"
  },
  {
    "id": "d351",
    "difficulty": "dificil",
    "clue": "Orilla del mar; ACOSTA queda sin A antes de seguir. (5)",
    "answer": "COSTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Orilla del mar",
    "fodder": "ACOSTA",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de ACOSTA para obtener COSTA.",
    "_def": "Orilla del mar"
  },
  {
    "id": "d352",
    "difficulty": "dificil",
    "clue": "Afecto: ramo perdió el rumbo antes de llegar. (4)",
    "answer": "AMOR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Afecto",
    "fodder": "ramo",
    "indicators": [
      "perdió el rumbo"
    ],
    "explanation": "Anagrama de RAMO = AMOR.",
    "_def": "Afecto profundo"
  },
  {
    "id": "d353",
    "difficulty": "experto",
    "clue": "Nombre de una obra; todo imagina también una la obviamente, de entrada, dicen más de lo que parece. (6)",
    "answer": "TITULO",
    "mechanisms": [
      "initials"
    ],
    "definition": "Nombre de una obra",
    "fodder": "todo imagina también una la obviamente",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las primeras letras de «todo imagina también una la obviamente» forman TITULO.",
    "_def": "Nombre de una obra o rango"
  },
  {
    "id": "d354",
    "difficulty": "experto",
    "clue": "Cantidad de agua que lleva un río; Cantidad de agua que fluye, perdido en caudaloso, sin llamar la atención. (6)",
    "answer": "CAUDAL",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Cantidad de agua que lleva un río",
    "fodder": "caudal",
    "indicators": [
      "sin llamar la atención"
    ],
    "explanation": "CAUDAL aparece oculto en caudaloso.",
    "_def": "Cantidad de agua que fluye"
  },
  {
    "id": "d355",
    "difficulty": "experto",
    "clue": "Parte anterior; frentes queda sin s antes de seguir. (6)",
    "answer": "FRENTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte anterior",
    "fodder": "frentes",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de FRENTES para obtener FRENTE.",
    "_def": "Parte delantera"
  },
  {
    "id": "d356",
    "difficulty": "experto",
    "clue": "Fragmento de un texto; PASAJES queda sin S antes de seguir. (6)",
    "answer": "PASAJE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Fragmento de un texto",
    "fodder": "PASAJES",
    "indicators": [
      "queda sin"
    ],
    "explanation": "Se elimina la última letra de PASAJES para obtener PASAJE.",
    "_def": "Lugar de paso o billete"
  }
];
