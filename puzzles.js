// Banco de 356 pistas — versión de reescritura criptográfica.
const MECHANISM_INDICATORS = {
  "anagram": [
    "se mezcló",
    "quedó mezclado",
    "perdió el orden",
    "cambió de sitio",
    "acabó revuelto",
    "se desordenó"
  ],
  "hidden": [
    "en",
    "perdido en",
    "oculto en",
    "entre sus letras",
    "dentro de"
  ],
  "deletion": [
    "sin cola",
    "perdiendo la última",
    "sin su última",
    "dejando atrás la cola",
    "sin despedida al final"
  ],
  "reversal": [
    "al volver",
    "de regreso",
    "dado la vuelta",
    "mirado al revés",
    "cuando regresó"
  ],
  "substitution": [
    "tomó otro nombre",
    "cambió de nombre",
    "pasó a ser otra cosa",
    "una letra fue reemplazada"
  ],
  "charade": [
    "junto con",
    "combinando"
  ],
  "container": [
    "lleva dentro",
    "rodea"
  ],
  "homophone": [
    "al oído",
    "dicho en voz alta",
    "por cómo suena"
  ],
  "initials": [
    "de entrada",
    "al comenzar",
    "por sus comienzos",
    "de primeras",
    "al principio"
  ],
  "finals": [
    "por el final"
  ]
};
const ANAGRAM_INDICATORS = MECHANISM_INDICATORS.anagram;

const PUZZLES = [
  {
    "id": "d001",
    "difficulty": "experto",
    "clue": "La nota quedó así: carla usa entradas luego luego de comer otra vez; de primeras, y al final todo apuntó a parte que une cabeza y tronco. (6)",
    "answer": "CUELLO",
    "mechanisms": [
      "initials"
    ],
    "definition": "parte que une cabeza y tronco",
    "fodder": "carla usa entradas luego luego de comer otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Carla usa entradas luego luego de comer otra vez forman CUELLO.",
    "_def": "parte que une cabeza y tronco"
  },
  {
    "id": "d002",
    "difficulty": "muy-dificil",
    "clue": "Había camas por toda la habitación; al final, mueble para dormir, sin su última. (4)",
    "answer": "CAMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "mueble para dormir",
    "fodder": "camas",
    "indicators": [
      "sin su última"
    ],
    "explanation": "CAMAS sin su parte indicada = CAMA.",
    "_def": "mueble para dormir"
  },
  {
    "id": "d003",
    "difficulty": "muy-dificil",
    "clue": "Había resortes por toda la habitación; al final, pieza elástica, sin despedida al final. (7)",
    "answer": "RESORTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "pieza elástica",
    "fodder": "resortes",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "RESORTES sin su parte indicada = RESORTE.",
    "_def": "pieza elástica"
  },
  {
    "id": "d004",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, el grano se desordenó; al final apareció posición dentro de una escala. (5)",
    "answer": "RANGO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "posición dentro de una escala",
    "fodder": "grano",
    "indicators": [
      "se desordenó"
    ],
    "explanation": "Anagrama de GRANO = RANGO.",
    "_def": "posición dentro de una escala"
  },
  {
    "id": "d005",
    "difficulty": "dificil",
    "clue": "La nota quedó así: bruno revisa acuerdos zigzagueando otra vez; por sus comienzos, y al final todo apuntó a extremidad superior. (5)",
    "answer": "BRAZO",
    "mechanisms": [
      "initials"
    ],
    "definition": "extremidad superior",
    "fodder": "bruno revisa acuerdos zigzagueando otra vez",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Bruno revisa acuerdos zigzagueando otra vez forman BRAZO.",
    "_def": "extremidad superior"
  },
  {
    "id": "d006",
    "difficulty": "experto",
    "clue": "Había pasajes por toda la habitación; al final, lugar de paso o billete, sin cola. (6)",
    "answer": "PASAJE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "lugar de paso o billete",
    "fodder": "pasajes",
    "indicators": [
      "sin cola"
    ],
    "explanation": "PASAJES sin su parte indicada = PASAJE.",
    "_def": "lugar de paso o billete"
  },
  {
    "id": "d007",
    "difficulty": "experto",
    "clue": "La nota quedó así: diego investiga sellos tras al anochecer nunca tarde con cuidado incluso al final al anochecer; de primeras, y al final todo apuntó a espacio entre dos puntos. (9)",
    "answer": "DISTANCIA",
    "mechanisms": [
      "initials"
    ],
    "definition": "espacio entre dos puntos",
    "fodder": "diego investiga sellos tras al anochecer nunca tarde con cuidado incluso al final al anochecer",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Diego investiga sellos tras al anochecer nunca tarde con cuidado incluso al final al anochecer forman DISTANCIA.",
    "_def": "espacio entre dos puntos"
  },
  {
    "id": "d008",
    "difficulty": "experto",
    "clue": "Había rutas por toda la habitación; al final, itinerario, sin despedida al final. (4)",
    "answer": "RUTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "itinerario",
    "fodder": "rutas",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "RUTAS sin su parte indicada = RUTA.",
    "_def": "itinerario"
  },
  {
    "id": "d009",
    "difficulty": "experto",
    "clue": "La nota quedó así: ana sigue tickets rápido otra vez; al principio, y al final todo apuntó a cuerpo celeste. (5)",
    "answer": "ASTRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "cuerpo celeste",
    "fodder": "ana sigue tickets rápido otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Ana sigue tickets rápido otra vez forman ASTRO.",
    "_def": "cuerpo celeste"
  },
  {
    "id": "d010",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: sergio investiga guías nuevamente otra vez; por sus comienzos, y al final todo apuntó a señal que representa algo. (5)",
    "answer": "SIGNO",
    "mechanisms": [
      "initials"
    ],
    "definition": "señal que representa algo",
    "fodder": "sergio investiga guías nuevamente otra vez",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Sergio investiga guías nuevamente otra vez forman SIGNO.",
    "_def": "señal que representa algo"
  },
  {
    "id": "d011",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: marta usa recibos otra vez; de entrada, y al final todo apuntó a pared gruesa. (4)",
    "answer": "MURO",
    "mechanisms": [
      "initials"
    ],
    "definition": "pared gruesa",
    "fodder": "marta usa recibos otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Marta usa recibos otra vez forman MURO.",
    "_def": "pared gruesa"
  },
  {
    "id": "d012",
    "difficulty": "dificil",
    "clue": "En el relato, nota tomó otro nombre cuando cambió una sola letra; así apareció calzado que cubre el tobillo. (4)",
    "answer": "BOTA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "calzado que cubre el tobillo",
    "fodder": "nota",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de NOTA para obtener BOTA.",
    "_def": "calzado que cubre el tobillo"
  },
  {
    "id": "d013",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, el bolo cambió de sitio; al final apareció mamífero salvaje. (4)",
    "answer": "LOBO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "mamífero salvaje",
    "fodder": "bolo",
    "indicators": [
      "cambió de sitio"
    ],
    "explanation": "Anagrama de BOLO = LOBO.",
    "_def": "mamífero salvaje"
  },
  {
    "id": "d014",
    "difficulty": "experto",
    "clue": "Al regresar, el asir quedó dado la vuelta; así apareció risa. (4)",
    "answer": "RISA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "risa",
    "fodder": "asir",
    "indicators": [
      "dado la vuelta"
    ],
    "explanation": "ASIR al revés = RISA.",
    "_def": "risa"
  },
  {
    "id": "d015",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, la rama perdió el orden; al final apareció querer profundamente. (4)",
    "answer": "AMAR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "querer profundamente",
    "fodder": "rama",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de RAMA = AMAR.",
    "_def": "querer profundamente"
  },
  {
    "id": "d016",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: sergio ordena papeles otra vez sin ruido tras el cierre en el barrio; de primeras, y al final todo apuntó a base que sostiene. (7)",
    "answer": "SOPORTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "base que sostiene",
    "fodder": "sergio ordena papeles otra vez sin ruido tras el cierre en el barrio",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Sergio ordena papeles otra vez sin ruido tras el cierre en el barrio forman SOPORTE.",
    "_def": "base que sostiene"
  },
  {
    "id": "d017",
    "difficulty": "dificil",
    "clue": "Había pesos por toda la habitación; al final, medida de gravedad, sin su última. (4)",
    "answer": "PESO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "medida de gravedad",
    "fodder": "pesos",
    "indicators": [
      "sin su última"
    ],
    "explanation": "PESOS sin su parte indicada = PESO.",
    "_def": "medida de gravedad"
  },
  {
    "id": "d018",
    "difficulty": "muy-dificil",
    "clue": "Había curvas por toda la habitación; al final, línea que no es recta, sin cola. (5)",
    "answer": "CURVA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "línea que no es recta",
    "fodder": "curvas",
    "indicators": [
      "sin cola"
    ],
    "explanation": "CURVAS sin su parte indicada = CURVA.",
    "_def": "línea que no es recta"
  },
  {
    "id": "d019",
    "difficulty": "experto",
    "clue": "La nota quedó así: carla ordena recibos rápido al anochecer luego de comer; de entrada, y al final todo apuntó a recinto para animales. (6)",
    "answer": "CORRAL",
    "mechanisms": [
      "initials"
    ],
    "definition": "recinto para animales",
    "fodder": "carla ordena recibos rápido al anochecer luego de comer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Carla ordena recibos rápido al anochecer luego de comer forman CORRAL.",
    "_def": "recinto para animales"
  },
  {
    "id": "d020",
    "difficulty": "experto",
    "clue": "Durante la escena, la mora cambió de sitio; al final apareció afecto profundo. (4)",
    "answer": "AMOR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "afecto profundo",
    "fodder": "mora",
    "indicators": [
      "cambió de sitio"
    ],
    "explanation": "Anagrama de MORA = AMOR.",
    "_def": "afecto profundo"
  },
  {
    "id": "d021",
    "difficulty": "dificil",
    "clue": "Nadie reparó en salidas; entre sus letras apareció lugar por donde se sale. (6)",
    "answer": "SALIDA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "lugar por donde se sale",
    "fodder": "salida",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "SALIDA está escondido dentro de SALIDAS.",
    "_def": "lugar por donde se sale"
  },
  {
    "id": "d022",
    "difficulty": "dificil",
    "clue": "Nadie reparó en ratonera; entre sus letras apareció rato. (4)",
    "answer": "RATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "rato",
    "fodder": "rato",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "RATO está escondido dentro de RATONERA.",
    "_def": "rato"
  },
  {
    "id": "d023",
    "difficulty": "muy-dificil",
    "clue": "Al regresar, el amor quedó dado la vuelta; así apareció capital del Lacio. (4)",
    "answer": "ROMA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "capital del Lacio",
    "fodder": "amor",
    "indicators": [
      "dado la vuelta"
    ],
    "explanation": "AMOR al revés = ROMA.",
    "_def": "capital del Lacio"
  },
  {
    "id": "d024",
    "difficulty": "experto",
    "clue": "Durante la escena, la pata perdió el orden; al final apareció cubierta de un recipiente. (4)",
    "answer": "TAPA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "cubierta de un recipiente",
    "fodder": "pata",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de PATA = TAPA.",
    "_def": "cubierta de un recipiente"
  },
  {
    "id": "d025",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla anota recibos antes mientras tanto en el barrio luego de comer otra vez; de primeras, y al final todo apuntó a dulce. (8)",
    "answer": "CARAMELO",
    "mechanisms": [
      "initials"
    ],
    "definition": "dulce",
    "fodder": "carla anota recibos antes mientras tanto en el barrio luego de comer otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Carla anota recibos antes mientras tanto en el barrio luego de comer otra vez forman CARAMELO.",
    "_def": "dulce"
  },
  {
    "id": "d026",
    "difficulty": "dificil",
    "clue": "Había patos por toda la habitación; al final, ave acuática, sin su última. (4)",
    "answer": "PATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "ave acuática",
    "fodder": "patos",
    "indicators": [
      "sin su última"
    ],
    "explanation": "PATOS sin su parte indicada = PATO.",
    "_def": "ave acuática"
  },
  {
    "id": "d027",
    "difficulty": "experto",
    "clue": "Nadie reparó en dulcemente; entre sus letras apareció de sabor azucarado. (5)",
    "answer": "DULCE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "de sabor azucarado",
    "fodder": "dulce",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "DULCE está escondido dentro de DULCEMENTE.",
    "_def": "de sabor azucarado"
  },
  {
    "id": "d028",
    "difficulty": "experto",
    "clue": "La nota quedó así: bruno ordena listas sin pausa al anochecer; por sus comienzos, y al final todo apuntó a recipiente flexible. (5)",
    "answer": "BOLSA",
    "mechanisms": [
      "initials"
    ],
    "definition": "recipiente flexible",
    "fodder": "bruno ordena listas sin pausa al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Bruno ordena listas sin pausa al anochecer forman BOLSA.",
    "_def": "recipiente flexible"
  },
  {
    "id": "d029",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en hermano; entre sus letras apareció extremidad superior. (4)",
    "answer": "MANO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "extremidad superior",
    "fodder": "mano",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "MANO está escondido dentro de HERMANO.",
    "_def": "extremidad superior"
  },
  {
    "id": "d030",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en apenas; entre sus letras apareció castigo o tristeza. (4)",
    "answer": "PENA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "castigo o tristeza",
    "fodder": "pena",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "PENA está escondido dentro de APENAS.",
    "_def": "castigo o tristeza"
  },
  {
    "id": "d031",
    "difficulty": "muy-dificil",
    "clue": "La pista junta pi junto con el resto; al final aparece suelo de una planta. (4)",
    "answer": "PISO",
    "mechanisms": [
      "charade"
    ],
    "definition": "suelo de una planta",
    "fodder": "pi",
    "indicators": [
      "junto con"
    ],
    "explanation": "PI+SO=PISO",
    "_def": "suelo de una planta"
  },
  {
    "id": "d032",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: ana guarda entradas nuevamente tras el cierre en el barrio; al principio, y al final todo apuntó a persona que actúa en nombre de otra. (6)",
    "answer": "AGENTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "persona que actúa en nombre de otra",
    "fodder": "ana guarda entradas nuevamente tras el cierre en el barrio",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Ana guarda entradas nuevamente tras el cierre en el barrio forman AGENTE.",
    "_def": "persona que actúa en nombre de otra"
  },
  {
    "id": "d033",
    "difficulty": "dificil",
    "clue": "La nota quedó así: federico investiga listas tras sin ruido otra vez; al principio, y al final todo apuntó a lo que deja pasar una parte. (6)",
    "answer": "FILTRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "lo que deja pasar una parte",
    "fodder": "federico investiga listas tras sin ruido otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Federico investiga listas tras sin ruido otra vez forman FILTRO.",
    "_def": "lo que deja pasar una parte"
  },
  {
    "id": "d034",
    "difficulty": "muy-dificil",
    "clue": "Había colas por toda la habitación; al final, parte posterior, perdiendo la última. (4)",
    "answer": "COLA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "parte posterior",
    "fodder": "colas",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "COLAS sin su parte indicada = COLA.",
    "_def": "parte posterior"
  },
  {
    "id": "d035",
    "difficulty": "dificil",
    "clue": "La pista junta clase junto con el resto; al final aparece dato para abrir o entender. (5)",
    "answer": "CLAVE",
    "mechanisms": [
      "charade"
    ],
    "definition": "dato para abrir o entender",
    "fodder": "clase",
    "indicators": [
      "junto con"
    ],
    "explanation": "CLA+VE=CLAVE",
    "_def": "dato para abrir o entender"
  },
  {
    "id": "d036",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: nico investiga vasos entre luego de comer; de primeras, y al final todo apuntó a grado o altura. (5)",
    "answer": "NIVEL",
    "mechanisms": [
      "initials"
    ],
    "definition": "grado o altura",
    "fodder": "nico investiga vasos entre luego de comer",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Nico investiga vasos entre luego de comer forman NIVEL.",
    "_def": "grado o altura"
  },
  {
    "id": "d037",
    "difficulty": "experto",
    "clue": "La nota quedó así: sergio usa entradas luego otra vez; de entrada, y al final todo apuntó a superficie que pisamos. (5)",
    "answer": "SUELO",
    "mechanisms": [
      "initials"
    ],
    "definition": "superficie que pisamos",
    "fodder": "sergio usa entradas luego otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Sergio usa entradas luego otra vez forman SUELO.",
    "_def": "superficie que pisamos"
  },
  {
    "id": "d038",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: diego envía sellos entre mientras tanto bajo la lluvia al anochecer sin ruido con cuidado otra vez; al principio, y al final todo apuntó a llegada a tierra. (10)",
    "answer": "DESEMBARCO",
    "mechanisms": [
      "initials"
    ],
    "definition": "llegada a tierra",
    "fodder": "diego envía sellos entre mientras tanto bajo la lluvia al anochecer sin ruido con cuidado otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Diego envía sellos entre mientras tanto bajo la lluvia al anochecer sin ruido con cuidado otra vez forman DESEMBARCO.",
    "_def": "llegada a tierra"
  },
  {
    "id": "d039",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, el pesar acabó revuelto; al final apareció frutos del peral. (5)",
    "answer": "PERAS",
    "mechanisms": [
      "anagram"
    ],
    "definition": "frutos del peral",
    "fodder": "pesar",
    "indicators": [
      "acabó revuelto"
    ],
    "explanation": "Anagrama de PESAR = PERAS.",
    "_def": "frutos del peral"
  },
  {
    "id": "d040",
    "difficulty": "experto",
    "clue": "La nota quedó así: hugo ordena recibos inmediatamente zumbando cerca otra vez nunca tarde tras el cierre en el barrio; de primeras, y al final todo apuntó a línea aparente donde cielo y tierra se encuentran. (9)",
    "answer": "HORIZONTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "línea aparente donde cielo y tierra se encuentran",
    "fodder": "hugo ordena recibos inmediatamente zumbando cerca otra vez nunca tarde tras el cierre en el barrio",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Hugo ordena recibos inmediatamente zumbando cerca otra vez nunca tarde tras el cierre en el barrio forman HORIZONTE.",
    "_def": "línea aparente donde cielo y tierra se encuentran"
  },
  {
    "id": "d041",
    "difficulty": "dificil",
    "clue": "Nadie reparó en radiografía; entre sus letras apareció segmento desde el centro a la circunferencia. (5)",
    "answer": "RADIO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "segmento desde el centro a la circunferencia",
    "fodder": "radio",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "RADIO está escondido dentro de RADIOGRAFÍA.",
    "_def": "segmento desde el centro a la circunferencia"
  },
  {
    "id": "d042",
    "difficulty": "experto",
    "clue": "La nota quedó así: olga revisa informes luego luego de comer al anochecer; de primeras, y al final todo apuntó a borde del agua o terreno. (6)",
    "answer": "ORILLA",
    "mechanisms": [
      "initials"
    ],
    "definition": "borde del agua o terreno",
    "fodder": "olga revisa informes luego luego de comer al anochecer",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Olga revisa informes luego luego de comer al anochecer forman ORILLA.",
    "_def": "borde del agua o terreno"
  },
  {
    "id": "d043",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla anota listas luego en el barrio; al comenzar, y al final todo apuntó a vía urbana. (5)",
    "answer": "CALLE",
    "mechanisms": [
      "initials"
    ],
    "definition": "vía urbana",
    "fodder": "carla anota listas luego en el barrio",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Carla anota listas luego en el barrio forman CALLE.",
    "_def": "vía urbana"
  },
  {
    "id": "d044",
    "difficulty": "dificil",
    "clue": "La nota quedó así: rosa envía fotos luego en el barrio junto a la puerta otra vez; al principio, y al final todo apuntó a imagen devuelta por una superficie. (7)",
    "answer": "REFLEJO",
    "mechanisms": [
      "initials"
    ],
    "definition": "imagen devuelta por una superficie",
    "fodder": "rosa envía fotos luego en el barrio junto a la puerta otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Rosa envía fotos luego en el barrio junto a la puerta otra vez forman REFLEJO.",
    "_def": "imagen devuelta por una superficie"
  },
  {
    "id": "d045",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, la rama acabó revuelto; al final apareció instrumento para atacar. (4)",
    "answer": "ARMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "instrumento para atacar",
    "fodder": "rama",
    "indicators": [
      "acabó revuelto"
    ],
    "explanation": "Anagrama de RAMA = ARMA.",
    "_def": "instrumento para atacar"
  },
  {
    "id": "d046",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en impulso; entre sus letras apareció latido perceptible. (5)",
    "answer": "PULSO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "latido perceptible",
    "fodder": "pulso",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "PULSO está escondido dentro de IMPULSO.",
    "_def": "latido perceptible"
  },
  {
    "id": "d047",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: eva sigue papeles antes con cuidado incluso al final otra vez; al comenzar, y al final todo apuntó a extensión disponible. (7)",
    "answer": "ESPACIO",
    "mechanisms": [
      "initials"
    ],
    "definition": "extensión disponible",
    "fodder": "eva sigue papeles antes con cuidado incluso al final otra vez",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Eva sigue papeles antes con cuidado incluso al final otra vez forman ESPACIO.",
    "_def": "extensión disponible"
  },
  {
    "id": "d048",
    "difficulty": "dificil",
    "clue": "Había tiempos por toda la habitación; al final, tiempo, sin su última. (6)",
    "answer": "TIEMPO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "tiempo",
    "fodder": "tiempos",
    "indicators": [
      "sin su última"
    ],
    "explanation": "TIEMPOS sin su parte indicada = TIEMPO.",
    "_def": "tiempo"
  },
  {
    "id": "d049",
    "difficulty": "experto",
    "clue": "La nota quedó así: ana cambia tickets antes; al principio, y al final todo apuntó a documento que deja constancia. (4)",
    "answer": "ACTA",
    "mechanisms": [
      "initials"
    ],
    "definition": "documento que deja constancia",
    "fodder": "ana cambia tickets antes",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Ana cambia tickets antes forman ACTA.",
    "_def": "documento que deja constancia"
  },
  {
    "id": "d050",
    "difficulty": "experto",
    "clue": "Durante la escena, el canal se mezcló; al final apareció pieza que sujeta una embarcación. (5)",
    "answer": "ANCLA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "pieza que sujeta una embarcación",
    "fodder": "canal",
    "indicators": [
      "se mezcló"
    ],
    "explanation": "Anagrama de CANAL = ANCLA.",
    "_def": "pieza que sujeta una embarcación"
  },
  {
    "id": "d051",
    "difficulty": "dificil",
    "clue": "La pista junta centro junto con el resto; al final aparece sustancia de velas. (4)",
    "answer": "CERA",
    "mechanisms": [
      "charade"
    ],
    "definition": "sustancia de velas",
    "fodder": "centro",
    "indicators": [
      "junto con"
    ],
    "explanation": "CE+RA=CERA",
    "_def": "sustancia de velas"
  },
  {
    "id": "d052",
    "difficulty": "experto",
    "clue": "Durante la escena, el amar se mezcló; al final apareció rama. (4)",
    "answer": "RAMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "rama",
    "fodder": "amar",
    "indicators": [
      "se mezcló"
    ],
    "explanation": "Anagrama de AMAR = RAMA.",
    "_def": "rama"
  },
  {
    "id": "d053",
    "difficulty": "experto",
    "clue": "La nota quedó así: pablo anota recibos antes de camino al anochecer; por sus comienzos, y al final todo apuntó a lugar donde se detiene un transporte. (6)",
    "answer": "PARADA",
    "mechanisms": [
      "initials"
    ],
    "definition": "lugar donde se detiene un transporte",
    "fodder": "pablo anota recibos antes de camino al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Pablo anota recibos antes de camino al anochecer forman PARADA.",
    "_def": "lugar donde se detiene un transporte"
  },
  {
    "id": "d054",
    "difficulty": "dificil",
    "clue": "Había llaves por toda la habitación; al final, instrumento para abrir, perdiendo la última. (5)",
    "answer": "LLAVE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "instrumento para abrir",
    "fodder": "llaves",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "LLAVES sin su parte indicada = LLAVE.",
    "_def": "instrumento para abrir"
  },
  {
    "id": "d055",
    "difficulty": "experto",
    "clue": "Durante la escena, el rango se desordenó; al final apareció semilla pequeña. (5)",
    "answer": "GRANO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "semilla pequeña",
    "fodder": "rango",
    "indicators": [
      "se desordenó"
    ],
    "explanation": "Anagrama de RANGO = GRANO.",
    "_def": "semilla pequeña"
  },
  {
    "id": "d056",
    "difficulty": "dificil",
    "clue": "Había rojos por toda la habitación; al final, color de señal de peligro, sin cola. (4)",
    "answer": "ROJO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "color de señal de peligro",
    "fodder": "rojos",
    "indicators": [
      "sin cola"
    ],
    "explanation": "ROJOS sin su parte indicada = ROJO.",
    "_def": "color de señal de peligro"
  },
  {
    "id": "d057",
    "difficulty": "experto",
    "clue": "El picoteo empezó antes de la cena; nadie esperaba punta aguda. (4)",
    "answer": "PICO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "punta aguda",
    "fodder": "pico",
    "indicators": [
      "en"
    ],
    "explanation": "PICO está escondido dentro de PICOTEO.",
    "_def": "punta aguda"
  },
  {
    "id": "d058",
    "difficulty": "dificil",
    "clue": "La nota quedó así: marta envía notas tras en el barrio; al comenzar, y al final todo apuntó a facultad de pensar. (5)",
    "answer": "MENTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "facultad de pensar",
    "fodder": "marta envía notas tras en el barrio",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Marta envía notas tras en el barrio forman MENTE.",
    "_def": "facultad de pensar"
  },
  {
    "id": "d059",
    "difficulty": "experto",
    "clue": "Nadie reparó en torreón; entre sus letras apareció construcción alta. (5)",
    "answer": "TORRE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "construcción alta",
    "fodder": "torre",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "TORRE está escondido dentro de TORREÓN.",
    "_def": "construcción alta"
  },
  {
    "id": "d060",
    "difficulty": "experto",
    "clue": "La nota quedó así: hugo usa mapas otra vez; al comenzar, y al final todo apuntó a producto gaseoso de una combustión. (4)",
    "answer": "HUMO",
    "mechanisms": [
      "initials"
    ],
    "definition": "producto gaseoso de una combustión",
    "fodder": "hugo usa mapas otra vez",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Hugo usa mapas otra vez forman HUMO.",
    "_def": "producto gaseoso de una combustión"
  },
  {
    "id": "d061",
    "difficulty": "experto",
    "clue": "La pista junta can junto con el resto; al final aparece borde de una pieza. (5)",
    "answer": "CANTO",
    "mechanisms": [
      "charade"
    ],
    "definition": "borde de una pieza",
    "fodder": "can",
    "indicators": [
      "junto con"
    ],
    "explanation": "CAN+TO=CANTO",
    "_def": "borde de una pieza"
  },
  {
    "id": "d062",
    "difficulty": "dificil",
    "clue": "La nota quedó así: ana vende informes sin pausa otra vez; al principio, y al final todo apuntó a comunicación breve. (5)",
    "answer": "AVISO",
    "mechanisms": [
      "initials"
    ],
    "definition": "comunicación breve",
    "fodder": "ana vende informes sin pausa otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Ana vende informes sin pausa otra vez forman AVISO.",
    "_def": "comunicación breve"
  },
  {
    "id": "d063",
    "difficulty": "dificil",
    "clue": "La nota quedó así: carla ordena notas desde una vez más con cuidado tras el cierre otra vez; al comenzar, y al final todo apuntó a canal para transportar algo. (8)",
    "answer": "CONDUCTO",
    "mechanisms": [
      "initials"
    ],
    "definition": "canal para transportar algo",
    "fodder": "carla ordena notas desde una vez más con cuidado tras el cierre otra vez",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Carla ordena notas desde una vez más con cuidado tras el cierre otra vez forman CONDUCTO.",
    "_def": "canal para transportar algo"
  },
  {
    "id": "d064",
    "difficulty": "muy-dificil",
    "clue": "Había rayos por toda la habitación; al final, descarga luminosa, sin despedida al final. (4)",
    "answer": "RAYO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "descarga luminosa",
    "fodder": "rayos",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "RAYOS sin su parte indicada = RAYO.",
    "_def": "descarga luminosa"
  },
  {
    "id": "d065",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: sergio envía notas antes luego de comer; por sus comienzos, y al final todo apuntó a marca que comunica. (5)",
    "answer": "SENAL",
    "mechanisms": [
      "initials"
    ],
    "definition": "marca que comunica",
    "fodder": "sergio envía notas antes luego de comer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Sergio envía notas antes luego de comer forman SENAL.",
    "_def": "marca que comunica"
  },
  {
    "id": "d066",
    "difficulty": "experto",
    "clue": "La nota quedó así: ana vende acuerdos nuevamente con cuidado en el barrio; de primeras, y al final todo apuntó a progreso. (6)",
    "answer": "AVANCE",
    "mechanisms": [
      "initials"
    ],
    "definition": "progreso",
    "fodder": "ana vende acuerdos nuevamente con cuidado en el barrio",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Ana vende acuerdos nuevamente con cuidado en el barrio forman AVANCE.",
    "_def": "progreso"
  },
  {
    "id": "d067",
    "difficulty": "dificil",
    "clue": "Nadie reparó en lunar; entre sus letras apareció satélite natural. (4)",
    "answer": "LUNA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "satélite natural",
    "fodder": "luna",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "LUNA está escondido dentro de LUNAR.",
    "_def": "satélite natural"
  },
  {
    "id": "d068",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en empieza; entre sus letras apareció parte de un conjunto. (5)",
    "answer": "PIEZA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "parte de un conjunto",
    "fodder": "pieza",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "PIEZA está escondido dentro de EMPIEZA.",
    "_def": "parte de un conjunto"
  },
  {
    "id": "d069",
    "difficulty": "muy-dificil",
    "clue": "Había atars por toda la habitación; al final, atar, sin despedida al final. (4)",
    "answer": "ATAR",
    "mechanisms": [
      "deletion"
    ],
    "definition": "atar",
    "fodder": "atars",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "ATARS sin su parte indicada = ATAR.",
    "_def": "atar"
  },
  {
    "id": "d070",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: sergio envía recibos inmediatamente en el barrio; de primeras, y al final todo apuntó a conjunto ordenado. (5)",
    "answer": "SERIE",
    "mechanisms": [
      "initials"
    ],
    "definition": "conjunto ordenado",
    "fodder": "sergio envía recibos inmediatamente en el barrio",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Sergio envía recibos inmediatamente en el barrio forman SERIE.",
    "_def": "conjunto ordenado"
  },
  {
    "id": "d071",
    "difficulty": "dificil",
    "clue": "La nota quedó así: ana prepara órdenes ya otra vez; al principio, y al final todo apuntó a ayuda o sostén. (5)",
    "answer": "APOYO",
    "mechanisms": [
      "initials"
    ],
    "definition": "ayuda o sostén",
    "fodder": "ana prepara órdenes ya otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Ana prepara órdenes ya otra vez forman APOYO.",
    "_def": "ayuda o sostén"
  },
  {
    "id": "d072",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: eva sigue cartas últimamente en el barrio luego de comer al anochecer; de primeras, y al final todo apuntó a escuela. (7)",
    "answer": "ESCUELA",
    "mechanisms": [
      "initials"
    ],
    "definition": "escuela",
    "fodder": "eva sigue cartas últimamente en el barrio luego de comer al anochecer",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Eva sigue cartas últimamente en el barrio luego de comer al anochecer forman ESCUELA.",
    "_def": "escuela"
  },
  {
    "id": "d073",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: pablo investiga zapatos antes sin ruido sin ruido al anochecer; al comenzar, y al final todo apuntó a superficie para escribir. (7)",
    "answer": "PIZARRA",
    "mechanisms": [
      "initials"
    ],
    "definition": "superficie para escribir",
    "fodder": "pablo investiga zapatos antes sin ruido sin ruido al anochecer",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Pablo investiga zapatos antes sin ruido sin ruido al anochecer forman PIZARRA.",
    "_def": "superficie para escribir"
  },
  {
    "id": "d074",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, las alas quedó mezclado; al final apareció sala. (4)",
    "answer": "SALA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "sala",
    "fodder": "alas",
    "indicators": [
      "quedó mezclado"
    ],
    "explanation": "Anagrama de ALAS = SALA.",
    "_def": "sala"
  },
  {
    "id": "d075",
    "difficulty": "experto",
    "clue": "En el relato, tino tomó otro nombre cuando cambió una sola letra; así apareció grado de color o sonido. (4)",
    "answer": "TONO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "grado de color o sonido",
    "fodder": "tino",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de TINO para obtener TONO.",
    "_def": "grado de color o sonido"
  },
  {
    "id": "d076",
    "difficulty": "dificil",
    "clue": "La nota quedó así: nico usa mapas entre sin ruido otra vez; de entrada, y al final todo apuntó a signo que representa una cantidad. (6)",
    "answer": "NUMERO",
    "mechanisms": [
      "initials"
    ],
    "definition": "signo que representa una cantidad",
    "fodder": "nico usa mapas entre sin ruido otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Nico usa mapas entre sin ruido otra vez forman NUMERO.",
    "_def": "signo que representa una cantidad"
  },
  {
    "id": "d077",
    "difficulty": "experto",
    "clue": "La pista junta coche junto con el resto; al final aparece tejido muscular comestible. (5)",
    "answer": "CARNE",
    "mechanisms": [
      "charade"
    ],
    "definition": "tejido muscular comestible",
    "fodder": "coche",
    "indicators": [
      "junto con"
    ],
    "explanation": "CAR+NE=CARNE",
    "_def": "tejido muscular comestible"
  },
  {
    "id": "d078",
    "difficulty": "dificil",
    "clue": "La nota quedó así: carla usa recibos sin pausa otra vez; de entrada, y al final todo apuntó a recorrido o formación. (5)",
    "answer": "CURSO",
    "mechanisms": [
      "initials"
    ],
    "definition": "recorrido o formación",
    "fodder": "carla usa recibos sin pausa otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Carla usa recibos sin pausa otra vez forman CURSO.",
    "_def": "recorrido o formación"
  },
  {
    "id": "d079",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: federico lee entradas cerca hoy mismo al anochecer; por sus comienzos, y al final todo apuntó a proyectil con punta. (6)",
    "answer": "FLECHA",
    "mechanisms": [
      "initials"
    ],
    "definition": "proyectil con punta",
    "fodder": "federico lee entradas cerca hoy mismo al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Federico lee entradas cerca hoy mismo al anochecer forman FLECHA.",
    "_def": "proyectil con punta"
  },
  {
    "id": "d080",
    "difficulty": "experto",
    "clue": "La nota quedó así: carla ordena mapas entre tras el cierre al anochecer; de entrada, y al final todo apuntó a cuerpo que sigue una órbita larga. (6)",
    "answer": "COMETA",
    "mechanisms": [
      "initials"
    ],
    "definition": "cuerpo que sigue una órbita larga",
    "fodder": "carla ordena mapas entre tras el cierre al anochecer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Carla ordena mapas entre tras el cierre al anochecer forman COMETA.",
    "_def": "cuerpo que sigue una órbita larga"
  },
  {
    "id": "d081",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, la misa se desordenó; al final apareció cavidad profunda. (4)",
    "answer": "SIMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "cavidad profunda",
    "fodder": "misa",
    "indicators": [
      "se desordenó"
    ],
    "explanation": "Anagrama de MISA = SIMA.",
    "_def": "cavidad profunda"
  },
  {
    "id": "d082",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: bruno anota recibos rápido incluso al final otra vez; de primeras, y al final todo apuntó a zona de una ciudad. (6)",
    "answer": "BARRIO",
    "mechanisms": [
      "initials"
    ],
    "definition": "zona de una ciudad",
    "fodder": "bruno anota recibos rápido incluso al final otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Bruno anota recibos rápido incluso al final otra vez forman BARRIO.",
    "_def": "zona de una ciudad"
  },
  {
    "id": "d083",
    "difficulty": "experto",
    "clue": "Durante la escena, la sima se desordenó; al final apareció celebración religiosa. (4)",
    "answer": "MISA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "celebración religiosa",
    "fodder": "sima",
    "indicators": [
      "se desordenó"
    ],
    "explanation": "Anagrama de SIMA = MISA.",
    "_def": "celebración religiosa"
  },
  {
    "id": "d084",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en nave; entre sus letras apareció embarcación o nave espacial. (4)",
    "answer": "NAVE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "embarcación o nave espacial",
    "fodder": "nave",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "NAVE está escondido dentro de AVENIDA.",
    "_def": "embarcación o nave espacial"
  },
  {
    "id": "d085",
    "difficulty": "muy-dificil",
    "clue": "Una parte lleva dentro a otra; así aparece rata. (4)",
    "answer": "RATA",
    "mechanisms": [
      "container"
    ],
    "definition": "rata",
    "fodder": "a",
    "indicators": [
      "lleva dentro"
    ],
    "explanation": "A dentro de RTA = RATA.",
    "_def": "rata"
  },
  {
    "id": "d086",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: rosa envía listas otra vez junto a la puerta; por sus comienzos, y al final todo apuntó a instrumento para medir el tiempo. (5)",
    "answer": "RELOJ",
    "mechanisms": [
      "initials"
    ],
    "definition": "instrumento para medir el tiempo",
    "fodder": "rosa envía listas otra vez junto a la puerta",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Rosa envía listas otra vez junto a la puerta forman RELOJ.",
    "_def": "instrumento para medir el tiempo"
  },
  {
    "id": "d087",
    "difficulty": "dificil",
    "clue": "La pista junta carro junto con el resto; al final aparece mensaje escrito. (5)",
    "answer": "CARTA",
    "mechanisms": [
      "charade"
    ],
    "definition": "mensaje escrito",
    "fodder": "carro",
    "indicators": [
      "junto con"
    ],
    "explanation": "CAR+TA=CARTA",
    "_def": "mensaje escrito"
  },
  {
    "id": "d088",
    "difficulty": "dificil",
    "clue": "La pista junta padre junto con el resto; al final aparece extremidad de un animal. (4)",
    "answer": "PATA",
    "mechanisms": [
      "charade"
    ],
    "definition": "extremidad de un animal",
    "fodder": "padre",
    "indicators": [
      "junto con"
    ],
    "explanation": "PA+TA=PATA",
    "_def": "extremidad de un animal"
  },
  {
    "id": "d089",
    "difficulty": "experto",
    "clue": "La nota quedó así: carla investiga cartas luego otra vez; al comenzar, y al final todo apuntó a serie que se repite. (5)",
    "answer": "CICLO",
    "mechanisms": [
      "initials"
    ],
    "definition": "serie que se repite",
    "fodder": "carla investiga cartas luego otra vez",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Carla investiga cartas luego otra vez forman CICLO.",
    "_def": "serie que se repite"
  },
  {
    "id": "d090",
    "difficulty": "experto",
    "clue": "La discusión se centró en la inmoralidad; se cuestionaba relativo a la conducta. (5)",
    "answer": "MORAL",
    "mechanisms": [
      "hidden"
    ],
    "definition": "relativo a la conducta",
    "fodder": "moral",
    "indicators": [
      "en"
    ],
    "explanation": "MORAL está escondido dentro de INMORALIDAD.",
    "_def": "relativo a la conducta"
  },
  {
    "id": "d091",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: ana revisa informes sin pausa tras el cierre al anochecer; de primeras, y al final todo apuntó a borde donde se encuentran caras. (6)",
    "answer": "ARISTA",
    "mechanisms": [
      "initials"
    ],
    "definition": "borde donde se encuentran caras",
    "fodder": "ana revisa informes sin pausa tras el cierre al anochecer",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Ana revisa informes sin pausa tras el cierre al anochecer forman ARISTA.",
    "_def": "borde donde se encuentran caras"
  },
  {
    "id": "d092",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: diego envía boletos antes tras el cierre en el barrio; al comenzar, y al final todo apuntó a discusión. (6)",
    "answer": "DEBATE",
    "mechanisms": [
      "initials"
    ],
    "definition": "discusión",
    "fodder": "diego envía boletos antes tras el cierre en el barrio",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Diego envía boletos antes tras el cierre en el barrio forman DEBATE.",
    "_def": "discusión"
  },
  {
    "id": "d093",
    "difficulty": "dificil",
    "clue": "Había limas por toda la habitación; al final, fruta cítrica o herramienta, dejando atrás la cola. (4)",
    "answer": "LIMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "fruta cítrica o herramienta",
    "fodder": "limas",
    "indicators": [
      "dejando atrás la cola"
    ],
    "explanation": "LIMAS sin su parte indicada = LIMA.",
    "_def": "fruta cítrica o herramienta"
  },
  {
    "id": "d094",
    "difficulty": "muy-dificil",
    "clue": "Había firmas por toda la habitación; al final, rasgo escrito que identifica, sin cola. (5)",
    "answer": "FIRMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "rasgo escrito que identifica",
    "fodder": "firmas",
    "indicators": [
      "sin cola"
    ],
    "explanation": "FIRMAS sin su parte indicada = FIRMA.",
    "_def": "rasgo escrito que identifica"
  },
  {
    "id": "d095",
    "difficulty": "experto",
    "clue": "Había costas por toda la habitación; al final, orilla del mar, sin cola. (5)",
    "answer": "COSTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "orilla del mar",
    "fodder": "costas",
    "indicators": [
      "sin cola"
    ],
    "explanation": "COSTAS sin su parte indicada = COSTA.",
    "_def": "orilla del mar"
  },
  {
    "id": "d096",
    "difficulty": "muy-dificil",
    "clue": "En el relato, peso tomó otro nombre cuando cambió una sola letra; así apareció filamento que nace de la piel. (4)",
    "answer": "PELO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "filamento que nace de la piel",
    "fodder": "peso",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de PESO para obtener PELO.",
    "_def": "filamento que nace de la piel"
  },
  {
    "id": "d097",
    "difficulty": "muy-dificil",
    "clue": "Contra todo pronóstico, el acuerdo legal quedó firmado. (8)",
    "answer": "CONTRATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "acuerdo legal",
    "fodder": "contra todo",
    "indicators": [
      "contra todo"
    ],
    "explanation": "CONTRATO está escondido entre las palabras CONTRA TODO.",
    "_def": "acuerdo legal"
  },
  {
    "id": "d098",
    "difficulty": "experto",
    "clue": "Había dorsos por toda la habitación; al final, parte posterior, sin su última. (5)",
    "answer": "DORSO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "parte posterior",
    "fodder": "dorsos",
    "indicators": [
      "sin su última"
    ],
    "explanation": "DORSOS sin su parte indicada = DORSO.",
    "_def": "parte posterior"
  },
  {
    "id": "d099",
    "difficulty": "muy-dificil",
    "clue": "La sobremesa se alargó; alguien dejó encima de; envoltorio sobre la mesa. (5)",
    "answer": "SOBRE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "encima de; envoltorio",
    "fodder": "sobre",
    "indicators": [
      "en"
    ],
    "explanation": "SOBRE está escondido dentro de SOBREMESA.",
    "_def": "encima de; envoltorio"
  },
  {
    "id": "d100",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla ordena mapas para al anochecer nunca tarde en el barrio sin ruido otra vez; al principio, y al final todo apuntó a persona que acompaña. (9)",
    "answer": "COMPANERO",
    "mechanisms": [
      "initials"
    ],
    "definition": "persona que acompaña",
    "fodder": "carla ordena mapas para al anochecer nunca tarde en el barrio sin ruido otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Carla ordena mapas para al anochecer nunca tarde en el barrio sin ruido otra vez forman COMPANERO.",
    "_def": "persona que acompaña"
  },
  {
    "id": "d101",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, el paso se desordenó; al final apareció plato de cuchara. (4)",
    "answer": "SOPA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "plato de cuchara",
    "fodder": "paso",
    "indicators": [
      "se desordenó"
    ],
    "explanation": "Anagrama de PASO = SOPA.",
    "_def": "plato de cuchara"
  },
  {
    "id": "d102",
    "difficulty": "experto",
    "clue": "Había palas por toda la habitación; al final, herramienta para cavar, sin su última. (4)",
    "answer": "PALA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "herramienta para cavar",
    "fodder": "palas",
    "indicators": [
      "sin su última"
    ],
    "explanation": "PALAS sin su parte indicada = PALA.",
    "_def": "herramienta para cavar"
  },
  {
    "id": "d103",
    "difficulty": "dificil",
    "clue": "La pista junta nota musical junto con el resto; al final aparece desafío. (4)",
    "answer": "RETO",
    "mechanisms": [
      "charade"
    ],
    "definition": "desafío",
    "fodder": "nota musical",
    "indicators": [
      "junto con"
    ],
    "explanation": "RE+TO=RETO",
    "_def": "desafío"
  },
  {
    "id": "d104",
    "difficulty": "muy-dificil",
    "clue": "Había partes por toda la habitación; al final, porción o informe, sin despedida al final. (5)",
    "answer": "PARTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "porción o informe",
    "fodder": "partes",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "PARTES sin su parte indicada = PARTE.",
    "_def": "porción o informe"
  },
  {
    "id": "d105",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: inés deja entradas antes; de primeras, y al final todo apuntó a ocurrencia. (4)",
    "answer": "IDEA",
    "mechanisms": [
      "initials"
    ],
    "definition": "ocurrencia",
    "fodder": "inés deja entradas antes",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Inés deja entradas antes forman IDEA.",
    "_def": "ocurrencia"
  },
  {
    "id": "d106",
    "difficulty": "experto",
    "clue": "La nota quedó así: rosa ordena documentos antes; al principio, y al final todo apuntó a quilla de la proa. (4)",
    "answer": "RODA",
    "mechanisms": [
      "initials"
    ],
    "definition": "quilla de la proa",
    "fodder": "rosa ordena documentos antes",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Rosa ordena documentos antes forman RODA.",
    "_def": "quilla de la proa"
  },
  {
    "id": "d107",
    "difficulty": "experto",
    "clue": "Nadie reparó en caudaloso; entre sus letras apareció cantidad de agua que fluye. (6)",
    "answer": "CAUDAL",
    "mechanisms": [
      "hidden"
    ],
    "definition": "cantidad de agua que fluye",
    "fodder": "caudal",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "CAUDAL está escondido dentro de CAUDALOSO.",
    "_def": "cantidad de agua que fluye"
  },
  {
    "id": "d108",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en cableado; entre sus letras apareció cable. (5)",
    "answer": "CABLE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "cable",
    "fodder": "cable",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "CABLE está escondido dentro de CABLEADO.",
    "_def": "cable"
  },
  {
    "id": "d109",
    "difficulty": "experto",
    "clue": "La pista junta sal junto con el resto; al final aparece habitación amplia. (5)",
    "answer": "SALON",
    "mechanisms": [
      "charade"
    ],
    "definition": "habitación amplia",
    "fodder": "sal",
    "indicators": [
      "junto con"
    ],
    "explanation": "SAL+ON=SALON",
    "_def": "habitación amplia"
  },
  {
    "id": "d110",
    "difficulty": "muy-dificil",
    "clue": "Había copas por toda la habitación; al final, vaso con pie, sin su última. (4)",
    "answer": "COPA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "vaso con pie",
    "fodder": "copas",
    "indicators": [
      "sin su última"
    ],
    "explanation": "COPAS sin su parte indicada = COPA.",
    "_def": "vaso con pie"
  },
  {
    "id": "d111",
    "difficulty": "muy-dificil",
    "clue": "En el relato, color tomó otro nombre cuando cambió una sola letra; así apareció molestia física. (5)",
    "answer": "DOLOR",
    "mechanisms": [
      "substitution"
    ],
    "definition": "molestia física",
    "fodder": "color",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de COLOR para obtener DOLOR.",
    "_def": "molestia física"
  },
  {
    "id": "d112",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, la roma perdió el orden; al final apareció conjunto de flores. (4)",
    "answer": "RAMO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "conjunto de flores",
    "fodder": "roma",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de ROMA = RAMO.",
    "_def": "conjunto de flores"
  },
  {
    "id": "d113",
    "difficulty": "experto",
    "clue": "Había embudos por toda la habitación; al final, utensilio para trasvasar líquidos, perdiendo la última. (6)",
    "answer": "EMBUDO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "utensilio para trasvasar líquidos",
    "fodder": "embudos",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "EMBUDOS sin su parte indicada = EMBUDO.",
    "_def": "utensilio para trasvasar líquidos"
  },
  {
    "id": "d114",
    "difficulty": "experto",
    "clue": "En el relato, dolor tomó otro nombre cuando cambió una sola letra; así apareció propiedad visual. (5)",
    "answer": "COLOR",
    "mechanisms": [
      "substitution"
    ],
    "definition": "propiedad visual",
    "fodder": "dolor",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de DOLOR para obtener COLOR.",
    "_def": "propiedad visual"
  },
  {
    "id": "d115",
    "difficulty": "experto",
    "clue": "Había mangas por toda la habitación; al final, parte de una prenda, perdiendo la última. (5)",
    "answer": "MANGA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "parte de una prenda",
    "fodder": "mangas",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "MANGAS sin su parte indicada = MANGA.",
    "_def": "parte de una prenda"
  },
  {
    "id": "d116",
    "difficulty": "experto",
    "clue": "Había edads por toda la habitación; al final, tiempo vivido, sin su última. (4)",
    "answer": "EDAD",
    "mechanisms": [
      "deletion"
    ],
    "definition": "tiempo vivido",
    "fodder": "edads",
    "indicators": [
      "sin su última"
    ],
    "explanation": "EDADS sin su parte indicada = EDAD.",
    "_def": "tiempo vivido"
  },
  {
    "id": "d117",
    "difficulty": "experto",
    "clue": "La nota quedó así: laura ulises zoe; de primeras, y al final todo apuntó a lo contrario de la oscuridad. (3)",
    "answer": "LUZ",
    "mechanisms": [
      "initials"
    ],
    "definition": "lo contrario de la oscuridad",
    "fodder": "laura ulises zoe",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Laura Ulises Zoe forman LUZ.",
    "_def": "lo contrario de la oscuridad"
  },
  {
    "id": "d118",
    "difficulty": "experto",
    "clue": "La nota quedó así: inés mira papeles últimamente luego de comer sobre la mesa otra vez; por sus comienzos, y al final todo apuntó a fuerza que inicia movimiento. (7)",
    "answer": "IMPULSO",
    "mechanisms": [
      "initials"
    ],
    "definition": "fuerza que inicia movimiento",
    "fodder": "inés mira papeles últimamente luego de comer sobre la mesa otra vez",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Inés mira papeles últimamente luego de comer sobre la mesa otra vez forman IMPULSO.",
    "_def": "fuerza que inicia movimiento"
  },
  {
    "id": "d119",
    "difficulty": "dificil",
    "clue": "Había lados por toda la habitación; al final, parte lateral, perdiendo la última. (4)",
    "answer": "LADO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "parte lateral",
    "fodder": "lados",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "LADOS sin su parte indicada = LADO.",
    "_def": "parte lateral"
  },
  {
    "id": "d120",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: ana revisa entradas nuevamente al anochecer; por sus comienzos, y al final todo apuntó a grano de roca suelto. (5)",
    "answer": "ARENA",
    "mechanisms": [
      "initials"
    ],
    "definition": "grano de roca suelto",
    "fodder": "ana revisa entradas nuevamente al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Ana revisa entradas nuevamente al anochecer forman ARENA.",
    "_def": "grano de roca suelto"
  },
  {
    "id": "d121",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en prosaico; entre sus letras apareció flor. (4)",
    "answer": "ROSA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "flor",
    "fodder": "rosa",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "ROSA está escondido dentro de PROSAICO.",
    "_def": "flor"
  },
  {
    "id": "d122",
    "difficulty": "experto",
    "clue": "La nota quedó así: eva sigue cartas últimamente de camino otra vez; al comenzar, y al final todo apuntó a emblema protector. (6)",
    "answer": "ESCUDO",
    "mechanisms": [
      "initials"
    ],
    "definition": "emblema protector",
    "fodder": "eva sigue cartas últimamente de camino otra vez",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Eva sigue cartas últimamente de camino otra vez forman ESCUDO.",
    "_def": "emblema protector"
  },
  {
    "id": "d123",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla envía recibos rápido otra vez; por sus comienzos, y al final todo apuntó a elevación del terreno. (5)",
    "answer": "CERRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "elevación del terreno",
    "fodder": "carla envía recibos rápido otra vez",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Carla envía recibos rápido otra vez forman CERRO.",
    "_def": "elevación del terreno"
  },
  {
    "id": "d124",
    "difficulty": "experto",
    "clue": "Nadie reparó en promesa; entre sus letras apareció mesa. (4)",
    "answer": "MESA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "mesa",
    "fodder": "mesa",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "MESA está escondido dentro de PROMESA.",
    "_def": "mesa"
  },
  {
    "id": "d125",
    "difficulty": "experto",
    "clue": "La nota quedó así: eva nota cartas antes junto a la puerta en el barrio; por sus comienzos, y al final todo apuntó a tejido ornamental. (6)",
    "answer": "ENCAJE",
    "mechanisms": [
      "initials"
    ],
    "definition": "tejido ornamental",
    "fodder": "eva nota cartas antes junto a la puerta en el barrio",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Eva nota cartas antes junto a la puerta en el barrio forman ENCAJE.",
    "_def": "tejido ornamental"
  },
  {
    "id": "d126",
    "difficulty": "dificil",
    "clue": "Nadie reparó en expediente; entre sus letras apareció pieza de la boca. (6)",
    "answer": "DIENTE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "pieza de la boca",
    "fodder": "diente",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "DIENTE está escondido dentro de EXPEDIENTE.",
    "_def": "pieza de la boca"
  },
  {
    "id": "d127",
    "difficulty": "experto",
    "clue": "La nota quedó así: marta anota sellos cerca al anochecer sin ruido al anochecer; al comenzar, y al final todo apuntó a objeto que cubre el rostro. (7)",
    "answer": "MASCARA",
    "mechanisms": [
      "initials"
    ],
    "definition": "objeto que cubre el rostro",
    "fodder": "marta anota sellos cerca al anochecer sin ruido al anochecer",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Marta anota sellos cerca al anochecer sin ruido al anochecer forman MASCARA.",
    "_def": "objeto que cubre el rostro"
  },
  {
    "id": "d128",
    "difficulty": "experto",
    "clue": "En el relato, marta tomó otro nombre cuando cambió una sola letra; así apareció señal distintiva. (5)",
    "answer": "MARCA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "señal distintiva",
    "fodder": "marta",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de MARTA para obtener MARCA.",
    "_def": "señal distintiva"
  },
  {
    "id": "d129",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, la sopa perdió el orden; al final apareció movimiento al andar. (4)",
    "answer": "PASO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "movimiento al andar",
    "fodder": "sopa",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de SOPA = PASO.",
    "_def": "movimiento al andar"
  },
  {
    "id": "d130",
    "difficulty": "dificil",
    "clue": "En el relato, deda tomó otro nombre cuando cambió una sola letra; así apareció extremidad de la mano. (4)",
    "answer": "DEDO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "extremidad de la mano",
    "fodder": "deda",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de DEDA para obtener DEDO.",
    "_def": "extremidad de la mano"
  },
  {
    "id": "d131",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en ordenado; entre sus letras apareció disposición o mandato. (5)",
    "answer": "ORDEN",
    "mechanisms": [
      "hidden"
    ],
    "definition": "disposición o mandato",
    "fodder": "orden",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "ORDEN está escondido dentro de ORDENADO.",
    "_def": "disposición o mandato"
  },
  {
    "id": "d132",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en tribunal; entre sus letras apareció grada para espectadores. (7)",
    "answer": "TRIBUNA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "grada para espectadores",
    "fodder": "tribuna",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "TRIBUNA está escondido dentro de TRIBUNAL.",
    "_def": "grada para espectadores"
  },
  {
    "id": "d133",
    "difficulty": "experto",
    "clue": "Había causas por toda la habitación; al final, motivo de un hecho, sin despedida al final. (5)",
    "answer": "CAUSA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "motivo de un hecho",
    "fodder": "causas",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "CAUSAS sin su parte indicada = CAUSA.",
    "_def": "motivo de un hecho"
  },
  {
    "id": "d134",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en obrador; entre sus letras apareció trabajo realizado. (4)",
    "answer": "OBRA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "trabajo realizado",
    "fodder": "obra",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "OBRA está escondido dentro de OBRADOR.",
    "_def": "trabajo realizado"
  },
  {
    "id": "d135",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, el canto se mezcló; al final apareció parte elevada de un zapato. (5)",
    "answer": "TACON",
    "mechanisms": [
      "anagram"
    ],
    "definition": "parte elevada de un zapato",
    "fodder": "canto",
    "indicators": [
      "se mezcló"
    ],
    "explanation": "Anagrama de CANTO = TACON.",
    "_def": "parte elevada de un zapato"
  },
  {
    "id": "d136",
    "difficulty": "dificil",
    "clue": "Durante la escena, el cabo se mezcló; al final apareció abertura para comer o hablar. (4)",
    "answer": "BOCA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "abertura para comer o hablar",
    "fodder": "cabo",
    "indicators": [
      "se mezcló"
    ],
    "explanation": "Anagrama de CABO = BOCA.",
    "_def": "abertura para comer o hablar"
  },
  {
    "id": "d137",
    "difficulty": "dificil",
    "clue": "Nadie reparó en plantado; entre sus letras apareció ser vegetal. (6)",
    "answer": "PLANTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "ser vegetal",
    "fodder": "planta",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "PLANTA está escondido dentro de PLANTADO.",
    "_def": "ser vegetal"
  },
  {
    "id": "d138",
    "difficulty": "dificil",
    "clue": "La nota quedó así: nico ordena documentos otra vez; al principio, y al final todo apuntó a punto de conexión. (4)",
    "answer": "NODO",
    "mechanisms": [
      "initials"
    ],
    "definition": "punto de conexión",
    "fodder": "nico ordena documentos otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Nico ordena documentos otra vez forman NODO.",
    "_def": "punto de conexión"
  },
  {
    "id": "d139",
    "difficulty": "dificil",
    "clue": "La nota quedó así: eva nota tickets rápido en el barrio gracias al aviso al anochecer; por sus comienzos, y al final todo apuntó a acto de dar algo. (7)",
    "answer": "ENTREGA",
    "mechanisms": [
      "initials"
    ],
    "definition": "acto de dar algo",
    "fodder": "eva nota tickets rápido en el barrio gracias al aviso al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Eva nota tickets rápido en el barrio gracias al aviso al anochecer forman ENTREGA.",
    "_def": "acto de dar algo"
  },
  {
    "id": "d140",
    "difficulty": "experto",
    "clue": "Nadie reparó en guantelete; entre sus letras apareció prenda para la mano. (6)",
    "answer": "GUANTE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "prenda para la mano",
    "fodder": "guante",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "GUANTE está escondido dentro de GUANTELETE.",
    "_def": "prenda para la mano"
  },
  {
    "id": "d141",
    "difficulty": "dificil",
    "clue": "Durante la escena, la toga se mezcló; al final apareció felino doméstico. (4)",
    "answer": "GATO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "felino doméstico",
    "fodder": "toga",
    "indicators": [
      "se mezcló"
    ],
    "explanation": "Anagrama de TOGA = GATO.",
    "_def": "felino doméstico"
  },
  {
    "id": "d142",
    "difficulty": "experto",
    "clue": "La nota quedó así: marta anota recibos gracias en el barrio nunca tarde; al comenzar, y al final todo apuntó a borde o espacio lateral. (6)",
    "answer": "MARGEN",
    "mechanisms": [
      "initials"
    ],
    "definition": "borde o espacio lateral",
    "fodder": "marta anota recibos gracias en el barrio nunca tarde",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Marta anota recibos gracias en el barrio nunca tarde forman MARGEN.",
    "_def": "borde o espacio lateral"
  },
  {
    "id": "d143",
    "difficulty": "experto",
    "clue": "La nota quedó así: bruno anota tickets entre sin ruido incluso al final al anochecer; de entrada, y al final todo apuntó a conjunto de elementos o instrumento de percusión. (7)",
    "answer": "BATERIA",
    "mechanisms": [
      "initials"
    ],
    "definition": "conjunto de elementos o instrumento de percusión",
    "fodder": "bruno anota tickets entre sin ruido incluso al final al anochecer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Bruno anota tickets entre sin ruido incluso al final al anochecer forman BATERIA.",
    "_def": "conjunto de elementos o instrumento de percusión"
  },
  {
    "id": "d144",
    "difficulty": "experto",
    "clue": "La nota quedó así: pablo investiga sellos tras al anochecer; al principio, y al final todo apuntó a indicio o lugar de carrera. (5)",
    "answer": "PISTA",
    "mechanisms": [
      "initials"
    ],
    "definition": "indicio o lugar de carrera",
    "fodder": "pablo investiga sellos tras al anochecer",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Pablo investiga sellos tras al anochecer forman PISTA.",
    "_def": "indicio o lugar de carrera"
  },
  {
    "id": "d145",
    "difficulty": "experto",
    "clue": "Durante la escena, el torno se desordenó; al final apareció asiento de un monarca. (5)",
    "answer": "TRONO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "asiento de un monarca",
    "fodder": "torno",
    "indicators": [
      "se desordenó"
    ],
    "explanation": "Anagrama de TORNO = TRONO.",
    "_def": "asiento de un monarca"
  },
  {
    "id": "d146",
    "difficulty": "experto",
    "clue": "La nota quedó así: bruno anota notas cerca otra vez; al comenzar, y al final todo apuntó a asiento o entidad financiera. (5)",
    "answer": "BANCO",
    "mechanisms": [
      "initials"
    ],
    "definition": "asiento o entidad financiera",
    "fodder": "bruno anota notas cerca otra vez",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Bruno anota notas cerca otra vez forman BANCO.",
    "_def": "asiento o entidad financiera"
  },
  {
    "id": "d147",
    "difficulty": "experto",
    "clue": "Al entrar, dijo hola; al oído, terminó sonando como una masa de agua que avanza. (3)",
    "answer": "OLA",
    "mechanisms": [
      "homophone"
    ],
    "definition": "masa de agua que avanza",
    "fodder": "hola",
    "indicators": [
      "al oído"
    ],
    "explanation": "HOLA suena como OLA.",
    "_def": "masa de agua que avanza"
  },
  {
    "id": "d148",
    "difficulty": "muy-dificil",
    "clue": "En el relato, punta tomó otro nombre cuando cambió una sola letra; así apareció lugar exacto. (5)",
    "answer": "PUNTO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "lugar exacto",
    "fodder": "punta",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de PUNTA para obtener PUNTO.",
    "_def": "lugar exacto"
  },
  {
    "id": "d149",
    "difficulty": "muy-dificil",
    "clue": "Había barcos por toda la habitación; al final, embarcación, sin su última. (5)",
    "answer": "BARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "embarcación",
    "fodder": "barcos",
    "indicators": [
      "sin su última"
    ],
    "explanation": "BARCOS sin su parte indicada = BARCO.",
    "_def": "embarcación"
  },
  {
    "id": "d150",
    "difficulty": "experto",
    "clue": "Nadie reparó en estela; entre sus letras apareció tela. (4)",
    "answer": "TELA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "tela",
    "fodder": "tela",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "TELA está escondido dentro de ESTELA.",
    "_def": "tela"
  },
  {
    "id": "d151",
    "difficulty": "dificil",
    "clue": "Había cargas por toda la habitación; al final, peso que se transporta, perdiendo la última. (5)",
    "answer": "CARGA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "peso que se transporta",
    "fodder": "cargas",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "CARGAS sin su parte indicada = CARGA.",
    "_def": "peso que se transporta"
  },
  {
    "id": "d152",
    "difficulty": "muy-dificil",
    "clue": "Al regresar, la ocra quedó dado la vuelta; así apareció arco. (4)",
    "answer": "ARCO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "arco",
    "fodder": "ocra",
    "indicators": [
      "dado la vuelta"
    ],
    "explanation": "OCRA al revés = ARCO.",
    "_def": "arco"
  },
  {
    "id": "d153",
    "difficulty": "experto",
    "clue": "La nota quedó así: laura investiga notas tras en el barrio sin ruido nunca tarde al anochecer; al principio, y al final todo apuntó a luz portátil. (8)",
    "answer": "LINTERNA",
    "mechanisms": [
      "initials"
    ],
    "definition": "luz portátil",
    "fodder": "laura investiga notas tras en el barrio sin ruido nunca tarde al anochecer",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Laura investiga notas tras en el barrio sin ruido nunca tarde al anochecer forman LINTERNA.",
    "_def": "luz portátil"
  },
  {
    "id": "d154",
    "difficulty": "experto",
    "clue": "La nota quedó así: tomás envía cartas hoy otra vez; de entrada, y al final todo apuntó a cubierta superior de un edificio. (5)",
    "answer": "TECHO",
    "mechanisms": [
      "initials"
    ],
    "definition": "cubierta superior de un edificio",
    "fodder": "tomás envía cartas hoy otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Tomás envía cartas hoy otra vez forman TECHO.",
    "_def": "cubierta superior de un edificio"
  },
  {
    "id": "d155",
    "difficulty": "experto",
    "clue": "Había marcos por toda la habitación; al final, borde que rodea, sin cola. (5)",
    "answer": "MARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "borde que rodea",
    "fodder": "marcos",
    "indicators": [
      "sin cola"
    ],
    "explanation": "MARCOS sin su parte indicada = MARCO.",
    "_def": "borde que rodea"
  },
  {
    "id": "d156",
    "difficulty": "muy-dificil",
    "clue": "En el relato, gama tomó otro nombre cuando cambió una sola letra; así apareció mujer distinguida. (4)",
    "answer": "DAMA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "mujer distinguida",
    "fodder": "gama",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de GAMA para obtener DAMA.",
    "_def": "mujer distinguida"
  },
  {
    "id": "d157",
    "difficulty": "dificil",
    "clue": "Había calores por toda la habitación; al final, energía térmica, sin cola. (5)",
    "answer": "CALOR",
    "mechanisms": [
      "deletion"
    ],
    "definition": "energía térmica",
    "fodder": "calores",
    "indicators": [
      "sin cola"
    ],
    "explanation": "CALORES sin su parte indicada = CALOR.",
    "_def": "energía térmica"
  },
  {
    "id": "d158",
    "difficulty": "experto",
    "clue": "La pista junta camino junto con el resto; al final aparece vía para ir de un sitio a otro. (6)",
    "answer": "CAMINO",
    "mechanisms": [
      "charade"
    ],
    "definition": "vía para ir de un sitio a otro",
    "fodder": "camino",
    "indicators": [
      "junto con"
    ],
    "explanation": "CAM+INO=CAMINO",
    "_def": "vía para ir de un sitio a otro"
  },
  {
    "id": "d159",
    "difficulty": "muy-dificil",
    "clue": "Había plumas por toda la habitación; al final, estructura que recubre a las aves, sin su última. (5)",
    "answer": "PLUMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "estructura que recubre a las aves",
    "fodder": "plumas",
    "indicators": [
      "sin su última"
    ],
    "explanation": "PLUMAS sin su parte indicada = PLUMA.",
    "_def": "estructura que recubre a las aves"
  },
  {
    "id": "d160",
    "difficulty": "experto",
    "clue": "La nota quedó así: hugo envía listas inmediatamente con cuidado en el barrio; de primeras, y al final todo apuntó a elemento que gira para propulsar. (6)",
    "answer": "HELICE",
    "mechanisms": [
      "initials"
    ],
    "definition": "elemento que gira para propulsar",
    "fodder": "hugo envía listas inmediatamente con cuidado en el barrio",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Hugo envía listas inmediatamente con cuidado en el barrio forman HELICE.",
    "_def": "elemento que gira para propulsar"
  },
  {
    "id": "d161",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla anota papeles inmediatamente tras el cierre al anochecer luego de comer; de entrada, y al final todo apuntó a ciudad principal. (7)",
    "answer": "CAPITAL",
    "mechanisms": [
      "initials"
    ],
    "definition": "ciudad principal",
    "fodder": "carla anota papeles inmediatamente tras el cierre al anochecer luego de comer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Carla anota papeles inmediatamente tras el cierre al anochecer luego de comer forman CAPITAL.",
    "_def": "ciudad principal"
  },
  {
    "id": "d162",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: ana zanja órdenes tras en el barrio; de primeras, y al final todo apuntó a golpe fuerte. (5)",
    "answer": "AZOTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "golpe fuerte",
    "fodder": "ana zanja órdenes tras en el barrio",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Ana zanja órdenes tras en el barrio forman AZOTE.",
    "_def": "golpe fuerte"
  },
  {
    "id": "d163",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: bruno ordena recibos desde otra vez; al comenzar, y al final todo apuntó a parte interior de una embarcación. (5)",
    "answer": "BORDO",
    "mechanisms": [
      "initials"
    ],
    "definition": "parte interior de una embarcación",
    "fodder": "bruno ordena recibos desde otra vez",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Bruno ordena recibos desde otra vez forman BORDO.",
    "_def": "parte interior de una embarcación"
  },
  {
    "id": "d164",
    "difficulty": "experto",
    "clue": "La pista junta turista junto con el resto; al final aparece orden de intervención. (5)",
    "answer": "TURNO",
    "mechanisms": [
      "charade"
    ],
    "definition": "orden de intervención",
    "fodder": "turista",
    "indicators": [
      "junto con"
    ],
    "explanation": "TUR+NO=TURNO",
    "_def": "orden de intervención"
  },
  {
    "id": "d165",
    "difficulty": "experto",
    "clue": "Nadie reparó en pasatiempo; entre sus letras apareció actividad para ocupar el tiempo. (10)",
    "answer": "PASATIEMPO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "actividad para ocupar el tiempo",
    "fodder": "pasatiempo",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "PASATIEMPO está escondido dentro de PASATIEMPO.",
    "_def": "actividad para ocupar el tiempo"
  },
  {
    "id": "d166",
    "difficulty": "experto",
    "clue": "La nota quedó así: bruno anota listas otra vez nunca tarde; al comenzar, y al final todo apuntó a pelota usada en deportes. (5)",
    "answer": "BALON",
    "mechanisms": [
      "initials"
    ],
    "definition": "pelota usada en deportes",
    "fodder": "bruno anota listas otra vez nunca tarde",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Bruno anota listas otra vez nunca tarde forman BALON.",
    "_def": "pelota usada en deportes"
  },
  {
    "id": "d167",
    "difficulty": "muy-dificil",
    "clue": "Había bloques por toda la habitación; al final, pieza sólida de material, sin su última. (6)",
    "answer": "BLOQUE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "pieza sólida de material",
    "fodder": "bloques",
    "indicators": [
      "sin su última"
    ],
    "explanation": "BLOQUES sin su parte indicada = BLOQUE.",
    "_def": "pieza sólida de material"
  },
  {
    "id": "d168",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla anota mapas inmediatamente sobre la mesa en el barrio tras el cierre al anochecer; de entrada, y al final todo apuntó a prenda de manga corta. (8)",
    "answer": "CAMISETA",
    "mechanisms": [
      "initials"
    ],
    "definition": "prenda de manga corta",
    "fodder": "carla anota mapas inmediatamente sobre la mesa en el barrio tras el cierre al anochecer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Carla anota mapas inmediatamente sobre la mesa en el barrio tras el cierre al anochecer forman CAMISETA.",
    "_def": "prenda de manga corta"
  },
  {
    "id": "d169",
    "difficulty": "dificil",
    "clue": "La nota quedó así: hugo investiga listas otra vez; de primeras, y al final todo apuntó a fibra continua. (4)",
    "answer": "HILO",
    "mechanisms": [
      "initials"
    ],
    "definition": "fibra continua",
    "fodder": "hugo investiga listas otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Hugo investiga listas otra vez forman HILO.",
    "_def": "fibra continua"
  },
  {
    "id": "d170",
    "difficulty": "experto",
    "clue": "Al regresar, la risa quedó dado la vuelta; así apareció agarrar. (4)",
    "answer": "ASIR",
    "mechanisms": [
      "reversal"
    ],
    "definition": "agarrar",
    "fodder": "risa",
    "indicators": [
      "dado la vuelta"
    ],
    "explanation": "RISA al revés = ASIR.",
    "_def": "agarrar"
  },
  {
    "id": "d171",
    "difficulty": "experto",
    "clue": "Había motores por toda la habitación; al final, máquina que genera movimiento, sin despedida al final. (5)",
    "answer": "MOTOR",
    "mechanisms": [
      "deletion"
    ],
    "definition": "máquina que genera movimiento",
    "fodder": "motores",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "MOTORES sin su parte indicada = MOTOR.",
    "_def": "máquina que genera movimiento"
  },
  {
    "id": "d172",
    "difficulty": "muy-dificil",
    "clue": "Había pesas por toda la habitación; al final, objeto usado para medir masa, sin despedida al final. (4)",
    "answer": "PESA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "objeto usado para medir masa",
    "fodder": "pesas",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "PESAS sin su parte indicada = PESA.",
    "_def": "objeto usado para medir masa"
  },
  {
    "id": "d173",
    "difficulty": "experto",
    "clue": "La nota quedó así: carla anota mapas bajo incluso al final al anochecer; por sus comienzos, y al final todo apuntó a modifica. (6)",
    "answer": "CAMBIA",
    "mechanisms": [
      "initials"
    ],
    "definition": "modifica",
    "fodder": "carla anota mapas bajo incluso al final al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Carla anota mapas bajo incluso al final al anochecer forman CAMBIA.",
    "_def": "modifica"
  },
  {
    "id": "d174",
    "difficulty": "experto",
    "clue": "La nota quedó así: valeria envía notas tras al anochecer nunca tarde al anochecer; al comenzar, y al final todo apuntó a abertura con luz. (7)",
    "answer": "VENTANA",
    "mechanisms": [
      "initials"
    ],
    "definition": "abertura con luz",
    "fodder": "valeria envía notas tras al anochecer nunca tarde al anochecer",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Valeria envía notas tras al anochecer nunca tarde al anochecer forman VENTANA.",
    "_def": "abertura con luz"
  },
  {
    "id": "d175",
    "difficulty": "muy-dificil",
    "clue": "Había mangos por toda la habitación; al final, parte por donde se agarra, perdiendo la última. (5)",
    "answer": "MANGO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "parte por donde se agarra",
    "fodder": "mangos",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "MANGOS sin su parte indicada = MANGO.",
    "_def": "parte por donde se agarra"
  },
  {
    "id": "d176",
    "difficulty": "experto",
    "clue": "La nota quedó así: eva nota listas antes con cuidado en el barrio; al principio, y al final todo apuntó a unión. (6)",
    "answer": "ENLACE",
    "mechanisms": [
      "initials"
    ],
    "definition": "unión",
    "fodder": "eva nota listas antes con cuidado en el barrio",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Eva nota listas antes con cuidado en el barrio forman ENLACE.",
    "_def": "unión"
  },
  {
    "id": "d177",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: ana cambia entradas nuevamente tras el cierre otra vez; de primeras, y al final todo apuntó a rasgo de pronunciación. (6)",
    "answer": "ACENTO",
    "mechanisms": [
      "initials"
    ],
    "definition": "rasgo de pronunciación",
    "fodder": "ana cambia entradas nuevamente tras el cierre otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Ana cambia entradas nuevamente tras el cierre otra vez forman ACENTO.",
    "_def": "rasgo de pronunciación"
  },
  {
    "id": "d178",
    "difficulty": "dificil",
    "clue": "En el relato, pipa tomó otro nombre cuando cambió una sola letra; así apareció conjunto o batería. (4)",
    "answer": "PILA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "conjunto o batería",
    "fodder": "pipa",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de PIPA para obtener PILA.",
    "_def": "conjunto o batería"
  },
  {
    "id": "d179",
    "difficulty": "muy-dificil",
    "clue": "En el relato, mesa tomó otro nombre cuando cambió una sola letra; así apareció cantidad reunida. (4)",
    "answer": "MASA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "cantidad reunida",
    "fodder": "mesa",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de MESA para obtener MASA.",
    "_def": "cantidad reunida"
  },
  {
    "id": "d180",
    "difficulty": "experto",
    "clue": "La nota quedó así: gabriela ordena listas para en el barrio; al comenzar, y al final todo apuntó a impacto. (5)",
    "answer": "GOLPE",
    "mechanisms": [
      "initials"
    ],
    "definition": "impacto",
    "fodder": "gabriela ordena listas para en el barrio",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Gabriela ordena listas para en el barrio forman GOLPE.",
    "_def": "impacto"
  },
  {
    "id": "d181",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: pablo lee acuerdos zigzagueando al anochecer; al principio, y al final todo apuntó a espacio público abierto. (5)",
    "answer": "PLAZA",
    "mechanisms": [
      "initials"
    ],
    "definition": "espacio público abierto",
    "fodder": "pablo lee acuerdos zigzagueando al anochecer",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Pablo lee acuerdos zigzagueando al anochecer forman PLAZA.",
    "_def": "espacio público abierto"
  },
  {
    "id": "d182",
    "difficulty": "experto",
    "clue": "La nota quedó así: marta ordena notas otra vez; por sus comienzos, y al final todo apuntó a animal primate o prenda. (4)",
    "answer": "MONO",
    "mechanisms": [
      "initials"
    ],
    "definition": "animal primate o prenda",
    "fodder": "marta ordena notas otra vez",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Marta ordena notas otra vez forman MONO.",
    "_def": "animal primate o prenda"
  },
  {
    "id": "d183",
    "difficulty": "dificil",
    "clue": "La nota quedó así: carla anota mapas entre luego de comer luego de comer otra vez; al comenzar, y al final todo apuntó a mamífero de joroba. (7)",
    "answer": "CAMELLO",
    "mechanisms": [
      "initials"
    ],
    "definition": "mamífero de joroba",
    "fodder": "carla anota mapas entre luego de comer luego de comer otra vez",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Carla anota mapas entre luego de comer luego de comer otra vez forman CAMELLO.",
    "_def": "mamífero de joroba"
  },
  {
    "id": "d184",
    "difficulty": "muy-dificil",
    "clue": "La pista junta foro junto con el resto; al final aparece configuración exterior. (5)",
    "answer": "FORMA",
    "mechanisms": [
      "charade"
    ],
    "definition": "configuración exterior",
    "fodder": "foro",
    "indicators": [
      "junto con"
    ],
    "explanation": "FOR+MA=FORMA",
    "_def": "configuración exterior"
  },
  {
    "id": "d185",
    "difficulty": "dificil",
    "clue": "En el relato, barra tomó otro nombre cuando cambió una sola letra; así apareció recipiente de mesa. (5)",
    "answer": "JARRA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "recipiente de mesa",
    "fodder": "barra",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de BARRA para obtener JARRA.",
    "_def": "recipiente de mesa"
  },
  {
    "id": "d186",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: marta ordena notas entre de camino al anochecer; al comenzar, y al final todo apuntó a pieza metálica de curso legal. (6)",
    "answer": "MONEDA",
    "mechanisms": [
      "initials"
    ],
    "definition": "pieza metálica de curso legal",
    "fodder": "marta ordena notas entre de camino al anochecer",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Marta ordena notas entre de camino al anochecer forman MONEDA.",
    "_def": "pieza metálica de curso legal"
  },
  {
    "id": "d187",
    "difficulty": "experto",
    "clue": "La nota quedó así: carla anota boletos luego en el barrio al anochecer de camino otra vez; de primeras, y al final todo apuntó a conjunto de cables. (8)",
    "answer": "CABLEADO",
    "mechanisms": [
      "initials"
    ],
    "definition": "conjunto de cables",
    "fodder": "carla anota boletos luego en el barrio al anochecer de camino otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Carla anota boletos luego en el barrio al anochecer de camino otra vez forman CABLEADO.",
    "_def": "conjunto de cables"
  },
  {
    "id": "d188",
    "difficulty": "muy-dificil",
    "clue": "En el relato, mata tomó otro nombre cuando cambió una sola letra; así apareció representación de un territorio. (4)",
    "answer": "MAPA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "representación de un territorio",
    "fodder": "mata",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de MATA para obtener MAPA.",
    "_def": "representación de un territorio"
  },
  {
    "id": "d189",
    "difficulty": "experto",
    "clue": "Había balas por toda la habitación; al final, proyectil pequeño, dejando atrás la cola. (4)",
    "answer": "BALA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "proyectil pequeño",
    "fodder": "balas",
    "indicators": [
      "dejando atrás la cola"
    ],
    "explanation": "BALAS sin su parte indicada = BALA.",
    "_def": "proyectil pequeño"
  },
  {
    "id": "d190",
    "difficulty": "experto",
    "clue": "En el relato, clave tomó otro nombre cuando cambió una sola letra; así apareció grupo de alumnos o categoría. (5)",
    "answer": "CLASE",
    "mechanisms": [
      "substitution"
    ],
    "definition": "grupo de alumnos o categoría",
    "fodder": "clave",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de CLAVE para obtener CLASE.",
    "_def": "grupo de alumnos o categoría"
  },
  {
    "id": "d191",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, la toga acabó revuelto; al final apareció porción muy pequeña de líquido. (4)",
    "answer": "GOTA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "porción muy pequeña de líquido",
    "fodder": "toga",
    "indicators": [
      "acabó revuelto"
    ],
    "explanation": "Anagrama de TOGA = GOTA.",
    "_def": "porción muy pequeña de líquido"
  },
  {
    "id": "d192",
    "difficulty": "dificil",
    "clue": "La nota quedó así: eva sigue papeles entre junto a la puerta otra vez; al comenzar, y al final todo apuntó a superficie que devuelve una imagen. (6)",
    "answer": "ESPEJO",
    "mechanisms": [
      "initials"
    ],
    "definition": "superficie que devuelve una imagen",
    "fodder": "eva sigue papeles entre junto a la puerta otra vez",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Eva sigue papeles entre junto a la puerta otra vez forman ESPEJO.",
    "_def": "superficie que devuelve una imagen"
  },
  {
    "id": "d193",
    "difficulty": "dificil",
    "clue": "Nadie reparó en escalar; entre sus letras apareció relación entre tamaños. (6)",
    "answer": "ESCALA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "relación entre tamaños",
    "fodder": "escala",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "ESCALA está escondido dentro de ESCALAR.",
    "_def": "relación entre tamaños"
  },
  {
    "id": "d194",
    "difficulty": "experto",
    "clue": "Durante la escena, la mala perdió el orden; al final apareció parte espiritual o esencia. (4)",
    "answer": "ALMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "parte espiritual o esencia",
    "fodder": "mala",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de MALA = ALMA.",
    "_def": "parte espiritual o esencia"
  },
  {
    "id": "d195",
    "difficulty": "dificil",
    "clue": "La nota quedó así: diego ordena mapas inmediatamente nunca tarde incluso al final otra vez; de primeras, y al final todo apuntó a control o ámbito. (7)",
    "answer": "DOMINIO",
    "mechanisms": [
      "initials"
    ],
    "definition": "control o ámbito",
    "fodder": "diego ordena mapas inmediatamente nunca tarde incluso al final otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Diego ordena mapas inmediatamente nunca tarde incluso al final otra vez forman DOMINIO.",
    "_def": "control o ámbito"
  },
  {
    "id": "d196",
    "difficulty": "muy-dificil",
    "clue": "Había empujes por toda la habitación; al final, fuerza que hace avanzar, sin cola. (6)",
    "answer": "EMPUJE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "fuerza que hace avanzar",
    "fodder": "empujes",
    "indicators": [
      "sin cola"
    ],
    "explanation": "EMPUJES sin su parte indicada = EMPUJE.",
    "_def": "fuerza que hace avanzar"
  },
  {
    "id": "d197",
    "difficulty": "muy-dificil",
    "clue": "La pista junta bebida junto con el resto; al final aparece contacto afectuoso. (4)",
    "answer": "BESO",
    "mechanisms": [
      "charade"
    ],
    "definition": "contacto afectuoso",
    "fodder": "bebida",
    "indicators": [
      "junto con"
    ],
    "explanation": "BE+SO=BESO",
    "_def": "contacto afectuoso"
  },
  {
    "id": "d198",
    "difficulty": "experto",
    "clue": "Había disparos por toda la habitación; al final, acción de lanzar un proyectil, sin cola. (7)",
    "answer": "DISPARO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "acción de lanzar un proyectil",
    "fodder": "disparos",
    "indicators": [
      "sin cola"
    ],
    "explanation": "DISPAROS sin su parte indicada = DISPARO.",
    "_def": "acción de lanzar un proyectil"
  },
  {
    "id": "d199",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: eva sigue tickets antes con cuidado incluso al final otra vez nunca tarde; al comenzar, y al final todo apuntó a lugar de parada o periodo del año. (8)",
    "answer": "ESTACION",
    "mechanisms": [
      "initials"
    ],
    "definition": "lugar de parada o periodo del año",
    "fodder": "eva sigue tickets antes con cuidado incluso al final otra vez nunca tarde",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Eva sigue tickets antes con cuidado incluso al final otra vez nunca tarde forman ESTACION.",
    "_def": "lugar de parada o periodo del año"
  },
  {
    "id": "d200",
    "difficulty": "dificil",
    "clue": "La pista junta padre junto con el resto; al final aparece barra de madera. (4)",
    "answer": "PALO",
    "mechanisms": [
      "charade"
    ],
    "definition": "barra de madera",
    "fodder": "padre",
    "indicators": [
      "junto con"
    ],
    "explanation": "PA+LO=PALO",
    "_def": "barra de madera"
  },
  {
    "id": "d201",
    "difficulty": "dificil",
    "clue": "Había tramos por toda la habitación; al final, parte de un recorrido, sin su última. (5)",
    "answer": "TRAMO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "parte de un recorrido",
    "fodder": "tramos",
    "indicators": [
      "sin su última"
    ],
    "explanation": "TRAMOS sin su parte indicada = TRAMO.",
    "_def": "parte de un recorrido"
  },
  {
    "id": "d202",
    "difficulty": "experto",
    "clue": "La nota quedó así: eva julia eva; de primeras, y al final todo apuntó a pivote de un mecanismo. (3)",
    "answer": "EJE",
    "mechanisms": [
      "initials"
    ],
    "definition": "pivote de un mecanismo",
    "fodder": "eva julia eva",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Eva Julia Eva forman EJE.",
    "_def": "pivote de un mecanismo"
  },
  {
    "id": "d203",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en lenguaje; entre sus letras apareció órgano o idioma. (6)",
    "answer": "LENGUA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "órgano o idioma",
    "fodder": "lengua",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "LENGUA está escondido dentro de LENGUAJE.",
    "_def": "órgano o idioma"
  },
  {
    "id": "d204",
    "difficulty": "muy-dificil",
    "clue": "Había cascos por toda la habitación; al final, protección para la cabeza, sin su última. (5)",
    "answer": "CASCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "protección para la cabeza",
    "fodder": "cascos",
    "indicators": [
      "sin su última"
    ],
    "explanation": "CASCOS sin su parte indicada = CASCO.",
    "_def": "protección para la cabeza"
  },
  {
    "id": "d205",
    "difficulty": "experto",
    "clue": "La nota quedó así: diego ordena boletos luego en el barrio; de entrada, y al final todo apuntó a que vale dos. (5)",
    "answer": "DOBLE",
    "mechanisms": [
      "initials"
    ],
    "definition": "que vale dos",
    "fodder": "diego ordena boletos luego en el barrio",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Diego ordena boletos luego en el barrio forman DOBLE.",
    "_def": "que vale dos"
  },
  {
    "id": "d206",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en tramado; entre sus letras apareció enredo o argumento. (5)",
    "answer": "TRAMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "enredo o argumento",
    "fodder": "trama",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "TRAMA está escondido dentro de TRAMADO.",
    "_def": "enredo o argumento"
  },
  {
    "id": "d207",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, la cora acabó revuelto; al final apareció piedra grande. (4)",
    "answer": "ROCA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "piedra grande",
    "fodder": "cora",
    "indicators": [
      "acabó revuelto"
    ],
    "explanation": "Anagrama de CORA = ROCA.",
    "_def": "piedra grande"
  },
  {
    "id": "d208",
    "difficulty": "experto",
    "clue": "La nota quedó así: bruno usa zapatos otra vez nunca tarde; de entrada, y al final todo apuntó a caja para cartas. (5)",
    "answer": "BUZON",
    "mechanisms": [
      "initials"
    ],
    "definition": "caja para cartas",
    "fodder": "bruno usa zapatos otra vez nunca tarde",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Bruno usa zapatos otra vez nunca tarde forman BUZON.",
    "_def": "caja para cartas"
  },
  {
    "id": "d209",
    "difficulty": "experto",
    "clue": "Durante la escena, el saco cambió de sitio; al final apareció objeto indeterminado. (4)",
    "answer": "COSA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "objeto indeterminado",
    "fodder": "saco",
    "indicators": [
      "cambió de sitio"
    ],
    "explanation": "Anagrama de SACO = COSA.",
    "_def": "objeto indeterminado"
  },
  {
    "id": "d210",
    "difficulty": "dificil",
    "clue": "La pista junta puede junto con el resto; al final aparece obra para cruzar un obstáculo. (6)",
    "answer": "PUENTE",
    "mechanisms": [
      "charade"
    ],
    "definition": "obra para cruzar un obstáculo",
    "fodder": "puede",
    "indicators": [
      "junto con"
    ],
    "explanation": "PUE+NTE=PUENTE",
    "_def": "obra para cruzar un obstáculo"
  },
  {
    "id": "d211",
    "difficulty": "experto",
    "clue": "La nota quedó así: tomás investiga recibos antes de camino al anochecer; al comenzar, y al final todo apuntó a conjunto de ejemplares impresos. (6)",
    "answer": "TIRADA",
    "mechanisms": [
      "initials"
    ],
    "definition": "conjunto de ejemplares impresos",
    "fodder": "tomás investiga recibos antes de camino al anochecer",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Tomás investiga recibos antes de camino al anochecer forman TIRADA.",
    "_def": "conjunto de ejemplares impresos"
  },
  {
    "id": "d212",
    "difficulty": "experto",
    "clue": "La nota quedó así: hugo ordena jarras antes; por sus comienzos, y al final todo apuntó a parte plana de una planta. (4)",
    "answer": "HOJA",
    "mechanisms": [
      "initials"
    ],
    "definition": "parte plana de una planta",
    "fodder": "hugo ordena jarras antes",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Hugo ordena jarras antes forman HOJA.",
    "_def": "parte plana de una planta"
  },
  {
    "id": "d213",
    "difficulty": "experto",
    "clue": "Nadie reparó en caramelo; dentro de, al final, apareció parte delantera de algo. (4)",
    "answer": "CARA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "parte delantera de algo",
    "fodder": "cara",
    "indicators": [
      "dentro de"
    ],
    "explanation": "CARA está escondido al comienzo de CARAMELO.",
    "_def": "parte delantera de algo"
  },
  {
    "id": "d214",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: inés mira acuerdos nuevamente; de primeras, y al final todo apuntó a objeto que atrae ciertos metales. (4)",
    "answer": "IMAN",
    "mechanisms": [
      "initials"
    ],
    "definition": "objeto que atrae ciertos metales",
    "fodder": "inés mira acuerdos nuevamente",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Inés mira acuerdos nuevamente forman IMAN.",
    "_def": "objeto que atrae ciertos metales"
  },
  {
    "id": "d215",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: nico ordena mapas bajo sin ruido en el barrio; al principio, y al final todo apuntó a palabra que designa. (6)",
    "answer": "NOMBRE",
    "mechanisms": [
      "initials"
    ],
    "definition": "palabra que designa",
    "fodder": "nico ordena mapas bajo sin ruido en el barrio",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Nico ordena mapas bajo sin ruido en el barrio forman NOMBRE.",
    "_def": "palabra que designa"
  },
  {
    "id": "d216",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: laura anota mapas inmediatamente nunca tarde al anochecer; al principio, y al final todo apuntó a hoja delgada. (6)",
    "answer": "LAMINA",
    "mechanisms": [
      "initials"
    ],
    "definition": "hoja delgada",
    "fodder": "laura anota mapas inmediatamente nunca tarde al anochecer",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Laura anota mapas inmediatamente nunca tarde al anochecer forman LAMINA.",
    "_def": "hoja delgada"
  },
  {
    "id": "d217",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla ordena recibos tras en el barrio; por sus comienzos, y al final todo apuntó a sección o interrupción. (5)",
    "answer": "CORTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "sección o interrupción",
    "fodder": "carla ordena recibos tras en el barrio",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Carla ordena recibos tras en el barrio forman CORTE.",
    "_def": "sección o interrupción"
  },
  {
    "id": "d218",
    "difficulty": "dificil",
    "clue": "Durante la escena, las peras cambió de sitio; al final apareció animal capturado. (5)",
    "answer": "PRESA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "animal capturado",
    "fodder": "peras",
    "indicators": [
      "cambió de sitio"
    ],
    "explanation": "Anagrama de PERAS = PRESA.",
    "_def": "animal capturado"
  },
  {
    "id": "d219",
    "difficulty": "muy-dificil",
    "clue": "Había motos por toda la habitación; al final, vehículo de dos ruedas, perdiendo la última. (4)",
    "answer": "MOTO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "vehículo de dos ruedas",
    "fodder": "motos",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "MOTOS sin su parte indicada = MOTO.",
    "_def": "vehículo de dos ruedas"
  },
  {
    "id": "d220",
    "difficulty": "dificil",
    "clue": "Durante la escena, la cena quedó mezclado; al final apareció empieza a existir. (4)",
    "answer": "NACE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "empieza a existir",
    "fodder": "cena",
    "indicators": [
      "quedó mezclado"
    ],
    "explanation": "Anagrama de CENA = NACE.",
    "_def": "empieza a existir"
  },
  {
    "id": "d221",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, la isla perdió el orden; al final apareció lisa. (4)",
    "answer": "LISA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "lisa",
    "fodder": "isla",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de ISLA = LISA.",
    "_def": "lisa"
  },
  {
    "id": "d222",
    "difficulty": "experto",
    "clue": "En el relato, bela tomó otro nombre cuando cambió una sola letra; así apareció objeto de cera o tela para navegar. (4)",
    "answer": "VELA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "objeto de cera o tela para navegar",
    "fodder": "bela",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de BELA para obtener VELA.",
    "_def": "objeto de cera o tela para navegar"
  },
  {
    "id": "d223",
    "difficulty": "experto",
    "clue": "Había lagos por toda la habitación; al final, masa de agua interior, sin cola. (4)",
    "answer": "LAGO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "masa de agua interior",
    "fodder": "lagos",
    "indicators": [
      "sin cola"
    ],
    "explanation": "LAGOS sin su parte indicada = LAGO.",
    "_def": "masa de agua interior"
  },
  {
    "id": "d224",
    "difficulty": "muy-dificil",
    "clue": "Había firmes por toda la habitación; al final, que no cede, perdiendo la última. (5)",
    "answer": "FIRME",
    "mechanisms": [
      "deletion"
    ],
    "definition": "que no cede",
    "fodder": "firmes",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "FIRMES sin su parte indicada = FIRME.",
    "_def": "que no cede"
  },
  {
    "id": "d225",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: ana guarda uniformes antes; al comenzar, y al final todo apuntó a líquido esencial. (4)",
    "answer": "AGUA",
    "mechanisms": [
      "initials"
    ],
    "definition": "líquido esencial",
    "fodder": "ana guarda uniformes antes",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Ana guarda uniformes antes forman AGUA.",
    "_def": "líquido esencial"
  },
  {
    "id": "d226",
    "difficulty": "muy-dificil",
    "clue": "Había codos por toda la habitación; al final, articulación del brazo, perdiendo la última. (4)",
    "answer": "CODO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "articulación del brazo",
    "fodder": "codos",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "CODOS sin su parte indicada = CODO.",
    "_def": "articulación del brazo"
  },
  {
    "id": "d227",
    "difficulty": "experto",
    "clue": "La nota quedó así: rosa envía guías inmediatamente sobre la mesa tras el cierre sin ruido otra vez; de primeras, y al final todo apuntó a constancia escrita. (8)",
    "answer": "REGISTRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "constancia escrita",
    "fodder": "rosa envía guías inmediatamente sobre la mesa tras el cierre sin ruido otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Rosa envía guías inmediatamente sobre la mesa tras el cierre sin ruido otra vez forman REGISTRO.",
    "_def": "constancia escrita"
  },
  {
    "id": "d228",
    "difficulty": "dificil",
    "clue": "En el relato, salon tomó otro nombre cuando cambió una sola letra; así apareció parte posterior del pie. (5)",
    "answer": "TALON",
    "mechanisms": [
      "substitution"
    ],
    "definition": "parte posterior del pie",
    "fodder": "salon",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de SALON para obtener TALON.",
    "_def": "parte posterior del pie"
  },
  {
    "id": "d229",
    "difficulty": "dificil",
    "clue": "Había ruedas por toda la habitación; al final, pieza circular que gira, sin despedida al final. (5)",
    "answer": "RUEDA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "pieza circular que gira",
    "fodder": "ruedas",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "RUEDAS sin su parte indicada = RUEDA.",
    "_def": "pieza circular que gira"
  },
  {
    "id": "d230",
    "difficulty": "dificil",
    "clue": "La pista junta nota musical junto con el resto; al final aparece torre luminosa. (4)",
    "answer": "FARO",
    "mechanisms": [
      "charade"
    ],
    "definition": "torre luminosa",
    "fodder": "nota musical",
    "indicators": [
      "junto con"
    ],
    "explanation": "FA+RO=FARO",
    "_def": "torre luminosa"
  },
  {
    "id": "d231",
    "difficulty": "muy-dificil",
    "clue": "La pista junta cien junto con el resto; al final aparece parte más alta. (4)",
    "answer": "CIMA",
    "mechanisms": [
      "charade"
    ],
    "definition": "parte más alta",
    "fodder": "cien",
    "indicators": [
      "junto con"
    ],
    "explanation": "CI+MA=CIMA",
    "_def": "parte más alta"
  },
  {
    "id": "d232",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla anota recibos rápido en el barrio tras el cierre al anochecer; de primeras, y al final todo apuntó a vehículo tirado por animales. (7)",
    "answer": "CARRETA",
    "mechanisms": [
      "initials"
    ],
    "definition": "vehículo tirado por animales",
    "fodder": "carla anota recibos rápido en el barrio tras el cierre al anochecer",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Carla anota recibos rápido en el barrio tras el cierre al anochecer forman CARRETA.",
    "_def": "vehículo tirado por animales"
  },
  {
    "id": "d233",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en nido; entre sus letras apareció refugio de un ave. (4)",
    "answer": "NIDO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "refugio de un ave",
    "fodder": "nido",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "NIDO está escondido dentro de CAMINO AL NIDO.",
    "_def": "refugio de un ave"
  },
  {
    "id": "d234",
    "difficulty": "experto",
    "clue": "La nota quedó así: ana trae recibos inmediatamente otra vez; de primeras, y al final todo apuntó a espacio previo a un edificio. (5)",
    "answer": "ATRIO",
    "mechanisms": [
      "initials"
    ],
    "definition": "espacio previo a un edificio",
    "fodder": "ana trae recibos inmediatamente otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Ana trae recibos inmediatamente otra vez forman ATRIO.",
    "_def": "espacio previo a un edificio"
  },
  {
    "id": "d235",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, el sentido cambió de sitio; al final apareció lugar al que se llega. (7)",
    "answer": "DESTINO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "lugar al que se llega",
    "fodder": "sentido",
    "indicators": [
      "cambió de sitio"
    ],
    "explanation": "Anagrama de SENTIDO = DESTINO.",
    "_def": "lugar al que se llega"
  },
  {
    "id": "d236",
    "difficulty": "dificil",
    "clue": "Había patios por toda la habitación; al final, espacio abierto de una casa, sin despedida al final. (5)",
    "answer": "PATIO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "espacio abierto de una casa",
    "fodder": "patios",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "PATIOS sin su parte indicada = PATIO.",
    "_def": "espacio abierto de una casa"
  },
  {
    "id": "d237",
    "difficulty": "muy-dificil",
    "clue": "Había platos por toda la habitación; al final, recipiente para comer, sin su última. (5)",
    "answer": "PLATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "recipiente para comer",
    "fodder": "platos",
    "indicators": [
      "sin su última"
    ],
    "explanation": "PLATOS sin S = PLATO.",
    "_def": "recipiente para comer"
  },
  {
    "id": "d238",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: federico ordena cartas otra vez; de entrada, y al final todo apuntó a punto de luz o atención. (4)",
    "answer": "FOCO",
    "mechanisms": [
      "initials"
    ],
    "definition": "punto de luz o atención",
    "fodder": "federico ordena cartas otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Federico ordena cartas otra vez forman FOCO.",
    "_def": "punto de luz o atención"
  },
  {
    "id": "d239",
    "difficulty": "experto",
    "clue": "La nota quedó así: hugo usa entradas sin pausa otra vez; al principio, y al final todo apuntó a parte dura del esqueleto. (5)",
    "answer": "HUESO",
    "mechanisms": [
      "initials"
    ],
    "definition": "parte dura del esqueleto",
    "fodder": "hugo usa entradas sin pausa otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Hugo usa entradas sin pausa otra vez forman HUESO.",
    "_def": "parte dura del esqueleto"
  },
  {
    "id": "d240",
    "difficulty": "experto",
    "clue": "En el relato, palo tomó otro nombre cuando cambió una sola letra; así apareció extremo de un eje o prenda. (4)",
    "answer": "POLO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "extremo de un eje o prenda",
    "fodder": "palo",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de PALO para obtener POLO.",
    "_def": "extremo de un eje o prenda"
  },
  {
    "id": "d241",
    "difficulty": "experto",
    "clue": "Había alivios por toda la habitación; al final, sensación de descanso, perdiendo la última. (6)",
    "answer": "ALIVIO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "sensación de descanso",
    "fodder": "alivios",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "ALIVIOS sin su parte indicada = ALIVIO.",
    "_def": "sensación de descanso"
  },
  {
    "id": "d242",
    "difficulty": "experto",
    "clue": "Había cintas por toda la habitación; al final, tira estrecha, perdiendo la última. (5)",
    "answer": "CINTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "tira estrecha",
    "fodder": "cintas",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "CINTAS sin su parte indicada = CINTA.",
    "_def": "tira estrecha"
  },
  {
    "id": "d243",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, la alma se mezcló; al final apareció que no es buena. (4)",
    "answer": "MALA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "que no es buena",
    "fodder": "alma",
    "indicators": [
      "se mezcló"
    ],
    "explanation": "Anagrama de ALMA = MALA.",
    "_def": "que no es buena"
  },
  {
    "id": "d244",
    "difficulty": "experto",
    "clue": "Durante la escena, el nace perdió el orden; al final apareció comida de la noche. (4)",
    "answer": "CENA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "comida de la noche",
    "fodder": "nace",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de NACE = CENA.",
    "_def": "comida de la noche"
  },
  {
    "id": "d245",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: marta anota recibos inmediatamente nunca tarde otra vez; de primeras, y al final todo apuntó a del mar. (6)",
    "answer": "MARINO",
    "mechanisms": [
      "initials"
    ],
    "definition": "del mar",
    "fodder": "marta anota recibos inmediatamente nunca tarde otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Marta anota recibos inmediatamente nunca tarde otra vez forman MARINO.",
    "_def": "del mar"
  },
  {
    "id": "d246",
    "difficulty": "experto",
    "clue": "En el relato, dato tomó otro nombre cuando cambió una sola letra; así apareció cubo para juegos. (4)",
    "answer": "DADO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "cubo para juegos",
    "fodder": "dato",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de DATO para obtener DADO.",
    "_def": "cubo para juegos"
  },
  {
    "id": "d247",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: ana nota informes luego luego de comer otra vez; al principio, y al final todo apuntó a aro. (6)",
    "answer": "ANILLO",
    "mechanisms": [
      "initials"
    ],
    "definition": "aro",
    "fodder": "ana nota informes luego luego de comer otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Ana nota informes luego luego de comer otra vez forman ANILLO.",
    "_def": "aro"
  },
  {
    "id": "d248",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: julia usa entradas zigzagueando; de primeras, y al final todo apuntó a quien imparte justicia. (4)",
    "answer": "JUEZ",
    "mechanisms": [
      "initials"
    ],
    "definition": "quien imparte justicia",
    "fodder": "julia usa entradas zigzagueando",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Julia usa entradas zigzagueando forman JUEZ.",
    "_def": "quien imparte justicia"
  },
  {
    "id": "d249",
    "difficulty": "experto",
    "clue": "En el relato, pleno tomó otro nombre cuando cambió una sola letra; así apareció sin relieve. (5)",
    "answer": "PLANO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "sin relieve",
    "fodder": "pleno",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de PLENO para obtener PLANO.",
    "_def": "sin relieve"
  },
  {
    "id": "d250",
    "difficulty": "dificil",
    "clue": "La nota quedó así: bruno anota notas desde al anochecer; por sus comienzos, y al final todo apuntó a franja o grupo. (5)",
    "answer": "BANDA",
    "mechanisms": [
      "initials"
    ],
    "definition": "franja o grupo",
    "fodder": "bruno anota notas desde al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Bruno anota notas desde al anochecer forman BANDA.",
    "_def": "franja o grupo"
  },
  {
    "id": "d251",
    "difficulty": "experto",
    "clue": "La nota quedó así: tomás envía recibos rápido en el barrio nunca tarde otra vez; de primeras, y al final todo apuntó a superficie de tierra. (7)",
    "answer": "TERRENO",
    "mechanisms": [
      "initials"
    ],
    "definition": "superficie de tierra",
    "fodder": "tomás envía recibos rápido en el barrio nunca tarde otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Tomás envía recibos rápido en el barrio nunca tarde otra vez forman TERRENO.",
    "_def": "superficie de tierra"
  },
  {
    "id": "d252",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: rosa anota informes zigzagueando; de entrada, y al final todo apuntó a parte de la planta bajo tierra. (4)",
    "answer": "RAIZ",
    "mechanisms": [
      "initials"
    ],
    "definition": "parte de la planta bajo tierra",
    "fodder": "rosa anota informes zigzagueando",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Rosa anota informes zigzagueando forman RAIZ.",
    "_def": "parte de la planta bajo tierra"
  },
  {
    "id": "d253",
    "difficulty": "experto",
    "clue": "Nadie reparó en demarcar; entre sus letras apareció mar. (3)",
    "answer": "MAR",
    "mechanisms": [
      "hidden"
    ],
    "definition": "mar",
    "fodder": "mar",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "MAR está escondido dentro de DEMARCAR.",
    "_def": "mar"
  },
  {
    "id": "d254",
    "difficulty": "experto",
    "clue": "En el relato, grano tomó otro nombre cuando cambió una sola letra; así apareció unidad de medida o nivel. (5)",
    "answer": "GRADO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "unidad de medida o nivel",
    "fodder": "grano",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de GRANO para obtener GRADO.",
    "_def": "unidad de medida o nivel"
  },
  {
    "id": "d255",
    "difficulty": "dificil",
    "clue": "La nota quedó así: carla ordena sellos tras al anochecer de camino otra vez; por sus comienzos, y al final todo apuntó a lado del cuerpo o de algo. (7)",
    "answer": "COSTADO",
    "mechanisms": [
      "initials"
    ],
    "definition": "lado del cuerpo o de algo",
    "fodder": "carla ordena sellos tras al anochecer de camino otra vez",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Carla ordena sellos tras al anochecer de camino otra vez forman COSTADO.",
    "_def": "lado del cuerpo o de algo"
  },
  {
    "id": "d256",
    "difficulty": "experto",
    "clue": "La nota quedó así: pablo envía recibos fuera incluso al final luego de comer; al comenzar, y al final todo apuntó a contorno de una figura. (6)",
    "answer": "PERFIL",
    "mechanisms": [
      "initials"
    ],
    "definition": "contorno de una figura",
    "fodder": "pablo envía recibos fuera incluso al final luego de comer",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Pablo envía recibos fuera incluso al final luego de comer forman PERFIL.",
    "_def": "contorno de una figura"
  },
  {
    "id": "d257",
    "difficulty": "experto",
    "clue": "La nota quedó así: pablo envía notas desde incluso al final en el barrio nunca tarde tras el cierre en el barrio; de entrada, y al final todo apuntó a que queda por hacer o arete. (9)",
    "answer": "PENDIENTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "que queda por hacer o arete",
    "fodder": "pablo envía notas desde incluso al final en el barrio nunca tarde tras el cierre en el barrio",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Pablo envía notas desde incluso al final en el barrio nunca tarde tras el cierre en el barrio forman PENDIENTE.",
    "_def": "que queda por hacer o arete"
  },
  {
    "id": "d258",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: ana guarda uniformes junto al anochecer; de entrada, y al final todo apuntó a objeto fino y puntiagudo. (5)",
    "answer": "AGUJA",
    "mechanisms": [
      "initials"
    ],
    "definition": "objeto fino y puntiagudo",
    "fodder": "ana guarda uniformes junto al anochecer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Ana guarda uniformes junto al anochecer forman AGUJA.",
    "_def": "objeto fino y puntiagudo"
  },
  {
    "id": "d259",
    "difficulty": "dificil",
    "clue": "La nota quedó así: carla envía boletos otra vez; al principio, y al final todo apuntó a señuelo para atraer. (4)",
    "answer": "CEBO",
    "mechanisms": [
      "initials"
    ],
    "definition": "señuelo para atraer",
    "fodder": "carla envía boletos otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Carla envía boletos otra vez forman CEBO.",
    "_def": "señuelo para atraer"
  },
  {
    "id": "d260",
    "difficulty": "dificil",
    "clue": "La nota quedó así: eva sigue tickets entre luego de comer al anochecer; al principio, y al final todo apuntó a rastro que queda. (6)",
    "answer": "ESTELA",
    "mechanisms": [
      "initials"
    ],
    "definition": "rastro que queda",
    "fodder": "eva sigue tickets entre luego de comer al anochecer",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Eva sigue tickets entre luego de comer al anochecer forman ESTELA.",
    "_def": "rastro que queda"
  },
  {
    "id": "d261",
    "difficulty": "dificil",
    "clue": "Había bolos por toda la habitación; al final, pieza que se derriba jugando, sin cola. (4)",
    "answer": "BOLO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "pieza que se derriba jugando",
    "fodder": "bolos",
    "indicators": [
      "sin cola"
    ],
    "explanation": "BOLOS sin su parte indicada = BOLO.",
    "_def": "pieza que se derriba jugando"
  },
  {
    "id": "d262",
    "difficulty": "experto",
    "clue": "La nota quedó así: bruno investiga sellos antes gracias al aviso sin ruido al anochecer; al principio, y al final todo apuntó a pieza que permite girar una puerta. (7)",
    "answer": "BISAGRA",
    "mechanisms": [
      "initials"
    ],
    "definition": "pieza que permite girar una puerta",
    "fodder": "bruno investiga sellos antes gracias al aviso sin ruido al anochecer",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Bruno investiga sellos antes gracias al aviso sin ruido al anochecer forman BISAGRA.",
    "_def": "pieza que permite girar una puerta"
  },
  {
    "id": "d263",
    "difficulty": "experto",
    "clue": "La nota quedó así: marta ordena listas desde en el barrio; al comenzar, y al final todo apuntó a forma para reproducir. (5)",
    "answer": "MOLDE",
    "mechanisms": [
      "initials"
    ],
    "definition": "forma para reproducir",
    "fodder": "marta ordena listas desde en el barrio",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Marta ordena listas desde en el barrio forman MOLDE.",
    "_def": "forma para reproducir"
  },
  {
    "id": "d264",
    "difficulty": "experto",
    "clue": "La nota quedó así: ana lee tickets otra vez; al principio, y al final todo apuntó a alto. (4)",
    "answer": "ALTO",
    "mechanisms": [
      "initials"
    ],
    "definition": "alto",
    "fodder": "ana lee tickets otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Ana lee tickets otra vez forman ALTO.",
    "_def": "alto"
  },
  {
    "id": "d265",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: marta usa entradas luego luego de comer en el barrio; al principio, y al final todo apuntó a lugar de atraque. (6)",
    "answer": "MUELLE",
    "mechanisms": [
      "initials"
    ],
    "definition": "lugar de atraque",
    "fodder": "marta usa entradas luego luego de comer en el barrio",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Marta usa entradas luego luego de comer en el barrio forman MUELLE.",
    "_def": "lugar de atraque"
  },
  {
    "id": "d266",
    "difficulty": "dificil",
    "clue": "La nota quedó así: marta anota recibos inmediatamente nunca tarde en el barrio sin ruido otra vez; de entrada, y al final todo apuntó a quien trabaja a bordo. (8)",
    "answer": "MARINERO",
    "mechanisms": [
      "initials"
    ],
    "definition": "quien trabaja a bordo",
    "fodder": "marta anota recibos inmediatamente nunca tarde en el barrio sin ruido otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Marta anota recibos inmediatamente nunca tarde en el barrio sin ruido otra vez forman MARINERO.",
    "_def": "quien trabaja a bordo"
  },
  {
    "id": "d267",
    "difficulty": "experto",
    "clue": "Nadie reparó en combate; entre sus letras apareció golpea desde el banco. (4)",
    "answer": "BATE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "golpea desde el banco",
    "fodder": "bate",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "BATE está escondido dentro de COMBATE.",
    "_def": "golpea desde el banco"
  },
  {
    "id": "d268",
    "difficulty": "experto",
    "clue": "La nota quedó así: carla investiga recibos cerca una vez más incluso al final tras el cierre otra vez; de entrada, y al final todo apuntó a recorrido cerrado de corriente o movimiento. (8)",
    "answer": "CIRCUITO",
    "mechanisms": [
      "initials"
    ],
    "definition": "recorrido cerrado de corriente o movimiento",
    "fodder": "carla investiga recibos cerca una vez más incluso al final tras el cierre otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Carla investiga recibos cerca una vez más incluso al final tras el cierre otra vez forman CIRCUITO.",
    "_def": "recorrido cerrado de corriente o movimiento"
  },
  {
    "id": "d269",
    "difficulty": "dificil",
    "clue": "Durante la escena, el destino se mezcló; al final apareció significado o dirección. (7)",
    "answer": "SENTIDO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "significado o dirección",
    "fodder": "destino",
    "indicators": [
      "se mezcló"
    ],
    "explanation": "Anagrama de DESTINO = SENTIDO.",
    "_def": "significado o dirección"
  },
  {
    "id": "d270",
    "difficulty": "experto",
    "clue": "La nota quedó así: carla revisa uniformes zigzagueando; por sus comienzos, y al final todo apuntó a figura de dos brazos. (4)",
    "answer": "CRUZ",
    "mechanisms": [
      "initials"
    ],
    "definition": "figura de dos brazos",
    "fodder": "carla revisa uniformes zigzagueando",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Carla revisa uniformes zigzagueando forman CRUZ.",
    "_def": "figura de dos brazos"
  },
  {
    "id": "d271",
    "difficulty": "dificil",
    "clue": "Durante la escena, el trono se mezcló; al final apareció máquina que gira una pieza. (5)",
    "answer": "TORNO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "máquina que gira una pieza",
    "fodder": "trono",
    "indicators": [
      "se mezcló"
    ],
    "explanation": "Anagrama de TRONO = TORNO.",
    "_def": "máquina que gira una pieza"
  },
  {
    "id": "d272",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: bruno revisa uniformes junto una vez más luego de comer al anochecer; de primeras, y al final todo apuntó a instrumento para orientarse. (7)",
    "answer": "BRUJULA",
    "mechanisms": [
      "initials"
    ],
    "definition": "instrumento para orientarse",
    "fodder": "bruno revisa uniformes junto una vez más luego de comer al anochecer",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Bruno revisa uniformes junto una vez más luego de comer al anochecer forman BRUJULA.",
    "_def": "instrumento para orientarse"
  },
  {
    "id": "d273",
    "difficulty": "experto",
    "clue": "Había cielos por toda la habitación; al final, espacio sobre nuestras cabezas, sin cola. (5)",
    "answer": "CIELO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "espacio sobre nuestras cabezas",
    "fodder": "cielos",
    "indicators": [
      "sin cola"
    ],
    "explanation": "CIELOS sin su parte indicada = CIELO.",
    "_def": "espacio sobre nuestras cabezas"
  },
  {
    "id": "d274",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla usa acuerdos desde sin ruido otra vez; de primeras, y al final todo apuntó a obra pictórica o conjunto. (6)",
    "answer": "CUADRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "obra pictórica o conjunto",
    "fodder": "carla usa acuerdos desde sin ruido otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Carla usa acuerdos desde sin ruido otra vez forman CUADRO.",
    "_def": "obra pictórica o conjunto"
  },
  {
    "id": "d275",
    "difficulty": "experto",
    "clue": "Había frentes por toda la habitación; al final, parte delantera, sin despedida al final. (6)",
    "answer": "FRENTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "parte delantera",
    "fodder": "frentes",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "FRENTES sin su parte indicada = FRENTE.",
    "_def": "parte delantera"
  },
  {
    "id": "d276",
    "difficulty": "experto",
    "clue": "La nota quedó así: federico investiga cartas hoy al anochecer; por sus comienzos, y al final todo apuntó a pieza o registro pequeño. (5)",
    "answer": "FICHA",
    "mechanisms": [
      "initials"
    ],
    "definition": "pieza o registro pequeño",
    "fodder": "federico investiga cartas hoy al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Federico investiga cartas hoy al anochecer forman FICHA.",
    "_def": "pieza o registro pequeño"
  },
  {
    "id": "d277",
    "difficulty": "dificil",
    "clue": "En el relato, toma tomó otro nombre cuando cambió una sola letra; así apareció asunto del que se habla. (4)",
    "answer": "TEMA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "asunto del que se habla",
    "fodder": "toma",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de TOMA para obtener TEMA.",
    "_def": "asunto del que se habla"
  },
  {
    "id": "d278",
    "difficulty": "dificil",
    "clue": "La nota quedó así: hugo ordena guías antes sin ruido; al principio, y al final todo apuntó a casa o lugar familiar. (5)",
    "answer": "HOGAR",
    "mechanisms": [
      "initials"
    ],
    "definition": "casa o lugar familiar",
    "fodder": "hugo ordena guías antes sin ruido",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Hugo ordena guías antes sin ruido forman HOGAR.",
    "_def": "casa o lugar familiar"
  },
  {
    "id": "d279",
    "difficulty": "experto",
    "clue": "Había nubes por toda la habitación; al final, masa visible de gotas, perdiendo la última. (4)",
    "answer": "NUBE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "masa visible de gotas",
    "fodder": "nubes",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "NUBES sin su parte indicada = NUBE.",
    "_def": "masa visible de gotas"
  },
  {
    "id": "d280",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla anota jarras antes; al principio, y al final todo apuntó a caja. (4)",
    "answer": "CAJA",
    "mechanisms": [
      "initials"
    ],
    "definition": "caja",
    "fodder": "carla anota jarras antes",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Carla anota jarras antes forman CAJA.",
    "_def": "caja"
  },
  {
    "id": "d281",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en vozarrón; entre sus letras apareció sonido de la garganta. (3)",
    "answer": "VOZ",
    "mechanisms": [
      "hidden"
    ],
    "definition": "sonido de la garganta",
    "fodder": "voz",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "VOZ está escondido dentro de VOZARRÓN.",
    "_def": "sonido de la garganta"
  },
  {
    "id": "d282",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: marta envía documentos inmediatamente de camino al anochecer; al comenzar, y al final todo apuntó a cantidad expresada mediante una unidad. (6)",
    "answer": "MEDIDA",
    "mechanisms": [
      "initials"
    ],
    "definition": "cantidad expresada mediante una unidad",
    "fodder": "marta envía documentos inmediatamente de camino al anochecer",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Marta envía documentos inmediatamente de camino al anochecer forman MEDIDA.",
    "_def": "cantidad expresada mediante una unidad"
  },
  {
    "id": "d283",
    "difficulty": "muy-dificil",
    "clue": "Había huellas por toda la habitación; al final, rastro dejado al pasar, perdiendo la última. (6)",
    "answer": "HUELLA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "rastro dejado al pasar",
    "fodder": "huellas",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "HUELLAS sin su parte indicada = HUELLA.",
    "_def": "rastro dejado al pasar"
  },
  {
    "id": "d284",
    "difficulty": "muy-dificil",
    "clue": "Había pasas por toda la habitación; al final, fruta arrugada o verbo, sin despedida al final. (4)",
    "answer": "PASA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "fruta arrugada o verbo",
    "fodder": "pasas",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "PASAS sin su parte indicada = PASA.",
    "_def": "fruta arrugada o verbo"
  },
  {
    "id": "d285",
    "difficulty": "experto",
    "clue": "Nadie reparó en imagen; entre sus letras apareció representación visual. (6)",
    "answer": "IMAGEN",
    "mechanisms": [
      "hidden"
    ],
    "definition": "representación visual",
    "fodder": "imagen",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "IMAGEN aparece oculto en «la imagen quedó nítida».",
    "_def": "representación visual"
  },
  {
    "id": "d286",
    "difficulty": "experto",
    "clue": "Nadie reparó en llamar; entre sus letras apareció lengua de fuego o animal andino. (5)",
    "answer": "LLAMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "lengua de fuego o animal andino",
    "fodder": "llama",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "LLAMA está escondido dentro de LLAMAR.",
    "_def": "lengua de fuego o animal andino"
  },
  {
    "id": "d287",
    "difficulty": "experto",
    "clue": "La nota quedó así: eva sigue quejas últimamente en el barrio mientras tanto al anochecer; al comenzar, y al final todo apuntó a representación simplificada. (7)",
    "answer": "ESQUEMA",
    "mechanisms": [
      "initials"
    ],
    "definition": "representación simplificada",
    "fodder": "eva sigue quejas últimamente en el barrio mientras tanto al anochecer",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Eva sigue quejas últimamente en el barrio mientras tanto al anochecer forman ESQUEMA.",
    "_def": "representación simplificada"
  },
  {
    "id": "d288",
    "difficulty": "dificil",
    "clue": "La nota quedó así: ana trae acuerdos junto otra vez; de entrada, y al final todo apuntó a camino más corto. (5)",
    "answer": "ATAJO",
    "mechanisms": [
      "initials"
    ],
    "definition": "camino más corto",
    "fodder": "ana trae acuerdos junto otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Ana trae acuerdos junto otra vez forman ATAJO.",
    "_def": "camino más corto"
  },
  {
    "id": "d289",
    "difficulty": "experto",
    "clue": "Había brisas por toda la habitación; al final, viento suave, dejando atrás la cola. (5)",
    "answer": "BRISA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "viento suave",
    "fodder": "brisas",
    "indicators": [
      "dejando atrás la cola"
    ],
    "explanation": "BRISAS sin su parte indicada = BRISA.",
    "_def": "viento suave"
  },
  {
    "id": "d290",
    "difficulty": "experto",
    "clue": "En el relato, sierra tomó otro nombre cuando cambió una sola letra; así apareció suelo o planeta. (6)",
    "answer": "TIERRA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "suelo o planeta",
    "fodder": "sierra",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de SIERRA para obtener TIERRA.",
    "_def": "suelo o planeta"
  },
  {
    "id": "d291",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: rosa envía sellos cerca al anochecer tras el cierre en el barrio; de entrada, y al final todo apuntó a acción de salvar. (7)",
    "answer": "RESCATE",
    "mechanisms": [
      "initials"
    ],
    "definition": "acción de salvar",
    "fodder": "rosa envía sellos cerca al anochecer tras el cierre en el barrio",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Rosa envía sellos cerca al anochecer tras el cierre en el barrio forman RESCATE.",
    "_def": "acción de salvar"
  },
  {
    "id": "d292",
    "difficulty": "muy-dificil",
    "clue": "La pista junta casa junto con el resto; al final aparece extremo o jefe intermedio. (4)",
    "answer": "CABO",
    "mechanisms": [
      "charade"
    ],
    "definition": "extremo o jefe intermedio",
    "fodder": "casa",
    "indicators": [
      "junto con"
    ],
    "explanation": "CA+BO=CABO",
    "_def": "extremo o jefe intermedio"
  },
  {
    "id": "d293",
    "difficulty": "experto",
    "clue": "Nadie reparó en puerta; entre sus letras apareció abertura de paso. (6)",
    "answer": "PUERTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "abertura de paso",
    "fodder": "puerta",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "PUERTA está escondido dentro de PUERTA.",
    "_def": "abertura de paso"
  },
  {
    "id": "d294",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en casamiento; entre sus letras apareció casa. (4)",
    "answer": "CASA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "casa",
    "fodder": "casa",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "CASA está escondido dentro de CASAMIENTO.",
    "_def": "casa"
  },
  {
    "id": "d295",
    "difficulty": "experto",
    "clue": "Nadie reparó en clavote; entre sus letras apareció pieza para unir mediante golpe. (5)",
    "answer": "CLAVO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "pieza para unir mediante golpe",
    "fodder": "clavo",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "CLAVO está escondido dentro de CLAVOTE.",
    "_def": "pieza para unir mediante golpe"
  },
  {
    "id": "d296",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla anota recibos para en el barrio tras el cierre al anochecer; al comenzar, y al final todo apuntó a objeto para guardar papeles. (7)",
    "answer": "CARPETA",
    "mechanisms": [
      "initials"
    ],
    "definition": "objeto para guardar papeles",
    "fodder": "carla anota recibos para en el barrio tras el cierre al anochecer",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Carla anota recibos para en el barrio tras el cierre al anochecer forman CARPETA.",
    "_def": "objeto para guardar papeles"
  },
  {
    "id": "d297",
    "difficulty": "muy-dificil",
    "clue": "Durante la escena, la ancla se desordenó; al final apareció conducto de agua. (5)",
    "answer": "CANAL",
    "mechanisms": [
      "anagram"
    ],
    "definition": "conducto de agua",
    "fodder": "ancla",
    "indicators": [
      "se desordenó"
    ],
    "explanation": "Anagrama de ANCLA = CANAL.",
    "_def": "conducto de agua"
  },
  {
    "id": "d298",
    "difficulty": "experto",
    "clue": "La nota quedó así: pablo investiga notas tras al anochecer; por sus comienzos, y al final todo apuntó a aspecto exterior. (5)",
    "answer": "PINTA",
    "mechanisms": [
      "initials"
    ],
    "definition": "aspecto exterior",
    "fodder": "pablo investiga notas tras al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Pablo investiga notas tras al anochecer forman PINTA.",
    "_def": "aspecto exterior"
  },
  {
    "id": "d299",
    "difficulty": "experto",
    "clue": "Había sillas por toda la habitación; al final, asiento con respaldo, dejando atrás la cola. (5)",
    "answer": "SILLA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "asiento con respaldo",
    "fodder": "sillas",
    "indicators": [
      "dejando atrás la cola"
    ],
    "explanation": "SILLAS sin su parte indicada = SILLA.",
    "_def": "asiento con respaldo"
  },
  {
    "id": "d300",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: eva sigue cartas antes luego de comer en el barrio sin ruido al anochecer; por sus comienzos, y al final todo apuntó a sucesión de peldaños. (8)",
    "answer": "ESCALERA",
    "mechanisms": [
      "initials"
    ],
    "definition": "sucesión de peldaños",
    "fodder": "eva sigue cartas antes luego de comer en el barrio sin ruido al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Eva sigue cartas antes luego de comer en el barrio sin ruido al anochecer forman ESCALERA.",
    "_def": "sucesión de peldaños"
  },
  {
    "id": "d301",
    "difficulty": "experto",
    "clue": "La nota quedó así: marta ordena notas tras al anochecer junto a la puerta en el barrio; al principio, y al final todo apuntó a proceso de ensamblar. (7)",
    "answer": "MONTAJE",
    "mechanisms": [
      "initials"
    ],
    "definition": "proceso de ensamblar",
    "fodder": "marta ordena notas tras al anochecer junto a la puerta en el barrio",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Marta ordena notas tras al anochecer junto a la puerta en el barrio forman MONTAJE.",
    "_def": "proceso de ensamblar"
  },
  {
    "id": "d302",
    "difficulty": "experto",
    "clue": "Nadie reparó en barranco; entre sus letras apareció pieza alargada. (5)",
    "answer": "BARRA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "pieza alargada",
    "fodder": "barra",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "BARRA está escondido dentro de BARRANCO.",
    "_def": "pieza alargada"
  },
  {
    "id": "d303",
    "difficulty": "experto",
    "clue": "La nota quedó así: pablo anota notas tras al anochecer luego de comer luego de comer al anochecer; al comenzar, y al final todo apuntó a superficie donde se muestra algo. (8)",
    "answer": "PANTALLA",
    "mechanisms": [
      "initials"
    ],
    "definition": "superficie donde se muestra algo",
    "fodder": "pablo anota notas tras al anochecer luego de comer luego de comer al anochecer",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Pablo anota notas tras al anochecer luego de comer luego de comer al anochecer forman PANTALLA.",
    "_def": "superficie donde se muestra algo"
  },
  {
    "id": "d304",
    "difficulty": "experto",
    "clue": "El taconeo empezó al final de la fiesta; dentro de esas letras apareció una porción o pieza compacta. (4)",
    "answer": "TACO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "porción o pieza compacta",
    "fodder": "taco",
    "indicators": [
      "dentro de"
    ],
    "explanation": "TACO está escondido dentro de TACONEO.",
    "_def": "porción o pieza compacta"
  },
  {
    "id": "d305",
    "difficulty": "dificil",
    "clue": "En el relato, fuego tomó otro nombre cuando cambió una sola letra; así apareció actividad con reglas. (5)",
    "answer": "JUEGO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "actividad con reglas",
    "fodder": "fuego",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de FUEGO para obtener JUEGO.",
    "_def": "actividad con reglas"
  },
  {
    "id": "d306",
    "difficulty": "muy-dificil",
    "clue": "Había marchas por toda la habitación; al final, forma de caminar o funcionamiento, sin cola. (6)",
    "answer": "MARCHA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "forma de caminar o funcionamiento",
    "fodder": "marchas",
    "indicators": [
      "sin cola"
    ],
    "explanation": "MARCHAS sin su parte indicada = MARCHA.",
    "_def": "forma de caminar o funcionamiento"
  },
  {
    "id": "d307",
    "difficulty": "muy-dificil",
    "clue": "Había tratos por toda la habitación; al final, modo de relacionarse, perdiendo la última. (5)",
    "answer": "TRATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "modo de relacionarse",
    "fodder": "tratos",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "TRATOS sin su parte indicada = TRATO.",
    "_def": "modo de relacionarse"
  },
  {
    "id": "d308",
    "difficulty": "experto",
    "clue": "Nadie reparó en rojos; entre sus letras apareció ojo. (3)",
    "answer": "OJO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "ojo",
    "fodder": "ojo",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "OJO está escondido dentro de ROJOS.",
    "_def": "ojo"
  },
  {
    "id": "d309",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: ana mira acuerdos rápido gracias al aviso otra vez; al principio, y al final todo apuntó a amargo. (6)",
    "answer": "AMARGO",
    "mechanisms": [
      "initials"
    ],
    "definition": "amargo",
    "fodder": "ana mira acuerdos rápido gracias al aviso otra vez",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Ana mira acuerdos rápido gracias al aviso otra vez forman AMARGO.",
    "_def": "amargo"
  },
  {
    "id": "d310",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: eva carla olga; al comenzar, y al final todo apuntó a sonido devuelto. (3)",
    "answer": "ECO",
    "mechanisms": [
      "initials"
    ],
    "definition": "sonido devuelto",
    "fodder": "eva carla olga",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Eva Carla Olga forman ECO.",
    "_def": "sonido devuelto"
  },
  {
    "id": "d311",
    "difficulty": "muy-dificil",
    "clue": "Había gomas por toda la habitación; al final, material elástico, sin despedida al final. (4)",
    "answer": "GOMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "material elástico",
    "fodder": "gomas",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "GOMAS sin su parte indicada = GOMA.",
    "_def": "material elástico"
  },
  {
    "id": "d312",
    "difficulty": "dificil",
    "clue": "Durante la escena, la sila perdió el orden; al final apareció porción de tierra rodeada de agua. (4)",
    "answer": "ISLA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "porción de tierra rodeada de agua",
    "fodder": "sila",
    "indicators": [
      "perdió el orden"
    ],
    "explanation": "Anagrama de SILA = ISLA.",
    "_def": "porción de tierra rodeada de agua"
  },
  {
    "id": "d313",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en pie; entre sus letras apareció extremo del cuerpo. (3)",
    "answer": "PIE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "extremo del cuerpo",
    "fodder": "pie",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "PIE está escondido dentro de PIE DE PÁGINA.",
    "_def": "extremo del cuerpo"
  },
  {
    "id": "d314",
    "difficulty": "dificil",
    "clue": "La nota quedó así: carla anota mapas inmediatamente sobre la mesa al anochecer; al comenzar, y al final todo apuntó a prenda de vestir. (6)",
    "answer": "CAMISA",
    "mechanisms": [
      "initials"
    ],
    "definition": "prenda de vestir",
    "fodder": "carla anota mapas inmediatamente sobre la mesa al anochecer",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Carla anota mapas inmediatamente sobre la mesa al anochecer forman CAMISA.",
    "_def": "prenda de vestir"
  },
  {
    "id": "d315",
    "difficulty": "muy-dificil",
    "clue": "Había campañas por toda la habitación; al final, conjunto organizado de acciones, sin su última. (7)",
    "answer": "CAMPAÑA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "conjunto organizado de acciones",
    "fodder": "campañas",
    "indicators": [
      "sin su última"
    ],
    "explanation": "CAMPAÑAS sin su parte indicada = CAMPAÑA.",
    "_def": "conjunto organizado de acciones"
  },
  {
    "id": "d316",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en sectorial; entre sus letras apareció parte de un conjunto. (6)",
    "answer": "SECTOR",
    "mechanisms": [
      "hidden"
    ],
    "definition": "parte de un conjunto",
    "fodder": "sector",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "SECTOR está escondido dentro de SECTORIAL.",
    "_def": "parte de un conjunto"
  },
  {
    "id": "d317",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: laura anota tickets antes; de primeras, y al final todo apuntó a lata. (4)",
    "answer": "LATA",
    "mechanisms": [
      "initials"
    ],
    "definition": "lata",
    "fodder": "laura anota tickets antes",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Laura anota tickets antes forman LATA.",
    "_def": "lata"
  },
  {
    "id": "d318",
    "difficulty": "dificil",
    "clue": "Había faldas por toda la habitación; al final, prenda que cuelga desde la cintura, dejando atrás la cola. (5)",
    "answer": "FALDA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "prenda que cuelga desde la cintura",
    "fodder": "faldas",
    "indicators": [
      "dejando atrás la cola"
    ],
    "explanation": "FALDAS sin su parte indicada = FALDA.",
    "_def": "prenda que cuelga desde la cintura"
  },
  {
    "id": "d319",
    "difficulty": "experto",
    "clue": "Había troncos por toda la habitación; al final, parte principal de un árbol, sin cola. (6)",
    "answer": "TRONCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "parte principal de un árbol",
    "fodder": "troncos",
    "indicators": [
      "sin cola"
    ],
    "explanation": "TRONCOS sin su parte indicada = TRONCO.",
    "_def": "parte principal de un árbol"
  },
  {
    "id": "d320",
    "difficulty": "experto",
    "clue": "La nota quedó así: federico ordena notas desde otra vez; de entrada, y al final todo apuntó a parte más profunda. (5)",
    "answer": "FONDO",
    "mechanisms": [
      "initials"
    ],
    "definition": "parte más profunda",
    "fodder": "federico ordena notas desde otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Federico ordena notas desde otra vez forman FONDO.",
    "_def": "parte más profunda"
  },
  {
    "id": "d321",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: laura investiga mapas inmediatamente tras el cierre en el barrio; por sus comienzos, y al final todo apuntó a punto que no se debe superar. (6)",
    "answer": "LIMITE",
    "mechanisms": [
      "initials"
    ],
    "definition": "punto que no se debe superar",
    "fodder": "laura investiga mapas inmediatamente tras el cierre en el barrio",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Laura investiga mapas inmediatamente tras el cierre en el barrio forman LIMITE.",
    "_def": "punto que no se debe superar"
  },
  {
    "id": "d322",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: laura investiga boletos rápido otra vez; de entrada, y al final todo apuntó a conjunto de páginas. (5)",
    "answer": "LIBRO",
    "mechanisms": [
      "initials"
    ],
    "definition": "conjunto de páginas",
    "fodder": "laura investiga boletos rápido otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Laura investiga boletos rápido otra vez forman LIBRO.",
    "_def": "conjunto de páginas"
  },
  {
    "id": "d323",
    "difficulty": "muy-dificil",
    "clue": "En el relato, sillo tomó otro nombre cuando cambió una sola letra; así apareció marca o pequeña estampa. (5)",
    "answer": "SELLO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "marca o pequeña estampa",
    "fodder": "sillo",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de SILLO para obtener SELLO.",
    "_def": "marca o pequeña estampa"
  },
  {
    "id": "d324",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: carla ordena recibos otra vez nunca tarde al anochecer; al principio, y al final todo apuntó a adorno circular de la cabeza. (6)",
    "answer": "CORONA",
    "mechanisms": [
      "initials"
    ],
    "definition": "adorno circular de la cabeza",
    "fodder": "carla ordena recibos otra vez nunca tarde al anochecer",
    "indicators": [
      "al principio"
    ],
    "explanation": "Las iniciales de Carla ordena recibos otra vez nunca tarde al anochecer forman CORONA.",
    "_def": "adorno circular de la cabeza"
  },
  {
    "id": "d325",
    "difficulty": "experto",
    "clue": "En el relato, juego tomó otro nombre cuando cambió una sola letra; así apareció combustión. (5)",
    "answer": "FUEGO",
    "mechanisms": [
      "substitution"
    ],
    "definition": "combustión",
    "fodder": "juego",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de JUEGO para obtener FUEGO.",
    "_def": "combustión"
  },
  {
    "id": "d326",
    "difficulty": "experto",
    "clue": "La nota quedó así: tomás investiga tickets últimamente luego de comer otra vez; por sus comienzos, y al final todo apuntó a nombre de una obra o rango. (6)",
    "answer": "TITULO",
    "mechanisms": [
      "initials"
    ],
    "definition": "nombre de una obra o rango",
    "fodder": "tomás investiga tickets últimamente luego de comer otra vez",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Tomás investiga tickets últimamente luego de comer otra vez forman TITULO.",
    "_def": "nombre de una obra o rango"
  },
  {
    "id": "d327",
    "difficulty": "dificil",
    "clue": "La nota quedó así: gabriela anota fotos antes sobre la mesa; de entrada, y al final todo apuntó a objeto para mejorar la visión. (5)",
    "answer": "GAFAS",
    "mechanisms": [
      "initials"
    ],
    "definition": "objeto para mejorar la visión",
    "fodder": "gabriela anota fotos antes sobre la mesa",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Gabriela anota fotos antes sobre la mesa forman GAFAS.",
    "_def": "objeto para mejorar la visión"
  },
  {
    "id": "d328",
    "difficulty": "dificil",
    "clue": "Había ratones por toda la habitación; al final, pequeño roedor, sin cola. (5)",
    "answer": "RATON",
    "mechanisms": [
      "deletion"
    ],
    "definition": "pequeño roedor",
    "fodder": "ratones",
    "indicators": [
      "sin cola"
    ],
    "explanation": "RATONES sin su parte indicada = RATON.",
    "_def": "pequeño roedor"
  },
  {
    "id": "d329",
    "difficulty": "dificil",
    "clue": "La nota quedó así: carla usa entradas rápido de camino al anochecer; de entrada, y al final todo apuntó a conjunto de fibras trenzadas. (6)",
    "answer": "CUERDA",
    "mechanisms": [
      "initials"
    ],
    "definition": "conjunto de fibras trenzadas",
    "fodder": "carla usa entradas rápido de camino al anochecer",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Carla usa entradas rápido de camino al anochecer forman CUERDA.",
    "_def": "conjunto de fibras trenzadas"
  },
  {
    "id": "d330",
    "difficulty": "experto",
    "clue": "Había saltos por toda la habitación; al final, brinco, sin despedida al final. (5)",
    "answer": "SALTO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "brinco",
    "fodder": "saltos",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "SALTOS sin su parte indicada = SALTO.",
    "_def": "brinco"
  },
  {
    "id": "d331",
    "difficulty": "dificil",
    "clue": "La nota quedó así: bruno revisa órdenes tras en el barrio; de entrada, y al final todo apuntó a yema o comienzo. (5)",
    "answer": "BROTE",
    "mechanisms": [
      "initials"
    ],
    "definition": "yema o comienzo",
    "fodder": "bruno revisa órdenes tras en el barrio",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Bruno revisa órdenes tras en el barrio forman BROTE.",
    "_def": "yema o comienzo"
  },
  {
    "id": "d332",
    "difficulty": "muy-dificil",
    "clue": "Había paseos por toda la habitación; al final, caminata, sin despedida al final. (5)",
    "answer": "PASEO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "caminata",
    "fodder": "paseos",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "PASEOS sin su parte indicada = PASEO.",
    "_def": "caminata"
  },
  {
    "id": "d333",
    "difficulty": "dificil",
    "clue": "La pista junta negación junto con el resto; al final aparece apunte breve o sonido musical. (4)",
    "answer": "NOTA",
    "mechanisms": [
      "charade"
    ],
    "definition": "apunte breve o sonido musical",
    "fodder": "negación",
    "indicators": [
      "junto con"
    ],
    "explanation": "NO+TA=NOTA",
    "_def": "apunte breve o sonido musical"
  },
  {
    "id": "d334",
    "difficulty": "muy-dificil",
    "clue": "La nota quedó así: marta anota recibos tras incluso al final luego de comer luego de comer otra vez; de entrada, y al final todo apuntó a herramienta para golpear. (8)",
    "answer": "MARTILLO",
    "mechanisms": [
      "initials"
    ],
    "definition": "herramienta para golpear",
    "fodder": "marta anota recibos tras incluso al final luego de comer luego de comer otra vez",
    "indicators": [
      "de entrada"
    ],
    "explanation": "Las iniciales de Marta anota recibos tras incluso al final luego de comer luego de comer otra vez forman MARTILLO.",
    "_def": "herramienta para golpear"
  },
  {
    "id": "d335",
    "difficulty": "muy-dificil",
    "clue": "En el relato, tierra tomó otro nombre cuando cambió una sola letra; así apareció herramienta de dientes o cordillera. (6)",
    "answer": "SIERRA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "herramienta de dientes o cordillera",
    "fodder": "tierra",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de TIERRA para obtener SIERRA.",
    "_def": "herramienta de dientes o cordillera"
  },
  {
    "id": "d336",
    "difficulty": "dificil",
    "clue": "La nota quedó así: gabriela revisa informes tras otra vez; por sus comienzos, y al final todo apuntó a voz lanzada con fuerza. (5)",
    "answer": "GRITO",
    "mechanisms": [
      "initials"
    ],
    "definition": "voz lanzada con fuerza",
    "fodder": "gabriela revisa informes tras otra vez",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Gabriela revisa informes tras otra vez forman GRITO.",
    "_def": "voz lanzada con fuerza"
  },
  {
    "id": "d337",
    "difficulty": "experto",
    "clue": "La nota quedó así: laura investiga notas entre al anochecer; por sus comienzos, y al final todo apuntó a trazado que une puntos. (5)",
    "answer": "LINEA",
    "mechanisms": [
      "initials"
    ],
    "definition": "trazado que une puntos",
    "fodder": "laura investiga notas entre al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Laura investiga notas entre al anochecer forman LINEA.",
    "_def": "trazado que une puntos"
  },
  {
    "id": "d338",
    "difficulty": "dificil",
    "clue": "Había restos por toda la habitación; al final, lo que queda, sin cola. (5)",
    "answer": "RESTO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "lo que queda",
    "fodder": "restos",
    "indicators": [
      "sin cola"
    ],
    "explanation": "RESTOS sin su parte indicada = RESTO.",
    "_def": "lo que queda"
  },
  {
    "id": "d339",
    "difficulty": "muy-dificil",
    "clue": "Al regresar, la sala quedó dado la vuelta; así apareció lo que permite volar. (4)",
    "answer": "ALAS",
    "mechanisms": [
      "reversal"
    ],
    "definition": "lo que permite volar",
    "fodder": "sala",
    "indicators": [
      "dado la vuelta"
    ],
    "explanation": "SALA al revés = ALAS.",
    "_def": "lo que permite volar"
  },
  {
    "id": "d340",
    "difficulty": "experto",
    "clue": "Nadie reparó en pareds; entre sus letras apareció malla para atrapar. (3)",
    "answer": "RED",
    "mechanisms": [
      "hidden"
    ],
    "definition": "malla para atrapar",
    "fodder": "red",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "RED está escondido dentro de PAREDS.",
    "_def": "malla para atrapar"
  },
  {
    "id": "d341",
    "difficulty": "muy-dificil",
    "clue": "Había pareds por toda la habitación; al final, construcción vertical, sin despedida al final. (5)",
    "answer": "PARED",
    "mechanisms": [
      "deletion"
    ],
    "definition": "construcción vertical",
    "fodder": "pareds",
    "indicators": [
      "sin despedida al final"
    ],
    "explanation": "PAREDS sin su parte indicada = PARED.",
    "_def": "construcción vertical"
  },
  {
    "id": "d342",
    "difficulty": "dificil",
    "clue": "Durante la escena, las ocas se desordenó; al final apareció bolsa de tela. (4)",
    "answer": "SACO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "bolsa de tela",
    "fodder": "ocas",
    "indicators": [
      "se desordenó"
    ],
    "explanation": "Anagrama de OCAS = SACO.",
    "_def": "bolsa de tela"
  },
  {
    "id": "d343",
    "difficulty": "dificil",
    "clue": "Había palmas por toda la habitación; al final, parte de la mano, sin cola. (5)",
    "answer": "PALMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "parte de la mano",
    "fodder": "palmas",
    "indicators": [
      "sin cola"
    ],
    "explanation": "PALMAS sin su parte indicada = PALMA.",
    "_def": "parte de la mano"
  },
  {
    "id": "d344",
    "difficulty": "experto",
    "clue": "Había teclas por toda la habitación; al final, botón que se pulsa, perdiendo la última. (5)",
    "answer": "TECLA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "botón que se pulsa",
    "fodder": "teclas",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "TECLAS sin su parte indicada = TECLA.",
    "_def": "botón que se pulsa"
  },
  {
    "id": "d345",
    "difficulty": "muy-dificil",
    "clue": "La pista junta cuesta junto con el resto; al final aparece pendiente. (6)",
    "answer": "CUESTA",
    "mechanisms": [
      "charade"
    ],
    "definition": "pendiente",
    "fodder": "cuesta",
    "indicators": [
      "junto con"
    ],
    "explanation": "CUE+STA=CUESTA",
    "_def": "pendiente"
  },
  {
    "id": "d346",
    "difficulty": "dificil",
    "clue": "La nota quedó así: carla anota mapas para otra vez; al comenzar, y al final todo apuntó a terreno abierto. (5)",
    "answer": "CAMPO",
    "mechanisms": [
      "initials"
    ],
    "definition": "terreno abierto",
    "fodder": "carla anota mapas para otra vez",
    "indicators": [
      "al comenzar"
    ],
    "explanation": "Las iniciales de Carla anota mapas para otra vez forman CAMPO.",
    "_def": "terreno abierto"
  },
  {
    "id": "d347",
    "difficulty": "dificil",
    "clue": "Había datos por toda la habitación; al final, información concreta, sin su última. (4)",
    "answer": "DATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "información concreta",
    "fodder": "datos",
    "indicators": [
      "sin su última"
    ],
    "explanation": "DATOS sin su parte indicada = DATO.",
    "_def": "información concreta"
  },
  {
    "id": "d348",
    "difficulty": "experto",
    "clue": "La nota quedó así: laura ordena cartas antes luego de comer; por sus comienzos, y al final todo apuntó a del lugar. (5)",
    "answer": "LOCAL",
    "mechanisms": [
      "initials"
    ],
    "definition": "del lugar",
    "fodder": "laura ordena cartas antes luego de comer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Laura ordena cartas antes luego de comer forman LOCAL.",
    "_def": "del lugar"
  },
  {
    "id": "d349",
    "difficulty": "experto",
    "clue": "La nota quedó así: gabriela anota listas luego incluso al final nunca tarde al anochecer; por sus comienzos, y al final todo apuntó a ave doméstica. (7)",
    "answer": "GALLINA",
    "mechanisms": [
      "initials"
    ],
    "definition": "ave doméstica",
    "fodder": "gabriela anota listas luego incluso al final nunca tarde al anochecer",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Gabriela anota listas luego incluso al final nunca tarde al anochecer forman GALLINA.",
    "_def": "ave doméstica"
  },
  {
    "id": "d350",
    "difficulty": "muy-dificil",
    "clue": "Nadie reparó en sale; entre sus letras apareció sal. (3)",
    "answer": "SAL",
    "mechanisms": [
      "hidden"
    ],
    "definition": "sal",
    "fodder": "sal",
    "indicators": [
      "entre sus letras"
    ],
    "explanation": "SAL está escondido dentro de SALE.",
    "_def": "sal"
  },
  {
    "id": "d351",
    "difficulty": "dificil",
    "clue": "La nota quedó así: pablo anota listas cerca otra vez; de primeras, y al final todo apuntó a balcón de un teatro. (5)",
    "answer": "PALCO",
    "mechanisms": [
      "initials"
    ],
    "definition": "balcón de un teatro",
    "fodder": "pablo anota listas cerca otra vez",
    "indicators": [
      "de primeras"
    ],
    "explanation": "Las iniciales de Pablo anota listas cerca otra vez forman PALCO.",
    "_def": "balcón de un teatro"
  },
  {
    "id": "d352",
    "difficulty": "experto",
    "clue": "Había gradas por toda la habitación; al final, peldaño amplio, perdiendo la última. (5)",
    "answer": "GRADA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "peldaño amplio",
    "fodder": "gradas",
    "indicators": [
      "perdiendo la última"
    ],
    "explanation": "GRADAS sin su parte indicada = GRADA.",
    "_def": "peldaño amplio"
  },
  {
    "id": "d353",
    "difficulty": "experto",
    "clue": "En el relato, cuba tomó otro nombre cuando cambió una sola letra; así apareció sacerdote o remedio. (4)",
    "answer": "CURA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "sacerdote o remedio",
    "fodder": "cuba",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de CUBA para obtener CURA.",
    "_def": "sacerdote o remedio"
  },
  {
    "id": "d354",
    "difficulty": "experto",
    "clue": "La nota quedó así: ana sigue informes entre nunca tarde tras el cierre otra vez; por sus comienzos, y al final todo apuntó a lugar para sentarse. (7)",
    "answer": "ASIENTO",
    "mechanisms": [
      "initials"
    ],
    "definition": "lugar para sentarse",
    "fodder": "ana sigue informes entre nunca tarde tras el cierre otra vez",
    "indicators": [
      "por sus comienzos"
    ],
    "explanation": "Las iniciales de Ana sigue informes entre nunca tarde tras el cierre otra vez forman ASIENTO.",
    "_def": "lugar para sentarse"
  },
  {
    "id": "d355",
    "difficulty": "dificil",
    "clue": "En el relato, grada tomó otro nombre cuando cambió una sola letra; así apareció pieza para sujetar. (5)",
    "answer": "GRAPA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "pieza para sujetar",
    "fodder": "grada",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de GRADA para obtener GRAPA.",
    "_def": "pieza para sujetar"
  },
  {
    "id": "d356",
    "difficulty": "dificil",
    "clue": "En el relato, pista tomó otro nombre cuando cambió una sola letra; así apareció facultad de ver. (5)",
    "answer": "VISTA",
    "mechanisms": [
      "substitution"
    ],
    "definition": "facultad de ver",
    "fodder": "pista",
    "indicators": [
      "tomó otro nombre"
    ],
    "explanation": "Se cambia una sola letra de PISTA para obtener VISTA.",
    "_def": "facultad de ver"
  }
];
