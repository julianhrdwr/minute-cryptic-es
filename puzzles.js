// Banco revisado: 356 pistas con superficies naturales y mecanismos mezclados.
const MECHANISM_INDICATORS = {
  anagram: ["revuelto", "mezclado", "desordenado", "fuera de orden", "cambia de sitio", "pierde el orden"],
  hidden: ["perdida dentro de", "oculta en", "escondida en", "camuflada entre"],
  deletion: ["pierde una pieza", "pierde el final", "pierde su remate", "sin su comienzo"],
  reversal: ["regresa", "mirando hacia atrás", "vuelve sobre sus pasos", "al revés"],
  container: ["abraza una intrusa", "encierra", "envuelve", "lleva dentro"],
  homophone: ["en voz alta", "al oído", "si lo dices"],
  "double-definition": ["o", "y también", "pero también"]
};
const ANAGRAM_INDICATORS = MECHANISM_INDICATORS.anagram;

const PUZZLES = [
  {
    "id": "d001",
    "difficulty": "dificil",
    "clue": "Habitación amplia, perdida dentro de salones. (5)",
    "answer": "SALON",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Habitación amplia",
    "fodder": "salones",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "SALON aparece de forma continua dentro de «salones». La definición es «Habitación amplia»."
  },
  {
    "id": "d002",
    "difficulty": "dificil",
    "clue": "Vegetal que queda cuando planeta pierde una pieza. (6)",
    "answer": "PLANTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Vegetal",
    "fodder": "planeta",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "PLANTA se obtiene de planeta al retirar la letra indicada por la pista."
  },
  {
    "id": "d003",
    "difficulty": "dificil",
    "clue": "Pieza circular que queda cuando ruedas pierde su final. (5)",
    "answer": "RUEDA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza circular que gira",
    "fodder": "ruedas",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "RUEDA se obtiene de ruedas al retirar la letra indicada por la pista."
  },
  {
    "id": "d004",
    "difficulty": "dificil",
    "clue": "Comida mexicana que queda cuando tacón pierde su última pieza. (4)",
    "answer": "TACO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Comida mexicana",
    "fodder": "tacon",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "TACO se obtiene de tacon al retirar la letra indicada por la pista."
  },
  {
    "id": "d005",
    "difficulty": "dificil",
    "clue": "Órgano de la visión que queda cuando rojo pierde una pieza. (3)",
    "answer": "OJO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Órgano de la visión",
    "fodder": "rojo",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "OJO se obtiene de rojo al retirar la letra indicada por la pista."
  },
  {
    "id": "d006",
    "difficulty": "dificil",
    "clue": "Centro de enseñanza o corriente o estilo de pensamiento. (7)",
    "answer": "ESCUELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Centro de enseñanza",
    "fodder": "corriente o estilo de pensamiento",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a ESCUELA: «Centro de enseñanza» y «corriente o estilo de pensamiento»."
  },
  {
    "id": "d007",
    "difficulty": "dificil",
    "clue": "Marca que deja el paso o rastro de algo. (6)",
    "answer": "HUELLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Marca dejada al pisar",
    "fodder": "rastro",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a HUELLA: «Marca dejada al pisar» y «rastro»."
  },
  {
    "id": "d008",
    "difficulty": "dificil",
    "clue": "Pieza de la dentadura que queda cuando dientes pierde su final. (6)",
    "answer": "DIENTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza de la dentadura",
    "fodder": "dientes",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "DIENTE se obtiene de dientes al retirar la letra indicada por la pista."
  },
  {
    "id": "d009",
    "difficulty": "dificil",
    "clue": "Torre que guía a los barcos cuando cae la noche. (4)",
    "answer": "FARO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Torre que guía a los barcos",
    "fodder": "faroS",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "FARO se obtiene de faroS al retirar la letra indicada por la pista."
  },
  {
    "id": "d010",
    "difficulty": "dificil",
    "clue": "Entre persona que trabaja en un barco y propio del mar, la palabra no cambia. (8)",
    "answer": "MARINERO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que trabaja en un barco",
    "fodder": "propio del mar",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MARINERO: «Persona que trabaja en un barco» y «propio del mar»."
  },
  {
    "id": "d011",
    "difficulty": "medio-dificil",
    "clue": "Puede abrir una cerradura o hacer que entiendas el acertijo. (5)",
    "answer": "CLAVE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede abrir una cerradura",
    "fodder": "",
    "indicators": [
      "o"
    ],
    "explanation": "CLAVE es código/llave y dato esencial."
  },
  {
    "id": "d012",
    "difficulty": "dificil",
    "clue": "Entre pieza maciza y grupo compacto, la palabra no cambia. (6)",
    "answer": "BLOQUE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza maciza",
    "fodder": "grupo compacto",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BLOQUE: «Pieza maciza» y «grupo compacto»."
  },
  {
    "id": "d013",
    "difficulty": "medio-dificil",
    "clue": "No cede en una discusión ni bajo los pies. (5)",
    "answer": "FIRME",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "No cede",
    "fodder": "",
    "indicators": [
      "ni"
    ],
    "explanation": "FIRME funciona como cualidad de carácter y de una superficie."
  },
  {
    "id": "d014",
    "difficulty": "dificil",
    "clue": "Puede ser espacio abierto dentro de una vivienda o zona interior de un edificio. (5)",
    "answer": "PATIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio abierto dentro de una vivienda",
    "fodder": "zona interior de un edificio",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PATIO: «Espacio abierto dentro de una vivienda» y «zona interior de un edificio»."
  },
  {
    "id": "d015",
    "difficulty": "dificil",
    "clue": "Sirve para mueble para apoyar cosas y también para grupo que debate un asunto. (4)",
    "answer": "MESA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mueble para apoyar cosas",
    "fodder": "grupo que debate un asunto",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a MESA: «Mueble para apoyar cosas» y «grupo que debate un asunto»."
  },
  {
    "id": "d016",
    "difficulty": "dificil",
    "clue": "Embarcación que queda cuando barcos pierde una pieza. (5)",
    "answer": "BARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Embarcación",
    "fodder": "barcos",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "BARCO se obtiene de barcos al retirar la letra indicada por la pista."
  },
  {
    "id": "d017",
    "difficulty": "medio-dificil",
    "clue": "Puede ocultar al protagonista o mostrarlo a todos. (8)",
    "answer": "PANTALLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ocultar al protagonista",
    "fodder": "",
    "indicators": [
      "o"
    ],
    "explanation": "PANTALLA es superficie de imagen y protección que oculta."
  },
  {
    "id": "d018",
    "difficulty": "dificil",
    "clue": "Sirve para unidad de medida y también para nivel o categoría. (5)",
    "answer": "GRADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Unidad de medida",
    "fodder": "nivel o categoría",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a GRADO: «Unidad de medida» y «nivel o categoría»."
  },
  {
    "id": "d019",
    "difficulty": "dificil",
    "clue": "Sirve para fragmento de un texto y también para billete para viajar. (6)",
    "answer": "PASAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fragmento de un texto",
    "fodder": "billete para viajar",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a PASAJE: «Fragmento de un texto» y «billete para viajar»."
  },
  {
    "id": "d020",
    "difficulty": "dificil",
    "clue": "Cavidad profunda que sale de misa cuando todo queda revuelto. (4)",
    "answer": "SIMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Cavidad profunda",
    "fodder": "misa",
    "indicators": [
      "todo queda revuelto"
    ],
    "explanation": "Las letras de misa se reordenan para formar SIMA."
  },
  {
    "id": "d021",
    "difficulty": "dificil",
    "clue": "Asiento de un monarca que queda cuando tronco pierde una pieza. (5)",
    "answer": "TRONO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Asiento de un monarca",
    "fodder": "tronco",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "TRONO se obtiene de tronco al retirar la letra indicada por la pista."
  },
  {
    "id": "d022",
    "difficulty": "dificil",
    "clue": "Puede ser asiento con respaldo o cargo o puesto. (5)",
    "answer": "SILLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Asiento con respaldo",
    "fodder": "cargo o puesto",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a SILLA: «Asiento con respaldo» y «cargo o puesto»."
  },
  {
    "id": "d023",
    "difficulty": "dificil",
    "clue": "Sirve para voz emitida con fuerza y también para clamor colectivo. (5)",
    "answer": "GRITO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Voz emitida con fuerza",
    "fodder": "clamor colectivo",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a GRITO: «Voz emitida con fuerza» y «clamor colectivo»."
  },
  {
    "id": "d024",
    "difficulty": "dificil",
    "clue": "Repetición de un sonido que queda cuando seco pierde una pieza. (3)",
    "answer": "ECO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Repetición de un sonido",
    "fodder": "seco",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "ECO se obtiene de seco al retirar la letra indicada por la pista."
  },
  {
    "id": "d025",
    "difficulty": "dificil",
    "clue": "Puede ser acción de montar o conjunto de piezas ensambladas. (7)",
    "answer": "MONTAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de montar",
    "fodder": "conjunto de piezas ensambladas",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MONTAJE: «Acción de montar» y «conjunto de piezas ensambladas»."
  },
  {
    "id": "d026",
    "difficulty": "dificil",
    "clue": "Sacerdote que queda cuando curva pierde una pieza. (4)",
    "answer": "CURA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Sacerdote",
    "fodder": "curva",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "CURA se obtiene de curva al retirar la letra indicada por la pista."
  },
  {
    "id": "d027",
    "difficulty": "dificil",
    "clue": "Sirve para acción de disparar y también para salida brusca de un líquido. (7)",
    "answer": "DISPARO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de disparar",
    "fodder": "salida brusca de un líquido",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a DISPARO: «Acción de disparar» y «salida brusca de un líquido»."
  },
  {
    "id": "d028",
    "difficulty": "dificil",
    "clue": "Sirve para vía urbana y también para espacio entre dos filas. (5)",
    "answer": "CALLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vía urbana",
    "fodder": "espacio entre dos filas",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CALLE: «Vía urbana» y «espacio entre dos filas»."
  },
  {
    "id": "d029",
    "difficulty": "dificil",
    "clue": "Máquina que produce movimiento cuando moto abraza una intrusa. (5)",
    "answer": "MOTOR",
    "mechanisms": [
      "container"
    ],
    "definition": "Máquina que produce movimiento",
    "fodder": "moto",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "MOTOR se forma al introducir una letra en moto."
  },
  {
    "id": "d030",
    "difficulty": "dificil",
    "clue": "Entre aparato que recibe emisiones y segmento desde el centro de un círculo, la palabra no cambia. (5)",
    "answer": "RADIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Aparato que recibe emisiones",
    "fodder": "segmento desde el centro de un círculo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a RADIO: «Aparato que recibe emisiones» y «segmento desde el centro de un círculo»."
  },
  {
    "id": "d031",
    "difficulty": "dificil",
    "clue": "Puede ser parte puntiaguda o cantidad máxima. (4)",
    "answer": "PICO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte puntiaguda",
    "fodder": "cantidad máxima",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PICO: «Parte puntiaguda» y «cantidad máxima»."
  },
  {
    "id": "d032",
    "difficulty": "dificil",
    "clue": "Puede ser obra pictórica o marco o conjunto. (6)",
    "answer": "CUADRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Obra pictórica",
    "fodder": "marco o conjunto",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CUADRO: «Obra pictórica» y «marco o conjunto»."
  },
  {
    "id": "d033",
    "difficulty": "dificil",
    "clue": "Grada para espectadores que queda cuando tribunal pierde una pieza. (7)",
    "answer": "TRIBUNA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Grada para espectadores",
    "fodder": "tribunal",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "TRIBUNA se obtiene de tribunal al retirar la letra indicada por la pista."
  },
  {
    "id": "d034",
    "difficulty": "dificil",
    "clue": "Puede ser establecimiento abierto al público o relativo a un lugar. (5)",
    "answer": "LOCAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Establecimiento abierto al público",
    "fodder": "relativo a un lugar",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a LOCAL: «Establecimiento abierto al público» y «relativo a un lugar»."
  },
  {
    "id": "d035",
    "difficulty": "dificil",
    "clue": "Abertura que aparece si el cabo cambia de posición. (4)",
    "answer": "BOCA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Abertura",
    "fodder": "cabo",
    "indicators": [
      "cambia de posición"
    ],
    "explanation": "Las letras de cabo se reordenan para formar BOCA."
  },
  {
    "id": "d036",
    "difficulty": "dificil",
    "clue": "Sirve para tejido muscular animal y también para pulpa comestible. (5)",
    "answer": "CARNE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tejido muscular animal",
    "fodder": "pulpa comestible",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CARNE: «Tejido muscular animal» y «pulpa comestible»."
  },
  {
    "id": "d037",
    "difficulty": "dificil",
    "clue": "Sirve para objeto para guardar documentos y también para directorio informático. (7)",
    "answer": "CARPETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto para guardar documentos",
    "fodder": "directorio informático",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CARPETA: «Objeto para guardar documentos» y «directorio informático»."
  },
  {
    "id": "d038",
    "difficulty": "dificil",
    "clue": "Satélite natural de la tierra cuando una abraza una intrusa. (4)",
    "answer": "LUNA",
    "mechanisms": [
      "container"
    ],
    "definition": "Satélite natural de la Tierra",
    "fodder": "una",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "LUNA se forma al introducir una letra en una."
  },
  {
    "id": "d039",
    "difficulty": "dificil",
    "clue": "Puede ser serie que se repite o periodo completo. (5)",
    "answer": "CICLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Serie que se repite",
    "fodder": "periodo completo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CICLO: «Serie que se repite» y «periodo completo»."
  },
  {
    "id": "d040",
    "difficulty": "dificil",
    "clue": "Entre punto que no se debe superar y frontera, la palabra no cambia. (6)",
    "answer": "LIMITE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Punto que no se debe superar",
    "fodder": "frontera",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a LIMITE: «Punto que no se debe superar» y «frontera»."
  },
  {
    "id": "d041",
    "difficulty": "dificil",
    "clue": "Entre alimento usado para atraer animales y engaño para atraer a alguien, la palabra no cambia. (4)",
    "answer": "CEBO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Alimento usado para atraer animales",
    "fodder": "engaño para atraer a alguien",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CEBO: «Alimento usado para atraer animales» y «engaño para atraer a alguien»."
  },
  {
    "id": "d042",
    "difficulty": "dificil",
    "clue": "Sirve para borde de un río o mar y también para límite de una superficie. (6)",
    "answer": "ORILLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde de un río o mar",
    "fodder": "límite de una superficie",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a ORILLA: «Borde de un río o mar» y «límite de una superficie»."
  },
  {
    "id": "d043",
    "difficulty": "dificil",
    "clue": "Entre dulce de azúcar y algo muy atractivo, la palabra no cambia. (8)",
    "answer": "CARAMELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Dulce de azúcar",
    "fodder": "algo muy atractivo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CARAMELO: «Dulce de azúcar» y «algo muy atractivo»."
  },
  {
    "id": "d044",
    "difficulty": "dificil",
    "clue": "Capital italiana que regresa desde el amor. (4)",
    "answer": "ROMA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Capital italiana",
    "fodder": "amor",
    "indicators": [
      "regresa"
    ],
    "explanation": "ROMA aparece al leer amor al revés."
  },
  {
    "id": "d045",
    "difficulty": "dificil",
    "clue": "Entre ciudad sede de un gobierno y dinero invertido, la palabra no cambia. (7)",
    "answer": "CAPITAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ciudad sede de un gobierno",
    "fodder": "dinero invertido",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CAPITAL: «Ciudad sede de un gobierno» y «dinero invertido»."
  },
  {
    "id": "d046",
    "difficulty": "dificil",
    "clue": "Sirve para lugar por donde se sale y también para solución a una dificultad. (6)",
    "answer": "SALIDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar por donde se sale",
    "fodder": "solución a una dificultad",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a SALIDA: «Lugar por donde se sale» y «solución a una dificultad»."
  },
  {
    "id": "d047",
    "difficulty": "dificil",
    "clue": "Sirve para malla de hilos y también para sistema conectado. (3)",
    "answer": "RED",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Malla de hilos",
    "fodder": "sistema conectado",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a RED: «Malla de hilos» y «sistema conectado»."
  },
  {
    "id": "d048",
    "difficulty": "dificil",
    "clue": "Puede ser parte de la mano o índice o señal. (4)",
    "answer": "DEDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de la mano",
    "fodder": "índice o señal",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a DEDO: «Parte de la mano» y «índice o señal»."
  },
  {
    "id": "d049",
    "difficulty": "dificil",
    "clue": "Configuración externa, perdida dentro de formal. (5)",
    "answer": "FORMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Configuración externa",
    "fodder": "formal",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "FORMA aparece de forma continua dentro de «formal». La definición es «Configuración externa»."
  },
  {
    "id": "d050",
    "difficulty": "dificil",
    "clue": "Porción de tierra rodeada de agua que sale de lisa cuando todo queda revuelto. (4)",
    "answer": "ISLA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Porción de tierra rodeada de agua",
    "fodder": "lisa",
    "indicators": [
      "todo queda revuelto"
    ],
    "explanation": "Las letras de lisa se reordenan para formar ISLA."
  },
  {
    "id": "d051",
    "difficulty": "dificil",
    "clue": "Entre motocicleta y movimiento de un objeto, en ciertas expresiones, la palabra no cambia. (4)",
    "answer": "MOTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Motocicleta",
    "fodder": "movimiento de un objeto, en ciertas expresiones",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MOTO: «Motocicleta» y «movimiento de un objeto, en ciertas expresiones»."
  },
  {
    "id": "d052",
    "difficulty": "dificil",
    "clue": "Comida de la noche que aparece cuando nace pierde el orden. (4)",
    "answer": "CENA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Comida de la noche",
    "fodder": "nace",
    "indicators": [
      "pierde el orden"
    ],
    "explanation": "Las letras de nace se reordenan para formar CENA."
  },
  {
    "id": "d053",
    "difficulty": "dificil",
    "clue": "Entre parte lateral de una embarcación y color rojo oscuro, la palabra no cambia. (5)",
    "answer": "BORDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte lateral de una embarcación",
    "fodder": "color rojo oscuro",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BORDO: «Parte lateral de una embarcación» y «color rojo oscuro»."
  },
  {
    "id": "d054",
    "difficulty": "dificil",
    "clue": "Puede llevar compras o mover millones sin salir de una pantalla. (5)",
    "answer": "BOLSA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede llevar compras",
    "fodder": "",
    "indicators": [
      "o"
    ],
    "explanation": "BOLSA es recipiente y mercado financiero."
  },
  {
    "id": "d055",
    "difficulty": "dificil",
    "clue": "Sirve para elemento que sostiene y también para ayuda o respaldo. (7)",
    "answer": "SOPORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Elemento que sostiene",
    "fodder": "ayuda o respaldo",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a SOPORTE: «Elemento que sostiene» y «ayuda o respaldo»."
  },
  {
    "id": "d056",
    "difficulty": "dificil",
    "clue": "Puede ser sonido producido al hablar o opinión expresada. (3)",
    "answer": "VOZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sonido producido al hablar",
    "fodder": "opinión expresada",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a VOZ: «Sonido producido al hablar» y «opinión expresada»."
  },
  {
    "id": "d057",
    "difficulty": "dificil",
    "clue": "Entre tiempo vivido y época histórica, la palabra no cambia. (4)",
    "answer": "EDAD",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tiempo vivido",
    "fodder": "época histórica",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a EDAD: «Tiempo vivido» y «época histórica»."
  },
  {
    "id": "d058",
    "difficulty": "dificil",
    "clue": "Conducto de agua que aparece cuando ancla pierde el orden. (5)",
    "answer": "CANAL",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Conducto de agua",
    "fodder": "ancla",
    "indicators": [
      "pierde el orden"
    ],
    "explanation": "Las letras de ancla se reordenan para formar CANAL."
  },
  {
    "id": "d059",
    "difficulty": "dificil",
    "clue": "Sirve para material elástico y también para borrador. (4)",
    "answer": "GOMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material elástico",
    "fodder": "borrador",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a GOMA: «Material elástico» y «borrador»."
  },
  {
    "id": "d060",
    "difficulty": "dificil",
    "clue": "Motivo de algo cuando casa abraza una intrusa. (5)",
    "answer": "CAUSA",
    "mechanisms": [
      "container"
    ],
    "definition": "Motivo de algo",
    "fodder": "casa",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "CAUSA se forma al introducir una letra en casa."
  },
  {
    "id": "d061",
    "difficulty": "dificil",
    "clue": "Sirve para figura de dos líneas que se cortan y también para señal de sufrimiento. (4)",
    "answer": "CRUZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Figura de dos líneas que se cortan",
    "fodder": "señal de sufrimiento",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CRUZ: «Figura de dos líneas que se cortan» y «señal de sufrimiento»."
  },
  {
    "id": "d062",
    "difficulty": "dificil",
    "clue": "Puede ser línea que no es recta o tramo de una carretera que gira. (5)",
    "answer": "CURVA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea que no es recta",
    "fodder": "tramo de una carretera que gira",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CURVA: «Línea que no es recta» y «tramo de una carretera que gira»."
  },
  {
    "id": "d063",
    "difficulty": "dificil",
    "clue": "Masa gaseosa luminosa de un fuego que queda cuando llamas pierde una pieza. (5)",
    "answer": "LLAMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Masa gaseosa luminosa de un fuego",
    "fodder": "llamas",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "LLAMA se obtiene de llamas al retirar la letra indicada por la pista."
  },
  {
    "id": "d064",
    "difficulty": "dificil",
    "clue": "Calzado que cubre el pie y parte de la pierna, si lo dices en voz alta. (4)",
    "answer": "BOTA",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Calzado que cubre el pie y parte de la pierna",
    "fodder": "vota",
    "indicators": [
      "en voz alta"
    ],
    "explanation": "BOTA suena como «vota»; la definición es «Calzado que cubre el pie y parte de la pierna»."
  },
  {
    "id": "d065",
    "difficulty": "dificil",
    "clue": "Entre señal distintiva y empresa o producto, la palabra no cambia. (5)",
    "answer": "MARCA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Señal distintiva",
    "fodder": "empresa o producto",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MARCA: «Señal distintiva» y «empresa o producto»."
  },
  {
    "id": "d066",
    "difficulty": "dificil",
    "clue": "Condimento que queda cuando una sala pierde su remate. (3)",
    "answer": "SAL",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Condimento",
    "fodder": "sala",
    "indicators": [
      "pierde su remate"
    ],
    "explanation": "SAL se obtiene de sala al retirar la letra indicada por la pista."
  },
  {
    "id": "d067",
    "difficulty": "dificil",
    "clue": "Peso transportado cuando cara abraza una intrusa. (5)",
    "answer": "CARGA",
    "mechanisms": [
      "container"
    ],
    "definition": "Peso transportado",
    "fodder": "cara",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "CARGA se forma al introducir una letra en cara."
  },
  {
    "id": "d068",
    "difficulty": "dificil",
    "clue": "Recipiente para comida que queda cuando platos pierde una pieza. (5)",
    "answer": "PLATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Recipiente para comida",
    "fodder": "platos",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "PLATO se obtiene de platos al retirar la letra indicada por la pista."
  },
  {
    "id": "d069",
    "difficulty": "dificil",
    "clue": "Puede ser vehículo de dos ruedas o persona que habla demasiado. (7)",
    "answer": "CARRETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vehículo de dos ruedas",
    "fodder": "persona que habla demasiado",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CARRETA: «Vehículo de dos ruedas» y «persona que habla demasiado»."
  },
  {
    "id": "d070",
    "difficulty": "dificil",
    "clue": "Puede ser estructura que cubre a un ave o instrumento para escribir. (5)",
    "answer": "PLUMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Estructura que cubre a un ave",
    "fodder": "instrumento para escribir",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PLUMA: «Estructura que cubre a un ave» y «instrumento para escribir»."
  },
  {
    "id": "d071",
    "difficulty": "dificil",
    "clue": "Parte plana de una planta que queda cuando hojas pierde una pieza. (4)",
    "answer": "HOJA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte plana de una planta",
    "fodder": "hojas",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "HOJA se obtiene de hojas al retirar la letra indicada por la pista."
  },
  {
    "id": "d072",
    "difficulty": "dificil",
    "clue": "Puede ser sentido de la visión o aspecto de algo. (5)",
    "answer": "VISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sentido de la visión",
    "fodder": "aspecto de algo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a VISTA: «Sentido de la visión» y «aspecto de algo»."
  },
  {
    "id": "d073",
    "difficulty": "dificil",
    "clue": "Sirve para trabajo realizado y también para creación artística. (4)",
    "answer": "OBRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Trabajo realizado",
    "fodder": "creación artística",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a OBRA: «Trabajo realizado» y «creación artística»."
  },
  {
    "id": "d074",
    "difficulty": "dificil",
    "clue": "Entre choque o impacto y acción de golpear, la palabra no cambia. (5)",
    "answer": "GOLPE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Choque o impacto",
    "fodder": "acción de golpear",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a GOLPE: «Choque o impacto» y «acción de golpear»."
  },
  {
    "id": "d075",
    "difficulty": "dificil",
    "clue": "Sirve para conjunto de fibras retorcidas y también para instrumento musical de cuerda. (6)",
    "answer": "CUERDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de fibras retorcidas",
    "fodder": "instrumento musical de cuerda",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CUERDA: «Conjunto de fibras retorcidas» y «instrumento musical de cuerda»."
  },
  {
    "id": "d076",
    "difficulty": "dificil",
    "clue": "Entre radiación que permite ver y persona o cosa brillante, la palabra no cambia. (3)",
    "answer": "LUZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Radiación que permite ver",
    "fodder": "persona o cosa brillante",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a LUZ: «Radiación que permite ver» y «persona o cosa brillante»."
  },
  {
    "id": "d077",
    "difficulty": "dificil",
    "clue": "Alegría sonora que llega cuando asir cambia de dirección. (4)",
    "answer": "RISA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Alegría sonora",
    "fodder": "asir",
    "indicators": [
      "cambia de dirección"
    ],
    "explanation": "RISA aparece al leer asir al revés."
  },
  {
    "id": "d078",
    "difficulty": "dificil",
    "clue": "Pieza del juego de bolos que queda cuando bolos pierde una pieza. (4)",
    "answer": "BOLO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza del juego de bolos",
    "fodder": "bolos",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "BOLO se obtiene de bolos al retirar la letra indicada por la pista."
  },
  {
    "id": "d079",
    "difficulty": "dificil",
    "clue": "Apunte escrito, perdida dentro de anotación. (4)",
    "answer": "NOTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Apunte escrito",
    "fodder": "anotación",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "NOTA aparece de forma continua dentro de «anotación». La definición es «Apunte escrito»."
  },
  {
    "id": "d080",
    "difficulty": "dificil",
    "clue": "Gran extensión salada que queda al dejar fuera la primera letra de amar. (3)",
    "answer": "MAR",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Gran extensión salada",
    "fodder": "amar",
    "indicators": [
      "dejar fuera la primera letra"
    ],
    "explanation": "MAR se obtiene de amar al retirar la letra indicada por la pista."
  },
  {
    "id": "d081",
    "difficulty": "dificil",
    "clue": "Entre órgano de la boca y idioma, la palabra no cambia. (6)",
    "answer": "LENGUA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Órgano de la boca",
    "fodder": "idioma",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a LENGUA: «Órgano de la boca» y «idioma»."
  },
  {
    "id": "d082",
    "difficulty": "dificil",
    "clue": "Entre del mar y persona que trabaja en un barco, la palabra no cambia. (6)",
    "answer": "MARINO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Del mar",
    "fodder": "persona que trabaja en un barco",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MARINO: «Del mar» y «persona que trabaja en un barco»."
  },
  {
    "id": "d083",
    "difficulty": "dificil",
    "clue": "Fuera de la ciudad hay uno; en una profesión también. (5)",
    "answer": "CAMPO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuera de la ciudad hay uno",
    "fodder": "",
    "indicators": [
      "también"
    ],
    "explanation": "CAMPO es terreno y ámbito de actividad."
  },
  {
    "id": "d084",
    "difficulty": "dificil",
    "clue": "Puede ser unión entre cosas o persona que sirve de conexión. (6)",
    "answer": "ENLACE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Unión entre cosas",
    "fodder": "persona que sirve de conexión",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a ENLACE: «Unión entre cosas» y «persona que sirve de conexión»."
  },
  {
    "id": "d085",
    "difficulty": "dificil",
    "clue": "Significado; basta con desordenar destino. (7)",
    "answer": "SENTIDO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Significado",
    "fodder": "destino",
    "indicators": [
      "desordenar"
    ],
    "explanation": "Las letras de destino se reordenan para formar SENTIDO."
  },
  {
    "id": "d086",
    "difficulty": "dificil",
    "clue": "Sirve para acuerdo con obligaciones y también para documento que formaliza un acuerdo. (8)",
    "answer": "CONTRATO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acuerdo con obligaciones",
    "fodder": "documento que formaliza un acuerdo",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CONTRATO: «Acuerdo con obligaciones» y «documento que formaliza un acuerdo»."
  },
  {
    "id": "d087",
    "difficulty": "dificil",
    "clue": "Sirve para disminución de un dolor y también para consuelo. (6)",
    "answer": "ALIVIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Disminución de un dolor",
    "fodder": "consuelo",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a ALIVIO: «Disminución de un dolor» y «consuelo»."
  },
  {
    "id": "d088",
    "difficulty": "dificil",
    "clue": "Puede ser cantidad de agua que lleva un río o cantidad de dinero o recursos. (6)",
    "answer": "CAUDAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cantidad de agua que lleva un río",
    "fodder": "cantidad de dinero o recursos",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CAUDAL: «Cantidad de agua que lleva un río» y «cantidad de dinero o recursos»."
  },
  {
    "id": "d089",
    "difficulty": "dificil",
    "clue": "Animal doméstico que sobrevive cuando los gatos pierden su cola. (4)",
    "answer": "GATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Animal doméstico",
    "fodder": "gatos",
    "indicators": [
      "pierden su cola"
    ],
    "explanation": "GATO se obtiene de gatos al retirar la letra indicada por la pista."
  },
  {
    "id": "d090",
    "difficulty": "dificil",
    "clue": "Viene al mundo; basta con desordenar cena. (4)",
    "answer": "NACE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Viene al mundo",
    "fodder": "cena",
    "indicators": [
      "desordenar"
    ],
    "explanation": "Las letras de cena se reordenan para formar NACE."
  },
  {
    "id": "d091",
    "difficulty": "dificil",
    "clue": "Entre indicio que comunica algo y marca para orientar, la palabra no cambia. (5)",
    "answer": "SENAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Indicio que comunica algo",
    "fodder": "marca para orientar",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a SENAL: «Indicio que comunica algo» y «marca para orientar»."
  },
  {
    "id": "d092",
    "difficulty": "dificil",
    "clue": "Puede ser vía para desplazarse o método. (6)",
    "answer": "CAMINO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vía para desplazarse",
    "fodder": "método",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CAMINO: «Vía para desplazarse» y «método»."
  },
  {
    "id": "d093",
    "difficulty": "dificil",
    "clue": "Sirve para que contiene dos veces una cantidad y también para persona que sustituye a otra. (5)",
    "answer": "DOBLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Que contiene dos veces una cantidad",
    "fodder": "persona que sustituye a otra",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a DOBLE: «Que contiene dos veces una cantidad» y «persona que sustituye a otra»."
  },
  {
    "id": "d094",
    "difficulty": "dificil",
    "clue": "Entre altura respecto a una referencia y grado de desarrollo, la palabra no cambia. (5)",
    "answer": "NIVEL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Altura respecto a una referencia",
    "fodder": "grado de desarrollo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a NIVEL: «Altura respecto a una referencia» y «grado de desarrollo»."
  },
  {
    "id": "d095",
    "difficulty": "dificil",
    "clue": "Entre recorrido cerrado y conjunto de componentes eléctricos, la palabra no cambia. (8)",
    "answer": "CIRCUITO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recorrido cerrado",
    "fodder": "conjunto de componentes eléctricos",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CIRCUITO: «Recorrido cerrado» y «conjunto de componentes eléctricos»."
  },
  {
    "id": "d096",
    "difficulty": "dificil",
    "clue": "Entre primate y persona muy simpática o graciosa, la palabra no cambia. (4)",
    "answer": "MONO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Primate",
    "fodder": "persona muy simpática o graciosa",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MONO: «Primate» y «persona muy simpática o graciosa»."
  },
  {
    "id": "d097",
    "difficulty": "dificil",
    "clue": "Puede ser contacto afectuoso con los labios o marca afectuosa. (4)",
    "answer": "BESO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Contacto afectuoso con los labios",
    "fodder": "marca afectuosa",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BESO: «Contacto afectuoso con los labios» y «marca afectuosa»."
  },
  {
    "id": "d098",
    "difficulty": "dificil",
    "clue": "Sirve para fuerza para mover algo y también para decisión para actuar. (6)",
    "answer": "EMPUJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuerza para mover algo",
    "fodder": "decisión para actuar",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a EMPUJE: «Fuerza para mover algo» y «decisión para actuar»."
  },
  {
    "id": "d099",
    "difficulty": "dificil",
    "clue": "Puede ser conjunto ordenado o programa televisivo. (5)",
    "answer": "SERIE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto ordenado",
    "fodder": "programa televisivo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a SERIE: «Conjunto ordenado» y «programa televisivo»."
  },
  {
    "id": "d100",
    "difficulty": "dificil",
    "clue": "Entre parte superior de una habitación y límite máximo, la palabra no cambia. (5)",
    "answer": "TECHO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte superior de una habitación",
    "fodder": "límite máximo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a TECHO: «Parte superior de una habitación» y «límite máximo»."
  },
  {
    "id": "d101",
    "difficulty": "dificil",
    "clue": "Puede ser tristeza o castigo. (4)",
    "answer": "PENA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tristeza",
    "fodder": "castigo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PENA: «Tristeza» y «castigo»."
  },
  {
    "id": "d102",
    "difficulty": "dificil",
    "clue": "Altura de un sonido que queda cuando trono pierde una pieza. (4)",
    "answer": "TONO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Altura de un sonido",
    "fodder": "trono",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "TONO se obtiene de trono al retirar la letra indicada por la pista."
  },
  {
    "id": "d103",
    "difficulty": "dificil",
    "clue": "Entre objeto que cubre el rostro y producto cosmético para las pestañas, la palabra no cambia. (7)",
    "answer": "MASCARA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que cubre el rostro",
    "fodder": "producto cosmético para las pestañas",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MASCARA: «Objeto que cubre el rostro» y «producto cosmético para las pestañas»."
  },
  {
    "id": "d104",
    "difficulty": "dificil",
    "clue": "Sirve para parte frontal de la cabeza y también para superficie de una moneda. (4)",
    "answer": "CARA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte frontal de la cabeza",
    "fodder": "superficie de una moneda",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CARA: «Parte frontal de la cabeza» y «superficie de una moneda»."
  },
  {
    "id": "d105",
    "difficulty": "dificil",
    "clue": "Entre objeto para mejorar la visión y lentes montadas, la palabra no cambia. (5)",
    "answer": "GAFAS",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto para mejorar la visión",
    "fodder": "lentes montadas",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a GAFAS: «Objeto para mejorar la visión» y «lentes montadas»."
  },
  {
    "id": "d106",
    "difficulty": "dificil",
    "clue": "Fija el barco cuando el canal pierde su orden. (5)",
    "answer": "ANCLA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Fija el barco",
    "fodder": "canal",
    "indicators": [
      "pierde su orden"
    ],
    "explanation": "Las letras de canal se reordenan para formar ANCLA."
  },
  {
    "id": "d107",
    "difficulty": "medio-dificil",
    "clue": "El colectivo la hace; una conversación también puede necesitarla. (6)",
    "answer": "PARADA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "El colectivo la hace",
    "fodder": "",
    "indicators": [
      "también"
    ],
    "explanation": "PARADA es lugar/acción de detenerse y pausa."
  },
  {
    "id": "d108",
    "difficulty": "dificil",
    "clue": "Puede ser parte entre cabeza y tronco o parte estrecha de una botella. (6)",
    "answer": "CUELLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte entre cabeza y tronco",
    "fodder": "parte estrecha de una botella",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CUELLO: «Parte entre cabeza y tronco» y «parte estrecha de una botella»."
  },
  {
    "id": "d109",
    "difficulty": "dificil",
    "clue": "La lleva un rey y también puede llevarla una rueda. (6)",
    "answer": "CORONA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "La lleva un rey",
    "fodder": "",
    "indicators": [
      "y"
    ],
    "explanation": "CORONA tiene ambos sentidos."
  },
  {
    "id": "d110",
    "difficulty": "dificil",
    "clue": "Camino previsto, perdida dentro de fruta. (4)",
    "answer": "RUTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Camino previsto",
    "fodder": "fruta",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "RUTA aparece de forma continua dentro de «fruta». La definición es «Camino previsto»."
  },
  {
    "id": "d111",
    "difficulty": "dificil",
    "clue": "Entre proyectil y persona muy rápida, la palabra no cambia. (4)",
    "answer": "BALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Proyectil",
    "fodder": "persona muy rápida",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BALA: «Proyectil» y «persona muy rápida»."
  },
  {
    "id": "d112",
    "difficulty": "dificil",
    "clue": "Extremidades de un ave que sale de sala cuando todo queda revuelto. (4)",
    "answer": "ALAS",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Extremidades de un ave",
    "fodder": "sala",
    "indicators": [
      "todo queda revuelto"
    ],
    "explanation": "Las letras de sala se reordenan para formar ALAS."
  },
  {
    "id": "d113",
    "difficulty": "dificil",
    "clue": "Puede ser facultad de pensar o persona muy inteligente. (5)",
    "answer": "MENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Facultad de pensar",
    "fodder": "persona muy inteligente",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MENTE: «Facultad de pensar» y «persona muy inteligente»."
  },
  {
    "id": "d114",
    "difficulty": "dificil",
    "clue": "Entre masa de agua interior y forma de un recipiente, en ciertos usos, la palabra no cambia. (4)",
    "answer": "LAGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Masa de agua interior",
    "fodder": "forma de un recipiente, en ciertos usos",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a LAGO: «Masa de agua interior» y «forma de un recipiente, en ciertos usos»."
  },
  {
    "id": "d115",
    "difficulty": "dificil",
    "clue": "Expresión que indica cantidad, perdida dentro de numeroso. (6)",
    "answer": "NUMERO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Expresión que indica cantidad",
    "fodder": "numeroso",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "NUMERO aparece de forma continua dentro de «numeroso». La definición es «Expresión que indica cantidad»."
  },
  {
    "id": "d116",
    "difficulty": "dificil",
    "clue": "Semilla pequeña cuando gran abraza una intrusa. (5)",
    "answer": "GRANO",
    "mechanisms": [
      "container"
    ],
    "definition": "Semilla pequeña",
    "fodder": "gran",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "GRANO se forma al introducir una letra en gran."
  },
  {
    "id": "d117",
    "difficulty": "dificil",
    "clue": "Entre descarga eléctrica atmosférica y persona o cosa muy rápida, la palabra no cambia. (4)",
    "answer": "RAYO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Descarga eléctrica atmosférica",
    "fodder": "persona o cosa muy rápida",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a RAYO: «Descarga eléctrica atmosférica» y «persona o cosa muy rápida»."
  },
  {
    "id": "d118",
    "difficulty": "dificil",
    "clue": "Sirve para acción de elevarse del suelo y también para cambio brusco. (5)",
    "answer": "SALTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de elevarse del suelo",
    "fodder": "cambio brusco",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a SALTO: «Acción de elevarse del suelo» y «cambio brusco»."
  },
  {
    "id": "d119",
    "difficulty": "dificil",
    "clue": "Puede ser parte posterior o reverso de una mano. (5)",
    "answer": "DORSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte posterior",
    "fodder": "reverso de una mano",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a DORSO: «Parte posterior» y «reverso de una mano»."
  },
  {
    "id": "d120",
    "difficulty": "dificil",
    "clue": "Acción de dar algo, perdida dentro de entregado. (7)",
    "answer": "ENTREGA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Acción de dar algo",
    "fodder": "entregado",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "ENTREGA aparece de forma continua dentro de «entregado». La definición es «Acción de dar algo»."
  },
  {
    "id": "d121",
    "difficulty": "dificil",
    "clue": "Entre ave doméstica y persona cobarde, la palabra no cambia. (7)",
    "answer": "GALLINA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ave doméstica",
    "fodder": "persona cobarde",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a GALLINA: «Ave doméstica» y «persona cobarde»."
  },
  {
    "id": "d122",
    "difficulty": "dificil",
    "clue": "Entre encima de y envoltorio de papel, la palabra no cambia. (5)",
    "answer": "SOBRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Encima de",
    "fodder": "envoltorio de papel",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a SOBRE: «Encima de» y «envoltorio de papel»."
  },
  {
    "id": "d123",
    "difficulty": "dificil",
    "clue": "Puede ser pieza elástica o recurso que produce un efecto. (7)",
    "answer": "RESORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza elástica",
    "fodder": "recurso que produce un efecto",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a RESORTE: «Pieza elástica» y «recurso que produce un efecto»."
  },
  {
    "id": "d124",
    "difficulty": "dificil",
    "clue": "Entre suelo y planeta, la palabra no cambia. (6)",
    "answer": "TIERRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Suelo",
    "fodder": "planeta",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a TIERRA: «Suelo» y «planeta»."
  },
  {
    "id": "d125",
    "difficulty": "dificil",
    "clue": "Puede ser producto de una combustión o engaño o apariencia vacía. (4)",
    "answer": "HUMO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Producto de una combustión",
    "fodder": "engaño o apariencia vacía",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a HUMO: «Producto de una combustión» y «engaño o apariencia vacía»."
  },
  {
    "id": "d126",
    "difficulty": "dificil",
    "clue": "Fibra para coser que queda cuando hilos pierde una pieza. (4)",
    "answer": "HILO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Fibra para coser",
    "fodder": "hilos",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "HILO se obtiene de hilos al retirar la letra indicada por la pista."
  },
  {
    "id": "d127",
    "difficulty": "dificil",
    "clue": "Parte de una prenda que queda cuando mangas pierde una pieza. (5)",
    "answer": "MANGA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte de una prenda",
    "fodder": "mangas",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "MANGA se obtiene de mangas al retirar la letra indicada por la pista."
  },
  {
    "id": "d128",
    "difficulty": "dificil",
    "clue": "Sirve para lo que queda y también para operación que quita una cantidad de otra. (5)",
    "answer": "RESTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lo que queda",
    "fodder": "operación que quita una cantidad de otra",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a RESTO: «Lo que queda» y «operación que quita una cantidad de otra»."
  },
  {
    "id": "d129",
    "difficulty": "dificil",
    "clue": "Puede ser pieza que une dos partes móviles o elemento decisivo de una situación. (7)",
    "answer": "BISAGRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que une dos partes móviles",
    "fodder": "elemento decisivo de una situación",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BISAGRA: «Pieza que une dos partes móviles» y «elemento decisivo de una situación»."
  },
  {
    "id": "d130",
    "difficulty": "dificil",
    "clue": "Mensaje escrito que queda cuando cartas pierde una pieza. (5)",
    "answer": "CARTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Mensaje escrito",
    "fodder": "cartas",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "CARTA se obtiene de cartas al retirar la letra indicada por la pista."
  },
  {
    "id": "d131",
    "difficulty": "dificil",
    "clue": "Entre acción de encajar y pieza ornamental de hilo, la palabra no cambia. (6)",
    "answer": "ENCAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de encajar",
    "fodder": "pieza ornamental de hilo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a ENCAJE: «Acción de encajar» y «pieza ornamental de hilo»."
  },
  {
    "id": "d132",
    "difficulty": "dificil",
    "clue": "Sirve para parte de una planta y también para origen de algo. (4)",
    "answer": "RAIZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de una planta",
    "fodder": "origen de algo",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a RAIZ: «Parte de una planta» y «origen de algo»."
  },
  {
    "id": "d133",
    "difficulty": "dificil",
    "clue": "Puede ser persona que acompaña o colega. (9)",
    "answer": "COMPANERO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que acompaña",
    "fodder": "colega",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a COMPANERO: «Persona que acompaña» y «colega»."
  },
  {
    "id": "d134",
    "difficulty": "dificil",
    "clue": "Principio espiritual que nace de una mala cabeza. (4)",
    "answer": "ALMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Principio espiritual",
    "fodder": "mala",
    "indicators": [
      "nace de una mala cabeza"
    ],
    "explanation": "Las letras de mala se reordenan para formar ALMA."
  },
  {
    "id": "d135",
    "difficulty": "dificil",
    "clue": "Entre extremo de un eje y deporte a caballo y con pelota, la palabra no cambia. (4)",
    "answer": "POLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremo de un eje",
    "fodder": "deporte a caballo y con pelota",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a POLO: «Extremo de un eje» y «deporte a caballo y con pelota»."
  },
  {
    "id": "d136",
    "difficulty": "dificil",
    "clue": "Sirve para caja para recibir cartas y también para compartimento de recepción. (5)",
    "answer": "BUZON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Caja para recibir cartas",
    "fodder": "compartimento de recepción",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a BUZON: «Caja para recibir cartas» y «compartimento de recepción»."
  },
  {
    "id": "d137",
    "difficulty": "dificil",
    "clue": "Puede ser zona de una ciudad o conjunto de casas de una zona. (6)",
    "answer": "BARRIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Zona de una ciudad",
    "fodder": "conjunto de casas de una zona",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BARRIO: «Zona de una ciudad» y «conjunto de casas de una zona»."
  },
  {
    "id": "d138",
    "difficulty": "dificil",
    "clue": "Sirve para representación resumida y también para plan básico. (7)",
    "answer": "ESQUEMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación resumida",
    "fodder": "plan básico",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a ESQUEMA: «Representación resumida» y «plan básico»."
  },
  {
    "id": "d139",
    "difficulty": "dificil",
    "clue": "Puede ser representación visual o idea mental de algo. (6)",
    "answer": "IMAGEN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación visual",
    "fodder": "idea mental de algo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a IMAGEN: «Representación visual» y «idea mental de algo»."
  },
  {
    "id": "d140",
    "difficulty": "dificil",
    "clue": "Sirve para sufrimiento físico y también para pena que duele. (5)",
    "answer": "DOLOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sufrimiento físico",
    "fodder": "pena que duele",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a DOLOR: «Sufrimiento físico» y «pena que duele»."
  },
  {
    "id": "d141",
    "difficulty": "dificil",
    "clue": "Entre objeto que da forma y modelo que sirve de guía, la palabra no cambia. (5)",
    "answer": "MOLDE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que da forma",
    "fodder": "modelo que sirve de guía",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MOLDE: «Objeto que da forma» y «modelo que sirve de guía»."
  },
  {
    "id": "d142",
    "difficulty": "dificil",
    "clue": "Une dos orillas y, con un calendario caprichoso, puede regalarte un día. (6)",
    "answer": "PUENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Une dos orillas",
    "fodder": "",
    "indicators": [
      "y"
    ],
    "explanation": "PUENTE es construcción y día entre festivos."
  },
  {
    "id": "d143",
    "difficulty": "dificil",
    "clue": "Puede ser prenda ligera de manga corta o pieza interior. (8)",
    "answer": "CAMISETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda ligera de manga corta",
    "fodder": "pieza interior",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CAMISETA: «Prenda ligera de manga corta» y «pieza interior»."
  },
  {
    "id": "d144",
    "difficulty": "dificil",
    "clue": "Sirve para cubo de juego y también para entregado o concedido. (4)",
    "answer": "DADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cubo de juego",
    "fodder": "entregado o concedido",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a DADO: «Cubo de juego» y «entregado o concedido»."
  },
  {
    "id": "d145",
    "difficulty": "dificil",
    "clue": "Puede ser parte de un conjunto o zona de actividad económica. (6)",
    "answer": "SECTOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de un conjunto",
    "fodder": "zona de actividad económica",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a SECTOR: «Parte de un conjunto» y «zona de actividad económica»."
  },
  {
    "id": "d146",
    "difficulty": "medio-dificil",
    "clue": "Puede interrumpir una llamada o dictar una sentencia. (5)",
    "answer": "CORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede interrumpir una llamada",
    "fodder": "",
    "indicators": [
      "o"
    ],
    "explanation": "CORTE alude a interrupción y tribunal."
  },
  {
    "id": "d147",
    "difficulty": "dificil",
    "clue": "Plato líquido que sale de paso cuando todo queda revuelto. (4)",
    "answer": "SOPA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Plato líquido",
    "fodder": "paso",
    "indicators": [
      "todo queda revuelto"
    ],
    "explanation": "Las letras de paso se reordenan para formar SOPA."
  },
  {
    "id": "d148",
    "difficulty": "dificil",
    "clue": "Sirve para pared resistente y también para obstáculo. (4)",
    "answer": "MURO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pared resistente",
    "fodder": "obstáculo",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a MURO: «Pared resistente» y «obstáculo»."
  },
  {
    "id": "d149",
    "difficulty": "dificil",
    "clue": "Puede ser palabra que identifica o reputación de una persona. (6)",
    "answer": "NOMBRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Palabra que identifica",
    "fodder": "reputación de una persona",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a NOMBRE: «Palabra que identifica» y «reputación de una persona»."
  },
  {
    "id": "d150",
    "difficulty": "dificil",
    "clue": "Puede ser una partida o el margen que permite una pieza moverse. (5)",
    "answer": "JUEGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser una partida",
    "fodder": "",
    "indicators": [
      "o"
    ],
    "explanation": "JUEGO tiene ambos sentidos."
  },
  {
    "id": "d151",
    "difficulty": "dificil",
    "clue": "Sirve para conjunto de instrumentos de percusión y también para fuente de energía. (7)",
    "answer": "BATERIA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de instrumentos de percusión",
    "fodder": "fuente de energía",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a BATERIA: «Conjunto de instrumentos de percusión» y «fuente de energía»."
  },
  {
    "id": "d152",
    "difficulty": "dificil",
    "clue": "Viento suave cuando risa abraza una intrusa. (5)",
    "answer": "BRISA",
    "mechanisms": [
      "container"
    ],
    "definition": "Viento suave",
    "fodder": "risa",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "BRISA se forma al introducir una letra en risa."
  },
  {
    "id": "d153",
    "difficulty": "dificil",
    "clue": "Entre pieza que se pulsa y botón de un instrumento, la palabra no cambia. (5)",
    "answer": "TECLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que se pulsa",
    "fodder": "botón de un instrumento",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a TECLA: «Pieza que se pulsa» y «botón de un instrumento»."
  },
  {
    "id": "d154",
    "difficulty": "dificil",
    "clue": "Puede ser parte posterior del pie o parte final de un documento. (5)",
    "answer": "TALON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte posterior del pie",
    "fodder": "parte final de un documento",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a TALON: «Parte posterior del pie» y «parte final de un documento»."
  },
  {
    "id": "d155",
    "difficulty": "medio-dificil",
    "clue": "Puede esperarte en una sala o aparecer en un libro contable. (7)",
    "answer": "ASIENTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede esperarte en una sala",
    "fodder": "",
    "indicators": [
      "o"
    ],
    "explanation": "ASIENTO es lugar para sentarse y anotación contable."
  },
  {
    "id": "d156",
    "difficulty": "dificil",
    "clue": "Categoría que sale cuando el grano pierde su sitio. (5)",
    "answer": "RANGO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Categoría",
    "fodder": "grano",
    "indicators": [
      "pierde su sitio"
    ],
    "explanation": "Las letras de grano se reordenan para formar RANGO."
  },
  {
    "id": "d157",
    "difficulty": "dificil",
    "clue": "Puede ser animal del desierto o persona que transporta droga. (7)",
    "answer": "CAMELLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Animal del desierto",
    "fodder": "persona que transporta droga",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CAMELLO: «Animal del desierto» y «persona que transporta droga»."
  },
  {
    "id": "d158",
    "difficulty": "dificil",
    "clue": "Asunto del que se habla, perdida dentro de sistema. (4)",
    "answer": "TEMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Asunto del que se habla",
    "fodder": "sistema",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "TEMA aparece de forma continua dentro de «sistema». La definición es «Asunto del que se habla»."
  },
  {
    "id": "d159",
    "difficulty": "dificil",
    "clue": "Información concreta que queda cuando datos pierde una pieza. (4)",
    "answer": "DATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Información concreta",
    "fodder": "datos",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "DATO se obtiene de datos al retirar la letra indicada por la pista."
  },
  {
    "id": "d160",
    "difficulty": "dificil",
    "clue": "Entre separación entre dos puntos y frialdad en el trato, la palabra no cambia. (9)",
    "answer": "DISTANCIA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Separación entre dos puntos",
    "fodder": "frialdad en el trato",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a DISTANCIA: «Separación entre dos puntos» y «frialdad en el trato»."
  },
  {
    "id": "d161",
    "difficulty": "dificil",
    "clue": "Sirve para prenda de vestir y también para parte baja de una montaña. (5)",
    "answer": "FALDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda de vestir",
    "fodder": "parte baja de una montaña",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a FALDA: «Prenda de vestir» y «parte baja de una montaña»."
  },
  {
    "id": "d162",
    "difficulty": "dificil",
    "clue": "Ave acuática que queda cuando plato pierde una pieza. (4)",
    "answer": "PATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Ave acuática",
    "fodder": "plato",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "PATO se obtiene de plato al retirar la letra indicada por la pista."
  },
  {
    "id": "d163",
    "difficulty": "dificil",
    "clue": "Entre línea aparente que separa cielo y tierra y límite de lo conocido, la palabra no cambia. (9)",
    "answer": "HORIZONTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea aparente que separa cielo y tierra",
    "fodder": "límite de lo conocido",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a HORIZONTE: «Línea aparente que separa cielo y tierra» y «límite de lo conocido»."
  },
  {
    "id": "d164",
    "difficulty": "dificil",
    "clue": "Fila de asientos, perdida dentro de agradable. (5)",
    "answer": "GRADA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Fila de asientos",
    "fodder": "agradable",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "GRADA aparece de forma continua dentro de «agradable». La definición es «Fila de asientos»."
  },
  {
    "id": "d165",
    "difficulty": "dificil",
    "clue": "Puede tener curvas y asfalto, o llevarte hasta la respuesta. (5)",
    "answer": "PISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede tener curvas y asfalto",
    "fodder": "",
    "indicators": [
      "o"
    ],
    "explanation": "PISTA es lugar para actividad y señal/indicio."
  },
  {
    "id": "d166",
    "difficulty": "dificil",
    "clue": "Entre herramienta de dientes y cadena montañosa, la palabra no cambia. (6)",
    "answer": "SIERRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Herramienta de dientes",
    "fodder": "cadena montañosa",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a SIERRA: «Herramienta de dientes» y «cadena montañosa»."
  },
  {
    "id": "d167",
    "difficulty": "medio-dificil",
    "clue": "Lo esperas en una fila y puede durar toda una jornada. (5)",
    "answer": "TURNO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lo esperas en una fila",
    "fodder": "",
    "indicators": [
      "y"
    ],
    "explanation": "TURNO es orden de intervención y periodo de trabajo."
  },
  {
    "id": "d168",
    "difficulty": "dificil",
    "clue": "Periodo de enseñanza, perdida dentro de recursos. (5)",
    "answer": "CURSO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Periodo de enseñanza",
    "fodder": "recursos",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "CURSO aparece de forma continua dentro de «recursos». La definición es «Periodo de enseñanza»."
  },
  {
    "id": "d169",
    "difficulty": "dificil",
    "clue": "Tabique vertical, perdida dentro de paredes. (5)",
    "answer": "PARED",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Tabique vertical",
    "fodder": "paredes",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "PARED aparece de forma continua dentro de «paredes». La definición es «Tabique vertical»."
  },
  {
    "id": "d170",
    "difficulty": "dificil",
    "clue": "Sirve para magnitud que ordena los sucesos y también para estado atmosférico. (6)",
    "answer": "TIEMPO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Magnitud que ordena los sucesos",
    "fodder": "estado atmosférico",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a TIEMPO: «Magnitud que ordena los sucesos» y «estado atmosférico»."
  },
  {
    "id": "d171",
    "difficulty": "dificil",
    "clue": "Puede ser instrumento que mide el tiempo o persona muy puntual. (5)",
    "answer": "RELOJ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Instrumento que mide el tiempo",
    "fodder": "persona muy puntual",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a RELOJ: «Instrumento que mide el tiempo» y «persona muy puntual»."
  },
  {
    "id": "d172",
    "difficulty": "dificil",
    "clue": "Cantidad de materia cuando asa abraza una intrusa. (4)",
    "answer": "MASA",
    "mechanisms": [
      "container"
    ],
    "definition": "Cantidad de materia",
    "fodder": "asa",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "MASA se forma al introducir una letra en asa."
  },
  {
    "id": "d173",
    "difficulty": "dificil",
    "clue": "Puede ser impresión producida por la luz o carácter o matiz. (5)",
    "answer": "COLOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Impresión producida por la luz",
    "fodder": "carácter o matiz",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a COLOR: «Impresión producida por la luz» y «carácter o matiz»."
  },
  {
    "id": "d174",
    "difficulty": "dificil",
    "clue": "Señal gráfica redonda que queda cuando puntos pierde una pieza. (5)",
    "answer": "PUNTO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Señal gráfica redonda",
    "fodder": "puntos",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "PUNTO se obtiene de puntos al retirar la letra indicada por la pista."
  },
  {
    "id": "d175",
    "difficulty": "dificil",
    "clue": "Puede ser instrumento para orientarse o guía. (7)",
    "answer": "BRUJULA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Instrumento para orientarse",
    "fodder": "guía",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BRUJULA: «Instrumento para orientarse» y «guía»."
  },
  {
    "id": "d176",
    "difficulty": "dificil",
    "clue": "Sirve para espacio sobre nuestras cabezas y también para techo de una habitación en sentido figurado. (5)",
    "answer": "CIELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio sobre nuestras cabezas",
    "fodder": "techo de una habitación en sentido figurado",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CIELO: «Espacio sobre nuestras cabezas» y «techo de una habitación en sentido figurado»."
  },
  {
    "id": "d177",
    "difficulty": "dificil",
    "clue": "Entre superficie que se pisa y vivienda en un edificio, la palabra no cambia. (4)",
    "answer": "PISO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie que se pisa",
    "fodder": "vivienda en un edificio",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PISO: «Superficie que se pisa» y «vivienda en un edificio»."
  },
  {
    "id": "d178",
    "difficulty": "dificil",
    "clue": "Sirve para parte de un recorrido y también para segmento. (5)",
    "answer": "TRAMO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de un recorrido",
    "fodder": "segmento",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a TRAMO: «Parte de un recorrido» y «segmento»."
  },
  {
    "id": "d179",
    "difficulty": "dificil",
    "clue": "Lugar al que se dirige alguien: sentido cambia de sitio y da la respuesta. (7)",
    "answer": "DESTINO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Lugar al que se dirige alguien",
    "fodder": "sentido",
    "indicators": [
      "cambia de sitio"
    ],
    "explanation": "Las letras de sentido se reordenan para formar DESTINO."
  },
  {
    "id": "d180",
    "difficulty": "dificil",
    "clue": "Máquina para trabajar piezas cuando tono abraza una intrusa. (5)",
    "answer": "TORNO",
    "mechanisms": [
      "container"
    ],
    "definition": "Máquina para trabajar piezas",
    "fodder": "tono",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "TORNO se forma al introducir una letra en tono."
  },
  {
    "id": "d181",
    "difficulty": "dificil",
    "clue": "Movimiento al caminar que queda cuando pasos pierde una pieza. (4)",
    "answer": "PASO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Movimiento al caminar",
    "fodder": "pasos",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "PASO se obtiene de pasos al retirar la letra indicada por la pista."
  },
  {
    "id": "d182",
    "difficulty": "dificil",
    "clue": "Extremidad superior, perdida dentro de humano. (4)",
    "answer": "MANO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Extremidad superior",
    "fodder": "humano",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "MANO aparece de forma continua dentro de «humano». La definición es «Extremidad superior»."
  },
  {
    "id": "d183",
    "difficulty": "dificil",
    "clue": "Pieza para ejercitarse que queda cuando presa pierde una pieza. (4)",
    "answer": "PESA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Pieza para ejercitarse",
    "fodder": "presa",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "PESA se obtiene de presa al retirar la letra indicada por la pista."
  },
  {
    "id": "d184",
    "difficulty": "dificil",
    "clue": "Entre salida de un tallo y aparición repentina de algo, la palabra no cambia. (5)",
    "answer": "BROTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Salida de un tallo",
    "fodder": "aparición repentina de algo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BROTE: «Salida de un tallo» y «aparición repentina de algo»."
  },
  {
    "id": "d185",
    "difficulty": "dificil",
    "clue": "Sirve para pendiente de un terreno y también para precio o esfuerzo que algo exige. (6)",
    "answer": "CUESTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pendiente de un terreno",
    "fodder": "precio o esfuerzo que algo exige",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CUESTA: «Pendiente de un terreno» y «precio o esfuerzo que algo exige»."
  },
  {
    "id": "d186",
    "difficulty": "dificil",
    "clue": "Entre lámpara portátil y dispositivo de iluminación manual, la palabra no cambia. (8)",
    "answer": "LINTERNA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lámpara portátil",
    "fodder": "dispositivo de iluminación manual",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a LINTERNA: «Lámpara portátil» y «dispositivo de iluminación manual»."
  },
  {
    "id": "d187",
    "difficulty": "dificil",
    "clue": "Recipiente con paredes, perdida dentro de encajar. (4)",
    "answer": "CAJA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Recipiente con paredes",
    "fodder": "encajar",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "CAJA aparece de forma continua dentro de «encajar». La definición es «Recipiente con paredes»."
  },
  {
    "id": "d188",
    "difficulty": "dificil",
    "clue": "Sirve para rastro que deja un objeto al moverse y también para monumento funerario. (6)",
    "answer": "ESTELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Rastro que deja un objeto al moverse",
    "fodder": "monumento funerario",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a ESTELA: «Rastro que deja un objeto al moverse» y «monumento funerario»."
  },
  {
    "id": "d189",
    "difficulty": "dificil",
    "clue": "Celebración religiosa que queda cuando misma pierde su primera letra. (4)",
    "answer": "MISA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Celebración religiosa",
    "fodder": "misma",
    "indicators": [
      "pierde su primera letra"
    ],
    "explanation": "MISA se obtiene de misma al retirar la letra indicada por la pista."
  },
  {
    "id": "d190",
    "difficulty": "dificil",
    "clue": "Conjunto de flores que queda cuando tramo pierde una pieza. (4)",
    "answer": "RAMO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Conjunto de flores",
    "fodder": "tramo",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "RAMO se obtiene de tramo al retirar la letra indicada por la pista."
  },
  {
    "id": "d191",
    "difficulty": "dificil",
    "clue": "Pequeña porción de líquido que sale de gato cuando todo queda revuelto. (4)",
    "answer": "GOTA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Pequeña porción de líquido",
    "fodder": "gato",
    "indicators": [
      "todo queda revuelto"
    ],
    "explanation": "Las letras de gato se reordenan para formar GOTA."
  },
  {
    "id": "d192",
    "difficulty": "dificil",
    "clue": "Puede ser pelota para jugar o persona muy tonta, coloquial. (5)",
    "answer": "BALON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pelota para jugar",
    "fodder": "persona muy tonta, coloquial",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BALON: «Pelota para jugar» y «persona muy tonta, coloquial»."
  },
  {
    "id": "d193",
    "difficulty": "dificil",
    "clue": "Puede ser masa visible de vapor de agua o servicio informático remoto. (4)",
    "answer": "NUBE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Masa visible de vapor de agua",
    "fodder": "servicio informático remoto",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a NUBE: «Masa visible de vapor de agua» y «servicio informático remoto»."
  },
  {
    "id": "d194",
    "difficulty": "dificil",
    "clue": "Documento de una reunión que queda cuando actua pierde una pieza. (4)",
    "answer": "ACTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Documento de una reunión",
    "fodder": "actua",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "ACTA se obtiene de actua al retirar la letra indicada por la pista."
  },
  {
    "id": "d195",
    "difficulty": "dificil",
    "clue": "Agarrar si risa vuelve sobre sus pasos. (4)",
    "answer": "ASIR",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Agarrar",
    "fodder": "risa",
    "indicators": [
      "vuelve sobre sus pasos"
    ],
    "explanation": "ASIR aparece al leer risa al revés."
  },
  {
    "id": "d196",
    "difficulty": "dificil",
    "clue": "Fruto seco que queda cuando pasar pierde el final. (4)",
    "answer": "PASA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Fruto seco",
    "fodder": "pasar",
    "indicators": [
      "pierde el final"
    ],
    "explanation": "PASA se obtiene de pasar al retirar la letra indicada por la pista."
  },
  {
    "id": "d197",
    "difficulty": "medio-dificil",
    "clue": "Está debajo de todo y, en un asunto, puede ser lo esencial. (5)",
    "answer": "FONDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Está debajo de todo",
    "fodder": "",
    "indicators": [
      "y"
    ],
    "explanation": "FONDO tiene sentido físico y abstracto."
  },
  {
    "id": "d198",
    "difficulty": "dificil",
    "clue": "Acuerdo entre personas cuando rato abraza una intrusa. (5)",
    "answer": "TRATO",
    "mechanisms": [
      "container"
    ],
    "definition": "Acuerdo entre personas",
    "fodder": "rato",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "TRATO se forma al introducir una letra en rato."
  },
  {
    "id": "d199",
    "difficulty": "dificil",
    "clue": "Elevación de agua, si lo dices en voz alta. (3)",
    "answer": "OLA",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Elevación de agua",
    "fodder": "hola",
    "indicators": [
      "en voz alta"
    ],
    "explanation": "OLA suena como «hola»; la definición es «Elevación de agua»."
  },
  {
    "id": "d200",
    "difficulty": "dificil",
    "clue": "Habitación amplia cuando sal abraza una intrusa. (4)",
    "answer": "SALA",
    "mechanisms": [
      "container"
    ],
    "definition": "Habitación amplia",
    "fodder": "sal",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "SALA se forma al introducir una letra en sal."
  },
  {
    "id": "d201",
    "difficulty": "dificil",
    "clue": "Sirve para recipiente con asa y también para persona o cosa de forma torpe, en uso coloquial. (5)",
    "answer": "JARRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recipiente con asa",
    "fodder": "persona o cosa de forma torpe, en uso coloquial",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a JARRA: «Recipiente con asa» y «persona o cosa de forma torpe, en uso coloquial»."
  },
  {
    "id": "d202",
    "difficulty": "dificil",
    "clue": "Puede estar por resolver o inclinarse cuesta abajo. (9)",
    "answer": "PENDIENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede estar por resolver",
    "fodder": "",
    "indicators": [
      "o"
    ],
    "explanation": "PENDIENTE tiene sentido temporal y geométrico."
  },
  {
    "id": "d203",
    "difficulty": "dificil",
    "clue": "Bolsa que aparece cuando unas ocas regresan. (4)",
    "answer": "SACO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Bolsa",
    "fodder": "ocas",
    "indicators": [
      "regresan"
    ],
    "explanation": "SACO aparece al leer ocas al revés."
  },
  {
    "id": "d204",
    "difficulty": "dificil",
    "clue": "Sirve para acción de bajar de una nave y también para llegada de tropas a tierra. (10)",
    "answer": "DESEMBARCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de bajar de una nave",
    "fodder": "llegada de tropas a tierra",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a DESEMBARCO: «Acción de bajar de una nave» y «llegada de tropas a tierra»."
  },
  {
    "id": "d205",
    "difficulty": "medio-dificil",
    "clue": "Rodea una caja o se sube a un escenario. (5)",
    "answer": "BANDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Rodea una caja",
    "fodder": "",
    "indicators": [
      "o"
    ],
    "explanation": "BANDA puede ser franja y grupo musical."
  },
  {
    "id": "d206",
    "difficulty": "dificil",
    "clue": "Puede ser fuerza que mueve o deseo repentino de actuar. (7)",
    "answer": "IMPULSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuerza que mueve",
    "fodder": "deseo repentino de actuar",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a IMPULSO: «Fuerza que mueve» y «deseo repentino de actuar»."
  },
  {
    "id": "d207",
    "difficulty": "dificil",
    "clue": "Sirve para material que retiene partículas y también para criterio que deja pasar unas cosas y otras no. (6)",
    "answer": "FILTRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material que retiene partículas",
    "fodder": "criterio que deja pasar unas cosas y otras no",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a FILTRO: «Material que retiene partículas» y «criterio que deja pasar unas cosas y otras no»."
  },
  {
    "id": "d208",
    "difficulty": "dificil",
    "clue": "Extremo de algo: boca cambia de sitio y da la respuesta. (4)",
    "answer": "CABO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Extremo de algo",
    "fodder": "boca",
    "indicators": [
      "cambia de sitio"
    ],
    "explanation": "Las letras de boca se reordenan para formar CABO."
  },
  {
    "id": "d209",
    "difficulty": "dificil",
    "clue": "Sirve para juguete que vuela con hilo y también para cuerpo celeste. (6)",
    "answer": "COMETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Juguete que vuela con hilo",
    "fodder": "cuerpo celeste",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a COMETA: «Juguete que vuela con hilo» y «cuerpo celeste»."
  },
  {
    "id": "d210",
    "difficulty": "medio-dificil",
    "clue": "Importa en la balanza y también en una decisión. (4)",
    "answer": "PESO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Importa en la balanza",
    "fodder": "",
    "indicators": [
      "también"
    ],
    "explanation": "Dos sentidos de PESO: magnitud física e importancia."
  },
  {
    "id": "d211",
    "difficulty": "dificil",
    "clue": "Sirve para color de la sangre y también para persona comunista, coloquial. (4)",
    "answer": "ROJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Color de la sangre",
    "fodder": "persona comunista, coloquial",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a ROJO: «Color de la sangre» y «persona comunista, coloquial»."
  },
  {
    "id": "d212",
    "difficulty": "medio-dificil",
    "clue": "Se abre en una pared y, a veces, en una agenda. (7)",
    "answer": "VENTANA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Se abre en una pared",
    "fodder": "",
    "indicators": [
      "y"
    ],
    "explanation": "VENTANA es abertura y franja temporal disponible."
  },
  {
    "id": "d213",
    "difficulty": "dificil",
    "clue": "Puede ser modifica algo o hace una permuta o sustitución. (6)",
    "answer": "CAMBIA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Modifica algo",
    "fodder": "hace una permuta o sustitución",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CAMBIA: «Modifica algo» y «hace una permuta o sustitución»."
  },
  {
    "id": "d214",
    "difficulty": "dificil",
    "clue": "Entre articulación del brazo y curva pronunciada, la palabra no cambia. (4)",
    "answer": "CODO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Articulación del brazo",
    "fodder": "curva pronunciada",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CODO: «Articulación del brazo» y «curva pronunciada»."
  },
  {
    "id": "d215",
    "difficulty": "medio-dificil",
    "clue": "Abre una puerta, pero también puede abrir un problema. (5)",
    "answer": "LLAVE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Abre una puerta",
    "fodder": "",
    "indicators": [
      "pero también"
    ],
    "explanation": "LLAVE es objeto físico y solución/clue clave."
  },
  {
    "id": "d216",
    "difficulty": "dificil",
    "clue": "Espacio reservado en un teatro cuando palo abraza una intrusa. (5)",
    "answer": "PALCO",
    "mechanisms": [
      "container"
    ],
    "definition": "Espacio reservado en un teatro",
    "fodder": "palo",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "PALCO se forma al introducir una letra en palo."
  },
  {
    "id": "d217",
    "difficulty": "dificil",
    "clue": "Sentir amor cuando mar abraza una intrusa. (4)",
    "answer": "AMAR",
    "mechanisms": [
      "container"
    ],
    "definition": "Sentir amor",
    "fodder": "mar",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "AMAR se forma al introducir una letra en mar."
  },
  {
    "id": "d218",
    "difficulty": "dificil",
    "clue": "Puede ser extremidad superior o parte lateral de un objeto. (5)",
    "answer": "BRAZO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremidad superior",
    "fodder": "parte lateral de un objeto",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BRAZO: «Extremidad superior» y «parte lateral de un objeto»."
  },
  {
    "id": "d219",
    "difficulty": "dificil",
    "clue": "Latido arterial, perdida dentro de impulso. (5)",
    "answer": "PULSO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Latido arterial",
    "fodder": "impulso",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "PULSO aparece de forma continua dentro de «impulso». La definición es «Latido arterial»."
  },
  {
    "id": "d220",
    "difficulty": "dificil",
    "clue": "Sirve para relativo a la conducta y también para ánimo. (5)",
    "answer": "MORAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Relativo a la conducta",
    "fodder": "ánimo",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a MORAL: «Relativo a la conducta» y «ánimo»."
  },
  {
    "id": "d221",
    "difficulty": "dificil",
    "clue": "Sirve para actividad para entretenerse y también para juego o afición. (10)",
    "answer": "PASATIEMPO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Actividad para entretenerse",
    "fodder": "juego o afición",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a PASATIEMPO: «Actividad para entretenerse» y «juego o afición»."
  },
  {
    "id": "d222",
    "difficulty": "dificil",
    "clue": "Parte de la mano cuando alma abraza una intrusa. (5)",
    "answer": "PALMA",
    "mechanisms": [
      "container"
    ],
    "definition": "Parte de la mano",
    "fodder": "alma",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "PALMA se forma al introducir una letra en alma."
  },
  {
    "id": "d223",
    "difficulty": "dificil",
    "clue": "Entre parte dura del esqueleto y elemento difícil de tratar, la palabra no cambia. (5)",
    "answer": "HUESO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte dura del esqueleto",
    "fodder": "elemento difícil de tratar",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a HUESO: «Parte dura del esqueleto» y «elemento difícil de tratar»."
  },
  {
    "id": "d224",
    "difficulty": "dificil",
    "clue": "Sujetar, si la rata vuelve sobre sus pasos. (4)",
    "answer": "ATAR",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Sujetar",
    "fodder": "rata",
    "indicators": [
      "vuelve sobre sus pasos"
    ],
    "explanation": "ATAR aparece al leer rata al revés."
  },
  {
    "id": "d225",
    "difficulty": "dificil",
    "clue": "Herramienta para cavar, perdida dentro de palabra. (4)",
    "answer": "PALA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Herramienta para cavar",
    "fodder": "palabra",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "PALA aparece de forma continua dentro de «palabra». La definición es «Herramienta para cavar»."
  },
  {
    "id": "d226",
    "difficulty": "dificil",
    "clue": "Puede ser fuente de luz o centro de atención. (4)",
    "answer": "FOCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuente de luz",
    "fodder": "centro de atención",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a FOCO: «Fuente de luz» y «centro de atención»."
  },
  {
    "id": "d227",
    "difficulty": "dificil",
    "clue": "Asiento alargado que nace de blanco sin el comienzo de libro. (5)",
    "answer": "BANCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Asiento alargado",
    "fodder": "blanco",
    "indicators": [
      "sin el comienzo de libro"
    ],
    "explanation": "BANCO se obtiene de blanco al retirar la letra indicada por la pista."
  },
  {
    "id": "d228",
    "difficulty": "dificil",
    "clue": "Entre recipiente metálico y envase de hojalata, la palabra no cambia. (4)",
    "answer": "LATA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recipiente metálico",
    "fodder": "envase de hojalata",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a LATA: «Recipiente metálico» y «envase de hojalata»."
  },
  {
    "id": "d229",
    "difficulty": "dificil",
    "clue": "Sirve para magnitud obtenida al medir y también para disposición tomada. (6)",
    "answer": "MEDIDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Magnitud obtenida al medir",
    "fodder": "disposición tomada",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a MEDIDA: «Magnitud obtenida al medir» y «disposición tomada»."
  },
  {
    "id": "d230",
    "difficulty": "dificil",
    "clue": "Puede ser utensilio para trasvasar líquidos o forma que se estrecha. (6)",
    "answer": "EMBUDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Utensilio para trasvasar líquidos",
    "fodder": "forma que se estrecha",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a EMBUDO: «Utensilio para trasvasar líquidos» y «forma que se estrecha»."
  },
  {
    "id": "d231",
    "difficulty": "dificil",
    "clue": "Puede ser serie graduada o parada intermedia de un viaje. (6)",
    "answer": "ESCALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Serie graduada",
    "fodder": "parada intermedia de un viaje",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a ESCALA: «Serie graduada» y «parada intermedia de un viaje»."
  },
  {
    "id": "d232",
    "difficulty": "dificil",
    "clue": "Sirve para nombre de una obra y también para distinción académica. (6)",
    "answer": "TITULO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Nombre de una obra",
    "fodder": "distinción académica",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a TITULO: «Nombre de una obra» y «distinción académica»."
  },
  {
    "id": "d233",
    "difficulty": "dificil",
    "clue": "Frutas de pepita; basta con desordenar presa. (5)",
    "answer": "PERAS",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Frutas de pepita",
    "fodder": "presa",
    "indicators": [
      "desordenar"
    ],
    "explanation": "Las letras de presa se reordenan para formar PERAS."
  },
  {
    "id": "d234",
    "difficulty": "dificil",
    "clue": "Entre contorno de una figura y conjunto de rasgos de una persona, la palabra no cambia. (6)",
    "answer": "PERFIL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Contorno de una figura",
    "fodder": "conjunto de rasgos de una persona",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PERFIL: «Contorno de una figura» y «conjunto de rasgos de una persona»."
  },
  {
    "id": "d235",
    "difficulty": "dificil",
    "clue": "Pequeño roedor cuando rato abraza una intrusa. (5)",
    "answer": "RATON",
    "mechanisms": [
      "container"
    ],
    "definition": "Pequeño roedor",
    "fodder": "rato",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "RATON se forma al introducir una letra en rato."
  },
  {
    "id": "d236",
    "difficulty": "dificil",
    "clue": "Sirve para pieza de un juego y también para tarjeta con datos. (5)",
    "answer": "FICHA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza de un juego",
    "fodder": "tarjeta con datos",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a FICHA: «Pieza de un juego» y «tarjeta con datos»."
  },
  {
    "id": "d237",
    "difficulty": "dificil",
    "clue": "Puede ser poder sobre algo o dirección de internet. (7)",
    "answer": "DOMINIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Poder sobre algo",
    "fodder": "dirección de internet",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a DOMINIO: «Poder sobre algo» y «dirección de internet»."
  },
  {
    "id": "d238",
    "difficulty": "dificil",
    "clue": "Sirve para borde de un sólido y también para cresta o línea de encuentro. (6)",
    "answer": "ARISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde de un sólido",
    "fodder": "cresta o línea de encuentro",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a ARISTA: «Borde de un sólido» y «cresta o línea de encuentro»."
  },
  {
    "id": "d239",
    "difficulty": "dificil",
    "clue": "Parte de un árbol si amar vuelve sobre sus pasos. (4)",
    "answer": "RAMA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Parte de un árbol",
    "fodder": "amar",
    "indicators": [
      "vuelve sobre sus pasos"
    ],
    "explanation": "RAMA aparece al leer amar al revés."
  },
  {
    "id": "d240",
    "difficulty": "dificil",
    "clue": "Sirve para materia de granos finos y también para terreno de competición. (5)",
    "answer": "ARENA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Materia de granos finos",
    "fodder": "terreno de competición",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a ARENA: «Materia de granos finos» y «terreno de competición»."
  },
  {
    "id": "d241",
    "difficulty": "dificil",
    "clue": "Puede ser persona que actúa en nombre de otra o sustancia que produce un efecto. (6)",
    "answer": "AGENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que actúa en nombre de otra",
    "fodder": "sustancia que produce un efecto",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a AGENTE: «Persona que actúa en nombre de otra» y «sustancia que produce un efecto»."
  },
  {
    "id": "d242",
    "difficulty": "dificil",
    "clue": "Puede ser golpe dado con fuerza o persona que causa muchos problemas. (5)",
    "answer": "AZOTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Golpe dado con fuerza",
    "fodder": "persona que causa muchos problemas",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a AZOTE: «Golpe dado con fuerza» y «persona que causa muchos problemas»."
  },
  {
    "id": "d243",
    "difficulty": "dificil",
    "clue": "Entre grupo de alumnos y categoría, la palabra no cambia. (5)",
    "answer": "CLASE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Grupo de alumnos",
    "fodder": "categoría",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CLASE: «Grupo de alumnos» y «categoría»."
  },
  {
    "id": "d244",
    "difficulty": "dificil",
    "clue": "Piedra que aparece cuando el arco cambia de sitio. (4)",
    "answer": "ROCA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Piedra",
    "fodder": "arco",
    "indicators": [
      "cambia de sitio"
    ],
    "explanation": "Las letras de arco se reordenan para formar ROCA."
  },
  {
    "id": "d245",
    "difficulty": "dificil",
    "clue": "Mamífero carnívoro; basta con desordenar bolo. (4)",
    "answer": "LOBO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Mamífero carnívoro",
    "fodder": "bolo",
    "indicators": [
      "desordenar"
    ],
    "explanation": "Las letras de bolo se reordenan para formar LOBO."
  },
  {
    "id": "d246",
    "difficulty": "dificil",
    "clue": "Conductor de electricidad que queda cuando cables pierde una pieza. (5)",
    "answer": "CABLE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Conductor de electricidad",
    "fodder": "cables",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "CABLE se obtiene de cables al retirar la letra indicada por la pista."
  },
  {
    "id": "d247",
    "difficulty": "dificil",
    "clue": "Puede ser elevación pequeña del terreno o montículo. (5)",
    "answer": "CERRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Elevación pequeña del terreno",
    "fodder": "montículo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CERRO: «Elevación pequeña del terreno» y «montículo»."
  },
  {
    "id": "d248",
    "difficulty": "dificil",
    "clue": "Herramienta abrasiva que queda cuando clima pierde una pieza. (4)",
    "answer": "LIMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Herramienta abrasiva",
    "fodder": "clima",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "LIMA se obtiene de clima al retirar la letra indicada por la pista."
  },
  {
    "id": "d249",
    "difficulty": "dificil",
    "clue": "Sirve para orilla del mar y también para cantidad que cuesta algo. (5)",
    "answer": "COSTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Orilla del mar",
    "fodder": "cantidad que cuesta algo",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a COSTA: «Orilla del mar» y «cantidad que cuesta algo»."
  },
  {
    "id": "d250",
    "difficulty": "dificil",
    "clue": "Puede ser sustancia de las abejas o material para pulir. (4)",
    "answer": "CERA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sustancia de las abejas",
    "fodder": "material para pulir",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CERA: «Sustancia de las abejas» y «material para pulir»."
  },
  {
    "id": "d251",
    "difficulty": "dificil",
    "clue": "Entre filamento que nace en la piel y cabello, la palabra no cambia. (4)",
    "answer": "PELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Filamento que nace en la piel",
    "fodder": "cabello",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PELO: «Filamento que nace en la piel» y «cabello»."
  },
  {
    "id": "d252",
    "difficulty": "dificil",
    "clue": "Puede ser conjunto de acciones organizadas o temporada militar. (7)",
    "answer": "CAMPAÑA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de acciones organizadas",
    "fodder": "temporada militar",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CAMPAÑA: «Conjunto de acciones organizadas» y «temporada militar»."
  },
  {
    "id": "d253",
    "difficulty": "dificil",
    "clue": "Entre ayuda y punto en que algo descansa, la palabra no cambia. (5)",
    "answer": "APOYO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ayuda",
    "fodder": "punto en que algo descansa",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a APOYO: «Ayuda» y «punto en que algo descansa»."
  },
  {
    "id": "d254",
    "difficulty": "dificil",
    "clue": "Pieza que cubre; basta con desordenar pata. (4)",
    "answer": "TAPA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Pieza que cubre",
    "fodder": "pata",
    "indicators": [
      "desordenar"
    ],
    "explanation": "Las letras de pata se reordenan para formar TAPA."
  },
  {
    "id": "d255",
    "difficulty": "dificil",
    "clue": "Puede ser defensa protectora o emblema. (6)",
    "answer": "ESCUDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Defensa protectora",
    "fodder": "emblema",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a ESCUDO: «Defensa protectora» y «emblema»."
  },
  {
    "id": "d256",
    "difficulty": "dificil",
    "clue": "Puede ser representación a escala o liso y sin relieve. (5)",
    "answer": "PLANO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación a escala",
    "fodder": "liso y sin relieve",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PLANO: «Representación a escala» y «liso y sin relieve»."
  },
  {
    "id": "d257",
    "difficulty": "dificil",
    "clue": "Sirve para extensión que ocupa algo y también para hueco disponible. (7)",
    "answer": "ESPACIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extensión que ocupa algo",
    "fodder": "hueco disponible",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a ESPACIO: «Extensión que ocupa algo» y «hueco disponible»."
  },
  {
    "id": "d258",
    "difficulty": "dificil",
    "clue": "Parte del calzado que sale cuando el canto se desarma. (5)",
    "answer": "TACON",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Parte del calzado",
    "fodder": "canto",
    "indicators": [
      "se desarma"
    ],
    "explanation": "Las letras de canto se reordenan para formar TACON."
  },
  {
    "id": "d259",
    "difficulty": "dificil",
    "clue": "Entre de gran altura y detención o parada, la palabra no cambia. (4)",
    "answer": "ALTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "De gran altura",
    "fodder": "detención o parada",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a ALTO: «De gran altura» y «detención o parada»."
  },
  {
    "id": "d260",
    "difficulty": "dificil",
    "clue": "Puede ser prenda con mangas o cubierta exterior de algo. (6)",
    "answer": "CAMISA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda con mangas",
    "fodder": "cubierta exterior de algo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CAMISA: «Prenda con mangas» y «cubierta exterior de algo»."
  },
  {
    "id": "d261",
    "difficulty": "dificil",
    "clue": "Modo de funcionar cuando marca abraza una intrusa. (6)",
    "answer": "MARCHA",
    "mechanisms": [
      "container"
    ],
    "definition": "Modo de funcionar",
    "fodder": "marca",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "MARCHA se forma al introducir una letra en marca."
  },
  {
    "id": "d262",
    "difficulty": "dificil",
    "clue": "Un momento breve que queda si el trato pierde su primera pieza. (4)",
    "answer": "RATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Un momento breve",
    "fodder": "trato",
    "indicators": [
      "pierde su primera pieza"
    ],
    "explanation": "RATO se obtiene de trato al retirar la letra indicada por la pista."
  },
  {
    "id": "d263",
    "difficulty": "dificil",
    "clue": "Puede ser sucesión de puntos o servicio o ruta de transporte. (5)",
    "answer": "LINEA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sucesión de puntos",
    "fodder": "servicio o ruta de transporte",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a LINEA: «Sucesión de puntos» y «servicio o ruta de transporte»."
  },
  {
    "id": "d264",
    "difficulty": "dificil",
    "clue": "Entre superficie para escribir y marcador táctico de un entrenador, la palabra no cambia. (7)",
    "answer": "PIZARRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie para escribir",
    "fodder": "marcador táctico de un entrenador",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PIZARRA: «Superficie para escribir» y «marcador táctico de un entrenador»."
  },
  {
    "id": "d265",
    "difficulty": "dificil",
    "clue": "Puede ser casa familiar o lugar donde vive alguien. (5)",
    "answer": "HOGAR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Casa familiar",
    "fodder": "lugar donde vive alguien",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a HOGAR: «Casa familiar» y «lugar donde vive alguien»."
  },
  {
    "id": "d266",
    "difficulty": "dificil",
    "clue": "Puede ser conjunto de cables o instalación eléctrica. (8)",
    "answer": "CABLEADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de cables",
    "fodder": "instalación eléctrica",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CABLEADO: «Conjunto de cables» y «instalación eléctrica»."
  },
  {
    "id": "d267",
    "difficulty": "dificil",
    "clue": "Sirve para aspecto exterior y también para unidad antigua de capacidad. (5)",
    "answer": "PINTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Aspecto exterior",
    "fodder": "unidad antigua de capacidad",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a PINTA: «Aspecto exterior» y «unidad antigua de capacidad»."
  },
  {
    "id": "d268",
    "difficulty": "dificil",
    "clue": "Parte más alta que queda cuando clima pierde una pieza. (4)",
    "answer": "CIMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Parte más alta",
    "fodder": "clima",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "CIMA se obtiene de clima al retirar la letra indicada por la pista."
  },
  {
    "id": "d269",
    "difficulty": "dificil",
    "clue": "Puede ser parte lateral del cuerpo o lado de algo. (7)",
    "answer": "COSTADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte lateral del cuerpo",
    "fodder": "lado de algo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a COSTADO: «Parte lateral del cuerpo» y «lado de algo»."
  },
  {
    "id": "d270",
    "difficulty": "dificil",
    "clue": "Puede ser pieza alargada o local donde se sirven bebidas. (5)",
    "answer": "BARRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza alargada",
    "fodder": "local donde se sirven bebidas",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BARRA: «Pieza alargada» y «local donde se sirven bebidas»."
  },
  {
    "id": "d271",
    "difficulty": "dificil",
    "clue": "Sirve para acción de rodar y también para pieza o acción de un mecanismo, según contexto. (4)",
    "answer": "RODA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de rodar",
    "fodder": "pieza o acción de un mecanismo, según contexto",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a RODA: «Acción de rodar» y «pieza o acción de un mecanismo, según contexto»."
  },
  {
    "id": "d272",
    "difficulty": "dificil",
    "clue": "Parte por donde se agarra una herramienta cuando mano abraza una intrusa. (5)",
    "answer": "MANGO",
    "mechanisms": [
      "container"
    ],
    "definition": "Parte por donde se agarra una herramienta",
    "fodder": "mano",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "MANGO se forma al introducir una letra en mano."
  },
  {
    "id": "d273",
    "difficulty": "dificil",
    "clue": "Cuerpo celeste que queda cuando rastro pierde una pieza. (5)",
    "answer": "ASTRO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Cuerpo celeste",
    "fodder": "rastro",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "ASTRO se obtiene de rastro al retirar la letra indicada por la pista."
  },
  {
    "id": "d274",
    "difficulty": "dificil",
    "clue": "Puede ser borde de una página o diferencia o espacio disponible. (6)",
    "answer": "MARGEN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde de una página",
    "fodder": "diferencia o espacio disponible",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MARGEN: «Borde de una página» y «diferencia o espacio disponible»."
  },
  {
    "id": "d275",
    "difficulty": "dificil",
    "clue": "Objeto indefinido que queda cuando cosas pierde una pieza. (4)",
    "answer": "COSA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Objeto indefinido",
    "fodder": "cosas",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "COSA se obtiene de cosas al retirar la letra indicada por la pista."
  },
  {
    "id": "d276",
    "difficulty": "dificil",
    "clue": "Entre línea alrededor de la que gira algo y idea central, la palabra no cambia. (3)",
    "answer": "EJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea alrededor de la que gira algo",
    "fodder": "idea central",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a EJE: «Línea alrededor de la que gira algo» y «idea central»."
  },
  {
    "id": "d277",
    "difficulty": "dificil",
    "clue": "Sirve para recinto para animales y también para lugar de encierro. (6)",
    "answer": "CORRAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recinto para animales",
    "fodder": "lugar de encierro",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CORRAL: «Recinto para animales» y «lugar de encierro»."
  },
  {
    "id": "d278",
    "difficulty": "dificil",
    "clue": "Sin asperezas que queda cuando lista pierde una pieza. (4)",
    "answer": "LISA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Sin asperezas",
    "fodder": "lista",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "LISA se obtiene de lista al retirar la letra indicada por la pista."
  },
  {
    "id": "d279",
    "difficulty": "dificil",
    "clue": "Borde que rodea una imagen que queda cuando marcos pierde una pieza. (5)",
    "answer": "MARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Borde que rodea una imagen",
    "fodder": "marcos",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "MARCO se obtiene de marcos al retirar la letra indicada por la pista."
  },
  {
    "id": "d280",
    "difficulty": "dificil",
    "clue": "Entre representación geográfica y esquema para orientarse, la palabra no cambia. (4)",
    "answer": "MAPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación geográfica",
    "fodder": "esquema para orientarse",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MAPA: «Representación geográfica» y «esquema para orientarse»."
  },
  {
    "id": "d281",
    "difficulty": "dificil",
    "clue": "Puede ser palo para golpear una pelota o instrumento deportivo. (4)",
    "answer": "BATE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Palo para golpear una pelota",
    "fodder": "instrumento deportivo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a BATE: «Palo para golpear una pelota» y «instrumento deportivo»."
  },
  {
    "id": "d282",
    "difficulty": "dificil",
    "clue": "Sirve para mujer distinguida y también para pieza del ajedrez. (4)",
    "answer": "DAMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mujer distinguida",
    "fodder": "pieza del ajedrez",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a DAMA: «Mujer distinguida» y «pieza del ajedrez»."
  },
  {
    "id": "d283",
    "difficulty": "dificil",
    "clue": "Suena cuando el tacón deja de estar en su sitio. (5)",
    "answer": "CANTO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Suena",
    "fodder": "tacon",
    "indicators": [
      "deja de estar en su sitio"
    ],
    "explanation": "Las letras de tacon se reordenan para formar CANTO."
  },
  {
    "id": "d284",
    "difficulty": "dificil",
    "clue": "Entre acción de salvar y precio pagado para recuperar algo, la palabra no cambia. (7)",
    "answer": "RESCATE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de salvar",
    "fodder": "precio pagado para recuperar algo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a RESCATE: «Acción de salvar» y «precio pagado para recuperar algo»."
  },
  {
    "id": "d285",
    "difficulty": "dificil",
    "clue": "Entre combustión con llamas y entusiasmo o energía, la palabra no cambia. (5)",
    "answer": "FUEGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Combustión con llamas",
    "fodder": "entusiasmo o energía",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a FUEGO: «Combustión con llamas» y «entusiasmo o energía»."
  },
  {
    "id": "d286",
    "difficulty": "dificil",
    "clue": "Objeto fino para coser cuando agua abraza una intrusa. (5)",
    "answer": "AGUJA",
    "mechanisms": [
      "container"
    ],
    "definition": "Objeto fino para coser",
    "fodder": "agua",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "AGUJA se forma al introducir una letra en agua."
  },
  {
    "id": "d287",
    "difficulty": "dificil",
    "clue": "Sirve para prenda para la mano y también para protección que cubre una mano. (6)",
    "answer": "GUANTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda para la mano",
    "fodder": "protección que cubre una mano",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a GUANTE: «Prenda para la mano» y «protección que cubre una mano»."
  },
  {
    "id": "d288",
    "difficulty": "dificil",
    "clue": "Superficie que se pisa, perdida dentro de consuelo. (5)",
    "answer": "SUELO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Superficie que se pisa",
    "fodder": "consuelo",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "SUELO aparece de forma continua dentro de «consuelo». La definición es «Superficie que se pisa»."
  },
  {
    "id": "d289",
    "difficulty": "dificil",
    "clue": "Sirve para pieza que sujeta y también para sujeción de oficina. (5)",
    "answer": "GRAPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que sujeta",
    "fodder": "sujeción de oficina",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a GRAPA: «Pieza que sujeta» y «sujeción de oficina»."
  },
  {
    "id": "d290",
    "difficulty": "dificil",
    "clue": "Afecto que vuelve cuando roma mira hacia atrás. (4)",
    "answer": "AMOR",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Afecto",
    "fodder": "roma",
    "indicators": [
      "mira hacia atrás"
    ],
    "explanation": "AMOR aparece al leer roma al revés."
  },
  {
    "id": "d291",
    "difficulty": "dificil",
    "clue": "Sirve para proyectil con punta y también para símbolo que indica dirección. (6)",
    "answer": "FLECHA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Proyectil con punta",
    "fodder": "símbolo que indica dirección",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a FLECHA: «Proyectil con punta» y «símbolo que indica dirección»."
  },
  {
    "id": "d292",
    "difficulty": "dificil",
    "clue": "Sirve para comunicación de advertencia y también para anuncio. (5)",
    "answer": "AVISO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Comunicación de advertencia",
    "fodder": "anuncio",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a AVISO: «Comunicación de advertencia» y «anuncio»."
  },
  {
    "id": "d293",
    "difficulty": "dificil",
    "clue": "Sirve para superficie de tierra y también para ámbito en que se desarrolla algo. (7)",
    "answer": "TERRENO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie de tierra",
    "fodder": "ámbito en que se desarrolla algo",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a TERRENO: «Superficie de tierra» y «ámbito en que se desarrolla algo»."
  },
  {
    "id": "d294",
    "difficulty": "dificil",
    "clue": "Sirve para pieza de dinero y también para unidad monetaria. (6)",
    "answer": "MONEDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza de dinero",
    "fodder": "unidad monetaria",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a MONEDA: «Pieza de dinero» y «unidad monetaria»."
  },
  {
    "id": "d295",
    "difficulty": "dificil",
    "clue": "Sirve para marca estampada y también para precinto adhesivo. (5)",
    "answer": "SELLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Marca estampada",
    "fodder": "precinto adhesivo",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a SELLO: «Marca estampada» y «precinto adhesivo»."
  },
  {
    "id": "d296",
    "difficulty": "dificil",
    "clue": "Sirve para entonación particular y también para signo ortográfico. (6)",
    "answer": "ACENTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Entonación particular",
    "fodder": "signo ortográfico",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a ACENTO: «Entonación particular» y «signo ortográfico»."
  },
  {
    "id": "d297",
    "difficulty": "dificil",
    "clue": "Puede ser tira estrecha de material o película grabada. (5)",
    "answer": "CINTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tira estrecha de material",
    "fodder": "película grabada",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CINTA: «Tira estrecha de material» y «película grabada»."
  },
  {
    "id": "d298",
    "difficulty": "dificil",
    "clue": "Argumento de una obra cuando rama abraza una intrusa. (5)",
    "answer": "TRAMA",
    "mechanisms": [
      "container"
    ],
    "definition": "Argumento de una obra",
    "fodder": "rama",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "TRAMA se forma al introducir una letra en rama."
  },
  {
    "id": "d299",
    "difficulty": "dificil",
    "clue": "Entre pieza que gira y produce impulso y órgano de ciertas estructuras, la palabra no cambia. (6)",
    "answer": "HELICE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que gira y produce impulso",
    "fodder": "órgano de ciertas estructuras",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a HELICE: «Pieza que gira y produce impulso» y «órgano de ciertas estructuras»."
  },
  {
    "id": "d300",
    "difficulty": "dificil",
    "clue": "Puede ser montón de objetos o dispositivo que produce electricidad. (4)",
    "answer": "PILA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Montón de objetos",
    "fodder": "dispositivo que produce electricidad",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PILA: «Montón de objetos» y «dispositivo que produce electricidad»."
  },
  {
    "id": "d301",
    "difficulty": "dificil",
    "clue": "Entre obra escrita y conjunto de hojas encuadernadas, la palabra no cambia. (5)",
    "answer": "LIBRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Obra escrita",
    "fodder": "conjunto de hojas encuadernadas",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a LIBRO: «Obra escrita» y «conjunto de hojas encuadernadas»."
  },
  {
    "id": "d302",
    "difficulty": "dificil",
    "clue": "Espacio público, perdida dentro de desplazarse. (5)",
    "answer": "PLAZA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Espacio público",
    "fodder": "desplazarse",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "PLAZA aparece de forma continua dentro de «desplazarse». La definición es «Espacio público»."
  },
  {
    "id": "d303",
    "difficulty": "dificil",
    "clue": "Mandato que queda cuando ordena pierde una pieza. (5)",
    "answer": "ORDEN",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Mandato",
    "fodder": "ordena",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "ORDEN se obtiene de ordena al retirar la letra indicada por la pista."
  },
  {
    "id": "d304",
    "difficulty": "dificil",
    "clue": "Sirve para material para confeccionar ropa y también para asunto o cuestión, coloquial. (4)",
    "answer": "TELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material para confeccionar ropa",
    "fodder": "asunto o cuestión, coloquial",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a TELA: «Material para confeccionar ropa» y «asunto o cuestión, coloquial»."
  },
  {
    "id": "d305",
    "difficulty": "dificil",
    "clue": "Entre de sabor áspero y desagradable, la palabra no cambia. (6)",
    "answer": "AMARGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "De sabor áspero",
    "fodder": "desagradable",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a AMARGO: «De sabor áspero» y «desagradable»."
  },
  {
    "id": "d306",
    "difficulty": "dificil",
    "clue": "Hoja fina de metal u otro material, con animal mirando hacia atrás. (6)",
    "answer": "LAMINA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Hoja fina de metal u otro material",
    "fodder": "animal",
    "indicators": [
      "mirando hacia atrás"
    ],
    "explanation": "LAMINA aparece al leer animal al revés."
  },
  {
    "id": "d307",
    "difficulty": "dificil",
    "clue": "Entre parte posterior y fila de personas, la palabra no cambia. (4)",
    "answer": "COLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte posterior",
    "fodder": "fila de personas",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a COLA: «Parte posterior» y «fila de personas»."
  },
  {
    "id": "d308",
    "difficulty": "dificil",
    "clue": "Puede ser parte anterior o zona de combate. (6)",
    "answer": "FRENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte anterior",
    "fodder": "zona de combate",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a FRENTE: «Parte anterior» y «zona de combate»."
  },
  {
    "id": "d309",
    "difficulty": "dificil",
    "clue": "Sirve para rúbrica personal y también para empresa o marca de autor. (5)",
    "answer": "FIRMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Rúbrica personal",
    "fodder": "empresa o marca de autor",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a FIRMA: «Rúbrica personal» y «empresa o marca de autor»."
  },
  {
    "id": "d310",
    "difficulty": "dificil",
    "clue": "Sirve para parte lateral y también para cada una de dos posiciones enfrentadas. (4)",
    "answer": "LADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte lateral",
    "fodder": "cada una de dos posiciones enfrentadas",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a LADO: «Parte lateral» y «cada una de dos posiciones enfrentadas»."
  },
  {
    "id": "d311",
    "difficulty": "dificil",
    "clue": "Sirve para lugar donde paran trenes y también para periodo del año. (8)",
    "answer": "ESTACION",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar donde paran trenes",
    "fodder": "periodo del año",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a ESTACION: «Lugar donde paran trenes» y «periodo del año»."
  },
  {
    "id": "d312",
    "difficulty": "dificil",
    "clue": "Da entrada a una casa y también a una oportunidad. (6)",
    "answer": "PUERTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Da entrada a una casa",
    "fodder": "",
    "indicators": [
      "y también"
    ],
    "explanation": "PUERTA es acceso físico y figurado."
  },
  {
    "id": "d313",
    "difficulty": "dificil",
    "clue": "Refugio de aves, perdida dentro de sonido. (4)",
    "answer": "NIDO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Refugio de aves",
    "fodder": "sonido",
    "indicators": [
      "perdida dentro de"
    ],
    "explanation": "NIDO aparece de forma continua dentro de «sonido». La definición es «Refugio de aves»."
  },
  {
    "id": "d314",
    "difficulty": "dificil",
    "clue": "Puede ser protección para la cabeza o parte exterior de una nave. (5)",
    "answer": "CASCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Protección para la cabeza",
    "fodder": "parte exterior de una nave",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CASCO: «Protección para la cabeza» y «parte exterior de una nave»."
  },
  {
    "id": "d315",
    "difficulty": "dificil",
    "clue": "Instrumento de ataque que sale de una rama revuelta. (4)",
    "answer": "ARMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Instrumento de ataque",
    "fodder": "rama",
    "indicators": [
      "revuelta"
    ],
    "explanation": "Las letras de rama se reordenan para formar ARMA."
  },
  {
    "id": "d316",
    "difficulty": "dificil",
    "clue": "Entre sucesión de peldaños y progresión de niveles, la palabra no cambia. (8)",
    "answer": "ESCALERA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sucesión de peldaños",
    "fodder": "progresión de niveles",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a ESCALERA: «Sucesión de peldaños» y «progresión de niveles»."
  },
  {
    "id": "d317",
    "difficulty": "dificil",
    "clue": "Puede ser camino más corto o procedimiento rápido. (5)",
    "answer": "ATAJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Camino más corto",
    "fodder": "procedimiento rápido",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a ATAJO: «Camino más corto» y «procedimiento rápido»."
  },
  {
    "id": "d318",
    "difficulty": "dificil",
    "clue": "Queda escrito en un archivo o cambia según cómo hables. (8)",
    "answer": "REGISTRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Queda escrito en un archivo",
    "fodder": "",
    "indicators": [
      "o"
    ],
    "explanation": "REGISTRO es inscripción y variedad de uso vocal/lingüístico."
  },
  {
    "id": "d319",
    "difficulty": "dificil",
    "clue": "Embarcación cuando ave abraza una intrusa. (4)",
    "answer": "NAVE",
    "mechanisms": [
      "container"
    ],
    "definition": "Embarcación",
    "fodder": "ave",
    "indicators": [
      "abraza una intrusa"
    ],
    "explanation": "NAVE se forma al introducir una letra en ave."
  },
  {
    "id": "d320",
    "difficulty": "dificil",
    "clue": "Sirve para canal por el que pasa algo y también para vía de comunicación. (8)",
    "answer": "CONDUCTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Canal por el que pasa algo",
    "fodder": "vía de comunicación",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CONDUCTO: «Canal por el que pasa algo» y «vía de comunicación»."
  },
  {
    "id": "d321",
    "difficulty": "dificil",
    "clue": "Te devuelve la cara y, a veces, tus propias costumbres. (6)",
    "answer": "ESPEJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Te devuelve la cara",
    "fodder": "",
    "indicators": [
      "y"
    ],
    "explanation": "ESPEJO es superficie reflectante y modelo que reproduce conducta."
  },
  {
    "id": "d322",
    "difficulty": "dificil",
    "clue": "Entre trozo de madera y golpe, la palabra no cambia. (4)",
    "answer": "PALO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Trozo de madera",
    "fodder": "golpe",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PALO: «Trozo de madera» y «golpe»."
  },
  {
    "id": "d323",
    "difficulty": "dificil",
    "clue": "Sirve para persona que juzga y también para árbitro de una competición. (4)",
    "answer": "JUEZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que juzga",
    "fodder": "árbitro de una competición",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a JUEZ: «Persona que juzga» y «árbitro de una competición»."
  },
  {
    "id": "d324",
    "difficulty": "medio-dificil",
    "clue": "Puede devolverte la cara o una respuesta que sale sola. (7)",
    "answer": "REFLEJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede devolverte la cara",
    "fodder": "",
    "indicators": [
      "o"
    ],
    "explanation": "REFLEJO es imagen reflejada y reacción automática."
  },
  {
    "id": "d325",
    "difficulty": "dificil",
    "clue": "Roedor que aparece cuando atar regresa. (4)",
    "answer": "RATA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Roedor",
    "fodder": "atar",
    "indicators": [
      "regresa"
    ],
    "explanation": "RATA aparece al leer atar al revés."
  },
  {
    "id": "d326",
    "difficulty": "dificil",
    "clue": "Sirve para señal que representa algo y también para síntoma. (5)",
    "answer": "SIGNO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Señal que representa algo",
    "fodder": "síntoma",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a SIGNO: «Señal que representa algo» y «síntoma»."
  },
  {
    "id": "d327",
    "difficulty": "dificil",
    "clue": "Entre mueble para dormir y lecho de un río, la palabra no cambia. (4)",
    "answer": "CAMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mueble para dormir",
    "fodder": "lecho de un río",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CAMA: «Mueble para dormir» y «lecho de un río»."
  },
  {
    "id": "d328",
    "difficulty": "dificil",
    "clue": "Entre aro que se lleva en un dedo y estructura circular, la palabra no cambia. (6)",
    "answer": "ANILLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Aro que se lleva en un dedo",
    "fodder": "estructura circular",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a ANILLO: «Aro que se lleva en un dedo» y «estructura circular»."
  },
  {
    "id": "d329",
    "difficulty": "dificil",
    "clue": "Entre desafío y objetivo difícil, la palabra no cambia. (4)",
    "answer": "RETO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Desafío",
    "fodder": "objetivo difícil",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a RETO: «Desafío» y «objetivo difícil»."
  },
  {
    "id": "d330",
    "difficulty": "dificil",
    "clue": "Sirve para construcción elevada y también para pieza del ajedrez. (5)",
    "answer": "TORRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Construcción elevada",
    "fodder": "pieza del ajedrez",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a TORRE: «Construcción elevada» y «pieza del ajedrez»."
  },
  {
    "id": "d331",
    "difficulty": "dificil",
    "clue": "Entre espacio de entrada de un edificio y patio interior, la palabra no cambia. (5)",
    "answer": "ATRIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio de entrada de un edificio",
    "fodder": "patio interior",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a ATRIO: «Espacio de entrada de un edificio» y «patio interior»."
  },
  {
    "id": "d332",
    "difficulty": "dificil",
    "clue": "Líquido que queda cuando la aguja pierde su última pieza. (4)",
    "answer": "AGUA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Líquido",
    "fodder": "aguja",
    "indicators": [
      "pierde su última pieza"
    ],
    "explanation": "AGUA se obtiene de aguja al retirar la letra indicada por la pista."
  },
  {
    "id": "d333",
    "difficulty": "dificil",
    "clue": "Porción de un todo que queda cuando partes pierde una pieza. (5)",
    "answer": "PARTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Porción de un todo",
    "fodder": "partes",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "PARTE se obtiene de partes al retirar la letra indicada por la pista."
  },
  {
    "id": "d334",
    "difficulty": "dificil",
    "clue": "Sirve para pieza metálica para fijar y también para espina o dolor persistente. (5)",
    "answer": "CLAVO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza metálica para fijar",
    "fodder": "espina o dolor persistente",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a CLAVO: «Pieza metálica para fijar» y «espina o dolor persistente»."
  },
  {
    "id": "d335",
    "difficulty": "dificil",
    "clue": "Entre herramienta para golpear y hueso del oído, la palabra no cambia. (8)",
    "answer": "MARTILLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Herramienta para golpear",
    "fodder": "hueso del oído",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MARTILLO: «Herramienta para golpear» y «hueso del oído»."
  },
  {
    "id": "d336",
    "difficulty": "dificil",
    "clue": "Extremidad de un animal que sale de tapa cuando todo queda revuelto. (4)",
    "answer": "PATA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Extremidad de un animal",
    "fodder": "tapa",
    "indicators": [
      "todo queda revuelto"
    ],
    "explanation": "Las letras de tapa se reordenan para formar PATA."
  },
  {
    "id": "d337",
    "difficulty": "dificil",
    "clue": "Que no es buena cuando el alma pierde el orden. (4)",
    "answer": "MALA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Que no es buena",
    "fodder": "alma",
    "indicators": [
      "pierde el orden"
    ],
    "explanation": "Las letras de alma se reordenan para formar MALA."
  },
  {
    "id": "d338",
    "difficulty": "dificil",
    "clue": "Sirve para objeto que atrae hierro y también para persona muy atractiva. (4)",
    "answer": "IMAN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que atrae hierro",
    "fodder": "persona muy atractiva",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a IMAN: «Objeto que atrae hierro» y «persona muy atractiva»."
  },
  {
    "id": "d339",
    "difficulty": "dificil",
    "clue": "Puede ser discusión de ideas o intercambio formal de argumentos. (6)",
    "answer": "DEBATE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Discusión de ideas",
    "fodder": "intercambio formal de argumentos",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a DEBATE: «Discusión de ideas» y «intercambio formal de argumentos»."
  },
  {
    "id": "d340",
    "difficulty": "dificil",
    "clue": "Extremidad inferior que queda cuando piel pierde una pieza. (3)",
    "answer": "PIE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Extremidad inferior",
    "fodder": "piel",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "PIE se obtiene de piel al retirar la letra indicada por la pista."
  },
  {
    "id": "d341",
    "difficulty": "dificil",
    "clue": "Entre vaso con pie y trofeo deportivo, la palabra no cambia. (4)",
    "answer": "COPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vaso con pie",
    "fodder": "trofeo deportivo",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a COPA: «Vaso con pie» y «trofeo deportivo»."
  },
  {
    "id": "d342",
    "difficulty": "dificil",
    "clue": "Entre movimiento hacia delante y progreso, la palabra no cambia. (6)",
    "answer": "AVANCE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Movimiento hacia delante",
    "fodder": "progreso",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a AVANCE: «Movimiento hacia delante» y «progreso»."
  },
  {
    "id": "d343",
    "difficulty": "dificil",
    "clue": "Representación mental que queda cuando ideas pierde una pieza. (4)",
    "answer": "IDEA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Representación mental",
    "fodder": "ideas",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "IDEA se obtiene de ideas al retirar la letra indicada por la pista."
  },
  {
    "id": "d344",
    "difficulty": "dificil",
    "clue": "Sirve para parte principal de un árbol y también para cuerpo humano sin extremidades. (6)",
    "answer": "TRONCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte principal de un árbol",
    "fodder": "cuerpo humano sin extremidades",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a TRONCO: «Parte principal de un árbol» y «cuerpo humano sin extremidades»."
  },
  {
    "id": "d345",
    "difficulty": "dificil",
    "clue": "Entre caminata y lugar para caminar, la palabra no cambia. (5)",
    "answer": "PASEO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Caminata",
    "fodder": "lugar para caminar",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a PASEO: «Caminata» y «lugar para caminar»."
  },
  {
    "id": "d346",
    "difficulty": "dificil",
    "clue": "Entre sensación producida por una temperatura alta y entusiasmo o intensidad, la palabra no cambia. (5)",
    "answer": "CALOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sensación producida por una temperatura alta",
    "fodder": "entusiasmo o intensidad",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a CALOR: «Sensación producida por una temperatura alta» y «entusiasmo o intensidad»."
  },
  {
    "id": "d347",
    "difficulty": "dificil",
    "clue": "Puede ser número de ejemplares impresos o acción de lanzar. (6)",
    "answer": "TIRADA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Número de ejemplares impresos",
    "fodder": "acción de lanzar",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a TIRADA: «Número de ejemplares impresos» y «acción de lanzar»."
  },
  {
    "id": "d348",
    "difficulty": "dificil",
    "clue": "Vivienda, si lo dices en voz alta. (4)",
    "answer": "CASA",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Vivienda",
    "fodder": "caza",
    "indicators": [
      "en voz alta"
    ],
    "explanation": "CASA suena como «caza»; la definición es «Vivienda»."
  },
  {
    "id": "d349",
    "difficulty": "dificil",
    "clue": "Sirve para punto de conexión y también para punto de una red. (4)",
    "answer": "NODO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Punto de conexión",
    "fodder": "punto de una red",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a NODO: «Punto de conexión» y «punto de una red»."
  },
  {
    "id": "d350",
    "difficulty": "dificil",
    "clue": "Entre estructura para embarcaciones y pieza elástica, la palabra no cambia. (6)",
    "answer": "MUELLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Estructura para embarcaciones",
    "fodder": "pieza elástica",
    "indicators": [
      "o"
    ],
    "explanation": "Las dos definiciones apuntan a MUELLE: «Estructura para embarcaciones» y «pieza elástica»."
  },
  {
    "id": "d351",
    "difficulty": "dificil",
    "clue": "Objeto que arde con una mecha que queda cuando vuela pierde una pieza. (4)",
    "answer": "VELA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Objeto que arde con una mecha",
    "fodder": "vuela",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "VELA se obtiene de vuela al retirar la letra indicada por la pista."
  },
  {
    "id": "d352",
    "difficulty": "dificil",
    "clue": "Animal capturado; basta con desordenar peras. (5)",
    "answer": "PRESA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Animal capturado",
    "fodder": "peras",
    "indicators": [
      "desordenar"
    ],
    "explanation": "Las letras de peras se reordenan para formar PRESA."
  },
  {
    "id": "d353",
    "difficulty": "dificil",
    "clue": "Sirve para de sabor azucarado y también para persona amable. (5)",
    "answer": "DULCE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "De sabor azucarado",
    "fodder": "persona amable",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a DULCE: «De sabor azucarado» y «persona amable»."
  },
  {
    "id": "d354",
    "difficulty": "dificil",
    "clue": "Sirve para flor y también para color entre rojo y blanco. (4)",
    "answer": "ROSA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Flor",
    "fodder": "color entre rojo y blanco",
    "indicators": [
      "y también"
    ],
    "explanation": "Las dos definiciones apuntan a ROSA: «Flor» y «color entre rojo y blanco»."
  },
  {
    "id": "d355",
    "difficulty": "dificil",
    "clue": "Curva entre dos puntos que queda cuando barco pierde una pieza. (4)",
    "answer": "ARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Curva entre dos puntos",
    "fodder": "barco",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "ARCO se obtiene de barco al retirar la letra indicada por la pista."
  },
  {
    "id": "d356",
    "difficulty": "dificil",
    "clue": "Elemento que forma parte de un conjunto que queda cuando piezas pierde una pieza. (5)",
    "answer": "PIEZA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Elemento que forma parte de un conjunto",
    "fodder": "piezas",
    "indicators": [
      "pierde una pieza"
    ],
    "explanation": "PIEZA se obtiene de piezas al retirar la letra indicada por la pista."
  }
];
