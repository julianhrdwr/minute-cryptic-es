// Banco de 356 pistas — dificultad alta, superficies naturales y mecanismos mezclados.
const MECHANISM_INDICATORS = {
  anagram:{medio:["revuelto","mezclado"],medioDificil:["trastocado","enredado"],dificil:["fuera de lugar","sin orden"],muyDificil:["descolocado","barajado"]},
  hidden:{medio:["oculto","escondido"],medioDificil:["camuflado","metido en"],dificil:["perdido entre","disimulado en"]},
  deletion:{medio:["sin","quitando"],medioDificil:["dejando fuera","al perder"],dificil:["tras perder","desprovisto de"]},
  reversal:{medio:["al revés","de vuelta"],medioDificil:["volviendo","hacia atrás"],dificil:["en sentido contrario","reflejado"]},
  charade:{medio:["con","más"],medioDificil:["junto a","pegado a"],dificil:["encadenado con","a continuación de"]},
  homophone:{medio:["al sonar","de oído"],medioDificil:["por cómo suena"],dificil:["como se escucha"]},
  initials:{medio:["al principio","iniciales"],medioDificil:["primeras letras"],dificil:["por sus comienzos"]},
  finals:{medio:["al final","últimas"],medioDificil:["por sus finales"],dificil:["en sus terminaciones"]},
  container:{medio:["dentro de","rodeando"],medioDificil:["envolviendo","abarcando"],dificil:["englobando","cerrando sobre"]}
};
const ANAGRAM_INDICATORS = MECHANISM_INDICATORS.anagram;

const PUZZLES = [
  {
    "id": "d001",
    "difficulty": "medio-dificil",
    "clue": "Estable; también terreno que no cede. (5)",
    "answer": "FIRME",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Estable",
    "fodder": "terreno que no cede",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a FIRME: «Estable» y «terreno que no cede»."
  },
  {
    "id": "d002",
    "difficulty": "medio-dificil",
    "clue": "Línea alrededor de la que gira algo; también idea central. (3)",
    "answer": "EJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea alrededor de la que gira algo",
    "fodder": "idea central",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a EJE: «Línea alrededor de la que gira algo» y «idea central»."
  },
  {
    "id": "d003",
    "difficulty": "medio-dificil",
    "clue": "Lugar donde se detiene un transporte; también interrupción de una actividad. (6)",
    "answer": "PARADA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar donde se detiene un transporte",
    "fodder": "interrupción de una actividad",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PARADA: «Lugar donde se detiene un transporte» y «interrupción de una actividad»."
  },
  {
    "id": "d004",
    "difficulty": "medio-dificil",
    "clue": "Lugar para sentarse; también anotación contable. (7)",
    "answer": "ASIENTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar para sentarse",
    "fodder": "anotación contable",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ASIENTO: «Lugar para sentarse» y «anotación contable»."
  },
  {
    "id": "d005",
    "difficulty": "medio-dificil",
    "clue": "Parte inferior; también contenido esencial. (5)",
    "answer": "FONDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte inferior",
    "fodder": "contenido esencial",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a FONDO: «Parte inferior» y «contenido esencial»."
  },
  {
    "id": "d006",
    "difficulty": "medio-dificil",
    "clue": "Camino previsto, escondida en fruta. (4)",
    "answer": "RUTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Camino previsto",
    "fodder": "fruta",
    "indicators": [
      "escondida en"
    ],
    "explanation": "RUTA aparece de forma continua dentro de «fruta». La definición es «Camino previsto»."
  },
  {
    "id": "d007",
    "difficulty": "medio-dificil",
    "clue": "Elevación pequeña del terreno; también montículo. (5)",
    "answer": "CERRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Elevación pequeña del terreno",
    "fodder": "montículo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CERRO: «Elevación pequeña del terreno» y «montículo»."
  },
  {
    "id": "d008",
    "difficulty": "medio-dificil",
    "clue": "Superficie donde se muestra una imagen; también persona que protege a otra. (8)",
    "answer": "PANTALLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie donde se muestra una imagen",
    "fodder": "persona que protege a otra",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PANTALLA: «Superficie donde se muestra una imagen» y «persona que protege a otra»."
  },
  {
    "id": "d009",
    "difficulty": "medio-dificil",
    "clue": "Tira o franja; también grupo musical. (5)",
    "answer": "BANDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tira o franja",
    "fodder": "grupo musical",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BANDA: «Tira o franja» y «grupo musical»."
  },
  {
    "id": "d010",
    "difficulty": "medio-dificil",
    "clue": "De gran altura; también detención o parada. (4)",
    "answer": "ALTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "De gran altura",
    "fodder": "detención o parada",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ALTO: «De gran altura» y «detención o parada»."
  },
  {
    "id": "d011",
    "difficulty": "medio-dificil",
    "clue": "Parte posterior del pie; también parte final de un documento. (5)",
    "answer": "TALON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte posterior del pie",
    "fodder": "parte final de un documento",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TALON: «Parte posterior del pie» y «parte final de un documento»."
  },
  {
    "id": "d012",
    "difficulty": "medio-dificil",
    "clue": "Superficie para escribir; también marcador táctico de un entrenador. (7)",
    "answer": "PIZARRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie para escribir",
    "fodder": "marcador táctico de un entrenador",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PIZARRA: «Superficie para escribir» y «marcador táctico de un entrenador»."
  },
  {
    "id": "d013",
    "difficulty": "medio-dificil",
    "clue": "Piedra grande: arco quedó trastocado. (4)",
    "answer": "ROCA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Piedra grande",
    "fodder": "arco",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «arco» se reordenan para formar ROCA; la definición es «Piedra grande»."
  },
  {
    "id": "d014",
    "difficulty": "medio-dificil",
    "clue": "Tira estrecha de material; también película grabada. (5)",
    "answer": "CINTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tira estrecha de material",
    "fodder": "película grabada",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CINTA: «Tira estrecha de material» y «película grabada»."
  },
  {
    "id": "d015",
    "difficulty": "medio-dificil",
    "clue": "Sujetar con una cuerda: rata vuelto. (4)",
    "answer": "ATAR",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Sujetar con una cuerda",
    "fodder": "rata",
    "indicators": [
      "vuelto"
    ],
    "explanation": "«rata» al revés forma ATAR; la definición es «Sujetar con una cuerda»."
  },
  {
    "id": "d016",
    "difficulty": "medio-dificil",
    "clue": "Embarcación: barcos sin su s. (5)",
    "answer": "BARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Embarcación",
    "fodder": "barcos",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «barcos» para obtener BARCO; la definición es «Embarcación»."
  },
  {
    "id": "d017",
    "difficulty": "medio-dificil",
    "clue": "Borde de un sólido; también cresta o línea de encuentro. (6)",
    "answer": "ARISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde de un sólido",
    "fodder": "cresta o línea de encuentro",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ARISTA: «Borde de un sólido» y «cresta o línea de encuentro»."
  },
  {
    "id": "d018",
    "difficulty": "medio-dificil",
    "clue": "Representación mental: ideas sin su s. (4)",
    "answer": "IDEA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Representación mental",
    "fodder": "ideas",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «ideas» para obtener IDEA; la definición es «Representación mental»."
  },
  {
    "id": "d019",
    "difficulty": "medio-dificil",
    "clue": "De sabor azucarado; también persona amable. (5)",
    "answer": "DULCE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "De sabor azucarado",
    "fodder": "persona amable",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DULCE: «De sabor azucarado» y «persona amable»."
  },
  {
    "id": "d020",
    "difficulty": "medio-dificil",
    "clue": "Parte superior de una habitación; también límite máximo. (5)",
    "answer": "TECHO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte superior de una habitación",
    "fodder": "límite máximo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TECHO: «Parte superior de una habitación» y «límite máximo»."
  },
  {
    "id": "d021",
    "difficulty": "medio-dificil",
    "clue": "Parte frontal de la cabeza; también superficie de una moneda. (4)",
    "answer": "CARA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte frontal de la cabeza",
    "fodder": "superficie de una moneda",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CARA: «Parte frontal de la cabeza» y «superficie de una moneda»."
  },
  {
    "id": "d022",
    "difficulty": "medio-dificil",
    "clue": "Órgano de la boca; también idioma. (6)",
    "answer": "LENGUA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Órgano de la boca",
    "fodder": "idioma",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a LENGUA: «Órgano de la boca» y «idioma»."
  },
  {
    "id": "d023",
    "difficulty": "medio-dificil",
    "clue": "Persona que actúa en nombre de otra; también sustancia que produce un efecto. (6)",
    "answer": "AGENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que actúa en nombre de otra",
    "fodder": "sustancia que produce un efecto",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a AGENTE: «Persona que actúa en nombre de otra» y «sustancia que produce un efecto»."
  },
  {
    "id": "d024",
    "difficulty": "medio-dificil",
    "clue": "Estructura para embarcaciones; también pieza elástica. (6)",
    "answer": "MUELLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Estructura para embarcaciones",
    "fodder": "pieza elástica",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MUELLE: «Estructura para embarcaciones» y «pieza elástica»."
  },
  {
    "id": "d025",
    "difficulty": "medio-dificil",
    "clue": "Caja para recibir cartas; también compartimento de recepción. (5)",
    "answer": "BUZON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Caja para recibir cartas",
    "fodder": "compartimento de recepción",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BUZON: «Caja para recibir cartas» y «compartimento de recepción»."
  },
  {
    "id": "d026",
    "difficulty": "medio-dificil",
    "clue": "Montón de objetos; también dispositivo que produce electricidad. (4)",
    "answer": "PILA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Montón de objetos",
    "fodder": "dispositivo que produce electricidad",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PILA: «Montón de objetos» y «dispositivo que produce electricidad»."
  },
  {
    "id": "d027",
    "difficulty": "medio-dificil",
    "clue": "Espacio sobre nuestras cabezas; también techo de una habitación en sentido figurado. (5)",
    "answer": "CIELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio sobre nuestras cabezas",
    "fodder": "techo de una habitación en sentido figurado",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CIELO: «Espacio sobre nuestras cabezas» y «techo de una habitación en sentido figurado»."
  },
  {
    "id": "d028",
    "difficulty": "medio-dificil",
    "clue": "Color de la sangre; también persona comunista, coloquial. (4)",
    "answer": "ROJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Color de la sangre",
    "fodder": "persona comunista, coloquial",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ROJO: «Color de la sangre» y «persona comunista, coloquial»."
  },
  {
    "id": "d029",
    "difficulty": "medio-dificil",
    "clue": "Tejido muscular animal; también pulpa comestible. (5)",
    "answer": "CARNE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tejido muscular animal",
    "fodder": "pulpa comestible",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CARNE: «Tejido muscular animal» y «pulpa comestible»."
  },
  {
    "id": "d030",
    "difficulty": "medio-dificil",
    "clue": "Relativo a la conducta; también ánimo. (5)",
    "answer": "MORAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Relativo a la conducta",
    "fodder": "ánimo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MORAL: «Relativo a la conducta» y «ánimo»."
  },
  {
    "id": "d031",
    "difficulty": "medio-dificil",
    "clue": "Protección para la cabeza; también parte exterior de una nave. (5)",
    "answer": "CASCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Protección para la cabeza",
    "fodder": "parte exterior de una nave",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CASCO: «Protección para la cabeza» y «parte exterior de una nave»."
  },
  {
    "id": "d032",
    "difficulty": "medio-dificil",
    "clue": "Conductor de electricidad: cables sin su s. (5)",
    "answer": "CABLE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Conductor de electricidad",
    "fodder": "cables",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «cables» para obtener CABLE; la definición es «Conductor de electricidad»."
  },
  {
    "id": "d033",
    "difficulty": "medio-dificil",
    "clue": "Rúbrica personal; también empresa o marca de autor. (5)",
    "answer": "FIRMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Rúbrica personal",
    "fodder": "empresa o marca de autor",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a FIRMA: «Rúbrica personal» y «empresa o marca de autor»."
  },
  {
    "id": "d034",
    "difficulty": "medio-dificil",
    "clue": "Principio espiritual: mala quedó trastocado. (4)",
    "answer": "ALMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Principio espiritual",
    "fodder": "mala",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «mala» se reordenan para formar ALMA; la definición es «Principio espiritual»."
  },
  {
    "id": "d035",
    "difficulty": "medio-dificil",
    "clue": "Unidad de medida; también nivel o categoría. (5)",
    "answer": "GRADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Unidad de medida",
    "fodder": "nivel o categoría",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a GRADO: «Unidad de medida» y «nivel o categoría»."
  },
  {
    "id": "d036",
    "difficulty": "medio-dificil",
    "clue": "Conjunto ordenado; también programa televisivo. (5)",
    "answer": "SERIE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto ordenado",
    "fodder": "programa televisivo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a SERIE: «Conjunto ordenado» y «programa televisivo»."
  },
  {
    "id": "d037",
    "difficulty": "medio-dificil",
    "clue": "Porción de un todo: partes sin su s. (5)",
    "answer": "PARTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Porción de un todo",
    "fodder": "partes",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «partes» para obtener PARTE; la definición es «Porción de un todo»."
  },
  {
    "id": "d038",
    "difficulty": "medio-dificil",
    "clue": "Indicio que comunica algo; también marca para orientar. (5)",
    "answer": "SENAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Indicio que comunica algo",
    "fodder": "marca para orientar",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a SENAL: «Indicio que comunica algo» y «marca para orientar»."
  },
  {
    "id": "d039",
    "difficulty": "medio-dificil",
    "clue": "Asiento alargado: blanco sin su l. (5)",
    "answer": "BANCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Asiento alargado",
    "fodder": "blanco",
    "indicators": [
      "sin su l"
    ],
    "explanation": "Se quita la letra «l» de «blanco» para obtener BANCO; la definición es «Asiento alargado»."
  },
  {
    "id": "d040",
    "difficulty": "medio-dificil",
    "clue": "Recorrido cerrado; también conjunto de componentes eléctricos. (8)",
    "answer": "CIRCUITO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recorrido cerrado",
    "fodder": "conjunto de componentes eléctricos",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CIRCUITO: «Recorrido cerrado» y «conjunto de componentes eléctricos»."
  },
  {
    "id": "d041",
    "difficulty": "dificil",
    "clue": "Espacio abierto dentro de una vivienda; también zona interior de un edificio. (5)",
    "answer": "PATIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio abierto dentro de una vivienda",
    "fodder": "zona interior de un edificio",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PATIO: «Espacio abierto dentro de una vivienda» y «zona interior de un edificio»."
  },
  {
    "id": "d042",
    "difficulty": "dificil",
    "clue": "Obra pictórica; también marco o conjunto. (6)",
    "answer": "CUADRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Obra pictórica",
    "fodder": "marco o conjunto",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CUADRO: «Obra pictórica» y «marco o conjunto»."
  },
  {
    "id": "d043",
    "difficulty": "dificil",
    "clue": "Borde de una página; también diferencia o espacio disponible. (6)",
    "answer": "MARGEN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde de una página",
    "fodder": "diferencia o espacio disponible",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MARGEN: «Borde de una página» y «diferencia o espacio disponible»."
  },
  {
    "id": "d044",
    "difficulty": "dificil",
    "clue": "Bolsa grande: ocas vuelto. (4)",
    "answer": "SACO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Bolsa grande",
    "fodder": "ocas",
    "indicators": [
      "vuelto"
    ],
    "explanation": "«ocas» al revés forma SACO; la definición es «Bolsa grande»."
  },
  {
    "id": "d045",
    "difficulty": "dificil",
    "clue": "Palo para golpear una pelota; también instrumento deportivo. (4)",
    "answer": "BATE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Palo para golpear una pelota",
    "fodder": "instrumento deportivo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BATE: «Palo para golpear una pelota» y «instrumento deportivo»."
  },
  {
    "id": "d046",
    "difficulty": "dificil",
    "clue": "Lámpara portátil; también dispositivo de iluminación manual. (8)",
    "answer": "LINTERNA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lámpara portátil",
    "fodder": "dispositivo de iluminación manual",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a LINTERNA: «Lámpara portátil» y «dispositivo de iluminación manual»."
  },
  {
    "id": "d047",
    "difficulty": "dificil",
    "clue": "Flor; también color entre rojo y blanco. (4)",
    "answer": "ROSA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Flor",
    "fodder": "color entre rojo y blanco",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ROSA: «Flor» y «color entre rojo y blanco»."
  },
  {
    "id": "d048",
    "difficulty": "dificil",
    "clue": "Pendiente de un terreno; también precio o esfuerzo que algo exige. (6)",
    "answer": "CUESTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pendiente de un terreno",
    "fodder": "precio o esfuerzo que algo exige",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CUESTA: «Pendiente de un terreno» y «precio o esfuerzo que algo exige»."
  },
  {
    "id": "d049",
    "difficulty": "dificil",
    "clue": "Periodo breve: trato sin su t. (4)",
    "answer": "RATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Periodo breve",
    "fodder": "trato",
    "indicators": [
      "sin su t"
    ],
    "explanation": "Se quita la letra «t» de «trato» para obtener RATO; la definición es «Periodo breve»."
  },
  {
    "id": "d050",
    "difficulty": "dificil",
    "clue": "Categoría o nivel: grano quedó trastocado. (5)",
    "answer": "RANGO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Categoría o nivel",
    "fodder": "grano",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «grano» se reordenan para formar RANGO; la definición es «Categoría o nivel»."
  },
  {
    "id": "d051",
    "difficulty": "dificil",
    "clue": "Descarga eléctrica atmosférica; también persona o cosa muy rápida. (4)",
    "answer": "RAYO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Descarga eléctrica atmosférica",
    "fodder": "persona o cosa muy rápida",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a RAYO: «Descarga eléctrica atmosférica» y «persona o cosa muy rápida»."
  },
  {
    "id": "d052",
    "difficulty": "dificil",
    "clue": "Mamífero doméstico: gatos sin su s. (4)",
    "answer": "GATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Mamífero doméstico",
    "fodder": "gatos",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «gatos» para obtener GATO; la definición es «Mamífero doméstico»."
  },
  {
    "id": "d053",
    "difficulty": "dificil",
    "clue": "Roedor: atar vuelto. (4)",
    "answer": "RATA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Roedor",
    "fodder": "atar",
    "indicators": [
      "vuelto"
    ],
    "explanation": "«atar» al revés forma RATA; la definición es «Roedor»."
  },
  {
    "id": "d054",
    "difficulty": "dificil",
    "clue": "Fuerza que mueve; también deseo repentino de actuar. (7)",
    "answer": "IMPULSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuerza que mueve",
    "fodder": "deseo repentino de actuar",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a IMPULSO: «Fuerza que mueve» y «deseo repentino de actuar»."
  },
  {
    "id": "d055",
    "difficulty": "dificil",
    "clue": "Vía urbana; también espacio entre dos filas. (5)",
    "answer": "CALLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vía urbana",
    "fodder": "espacio entre dos filas",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CALLE: «Vía urbana» y «espacio entre dos filas»."
  },
  {
    "id": "d056",
    "difficulty": "dificil",
    "clue": "Pieza que une dos partes móviles; también elemento decisivo de una situación. (7)",
    "answer": "BISAGRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que une dos partes móviles",
    "fodder": "elemento decisivo de una situación",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BISAGRA: «Pieza que une dos partes móviles» y «elemento decisivo de una situación»."
  },
  {
    "id": "d057",
    "difficulty": "dificil",
    "clue": "Tristeza; también castigo. (4)",
    "answer": "PENA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tristeza",
    "fodder": "castigo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PENA: «Tristeza» y «castigo»."
  },
  {
    "id": "d058",
    "difficulty": "dificil",
    "clue": "Parte lateral de una embarcación; también color rojo oscuro. (5)",
    "answer": "BORDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte lateral de una embarcación",
    "fodder": "color rojo oscuro",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BORDO: «Parte lateral de una embarcación» y «color rojo oscuro»."
  },
  {
    "id": "d059",
    "difficulty": "dificil",
    "clue": "Celebración religiosa: misma sin su m. (4)",
    "answer": "MISA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Celebración religiosa",
    "fodder": "misma",
    "indicators": [
      "sin su m"
    ],
    "explanation": "Se quita la letra «m» de «misma» para obtener MISA; la definición es «Celebración religiosa»."
  },
  {
    "id": "d060",
    "difficulty": "dificil",
    "clue": "Ciudad sede de un gobierno; también dinero invertido. (7)",
    "answer": "CAPITAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ciudad sede de un gobierno",
    "fodder": "dinero invertido",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CAPITAL: «Ciudad sede de un gobierno» y «dinero invertido»."
  },
  {
    "id": "d061",
    "difficulty": "dificil",
    "clue": "Lo que queda; también operación que quita una cantidad de otra. (5)",
    "answer": "RESTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lo que queda",
    "fodder": "operación que quita una cantidad de otra",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a RESTO: «Lo que queda» y «operación que quita una cantidad de otra»."
  },
  {
    "id": "d062",
    "difficulty": "dificil",
    "clue": "Acción de elevarse del suelo; también cambio brusco. (5)",
    "answer": "SALTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de elevarse del suelo",
    "fodder": "cambio brusco",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a SALTO: «Acción de elevarse del suelo» y «cambio brusco»."
  },
  {
    "id": "d063",
    "difficulty": "dificil",
    "clue": "Que no es buena: malla sin su l. (4)",
    "answer": "MALA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Que no es buena",
    "fodder": "malla",
    "indicators": [
      "sin su l"
    ],
    "explanation": "Se quita la letra «l» de «malla» para obtener MALA; la definición es «Que no es buena»."
  },
  {
    "id": "d064",
    "difficulty": "dificil",
    "clue": "Lugar donde paran trenes; también periodo del año. (8)",
    "answer": "ESTACION",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar donde paran trenes",
    "fodder": "periodo del año",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ESTACION: «Lugar donde paran trenes» y «periodo del año»."
  },
  {
    "id": "d065",
    "difficulty": "dificil",
    "clue": "Parte posterior; también fila de personas. (4)",
    "answer": "COLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte posterior",
    "fodder": "fila de personas",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a COLA: «Parte posterior» y «fila de personas»."
  },
  {
    "id": "d066",
    "difficulty": "dificil",
    "clue": "Pieza metálica para fijar; también espina o dolor persistente. (5)",
    "answer": "CLAVO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza metálica para fijar",
    "fodder": "espina o dolor persistente",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CLAVO: «Pieza metálica para fijar» y «espina o dolor persistente»."
  },
  {
    "id": "d067",
    "difficulty": "dificil",
    "clue": "Altura respecto a una referencia; también grado de desarrollo. (5)",
    "answer": "NIVEL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Altura respecto a una referencia",
    "fodder": "grado de desarrollo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a NIVEL: «Altura respecto a una referencia» y «grado de desarrollo»."
  },
  {
    "id": "d068",
    "difficulty": "dificil",
    "clue": "Pieza que se pulsa; también botón de un instrumento. (5)",
    "answer": "TECLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que se pulsa",
    "fodder": "botón de un instrumento",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TECLA: «Pieza que se pulsa» y «botón de un instrumento»."
  },
  {
    "id": "d069",
    "difficulty": "dificil",
    "clue": "Vehículo de dos ruedas; también persona que habla demasiado. (7)",
    "answer": "CARRETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vehículo de dos ruedas",
    "fodder": "persona que habla demasiado",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CARRETA: «Vehículo de dos ruedas» y «persona que habla demasiado»."
  },
  {
    "id": "d070",
    "difficulty": "dificil",
    "clue": "Superficie que se pisa, escondida en consuelo. (5)",
    "answer": "SUELO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Superficie que se pisa",
    "fodder": "consuelo",
    "indicators": [
      "escondida en"
    ],
    "explanation": "SUELO aparece de forma continua dentro de «consuelo». La definición es «Superficie que se pisa»."
  },
  {
    "id": "d071",
    "difficulty": "dificil",
    "clue": "Trozo de madera; también golpe. (4)",
    "answer": "PALO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Trozo de madera",
    "fodder": "golpe",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PALO: «Trozo de madera» y «golpe»."
  },
  {
    "id": "d072",
    "difficulty": "dificil",
    "clue": "Punto de conexión; también punto de una red. (4)",
    "answer": "NODO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Punto de conexión",
    "fodder": "punto de una red",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a NODO: «Punto de conexión» y «punto de una red»."
  },
  {
    "id": "d073",
    "difficulty": "dificil",
    "clue": "Serie que se repite; también periodo completo. (5)",
    "answer": "CICLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Serie que se repite",
    "fodder": "periodo completo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CICLO: «Serie que se repite» y «periodo completo»."
  },
  {
    "id": "d074",
    "difficulty": "dificil",
    "clue": "Habitación amplia, escondida en salones. (5)",
    "answer": "SALON",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Habitación amplia",
    "fodder": "salones",
    "indicators": [
      "escondida en"
    ],
    "explanation": "SALON aparece de forma continua dentro de «salones». La definición es «Habitación amplia»."
  },
  {
    "id": "d075",
    "difficulty": "dificil",
    "clue": "Tiempo vivido; también época histórica. (4)",
    "answer": "EDAD",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tiempo vivido",
    "fodder": "época histórica",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a EDAD: «Tiempo vivido» y «época histórica»."
  },
  {
    "id": "d076",
    "difficulty": "dificil",
    "clue": "Extremidad inferior: piel sin su l. (3)",
    "answer": "PIE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Extremidad inferior",
    "fodder": "piel",
    "indicators": [
      "sin su l"
    ],
    "explanation": "Se quita la letra «l» de «piel» para obtener PIE; la definición es «Extremidad inferior»."
  },
  {
    "id": "d077",
    "difficulty": "dificil",
    "clue": "Masa gaseosa luminosa de un fuego: llamas sin su s. (5)",
    "answer": "LLAMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Masa gaseosa luminosa de un fuego",
    "fodder": "llamas",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «llamas» para obtener LLAMA; la definición es «Masa gaseosa luminosa de un fuego»."
  },
  {
    "id": "d078",
    "difficulty": "dificil",
    "clue": "Herramienta abrasiva: clima sin su c. (4)",
    "answer": "LIMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Herramienta abrasiva",
    "fodder": "clima",
    "indicators": [
      "sin su c"
    ],
    "explanation": "Se quita la letra «c» de «clima» para obtener LIMA; la definición es «Herramienta abrasiva»."
  },
  {
    "id": "d079",
    "difficulty": "dificil",
    "clue": "Viento suave: risa con una b dentro. (5)",
    "answer": "BRISA",
    "mechanisms": [
      "container"
    ],
    "definition": "Viento suave",
    "fodder": "risa",
    "indicators": [
      "con una b dentro"
    ],
    "explanation": "Se coloca «b» dentro de «risa» para obtener BRISA; la definición es «Viento suave»."
  },
  {
    "id": "d080",
    "difficulty": "dificil",
    "clue": "Combustión con llamas; también entusiasmo o energía. (5)",
    "answer": "FUEGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Combustión con llamas",
    "fodder": "entusiasmo o energía",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a FUEGO: «Combustión con llamas» y «entusiasmo o energía»."
  },
  {
    "id": "d081",
    "difficulty": "dificil",
    "clue": "Acuerdo entre personas: rato con una t dentro. (5)",
    "answer": "TRATO",
    "mechanisms": [
      "container"
    ],
    "definition": "Acuerdo entre personas",
    "fodder": "rato",
    "indicators": [
      "con una t dentro"
    ],
    "explanation": "Se coloca «t» dentro de «rato» para obtener TRATO; la definición es «Acuerdo entre personas»."
  },
  {
    "id": "d082",
    "difficulty": "dificil",
    "clue": "Separación entre dos puntos; también frialdad en el trato. (9)",
    "answer": "DISTANCIA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Separación entre dos puntos",
    "fodder": "frialdad en el trato",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DISTANCIA: «Separación entre dos puntos» y «frialdad en el trato»."
  },
  {
    "id": "d083",
    "difficulty": "dificil",
    "clue": "Marca dejada al pisar; también rastro. (6)",
    "answer": "HUELLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Marca dejada al pisar",
    "fodder": "rastro",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a HUELLA: «Marca dejada al pisar» y «rastro»."
  },
  {
    "id": "d084",
    "difficulty": "dificil",
    "clue": "Pieza alargada; también local donde se sirven bebidas. (5)",
    "answer": "BARRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza alargada",
    "fodder": "local donde se sirven bebidas",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BARRA: «Pieza alargada» y «local donde se sirven bebidas»."
  },
  {
    "id": "d085",
    "difficulty": "dificil",
    "clue": "Pieza que fija una embarcación: canal quedó trastocado. (5)",
    "answer": "ANCLA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Pieza que fija una embarcación",
    "fodder": "canal",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «canal» se reordenan para formar ANCLA; la definición es «Pieza que fija una embarcación»."
  },
  {
    "id": "d086",
    "difficulty": "dificil",
    "clue": "Acción de dar algo, escondida en entregado. (7)",
    "answer": "ENTREGA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Acción de dar algo",
    "fodder": "entregado",
    "indicators": [
      "escondida en"
    ],
    "explanation": "ENTREGA aparece de forma continua dentro de «entregado». La definición es «Acción de dar algo»."
  },
  {
    "id": "d087",
    "difficulty": "dificil",
    "clue": "Magnitud obtenida al medir; también disposición tomada. (6)",
    "answer": "MEDIDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Magnitud obtenida al medir",
    "fodder": "disposición tomada",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MEDIDA: «Magnitud obtenida al medir» y «disposición tomada»."
  },
  {
    "id": "d088",
    "difficulty": "dificil",
    "clue": "Centro de enseñanza; también corriente o estilo de pensamiento. (7)",
    "answer": "ESCUELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Centro de enseñanza",
    "fodder": "corriente o estilo de pensamiento",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ESCUELA: «Centro de enseñanza» y «corriente o estilo de pensamiento»."
  },
  {
    "id": "d089",
    "difficulty": "dificil",
    "clue": "Modo de funcionar: marca con una h dentro. (6)",
    "answer": "MARCHA",
    "mechanisms": [
      "container"
    ],
    "definition": "Modo de funcionar",
    "fodder": "marca",
    "indicators": [
      "con una h dentro"
    ],
    "explanation": "Se coloca «h» dentro de «marca» para obtener MARCHA; la definición es «Modo de funcionar»."
  },
  {
    "id": "d090",
    "difficulty": "dificil",
    "clue": "Pieza circular que gira: ruedas sin su s. (5)",
    "answer": "RUEDA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza circular que gira",
    "fodder": "ruedas",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «ruedas» para obtener RUEDA; la definición es «Pieza circular que gira»."
  },
  {
    "id": "d091",
    "difficulty": "dificil",
    "clue": "Espacio reservado en un teatro: palo con una c dentro. (5)",
    "answer": "PALCO",
    "mechanisms": [
      "container"
    ],
    "definition": "Espacio reservado en un teatro",
    "fodder": "palo",
    "indicators": [
      "con una c dentro"
    ],
    "explanation": "Se coloca «c» dentro de «palo» para obtener PALCO; la definición es «Espacio reservado en un teatro»."
  },
  {
    "id": "d092",
    "difficulty": "dificil",
    "clue": "Cantidad de agua que lleva un río; también cantidad de dinero o recursos. (6)",
    "answer": "CAUDAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cantidad de agua que lleva un río",
    "fodder": "cantidad de dinero o recursos",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CAUDAL: «Cantidad de agua que lleva un río» y «cantidad de dinero o recursos»."
  },
  {
    "id": "d093",
    "difficulty": "dificil",
    "clue": "Parte de la mano: alma con una p dentro. (5)",
    "answer": "PALMA",
    "mechanisms": [
      "container"
    ],
    "definition": "Parte de la mano",
    "fodder": "alma",
    "indicators": [
      "con una p dentro"
    ],
    "explanation": "Se coloca «p» dentro de «alma» para obtener PALMA; la definición es «Parte de la mano»."
  },
  {
    "id": "d094",
    "difficulty": "dificil",
    "clue": "Pieza de la dentadura: dientes sin su s. (6)",
    "answer": "DIENTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza de la dentadura",
    "fodder": "dientes",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «dientes» para obtener DIENTE; la definición es «Pieza de la dentadura»."
  },
  {
    "id": "d095",
    "difficulty": "dificil",
    "clue": "Acción de montar; también conjunto de piezas ensambladas. (7)",
    "answer": "MONTAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de montar",
    "fodder": "conjunto de piezas ensambladas",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MONTAJE: «Acción de montar» y «conjunto de piezas ensambladas»."
  },
  {
    "id": "d096",
    "difficulty": "dificil",
    "clue": "Sonido musical de la voz: tacon quedó trastocado. (5)",
    "answer": "CANTO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Sonido musical de la voz",
    "fodder": "tacon",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «tacon» se reordenan para formar CANTO; la definición es «Sonido musical de la voz»."
  },
  {
    "id": "d097",
    "difficulty": "dificil",
    "clue": "Abertura para comer: cabo quedó trastocado. (4)",
    "answer": "BOCA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Abertura para comer",
    "fodder": "cabo",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «cabo» se reordenan para formar BOCA; la definición es «Abertura para comer»."
  },
  {
    "id": "d098",
    "difficulty": "dificil",
    "clue": "Vaso con pie; también trofeo deportivo. (4)",
    "answer": "COPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vaso con pie",
    "fodder": "trofeo deportivo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a COPA: «Vaso con pie» y «trofeo deportivo»."
  },
  {
    "id": "d099",
    "difficulty": "dificil",
    "clue": "Elevación de agua, al oído: hola. (3)",
    "answer": "OLA",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Elevación de agua",
    "fodder": "hola",
    "indicators": [
      "al oído"
    ],
    "explanation": "OLA suena como «hola»; la definición es «Elevación de agua»."
  },
  {
    "id": "d100",
    "difficulty": "dificil",
    "clue": "Representación resumida; también plan básico. (7)",
    "answer": "ESQUEMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación resumida",
    "fodder": "plan básico",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ESQUEMA: «Representación resumida» y «plan básico»."
  },
  {
    "id": "d101",
    "difficulty": "dificil",
    "clue": "Mensaje escrito: cartas sin su s. (5)",
    "answer": "CARTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Mensaje escrito",
    "fodder": "cartas",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «cartas» para obtener CARTA; la definición es «Mensaje escrito»."
  },
  {
    "id": "d102",
    "difficulty": "dificil",
    "clue": "Persona que acompaña; también colega. (9)",
    "answer": "COMPANERO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que acompaña",
    "fodder": "colega",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a COMPANERO: «Persona que acompaña» y «colega»."
  },
  {
    "id": "d103",
    "difficulty": "dificil",
    "clue": "Primate; también persona muy simpática o graciosa. (4)",
    "answer": "MONO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Primate",
    "fodder": "persona muy simpática o graciosa",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MONO: «Primate» y «persona muy simpática o graciosa»."
  },
  {
    "id": "d104",
    "difficulty": "dificil",
    "clue": "Acción de cortar; también tribunal o conjunto de personas que acompaña al rey. (5)",
    "answer": "CORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de cortar",
    "fodder": "tribunal o conjunto de personas que acompaña al rey",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CORTE: «Acción de cortar» y «tribunal o conjunto de personas que acompaña al rey»."
  },
  {
    "id": "d105",
    "difficulty": "dificil",
    "clue": "Parte plana de una planta: hojas sin su s. (4)",
    "answer": "HOJA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte plana de una planta",
    "fodder": "hojas",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «hojas» para obtener HOJA; la definición es «Parte plana de una planta»."
  },
  {
    "id": "d106",
    "difficulty": "dificil",
    "clue": "Punto que no se debe superar; también frontera. (6)",
    "answer": "LIMITE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Punto que no se debe superar",
    "fodder": "frontera",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a LIMITE: «Punto que no se debe superar» y «frontera»."
  },
  {
    "id": "d107",
    "difficulty": "dificil",
    "clue": "Magnitud que ordena los sucesos; también estado atmosférico. (6)",
    "answer": "TIEMPO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Magnitud que ordena los sucesos",
    "fodder": "estado atmosférico",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TIEMPO: «Magnitud que ordena los sucesos» y «estado atmosférico»."
  },
  {
    "id": "d108",
    "difficulty": "dificil",
    "clue": "Unión entre cosas; también persona que sirve de conexión. (6)",
    "answer": "ENLACE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Unión entre cosas",
    "fodder": "persona que sirve de conexión",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ENLACE: «Unión entre cosas» y «persona que sirve de conexión»."
  },
  {
    "id": "d109",
    "difficulty": "dificil",
    "clue": "Conjunto de instrumentos de percusión; también fuente de energía. (7)",
    "answer": "BATERIA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de instrumentos de percusión",
    "fodder": "fuente de energía",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BATERIA: «Conjunto de instrumentos de percusión» y «fuente de energía»."
  },
  {
    "id": "d110",
    "difficulty": "dificil",
    "clue": "Objeto para guardar documentos; también directorio informático. (7)",
    "answer": "CARPETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto para guardar documentos",
    "fodder": "directorio informático",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CARPETA: «Objeto para guardar documentos» y «directorio informático»."
  },
  {
    "id": "d111",
    "difficulty": "dificil",
    "clue": "Objeto para mejorar la visión; también lentes montadas. (5)",
    "answer": "GAFAS",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto para mejorar la visión",
    "fodder": "lentes montadas",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a GAFAS: «Objeto para mejorar la visión» y «lentes montadas»."
  },
  {
    "id": "d112",
    "difficulty": "dificil",
    "clue": "Fila de asientos, escondida en agradable. (5)",
    "answer": "GRADA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Fila de asientos",
    "fodder": "agradable",
    "indicators": [
      "escondida en"
    ],
    "explanation": "GRADA aparece de forma continua dentro de «agradable». La definición es «Fila de asientos»."
  },
  {
    "id": "d113",
    "difficulty": "dificil",
    "clue": "Vegetal: planeta sin su e. (6)",
    "answer": "PLANTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Vegetal",
    "fodder": "planeta",
    "indicators": [
      "sin su e"
    ],
    "explanation": "Se quita la letra «e» de «planeta» para obtener PLANTA; la definición es «Vegetal»."
  },
  {
    "id": "d114",
    "difficulty": "dificil",
    "clue": "Inscripción oficial; también tono de la voz. (8)",
    "answer": "REGISTRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Inscripción oficial",
    "fodder": "tono de la voz",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a REGISTRO: «Inscripción oficial» y «tono de la voz»."
  },
  {
    "id": "d115",
    "difficulty": "dificil",
    "clue": "Prenda ligera de manga corta; también pieza interior. (8)",
    "answer": "CAMISETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda ligera de manga corta",
    "fodder": "pieza interior",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CAMISETA: «Prenda ligera de manga corta» y «pieza interior»."
  },
  {
    "id": "d116",
    "difficulty": "dificil",
    "clue": "Mueble para dormir; también lecho de un río. (4)",
    "answer": "CAMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mueble para dormir",
    "fodder": "lecho de un río",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CAMA: «Mueble para dormir» y «lecho de un río»."
  },
  {
    "id": "d117",
    "difficulty": "dificil",
    "clue": "Material elástico; también borrador. (4)",
    "answer": "GOMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material elástico",
    "fodder": "borrador",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a GOMA: «Material elástico» y «borrador»."
  },
  {
    "id": "d118",
    "difficulty": "dificil",
    "clue": "Objeto fino para coser: agua con una j dentro. (5)",
    "answer": "AGUJA",
    "mechanisms": [
      "container"
    ],
    "definition": "Objeto fino para coser",
    "fodder": "agua",
    "indicators": [
      "con una j dentro"
    ],
    "explanation": "Se coloca «j» dentro de «agua» para obtener AGUJA; la definición es «Objeto fino para coser»."
  },
  {
    "id": "d119",
    "difficulty": "dificil",
    "clue": "Adorno de un monarca; también parte exterior de una rueda. (6)",
    "answer": "CORONA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Adorno de un monarca",
    "fodder": "parte exterior de una rueda",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CORONA: «Adorno de un monarca» y «parte exterior de una rueda»."
  },
  {
    "id": "d120",
    "difficulty": "dificil",
    "clue": "Abertura en una pared; también espacio de tiempo disponible. (7)",
    "answer": "VENTANA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Abertura en una pared",
    "fodder": "espacio de tiempo disponible",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a VENTANA: «Abertura en una pared» y «espacio de tiempo disponible»."
  },
  {
    "id": "d121",
    "difficulty": "dificil",
    "clue": "Choque o impacto; también acción de golpear. (5)",
    "answer": "GOLPE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Choque o impacto",
    "fodder": "acción de golpear",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a GOLPE: «Choque o impacto» y «acción de golpear»."
  },
  {
    "id": "d122",
    "difficulty": "dificil",
    "clue": "Elemento que sostiene; también ayuda o respaldo. (7)",
    "answer": "SOPORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Elemento que sostiene",
    "fodder": "ayuda o respaldo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a SOPORTE: «Elemento que sostiene» y «ayuda o respaldo»."
  },
  {
    "id": "d123",
    "difficulty": "dificil",
    "clue": "Fragmento de un texto; también billete para viajar. (6)",
    "answer": "PASAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fragmento de un texto",
    "fodder": "billete para viajar",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PASAJE: «Fragmento de un texto» y «billete para viajar»."
  },
  {
    "id": "d124",
    "difficulty": "dificil",
    "clue": "Imagen devuelta por una superficie; también respuesta automática. (7)",
    "answer": "REFLEJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Imagen devuelta por una superficie",
    "fodder": "respuesta automática",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a REFLEJO: «Imagen devuelta por una superficie» y «respuesta automática»."
  },
  {
    "id": "d125",
    "difficulty": "dificil",
    "clue": "Comunicación de advertencia; también anuncio. (5)",
    "answer": "AVISO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Comunicación de advertencia",
    "fodder": "anuncio",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a AVISO: «Comunicación de advertencia» y «anuncio»."
  },
  {
    "id": "d126",
    "difficulty": "dificil",
    "clue": "Sensación producida por una temperatura alta; también entusiasmo o intensidad. (5)",
    "answer": "CALOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sensación producida por una temperatura alta",
    "fodder": "entusiasmo o intensidad",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CALOR: «Sensación producida por una temperatura alta» y «entusiasmo o intensidad»."
  },
  {
    "id": "d127",
    "difficulty": "dificil",
    "clue": "Parte de la mano; también índice o señal. (4)",
    "answer": "DEDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de la mano",
    "fodder": "índice o señal",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DEDO: «Parte de la mano» y «índice o señal»."
  },
  {
    "id": "d128",
    "difficulty": "dificil",
    "clue": "Discusión de ideas; también intercambio formal de argumentos. (6)",
    "answer": "DEBATE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Discusión de ideas",
    "fodder": "intercambio formal de argumentos",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DEBATE: «Discusión de ideas» y «intercambio formal de argumentos»."
  },
  {
    "id": "d129",
    "difficulty": "dificil",
    "clue": "Parte de un conjunto; también zona de actividad económica. (6)",
    "answer": "SECTOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de un conjunto",
    "fodder": "zona de actividad económica",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a SECTOR: «Parte de un conjunto» y «zona de actividad económica»."
  },
  {
    "id": "d130",
    "difficulty": "dificil",
    "clue": "Instrumento que mide el tiempo; también persona muy puntual. (5)",
    "answer": "RELOJ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Instrumento que mide el tiempo",
    "fodder": "persona muy puntual",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a RELOJ: «Instrumento que mide el tiempo» y «persona muy puntual»."
  },
  {
    "id": "d131",
    "difficulty": "dificil",
    "clue": "Producto de una combustión; también engaño o apariencia vacía. (4)",
    "answer": "HUMO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Producto de una combustión",
    "fodder": "engaño o apariencia vacía",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a HUMO: «Producto de una combustión» y «engaño o apariencia vacía»."
  },
  {
    "id": "d132",
    "difficulty": "dificil",
    "clue": "Repetición de un sonido: seco sin su s. (3)",
    "answer": "ECO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Repetición de un sonido",
    "fodder": "seco",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «seco» para obtener ECO; la definición es «Repetición de un sonido»."
  },
  {
    "id": "d133",
    "difficulty": "dificil",
    "clue": "Persona que juzga; también árbitro de una competición. (4)",
    "answer": "JUEZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que juzga",
    "fodder": "árbitro de una competición",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a JUEZ: «Persona que juzga» y «árbitro de una competición»."
  },
  {
    "id": "d134",
    "difficulty": "dificil",
    "clue": "Información concreta: datos sin su s. (4)",
    "answer": "DATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Información concreta",
    "fodder": "datos",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «datos» para obtener DATO; la definición es «Información concreta»."
  },
  {
    "id": "d135",
    "difficulty": "dificil",
    "clue": "Aspecto exterior; también unidad antigua de capacidad. (5)",
    "answer": "PINTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Aspecto exterior",
    "fodder": "unidad antigua de capacidad",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PINTA: «Aspecto exterior» y «unidad antigua de capacidad»."
  },
  {
    "id": "d136",
    "difficulty": "dificil",
    "clue": "Cantidad de materia: asa con una m dentro. (4)",
    "answer": "MASA",
    "mechanisms": [
      "container"
    ],
    "definition": "Cantidad de materia",
    "fodder": "asa",
    "indicators": [
      "con una m dentro"
    ],
    "explanation": "Se coloca «m» dentro de «asa» para obtener MASA; la definición es «Cantidad de materia»."
  },
  {
    "id": "d137",
    "difficulty": "dificil",
    "clue": "Materia de granos finos; también terreno de competición. (5)",
    "answer": "ARENA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Materia de granos finos",
    "fodder": "terreno de competición",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ARENA: «Materia de granos finos» y «terreno de competición»."
  },
  {
    "id": "d138",
    "difficulty": "dificil",
    "clue": "Parte elevada del calzado: canto quedó trastocado. (5)",
    "answer": "TACON",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Parte elevada del calzado",
    "fodder": "canto",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «canto» se reordenan para formar TACON; la definición es «Parte elevada del calzado»."
  },
  {
    "id": "d139",
    "difficulty": "dificil",
    "clue": "Cuerpo celeste: rastro sin su r. (5)",
    "answer": "ASTRO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Cuerpo celeste",
    "fodder": "rastro",
    "indicators": [
      "sin su r"
    ],
    "explanation": "Se quita la letra «r» de «rastro» para obtener ASTRO; la definición es «Cuerpo celeste»."
  },
  {
    "id": "d140",
    "difficulty": "dificil",
    "clue": "Sustancia de las abejas; también material para pulir. (4)",
    "answer": "CERA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sustancia de las abejas",
    "fodder": "material para pulir",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CERA: «Sustancia de las abejas» y «material para pulir»."
  },
  {
    "id": "d141",
    "difficulty": "muy-dificil",
    "clue": "Motocicleta; también movimiento de un objeto, en ciertas expresiones. (4)",
    "answer": "MOTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Motocicleta",
    "fodder": "movimiento de un objeto, en ciertas expresiones",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MOTO: «Motocicleta» y «movimiento de un objeto, en ciertas expresiones»."
  },
  {
    "id": "d142",
    "difficulty": "muy-dificil",
    "clue": "Movimiento hacia delante; también progreso. (6)",
    "answer": "AVANCE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Movimiento hacia delante",
    "fodder": "progreso",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a AVANCE: «Movimiento hacia delante» y «progreso»."
  },
  {
    "id": "d143",
    "difficulty": "muy-dificil",
    "clue": "Representación geográfica; también esquema para orientarse. (4)",
    "answer": "MAPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación geográfica",
    "fodder": "esquema para orientarse",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MAPA: «Representación geográfica» y «esquema para orientarse»."
  },
  {
    "id": "d144",
    "difficulty": "muy-dificil",
    "clue": "Material para confeccionar ropa; también asunto o cuestión, coloquial. (4)",
    "answer": "TELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material para confeccionar ropa",
    "fodder": "asunto o cuestión, coloquial",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TELA: «Material para confeccionar ropa» y «asunto o cuestión, coloquial»."
  },
  {
    "id": "d145",
    "difficulty": "muy-dificil",
    "clue": "Asiento con respaldo; también cargo o puesto. (5)",
    "answer": "SILLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Asiento con respaldo",
    "fodder": "cargo o puesto",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a SILLA: «Asiento con respaldo» y «cargo o puesto»."
  },
  {
    "id": "d146",
    "difficulty": "muy-dificil",
    "clue": "Lugar por donde se sale; también solución a una dificultad. (6)",
    "answer": "SALIDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar por donde se sale",
    "fodder": "solución a una dificultad",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a SALIDA: «Lugar por donde se sale» y «solución a una dificultad»."
  },
  {
    "id": "d147",
    "difficulty": "muy-dificil",
    "clue": "Fuerza para mover algo; también decisión para actuar. (6)",
    "answer": "EMPUJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuerza para mover algo",
    "fodder": "decisión para actuar",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a EMPUJE: «Fuerza para mover algo» y «decisión para actuar»."
  },
  {
    "id": "d148",
    "difficulty": "muy-dificil",
    "clue": "Material que retiene partículas; también criterio que deja pasar unas cosas y otras no. (6)",
    "answer": "FILTRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material que retiene partículas",
    "fodder": "criterio que deja pasar unas cosas y otras no",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a FILTRO: «Material que retiene partículas» y «criterio que deja pasar unas cosas y otras no»."
  },
  {
    "id": "d149",
    "difficulty": "muy-dificil",
    "clue": "Objeto que atrae hierro; también persona muy atractiva. (4)",
    "answer": "IMAN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que atrae hierro",
    "fodder": "persona muy atractiva",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a IMAN: «Objeto que atrae hierro» y «persona muy atractiva»."
  },
  {
    "id": "d150",
    "difficulty": "muy-dificil",
    "clue": "Disminución de un dolor; también consuelo. (6)",
    "answer": "ALIVIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Disminución de un dolor",
    "fodder": "consuelo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ALIVIO: «Disminución de un dolor» y «consuelo»."
  },
  {
    "id": "d151",
    "difficulty": "muy-dificil",
    "clue": "Encima de; también envoltorio de papel. (5)",
    "answer": "SOBRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Encima de",
    "fodder": "envoltorio de papel",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a SOBRE: «Encima de» y «envoltorio de papel»."
  },
  {
    "id": "d152",
    "difficulty": "muy-dificil",
    "clue": "Animal del desierto; también persona que transporta droga. (7)",
    "answer": "CAMELLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Animal del desierto",
    "fodder": "persona que transporta droga",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CAMELLO: «Animal del desierto» y «persona que transporta droga»."
  },
  {
    "id": "d153",
    "difficulty": "muy-dificil",
    "clue": "Acción de bajar de una nave; también llegada de tropas a tierra. (10)",
    "answer": "DESEMBARCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de bajar de una nave",
    "fodder": "llegada de tropas a tierra",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DESEMBARCO: «Acción de bajar de una nave» y «llegada de tropas a tierra»."
  },
  {
    "id": "d154",
    "difficulty": "muy-dificil",
    "clue": "Recipiente con paredes, escondida en encajar. (4)",
    "answer": "CAJA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Recipiente con paredes",
    "fodder": "encajar",
    "indicators": [
      "escondida en"
    ],
    "explanation": "CAJA aparece de forma continua dentro de «encajar». La definición es «Recipiente con paredes»."
  },
  {
    "id": "d155",
    "difficulty": "muy-dificil",
    "clue": "Torre que guía a los barcos: faroS sin su s. (4)",
    "answer": "FARO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Torre que guía a los barcos",
    "fodder": "faroS",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «faroS» para obtener FARO; la definición es «Torre que guía a los barcos»."
  },
  {
    "id": "d156",
    "difficulty": "muy-dificil",
    "clue": "Instrumento para atacar: rama quedó trastocado. (4)",
    "answer": "ARMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Instrumento para atacar",
    "fodder": "rama",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «rama» se reordenan para formar ARMA; la definición es «Instrumento para atacar»."
  },
  {
    "id": "d157",
    "difficulty": "muy-dificil",
    "clue": "Viene al mundo: cena quedó trastocado. (4)",
    "answer": "NACE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Viene al mundo",
    "fodder": "cena",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «cena» se reordenan para formar NACE; la definición es «Viene al mundo»."
  },
  {
    "id": "d158",
    "difficulty": "muy-dificil",
    "clue": "Parte de una planta; también origen de algo. (4)",
    "answer": "RAIZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de una planta",
    "fodder": "origen de algo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a RAIZ: «Parte de una planta» y «origen de algo»."
  },
  {
    "id": "d159",
    "difficulty": "muy-dificil",
    "clue": "Pieza de dinero; también unidad monetaria. (6)",
    "answer": "MONEDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza de dinero",
    "fodder": "unidad monetaria",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MONEDA: «Pieza de dinero» y «unidad monetaria»."
  },
  {
    "id": "d160",
    "difficulty": "muy-dificil",
    "clue": "Espacio de entrada de un edificio; también patio interior. (5)",
    "answer": "ATRIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio de entrada de un edificio",
    "fodder": "patio interior",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ATRIO: «Espacio de entrada de un edificio» y «patio interior»."
  },
  {
    "id": "d161",
    "difficulty": "muy-dificil",
    "clue": "Modifica algo; también hace una permuta o sustitución. (6)",
    "answer": "CAMBIA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Modifica algo",
    "fodder": "hace una permuta o sustitución",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CAMBIA: «Modifica algo» y «hace una permuta o sustitución»."
  },
  {
    "id": "d162",
    "difficulty": "muy-dificil",
    "clue": "Vía para desplazarse; también método. (6)",
    "answer": "CAMINO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vía para desplazarse",
    "fodder": "método",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CAMINO: «Vía para desplazarse» y «método»."
  },
  {
    "id": "d163",
    "difficulty": "muy-dificil",
    "clue": "Pieza para ejercitarse: presa sin su r. (4)",
    "answer": "PESA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza para ejercitarse",
    "fodder": "presa",
    "indicators": [
      "sin su r"
    ],
    "explanation": "Se quita la letra «r» de «presa» para obtener PESA; la definición es «Pieza para ejercitarse»."
  },
  {
    "id": "d164",
    "difficulty": "muy-dificil",
    "clue": "Latido arterial, escondida en impulso. (5)",
    "answer": "PULSO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Latido arterial",
    "fodder": "impulso",
    "indicators": [
      "escondida en"
    ],
    "explanation": "PULSO aparece de forma continua dentro de «impulso». La definición es «Latido arterial»."
  },
  {
    "id": "d165",
    "difficulty": "muy-dificil",
    "clue": "Satélite natural de la Tierra: una con una l dentro. (4)",
    "answer": "LUNA",
    "mechanisms": [
      "container"
    ],
    "definition": "Satélite natural de la Tierra",
    "fodder": "una",
    "indicators": [
      "con una l dentro"
    ],
    "explanation": "Se coloca «l» dentro de «una» para obtener LUNA; la definición es «Satélite natural de la Tierra»."
  },
  {
    "id": "d166",
    "difficulty": "muy-dificil",
    "clue": "Señal gráfica redonda: puntos sin su s. (5)",
    "answer": "PUNTO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Señal gráfica redonda",
    "fodder": "puntos",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «puntos» para obtener PUNTO; la definición es «Señal gráfica redonda»."
  },
  {
    "id": "d167",
    "difficulty": "muy-dificil",
    "clue": "Número de ejemplares impresos; también acción de lanzar. (6)",
    "answer": "TIRADA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Número de ejemplares impresos",
    "fodder": "acción de lanzar",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TIRADA: «Número de ejemplares impresos» y «acción de lanzar»."
  },
  {
    "id": "d168",
    "difficulty": "muy-dificil",
    "clue": "Pared resistente; también obstáculo. (4)",
    "answer": "MURO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pared resistente",
    "fodder": "obstáculo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MURO: «Pared resistente» y «obstáculo»."
  },
  {
    "id": "d169",
    "difficulty": "muy-dificil",
    "clue": "Persona que trabaja en un barco; también propio del mar. (8)",
    "answer": "MARINERO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que trabaja en un barco",
    "fodder": "propio del mar",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MARINERO: «Persona que trabaja en un barco» y «propio del mar»."
  },
  {
    "id": "d170",
    "difficulty": "muy-dificil",
    "clue": "Acuerdo con obligaciones; también documento que formaliza un acuerdo. (8)",
    "answer": "CONTRATO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acuerdo con obligaciones",
    "fodder": "documento que formaliza un acuerdo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CONTRATO: «Acuerdo con obligaciones» y «documento que formaliza un acuerdo»."
  },
  {
    "id": "d171",
    "difficulty": "muy-dificil",
    "clue": "Representación a escala; también liso y sin relieve. (5)",
    "answer": "PLANO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación a escala",
    "fodder": "liso y sin relieve",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PLANO: «Representación a escala» y «liso y sin relieve»."
  },
  {
    "id": "d172",
    "difficulty": "muy-dificil",
    "clue": "Rastro que deja un objeto al moverse; también monumento funerario. (6)",
    "answer": "ESTELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Rastro que deja un objeto al moverse",
    "fodder": "monumento funerario",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ESTELA: «Rastro que deja un objeto al moverse» y «monumento funerario»."
  },
  {
    "id": "d173",
    "difficulty": "muy-dificil",
    "clue": "Sonido producido al hablar; también opinión expresada. (3)",
    "answer": "VOZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sonido producido al hablar",
    "fodder": "opinión expresada",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a VOZ: «Sonido producido al hablar» y «opinión expresada»."
  },
  {
    "id": "d174",
    "difficulty": "muy-dificil",
    "clue": "Trabajo realizado; también creación artística. (4)",
    "answer": "OBRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Trabajo realizado",
    "fodder": "creación artística",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a OBRA: «Trabajo realizado» y «creación artística»."
  },
  {
    "id": "d175",
    "difficulty": "muy-dificil",
    "clue": "Objeto que cubre el rostro; también producto cosmético para las pestañas. (7)",
    "answer": "MASCARA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que cubre el rostro",
    "fodder": "producto cosmético para las pestañas",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MASCARA: «Objeto que cubre el rostro» y «producto cosmético para las pestañas»."
  },
  {
    "id": "d176",
    "difficulty": "muy-dificil",
    "clue": "Órgano de la visión: rojo sin su r. (3)",
    "answer": "OJO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Órgano de la visión",
    "fodder": "rojo",
    "indicators": [
      "sin su r"
    ],
    "explanation": "Se quita la letra «r» de «rojo» para obtener OJO; la definición es «Órgano de la visión»."
  },
  {
    "id": "d177",
    "difficulty": "muy-dificil",
    "clue": "Frutas de pepita: presa quedó trastocado. (5)",
    "answer": "PERAS",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Frutas de pepita",
    "fodder": "presa",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «presa» se reordenan para formar PERAS; la definición es «Frutas de pepita»."
  },
  {
    "id": "d178",
    "difficulty": "muy-dificil",
    "clue": "Superficie que refleja; también persona que reproduce una conducta. (6)",
    "answer": "ESPEJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie que refleja",
    "fodder": "persona que reproduce una conducta",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ESPEJO: «Superficie que refleja» y «persona que reproduce una conducta»."
  },
  {
    "id": "d179",
    "difficulty": "muy-dificil",
    "clue": "Comida de la noche: nace quedó trastocado. (4)",
    "answer": "CENA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Comida de la noche",
    "fodder": "nace",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «nace» se reordenan para formar CENA; la definición es «Comida de la noche»."
  },
  {
    "id": "d180",
    "difficulty": "muy-dificil",
    "clue": "Espacio público, escondida en desplazarse. (5)",
    "answer": "PLAZA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Espacio público",
    "fodder": "desplazarse",
    "indicators": [
      "escondida en"
    ],
    "explanation": "PLAZA aparece de forma continua dentro de «desplazarse». La definición es «Espacio público»."
  },
  {
    "id": "d181",
    "difficulty": "muy-dificil",
    "clue": "Sentido de la visión; también aspecto de algo. (5)",
    "answer": "VISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sentido de la visión",
    "fodder": "aspecto de algo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a VISTA: «Sentido de la visión» y «aspecto de algo»."
  },
  {
    "id": "d182",
    "difficulty": "muy-dificil",
    "clue": "Señal que representa algo; también síntoma. (5)",
    "answer": "SIGNO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Señal que representa algo",
    "fodder": "síntoma",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a SIGNO: «Señal que representa algo» y «síntoma»."
  },
  {
    "id": "d183",
    "difficulty": "muy-dificil",
    "clue": "Recipiente para comida: platos sin su s. (5)",
    "answer": "PLATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Recipiente para comida",
    "fodder": "platos",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «platos» para obtener PLATO; la definición es «Recipiente para comida»."
  },
  {
    "id": "d184",
    "difficulty": "muy-dificil",
    "clue": "Articulación del brazo; también curva pronunciada. (4)",
    "answer": "CODO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Articulación del brazo",
    "fodder": "curva pronunciada",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CODO: «Articulación del brazo» y «curva pronunciada»."
  },
  {
    "id": "d185",
    "difficulty": "muy-dificil",
    "clue": "Pequeña porción de líquido: gato quedó trastocado. (4)",
    "answer": "GOTA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Pequeña porción de líquido",
    "fodder": "gato",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «gato» se reordenan para formar GOTA; la definición es «Pequeña porción de líquido»."
  },
  {
    "id": "d186",
    "difficulty": "muy-dificil",
    "clue": "Establecimiento abierto al público; también relativo a un lugar. (5)",
    "answer": "LOCAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Establecimiento abierto al público",
    "fodder": "relativo a un lugar",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a LOCAL: «Establecimiento abierto al público» y «relativo a un lugar»."
  },
  {
    "id": "d187",
    "difficulty": "muy-dificil",
    "clue": "Pieza elástica; también recurso que produce un efecto. (7)",
    "answer": "RESORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza elástica",
    "fodder": "recurso que produce un efecto",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a RESORTE: «Pieza elástica» y «recurso que produce un efecto»."
  },
  {
    "id": "d188",
    "difficulty": "muy-dificil",
    "clue": "Gran extensión de agua salada: amar sin su a. (3)",
    "answer": "MAR",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Gran extensión de agua salada",
    "fodder": "amar",
    "indicators": [
      "sin su a"
    ],
    "explanation": "Se quita la letra «a» de «amar» para obtener MAR; la definición es «Gran extensión de agua salada»."
  },
  {
    "id": "d189",
    "difficulty": "muy-dificil",
    "clue": "Condimento: sala sin su a. (3)",
    "answer": "SAL",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Condimento",
    "fodder": "sala",
    "indicators": [
      "sin su a"
    ],
    "explanation": "Se quita la letra «a» de «sala» para obtener SAL; la definición es «Condimento»."
  },
  {
    "id": "d190",
    "difficulty": "muy-dificil",
    "clue": "Impresión producida por la luz; también carácter o matiz. (5)",
    "answer": "COLOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Impresión producida por la luz",
    "fodder": "carácter o matiz",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a COLOR: «Impresión producida por la luz» y «carácter o matiz»."
  },
  {
    "id": "d191",
    "difficulty": "muy-dificil",
    "clue": "Palabra que identifica; también reputación de una persona. (6)",
    "answer": "NOMBRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Palabra que identifica",
    "fodder": "reputación de una persona",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a NOMBRE: «Palabra que identifica» y «reputación de una persona»."
  },
  {
    "id": "d192",
    "difficulty": "muy-dificil",
    "clue": "Cubo de juego; también entregado o concedido. (4)",
    "answer": "DADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cubo de juego",
    "fodder": "entregado o concedido",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DADO: «Cubo de juego» y «entregado o concedido»."
  },
  {
    "id": "d193",
    "difficulty": "muy-dificil",
    "clue": "Orden de intervención; también jornada de trabajo. (5)",
    "answer": "TURNO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Orden de intervención",
    "fodder": "jornada de trabajo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TURNO: «Orden de intervención» y «jornada de trabajo»."
  },
  {
    "id": "d194",
    "difficulty": "muy-dificil",
    "clue": "Recipiente con asa; también persona o cosa de forma torpe, en uso coloquial. (5)",
    "answer": "JARRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recipiente con asa",
    "fodder": "persona o cosa de forma torpe, en uso coloquial",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a JARRA: «Recipiente con asa» y «persona o cosa de forma torpe, en uso coloquial»."
  },
  {
    "id": "d195",
    "difficulty": "muy-dificil",
    "clue": "Periodo de enseñanza, escondida en recursos. (5)",
    "answer": "CURSO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Periodo de enseñanza",
    "fodder": "recursos",
    "indicators": [
      "escondida en"
    ],
    "explanation": "CURSO aparece de forma continua dentro de «recursos». La definición es «Periodo de enseñanza»."
  },
  {
    "id": "d196",
    "difficulty": "muy-dificil",
    "clue": "Tabique vertical, escondida en paredes. (5)",
    "answer": "PARED",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Tabique vertical",
    "fodder": "paredes",
    "indicators": [
      "escondida en"
    ],
    "explanation": "PARED aparece de forma continua dentro de «paredes». La definición es «Tabique vertical»."
  },
  {
    "id": "d197",
    "difficulty": "muy-dificil",
    "clue": "Expresión sonora de alegría: asir vuelto. (4)",
    "answer": "RISA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Expresión sonora de alegría",
    "fodder": "asir",
    "indicators": [
      "vuelto"
    ],
    "explanation": "«asir» al revés forma RISA; la definición es «Expresión sonora de alegría»."
  },
  {
    "id": "d198",
    "difficulty": "muy-dificil",
    "clue": "Hoja fina de metal u otro material: animal vuelto. (6)",
    "answer": "LAMINA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Hoja fina de metal u otro material",
    "fodder": "animal",
    "indicators": [
      "vuelto"
    ],
    "explanation": "«animal» al revés forma LAMINA; la definición es «Hoja fina de metal u otro material»."
  },
  {
    "id": "d199",
    "difficulty": "muy-dificil",
    "clue": "Conjunto de acciones organizadas; también temporada militar. (7)",
    "answer": "CAMPAÑA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de acciones organizadas",
    "fodder": "temporada militar",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CAMPAÑA: «Conjunto de acciones organizadas» y «temporada militar»."
  },
  {
    "id": "d200",
    "difficulty": "muy-dificil",
    "clue": "Máquina que produce movimiento: moto con una r dentro. (5)",
    "answer": "MOTOR",
    "mechanisms": [
      "container"
    ],
    "definition": "Máquina que produce movimiento",
    "fodder": "moto",
    "indicators": [
      "con una r dentro"
    ],
    "explanation": "Se coloca «r» dentro de «moto» para obtener MOTOR; la definición es «Máquina que produce movimiento»."
  },
  {
    "id": "d201",
    "difficulty": "muy-dificil",
    "clue": "Extremo de algo: boca quedó trastocado. (4)",
    "answer": "CABO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Extremo de algo",
    "fodder": "boca",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «boca» se reordenan para formar CABO; la definición es «Extremo de algo»."
  },
  {
    "id": "d202",
    "difficulty": "muy-dificil",
    "clue": "Comida mexicana: tacon sin su n. (4)",
    "answer": "TACO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Comida mexicana",
    "fodder": "tacon",
    "indicators": [
      "sin su n"
    ],
    "explanation": "Se quita la letra «n» de «tacon» para obtener TACO; la definición es «Comida mexicana»."
  },
  {
    "id": "d203",
    "difficulty": "muy-dificil",
    "clue": "Movimiento al caminar: pasos sin su s. (4)",
    "answer": "PASO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Movimiento al caminar",
    "fodder": "pasos",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «pasos» para obtener PASO; la definición es «Movimiento al caminar»."
  },
  {
    "id": "d204",
    "difficulty": "muy-dificil",
    "clue": "Parte más alta: clima sin su l. (4)",
    "answer": "CIMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte más alta",
    "fodder": "clima",
    "indicators": [
      "sin su l"
    ],
    "explanation": "Se quita la letra «l» de «clima» para obtener CIMA; la definición es «Parte más alta»."
  },
  {
    "id": "d205",
    "difficulty": "muy-dificil",
    "clue": "Afecto profundo: roma vuelto. (4)",
    "answer": "AMOR",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Afecto profundo",
    "fodder": "roma",
    "indicators": [
      "vuelto"
    ],
    "explanation": "«roma» al revés forma AMOR; la definición es «Afecto profundo»."
  },
  {
    "id": "d206",
    "difficulty": "muy-dificil",
    "clue": "Borde que rodea una imagen: marcos sin su s. (5)",
    "answer": "MARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Borde que rodea una imagen",
    "fodder": "marcos",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «marcos» para obtener MARCO; la definición es «Borde que rodea una imagen»."
  },
  {
    "id": "d207",
    "difficulty": "muy-dificil",
    "clue": "Habitación amplia: sal con una a dentro. (4)",
    "answer": "SALA",
    "mechanisms": [
      "container"
    ],
    "definition": "Habitación amplia",
    "fodder": "sal",
    "indicators": [
      "con una a dentro"
    ],
    "explanation": "Se coloca «a» dentro de «sal» para obtener SALA; la definición es «Habitación amplia»."
  },
  {
    "id": "d208",
    "difficulty": "muy-dificil",
    "clue": "Desafío; también objetivo difícil. (4)",
    "answer": "RETO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Desafío",
    "fodder": "objetivo difícil",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a RETO: «Desafío» y «objetivo difícil»."
  },
  {
    "id": "d209",
    "difficulty": "muy-dificil",
    "clue": "Figura de dos líneas que se cortan; también señal de sufrimiento. (4)",
    "answer": "CRUZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Figura de dos líneas que se cortan",
    "fodder": "señal de sufrimiento",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CRUZ: «Figura de dos líneas que se cortan» y «señal de sufrimiento»."
  },
  {
    "id": "d210",
    "difficulty": "muy-dificil",
    "clue": "Pequeño roedor: rato con una n dentro. (5)",
    "answer": "RATON",
    "mechanisms": [
      "container"
    ],
    "definition": "Pequeño roedor",
    "fodder": "rato",
    "indicators": [
      "con una n dentro"
    ],
    "explanation": "Se coloca «n» dentro de «rato» para obtener RATON; la definición es «Pequeño roedor»."
  },
  {
    "id": "d211",
    "difficulty": "muy-dificil",
    "clue": "Alimento usado para atraer animales; también engaño para atraer a alguien. (4)",
    "answer": "CEBO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Alimento usado para atraer animales",
    "fodder": "engaño para atraer a alguien",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CEBO: «Alimento usado para atraer animales» y «engaño para atraer a alguien»."
  },
  {
    "id": "d212",
    "difficulty": "muy-dificil",
    "clue": "Actividad con reglas; también margen o movimiento de una pieza. (5)",
    "answer": "JUEGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Actividad con reglas",
    "fodder": "margen o movimiento de una pieza",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a JUEGO: «Actividad con reglas» y «margen o movimiento de una pieza»."
  },
  {
    "id": "d213",
    "difficulty": "muy-dificil",
    "clue": "Línea que no es recta; también tramo de una carretera que gira. (5)",
    "answer": "CURVA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea que no es recta",
    "fodder": "tramo de una carretera que gira",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CURVA: «Línea que no es recta» y «tramo de una carretera que gira»."
  },
  {
    "id": "d214",
    "difficulty": "muy-dificil",
    "clue": "Pieza que sujeta; también sujeción de oficina. (5)",
    "answer": "GRAPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que sujeta",
    "fodder": "sujeción de oficina",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a GRAPA: «Pieza que sujeta» y «sujeción de oficina»."
  },
  {
    "id": "d215",
    "difficulty": "muy-dificil",
    "clue": "Superficie que se pisa; también vivienda en un edificio. (4)",
    "answer": "PISO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie que se pisa",
    "fodder": "vivienda en un edificio",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PISO: «Superficie que se pisa» y «vivienda en un edificio»."
  },
  {
    "id": "d216",
    "difficulty": "muy-dificil",
    "clue": "Radiación que permite ver; también persona o cosa brillante. (3)",
    "answer": "LUZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Radiación que permite ver",
    "fodder": "persona o cosa brillante",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a LUZ: «Radiación que permite ver» y «persona o cosa brillante»."
  },
  {
    "id": "d217",
    "difficulty": "muy-dificil",
    "clue": "Casa familiar; también lugar donde vive alguien. (5)",
    "answer": "HOGAR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Casa familiar",
    "fodder": "lugar donde vive alguien",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a HOGAR: «Casa familiar» y «lugar donde vive alguien»."
  },
  {
    "id": "d218",
    "difficulty": "muy-dificil",
    "clue": "Argumento de una obra: rama con una t dentro. (5)",
    "answer": "TRAMA",
    "mechanisms": [
      "container"
    ],
    "definition": "Argumento de una obra",
    "fodder": "rama",
    "indicators": [
      "con una t dentro"
    ],
    "explanation": "Se coloca «t» dentro de «rama» para obtener TRAMA; la definición es «Argumento de una obra»."
  },
  {
    "id": "d219",
    "difficulty": "muy-dificil",
    "clue": "Prenda con mangas; también cubierta exterior de algo. (6)",
    "answer": "CAMISA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda con mangas",
    "fodder": "cubierta exterior de algo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CAMISA: «Prenda con mangas» y «cubierta exterior de algo»."
  },
  {
    "id": "d220",
    "difficulty": "muy-dificil",
    "clue": "Significado: destino quedó trastocado. (7)",
    "answer": "SENTIDO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Significado",
    "fodder": "destino",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «destino» se reordenan para formar SENTIDO; la definición es «Significado»."
  },
  {
    "id": "d221",
    "difficulty": "muy-dificil",
    "clue": "Del mar; también persona que trabaja en un barco. (6)",
    "answer": "MARINO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Del mar",
    "fodder": "persona que trabaja en un barco",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MARINO: «Del mar» y «persona que trabaja en un barco»."
  },
  {
    "id": "d222",
    "difficulty": "muy-dificil",
    "clue": "Aparato que recibe emisiones; también segmento desde el centro de un círculo. (5)",
    "answer": "RADIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Aparato que recibe emisiones",
    "fodder": "segmento desde el centro de un círculo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a RADIO: «Aparato que recibe emisiones» y «segmento desde el centro de un círculo»."
  },
  {
    "id": "d223",
    "difficulty": "muy-dificil",
    "clue": "Malla de hilos; también sistema conectado. (3)",
    "answer": "RED",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Malla de hilos",
    "fodder": "sistema conectado",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a RED: «Malla de hilos» y «sistema conectado»."
  },
  {
    "id": "d224",
    "difficulty": "muy-dificil",
    "clue": "Objeto que arde con una mecha: vuela sin su u. (4)",
    "answer": "VELA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Objeto que arde con una mecha",
    "fodder": "vuela",
    "indicators": [
      "sin su u"
    ],
    "explanation": "Se quita la letra «u» de «vuela» para obtener VELA; la definición es «Objeto que arde con una mecha»."
  },
  {
    "id": "d225",
    "difficulty": "muy-dificil",
    "clue": "Abertura para entrar; también medio de acceso. (6)",
    "answer": "PUERTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Abertura para entrar",
    "fodder": "medio de acceso",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PUERTA: «Abertura para entrar» y «medio de acceso»."
  },
  {
    "id": "d226",
    "difficulty": "muy-dificil",
    "clue": "Código para abrir o entender; también dato esencial. (5)",
    "answer": "CLAVE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Código para abrir o entender",
    "fodder": "dato esencial",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CLAVE: «Código para abrir o entender» y «dato esencial»."
  },
  {
    "id": "d227",
    "difficulty": "muy-dificil",
    "clue": "Asunto del que se habla, escondida en sistema. (4)",
    "answer": "TEMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Asunto del que se habla",
    "fodder": "sistema",
    "indicators": [
      "escondida en"
    ],
    "explanation": "TEMA aparece de forma continua dentro de «sistema». La definición es «Asunto del que se habla»."
  },
  {
    "id": "d228",
    "difficulty": "muy-dificil",
    "clue": "Herramienta para golpear; también hueso del oído. (8)",
    "answer": "MARTILLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Herramienta para golpear",
    "fodder": "hueso del oído",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MARTILLO: «Herramienta para golpear» y «hueso del oído»."
  },
  {
    "id": "d229",
    "difficulty": "muy-dificil",
    "clue": "Extremidad superior; también parte lateral de un objeto. (5)",
    "answer": "BRAZO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremidad superior",
    "fodder": "parte lateral de un objeto",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BRAZO: «Extremidad superior» y «parte lateral de un objeto»."
  },
  {
    "id": "d230",
    "difficulty": "muy-dificil",
    "clue": "Sucesión de peldaños; también progresión de niveles. (8)",
    "answer": "ESCALERA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sucesión de peldaños",
    "fodder": "progresión de niveles",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ESCALERA: «Sucesión de peldaños» y «progresión de niveles»."
  },
  {
    "id": "d231",
    "difficulty": "muy-dificil",
    "clue": "Líquido esencial; también transparencia o claridad de una piedra. (4)",
    "answer": "AGUA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Líquido esencial",
    "fodder": "transparencia o claridad de una piedra",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a AGUA: «Líquido esencial» y «transparencia o claridad de una piedra»."
  },
  {
    "id": "d232",
    "difficulty": "muy-dificil",
    "clue": "Obra escrita; también conjunto de hojas encuadernadas. (5)",
    "answer": "LIBRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Obra escrita",
    "fodder": "conjunto de hojas encuadernadas",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a LIBRO: «Obra escrita» y «conjunto de hojas encuadernadas»."
  },
  {
    "id": "d233",
    "difficulty": "muy-dificil",
    "clue": "Grada para espectadores: tribunal sin su l. (7)",
    "answer": "TRIBUNA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Grada para espectadores",
    "fodder": "tribunal",
    "indicators": [
      "sin su l"
    ],
    "explanation": "Se quita la letra «l» de «tribunal» para obtener TRIBUNA; la definición es «Grada para espectadores»."
  },
  {
    "id": "d234",
    "difficulty": "muy-dificil",
    "clue": "Pieza del juego de bolos: bolos sin su s. (4)",
    "answer": "BOLO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza del juego de bolos",
    "fodder": "bolos",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «bolos» para obtener BOLO; la definición es «Pieza del juego de bolos»."
  },
  {
    "id": "d235",
    "difficulty": "muy-dificil",
    "clue": "Acción de salvar; también precio pagado para recuperar algo. (7)",
    "answer": "RESCATE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de salvar",
    "fodder": "precio pagado para recuperar algo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a RESCATE: «Acción de salvar» y «precio pagado para recuperar algo»."
  },
  {
    "id": "d236",
    "difficulty": "muy-dificil",
    "clue": "Canal por el que pasa algo; también vía de comunicación. (8)",
    "answer": "CONDUCTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Canal por el que pasa algo",
    "fodder": "vía de comunicación",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CONDUCTO: «Canal por el que pasa algo» y «vía de comunicación»."
  },
  {
    "id": "d237",
    "difficulty": "muy-dificil",
    "clue": "Conjunto de fibras retorcidas; también instrumento musical de cuerda. (6)",
    "answer": "CUERDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de fibras retorcidas",
    "fodder": "instrumento musical de cuerda",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CUERDA: «Conjunto de fibras retorcidas» y «instrumento musical de cuerda»."
  },
  {
    "id": "d238",
    "difficulty": "muy-dificil",
    "clue": "Conjunto de cables; también instalación eléctrica. (8)",
    "answer": "CABLEADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de cables",
    "fodder": "instalación eléctrica",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CABLEADO: «Conjunto de cables» y «instalación eléctrica»."
  },
  {
    "id": "d239",
    "difficulty": "muy-dificil",
    "clue": "Orilla del mar; también cantidad que cuesta algo. (5)",
    "answer": "COSTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Orilla del mar",
    "fodder": "cantidad que cuesta algo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a COSTA: «Orilla del mar» y «cantidad que cuesta algo»."
  },
  {
    "id": "d240",
    "difficulty": "muy-dificil",
    "clue": "Máquina para trabajar piezas: tono con una r dentro. (5)",
    "answer": "TORNO",
    "mechanisms": [
      "container"
    ],
    "definition": "Máquina para trabajar piezas",
    "fodder": "tono",
    "indicators": [
      "con una r dentro"
    ],
    "explanation": "Se coloca «r» dentro de «tono» para obtener TORNO; la definición es «Máquina para trabajar piezas»."
  },
  {
    "id": "d241",
    "difficulty": "muy-dificil",
    "clue": "Motivo de algo: casa con una u dentro. (5)",
    "answer": "CAUSA",
    "mechanisms": [
      "container"
    ],
    "definition": "Motivo de algo",
    "fodder": "casa",
    "indicators": [
      "con una u dentro"
    ],
    "explanation": "Se coloca «u» dentro de «casa» para obtener CAUSA; la definición es «Motivo de algo»."
  },
  {
    "id": "d242",
    "difficulty": "muy-dificil",
    "clue": "Extremidad superior, escondida en humano. (4)",
    "answer": "MANO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Extremidad superior",
    "fodder": "humano",
    "indicators": [
      "escondida en"
    ],
    "explanation": "MANO aparece de forma continua dentro de «humano». La definición es «Extremidad superior»."
  },
  {
    "id": "d243",
    "difficulty": "muy-dificil",
    "clue": "Fibra para coser: hilos sin su s. (4)",
    "answer": "HILO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Fibra para coser",
    "fodder": "hilos",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «hilos» para obtener HILO; la definición es «Fibra para coser»."
  },
  {
    "id": "d244",
    "difficulty": "muy-dificil",
    "clue": "Acción de encajar; también pieza ornamental de hilo. (6)",
    "answer": "ENCAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de encajar",
    "fodder": "pieza ornamental de hilo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ENCAJE: «Acción de encajar» y «pieza ornamental de hilo»."
  },
  {
    "id": "d245",
    "difficulty": "muy-dificil",
    "clue": "Mujer distinguida; también pieza del ajedrez. (4)",
    "answer": "DAMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mujer distinguida",
    "fodder": "pieza del ajedrez",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DAMA: «Mujer distinguida» y «pieza del ajedrez»."
  },
  {
    "id": "d246",
    "difficulty": "muy-dificil",
    "clue": "Configuración externa, escondida en formal. (5)",
    "answer": "FORMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Configuración externa",
    "fodder": "formal",
    "indicators": [
      "escondida en"
    ],
    "explanation": "FORMA aparece de forma continua dentro de «formal». La definición es «Configuración externa»."
  },
  {
    "id": "d247",
    "difficulty": "muy-dificil",
    "clue": "Pelota para jugar; también persona muy tonta, coloquial. (5)",
    "answer": "BALON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pelota para jugar",
    "fodder": "persona muy tonta, coloquial",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BALON: «Pelota para jugar» y «persona muy tonta, coloquial»."
  },
  {
    "id": "d248",
    "difficulty": "muy-dificil",
    "clue": "Parte puntiaguda; también cantidad máxima. (4)",
    "answer": "PICO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte puntiaguda",
    "fodder": "cantidad máxima",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PICO: «Parte puntiaguda» y «cantidad máxima»."
  },
  {
    "id": "d249",
    "difficulty": "muy-dificil",
    "clue": "Acción de rodar; también pieza o acción de un mecanismo, según contexto. (4)",
    "answer": "RODA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de rodar",
    "fodder": "pieza o acción de un mecanismo, según contexto",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a RODA: «Acción de rodar» y «pieza o acción de un mecanismo, según contexto»."
  },
  {
    "id": "d250",
    "difficulty": "muy-dificil",
    "clue": "Pieza maciza; también grupo compacto. (6)",
    "answer": "BLOQUE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza maciza",
    "fodder": "grupo compacto",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BLOQUE: «Pieza maciza» y «grupo compacto»."
  },
  {
    "id": "d251",
    "difficulty": "muy-dificil",
    "clue": "Mandato: ordena sin su a. (5)",
    "answer": "ORDEN",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Mandato",
    "fodder": "ordena",
    "indicators": [
      "sin su a"
    ],
    "explanation": "Se quita la letra «a» de «ordena» para obtener ORDEN; la definición es «Mandato»."
  },
  {
    "id": "d252",
    "difficulty": "muy-dificil",
    "clue": "Golpe dado con fuerza; también persona que causa muchos problemas. (5)",
    "answer": "AZOTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Golpe dado con fuerza",
    "fodder": "persona que causa muchos problemas",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a AZOTE: «Golpe dado con fuerza» y «persona que causa muchos problemas»."
  },
  {
    "id": "d253",
    "difficulty": "muy-dificil",
    "clue": "Parte anterior; también zona de combate. (6)",
    "answer": "FRENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte anterior",
    "fodder": "zona de combate",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a FRENTE: «Parte anterior» y «zona de combate»."
  },
  {
    "id": "d254",
    "difficulty": "muy-dificil",
    "clue": "Serie graduada; también parada intermedia de un viaje. (6)",
    "answer": "ESCALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Serie graduada",
    "fodder": "parada intermedia de un viaje",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ESCALA: «Serie graduada» y «parada intermedia de un viaje»."
  },
  {
    "id": "d255",
    "difficulty": "muy-dificil",
    "clue": "Cavidad profunda: misa quedó trastocado. (4)",
    "answer": "SIMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Cavidad profunda",
    "fodder": "misa",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «misa» se reordenan para formar SIMA; la definición es «Cavidad profunda»."
  },
  {
    "id": "d256",
    "difficulty": "muy-dificil",
    "clue": "Grupo de alumnos; también categoría. (5)",
    "answer": "CLASE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Grupo de alumnos",
    "fodder": "categoría",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CLASE: «Grupo de alumnos» y «categoría»."
  },
  {
    "id": "d257",
    "difficulty": "muy-dificil",
    "clue": "Mamífero carnívoro: bolo quedó trastocado. (4)",
    "answer": "LOBO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Mamífero carnívoro",
    "fodder": "bolo",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «bolo» se reordenan para formar LOBO; la definición es «Mamífero carnívoro»."
  },
  {
    "id": "d258",
    "difficulty": "muy-dificil",
    "clue": "Agarrar: risa vuelto. (4)",
    "answer": "ASIR",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Agarrar",
    "fodder": "risa",
    "indicators": [
      "vuelto"
    ],
    "explanation": "«risa» al revés forma ASIR; la definición es «Agarrar»."
  },
  {
    "id": "d259",
    "difficulty": "muy-dificil",
    "clue": "Poder sobre algo; también dirección de internet. (7)",
    "answer": "DOMINIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Poder sobre algo",
    "fodder": "dirección de internet",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DOMINIO: «Poder sobre algo» y «dirección de internet»."
  },
  {
    "id": "d260",
    "difficulty": "muy-dificil",
    "clue": "Juguete que vuela con hilo; también cuerpo celeste. (6)",
    "answer": "COMETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Juguete que vuela con hilo",
    "fodder": "cuerpo celeste",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a COMETA: «Juguete que vuela con hilo» y «cuerpo celeste»."
  },
  {
    "id": "d261",
    "difficulty": "muy-dificil",
    "clue": "Línea aparente que separa cielo y tierra; también límite de lo conocido. (9)",
    "answer": "HORIZONTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea aparente que separa cielo y tierra",
    "fodder": "límite de lo conocido",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a HORIZONTE: «Línea aparente que separa cielo y tierra» y «límite de lo conocido»."
  },
  {
    "id": "d262",
    "difficulty": "muy-dificil",
    "clue": "Parte de un recorrido; también segmento. (5)",
    "answer": "TRAMO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de un recorrido",
    "fodder": "segmento",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TRAMO: «Parte de un recorrido» y «segmento»."
  },
  {
    "id": "d263",
    "difficulty": "muy-dificil",
    "clue": "Recipiente metálico; también envase de hojalata. (4)",
    "answer": "LATA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recipiente metálico",
    "fodder": "envase de hojalata",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a LATA: «Recipiente metálico» y «envase de hojalata»."
  },
  {
    "id": "d264",
    "difficulty": "muy-dificil",
    "clue": "Curva entre dos puntos: barco sin su b. (4)",
    "answer": "ARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Curva entre dos puntos",
    "fodder": "barco",
    "indicators": [
      "sin su b"
    ],
    "explanation": "Se quita la letra «b» de «barco» para obtener ARCO; la definición es «Curva entre dos puntos»."
  },
  {
    "id": "d265",
    "difficulty": "muy-dificil",
    "clue": "Documento de una reunión: actua sin su u. (4)",
    "answer": "ACTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Documento de una reunión",
    "fodder": "actua",
    "indicators": [
      "sin su u"
    ],
    "explanation": "Se quita la letra «u» de «actua» para obtener ACTA; la definición es «Documento de una reunión»."
  },
  {
    "id": "d266",
    "difficulty": "muy-dificil",
    "clue": "Plato líquido: paso quedó trastocado. (4)",
    "answer": "SOPA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Plato líquido",
    "fodder": "paso",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «paso» se reordenan para formar SOPA; la definición es «Plato líquido»."
  },
  {
    "id": "d267",
    "difficulty": "muy-dificil",
    "clue": "De sabor áspero; también desagradable. (6)",
    "answer": "AMARGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "De sabor áspero",
    "fodder": "desagradable",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a AMARGO: «De sabor áspero» y «desagradable»."
  },
  {
    "id": "d268",
    "difficulty": "muy-dificil",
    "clue": "Herramienta de dientes; también cadena montañosa. (6)",
    "answer": "SIERRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Herramienta de dientes",
    "fodder": "cadena montañosa",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a SIERRA: «Herramienta de dientes» y «cadena montañosa»."
  },
  {
    "id": "d269",
    "difficulty": "muy-dificil",
    "clue": "Lugar para una actividad; también indicio. (5)",
    "answer": "PISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar para una actividad",
    "fodder": "indicio",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PISTA: «Lugar para una actividad» y «indicio»."
  },
  {
    "id": "d270",
    "difficulty": "muy-dificil",
    "clue": "Pieza que gira y produce impulso; también órgano de ciertas estructuras. (6)",
    "answer": "HELICE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que gira y produce impulso",
    "fodder": "órgano de ciertas estructuras",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a HELICE: «Pieza que gira y produce impulso» y «órgano de ciertas estructuras»."
  },
  {
    "id": "d271",
    "difficulty": "muy-dificil",
    "clue": "Proyectil; también persona muy rápida. (4)",
    "answer": "BALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Proyectil",
    "fodder": "persona muy rápida",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BALA: «Proyectil» y «persona muy rápida»."
  },
  {
    "id": "d272",
    "difficulty": "muy-dificil",
    "clue": "Capital italiana: amor vuelto. (4)",
    "answer": "ROMA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Capital italiana",
    "fodder": "amor",
    "indicators": [
      "vuelto"
    ],
    "explanation": "«amor» al revés forma ROMA; la definición es «Capital italiana»."
  },
  {
    "id": "d273",
    "difficulty": "muy-dificil",
    "clue": "Fuerza debida a la gravedad; también importancia. (4)",
    "answer": "PESO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuerza debida a la gravedad",
    "fodder": "importancia",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PESO: «Fuerza debida a la gravedad» y «importancia»."
  },
  {
    "id": "d274",
    "difficulty": "muy-dificil",
    "clue": "Prenda para la mano; también protección que cubre una mano. (6)",
    "answer": "GUANTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda para la mano",
    "fodder": "protección que cubre una mano",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a GUANTE: «Prenda para la mano» y «protección que cubre una mano»."
  },
  {
    "id": "d275",
    "difficulty": "muy-dificil",
    "clue": "Extremo de un eje; también deporte a caballo y con pelota. (4)",
    "answer": "POLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremo de un eje",
    "fodder": "deporte a caballo y con pelota",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a POLO: «Extremo de un eje» y «deporte a caballo y con pelota»."
  },
  {
    "id": "d276",
    "difficulty": "muy-dificil",
    "clue": "Apunte escrito, escondida en anotación. (4)",
    "answer": "NOTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Apunte escrito",
    "fodder": "anotación",
    "indicators": [
      "escondida en"
    ],
    "explanation": "NOTA aparece de forma continua dentro de «anotación». La definición es «Apunte escrito»."
  },
  {
    "id": "d277",
    "difficulty": "muy-dificil",
    "clue": "Dulce de azúcar; también algo muy atractivo. (8)",
    "answer": "CARAMELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Dulce de azúcar",
    "fodder": "algo muy atractivo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CARAMELO: «Dulce de azúcar» y «algo muy atractivo»."
  },
  {
    "id": "d278",
    "difficulty": "muy-dificil",
    "clue": "Caminata; también lugar para caminar. (5)",
    "answer": "PASEO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Caminata",
    "fodder": "lugar para caminar",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PASEO: «Caminata» y «lugar para caminar»."
  },
  {
    "id": "d279",
    "difficulty": "muy-dificil",
    "clue": "Fruto seco de uva: pasar sin su r. (4)",
    "answer": "PASA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Fruto seco de uva",
    "fodder": "pasar",
    "indicators": [
      "sin su r"
    ],
    "explanation": "Se quita la letra «r» de «pasar» para obtener PASA; la definición es «Fruto seco de uva»."
  },
  {
    "id": "d280",
    "difficulty": "muy-dificil",
    "clue": "Parte principal de un árbol; también cuerpo humano sin extremidades. (6)",
    "answer": "TRONCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte principal de un árbol",
    "fodder": "cuerpo humano sin extremidades",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TRONCO: «Parte principal de un árbol» y «cuerpo humano sin extremidades»."
  },
  {
    "id": "d281",
    "difficulty": "experto",
    "clue": "Construcción elevada; también pieza del ajedrez. (5)",
    "answer": "TORRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Construcción elevada",
    "fodder": "pieza del ajedrez",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TORRE: «Construcción elevada» y «pieza del ajedrez»."
  },
  {
    "id": "d282",
    "difficulty": "experto",
    "clue": "Masa visible de vapor de agua; también servicio informático remoto. (4)",
    "answer": "NUBE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Masa visible de vapor de agua",
    "fodder": "servicio informático remoto",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a NUBE: «Masa visible de vapor de agua» y «servicio informático remoto»."
  },
  {
    "id": "d283",
    "difficulty": "experto",
    "clue": "Utensilio para trasvasar líquidos; también forma que se estrecha. (6)",
    "answer": "EMBUDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Utensilio para trasvasar líquidos",
    "fodder": "forma que se estrecha",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a EMBUDO: «Utensilio para trasvasar líquidos» y «forma que se estrecha»."
  },
  {
    "id": "d284",
    "difficulty": "experto",
    "clue": "Estructura que cubre a un ave; también instrumento para escribir. (5)",
    "answer": "PLUMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Estructura que cubre a un ave",
    "fodder": "instrumento para escribir",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PLUMA: «Estructura que cubre a un ave» y «instrumento para escribir»."
  },
  {
    "id": "d285",
    "difficulty": "experto",
    "clue": "Camino más corto; también procedimiento rápido. (5)",
    "answer": "ATAJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Camino más corto",
    "fodder": "procedimiento rápido",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ATAJO: «Camino más corto» y «procedimiento rápido»."
  },
  {
    "id": "d286",
    "difficulty": "experto",
    "clue": "Superficie de tierra; también ámbito en que se desarrolla algo. (7)",
    "answer": "TERRENO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie de tierra",
    "fodder": "ámbito en que se desarrolla algo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TERRENO: «Superficie de tierra» y «ámbito en que se desarrolla algo»."
  },
  {
    "id": "d287",
    "difficulty": "experto",
    "clue": "Embarcación: ave con una n dentro. (4)",
    "answer": "NAVE",
    "mechanisms": [
      "container"
    ],
    "definition": "Embarcación",
    "fodder": "ave",
    "indicators": [
      "con una n dentro"
    ],
    "explanation": "Se coloca «n» dentro de «ave» para obtener NAVE; la definición es «Embarcación»."
  },
  {
    "id": "d288",
    "difficulty": "experto",
    "clue": "Que está por resolverse; también inclinación de una superficie. (9)",
    "answer": "PENDIENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Que está por resolverse",
    "fodder": "inclinación de una superficie",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PENDIENTE: «Que está por resolverse» y «inclinación de una superficie»."
  },
  {
    "id": "d289",
    "difficulty": "experto",
    "clue": "Instrumento para orientarse; también guía. (7)",
    "answer": "BRUJULA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Instrumento para orientarse",
    "fodder": "guía",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BRUJULA: «Instrumento para orientarse» y «guía»."
  },
  {
    "id": "d290",
    "difficulty": "experto",
    "clue": "Calzado que cubre el pie y parte de la pierna, al oído: vota. (4)",
    "answer": "BOTA",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Calzado que cubre el pie y parte de la pierna",
    "fodder": "vota",
    "indicators": [
      "al oído"
    ],
    "explanation": "BOTA suena como «vota»; la definición es «Calzado que cubre el pie y parte de la pierna»."
  },
  {
    "id": "d291",
    "difficulty": "experto",
    "clue": "Peso transportado: cara con una g dentro. (5)",
    "answer": "CARGA",
    "mechanisms": [
      "container"
    ],
    "definition": "Peso transportado",
    "fodder": "cara",
    "indicators": [
      "con una g dentro"
    ],
    "explanation": "Se coloca «g» dentro de «cara» para obtener CARGA; la definición es «Peso transportado»."
  },
  {
    "id": "d292",
    "difficulty": "experto",
    "clue": "Conjunto de flores: tramo sin su t. (4)",
    "answer": "RAMO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Conjunto de flores",
    "fodder": "tramo",
    "indicators": [
      "sin su t"
    ],
    "explanation": "Se quita la letra «t» de «tramo» para obtener RAMO; la definición es «Conjunto de flores»."
  },
  {
    "id": "d293",
    "difficulty": "experto",
    "clue": "Parte de un árbol: amar vuelto. (4)",
    "answer": "RAMA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Parte de un árbol",
    "fodder": "amar",
    "indicators": [
      "vuelto"
    ],
    "explanation": "«amar» al revés forma RAMA; la definición es «Parte de un árbol»."
  },
  {
    "id": "d294",
    "difficulty": "experto",
    "clue": "Objeto que da forma; también modelo que sirve de guía. (5)",
    "answer": "MOLDE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que da forma",
    "fodder": "modelo que sirve de guía",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MOLDE: «Objeto que da forma» y «modelo que sirve de guía»."
  },
  {
    "id": "d295",
    "difficulty": "experto",
    "clue": "Representación visual; también idea mental de algo. (6)",
    "answer": "IMAGEN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación visual",
    "fodder": "idea mental de algo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a IMAGEN: «Representación visual» y «idea mental de algo»."
  },
  {
    "id": "d296",
    "difficulty": "experto",
    "clue": "Entonación particular; también signo ortográfico. (6)",
    "answer": "ACENTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Entonación particular",
    "fodder": "signo ortográfico",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ACENTO: «Entonación particular» y «signo ortográfico»."
  },
  {
    "id": "d297",
    "difficulty": "experto",
    "clue": "Aro que se lleva en un dedo; también estructura circular. (6)",
    "answer": "ANILLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Aro que se lleva en un dedo",
    "fodder": "estructura circular",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ANILLO: «Aro que se lleva en un dedo» y «estructura circular»."
  },
  {
    "id": "d298",
    "difficulty": "experto",
    "clue": "Borde de un río o mar; también límite de una superficie. (6)",
    "answer": "ORILLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde de un río o mar",
    "fodder": "límite de una superficie",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ORILLA: «Borde de un río o mar» y «límite de una superficie»."
  },
  {
    "id": "d299",
    "difficulty": "experto",
    "clue": "Refugio de aves, escondida en sonido. (4)",
    "answer": "NIDO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Refugio de aves",
    "fodder": "sonido",
    "indicators": [
      "escondida en"
    ],
    "explanation": "NIDO aparece de forma continua dentro de «sonido». La definición es «Refugio de aves»."
  },
  {
    "id": "d300",
    "difficulty": "experto",
    "clue": "Terreno fuera de la ciudad; también ámbito de actividad. (5)",
    "answer": "CAMPO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Terreno fuera de la ciudad",
    "fodder": "ámbito de actividad",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CAMPO: «Terreno fuera de la ciudad» y «ámbito de actividad»."
  },
  {
    "id": "d301",
    "difficulty": "experto",
    "clue": "Animal capturado: peras quedó trastocado. (5)",
    "answer": "PRESA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Animal capturado",
    "fodder": "peras",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «peras» se reordenan para formar PRESA; la definición es «Animal capturado»."
  },
  {
    "id": "d302",
    "difficulty": "experto",
    "clue": "Extremidad de un animal: tapa quedó trastocado. (4)",
    "answer": "PATA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Extremidad de un animal",
    "fodder": "tapa",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «tapa» se reordenan para formar PATA; la definición es «Extremidad de un animal»."
  },
  {
    "id": "d303",
    "difficulty": "experto",
    "clue": "Extensión que ocupa algo; también hueco disponible. (7)",
    "answer": "ESPACIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extensión que ocupa algo",
    "fodder": "hueco disponible",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ESPACIO: «Extensión que ocupa algo» y «hueco disponible»."
  },
  {
    "id": "d304",
    "difficulty": "experto",
    "clue": "Acción de disparar; también salida brusca de un líquido. (7)",
    "answer": "DISPARO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de disparar",
    "fodder": "salida brusca de un líquido",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DISPARO: «Acción de disparar» y «salida brusca de un líquido»."
  },
  {
    "id": "d305",
    "difficulty": "experto",
    "clue": "Parte lateral del cuerpo; también lado de algo. (7)",
    "answer": "COSTADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte lateral del cuerpo",
    "fodder": "lado de algo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a COSTADO: «Parte lateral del cuerpo» y «lado de algo»."
  },
  {
    "id": "d306",
    "difficulty": "experto",
    "clue": "Elemento que forma parte de un conjunto: piezas sin su s. (5)",
    "answer": "PIEZA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Elemento que forma parte de un conjunto",
    "fodder": "piezas",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «piezas» para obtener PIEZA; la definición es «Elemento que forma parte de un conjunto»."
  },
  {
    "id": "d307",
    "difficulty": "experto",
    "clue": "Instrumento para abrir; también solución de un problema. (5)",
    "answer": "LLAVE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Instrumento para abrir",
    "fodder": "solución de un problema",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a LLAVE: «Instrumento para abrir» y «solución de un problema»."
  },
  {
    "id": "d308",
    "difficulty": "experto",
    "clue": "Actividad para entretenerse; también juego o afición. (10)",
    "answer": "PASATIEMPO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Actividad para entretenerse",
    "fodder": "juego o afición",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PASATIEMPO: «Actividad para entretenerse» y «juego o afición»."
  },
  {
    "id": "d309",
    "difficulty": "experto",
    "clue": "Recinto para animales; también lugar de encierro. (6)",
    "answer": "CORRAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recinto para animales",
    "fodder": "lugar de encierro",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CORRAL: «Recinto para animales» y «lugar de encierro»."
  },
  {
    "id": "d310",
    "difficulty": "experto",
    "clue": "Contorno de una figura; también conjunto de rasgos de una persona. (6)",
    "answer": "PERFIL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Contorno de una figura",
    "fodder": "conjunto de rasgos de una persona",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PERFIL: «Contorno de una figura» y «conjunto de rasgos de una persona»."
  },
  {
    "id": "d311",
    "difficulty": "experto",
    "clue": "Defensa protectora; también emblema. (6)",
    "answer": "ESCUDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Defensa protectora",
    "fodder": "emblema",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a ESCUDO: «Defensa protectora» y «emblema»."
  },
  {
    "id": "d312",
    "difficulty": "experto",
    "clue": "Sin asperezas: lista sin su t. (4)",
    "answer": "LISA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Sin asperezas",
    "fodder": "lista",
    "indicators": [
      "sin su t"
    ],
    "explanation": "Se quita la letra «t» de «lista» para obtener LISA; la definición es «Sin asperezas»."
  },
  {
    "id": "d313",
    "difficulty": "experto",
    "clue": "Señal distintiva; también empresa o producto. (5)",
    "answer": "MARCA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Señal distintiva",
    "fodder": "empresa o producto",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MARCA: «Señal distintiva» y «empresa o producto»."
  },
  {
    "id": "d314",
    "difficulty": "experto",
    "clue": "Vivienda, al oído: caza. (4)",
    "answer": "CASA",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Vivienda",
    "fodder": "caza",
    "indicators": [
      "al oído"
    ],
    "explanation": "CASA suena como «caza»; la definición es «Vivienda»."
  },
  {
    "id": "d315",
    "difficulty": "experto",
    "clue": "Herramienta para cavar, escondida en palabra. (4)",
    "answer": "PALA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Herramienta para cavar",
    "fodder": "palabra",
    "indicators": [
      "escondida en"
    ],
    "explanation": "PALA aparece de forma continua dentro de «palabra». La definición es «Herramienta para cavar»."
  },
  {
    "id": "d316",
    "difficulty": "experto",
    "clue": "Suelo; también planeta. (6)",
    "answer": "TIERRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Suelo",
    "fodder": "planeta",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TIERRA: «Suelo» y «planeta»."
  },
  {
    "id": "d317",
    "difficulty": "experto",
    "clue": "Pieza que cubre: pata quedó trastocado. (4)",
    "answer": "TAPA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Pieza que cubre",
    "fodder": "pata",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «pata» se reordenan para formar TAPA; la definición es «Pieza que cubre»."
  },
  {
    "id": "d318",
    "difficulty": "experto",
    "clue": "Mueble para apoyar cosas; también grupo que debate un asunto. (4)",
    "answer": "MESA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mueble para apoyar cosas",
    "fodder": "grupo que debate un asunto",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MESA: «Mueble para apoyar cosas» y «grupo que debate un asunto»."
  },
  {
    "id": "d319",
    "difficulty": "experto",
    "clue": "Salida de un tallo; también aparición repentina de algo. (5)",
    "answer": "BROTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Salida de un tallo",
    "fodder": "aparición repentina de algo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BROTE: «Salida de un tallo» y «aparición repentina de algo»."
  },
  {
    "id": "d320",
    "difficulty": "experto",
    "clue": "Conducto de agua: ancla quedó trastocado. (5)",
    "answer": "CANAL",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Conducto de agua",
    "fodder": "ancla",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «ancla» se reordenan para formar CANAL; la definición es «Conducto de agua»."
  },
  {
    "id": "d321",
    "difficulty": "experto",
    "clue": "Prenda de vestir; también parte baja de una montaña. (5)",
    "answer": "FALDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda de vestir",
    "fodder": "parte baja de una montaña",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a FALDA: «Prenda de vestir» y «parte baja de una montaña»."
  },
  {
    "id": "d322",
    "difficulty": "experto",
    "clue": "Parte entre cabeza y tronco; también parte estrecha de una botella. (6)",
    "answer": "CUELLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte entre cabeza y tronco",
    "fodder": "parte estrecha de una botella",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a CUELLO: «Parte entre cabeza y tronco» y «parte estrecha de una botella»."
  },
  {
    "id": "d323",
    "difficulty": "experto",
    "clue": "Que contiene dos veces una cantidad; también persona que sustituye a otra. (5)",
    "answer": "DOBLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Que contiene dos veces una cantidad",
    "fodder": "persona que sustituye a otra",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DOBLE: «Que contiene dos veces una cantidad» y «persona que sustituye a otra»."
  },
  {
    "id": "d324",
    "difficulty": "experto",
    "clue": "Objeto indefinido: cosas sin su s. (4)",
    "answer": "COSA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Objeto indefinido",
    "fodder": "cosas",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «cosas» para obtener COSA; la definición es «Objeto indefinido»."
  },
  {
    "id": "d325",
    "difficulty": "experto",
    "clue": "Proyectil con punta; también símbolo que indica dirección. (6)",
    "answer": "FLECHA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Proyectil con punta",
    "fodder": "símbolo que indica dirección",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a FLECHA: «Proyectil con punta» y «símbolo que indica dirección»."
  },
  {
    "id": "d326",
    "difficulty": "experto",
    "clue": "Voz emitida con fuerza; también clamor colectivo. (5)",
    "answer": "GRITO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Voz emitida con fuerza",
    "fodder": "clamor colectivo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a GRITO: «Voz emitida con fuerza» y «clamor colectivo»."
  },
  {
    "id": "d327",
    "difficulty": "experto",
    "clue": "Marca estampada; también precinto adhesivo. (5)",
    "answer": "SELLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Marca estampada",
    "fodder": "precinto adhesivo",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a SELLO: «Marca estampada» y «precinto adhesivo»."
  },
  {
    "id": "d328",
    "difficulty": "experto",
    "clue": "Masa de agua interior; también forma de un recipiente, en ciertos usos. (4)",
    "answer": "LAGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Masa de agua interior",
    "fodder": "forma de un recipiente, en ciertos usos",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a LAGO: «Masa de agua interior» y «forma de un recipiente, en ciertos usos»."
  },
  {
    "id": "d329",
    "difficulty": "experto",
    "clue": "Saco flexible; también mercado de valores. (5)",
    "answer": "BOLSA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Saco flexible",
    "fodder": "mercado de valores",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BOLSA: «Saco flexible» y «mercado de valores»."
  },
  {
    "id": "d330",
    "difficulty": "experto",
    "clue": "Ave doméstica; también persona cobarde. (7)",
    "answer": "GALLINA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ave doméstica",
    "fodder": "persona cobarde",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a GALLINA: «Ave doméstica» y «persona cobarde»."
  },
  {
    "id": "d331",
    "difficulty": "experto",
    "clue": "Sacerdote: curva sin su v. (4)",
    "answer": "CURA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Sacerdote",
    "fodder": "curva",
    "indicators": [
      "sin su v"
    ],
    "explanation": "Se quita la letra «v» de «curva» para obtener CURA; la definición es «Sacerdote»."
  },
  {
    "id": "d332",
    "difficulty": "experto",
    "clue": "Porción de tierra rodeada de agua: lisa quedó trastocado. (4)",
    "answer": "ISLA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Porción de tierra rodeada de agua",
    "fodder": "lisa",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «lisa» se reordenan para formar ISLA; la definición es «Porción de tierra rodeada de agua»."
  },
  {
    "id": "d333",
    "difficulty": "experto",
    "clue": "Contacto afectuoso con los labios; también marca afectuosa. (4)",
    "answer": "BESO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Contacto afectuoso con los labios",
    "fodder": "marca afectuosa",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BESO: «Contacto afectuoso con los labios» y «marca afectuosa»."
  },
  {
    "id": "d334",
    "difficulty": "experto",
    "clue": "Construcción para salvar un obstáculo; también día laborable entre festivos. (6)",
    "answer": "PUENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Construcción para salvar un obstáculo",
    "fodder": "día laborable entre festivos",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PUENTE: «Construcción para salvar un obstáculo» y «día laborable entre festivos»."
  },
  {
    "id": "d335",
    "difficulty": "experto",
    "clue": "Sufrimiento físico; también pena que duele. (5)",
    "answer": "DOLOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sufrimiento físico",
    "fodder": "pena que duele",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DOLOR: «Sufrimiento físico» y «pena que duele»."
  },
  {
    "id": "d336",
    "difficulty": "experto",
    "clue": "Expresión que indica cantidad, escondida en numeroso. (6)",
    "answer": "NUMERO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Expresión que indica cantidad",
    "fodder": "numeroso",
    "indicators": [
      "escondida en"
    ],
    "explanation": "NUMERO aparece de forma continua dentro de «numeroso». La definición es «Expresión que indica cantidad»."
  },
  {
    "id": "d337",
    "difficulty": "experto",
    "clue": "Altura de un sonido: trono sin su r. (4)",
    "answer": "TONO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Altura de un sonido",
    "fodder": "trono",
    "indicators": [
      "sin su r"
    ],
    "explanation": "Se quita la letra «r» de «trono» para obtener TONO; la definición es «Altura de un sonido»."
  },
  {
    "id": "d338",
    "difficulty": "experto",
    "clue": "Semilla pequeña: gran con una o dentro. (5)",
    "answer": "GRANO",
    "mechanisms": [
      "container"
    ],
    "definition": "Semilla pequeña",
    "fodder": "gran",
    "indicators": [
      "con una o dentro"
    ],
    "explanation": "Se coloca «o» dentro de «gran» para obtener GRANO; la definición es «Semilla pequeña»."
  },
  {
    "id": "d339",
    "difficulty": "experto",
    "clue": "Parte por donde se agarra una herramienta: mano con una g dentro. (5)",
    "answer": "MANGO",
    "mechanisms": [
      "container"
    ],
    "definition": "Parte por donde se agarra una herramienta",
    "fodder": "mano",
    "indicators": [
      "con una g dentro"
    ],
    "explanation": "Se coloca «g» dentro de «mano» para obtener MANGO; la definición es «Parte por donde se agarra una herramienta»."
  },
  {
    "id": "d340",
    "difficulty": "experto",
    "clue": "Extremidades de un ave: sala quedó trastocado. (4)",
    "answer": "ALAS",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Extremidades de un ave",
    "fodder": "sala",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «sala» se reordenan para formar ALAS; la definición es «Extremidades de un ave»."
  },
  {
    "id": "d341",
    "difficulty": "experto",
    "clue": "Parte lateral; también cada una de dos posiciones enfrentadas. (4)",
    "answer": "LADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte lateral",
    "fodder": "cada una de dos posiciones enfrentadas",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a LADO: «Parte lateral» y «cada una de dos posiciones enfrentadas»."
  },
  {
    "id": "d342",
    "difficulty": "experto",
    "clue": "Facultad de pensar; también persona muy inteligente. (5)",
    "answer": "MENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Facultad de pensar",
    "fodder": "persona muy inteligente",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a MENTE: «Facultad de pensar» y «persona muy inteligente»."
  },
  {
    "id": "d343",
    "difficulty": "experto",
    "clue": "Lugar al que se dirige alguien: sentido quedó trastocado. (7)",
    "answer": "DESTINO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Lugar al que se dirige alguien",
    "fodder": "sentido",
    "indicators": [
      "trastocado"
    ],
    "explanation": "Las letras de «sentido» se reordenan para formar DESTINO; la definición es «Lugar al que se dirige alguien»."
  },
  {
    "id": "d344",
    "difficulty": "experto",
    "clue": "Parte de una prenda: mangas sin su s. (5)",
    "answer": "MANGA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte de una prenda",
    "fodder": "mangas",
    "indicators": [
      "sin su s"
    ],
    "explanation": "Se quita la letra «s» de «mangas» para obtener MANGA; la definición es «Parte de una prenda»."
  },
  {
    "id": "d345",
    "difficulty": "experto",
    "clue": "Ave acuática: plato sin su l. (4)",
    "answer": "PATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Ave acuática",
    "fodder": "plato",
    "indicators": [
      "sin su l"
    ],
    "explanation": "Se quita la letra «l» de «plato» para obtener PATO; la definición es «Ave acuática»."
  },
  {
    "id": "d346",
    "difficulty": "experto",
    "clue": "Nombre de una obra; también distinción académica. (6)",
    "answer": "TITULO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Nombre de una obra",
    "fodder": "distinción académica",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a TITULO: «Nombre de una obra» y «distinción académica»."
  },
  {
    "id": "d347",
    "difficulty": "experto",
    "clue": "Parte posterior; también reverso de una mano. (5)",
    "answer": "DORSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte posterior",
    "fodder": "reverso de una mano",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a DORSO: «Parte posterior» y «reverso de una mano»."
  },
  {
    "id": "d348",
    "difficulty": "experto",
    "clue": "Fuente de luz; también centro de atención. (4)",
    "answer": "FOCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuente de luz",
    "fodder": "centro de atención",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a FOCO: «Fuente de luz» y «centro de atención»."
  },
  {
    "id": "d349",
    "difficulty": "experto",
    "clue": "Sucesión de puntos; también servicio o ruta de transporte. (5)",
    "answer": "LINEA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sucesión de puntos",
    "fodder": "servicio o ruta de transporte",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a LINEA: «Sucesión de puntos» y «servicio o ruta de transporte»."
  },
  {
    "id": "d350",
    "difficulty": "experto",
    "clue": "Pieza de un juego; también tarjeta con datos. (5)",
    "answer": "FICHA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza de un juego",
    "fodder": "tarjeta con datos",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a FICHA: «Pieza de un juego» y «tarjeta con datos»."
  },
  {
    "id": "d351",
    "difficulty": "experto",
    "clue": "Asiento de un monarca: tronco sin su c. (5)",
    "answer": "TRONO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Asiento de un monarca",
    "fodder": "tronco",
    "indicators": [
      "sin su c"
    ],
    "explanation": "Se quita la letra «c» de «tronco» para obtener TRONO; la definición es «Asiento de un monarca»."
  },
  {
    "id": "d352",
    "difficulty": "experto",
    "clue": "Sentir amor: mar con una a dentro. (4)",
    "answer": "AMAR",
    "mechanisms": [
      "container"
    ],
    "definition": "Sentir amor",
    "fodder": "mar",
    "indicators": [
      "con una a dentro"
    ],
    "explanation": "Se coloca «a» dentro de «mar» para obtener AMAR; la definición es «Sentir amor»."
  },
  {
    "id": "d353",
    "difficulty": "experto",
    "clue": "Filamento que nace en la piel; también cabello. (4)",
    "answer": "PELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Filamento que nace en la piel",
    "fodder": "cabello",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a PELO: «Filamento que nace en la piel» y «cabello»."
  },
  {
    "id": "d354",
    "difficulty": "experto",
    "clue": "Ayuda; también punto en que algo descansa. (5)",
    "answer": "APOYO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ayuda",
    "fodder": "punto en que algo descansa",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a APOYO: «Ayuda» y «punto en que algo descansa»."
  },
  {
    "id": "d355",
    "difficulty": "experto",
    "clue": "Parte dura del esqueleto; también elemento difícil de tratar. (5)",
    "answer": "HUESO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte dura del esqueleto",
    "fodder": "elemento difícil de tratar",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a HUESO: «Parte dura del esqueleto» y «elemento difícil de tratar»."
  },
  {
    "id": "d356",
    "difficulty": "experto",
    "clue": "Zona de una ciudad; también conjunto de casas de una zona. (6)",
    "answer": "BARRIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Zona de una ciudad",
    "fodder": "conjunto de casas de una zona",
    "indicators": [
      "también"
    ],
    "explanation": "Las dos definiciones apuntan a BARRIO: «Zona de una ciudad» y «conjunto de casas de una zona»."
  }
];
