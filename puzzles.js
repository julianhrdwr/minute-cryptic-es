// Banco interno de indicadores. No se muestra durante el juego.
const MECHANISM_INDICATORS = {
  anagram:{medio:["revuelto","mezclado","desordenado"],medioDificil:["trastocado","alborotado","enredado"],dificil:["perdido","fuera de lugar","sin orden"]},
  hidden:{medio:["oculto","escondido","dentro de"],medioDificil:["guardado en","metido en"],dificil:["perdido entre","camuflado entre"]},
  deletion:{medio:["sin","quitando","pierde"],medioDificil:["dejando fuera","al perder"],dificil:["tras perder","desprovisto de"]},
  reversal:{medio:["al revés","de vuelta","invertido"],medioDificil:["volviendo","hacia atrás"],dificil:["reflejado","en sentido contrario"]},
  charade:{medio:["con","más","junto a"],medioDificil:["pegado a","después de"],dificil:["encadenado con","a continuación de"]},
  homophone:{medio:["al sonar","de oído"],medioDificil:["por cómo suena"],dificil:["como se escucha"]},
  initials:{medio:["al principio","iniciales"],medioDificil:["primeras letras"],dificil:["por sus comienzos"]},
  finals:{medio:["al final","últimas"],medioDificil:["por sus finales"],dificil:["en sus terminaciones"]},
  container:{medio:["dentro de","rodeando"],medioDificil:["envolviendo","abarcando"],dificil:["englobando","cerrando sobre"]}
};
const ANAGRAM_INDICATORS = MECHANISM_INDICATORS.anagram;

const PUZZLES = [
  {
    "id": "d001",
    "difficulty": "medio",
    "clue": "Sensación física; también otro significado. (5)",
    "answer": "DOLOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sensación física",
    "fodder": "Sensación física",
    "indicators": [],
    "explanation": "La primera parte define DOLOR: «Sensación física». La segunda también: «otro significado»."
  },
  {
    "id": "d002",
    "difficulty": "medio",
    "clue": "Extremidades para volar, aunque también puede ser otro significado. (4)",
    "answer": "ALAS",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremidades para volar",
    "fodder": "Extremidades para volar",
    "indicators": [],
    "explanation": "La primera parte define ALAS: «Extremidades para volar». La segunda también: «otro significado»."
  },
  {
    "id": "d003",
    "difficulty": "medio",
    "clue": "Adorno real en un contexto; enfermedad causada por un virus en otro. (6)",
    "answer": "CORONA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Adorno real",
    "fodder": "Adorno real",
    "indicators": [],
    "explanation": "La primera parte define CORONA: «Adorno real». La segunda también: «enfermedad causada por un virus»."
  },
  {
    "id": "d004",
    "difficulty": "medio",
    "clue": "Desplazamiento; también funcionamiento. (6)",
    "answer": "MARCHA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Desplazamiento",
    "fodder": "Desplazamiento",
    "indicators": [],
    "explanation": "La primera parte define MARCHA: «Desplazamiento». La segunda también: «funcionamiento»."
  },
  {
    "id": "d005",
    "difficulty": "medio",
    "clue": "Encima de algo. En otro sentido, otro significado. (5)",
    "answer": "SOBRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Encima de algo",
    "fodder": "Encima de algo",
    "indicators": [],
    "explanation": "La primera parte define SOBRE: «Encima de algo». La segunda también: «otro significado»."
  },
  {
    "id": "d006",
    "difficulty": "medio",
    "clue": "Grada de espectadores, aunque también puede ser otro significado. (7)",
    "answer": "TRIBUNA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Grada de espectadores",
    "fodder": "Grada de espectadores",
    "indicators": [],
    "explanation": "La primera parte define TRIBUNA: «Grada de espectadores». La segunda también: «otro significado»."
  },
  {
    "id": "d007",
    "difficulty": "medio",
    "clue": "La roma perdió su orden y apareció conjunto de flores. (4)",
    "answer": "RAMO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Conjunto de flores",
    "fodder": "ROMA",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Conjunto de flores» define RAMO; las letras de ROMA se reordenan para formar RAMO."
  },
  {
    "id": "d008",
    "difficulty": "medio",
    "clue": "Mueble; también puede tener otro sentido. (4)",
    "answer": "MESA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mueble",
    "fodder": "Mueble",
    "indicators": [],
    "explanation": "La pista usa una doble definición para MESA."
  },
  {
    "id": "d009",
    "difficulty": "medio",
    "clue": "La presa perdió su orden y apareció frutas. (5)",
    "answer": "PERAS",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Frutas",
    "fodder": "PRESA",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Frutas» define PERAS; las letras de PRESA se reordenan para formar PERAS."
  },
  {
    "id": "d010",
    "difficulty": "medio",
    "clue": "Lanzamiento, aunque también puede ser edición impresa. (6)",
    "answer": "TIRADA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lanzamiento",
    "fodder": "Lanzamiento",
    "indicators": [],
    "explanation": "La primera parte define TIRADA: «Lanzamiento». La segunda también: «edición impresa»."
  },
  {
    "id": "d011",
    "difficulty": "medio",
    "clue": "Habitación, aunque también puede ser otro significado. (4)",
    "answer": "SALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Habitación",
    "fodder": "Habitación",
    "indicators": [],
    "explanation": "La primera parte define SALA: «Habitación». La segunda también: «otro significado»."
  },
  {
    "id": "d012",
    "difficulty": "medio",
    "clue": "Objeto que atrae metales, aunque también puede ser otro significado. (4)",
    "answer": "IMAN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que atrae metales",
    "fodder": "Objeto que atrae metales",
    "indicators": [],
    "explanation": "La primera parte define IMAN: «Objeto que atrae metales». La segunda también: «otro significado»."
  },
  {
    "id": "d013",
    "difficulty": "medio",
    "clue": "Mensaje escrito. En otro sentido, menú. (5)",
    "answer": "CARTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mensaje escrito",
    "fodder": "Mensaje escrito",
    "indicators": [],
    "explanation": "La primera parte define CARTA: «Mensaje escrito». La segunda también: «menú»."
  },
  {
    "id": "d014",
    "difficulty": "medio",
    "clue": "Trayectoria; también otro significado. (5)",
    "answer": "CURSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Trayectoria",
    "fodder": "Trayectoria",
    "indicators": [],
    "explanation": "La primera parte define CURSO: «Trayectoria». La segunda también: «otro significado»."
  },
  {
    "id": "d015",
    "difficulty": "medio",
    "clue": "Golpe fuerte. En otro sentido, otro significado. (5)",
    "answer": "AZOTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Golpe fuerte",
    "fodder": "Golpe fuerte",
    "indicators": [],
    "explanation": "La primera parte define AZOTE: «Golpe fuerte». La segunda también: «otro significado»."
  },
  {
    "id": "d016",
    "difficulty": "medio",
    "clue": "Serie graduada, aunque también puede ser otro significado. (6)",
    "answer": "ESCALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Serie graduada",
    "fodder": "Serie graduada",
    "indicators": [],
    "explanation": "La primera parte define ESCALA: «Serie graduada». La segunda también: «otro significado»."
  },
  {
    "id": "d017",
    "difficulty": "medio",
    "clue": "El retrato antiguo quedó en la pared. (5)",
    "answer": "TRATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Acuerdo",
    "fodder": "el retrato antiguo quedó en la pared.",
    "indicators": [
      "escondido"
    ],
    "explanation": "«Acuerdo» define TRATO; la respuesta aparece escondida dentro de la frase."
  },
  {
    "id": "d018",
    "difficulty": "medio",
    "clue": "Acción publicitaria; también puede tener otro sentido. (7)",
    "answer": "CAMPAÑA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción publicitaria",
    "fodder": "CAM + PAÑA",
    "indicators": [],
    "explanation": "«Acción publicitaria» define CAMPAÑA. CAM seguido de PAÑA forma CAMPAÑA."
  },
  {
    "id": "d019",
    "difficulty": "medio",
    "clue": "Producto de combustión, aunque también puede ser otro significado. (4)",
    "answer": "HUMO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Producto de combustión",
    "fodder": "Producto de combustión",
    "indicators": [],
    "explanation": "La primera parte define HUMO: «Producto de combustión». La segunda también: «otro significado»."
  },
  {
    "id": "d020",
    "difficulty": "medio",
    "clue": "Fuente de luz. En otro sentido, otro significado. (4)",
    "answer": "FOCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuente de luz",
    "fodder": "Fuente de luz",
    "indicators": [],
    "explanation": "La primera parte define FOCO: «Fuente de luz». La segunda también: «otro significado»."
  },
  {
    "id": "d021",
    "difficulty": "medio",
    "clue": "Facultad de pensar, aunque también puede ser otro significado. (5)",
    "answer": "MENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Facultad de pensar",
    "fodder": "Facultad de pensar",
    "indicators": [],
    "explanation": "La primera parte define MENTE: «Facultad de pensar». La segunda también: «otro significado»."
  },
  {
    "id": "d022",
    "difficulty": "medio",
    "clue": "Voz fuerte, aunque también puede ser otro significado. (5)",
    "answer": "GRITO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Voz fuerte",
    "fodder": "Voz fuerte",
    "indicators": [],
    "explanation": "La primera parte define GRITO: «Voz fuerte». La segunda también: «otro significado»."
  },
  {
    "id": "d023",
    "difficulty": "medio",
    "clue": "Plumaje. En otro sentido, otro significado. (5)",
    "answer": "PLUMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Plumaje",
    "fodder": "Plumaje",
    "indicators": [],
    "explanation": "La primera parte define PLUMA: «Plumaje». La segunda también: «otro significado»."
  },
  {
    "id": "d024",
    "difficulty": "medio",
    "clue": "Actividad lúdica en un contexto; otro significado en otro. (5)",
    "answer": "JUEGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Actividad lúdica",
    "fodder": "Actividad lúdica",
    "indicators": [],
    "explanation": "La primera parte define JUEGO: «Actividad lúdica». La segunda también: «otro significado»."
  },
  {
    "id": "d025",
    "difficulty": "medio",
    "clue": "La rango perdió su orden y apareció semilla pequeña. (5)",
    "answer": "GRANO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Semilla pequeña",
    "fodder": "RANGO",
    "indicators": [
      "alterado"
    ],
    "explanation": "«Semilla pequeña» define GRANO; las letras de RANGO se reordenan para formar GRANO."
  },
  {
    "id": "d026",
    "difficulty": "medio",
    "clue": "Imagen reflejada. En otro sentido, otro significado. (7)",
    "answer": "REFLEJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Imagen reflejada",
    "fodder": "Imagen reflejada",
    "indicators": [],
    "explanation": "La primera parte define REFLEJO: «Imagen reflejada». La segunda también: «otro significado»."
  },
  {
    "id": "d027",
    "difficulty": "medio",
    "clue": "Caja para correo en un contexto; otro significado en otro. (5)",
    "answer": "BUZON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Caja para correo",
    "fodder": "Caja para correo",
    "indicators": [],
    "explanation": "La primera parte define BUZON: «Caja para correo». La segunda también: «otro significado»."
  },
  {
    "id": "d028",
    "difficulty": "medio",
    "clue": "Cubierta superior. En otro sentido, otro significado. (5)",
    "answer": "TECHO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cubierta superior",
    "fodder": "Cubierta superior",
    "indicators": [],
    "explanation": "La primera parte define TECHO: «Cubierta superior». La segunda también: «otro significado»."
  },
  {
    "id": "d029",
    "difficulty": "medio",
    "clue": "Herramienta en un contexto; otro significado en otro. (4)",
    "answer": "PALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Herramienta",
    "fodder": "Herramienta",
    "indicators": [],
    "explanation": "La primera parte define PALA: «Herramienta». La segunda también: «otro significado»."
  },
  {
    "id": "d030",
    "difficulty": "medio",
    "clue": "Viento suave, aunque también puede ser otro significado. (5)",
    "answer": "BRISA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Viento suave",
    "fodder": "Viento suave",
    "indicators": [],
    "explanation": "La primera parte define BRISA: «Viento suave». La segunda también: «otro significado»."
  },
  {
    "id": "d031",
    "difficulty": "medio-difícil",
    "clue": "Iluminación. En otro sentido, otro significado. (3)",
    "answer": "LUZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Iluminación",
    "fodder": "Iluminación",
    "indicators": [],
    "explanation": "La primera parte define LUZ: «Iluminación». La segunda también: «otro significado»."
  },
  {
    "id": "d032",
    "difficulty": "medio-difícil",
    "clue": "Objeto que arde; también pieza de un barco. (4)",
    "answer": "VELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que arde",
    "fodder": "Objeto que arde",
    "indicators": [],
    "explanation": "La primera parte define VELA: «Objeto que arde». La segunda también: «pieza de un barco»."
  },
  {
    "id": "d033",
    "difficulty": "medio-difícil",
    "clue": "Objeto que se lee; también otro significado. (5)",
    "answer": "LIBRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que se lee",
    "fodder": "Objeto que se lee",
    "indicators": [],
    "explanation": "La primera parte define LIBRO: «Objeto que se lee». La segunda también: «otro significado»."
  },
  {
    "id": "d034",
    "difficulty": "medio-difícil",
    "clue": "Objeto circular, aunque también puede ser otro significado. (5)",
    "answer": "RUEDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto circular",
    "fodder": "Objeto circular",
    "indicators": [],
    "explanation": "La primera parte define RUEDA: «Objeto circular». La segunda también: «otro significado»."
  },
  {
    "id": "d035",
    "difficulty": "medio-difícil",
    "clue": "Lo que queda, aunque también puede ser otro significado. (5)",
    "answer": "RESTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lo que queda",
    "fodder": "Lo que queda",
    "indicators": [],
    "explanation": "La primera parte define RESTO: «Lo que queda». La segunda también: «otro significado»."
  },
  {
    "id": "d036",
    "difficulty": "medio-difícil",
    "clue": "Ciudad principal en un contexto; dinero invertido en otro. (7)",
    "answer": "CAPITAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ciudad principal",
    "fodder": "Ciudad principal",
    "indicators": [],
    "explanation": "La primera parte define CAPITAL: «Ciudad principal». La segunda también: «dinero invertido»."
  },
  {
    "id": "d037",
    "difficulty": "medio-difícil",
    "clue": "Superficie para escribir; también puede tener otro sentido. (7)",
    "answer": "PIZARRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie para escribir",
    "fodder": "Superficie para escribir",
    "indicators": [],
    "explanation": "La pista usa una doble definición para PIZARRA."
  },
  {
    "id": "d038",
    "difficulty": "medio-difícil",
    "clue": "Lugar comercial. En otro sentido, otro significado. (5)",
    "answer": "LOCAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar comercial",
    "fodder": "Lugar comercial",
    "indicators": [],
    "explanation": "La primera parte define LOCAL: «Lugar comercial». La segunda también: «otro significado»."
  },
  {
    "id": "d039",
    "difficulty": "medio-difícil",
    "clue": "Herramienta; también puede tener otro sentido. (8)",
    "answer": "MARTILLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Herramienta",
    "fodder": "MAR + TILLO",
    "indicators": [],
    "explanation": "«Herramienta» define MARTILLO. MAR seguido de TILLO forma MARTILLO."
  },
  {
    "id": "d040",
    "difficulty": "medio-difícil",
    "clue": "Pequeña cantidad líquida. En otro sentido, otro significado. (4)",
    "answer": "GOTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pequeña cantidad líquida",
    "fodder": "Pequeña cantidad líquida",
    "indicators": [],
    "explanation": "La primera parte define GOTA: «Pequeña cantidad líquida». La segunda también: «otro significado»."
  },
  {
    "id": "d041",
    "difficulty": "medio-difícil",
    "clue": "Árbol. En otro sentido, otro significado. (5)",
    "answer": "PALMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Árbol",
    "fodder": "Árbol",
    "indicators": [],
    "explanation": "La primera parte define PALMA: «Árbol». La segunda también: «otro significado»."
  },
  {
    "id": "d042",
    "difficulty": "medio-difícil",
    "clue": "Superficie; también otro significado. (5)",
    "answer": "SUELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie",
    "fodder": "Superficie",
    "indicators": [],
    "explanation": "La primera parte define SUELO: «Superficie». La segunda también: «otro significado»."
  },
  {
    "id": "d043",
    "difficulty": "medio-difícil",
    "clue": "Muro; también otro significado. (5)",
    "answer": "PARED",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Muro",
    "fodder": "Muro",
    "indicators": [],
    "explanation": "La primera parte define PARED: «Muro». La segunda también: «otro significado»."
  },
  {
    "id": "d044",
    "difficulty": "medio-difícil",
    "clue": "Vía urbana, aunque también puede ser otro significado. (5)",
    "answer": "CALLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vía urbana",
    "fodder": "Vía urbana",
    "indicators": [],
    "explanation": "La primera parte define CALLE: «Vía urbana». La segunda también: «otro significado»."
  },
  {
    "id": "d045",
    "difficulty": "medio-difícil",
    "clue": "Acuerdo legal en un contexto; otro significado en otro. (8)",
    "answer": "CONTRATO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acuerdo legal",
    "fodder": "Acuerdo legal",
    "indicators": [],
    "explanation": "La primera parte define CONTRATO: «Acuerdo legal». La segunda también: «otro significado»."
  },
  {
    "id": "d046",
    "difficulty": "medio-difícil",
    "clue": "La lobo perdió su orden y apareció comida. (4)",
    "answer": "BOLO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Comida",
    "fodder": "LOBO",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Comida» define BOLO; las letras de LOBO se reordenan para formar BOLO."
  },
  {
    "id": "d047",
    "difficulty": "medio-difícil",
    "clue": "Objeto puntiagudo; también otro significado. (5)",
    "answer": "AGUJA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto puntiagudo",
    "fodder": "Objeto puntiagudo",
    "indicators": [],
    "explanation": "La primera parte define AGUJA: «Objeto puntiagudo». La segunda también: «otro significado»."
  },
  {
    "id": "d048",
    "difficulty": "medio-difícil",
    "clue": "Dispositivo que separa; también otro significado. (6)",
    "answer": "FILTRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Dispositivo que separa",
    "fodder": "Dispositivo que separa",
    "indicators": [],
    "explanation": "La primera parte define FILTRO: «Dispositivo que separa». La segunda también: «otro significado»."
  },
  {
    "id": "d049",
    "difficulty": "medio-difícil",
    "clue": "Parte de un conjunto; también otro significado. (6)",
    "answer": "SECTOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de un conjunto",
    "fodder": "Parte de un conjunto",
    "indicators": [],
    "explanation": "La primera parte define SECTOR: «Parte de un conjunto». La segunda también: «otro significado»."
  },
  {
    "id": "d050",
    "difficulty": "medio-difícil",
    "clue": "Sin relieve en un contexto; otro significado en otro. (5)",
    "answer": "PLANO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sin relieve",
    "fodder": "Sin relieve",
    "indicators": [],
    "explanation": "La primera parte define PLANO: «Sin relieve». La segunda también: «otro significado»."
  },
  {
    "id": "d051",
    "difficulty": "medio-difícil",
    "clue": "Representación, aunque también puede ser otro significado. (6)",
    "answer": "IMAGEN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación",
    "fodder": "Representación",
    "indicators": [],
    "explanation": "La primera parte define IMAGEN: «Representación». La segunda también: «otro significado»."
  },
  {
    "id": "d052",
    "difficulty": "medio-difícil",
    "clue": "Mecanismo elástico; también otro significado. (7)",
    "answer": "RESORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mecanismo elástico",
    "fodder": "Mecanismo elástico",
    "indicators": [],
    "explanation": "La primera parte define RESORTE: «Mecanismo elástico». La segunda también: «otro significado»."
  },
  {
    "id": "d053",
    "difficulty": "medio-difícil",
    "clue": "Recorrido cerrado en un contexto; otro significado en otro. (8)",
    "answer": "CIRCUITO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recorrido cerrado",
    "fodder": "Recorrido cerrado",
    "indicators": [],
    "explanation": "La primera parte define CIRCUITO: «Recorrido cerrado». La segunda también: «otro significado»."
  },
  {
    "id": "d054",
    "difficulty": "medio-difícil",
    "clue": "Escalón para espectadores. En otro sentido, otro significado. (5)",
    "answer": "GRADA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Escalón para espectadores",
    "fodder": "Escalón para espectadores",
    "indicators": [],
    "explanation": "La primera parte define GRADA: «Escalón para espectadores». La segunda también: «otro significado»."
  },
  {
    "id": "d055",
    "difficulty": "medio-difícil",
    "clue": "Costado; también otro significado. (4)",
    "answer": "LADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Costado",
    "fodder": "Costado",
    "indicators": [],
    "explanation": "La primera parte define LADO: «Costado». La segunda también: «otro significado»."
  },
  {
    "id": "d056",
    "difficulty": "medio-difícil",
    "clue": "Anotación. En otro sentido, otro significado. (8)",
    "answer": "REGISTRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Anotación",
    "fodder": "Anotación",
    "indicators": [],
    "explanation": "La primera parte define REGISTRO: «Anotación». La segunda también: «otro significado»."
  },
  {
    "id": "d057",
    "difficulty": "medio-difícil",
    "clue": "Vegetal; también piso de un edificio. (6)",
    "answer": "PLANTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vegetal",
    "fodder": "Vegetal",
    "indicators": [],
    "explanation": "La primera parte define PLANTA: «Vegetal». La segunda también: «piso de un edificio»."
  },
  {
    "id": "d058",
    "difficulty": "medio-difícil",
    "clue": "Persona que actúa por otra; también otro significado. (6)",
    "answer": "AGENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que actúa por otra",
    "fodder": "Persona que actúa por otra",
    "indicators": [],
    "explanation": "La primera parte define AGENTE: «Persona que actúa por otra». La segunda también: «otro significado»."
  },
  {
    "id": "d059",
    "difficulty": "medio-difícil",
    "clue": "Mandato; también otro significado. (5)",
    "answer": "ORDEN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mandato",
    "fodder": "Mandato",
    "indicators": [],
    "explanation": "La primera parte define ORDEN: «Mandato». La segunda también: «otro significado»."
  },
  {
    "id": "d060",
    "difficulty": "medio-difícil",
    "clue": "Documento de una reunión, aunque también puede ser otro significado. (4)",
    "answer": "ACTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Documento de una reunión",
    "fodder": "Documento de una reunión",
    "indicators": [],
    "explanation": "La primera parte define ACTA: «Documento de una reunión». La segunda también: «otro significado»."
  },
  {
    "id": "d061",
    "difficulty": "medio-difícil",
    "clue": "Parte dura del cuerpo; también otro significado. (5)",
    "answer": "HUESO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte dura del cuerpo",
    "fodder": "Parte dura del cuerpo",
    "indicators": [],
    "explanation": "La primera parte define HUESO: «Parte dura del cuerpo». La segunda también: «otro significado»."
  },
  {
    "id": "d062",
    "difficulty": "medio-difícil",
    "clue": "Lugar disponible; también otro significado. (7)",
    "answer": "ESPACIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar disponible",
    "fodder": "Lugar disponible",
    "indicators": [],
    "explanation": "La primera parte define ESPACIO: «Lugar disponible». La segunda también: «otro significado»."
  },
  {
    "id": "d063",
    "difficulty": "medio-difícil",
    "clue": "La amar perdió su orden y apareció parte de un árbol. (4)",
    "answer": "RAMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Parte de un árbol",
    "fodder": "AMAR",
    "indicators": [
      "trastocada"
    ],
    "explanation": "«Parte de un árbol» define RAMA; las letras de AMAR se reordenan para formar RAMA."
  },
  {
    "id": "d064",
    "difficulty": "medio-difícil",
    "clue": "Herraje móvil, aunque también puede ser otro significado. (7)",
    "answer": "BISAGRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Herraje móvil",
    "fodder": "Herraje móvil",
    "indicators": [],
    "explanation": "La primera parte define BISAGRA: «Herraje móvil». La segunda también: «otro significado»."
  },
  {
    "id": "d065",
    "difficulty": "medio-difícil",
    "clue": "Felino doméstico; nace al quitar la última letra de gatos. (4)",
    "answer": "GATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Felino doméstico",
    "fodder": "GATOS",
    "indicators": [
      "pierde su cola"
    ],
    "explanation": "«Felino doméstico» define GATO; GATOS sin su última letra da GATO."
  },
  {
    "id": "d066",
    "difficulty": "medio-difícil",
    "clue": "Asiento, aunque también puede ser otro significado. (5)",
    "answer": "SILLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Asiento",
    "fodder": "Asiento",
    "indicators": [],
    "explanation": "La primera parte define SILLA: «Asiento». La segunda también: «otro significado»."
  },
  {
    "id": "d067",
    "difficulty": "medio-difícil",
    "clue": "Instrumento para medir el tiempo; también otro significado. (5)",
    "answer": "RELOJ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Instrumento para medir el tiempo",
    "fodder": "Instrumento para medir el tiempo",
    "indicators": [],
    "explanation": "La primera parte define RELOJ: «Instrumento para medir el tiempo». La segunda también: «otro significado»."
  },
  {
    "id": "d068",
    "difficulty": "medio-difícil",
    "clue": "La grano perdió su orden y apareció categoría. (5)",
    "answer": "RANGO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Categoría",
    "fodder": "GRANO",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Categoría» define RANGO; las letras de GRANO se reordenan para formar RANGO."
  },
  {
    "id": "d069",
    "difficulty": "medio-difícil",
    "clue": "Orilla del mar en un contexto; precio que algo tiene en otro. (5)",
    "answer": "COSTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Orilla del mar",
    "fodder": "Orilla del mar",
    "indicators": [],
    "explanation": "La primera parte define COSTA: «Orilla del mar». La segunda también: «precio que algo tiene»."
  },
  {
    "id": "d070",
    "difficulty": "medio-difícil",
    "clue": "Representación geográfica. En otro sentido, otro significado. (4)",
    "answer": "MAPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación geográfica",
    "fodder": "Representación geográfica",
    "indicators": [],
    "explanation": "La primera parte define MAPA: «Representación geográfica». La segunda también: «otro significado»."
  },
  {
    "id": "d071",
    "difficulty": "medio-difícil",
    "clue": "La mala perdió su orden y apareció parte espiritual. (4)",
    "answer": "ALMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Parte espiritual",
    "fodder": "MALA",
    "indicators": [
      "alterada"
    ],
    "explanation": "«Parte espiritual» define ALMA; las letras de MALA se reordenan para formar ALMA."
  },
  {
    "id": "d072",
    "difficulty": "medio-difícil",
    "clue": "Hebra; también otro significado. (4)",
    "answer": "HILO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Hebra",
    "fodder": "Hebra",
    "indicators": [],
    "explanation": "La primera parte define HILO: «Hebra». La segunda también: «otro significado»."
  },
  {
    "id": "d073",
    "difficulty": "medio-difícil",
    "clue": "Modifica algo, aunque también puede ser otro significado. (6)",
    "answer": "CAMBIA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Modifica algo",
    "fodder": "Modifica algo",
    "indicators": [],
    "explanation": "La primera parte define CAMBIA: «Modifica algo». La segunda también: «otro significado»."
  },
  {
    "id": "d074",
    "difficulty": "medio-difícil",
    "clue": "Parte del cuerpo en un contexto; otro significado en otro. (5)",
    "answer": "BRAZO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte del cuerpo",
    "fodder": "Parte del cuerpo",
    "indicators": [],
    "explanation": "La primera parte define BRAZO: «Parte del cuerpo». La segunda también: «otro significado»."
  },
  {
    "id": "d075",
    "difficulty": "medio-difícil",
    "clue": "Asiento real; también puede tener otro sentido. (5)",
    "answer": "TRONO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Asiento real",
    "fodder": "Asiento real",
    "indicators": [],
    "explanation": "La pista usa una doble definición para TRONO."
  },
  {
    "id": "d076",
    "difficulty": "medio-difícil",
    "clue": "Orden de intervención; también otro significado. (5)",
    "answer": "TURNO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Orden de intervención",
    "fodder": "Orden de intervención",
    "indicators": [],
    "explanation": "La primera parte define TURNO: «Orden de intervención». La segunda también: «otro significado»."
  },
  {
    "id": "d077",
    "difficulty": "medio-difícil",
    "clue": "Roedor; también dispositivo de ordenador. (5)",
    "answer": "RATON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Roedor",
    "fodder": "Roedor",
    "indicators": [],
    "explanation": "La primera parte define RATON: «Roedor». La segunda también: «dispositivo de ordenador»."
  },
  {
    "id": "d078",
    "difficulty": "medio-difícil",
    "clue": "Discusión pública, aunque también puede ser otro significado. (6)",
    "answer": "DEBATE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Discusión pública",
    "fodder": "Discusión pública",
    "indicators": [],
    "explanation": "La primera parte define DEBATE: «Discusión pública». La segunda también: «otro significado»."
  },
  {
    "id": "d079",
    "difficulty": "medio-difícil",
    "clue": "Conducto. En otro sentido, otro significado. (5)",
    "answer": "CANAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conducto",
    "fodder": "Conducto",
    "indicators": [],
    "explanation": "La primera parte define CANAL: «Conducto». La segunda también: «otro significado»."
  },
  {
    "id": "d080",
    "difficulty": "medio-difícil",
    "clue": "Camino establecido; también otro significado. (4)",
    "answer": "RUTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Camino establecido",
    "fodder": "Camino establecido",
    "indicators": [],
    "explanation": "La primera parte define RUTA: «Camino establecido». La segunda también: «otro significado»."
  },
  {
    "id": "d081",
    "difficulty": "medio-difícil",
    "clue": "Pieza de dinero; también otro significado. (6)",
    "answer": "MONEDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza de dinero",
    "fodder": "Pieza de dinero",
    "indicators": [],
    "explanation": "La primera parte define MONEDA: «Pieza de dinero». La segunda también: «otro significado»."
  },
  {
    "id": "d082",
    "difficulty": "medio-difícil",
    "clue": "Vaso con pie. En otro sentido, otro significado. (4)",
    "answer": "COPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vaso con pie",
    "fodder": "Vaso con pie",
    "indicators": [],
    "explanation": "La primera parte define COPA: «Vaso con pie». La segunda también: «otro significado»."
  },
  {
    "id": "d083",
    "difficulty": "medio-difícil",
    "clue": "Material elástico; también otro significado. (4)",
    "answer": "GOMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material elástico",
    "fodder": "Material elástico",
    "indicators": [],
    "explanation": "La primera parte define GOMA: «Material elástico». La segunda también: «otro significado»."
  },
  {
    "id": "d084",
    "difficulty": "medio-difícil",
    "clue": "Animal del desierto; también puede tener otro sentido. (7)",
    "answer": "CAMELLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Animal del desierto",
    "fodder": "Animal del desierto",
    "indicators": [],
    "explanation": "La pista usa una doble definición para CAMELLO."
  },
  {
    "id": "d085",
    "difficulty": "medio-difícil",
    "clue": "Cesión; también puede tener otro sentido. (7)",
    "answer": "ENTREGA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cesión",
    "fodder": "Cesión",
    "indicators": [],
    "explanation": "La pista usa una doble definición para ENTREGA."
  },
  {
    "id": "d086",
    "difficulty": "medio-difícil",
    "clue": "Cantidad determinada; también otro significado. (6)",
    "answer": "MEDIDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cantidad determinada",
    "fodder": "Cantidad determinada",
    "indicators": [],
    "explanation": "La primera parte define MEDIDA: «Cantidad determinada». La segunda también: «otro significado»."
  },
  {
    "id": "d087",
    "difficulty": "medio-difícil",
    "clue": "Argumento, aunque también puede ser otro significado. (5)",
    "answer": "TRAMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Argumento",
    "fodder": "Argumento",
    "indicators": [],
    "explanation": "La primera parte define TRAMA: «Argumento». La segunda también: «otro significado»."
  },
  {
    "id": "d088",
    "difficulty": "medio-difícil",
    "clue": "Parte del cuerpo, aunque también puede ser otro significado. (4)",
    "answer": "BOCA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte del cuerpo",
    "fodder": "Parte del cuerpo",
    "indicators": [],
    "explanation": "La primera parte define BOCA: «Parte del cuerpo». La segunda también: «otro significado»."
  },
  {
    "id": "d089",
    "difficulty": "medio-difícil",
    "clue": "Máquina en un contexto; alrededor de en otro. (5)",
    "answer": "TORNO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Máquina",
    "fodder": "Máquina",
    "indicators": [],
    "explanation": "La primera parte define TORNO: «Máquina». La segunda también: «alrededor de»."
  },
  {
    "id": "d090",
    "difficulty": "medio-difícil",
    "clue": "Prenda de vestir; también puede tener otro sentido. (6)",
    "answer": "CAMISA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda de vestir",
    "fodder": "CA + MISA",
    "indicators": [],
    "explanation": "«Prenda de vestir» define CAMISA. CA junto a MISA forma CAMISA."
  },
  {
    "id": "d091",
    "difficulty": "medio-difícil",
    "clue": "Asunto; nace al quitar la última letra de atema. (4)",
    "answer": "TEMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Asunto",
    "fodder": "ATEMA",
    "indicators": [
      "pierde su cabeza"
    ],
    "explanation": "«Asunto» define TEMA; ATEMA sin su última letra da TEMA."
  },
  {
    "id": "d092",
    "difficulty": "medio-difícil",
    "clue": "La caro perdió su orden y apareció piedra. (4)",
    "answer": "ROCA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Piedra",
    "fodder": "CARO",
    "indicators": [
      "alterado"
    ],
    "explanation": "«Piedra» define ROCA; las letras de CARO se reordenan para formar ROCA."
  },
  {
    "id": "d093",
    "difficulty": "medio-difícil",
    "clue": "Parte de la mano; también otro significado. (4)",
    "answer": "DEDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de la mano",
    "fodder": "Parte de la mano",
    "indicators": [],
    "explanation": "La primera parte define DEDO: «Parte de la mano». La segunda también: «otro significado»."
  },
  {
    "id": "d094",
    "difficulty": "medio-difícil",
    "clue": "Objeto que fija una embarcación. En otro sentido, otro significado. (5)",
    "answer": "ANCLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que fija una embarcación",
    "fodder": "Objeto que fija una embarcación",
    "indicators": [],
    "explanation": "La primera parte define ANCLA: «Objeto que fija una embarcación». La segunda también: «otro significado»."
  },
  {
    "id": "d095",
    "difficulty": "medio-difícil",
    "clue": "Armado de piezas en un contexto; otro significado en otro. (7)",
    "answer": "MONTAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Armado de piezas",
    "fodder": "Armado de piezas",
    "indicators": [],
    "explanation": "La primera parte define MONTAJE: «Armado de piezas». La segunda también: «otro significado»."
  },
  {
    "id": "d096",
    "difficulty": "medio-difícil",
    "clue": "Herramienta dentada en un contexto; cordillera en otro. (6)",
    "answer": "SIERRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Herramienta dentada",
    "fodder": "Herramienta dentada",
    "indicators": [],
    "explanation": "La primera parte define SIERRA: «Herramienta dentada». La segunda también: «cordillera»."
  },
  {
    "id": "d097",
    "difficulty": "medio-difícil",
    "clue": "Prenda para la mano; también otro significado. (6)",
    "answer": "GUANTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda para la mano",
    "fodder": "Prenda para la mano",
    "indicators": [],
    "explanation": "La primera parte define GUANTE: «Prenda para la mano». La segunda también: «otro significado»."
  },
  {
    "id": "d098",
    "difficulty": "medio-difícil",
    "clue": "La alma perdió su orden y apareció de calidad deficiente. (4)",
    "answer": "MALA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "De calidad deficiente",
    "fodder": "ALMA",
    "indicators": [
      "revuelta"
    ],
    "explanation": "«De calidad deficiente» define MALA; las letras de ALMA se reordenan para formar MALA."
  },
  {
    "id": "d099",
    "difficulty": "medio-difícil",
    "clue": "Salida de una planta; también otro significado. (5)",
    "answer": "BROTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Salida de una planta",
    "fodder": "Salida de una planta",
    "indicators": [],
    "explanation": "La primera parte define BROTE: «Salida de una planta». La segunda también: «otro significado»."
  },
  {
    "id": "d100",
    "difficulty": "medio-difícil",
    "clue": "Anteojos en un contexto; otro significado en otro. (5)",
    "answer": "GAFAS",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Anteojos",
    "fodder": "Anteojos",
    "indicators": [],
    "explanation": "La primera parte define GAFAS: «Anteojos». La segunda también: «otro significado»."
  },
  {
    "id": "d101",
    "difficulty": "difícil",
    "clue": "Protección para la cabeza, aunque también puede ser otro significado. (5)",
    "answer": "CASCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Protección para la cabeza",
    "fodder": "Protección para la cabeza",
    "indicators": [],
    "explanation": "La primera parte define CASCO: «Protección para la cabeza». La segunda también: «otro significado»."
  },
  {
    "id": "d102",
    "difficulty": "difícil",
    "clue": "Ave doméstica; también otro significado. (7)",
    "answer": "GALLINA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ave doméstica",
    "fodder": "Ave doméstica",
    "indicators": [],
    "explanation": "La primera parte define GALLINA: «Ave doméstica». La segunda también: «otro significado»."
  },
  {
    "id": "d103",
    "difficulty": "difícil",
    "clue": "Conjunto de pilas; también grupo de instrumentos. (7)",
    "answer": "BATERIA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de pilas",
    "fodder": "Conjunto de pilas",
    "indicators": [],
    "explanation": "La primera parte define BATERIA: «Conjunto de pilas». La segunda también: «grupo de instrumentos»."
  },
  {
    "id": "d104",
    "difficulty": "difícil",
    "clue": "Salida de una nave, aunque también puede ser otro significado. (10)",
    "answer": "DESEMBARCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Salida de una nave",
    "fodder": "Salida de una nave",
    "indicators": [],
    "explanation": "La primera parte define DESEMBARCO: «Salida de una nave». La segunda también: «otro significado»."
  },
  {
    "id": "d105",
    "difficulty": "difícil",
    "clue": "Parte posterior del pie en un contexto; recibo numerado en otro. (5)",
    "answer": "TALON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte posterior del pie",
    "fodder": "Parte posterior del pie",
    "indicators": [],
    "explanation": "La primera parte define TALON: «Parte posterior del pie». La segunda también: «recibo numerado»."
  },
  {
    "id": "d106",
    "difficulty": "difícil",
    "clue": "La pila de libros terminó en el suelo. (4)",
    "answer": "PILA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Montón o batería",
    "fodder": "la pila de libros terminó en el suelo.",
    "indicators": [
      "escondido"
    ],
    "explanation": "«Montón o batería» define PILA; la respuesta aparece escondida dentro de la frase."
  },
  {
    "id": "d107",
    "difficulty": "difícil",
    "clue": "Palabra que identifica. En otro sentido, otro significado. (6)",
    "answer": "NOMBRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Palabra que identifica",
    "fodder": "Palabra que identifica",
    "indicators": [],
    "explanation": "La primera parte define NOMBRE: «Palabra que identifica». La segunda también: «otro significado»."
  },
  {
    "id": "d108",
    "difficulty": "difícil",
    "clue": "Rostro. En otro sentido, otro significado. (4)",
    "answer": "CARA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Rostro",
    "fodder": "Rostro",
    "indicators": [],
    "explanation": "La primera parte define CARA: «Rostro». La segunda también: «otro significado»."
  },
  {
    "id": "d109",
    "difficulty": "difícil",
    "clue": "Parte de una prenda; también fruta tropical. (5)",
    "answer": "MANGA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de una prenda",
    "fodder": "Parte de una prenda",
    "indicators": [],
    "explanation": "La primera parte define MANGA: «Parte de una prenda». La segunda también: «fruta tropical»."
  },
  {
    "id": "d110",
    "difficulty": "difícil",
    "clue": "Soga; también otro significado. (6)",
    "answer": "CUERDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Soga",
    "fodder": "Soga",
    "indicators": [],
    "explanation": "La primera parte define CUERDA: «Soga». La segunda también: «otro significado»."
  },
  {
    "id": "d111",
    "difficulty": "difícil",
    "clue": "Cuerpo celeste, aunque también puede ser otro significado. (5)",
    "answer": "ASTRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cuerpo celeste",
    "fodder": "Cuerpo celeste",
    "indicators": [],
    "explanation": "La primera parte define ASTRO: «Cuerpo celeste». La segunda también: «otro significado»."
  },
  {
    "id": "d112",
    "difficulty": "difícil",
    "clue": "Pendiente, aunque también puede ser otro significado. (6)",
    "answer": "CUESTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pendiente",
    "fodder": "Pendiente",
    "indicators": [],
    "explanation": "La primera parte define CUESTA: «Pendiente». La segunda también: «otro significado»."
  },
  {
    "id": "d113",
    "difficulty": "difícil",
    "clue": "Líquido esencial para beber en un contexto; otro significado en otro. (4)",
    "answer": "AGUA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Líquido esencial para beber",
    "fodder": "Líquido esencial para beber",
    "indicators": [],
    "explanation": "La primera parte define AGUA: «Líquido esencial para beber». La segunda también: «otro significado»."
  },
  {
    "id": "d114",
    "difficulty": "difícil",
    "clue": "Línea no recta, aunque también puede ser otro significado. (5)",
    "answer": "CURVA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea no recta",
    "fodder": "Línea no recta",
    "indicators": [],
    "explanation": "La primera parte define CURVA: «Línea no recta». La segunda también: «otro significado»."
  },
  {
    "id": "d115",
    "difficulty": "difícil",
    "clue": "Lugar de aves en un contexto; otro significado en otro. (4)",
    "answer": "NIDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar de aves",
    "fodder": "Lugar de aves",
    "indicators": [],
    "explanation": "La primera parte define NIDO: «Lugar de aves». La segunda también: «otro significado»."
  },
  {
    "id": "d116",
    "difficulty": "difícil",
    "clue": "Parte de una herramienta en un contexto; fruta tropical en otro. (5)",
    "answer": "MANGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de una herramienta",
    "fodder": "Parte de una herramienta",
    "indicators": [],
    "explanation": "La primera parte define MANGO: «Parte de una herramienta». La segunda también: «fruta tropical»."
  },
  {
    "id": "d117",
    "difficulty": "difícil",
    "clue": "Elemento, aunque también puede ser otro significado. (5)",
    "answer": "PIEZA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Elemento",
    "fodder": "Elemento",
    "indicators": [],
    "explanation": "La primera parte define PIEZA: «Elemento». La segunda también: «otro significado»."
  },
  {
    "id": "d118",
    "difficulty": "difícil",
    "clue": "Pieza dental, aunque también puede ser otro significado. (6)",
    "answer": "DIENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza dental",
    "fodder": "Pieza dental",
    "indicators": [],
    "explanation": "La primera parte define DIENTE: «Pieza dental». La segunda también: «otro significado»."
  },
  {
    "id": "d119",
    "difficulty": "difícil",
    "clue": "Zona de una ciudad. En otro sentido, otro significado. (6)",
    "answer": "BARRIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Zona de una ciudad",
    "fodder": "Zona de una ciudad",
    "indicators": [],
    "explanation": "La primera parte define BARRIO: «Zona de una ciudad». La segunda también: «otro significado»."
  },
  {
    "id": "d120",
    "difficulty": "difícil",
    "clue": "La sima perdió su orden y apareció celebración religiosa. (4)",
    "answer": "MISA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Celebración religiosa",
    "fodder": "SIMA",
    "indicators": [
      "desordenada"
    ],
    "explanation": "«Celebración religiosa» define MISA; las letras de SIMA se reordenan para formar MISA."
  },
  {
    "id": "d121",
    "difficulty": "difícil",
    "clue": "Parte de una planta en un contexto; otro significado en otro. (4)",
    "answer": "RAIZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de una planta",
    "fodder": "Parte de una planta",
    "indicators": [],
    "explanation": "La primera parte define RAIZ: «Parte de una planta». La segunda también: «otro significado»."
  },
  {
    "id": "d122",
    "difficulty": "difícil",
    "clue": "Contacto afectuoso, aunque también puede ser otro significado. (4)",
    "answer": "BESO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Contacto afectuoso",
    "fodder": "Contacto afectuoso",
    "indicators": [],
    "explanation": "La primera parte define BESO: «Contacto afectuoso». La segunda también: «otro significado»."
  },
  {
    "id": "d123",
    "difficulty": "difícil",
    "clue": "La ceramista encendió una vela. (4)",
    "answer": "CERA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Material de las velas",
    "fodder": "la ceramista encendió una vela.",
    "indicators": [
      "escondido"
    ],
    "explanation": "«Material de las velas» define CERA; la respuesta aparece escondida dentro de la frase."
  },
  {
    "id": "d124",
    "difficulty": "difícil",
    "clue": "Calzado en un contexto; otro significado en otro. (4)",
    "answer": "BOTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Calzado",
    "fodder": "Calzado",
    "indicators": [],
    "explanation": "La primera parte define BOTA: «Calzado». La segunda también: «otro significado»."
  },
  {
    "id": "d125",
    "difficulty": "difícil",
    "clue": "Recinto para animales. En otro sentido, otro significado. (6)",
    "answer": "CORRAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recinto para animales",
    "fodder": "Recinto para animales",
    "indicators": [],
    "explanation": "La primera parte define CORRAL: «Recinto para animales». La segunda también: «otro significado»."
  },
  {
    "id": "d126",
    "difficulty": "difícil",
    "clue": "El micrófono sabio sorprendió a todos. (4)",
    "answer": "ROSA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Flor",
    "fodder": "el micrófono sabio sorprendió a todos.",
    "indicators": [
      "escondido"
    ],
    "explanation": "«Flor» define ROSA; la respuesta aparece escondida dentro de la frase."
  },
  {
    "id": "d127",
    "difficulty": "difícil",
    "clue": "La cena perdió su orden y apareció viene al mundo. (4)",
    "answer": "NACE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Viene al mundo",
    "fodder": "CENA",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Viene al mundo» define NACE; las letras de CENA se reordenan para formar NACE."
  },
  {
    "id": "d128",
    "difficulty": "difícil",
    "clue": "Recipiente con asa; también otro significado. (5)",
    "answer": "JARRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recipiente con asa",
    "fodder": "Recipiente con asa",
    "indicators": [],
    "explanation": "La primera parte define JARRA: «Recipiente con asa». La segunda también: «otro significado»."
  },
  {
    "id": "d129",
    "difficulty": "difícil",
    "clue": "Alimento para atraer animales, aunque también puede ser otro significado. (4)",
    "answer": "CEBO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Alimento para atraer animales",
    "fodder": "Alimento para atraer animales",
    "indicators": [],
    "explanation": "La primera parte define CEBO: «Alimento para atraer animales». La segunda también: «otro significado»."
  },
  {
    "id": "d130",
    "difficulty": "difícil",
    "clue": "Objeto que cubre la cara; también otro significado. (7)",
    "answer": "MASCARA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que cubre la cara",
    "fodder": "Objeto que cubre la cara",
    "indicators": [],
    "explanation": "La primera parte define MASCARA: «Objeto que cubre la cara». La segunda también: «otro significado»."
  },
  {
    "id": "d131",
    "difficulty": "difícil",
    "clue": "Pintura en un contexto; otro significado en otro. (6)",
    "answer": "CUADRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pintura",
    "fodder": "Pintura",
    "indicators": [],
    "explanation": "La primera parte define CUADRO: «Pintura». La segunda también: «otro significado»."
  },
  {
    "id": "d132",
    "difficulty": "difícil",
    "clue": "Firmamento; también otro significado. (5)",
    "answer": "CIELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Firmamento",
    "fodder": "Firmamento",
    "indicators": [],
    "explanation": "La primera parte define CIELO: «Firmamento». La segunda también: «otro significado»."
  },
  {
    "id": "d133",
    "difficulty": "difícil",
    "clue": "La cartera perdió su orden y apareció vehículo de carga. (7)",
    "answer": "CARRETA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Vehículo de carga",
    "fodder": "CARTERA",
    "indicators": [
      "patas arriba"
    ],
    "explanation": "«Vehículo de carga» define CARRETA; las letras de CARTERA se reordenan para formar CARRETA."
  },
  {
    "id": "d134",
    "difficulty": "difícil",
    "clue": "Borde del agua. En otro sentido, otro significado. (6)",
    "answer": "ORILLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde del agua",
    "fodder": "Borde del agua",
    "indicators": [],
    "explanation": "La primera parte define ORILLA: «Borde del agua». La segunda también: «otro significado»."
  },
  {
    "id": "d135",
    "difficulty": "difícil",
    "clue": "Condimento; también otro significado. (3)",
    "answer": "SAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Condimento",
    "fodder": "Condimento",
    "indicators": [],
    "explanation": "La primera parte define SAL: «Condimento». La segunda también: «otro significado»."
  },
  {
    "id": "d136",
    "difficulty": "difícil",
    "clue": "Masa de agua; también otro significado. (3)",
    "answer": "MAR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Masa de agua",
    "fodder": "Masa de agua",
    "indicators": [],
    "explanation": "La primera parte define MAR: «Masa de agua». La segunda también: «otro significado»."
  },
  {
    "id": "d137",
    "difficulty": "difícil",
    "clue": "Tira flexible. En otro sentido, otro significado. (5)",
    "answer": "CINTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tira flexible",
    "fodder": "Tira flexible",
    "indicators": [],
    "explanation": "La primera parte define CINTA: «Tira flexible». La segunda también: «otro significado»."
  },
  {
    "id": "d138",
    "difficulty": "difícil",
    "clue": "Elevación pequeña. En otro sentido, otro significado. (5)",
    "answer": "CERRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Elevación pequeña",
    "fodder": "Elevación pequeña",
    "indicators": [],
    "explanation": "La primera parte define CERRO: «Elevación pequeña». La segunda también: «otro significado»."
  },
  {
    "id": "d139",
    "difficulty": "difícil",
    "clue": "Nivel, aunque también puede ser unidad de temperatura. (5)",
    "answer": "GRADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Nivel",
    "fodder": "Nivel",
    "indicators": [],
    "explanation": "La primera parte define GRADO: «Nivel». La segunda también: «unidad de temperatura»."
  },
  {
    "id": "d140",
    "difficulty": "difícil",
    "clue": "La nomo perdió su orden y apareció primate. (4)",
    "answer": "MONO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Primate",
    "fodder": "NOMO",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Primate» define MONO; las letras de NOMO se reordenan para formar MONO."
  },
  {
    "id": "d141",
    "difficulty": "difícil",
    "clue": "Acción de disparar en un contexto; otro significado en otro. (7)",
    "answer": "DISPARO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de disparar",
    "fodder": "Acción de disparar",
    "indicators": [],
    "explanation": "La primera parte define DISPARO: «Acción de disparar». La segunda también: «otro significado»."
  },
  {
    "id": "d142",
    "difficulty": "difícil",
    "clue": "Acción de irse: sal junto a ida. (6)",
    "answer": "SALIDA",
    "mechanisms": [
      "charade"
    ],
    "definition": "Acción de irse",
    "fodder": "SAL + IDA",
    "indicators": [
      "junto a"
    ],
    "explanation": "SAL + IDA forman SALIDA."
  },
  {
    "id": "d143",
    "difficulty": "difícil",
    "clue": "Construcción sobre un obstáculo, aunque también puede ser otro significado. (6)",
    "answer": "PUENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Construcción sobre un obstáculo",
    "fodder": "Construcción sobre un obstáculo",
    "indicators": [],
    "explanation": "La primera parte define PUENTE: «Construcción sobre un obstáculo». La segunda también: «otro significado»."
  },
  {
    "id": "d144",
    "difficulty": "difícil",
    "clue": "Representación resumida, aunque también puede ser otro significado. (7)",
    "answer": "ESQUEMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación resumida",
    "fodder": "Representación resumida",
    "indicators": [],
    "explanation": "La primera parte define ESQUEMA: «Representación resumida». La segunda también: «otro significado»."
  },
  {
    "id": "d145",
    "difficulty": "difícil",
    "clue": "Concepto. En otro sentido, otro significado. (4)",
    "answer": "IDEA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Concepto",
    "fodder": "Concepto",
    "indicators": [],
    "explanation": "La primera parte define IDEA: «Concepto». La segunda también: «otro significado»."
  },
  {
    "id": "d146",
    "difficulty": "difícil",
    "clue": "Proyectil; también otro significado. (4)",
    "answer": "BALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Proyectil",
    "fodder": "Proyectil",
    "indicators": [],
    "explanation": "La primera parte define BALA: «Proyectil». La segunda también: «otro significado»."
  },
  {
    "id": "d147",
    "difficulty": "difícil",
    "clue": "Pieza que sujeta. En otro sentido, otro significado. (5)",
    "answer": "GRAPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que sujeta",
    "fodder": "Pieza que sujeta",
    "indicators": [],
    "explanation": "La primera parte define GRAPA: «Pieza que sujeta». La segunda también: «otro significado»."
  },
  {
    "id": "d148",
    "difficulty": "difícil",
    "clue": "Material de playa. En otro sentido, otro significado. (5)",
    "answer": "ARENA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material de playa",
    "fodder": "Material de playa",
    "indicators": [],
    "explanation": "La primera parte define ARENA: «Material de playa». La segunda también: «otro significado»."
  },
  {
    "id": "d149",
    "difficulty": "difícil",
    "clue": "La camarera dejó la llave sobre la mesa. (4)",
    "answer": "CAMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Lugar para dormir",
    "fodder": "la camarera dejó la llave sobre la mesa.",
    "indicators": [
      "escondido"
    ],
    "explanation": "«Lugar para dormir» define CAMA; la respuesta aparece escondida dentro de la frase."
  },
  {
    "id": "d150",
    "difficulty": "difícil",
    "clue": "Forma para fabricar algo, aunque también puede ser otro significado. (5)",
    "answer": "MOLDE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Forma para fabricar algo",
    "fodder": "Forma para fabricar algo",
    "indicators": [],
    "explanation": "La primera parte define MOLDE: «Forma para fabricar algo». La segunda también: «otro significado»."
  },
  {
    "id": "d151",
    "difficulty": "difícil",
    "clue": "Aparato de comunicación. En otro sentido, segmento del círculo. (5)",
    "answer": "RADIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Aparato de comunicación",
    "fodder": "Aparato de comunicación",
    "indicators": [],
    "explanation": "La primera parte define RADIO: «Aparato de comunicación». La segunda también: «segmento del círculo»."
  },
  {
    "id": "d152",
    "difficulty": "difícil",
    "clue": "Unión; también otro significado. (6)",
    "answer": "ENLACE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Unión",
    "fodder": "Unión",
    "indicators": [],
    "explanation": "La primera parte define ENLACE: «Unión». La segunda también: «otro significado»."
  },
  {
    "id": "d153",
    "difficulty": "difícil",
    "clue": "Recipiente para comer; también parte de una balanza. (5)",
    "answer": "PLATO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recipiente para comer",
    "fodder": "Recipiente para comer",
    "indicators": [],
    "explanation": "La primera parte define PLATO: «Recipiente para comer». La segunda también: «parte de una balanza»."
  },
  {
    "id": "d154",
    "difficulty": "difícil",
    "clue": "La misa perdió su orden y apareció cavidad profunda. (4)",
    "answer": "SIMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Cavidad profunda",
    "fodder": "MISA",
    "indicators": [
      "revuelta"
    ],
    "explanation": "«Cavidad profunda» define SIMA; las letras de MISA se reordenan para formar SIMA."
  },
  {
    "id": "d155",
    "difficulty": "difícil",
    "clue": "Borde en un contexto; otro significado en otro. (5)",
    "answer": "MARCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde",
    "fodder": "Borde",
    "indicators": [],
    "explanation": "La primera parte define MARCO: «Borde». La segunda también: «otro significado»."
  },
  {
    "id": "d156",
    "difficulty": "difícil",
    "clue": "Habitación amplia, aunque también puede ser otro significado. (5)",
    "answer": "SALON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Habitación amplia",
    "fodder": "Habitación amplia",
    "indicators": [],
    "explanation": "La primera parte define SALON: «Habitación amplia». La segunda también: «otro significado»."
  },
  {
    "id": "d157",
    "difficulty": "difícil",
    "clue": "Peso transportado en un contexto; otro significado en otro. (5)",
    "answer": "CARGA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Peso transportado",
    "fodder": "Peso transportado",
    "indicators": [],
    "explanation": "La primera parte define CARGA: «Peso transportado». La segunda también: «otro significado»."
  },
  {
    "id": "d158",
    "difficulty": "difícil",
    "clue": "Cantidad de agua en un contexto; otro significado en otro. (6)",
    "answer": "CAUDAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cantidad de agua",
    "fodder": "Cantidad de agua",
    "indicators": [],
    "explanation": "La primera parte define CAUDAL: «Cantidad de agua». La segunda también: «otro significado»."
  },
  {
    "id": "d159",
    "difficulty": "difícil",
    "clue": "Malla. En otro sentido, otro significado. (3)",
    "answer": "RED",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Malla",
    "fodder": "Malla",
    "indicators": [],
    "explanation": "La primera parte define RED: «Malla». La segunda también: «otro significado»."
  },
  {
    "id": "d160",
    "difficulty": "difícil",
    "clue": "Poder sobre algo. En otro sentido, otro significado. (7)",
    "answer": "DOMINIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Poder sobre algo",
    "fodder": "Poder sobre algo",
    "indicators": [],
    "explanation": "La primera parte define DOMINIO: «Poder sobre algo». La segunda también: «otro significado»."
  },
  {
    "id": "d161",
    "difficulty": "difícil",
    "clue": "Órgano de la vista; también otro significado. (3)",
    "answer": "OJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Órgano de la vista",
    "fodder": "Órgano de la vista",
    "indicators": [],
    "explanation": "La primera parte define OJO: «Órgano de la vista». La segunda también: «otro significado»."
  },
  {
    "id": "d162",
    "difficulty": "difícil",
    "clue": "Figura, aunque también puede ser otro significado. (5)",
    "answer": "FORMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Figura",
    "fodder": "Figura",
    "indicators": [],
    "explanation": "La primera parte define FORMA: «Figura». La segunda también: «otro significado»."
  },
  {
    "id": "d163",
    "difficulty": "difícil",
    "clue": "Separación espacial; también otro significado. (9)",
    "answer": "DISTANCIA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Separación espacial",
    "fodder": "Separación espacial",
    "indicators": [],
    "explanation": "La primera parte define DISTANCIA: «Separación espacial». La segunda también: «otro significado»."
  },
  {
    "id": "d164",
    "difficulty": "difícil",
    "clue": "Prenda; también otro significado. (5)",
    "answer": "FALDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda",
    "fodder": "Prenda",
    "indicators": [],
    "explanation": "La primera parte define FALDA: «Prenda». La segunda también: «otro significado»."
  },
  {
    "id": "d165",
    "difficulty": "difícil",
    "clue": "Disminución de un dolor; también otro significado. (6)",
    "answer": "ALIVIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Disminución de un dolor",
    "fodder": "Disminución de un dolor",
    "indicators": [],
    "explanation": "La primera parte define ALIVIO: «Disminución de un dolor». La segunda también: «otro significado»."
  },
  {
    "id": "d166",
    "difficulty": "difícil",
    "clue": "Parte de un ave. En otro sentido, cima puntiaguda. (4)",
    "answer": "PICO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de un ave",
    "fodder": "Parte de un ave",
    "indicators": [],
    "explanation": "La primera parte define PICO: «Parte de un ave». La segunda también: «cima puntiaguda»."
  },
  {
    "id": "d167",
    "difficulty": "difícil",
    "clue": "Saco flexible, aunque también puede ser mercado de valores. (5)",
    "answer": "BOLSA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Saco flexible",
    "fodder": "Saco flexible",
    "indicators": [],
    "explanation": "La primera parte define BOLSA: «Saco flexible». La segunda también: «mercado de valores»."
  },
  {
    "id": "d168",
    "difficulty": "difícil",
    "clue": "Cantidad en un contexto; otro significado en otro. (6)",
    "answer": "NUMERO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cantidad",
    "fodder": "Cantidad",
    "indicators": [],
    "explanation": "La primera parte define NUMERO: «Cantidad». La segunda también: «otro significado»."
  },
  {
    "id": "d169",
    "difficulty": "difícil",
    "clue": "De gran altura; también otro significado. (4)",
    "answer": "ALTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "De gran altura",
    "fodder": "De gran altura",
    "indicators": [],
    "explanation": "La primera parte define ALTO: «De gran altura». La segunda también: «otro significado»."
  },
  {
    "id": "d170",
    "difficulty": "difícil",
    "clue": "Detención, aunque también puede ser otro significado. (6)",
    "answer": "PARADA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Detención",
    "fodder": "Detención",
    "indicators": [],
    "explanation": "La primera parte define PARADA: «Detención». La segunda también: «otro significado»."
  },
  {
    "id": "d171",
    "difficulty": "difícil",
    "clue": "Frontera; también otro significado. (6)",
    "answer": "LIMITE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Frontera",
    "fodder": "Frontera",
    "indicators": [],
    "explanation": "La primera parte define LIMITE: «Frontera». La segunda también: «otro significado»."
  },
  {
    "id": "d172",
    "difficulty": "difícil",
    "clue": "La bolo perdió su orden y apareció animal cánido. (4)",
    "answer": "LOBO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Animal cánido",
    "fodder": "BOLO",
    "indicators": [
      "trastocado"
    ],
    "explanation": "«Animal cánido» define LOBO; las letras de BOLO se reordenan para formar LOBO."
  },
  {
    "id": "d173",
    "difficulty": "difícil",
    "clue": "Botón del teclado, aunque también puede ser otro significado. (5)",
    "answer": "TECLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Botón del teclado",
    "fodder": "Botón del teclado",
    "indicators": [],
    "explanation": "La primera parte define TECLA: «Botón del teclado». La segunda también: «otro significado»."
  },
  {
    "id": "d174",
    "difficulty": "difícil",
    "clue": "Sabor, aunque también puede ser otro significado. (5)",
    "answer": "DULCE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sabor",
    "fodder": "Sabor",
    "indicators": [],
    "explanation": "La primera parte define DULCE: «Sabor». La segunda también: «otro significado»."
  },
  {
    "id": "d175",
    "difficulty": "difícil",
    "clue": "Instrumento de orientación, aunque también puede ser otro significado. (7)",
    "answer": "BRUJULA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Instrumento de orientación",
    "fodder": "Instrumento de orientación",
    "indicators": [],
    "explanation": "La primera parte define BRUJULA: «Instrumento de orientación». La segunda también: «otro significado»."
  },
  {
    "id": "d176",
    "difficulty": "difícil",
    "clue": "Ayuda; también otro significado. (5)",
    "answer": "APOYO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ayuda",
    "fodder": "Ayuda",
    "indicators": [],
    "explanation": "La primera parte define APOYO: «Ayuda». La segunda también: «otro significado»."
  },
  {
    "id": "d177",
    "difficulty": "difícil",
    "clue": "Parte más alta en un contexto; otro significado en otro. (4)",
    "answer": "CIMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte más alta",
    "fodder": "Parte más alta",
    "indicators": [],
    "explanation": "La primera parte define CIMA: «Parte más alta». La segunda también: «otro significado»."
  },
  {
    "id": "d178",
    "difficulty": "difícil",
    "clue": "Patio de entrada. En otro sentido, otro significado. (5)",
    "answer": "ATRIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Patio de entrada",
    "fodder": "Patio de entrada",
    "indicators": [],
    "explanation": "La primera parte define ATRIO: «Patio de entrada». La segunda también: «otro significado»."
  },
  {
    "id": "d179",
    "difficulty": "difícil",
    "clue": "Movimiento del mar; también otro significado. (3)",
    "answer": "OLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Movimiento del mar",
    "fodder": "Movimiento del mar",
    "indicators": [],
    "explanation": "La primera parte define OLA: «Movimiento del mar». La segunda también: «otro significado»."
  },
  {
    "id": "d180",
    "difficulty": "difícil",
    "clue": "Mujer distinguida. En otro sentido, otro significado. (4)",
    "answer": "DAMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mujer distinguida",
    "fodder": "Mujer distinguida",
    "indicators": [],
    "explanation": "La primera parte define DAMA: «Mujer distinguida». La segunda también: «otro significado»."
  },
  {
    "id": "d181",
    "difficulty": "difícil",
    "clue": "Dulce; también puede tener otro sentido. (8)",
    "answer": "CARAMELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Dulce",
    "fodder": "CAR + AMELO",
    "indicators": [],
    "explanation": "«Dulce» define CARAMELO. CAR unido a AMELO forma CARAMELO."
  },
  {
    "id": "d182",
    "difficulty": "difícil",
    "clue": "Espacio abierto, aunque también puede ser otro significado. (5)",
    "answer": "PATIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio abierto",
    "fodder": "Espacio abierto",
    "indicators": [],
    "explanation": "La primera parte define PATIO: «Espacio abierto». La segunda también: «otro significado»."
  },
  {
    "id": "d183",
    "difficulty": "difícil",
    "clue": "Pieza que gira para impulsar en un contexto; otro significado en otro. (6)",
    "answer": "HELICE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que gira para impulsar",
    "fodder": "Pieza que gira para impulsar",
    "indicators": [],
    "explanation": "La primera parte define HELICE: «Pieza que gira para impulsar». La segunda también: «otro significado»."
  },
  {
    "id": "d184",
    "difficulty": "difícil",
    "clue": "Combustión en un contexto; otro significado en otro. (5)",
    "answer": "FUEGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Combustión",
    "fodder": "Combustión",
    "indicators": [],
    "explanation": "La primera parte define FUEGO: «Combustión». La segunda también: «otro significado»."
  },
  {
    "id": "d185",
    "difficulty": "difícil",
    "clue": "Unión entre piezas en un contexto; otro significado en otro. (6)",
    "answer": "ENCAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Unión entre piezas",
    "fodder": "Unión entre piezas",
    "indicators": [],
    "explanation": "La primera parte define ENCAJE: «Unión entre piezas». La segunda también: «otro significado»."
  },
  {
    "id": "d186",
    "difficulty": "difícil",
    "clue": "Pieza maciza; también otro significado. (6)",
    "answer": "BLOQUE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza maciza",
    "fodder": "Pieza maciza",
    "indicators": [],
    "explanation": "La primera parte define BLOQUE: «Pieza maciza». La segunda también: «otro significado»."
  },
  {
    "id": "d187",
    "difficulty": "difícil",
    "clue": "La ocas perdió su orden y apareció prenda para cubrir el cuerpo. (4)",
    "answer": "SACO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Prenda para cubrir el cuerpo",
    "fodder": "OCAS",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Prenda para cubrir el cuerpo» define SACO; las letras de OCAS se reordenan para formar SACO."
  },
  {
    "id": "d188",
    "difficulty": "difícil",
    "clue": "Actividad para entretenerse: pasa junto a tiempo. (10)",
    "answer": "PASATIEMPO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Actividad para entretenerse",
    "fodder": "PASA + TIEMPO",
    "indicators": [
      "junto a"
    ],
    "explanation": "PASA + TIEMPO forman PASATIEMPO."
  },
  {
    "id": "d189",
    "difficulty": "difícil",
    "clue": "Apunte breve; también puede tener otro sentido. (4)",
    "answer": "NOTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Apunte breve",
    "fodder": "Apunte breve",
    "indicators": [],
    "explanation": "La pista usa una doble definición para NOTA."
  },
  {
    "id": "d190",
    "difficulty": "difícil",
    "clue": "Duración en un contexto; otro significado en otro. (6)",
    "answer": "TIEMPO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Duración",
    "fodder": "Duración",
    "indicators": [],
    "explanation": "La primera parte define TIEMPO: «Duración». La segunda también: «otro significado»."
  },
  {
    "id": "d191",
    "difficulty": "difícil",
    "clue": "Latido arterial. En otro sentido, otro significado. (5)",
    "answer": "PULSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Latido arterial",
    "fodder": "Latido arterial",
    "indicators": [],
    "explanation": "La primera parte define PULSO: «Latido arterial». La segunda también: «otro significado»."
  },
  {
    "id": "d192",
    "difficulty": "difícil",
    "clue": "Objeto formado por dos líneas; también otro significado. (4)",
    "answer": "CRUZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto formado por dos líneas",
    "fodder": "Objeto formado por dos líneas",
    "indicators": [],
    "explanation": "La primera parte define CRUZ: «Objeto formado por dos líneas». La segunda también: «otro significado»."
  },
  {
    "id": "d193",
    "difficulty": "difícil",
    "clue": "Pared. En otro sentido, otro significado. (4)",
    "answer": "MURO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pared",
    "fodder": "Pared",
    "indicators": [],
    "explanation": "La primera parte define MURO: «Pared». La segunda también: «otro significado»."
  },
  {
    "id": "d194",
    "difficulty": "difícil",
    "clue": "Terminó en la tarde, justo antes de irse. (4)",
    "answer": "LATA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Recipiente metálico",
    "fodder": "terminó en la tarde, justo antes de irse.",
    "indicators": [
      "escondido"
    ],
    "explanation": "«Recipiente metálico» define LATA; la respuesta aparece escondida dentro de la frase."
  },
  {
    "id": "d195",
    "difficulty": "difícil",
    "clue": "Lado del cuerpo, aunque también puede ser otro significado. (7)",
    "answer": "COSTADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lado del cuerpo",
    "fodder": "Lado del cuerpo",
    "indicators": [],
    "explanation": "La primera parte define COSTADO: «Lado del cuerpo». La segunda también: «otro significado»."
  },
  {
    "id": "d196",
    "difficulty": "difícil",
    "clue": "La pata perdió su orden y apareció cubierta. (4)",
    "answer": "TAPA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Cubierta",
    "fodder": "PATA",
    "indicators": [
      "trastocada"
    ],
    "explanation": "«Cubierta» define TAPA; las letras de PATA se reordenan para formar TAPA."
  },
  {
    "id": "d197",
    "difficulty": "difícil",
    "clue": "La lisa perdió su orden y apareció tierra rodeada de agua. (4)",
    "answer": "ISLA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Tierra rodeada de agua",
    "fodder": "LISA",
    "indicators": [
      "desordenada"
    ],
    "explanation": "«Tierra rodeada de agua» define ISLA; las letras de LISA se reordenan para formar ISLA."
  },
  {
    "id": "d198",
    "difficulty": "difícil",
    "clue": "Relativo a la conducta; también puede tener otro sentido. (5)",
    "answer": "MORAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Relativo a la conducta",
    "fodder": "Relativo a la conducta",
    "indicators": [],
    "explanation": "La pista usa una doble definición para MORAL."
  },
  {
    "id": "d199",
    "difficulty": "difícil",
    "clue": "Indicio. En otro sentido, otro significado. (5)",
    "answer": "SENAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Indicio",
    "fodder": "Indicio",
    "indicators": [],
    "explanation": "La primera parte define SENAL: «Indicio». La segunda también: «otro significado»."
  },
  {
    "id": "d200",
    "difficulty": "difícil",
    "clue": "Marca estampada. En otro sentido, otro significado. (5)",
    "answer": "SELLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Marca estampada",
    "fodder": "Marca estampada",
    "indicators": [],
    "explanation": "La primera parte define SELLO: «Marca estampada». La segunda también: «otro significado»."
  },
  {
    "id": "d201",
    "difficulty": "difícil",
    "clue": "La noto perdió su orden y apareció altura de un sonido. (4)",
    "answer": "TONO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Altura de un sonido",
    "fodder": "NOTO",
    "indicators": [
      "alterado"
    ],
    "explanation": "«Altura de un sonido» define TONO; las letras de NOTO se reordenan para formar TONO."
  },
  {
    "id": "d202",
    "difficulty": "difícil",
    "clue": "La nace perdió su orden y apareció comida nocturna. (4)",
    "answer": "CENA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Comida nocturna",
    "fodder": "NACE",
    "indicators": [
      "reordenado"
    ],
    "explanation": "«Comida nocturna» define CENA; las letras de NACE se reordenan para formar CENA."
  },
  {
    "id": "d203",
    "difficulty": "difícil",
    "clue": "Hoja delgada en un contexto; otro significado en otro. (6)",
    "answer": "LAMINA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Hoja delgada",
    "fodder": "Hoja delgada",
    "indicators": [],
    "explanation": "La primera parte define LAMINA: «Hoja delgada». La segunda también: «otro significado»."
  },
  {
    "id": "d204",
    "difficulty": "difícil",
    "clue": "Parte del cuerpo; también otro significado. (6)",
    "answer": "CUELLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte del cuerpo",
    "fodder": "Parte del cuerpo",
    "indicators": [],
    "explanation": "La primera parte define CUELLO: «Parte del cuerpo». La segunda también: «otro significado»."
  },
  {
    "id": "d205",
    "difficulty": "difícil",
    "clue": "La isla perdió su orden y apareció sin rugosidades. (4)",
    "answer": "LISA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Sin rugosidades",
    "fodder": "ISLA",
    "indicators": [
      "revuelta"
    ],
    "explanation": "«Sin rugosidades» define LISA; las letras de ISLA se reordenan para formar LISA."
  },
  {
    "id": "d206",
    "difficulty": "difícil",
    "clue": "Grupo de alumnos; también otro significado. (5)",
    "answer": "CLASE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Grupo de alumnos",
    "fodder": "Grupo de alumnos",
    "indicators": [],
    "explanation": "La primera parte define CLASE: «Grupo de alumnos». La segunda también: «otro significado»."
  },
  {
    "id": "d207",
    "difficulty": "difícil",
    "clue": "Parte del cuerpo. En otro sentido, otro significado. (4)",
    "answer": "MANO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte del cuerpo",
    "fodder": "Parte del cuerpo",
    "indicators": [],
    "explanation": "La primera parte define MANO: «Parte del cuerpo». La segunda también: «otro significado»."
  },
  {
    "id": "d208",
    "difficulty": "difícil",
    "clue": "Espacio público; también puesto de trabajo. (5)",
    "answer": "PLAZA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio público",
    "fodder": "Espacio público",
    "indicators": [],
    "explanation": "La primera parte define PLAZA: «Espacio público». La segunda también: «puesto de trabajo»."
  },
  {
    "id": "d209",
    "difficulty": "difícil",
    "clue": "Llave. En otro sentido, dato que permite acceder. (5)",
    "answer": "CLAVE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Llave",
    "fodder": "Llave",
    "indicators": [],
    "explanation": "La primera parte define CLAVE: «Llave». La segunda también: «dato que permite acceder»."
  },
  {
    "id": "d210",
    "difficulty": "difícil",
    "clue": "Astro con cola, aunque también puede ser otro significado. (6)",
    "answer": "COMETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Astro con cola",
    "fodder": "Astro con cola",
    "indicators": [],
    "explanation": "La primera parte define COMETA: «Astro con cola». La segunda también: «otro significado»."
  },
  {
    "id": "d211",
    "difficulty": "difícil",
    "clue": "Marca dejada por un pie. En otro sentido, otro significado. (6)",
    "answer": "HUELLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Marca dejada por un pie",
    "fodder": "Marca dejada por un pie",
    "indicators": [],
    "explanation": "La primera parte define HUELLA: «Marca dejada por un pie». La segunda también: «otro significado»."
  },
  {
    "id": "d212",
    "difficulty": "difícil",
    "clue": "Objeto que abre; también solución. (5)",
    "answer": "LLAVE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que abre",
    "fodder": "Objeto que abre",
    "indicators": [],
    "explanation": "La primera parte define LLAVE: «Objeto que abre». La segunda también: «solución»."
  },
  {
    "id": "d213",
    "difficulty": "difícil",
    "clue": "La canto perdió su orden y apareció parte del calzado. (5)",
    "answer": "TACON",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Parte del calzado",
    "fodder": "CANTO",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Parte del calzado» define TACON; las letras de CANTO se reordenan para formar TACON."
  },
  {
    "id": "d214",
    "difficulty": "difícil",
    "clue": "Trazo, aunque también puede ser otro significado. (5)",
    "answer": "LINEA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Trazo",
    "fodder": "Trazo",
    "indicators": [],
    "explanation": "La primera parte define LINEA: «Trazo». La segunda también: «otro significado»."
  },
  {
    "id": "d215",
    "difficulty": "difícil",
    "clue": "La atar perdió su orden y apareció roedor. (4)",
    "answer": "RATA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Roedor",
    "fodder": "ATAR",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Roedor» define RATA; las letras de ATAR se reordenan para formar RATA."
  },
  {
    "id": "d216",
    "difficulty": "difícil",
    "clue": "Extensión de tierra; también puede tener otro sentido. (7)",
    "answer": "TERRENO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extensión de tierra",
    "fodder": "Extensión de tierra",
    "indicators": [],
    "explanation": "La pista usa una doble definición para TERRENO."
  },
  {
    "id": "d217",
    "difficulty": "difícil",
    "clue": "Espacio elevado para espectadores. En otro sentido, otro significado. (5)",
    "answer": "PALCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio elevado para espectadores",
    "fodder": "Espacio elevado para espectadores",
    "indicators": [],
    "explanation": "La primera parte define PALCO: «Espacio elevado para espectadores». La segunda también: «otro significado»."
  },
  {
    "id": "d218",
    "difficulty": "difícil",
    "clue": "La asir perdió su orden y apareció expresión de alegría. (4)",
    "answer": "RISA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Expresión de alegría",
    "fodder": "ASIR",
    "indicators": [
      "trastocada"
    ],
    "explanation": "«Expresión de alegría» define RISA; las letras de ASIR se reordenan para formar RISA."
  },
  {
    "id": "d219",
    "difficulty": "difícil",
    "clue": "Trozo de madera; también puede tener otro sentido. (4)",
    "answer": "PALO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Trozo de madera",
    "fodder": "Trozo de madera",
    "indicators": [],
    "explanation": "La pista usa una doble definición para PALO."
  },
  {
    "id": "d220",
    "difficulty": "difícil",
    "clue": "Para todos fue un rato inolvidable. (4)",
    "answer": "RATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Período breve",
    "fodder": "para todos fue un rato inolvidable.",
    "indicators": [
      "escondido"
    ],
    "explanation": "«Período breve» define RATO; la respuesta aparece escondida dentro de la frase."
  },
  {
    "id": "d221",
    "difficulty": "difícil",
    "clue": "Información; también otro significado. (4)",
    "answer": "DATO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Información",
    "fodder": "Información",
    "indicators": [],
    "explanation": "La primera parte define DATO: «Información». La segunda también: «otro significado»."
  },
  {
    "id": "d222",
    "difficulty": "difícil",
    "clue": "Tono visual. En otro sentido, otro significado. (5)",
    "answer": "COLOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tono visual",
    "fodder": "Tono visual",
    "indicators": [],
    "explanation": "La primera parte define COLOR: «Tono visual». La segunda también: «otro significado»."
  },
  {
    "id": "d223",
    "difficulty": "difícil",
    "clue": "Cantidad de materia en un contexto; otro significado en otro. (4)",
    "answer": "MASA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cantidad de materia",
    "fodder": "Cantidad de materia",
    "indicators": [],
    "explanation": "La primera parte define MASA: «Cantidad de materia». La segunda también: «otro significado»."
  },
  {
    "id": "d224",
    "difficulty": "difícil",
    "clue": "La sopa perdió su orden y apareció movimiento al caminar. (4)",
    "answer": "PASO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Movimiento al caminar",
    "fodder": "SOPA",
    "indicators": [
      "desordenada"
    ],
    "explanation": "«Movimiento al caminar» define PASO; las letras de SOPA se reordenan para formar PASO."
  },
  {
    "id": "d225",
    "difficulty": "difícil",
    "clue": "Inclinación; también otro significado. (9)",
    "answer": "PENDIENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Inclinación",
    "fodder": "Inclinación",
    "indicators": [],
    "explanation": "La primera parte define PENDIENTE: «Inclinación». La segunda también: «otro significado»."
  },
  {
    "id": "d226",
    "difficulty": "difícil",
    "clue": "Parte de una planta en un contexto; otro significado en otro. (4)",
    "answer": "HOJA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de una planta",
    "fodder": "Parte de una planta",
    "indicators": [],
    "explanation": "La primera parte define HOJA: «Parte de una planta». La segunda también: «otro significado»."
  },
  {
    "id": "d227",
    "difficulty": "difícil",
    "clue": "Superficie de visualización, aunque también puede ser otro significado. (8)",
    "answer": "PANTALLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie de visualización",
    "fodder": "Superficie de visualización",
    "indicators": [],
    "explanation": "La primera parte define PANTALLA: «Superficie de visualización». La segunda también: «otro significado»."
  },
  {
    "id": "d228",
    "difficulty": "difícil",
    "clue": "Conductor. En otro sentido, otro significado. (5)",
    "answer": "CABLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conductor",
    "fodder": "Conductor",
    "indicators": [],
    "explanation": "La primera parte define CABLE: «Conductor». La segunda también: «otro significado»."
  },
  {
    "id": "d229",
    "difficulty": "difícil",
    "clue": "Entrada, aunque también puede ser otro significado. (6)",
    "answer": "PUERTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Entrada",
    "fodder": "Entrada",
    "indicators": [],
    "explanation": "La primera parte define PUERTA: «Entrada». La segunda también: «otro significado»."
  },
  {
    "id": "d230",
    "difficulty": "difícil",
    "clue": "Órgano; también otro significado. (6)",
    "answer": "LENGUA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Órgano",
    "fodder": "Órgano",
    "indicators": [],
    "explanation": "La primera parte define LENGUA: «Órgano». La segunda también: «otro significado»."
  },
  {
    "id": "d231",
    "difficulty": "difícil",
    "clue": "Temperatura elevada, aunque también puede ser otro significado. (5)",
    "answer": "CALOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Temperatura elevada",
    "fodder": "Temperatura elevada",
    "indicators": [],
    "explanation": "La primera parte define CALOR: «Temperatura elevada». La segunda también: «otro significado»."
  },
  {
    "id": "d232",
    "difficulty": "difícil",
    "clue": "Lugar al que se llega en un contexto; otro significado en otro. (7)",
    "answer": "DESTINO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar al que se llega",
    "fodder": "Lugar al que se llega",
    "indicators": [],
    "explanation": "La primera parte define DESTINO: «Lugar al que se llega». La segunda también: «otro significado»."
  },
  {
    "id": "d233",
    "difficulty": "difícil",
    "clue": "Serie de fases en un contexto; otro significado en otro. (5)",
    "answer": "CICLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Serie de fases",
    "fodder": "Serie de fases",
    "indicators": [],
    "explanation": "La primera parte define CICLO: «Serie de fases». La segunda también: «otro significado»."
  },
  {
    "id": "d234",
    "difficulty": "difícil",
    "clue": "Sacerdote. En otro sentido, remedio. (4)",
    "answer": "CURA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sacerdote",
    "fodder": "Sacerdote",
    "indicators": [],
    "explanation": "La primera parte define CURA: «Sacerdote». La segunda también: «remedio»."
  },
  {
    "id": "d235",
    "difficulty": "difícil",
    "clue": "Prenda de vestir; también puede tener otro sentido. (8)",
    "answer": "CAMISETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda de vestir",
    "fodder": "Prenda de vestir",
    "indicators": [],
    "explanation": "La pista usa una doble definición para CAMISETA."
  },
  {
    "id": "d236",
    "difficulty": "difícil",
    "clue": "Sentimiento profundo. En otro sentido, otro significado. (4)",
    "answer": "AMOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sentimiento profundo",
    "fodder": "Sentimiento profundo",
    "indicators": [],
    "explanation": "La primera parte define AMOR: «Sentimiento profundo». La segunda también: «otro significado»."
  },
  {
    "id": "d237",
    "difficulty": "difícil",
    "clue": "Pelota de juego; también otro significado. (5)",
    "answer": "BALON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pelota de juego",
    "fodder": "Pelota de juego",
    "indicators": [],
    "explanation": "La primera parte define BALON: «Pelota de juego». La segunda también: «otro significado»."
  },
  {
    "id": "d238",
    "difficulty": "difícil",
    "clue": "La risa perdió su orden y apareció agarrar. (4)",
    "answer": "ASIR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Agarrar",
    "fodder": "RISA",
    "indicators": [
      "mezclada"
    ],
    "explanation": "«Agarrar» define ASIR; las letras de RISA se reordenan para formar ASIR."
  },
  {
    "id": "d239",
    "difficulty": "difícil",
    "clue": "Aro para el dedo. En otro sentido, otro significado. (6)",
    "answer": "ANILLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Aro para el dedo",
    "fodder": "Aro para el dedo",
    "indicators": [],
    "explanation": "La primera parte define ANILLO: «Aro para el dedo». La segunda también: «otro significado»."
  },
  {
    "id": "d240",
    "difficulty": "difícil",
    "clue": "La peras perdió su orden y apareció persona. (5)",
    "answer": "PRESA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Persona",
    "fodder": "PERAS",
    "indicators": [
      "desordenadas"
    ],
    "explanation": "«Persona» define PRESA; las letras de PERAS se reordenan para formar PRESA."
  },
  {
    "id": "d241",
    "difficulty": "difícil",
    "clue": "Dos veces en un contexto; otro significado en otro. (5)",
    "answer": "DOBLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Dos veces",
    "fodder": "Dos veces",
    "indicators": [],
    "explanation": "La primera parte define DOBLE: «Dos veces». La segunda también: «otro significado»."
  },
  {
    "id": "d242",
    "difficulty": "difícil",
    "clue": "Objeto que sostiene; también otro significado. (7)",
    "answer": "SOPORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que sostiene",
    "fodder": "Objeto que sostiene",
    "indicators": [],
    "explanation": "La primera parte define SOPORTE: «Objeto que sostiene». La segunda también: «otro significado»."
  },
  {
    "id": "d243",
    "difficulty": "difícil",
    "clue": "Luz portátil, aunque también puede ser otro significado. (8)",
    "answer": "LINTERNA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Luz portátil",
    "fodder": "Luz portátil",
    "indicators": [],
    "explanation": "La primera parte define LINTERNA: «Luz portátil». La segunda también: «otro significado»."
  },
  {
    "id": "d244",
    "difficulty": "difícil",
    "clue": "Línea alrededor de la cual gira algo; también otro significado. (3)",
    "answer": "EJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea alrededor de la cual gira algo",
    "fodder": "Línea alrededor de la cual gira algo",
    "indicators": [],
    "explanation": "La primera parte define EJE: «Línea alrededor de la cual gira algo». La segunda también: «otro significado»."
  },
  {
    "id": "d245",
    "difficulty": "difícil",
    "clue": "Nombre escrito. En otro sentido, otro significado. (5)",
    "answer": "FIRMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Nombre escrito",
    "fodder": "Nombre escrito",
    "indicators": [],
    "explanation": "La primera parte define FIRMA: «Nombre escrito». La segunda también: «otro significado»."
  },
  {
    "id": "d246",
    "difficulty": "difícil",
    "clue": "Línea aparente del cielo en un contexto; otro significado en otro. (9)",
    "answer": "HORIZONTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea aparente del cielo",
    "fodder": "Línea aparente del cielo",
    "indicators": [],
    "explanation": "La primera parte define HORIZONTE: «Línea aparente del cielo». La segunda también: «otro significado»."
  },
  {
    "id": "d247",
    "difficulty": "difícil",
    "clue": "Contorno lateral en un contexto; otro significado en otro. (6)",
    "answer": "PERFIL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Contorno lateral",
    "fodder": "Contorno lateral",
    "indicators": [],
    "explanation": "La primera parte define PERFIL: «Contorno lateral». La segunda también: «otro significado»."
  },
  {
    "id": "d248",
    "difficulty": "difícil",
    "clue": "Porción; también otro significado. (5)",
    "answer": "PARTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Porción",
    "fodder": "Porción",
    "indicators": [],
    "explanation": "La primera parte define PARTE: «Porción». La segunda también: «otro significado»."
  },
  {
    "id": "d249",
    "difficulty": "difícil",
    "clue": "La creaste perdió su orden y apareció salvamento. (7)",
    "answer": "RESCATE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Salvamento",
    "fodder": "CREASTE",
    "indicators": [
      "deshecho"
    ],
    "explanation": "«Salvamento» define RESCATE; las letras de CREASTE se reordenan para formar RESCATE."
  },
  {
    "id": "d250",
    "difficulty": "difícil",
    "clue": "Significado en un contexto; otro significado en otro. (7)",
    "answer": "SENTIDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Significado",
    "fodder": "Significado",
    "indicators": [],
    "explanation": "La primera parte define SENTIDO: «Significado». La segunda también: «otro significado»."
  },
  {
    "id": "d251",
    "difficulty": "difícil",
    "clue": "Acceso entre niveles; también puede tener otro sentido. (8)",
    "answer": "ESCALERA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acceso entre niveles",
    "fodder": "Acceso entre niveles",
    "indicators": [],
    "explanation": "La pista usa una doble definición para ESCALERA."
  },
  {
    "id": "d252",
    "difficulty": "difícil",
    "clue": "Rastro luminoso en un contexto; otro significado en otro. (6)",
    "answer": "ESTELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Rastro luminoso",
    "fodder": "Rastro luminoso",
    "indicators": [],
    "explanation": "La primera parte define ESTELA: «Rastro luminoso». La segunda también: «otro significado»."
  },
  {
    "id": "d253",
    "difficulty": "difícil",
    "clue": "Brinco. En otro sentido, otro significado. (5)",
    "answer": "SALTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Brinco",
    "fodder": "Brinco",
    "indicators": [],
    "explanation": "La primera parte define SALTO: «Brinco». La segunda también: «otro significado»."
  },
  {
    "id": "d254",
    "difficulty": "difícil",
    "clue": "El personaje soñador llevaba una mochila enorme. (4)",
    "answer": "PESO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Cantidad que se mide",
    "fodder": "el personaje soñador llevaba una mochila enorme.",
    "indicators": [
      "escondido"
    ],
    "explanation": "«Cantidad que se mide» define PESO; la respuesta aparece escondida dentro de la frase."
  },
  {
    "id": "d255",
    "difficulty": "difícil",
    "clue": "Protección. En otro sentido, otro significado. (6)",
    "answer": "ESCUDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Protección",
    "fodder": "Protección",
    "indicators": [],
    "explanation": "La primera parte define ESCUDO: «Protección». La segunda también: «otro significado»."
  },
  {
    "id": "d256",
    "difficulty": "difícil",
    "clue": "Objeto para guardar papeles; también puede tener otro sentido. (7)",
    "answer": "CARPETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto para guardar papeles",
    "fodder": "Objeto para guardar papeles",
    "indicators": [],
    "explanation": "La pista usa una doble definición para CARPETA."
  },
  {
    "id": "d257",
    "difficulty": "difícil",
    "clue": "Planeta. En otro sentido, otro significado. (6)",
    "answer": "TIERRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Planeta",
    "fodder": "Planeta",
    "indicators": [],
    "explanation": "La primera parte define TIERRA: «Planeta». La segunda también: «otro significado»."
  },
  {
    "id": "d258",
    "difficulty": "difícil",
    "clue": "Camino más corto. En otro sentido, otro significado. (5)",
    "answer": "ATAJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Camino más corto",
    "fodder": "Camino más corto",
    "indicators": [],
    "explanation": "La primera parte define ATAJO: «Camino más corto». La segunda también: «otro significado»."
  },
  {
    "id": "d259",
    "difficulty": "difícil",
    "clue": "La pane perdió su orden y apareció castigo. (4)",
    "answer": "PENA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Castigo",
    "fodder": "PANE",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Castigo» define PENA; las letras de PANE se reordenan para formar PENA."
  },
  {
    "id": "d260",
    "difficulty": "difícil",
    "clue": "Tira en un contexto; grupo musical en otro. (5)",
    "answer": "BANDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tira",
    "fodder": "Tira",
    "indicators": [],
    "explanation": "La primera parte define BANDA: «Tira». La segunda también: «grupo musical»."
  },
  {
    "id": "d261",
    "difficulty": "difícil",
    "clue": "Parte delantera; también línea de combate. (6)",
    "answer": "FRENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte delantera",
    "fodder": "Parte delantera",
    "indicators": [],
    "explanation": "La primera parte define FRENTE: «Parte delantera». La segunda también: «línea de combate»."
  },
  {
    "id": "d262",
    "difficulty": "difícil",
    "clue": "La rama perdió su orden y apareció querer. (4)",
    "answer": "AMAR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Querer",
    "fodder": "RAMA",
    "indicators": [
      "revuelta"
    ],
    "explanation": "«Querer» define AMAR; las letras de RAMA se reordenan para formar AMAR."
  },
  {
    "id": "d263",
    "difficulty": "difícil",
    "clue": "Signo ortográfico en un contexto; otro significado en otro. (6)",
    "answer": "ACENTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Signo ortográfico",
    "fodder": "Signo ortográfico",
    "indicators": [],
    "explanation": "La primera parte define ACENTO: «Signo ortográfico». La segunda también: «otro significado»."
  },
  {
    "id": "d264",
    "difficulty": "difícil",
    "clue": "Utensilio; también otro significado. (6)",
    "answer": "EMBUDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Utensilio",
    "fodder": "Utensilio",
    "indicators": [],
    "explanation": "La primera parte define EMBUDO: «Utensilio». La segunda también: «otro significado»."
  },
  {
    "id": "d265",
    "difficulty": "difícil",
    "clue": "Objeto; nace al quitar la última letra de cosas. (4)",
    "answer": "COSA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Objeto",
    "fodder": "COSAS",
    "indicators": [
      "pierde su cola"
    ],
    "explanation": "«Objeto» define COSA; COSAS sin su última letra da COSA."
  },
  {
    "id": "d266",
    "difficulty": "difícil",
    "clue": "Caminata; también puede tener otro sentido. (5)",
    "answer": "PASEO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Caminata",
    "fodder": "PA + SEO",
    "indicators": [],
    "explanation": "«Caminata» define PASEO. PA junto a SEO forma PASEO."
  },
  {
    "id": "d267",
    "difficulty": "difícil",
    "clue": "Embarcación en un contexto; espacio de una iglesia en otro. (4)",
    "answer": "NAVE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Embarcación",
    "fodder": "Embarcación",
    "indicators": [],
    "explanation": "La primera parte define NAVE: «Embarcación». La segunda también: «espacio de una iglesia»."
  },
  {
    "id": "d268",
    "difficulty": "difícil",
    "clue": "Fuerza hacia delante en un contexto; otro significado en otro. (6)",
    "answer": "EMPUJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuerza hacia delante",
    "fodder": "Fuerza hacia delante",
    "indicators": [],
    "explanation": "La primera parte define EMPUJE: «Fuerza hacia delante». La segunda también: «otro significado»."
  },
  {
    "id": "d269",
    "difficulty": "difícil",
    "clue": "Máquina, aunque también puede ser otro significado. (5)",
    "answer": "MOTOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Máquina",
    "fodder": "Máquina",
    "indicators": [],
    "explanation": "La primera parte define MOTOR: «Máquina». La segunda también: «otro significado»."
  },
  {
    "id": "d270",
    "difficulty": "difícil",
    "clue": "Superficie reflectante en un contexto; otro significado en otro. (6)",
    "answer": "ESPEJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie reflectante",
    "fodder": "Superficie reflectante",
    "indicators": [],
    "explanation": "La primera parte define ESPEJO: «Superficie reflectante». La segunda también: «otro significado»."
  },
  {
    "id": "d271",
    "difficulty": "difícil",
    "clue": "Parte inferior en un contexto; otro significado en otro. (5)",
    "answer": "FONDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte inferior",
    "fodder": "Parte inferior",
    "indicators": [],
    "explanation": "La primera parte define FONDO: «Parte inferior». La segunda también: «otro significado»."
  },
  {
    "id": "d272",
    "difficulty": "difícil",
    "clue": "Arma curva; también puede tener otro sentido. (4)",
    "answer": "ARCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Arma curva",
    "fodder": "Arma curva",
    "indicators": [],
    "explanation": "La pista usa una doble definición para ARCO."
  },
  {
    "id": "d273",
    "difficulty": "difícil",
    "clue": "Seguro. En otro sentido, otro significado. (5)",
    "answer": "FIRME",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Seguro",
    "fodder": "Seguro",
    "indicators": [],
    "explanation": "La primera parte define FIRME: «Seguro». La segunda también: «otro significado»."
  },
  {
    "id": "d274",
    "difficulty": "difícil",
    "clue": "Satélite de la Tierra; también otro significado. (4)",
    "answer": "LUNA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Satélite de la Tierra",
    "fodder": "Satélite de la Tierra",
    "indicators": [],
    "explanation": "La primera parte define LUNA: «Satélite de la Tierra». La segunda también: «otro significado»."
  },
  {
    "id": "d275",
    "difficulty": "difícil",
    "clue": "Recipiente. En otro sentido, otro significado. (4)",
    "answer": "CAJA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recipiente",
    "fodder": "Recipiente",
    "indicators": [],
    "explanation": "La primera parte define CAJA: «Recipiente». La segunda también: «otro significado»."
  },
  {
    "id": "d276",
    "difficulty": "difícil",
    "clue": "Parte trasera. En otro sentido, otro significado. (4)",
    "answer": "COLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte trasera",
    "fodder": "Parte trasera",
    "indicators": [],
    "explanation": "La primera parte define COLA: «Parte trasera». La segunda también: «otro significado»."
  },
  {
    "id": "d277",
    "difficulty": "difícil",
    "clue": "Asiento. En otro sentido, entidad financiera. (5)",
    "answer": "BANCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Asiento",
    "fodder": "Asiento",
    "indicators": [],
    "explanation": "La primera parte define BANCO: «Asiento». La segunda también: «entidad financiera»."
  },
  {
    "id": "d278",
    "difficulty": "difícil",
    "clue": "Fruta seca; nace al quitar la última letra de pasas. (4)",
    "answer": "PASA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Fruta seca",
    "fodder": "PASAS",
    "indicators": [
      "pierde su cola"
    ],
    "explanation": "«Fruta seca» define PASA; PASAS sin su última letra da PASA."
  },
  {
    "id": "d279",
    "difficulty": "difícil",
    "clue": "Tejido animal, aunque también puede ser otro significado. (5)",
    "answer": "CARNE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tejido animal",
    "fodder": "Tejido animal",
    "indicators": [],
    "explanation": "La primera parte define CARNE: «Tejido animal». La segunda también: «otro significado»."
  },
  {
    "id": "d280",
    "difficulty": "difícil",
    "clue": "Lugar para sentarse. En otro sentido, otro significado. (7)",
    "answer": "ASIENTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar para sentarse",
    "fodder": "Lugar para sentarse",
    "indicators": [],
    "explanation": "La primera parte define ASIENTO: «Lugar para sentarse». La segunda también: «otro significado»."
  },
  {
    "id": "d281",
    "difficulty": "experto",
    "clue": "Cabello; también otro significado. (4)",
    "answer": "PELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cabello",
    "fodder": "Cabello",
    "indicators": [],
    "explanation": "La primera parte define PELO: «Cabello». La segunda también: «otro significado»."
  },
  {
    "id": "d282",
    "difficulty": "experto",
    "clue": "Comida líquida; también puede tener otro sentido. (4)",
    "answer": "SOPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Comida líquida",
    "fodder": "Comida líquida",
    "indicators": [],
    "explanation": "La pista usa una doble definición para SOPA."
  },
  {
    "id": "d283",
    "difficulty": "experto",
    "clue": "Repetición de un sonido. En otro sentido, otro significado. (3)",
    "answer": "ECO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Repetición de un sonido",
    "fodder": "Repetición de un sonido",
    "indicators": [],
    "explanation": "La primera parte define ECO: «Repetición de un sonido». La segunda también: «otro significado»."
  },
  {
    "id": "d284",
    "difficulty": "experto",
    "clue": "Masa atmosférica en un contexto; otro significado en otro. (4)",
    "answer": "NUBE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Masa atmosférica",
    "fodder": "Masa atmosférica",
    "indicators": [],
    "explanation": "La primera parte define NUBE: «Masa atmosférica». La segunda también: «otro significado»."
  },
  {
    "id": "d285",
    "difficulty": "experto",
    "clue": "Pieza de juego. En otro sentido, otro significado. (5)",
    "answer": "FICHA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza de juego",
    "fodder": "Pieza de juego",
    "indicators": [],
    "explanation": "La primera parte define FICHA: «Pieza de juego». La segunda también: «otro significado»."
  },
  {
    "id": "d286",
    "difficulty": "experto",
    "clue": "Nombre de una obra, aunque también puede ser otro significado. (6)",
    "answer": "TITULO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Nombre de una obra",
    "fodder": "Nombre de una obra",
    "indicators": [],
    "explanation": "La primera parte define TITULO: «Nombre de una obra». La segunda también: «otro significado»."
  },
  {
    "id": "d287",
    "difficulty": "experto",
    "clue": "Comida mexicana: ocat vuelve sobre sus pasos. (4)",
    "answer": "TACO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Comida mexicana",
    "fodder": "OCAT",
    "indicators": [
      "retornado"
    ],
    "explanation": "«Comida mexicana» define TACO; OCAT al revés da TACO."
  },
  {
    "id": "d288",
    "difficulty": "experto",
    "clue": "Lado de una embarcación en un contexto; otro significado en otro. (5)",
    "answer": "BORDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lado de una embarcación",
    "fodder": "Lado de una embarcación",
    "indicators": [],
    "explanation": "La primera parte define BORDO: «Lado de una embarcación». La segunda también: «otro significado»."
  },
  {
    "id": "d289",
    "difficulty": "experto",
    "clue": "La rata perdió su orden y apareció sujetar con un nudo. (4)",
    "answer": "ATAR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Sujetar con un nudo",
    "fodder": "RATA",
    "indicators": [
      "mezclada"
    ],
    "explanation": "«Sujetar con un nudo» define ATAR; las letras de RATA se reordenan para formar ATAR."
  },
  {
    "id": "d290",
    "difficulty": "experto",
    "clue": "Acción de cortar, aunque también puede ser tribunal real. (5)",
    "answer": "CORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de cortar",
    "fodder": "Acción de cortar",
    "indicators": [],
    "explanation": "La primera parte define CORTE: «Acción de cortar». La segunda también: «tribunal real»."
  },
  {
    "id": "d291",
    "difficulty": "experto",
    "clue": "Tiempo vivido en un contexto; otro significado en otro. (4)",
    "answer": "EDAD",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tiempo vivido",
    "fodder": "Tiempo vivido",
    "indicators": [],
    "explanation": "La primera parte define EDAD: «Tiempo vivido». La segunda también: «otro significado»."
  },
  {
    "id": "d292",
    "difficulty": "experto",
    "clue": "Construcción junto al agua; también otro significado. (6)",
    "answer": "MUELLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Construcción junto al agua",
    "fodder": "Construcción junto al agua",
    "indicators": [],
    "explanation": "La primera parte define MUELLE: «Construcción junto al agua». La segunda también: «otro significado»."
  },
  {
    "id": "d293",
    "difficulty": "experto",
    "clue": "Espalda. En otro sentido, otro significado. (5)",
    "answer": "DORSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espalda",
    "fodder": "Espalda",
    "indicators": [],
    "explanation": "La primera parte define DORSO: «Espalda». La segunda también: «otro significado»."
  },
  {
    "id": "d294",
    "difficulty": "experto",
    "clue": "Extremo de un eje en un contexto; otro significado en otro. (4)",
    "answer": "POLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremo de un eje",
    "fodder": "Extremo de un eje",
    "indicators": [],
    "explanation": "La primera parte define POLO: «Extremo de un eje». La segunda también: «otro significado»."
  },
  {
    "id": "d295",
    "difficulty": "experto",
    "clue": "Embarcación. En otro sentido, otro significado. (5)",
    "answer": "BARCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Embarcación",
    "fodder": "Embarcación",
    "indicators": [],
    "explanation": "La primera parte define BARCO: «Embarcación». La segunda también: «otro significado»."
  },
  {
    "id": "d296",
    "difficulty": "experto",
    "clue": "Señal; también otro significado. (5)",
    "answer": "SIGNO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Señal",
    "fodder": "Señal",
    "indicators": [],
    "explanation": "La primera parte define SIGNO: «Señal». La segunda también: «otro significado»."
  },
  {
    "id": "d297",
    "difficulty": "experto",
    "clue": "Pieza metálica, aunque también puede ser otro significado. (5)",
    "answer": "CLAVO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza metálica",
    "fodder": "Pieza metálica",
    "indicators": [],
    "explanation": "La primera parte define CLAVO: «Pieza metálica». La segunda también: «otro significado»."
  },
  {
    "id": "d298",
    "difficulty": "experto",
    "clue": "Parte de un recorrido. En otro sentido, otro significado. (5)",
    "answer": "TRAMO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de un recorrido",
    "fodder": "Parte de un recorrido",
    "indicators": [],
    "explanation": "La primera parte define TRAMO: «Parte de un recorrido». La segunda también: «otro significado»."
  },
  {
    "id": "d299",
    "difficulty": "experto",
    "clue": "Extremo, aunque también puede ser otro significado. (4)",
    "answer": "CABO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremo",
    "fodder": "Extremo",
    "indicators": [],
    "explanation": "La primera parte define CABO: «Extremo». La segunda también: «otro significado»."
  },
  {
    "id": "d300",
    "difficulty": "experto",
    "clue": "Material textil en un contexto; otro significado en otro. (4)",
    "answer": "TELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material textil",
    "fodder": "Material textil",
    "indicators": [],
    "explanation": "La primera parte define TELA: «Material textil». La segunda también: «otro significado»."
  },
  {
    "id": "d301",
    "difficulty": "experto",
    "clue": "Instrumento para atacar, aunque también puede ser otro significado. (4)",
    "answer": "ARMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Instrumento para atacar",
    "fodder": "Instrumento para atacar",
    "indicators": [],
    "explanation": "La primera parte define ARMA: «Instrumento para atacar». La segunda también: «otro significado»."
  },
  {
    "id": "d302",
    "difficulty": "experto",
    "clue": "Desafío en un contexto; otro significado en otro. (4)",
    "answer": "RETO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Desafío",
    "fodder": "Desafío",
    "indicators": [],
    "explanation": "La primera parte define RETO: «Desafío». La segunda también: «otro significado»."
  },
  {
    "id": "d303",
    "difficulty": "experto",
    "clue": "Fragmento de texto; también lugar para pasar. (6)",
    "answer": "PASAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fragmento de texto",
    "fodder": "Fragmento de texto",
    "indicators": [],
    "explanation": "La primera parte define PASAJE: «Fragmento de texto». La segunda también: «lugar para pasar»."
  },
  {
    "id": "d304",
    "difficulty": "experto",
    "clue": "La moto dobló antes de llegar a la esquina. (4)",
    "answer": "MOTO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Vehículo de dos ruedas",
    "fodder": "la moto dobló antes de llegar a la esquina.",
    "indicators": [
      "escondido"
    ],
    "explanation": "«Vehículo de dos ruedas» define MOTO; la respuesta aparece escondida dentro de la frase."
  },
  {
    "id": "d305",
    "difficulty": "experto",
    "clue": "Casa, aunque también puede ser otro significado. (5)",
    "answer": "HOGAR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Casa",
    "fodder": "Casa",
    "indicators": [],
    "explanation": "La primera parte define HOGAR: «Casa». La segunda también: «otro significado»."
  },
  {
    "id": "d306",
    "difficulty": "experto",
    "clue": "La remaniro perdió su orden y apareció persona que trabaja en un barco. (8)",
    "answer": "MARINERO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Persona que trabaja en un barco",
    "fodder": "REMANIRO",
    "indicators": [
      "desordenado"
    ],
    "explanation": "«Persona que trabaja en un barco» define MARINERO; las letras de REMANIRO se reordenan para formar MARINERO."
  },
  {
    "id": "d307",
    "difficulty": "experto",
    "clue": "De sabor desagradable. En otro sentido, otro significado. (6)",
    "answer": "AMARGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "De sabor desagradable",
    "fodder": "De sabor desagradable",
    "indicators": [],
    "explanation": "La primera parte define AMARGO: «De sabor desagradable». La segunda también: «otro significado»."
  },
  {
    "id": "d308",
    "difficulty": "experto",
    "clue": "Animal andino. En otro sentido, otro significado. (5)",
    "answer": "LLAMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Animal andino",
    "fodder": "Animal andino",
    "indicators": [],
    "explanation": "La primera parte define LLAMA: «Animal andino». La segunda también: «otro significado»."
  },
  {
    "id": "d309",
    "difficulty": "experto",
    "clue": "Persona que acompaña; también otro significado. (9)",
    "answer": "COMPANERO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que acompaña",
    "fodder": "Persona que acompaña",
    "indicators": [],
    "explanation": "La primera parte define COMPANERO: «Persona que acompaña». La segunda también: «otro significado»."
  },
  {
    "id": "d310",
    "difficulty": "experto",
    "clue": "Objeto lanzado con arco. En otro sentido, otro significado. (6)",
    "answer": "FLECHA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto lanzado con arco",
    "fodder": "Objeto lanzado con arco",
    "indicators": [],
    "explanation": "La primera parte define FLECHA: «Objeto lanzado con arco». La segunda también: «otro significado»."
  },
  {
    "id": "d311",
    "difficulty": "experto",
    "clue": "Torre luminosa; también otro significado. (4)",
    "answer": "FARO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Torre luminosa",
    "fodder": "Torre luminosa",
    "indicators": [],
    "explanation": "La primera parte define FARO: «Torre luminosa». La segunda también: «otro significado»."
  },
  {
    "id": "d312",
    "difficulty": "experto",
    "clue": "Fuerza inicial, aunque también puede ser otro significado. (7)",
    "answer": "IMPULSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuerza inicial",
    "fodder": "Fuerza inicial",
    "indicators": [],
    "explanation": "La primera parte define IMPULSO: «Fuerza inicial». La segunda también: «otro significado»."
  },
  {
    "id": "d313",
    "difficulty": "experto",
    "clue": "Creación artística; también otro significado. (4)",
    "answer": "OBRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Creación artística",
    "fodder": "Creación artística",
    "indicators": [],
    "explanation": "La primera parte define OBRA: «Creación artística». La segunda también: «otro significado»."
  },
  {
    "id": "d314",
    "difficulty": "experto",
    "clue": "Terreno rural; también ámbito de actividad. (5)",
    "answer": "CAMPO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Terreno rural",
    "fodder": "Terreno rural",
    "indicators": [],
    "explanation": "La primera parte define CAMPO: «Terreno rural». La segunda también: «ámbito de actividad»."
  },
  {
    "id": "d315",
    "difficulty": "experto",
    "clue": "Conjunto de cables. En otro sentido, otro significado. (8)",
    "answer": "CABLEADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de cables",
    "fodder": "Conjunto de cables",
    "indicators": [],
    "explanation": "La primera parte define CABLEADO: «Conjunto de cables». La segunda también: «otro significado»."
  },
  {
    "id": "d316",
    "difficulty": "experto",
    "clue": "Sonido humano. En otro sentido, otro significado. (3)",
    "answer": "VOZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sonido humano",
    "fodder": "Sonido humano",
    "indicators": [],
    "explanation": "La primera parte define VOZ: «Sonido humano». La segunda también: «otro significado»."
  },
  {
    "id": "d317",
    "difficulty": "experto",
    "clue": "Borde en un contexto; otro significado en otro. (6)",
    "answer": "MARGEN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde",
    "fodder": "Borde",
    "indicators": [],
    "explanation": "La primera parte define MARGEN: «Borde». La segunda también: «otro significado»."
  },
  {
    "id": "d318",
    "difficulty": "experto",
    "clue": "Color en un contexto; otro significado en otro. (4)",
    "answer": "ROJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Color",
    "fodder": "Color",
    "indicators": [],
    "explanation": "La primera parte define ROJO: «Color». La segunda también: «otro significado»."
  },
  {
    "id": "d319",
    "difficulty": "experto",
    "clue": "La limanera estaba cargada de fruta. (4)",
    "answer": "LIMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Fruta cítrica",
    "fodder": "la limanera estaba cargada de fruta.",
    "indicators": [
      "escondido"
    ],
    "explanation": "«Fruta cítrica» define LIMA; la respuesta aparece escondida dentro de la frase."
  },
  {
    "id": "d320",
    "difficulty": "experto",
    "clue": "Descarga eléctrica. En otro sentido, otro significado. (4)",
    "answer": "RAYO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Descarga eléctrica",
    "fodder": "Descarga eléctrica",
    "indicators": [],
    "explanation": "La primera parte define RAYO: «Descarga eléctrica». La segunda también: «otro significado»."
  },
  {
    "id": "d321",
    "difficulty": "experto",
    "clue": "Palo de béisbol; también otro significado. (4)",
    "answer": "BATE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Palo de béisbol",
    "fodder": "Palo de béisbol",
    "indicators": [],
    "explanation": "La primera parte define BATE: «Palo de béisbol». La segunda también: «otro significado»."
  },
  {
    "id": "d322",
    "difficulty": "experto",
    "clue": "Señal pequeña en un contexto; momento determinado en otro. (5)",
    "answer": "PUNTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Señal pequeña",
    "fodder": "Señal pequeña",
    "indicators": [],
    "explanation": "La primera parte define PUNTO: «Señal pequeña». La segunda también: «momento determinado»."
  },
  {
    "id": "d323",
    "difficulty": "experto",
    "clue": "La gola perdió su orden y apareció masa de agua interior. (4)",
    "answer": "LAGO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Masa de agua interior",
    "fodder": "GOLA",
    "indicators": [
      "trastocada"
    ],
    "explanation": "«Masa de agua interior» define LAGO; las letras de GOLA se reordenan para formar LAGO."
  },
  {
    "id": "d324",
    "difficulty": "experto",
    "clue": "Parte del árbol, aunque también puede ser otro significado. (6)",
    "answer": "TRONCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte del árbol",
    "fodder": "Parte del árbol",
    "indicators": [],
    "explanation": "La primera parte define TRONCO: «Parte del árbol». La segunda también: «otro significado»."
  },
  {
    "id": "d325",
    "difficulty": "experto",
    "clue": "Motivo, aunque también puede ser otro significado. (5)",
    "answer": "CAUSA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Motivo",
    "fodder": "Motivo",
    "indicators": [],
    "explanation": "La primera parte define CAUSA: «Motivo». La segunda también: «otro significado»."
  },
  {
    "id": "d326",
    "difficulty": "experto",
    "clue": "Abertura en una pared; también puede tener otro sentido. (7)",
    "answer": "VENTANA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Abertura en una pared",
    "fodder": "Abertura en una pared",
    "indicators": [],
    "explanation": "La pista usa una doble definición para VENTANA."
  },
  {
    "id": "d327",
    "difficulty": "experto",
    "clue": "Advertencia en un contexto; otro significado en otro. (5)",
    "answer": "AVISO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Advertencia",
    "fodder": "Advertencia",
    "indicators": [],
    "explanation": "La primera parte define AVISO: «Advertencia». La segunda también: «otro significado»."
  },
  {
    "id": "d328",
    "difficulty": "experto",
    "clue": "La tacon perdió su orden y apareció acción de cantar. (5)",
    "answer": "CANTO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Acción de cantar",
    "fodder": "TACON",
    "indicators": [
      "desordenado"
    ],
    "explanation": "«Acción de cantar» define CANTO; las letras de TACON se reordenan para formar CANTO."
  },
  {
    "id": "d329",
    "difficulty": "experto",
    "clue": "La secuele perdió su orden y apareció lugar donde se aprende. (7)",
    "answer": "ESCUELA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Lugar donde se aprende",
    "fodder": "SECUELE",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Lugar donde se aprende» define ESCUELA; las letras de SECUELE se reordenan para formar ESCUELA."
  },
  {
    "id": "d330",
    "difficulty": "experto",
    "clue": "Persona que juzga en un contexto; otro significado en otro. (4)",
    "answer": "JUEZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que juzga",
    "fodder": "Persona que juzga",
    "indicators": [],
    "explanation": "La primera parte define JUEZ: «Persona que juzga». La segunda también: «otro significado»."
  },
  {
    "id": "d331",
    "difficulty": "experto",
    "clue": "Lugar de trenes en un contexto; otro significado en otro. (8)",
    "answer": "ESTACION",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar de trenes",
    "fodder": "Lugar de trenes",
    "indicators": [],
    "explanation": "La primera parte define ESTACION: «Lugar de trenes». La segunda también: «otro significado»."
  },
  {
    "id": "d332",
    "difficulty": "experto",
    "clue": "Extremidad en un contexto; otro significado en otro. (3)",
    "answer": "PIE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremidad",
    "fodder": "Extremidad",
    "indicators": [],
    "explanation": "La primera parte define PIE: «Extremidad». La segunda también: «otro significado»."
  },
  {
    "id": "d333",
    "difficulty": "experto",
    "clue": "Conjunto ordenado; también otro significado. (5)",
    "answer": "SERIE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto ordenado",
    "fodder": "Conjunto ordenado",
    "indicators": [],
    "explanation": "La primera parte define SERIE: «Conjunto ordenado». La segunda también: «otro significado»."
  },
  {
    "id": "d334",
    "difficulty": "experto",
    "clue": "Punto de conexión; también otro significado. (4)",
    "answer": "NODO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Punto de conexión",
    "fodder": "Punto de conexión",
    "indicators": [],
    "explanation": "La primera parte define NODO: «Punto de conexión». La segunda también: «otro significado»."
  },
  {
    "id": "d335",
    "difficulty": "experto",
    "clue": "Articulación, aunque también puede ser otro significado. (4)",
    "answer": "CODO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Articulación",
    "fodder": "Articulación",
    "indicators": [],
    "explanation": "La primera parte define CODO: «Articulación». La segunda también: «otro significado»."
  },
  {
    "id": "d336",
    "difficulty": "experto",
    "clue": "Trayecto; también puede tener otro sentido. (6)",
    "answer": "CAMINO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Trayecto",
    "fodder": "CA + MI + NO",
    "indicators": [],
    "explanation": "«Trayecto» define CAMINO. Un trayecto se arma con CA, MI y NO, unidos sin separación."
  },
  {
    "id": "d337",
    "difficulty": "experto",
    "clue": "Sentido. En otro sentido, otro significado. (5)",
    "answer": "VISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sentido",
    "fodder": "Sentido",
    "indicators": [],
    "explanation": "La primera parte define VISTA: «Sentido». La segunda también: «otro significado»."
  },
  {
    "id": "d338",
    "difficulty": "experto",
    "clue": "Impacto. En otro sentido, otro significado. (5)",
    "answer": "GOLPE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Impacto",
    "fodder": "Impacto",
    "indicators": [],
    "explanation": "La primera parte define GOLPE: «Impacto». La segunda también: «otro significado»."
  },
  {
    "id": "d339",
    "difficulty": "experto",
    "clue": "Del mar; también puede tener otro sentido. (6)",
    "answer": "MARINO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Del mar",
    "fodder": "MAR + INO",
    "indicators": [],
    "explanation": "«Del mar» define MARINO. MAR seguido de INO forma MARINO."
  },
  {
    "id": "d340",
    "difficulty": "experto",
    "clue": "Apariencia; también otro significado. (5)",
    "answer": "PINTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Apariencia",
    "fodder": "Apariencia",
    "indicators": [],
    "explanation": "La primera parte define PINTA: «Apariencia». La segunda también: «otro significado»."
  },
  {
    "id": "d341",
    "difficulty": "experto",
    "clue": "Parte circular en un contexto; otro significado en otro. (4)",
    "answer": "RODA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte circular",
    "fodder": "Parte circular",
    "indicators": [],
    "explanation": "La primera parte define RODA: «Parte circular». La segunda también: «otro significado»."
  },
  {
    "id": "d342",
    "difficulty": "experto",
    "clue": "Adelanto en un contexto; otro significado en otro. (6)",
    "answer": "AVANCE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Adelanto",
    "fodder": "Adelanto",
    "indicators": [],
    "explanation": "La primera parte define AVANCE: «Adelanto». La segunda también: «otro significado»."
  },
  {
    "id": "d343",
    "difficulty": "experto",
    "clue": "Construcción alta; también otro significado. (5)",
    "answer": "TORRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Construcción alta",
    "fodder": "Construcción alta",
    "indicators": [],
    "explanation": "La primera parte define TORRE: «Construcción alta». La segunda también: «otro significado»."
  },
  {
    "id": "d344",
    "difficulty": "experto",
    "clue": "La saca perdió su orden y apareció vivienda. (4)",
    "answer": "CASA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Vivienda",
    "fodder": "SACA",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Vivienda» define CASA; las letras de SACA se reordenan para formar CASA."
  },
  {
    "id": "d345",
    "difficulty": "experto",
    "clue": "Pieza alargada; también local de bebidas. (5)",
    "answer": "BARRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza alargada",
    "fodder": "Pieza alargada",
    "indicators": [],
    "explanation": "La primera parte define BARRA: «Pieza alargada». La segunda también: «local de bebidas»."
  },
  {
    "id": "d346",
    "difficulty": "experto",
    "clue": "Suelo. En otro sentido, otro significado. (4)",
    "answer": "PISO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Suelo",
    "fodder": "Suelo",
    "indicators": [],
    "explanation": "La primera parte define PISO: «Suelo». La segunda también: «otro significado»."
  },
  {
    "id": "d347",
    "difficulty": "experto",
    "clue": "La tapa perdió su orden y apareció extremidad de un animal. (4)",
    "answer": "PATA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Extremidad de un animal",
    "fodder": "TAPA",
    "indicators": [
      "alterada"
    ],
    "explanation": "«Extremidad de un animal» define PATA; las letras de TAPA se reordenan para formar PATA."
  },
  {
    "id": "d348",
    "difficulty": "experto",
    "clue": "Señal; también empresa comercial. (5)",
    "answer": "MARCA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Señal",
    "fodder": "Señal",
    "indicators": [],
    "explanation": "La primera parte define MARCA: «Señal». La segunda también: «empresa comercial»."
  },
  {
    "id": "d349",
    "difficulty": "experto",
    "clue": "Altura en un contexto; instrumento para comprobar horizontalidad en otro. (5)",
    "answer": "NIVEL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Altura",
    "fodder": "Altura",
    "indicators": [],
    "explanation": "La primera parte define NIVEL: «Altura». La segunda también: «instrumento para comprobar horizontalidad»."
  },
  {
    "id": "d350",
    "difficulty": "experto",
    "clue": "Rastro, aunque también puede ser otro significado. (5)",
    "answer": "PISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Rastro",
    "fodder": "Rastro",
    "indicators": [],
    "explanation": "La primera parte define PISTA: «Rastro». La segunda también: «otro significado»."
  },
  {
    "id": "d351",
    "difficulty": "experto",
    "clue": "Canal para transportar algo. En otro sentido, otro significado. (8)",
    "answer": "CONDUCTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Canal para transportar algo",
    "fodder": "Canal para transportar algo",
    "indicators": [],
    "explanation": "La primera parte define CONDUCTO: «Canal para transportar algo». La segunda también: «otro significado»."
  },
  {
    "id": "d352",
    "difficulty": "experto",
    "clue": "Cubo de juego; también otro significado. (4)",
    "answer": "DADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cubo de juego",
    "fodder": "Cubo de juego",
    "indicators": [],
    "explanation": "La primera parte define DADO: «Cubo de juego». La segunda también: «otro significado»."
  },
  {
    "id": "d353",
    "difficulty": "experto",
    "clue": "La amor perdió su orden y apareció ciudad italiana. (4)",
    "answer": "ROMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Ciudad italiana",
    "fodder": "AMOR",
    "indicators": [
      "de vuelta"
    ],
    "explanation": "«Ciudad italiana» define ROMA; las letras de AMOR se reordenan para formar ROMA."
  },
  {
    "id": "d354",
    "difficulty": "experto",
    "clue": "Instrumento para pesar; nace al quitar la última letra de pesas. (4)",
    "answer": "PESA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Instrumento para pesar",
    "fodder": "PESAS",
    "indicators": [
      "pierde su cola"
    ],
    "explanation": "«Instrumento para pesar» define PESA; PESAS sin su última letra da PESA."
  },
  {
    "id": "d355",
    "difficulty": "experto",
    "clue": "Borde de un sólido; también otro significado. (6)",
    "answer": "ARISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde de un sólido",
    "fodder": "Borde de un sólido",
    "indicators": [],
    "explanation": "La primera parte define ARISTA: «Borde de un sólido». La segunda también: «otro significado»."
  },
  {
    "id": "d356",
    "difficulty": "experto",
    "clue": "Empató todavía con tiempo para reaccionar. (4)",
    "answer": "PATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Ave acuática",
    "fodder": "empató todavía con tiempo para reaccionar.",
    "indicators": [
      "escondido"
    ],
    "explanation": "«Ave acuática» define PATO; la respuesta aparece escondida dentro de la frase."
  }
];
