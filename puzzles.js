// Banco interno de indicadores de anagrama. Se usa al construir/revisar nuevos puzzles.
// No se muestra durante el juego.
const MECHANISM_INDICATORS = {
  anagram: {
    medio: ["revuelto", "mezclado", "desordenado", "alterado", "barajado", "reordenado"],
    medioDificil: ["trastocado", "alborotado", "enredado", "confundido", "disperso", "descolocado", "cruzado"],
    dificil: ["perdido", "suelto", "fuera de lugar", "sin orden", "de cualquier manera", "patas arriba", "deshecho", "sin concierto"]
  },
  hidden: {
    medio: ["oculto", "escondido", "dentro de", "entre", "en"],
    medioDificil: ["guardado en", "encerrado en", "metido en", "alojado en", "escondido entre"],
    dificil: ["perdido entre", "agazapado en", "disimulado en", "camuflado entre", "infiltrado en"]
  },
  deletion: {
    medio: ["sin", "quitando", "sin la", "pierde", "elimina"],
    medioDificil: ["dejando fuera", "al perder", "despojado de", "privado de", "sin su"],
    dificil: ["desnudo de", "al caer", "tras perder", "con menos", "desprovisto de"]
  },
  reversal: {
    medio: ["al revés", "de vuelta", "invertido", "retornado", "dado vuelta"],
    medioDificil: ["volviendo", "regresando", "en retorno", "hacia atrás", "girado"],
    dificil: ["reflejado", "en sentido contrario", "de regreso", "que vuelve", "mirando atrás"]
  },
  charade: {
    medio: ["con", "más", "junto a", "seguido de", "tras"],
    medioDificil: ["pegado a", "al lado de", "después de", "acompañado por", "sumado a"],
    dificil: ["encadenado con", "a continuación de", "uniéndose a", "precedido por", "rematado con"]
  },
  homophone: {
    medio: ["de oído", "al sonar", "que suena como", "según se oye", "sonando"],
    medioDificil: ["dicho en voz alta", "al escucharlo", "por cómo suena", "oído así", "de palabra"],
    dificil: ["para el oído", "si se pronuncia", "en boca de alguien", "como se escucha", "fonéticamente"]
  },
  initials: {
    medio: ["al principio", "iniciales", "primeras", "comienzos", "cabezas"],
    medioDificil: ["al empezar", "de entrada", "por sus comienzos", "primeras letras", "al inicio"],
    dificil: ["abreviando desde el comienzo", "tomando sus arranques", "por lo primero", "en sus comienzos", "de entrada" ]
  },
  finals: {
    medio: ["al final", "finales", "últimas", "terminaciones", "colas"],
    medioDificil: ["por sus finales", "al terminar", "de salida", "últimas letras", "por detrás"],
    dificil: ["tomando sus remates", "por lo último", "en sus terminaciones", "al cerrar", "de salida"]
  },
  container: {
    medio: ["dentro de", "rodeando", "abrazando", "contiene", "encierra"],
    medioDificil: ["envolviendo", "guardando", "abarcando", "metiendo en", "enmarcando"],
    dificil: ["dándole cobijo a", "cerrando sobre", "abrazando por ambos lados", "englobando", "encajando en"]
  }
};

// Alias de compatibilidad con cualquier código que ya use el banco de anagramas.
const ANAGRAM_INDICATORS = MECHANISM_INDICATORS.anagram;

const PUZZLES = [
  {
    "id": "d001",
    "difficulty": "difícil",
    "clue": "Carga de cuatro ruedas que nació de una cartera puesta patas arriba. (7)",
    "answer": "CARRETA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Vehículo de carga",
    "fodder": "cartera",
    "indicators": ["patas arriba"],
    "explanation": "«Carga de cuatro ruedas» define CARRETA. CARTERA, puesta «patas arriba», se reordena exactamente como CARRETA."
  },
  {
    "id": "d002",
    "difficulty": "difícil",
    "clue": "Dar rumbo al norte: una tronera, fuera de sitio, lo permite. (7)",
    "answer": "NORTEAR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Orientar hacia el norte",
    "fodder": "tronera",
    "indicators": ["fuera de sitio"],
    "explanation": "«Dar rumbo al norte» define NORTEAR. TRONERA, fuera de sitio, se reordena como NORTEAR."
  },
  {
    "id": "d003",
    "difficulty": "difícil",
    "clue": "Cesión que aparece al dejar negarte sin concierto. (7)",
    "answer": "ENTREGA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Entrega",
    "fodder": "negarte",
    "indicators": ["sin concierto"],
    "explanation": "«Cesión» define ENTREGA. NEGARTE, sin concierto, produce ENTREGA."
  },
  {
    "id": "d004",
    "difficulty": "difícil",
    "clue": "Salvamento que surge cuando creaste queda deshecho. (7)",
    "answer": "RESCATE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Salvamento",
    "fodder": "creaste",
    "indicators": ["deshecho"],
    "explanation": "«Salvamento» define RESCATE. CREASTE, deshecho, forma RESCATE."
  },
  {
    "id": "d005",
    "difficulty": "difícil",
    "clue": "Acceso entre niveles que unas aceleras descolocadas terminan construyendo. (8)",
    "answer": "ESCALERA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Se sube peldaño a peldaño",
    "fodder": "aceleras",
    "indicators": ["descolocadas"],
    "explanation": "«Acceso entre niveles» define ESCALERA. ACELERAS, descolocadas, da ESCALERA."
  },
  {
    "id": "d006",
    "difficulty": "difícil",
    "clue": "Modifica: alerta, cambiada de sitio, acaba diciendo otra cosa. (6)",
    "answer": "ALTERA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "modifica",
    "fodder": "alerta",
    "indicators": ["cambiada de sitio"],
    "explanation": "«Modifica» define ALTERA. ALERTA, cambiada de sitio, se reordena como ALTERA."
  },
  {
    "id": "d007",
    "difficulty": "difícil",
    "clue": "Quien crea o interpreta obras se coló, casi sin llamar la atención, en una frase sobre una llegada tardía. (7)",
    "answer": "ARTISTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Quien crea o interpreta obras",
    "fodder": "la artista llegó tarde",
    "indicators": ["se coló en"],
    "explanation": "«Quien crea o interpreta obras» define ARTISTA. La respuesta aparece consecutivamente en la frase «la artista llegó tarde»; el indicador señala una presencia oculta."
  },
  {
    "id": "d008",
    "difficulty": "difícil",
    "clue": "Acuerdo que quedó perdido en un retrato familiar. (5)",
    "answer": "TRATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Acuerdo",
    "fodder": "un retrato familiar",
    "indicators": ["perdido en"],
    "explanation": "«Acuerdo» define TRATO. TRATO aparece oculto dentro de «retrato»."
  },
  {
    "id": "d009",
    "difficulty": "difícil",
    "clue": "Lo que buscas al resolver una duda se deslizó, entero, entre las palabras de una frase. (9)",
    "answer": "RESPUESTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Lo que se cuenta para resolver una pregunta",
    "fodder": "la respuesta llegó",
    "indicators": ["se deslizó entre"],
    "explanation": "«Lo que buscas al resolver una duda» define RESPUESTA. RESPUESTA aparece consecutivamente en «respuesta llegó tarde»."
  },
  {
    "id": "d010",
    "difficulty": "difícil",
    "clue": "Trayecto: quedó incrustado, sin anunciarse, en una frase sobre una curva. (6)",
    "answer": "CAMINO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Trayecto",
    "fodder": "mi camino y la",
    "indicators": ["quedó incrustado en"],
    "explanation": "«Trayecto» define CAMINO. CAMINO aparece consecutivamente en «mi camino y la siguiente curva»."
  },
  {
    "id": "d011",
    "difficulty": "difícil",
    "clue": "Atleta de pista que queda cuando a la que corre se le cae el remate. (8)",
    "answer": "CORREDOR",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Atleta que corre",
    "fodder": "corredora",
    "indicators": ["se le cae el remate"],
    "explanation": "«Atleta de pista» define CORREDOR. CORREDORA, sin su última letra, queda CORREDOR."
  },
  {
    "id": "d012",
    "difficulty": "difícil",
    "clue": "Mueble con baldas: de los estantes se pierde la salida. (7)",
    "answer": "ESTANTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Mueble para guardar ropa",
    "fodder": "estantes",
    "indicators": ["se pierde la salida"],
    "explanation": "«Mueble con baldas» define ESTANTE. ESTANTES, sin su última letra, queda ESTANTE."
  },
  {
    "id": "d013",
    "difficulty": "difícil",
    "clue": "Libro de apuntes: a los cuadernos les falta la salida. (8)",
    "answer": "CUADERNO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Cuaderno de notas",
    "fodder": "cuadernos",
    "indicators": ["les falta la salida"],
    "explanation": "«Libro de apuntes» define CUADERNO. CUADERNOS, sin su última letra, queda CUADERNO."
  },
  {
    "id": "d014",
    "difficulty": "difícil",
    "clue": "Celebración a la que se llega cuando una forma plural pierde su remate. (6)",
    "answer": "FIESTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Celebración",
    "fodder": "fiestas",
    "indicators": ["pierde su remate"],
    "explanation": "«Celebración» define FIESTA. FIESTAS, sin su última letra, queda FIESTA."
  },
  {
    "id": "d015",
    "difficulty": "difícil",
    "clue": "Quien va de un lugar a otro, despojado de la cola de una forma plural. (7)",
    "answer": "VIAJERO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Quien viaja",
    "fodder": "viajeros",
    "indicators": ["despojado de la cola"],
    "explanation": "«Quien va de un lugar a otro» define VIAJERO. VIAJEROS, sin su última letra, produce VIAJERO."
  },
  {
    "id": "d016",
    "difficulty": "difícil",
    "clue": "Acuerdo escrito formado al encadenar dos piezas muy corrientes, sin que medie espacio. (8)",
    "answer": "CONTRATO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Acuerdo escrito",
    "fodder": "con + trato",
    "indicators": ["al encadenar"],
    "explanation": "«Acuerdo escrito» define CONTRATO. CON + TRATO, encadenados, forman CONTRATO."
  },
  {
    "id": "d017",
    "difficulty": "difícil",
    "clue": "Pasatiempo: una orden de pasar queda pegada a lo que mide las horas. (10)",
    "answer": "PASATIEMPO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Actividad para matar el tiempo",
    "fodder": "pasa + tiempo",
    "indicators": ["queda pegada a"],
    "explanation": "«Pasatiempo» define PASATIEMPO. PASA + TIEMPO forman PASATIEMPO."
  },
  {
    "id": "d018",
    "difficulty": "difícil",
    "clue": "Documento para cruzar una frontera, ensamblado con dos palabras corrientes. (9)",
    "answer": "PASAPORTE",
    "mechanisms": [
      "charade"
    ],
    "definition": "Documento que permite cruzar fronteras",
    "fodder": "pasa + porte",
    "indicators": ["ensamblado con"],
    "explanation": "«Documento para cruzar una frontera» define PASAPORTE. PASA + PORTE forman PASAPORTE."
  },
  {
    "id": "d019",
    "difficulty": "difícil",
    "clue": "Ciudad argentina que aparece cuando el atlas decide caminar en sentido contrario. (5)",
    "answer": "SALTA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Ciudad argentina",
    "fodder": "atlas",
    "indicators": ["en sentido contrario"],
    "explanation": "«Ciudad argentina» define SALTA. ATLAS, leído al revés, da SALTA."
  },
  {
    "id": "d020",
    "difficulty": "difícil",
    "clue": "Animal astuto que el arroz deja al volver sobre sus pasos. (5)",
    "answer": "ZORRA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Animal de fama astuta",
    "fodder": "arroz",
    "indicators": ["volver sobre sus pasos"],
    "explanation": "«Animal astuto» define ZORRA. ARROZ, al revés, da ZORRA."
  },
  {
    "id": "d021",
    "difficulty": "difícil",
    "clue": "Alzarse contra alguien, oído como descubrir un secreto. (7)",
    "answer": "REBELAR",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Sublevarse",
    "fodder": "revelar",
    "indicators": ["oído como"],
    "explanation": "«Alzarse contra alguien» define REBELAR. REVELAR («descubrir un secreto») suena igual que REBELAR."
  },
  {
    "id": "d022",
    "difficulty": "difícil",
    "clue": "Equivocación que para el oído no se distingue del metal de una mina. (5)",
    "answer": "YERRO",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Equivocarse",
    "fodder": "hierro",
    "indicators": ["para el oído"],
    "explanation": "«Equivocación» define YERRO. YERRO suena como HIERRO, el metal de una mina."
  },
  {
    "id": "d023",
    "difficulty": "difícil",
    "clue": "Una gobierna desde el mapa; otra puede crecer en una inversión. (7)",
    "answer": "CAPITAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ciudad, dinero o importancia",
    "fodder": "",
    "indicators": [],
    "explanation": "«Gobierna desde el mapa» apunta a CAPITAL como ciudad principal; «puede crecer en una inversión» apunta a CAPITAL como dinero invertido. Dos definiciones independientes convergen en CAPITAL."
  },
  {
    "id": "d024",
    "difficulty": "difícil",
    "clue": "Puede recorrer un cable, un río o una costumbre. (9)",
    "answer": "CORRIENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser eléctrica, de agua o habitual",
    "fodder": "",
    "indicators": [],
    "explanation": "CORRIENTE tiene tres lecturas independientes: eléctrica, de agua y habitual. La misma palabra satisface las tres definiciones."
  },
  {
    "id": "d025",
    "difficulty": "difícil",
    "clue": "Puede ocurrir en una hoja de cálculo o sobre una mesa de quirófano. (9)",
    "answer": "OPERACION",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser matemática o médica",
    "fodder": "",
    "indicators": [],
    "explanation": "OPERACION tiene dos definiciones independientes: operación matemática y operación médica."
  },
  {
    "id": "d026",
    "difficulty": "difícil",
    "clue": "Puede servir bajo una pieza o reunir nombres de un equipo. (9)",
    "answer": "PLANTILLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sirve para encajar una pieza y también para incluir a alguien en un equipo",
    "fodder": "",
    "indicators": [],
    "explanation": "PLANTILLA tiene dos sentidos: plantilla como modelo para encajar o marcar una pieza y plantilla como conjunto de personas de un equipo."
  },
  {
    "id": "d027",
    "difficulty": "difícil",
    "clue": "Puede ganarse en una pista o construirse durante toda una vida. (7)",
    "answer": "CARRERA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser una competencia o un oficio",
    "fodder": "",
    "indicators": [],
    "explanation": "CARRERA tiene dos definiciones: competición y trayectoria profesional."
  },
  {
    "id": "d028",
    "difficulty": "difícil",
    "clue": "Puede quedar guardada en un restaurante o en el armario de alguien. (7)",
    "answer": "RESERVA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Se reserva en un restaurante, pero también se guarda para después",
    "fodder": "",
    "indicators": [],
    "explanation": "RESERVA tiene dos sentidos: una reserva de mesa y algo guardado o apartado para después."
  },
  {
    "id": "d029",
    "difficulty": "difícil",
    "clue": "Puede llegar del banco, cuadrar al final del mes o ser simplemente una operación de contar. (6)",
    "answer": "CUENTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser una cuenta, una deuda o el acto de contar",
    "fodder": "",
    "indicators": [],
    "explanation": "CUENTA tiene varios sentidos independientes: cuenta bancaria o factura/deuda, y acción de contar."
  },
  {
    "id": "d030",
    "difficulty": "difícil",
    "clue": "La otra mitad de alguien también cabe, literalmente, en una fruta. (12)",
    "answer": "MEDIA NARANJA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pareja ideal, pero también mitad de una fruta",
    "fodder": "",
    "indicators": [],
    "explanation": "MEDIA NARANJA tiene dos lecturas: la pareja ideal de alguien y media naranja como mitad de la fruta."
  },
  {
    "id": "d031",
    "difficulty": "difícil",
    "clue": "Pequeño roedor que sobrevive a una palabra agradecida después de perder su cabeza. (4)",
    "answer": "RATA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Animal pequeño",
    "fodder": "grata",
    "indicators": ["perder su cabeza"],
    "explanation": "«Pequeño roedor» define RATA. GRATA, sin su primera letra, queda RATA."
  },
  {
    "id": "d032",
    "difficulty": "difícil",
    "clue": "Puede significar sin compañía o, con otra lectura, solamente. (4)",
    "answer": "SOLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sin compañía",
    "fodder": "",
    "indicators": [],
    "explanation": "SOLO tiene dos definiciones independientes: sin compañía y solamente."
  },
  {
    "id": "d033",
    "difficulty": "difícil",
    "clue": "Infusión de dos letras alojada en una palabra asociada a una tormenta. (2)",
    "answer": "TE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Una bebida caliente",
    "fodder": "tormenta",
    "indicators": ["alojada en"],
    "explanation": "«Infusión» define TE. TE aparece dentro de «tormenta»."
  },
  {
    "id": "d034",
    "difficulty": "difícil",
    "clue": "Felino de cuatro letras infiltrado en una orden aparentemente inocente. (4)",
    "answer": "GATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "El felino",
    "fodder": "paga todo",
    "indicators": ["infiltrado en"],
    "explanation": "«Felino» define GATO. GATO aparece dentro de «paga todo»."
  },
  {
    "id": "d035",
    "difficulty": "difícil",
    "clue": "Ciudad italiana que el amor deja al reflejarse. (4)",
    "answer": "ROMA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Ciudad italiana",
    "fodder": "amor",
    "indicators": ["al reflejarse"],
    "explanation": "«Ciudad italiana» define ROMA. AMOR, leído al revés, da ROMA."
  },
  {
    "id": "d036",
    "difficulty": "difícil",
    "clue": "Roedor que notar devuelve al mirar hacia atrás. (5)",
    "answer": "RATON",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Roedor",
    "fodder": "notar",
    "indicators": ["mirar hacia atrás"],
    "explanation": "«Roedor» define RATON. NOTAR, leído al revés, da RATON."
  },
  {
    "id": "d037",
    "difficulty": "difícil",
    "clue": "Infusión mínima escondida en el corazón de una legumbre vegetal. (2)",
    "answer": "TE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Bebida caliente",
    "fodder": "lenteja",
    "indicators": ["escondida en"],
    "explanation": "«Infusión» define TE. TE aparece dentro de «lenteja»."
  },
  {
    "id": "d038",
    "difficulty": "difícil",
    "clue": "Lugar de descanso que una maca perdió de sitio. (4)",
    "answer": "CAMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "El lugar donde se descansa",
    "fodder": "maca",
    "indicators": ["perdió de sitio"],
    "explanation": "«Lugar de descanso» define CAMA. MACA, desordenada, produce CAMA."
  },
  {
    "id": "d039",
    "difficulty": "difícil",
    "clue": "Lo último de una comida salió cuando presto quedó fuera de lugar. (6)",
    "answer": "POSTRE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "El final de una comida",
    "fodder": "presto",
    "indicators": ["fuera de lugar"],
    "explanation": "«Lo último de una comida» define POSTRE. PRESTO, fuera de lugar, se reordena como POSTRE."
  },
  {
    "id": "d040",
    "difficulty": "difícil",
    "clue": "Animal doméstico que una gota deja después de un pequeño trastorno. (4)",
    "answer": "GATO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "El animal doméstico",
    "fodder": "gota",
    "indicators": ["después de un pequeño trastorno"],
    "explanation": "«Animal doméstico» define GATO. GOTA, trastocada, forma GATO."
  },
  {
    "id": "d041",
    "difficulty": "difícil",
    "clue": "Metal precioso: basta con que a un loro se le caiga la cabeza. (3)",
    "answer": "ORO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Metal precioso",
    "fodder": "loro",
    "indicators": ["se le caiga la cabeza"],
    "explanation": "«Metal precioso» define ORO. LORO, sin su primera letra, queda ORO."
  },
  {
    "id": "d042",
    "difficulty": "difícil",
    "clue": "Cama de un recién nacido que resulta de dejar la nuca fuera de sitio. (4)",
    "answer": "CUNA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Un lugar para dormir",
    "fodder": "nuca",
    "indicators": ["fuera de sitio"],
    "explanation": "«Cama de un recién nacido» define CUNA. NUCA, fuera de sitio, se reordena como CUNA."
  },
  {
    "id": "d043",
    "difficulty": "difícil",
    "clue": "Fruta que una palabra áspera puede ocultar si pierde una de sus erres. (4)",
    "answer": "PERA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Una fruta",
    "fodder": "perra",
    "indicators": ["pierde una de sus erres"],
    "explanation": "«Fruta» define PERA. PERRA, al perder una R, queda PERA."
  },
  {
    "id": "d044",
    "difficulty": "difícil",
    "clue": "Felino que queda cuando el plural de su propio nombre pierde la cola. (4)",
    "answer": "GATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "El animal",
    "fodder": "gatos",
    "indicators": ["pierde la cola"],
    "explanation": "«Felino» define GATO. GATOS, sin su última letra, queda GATO."
  },
  {
    "id": "d045",
    "difficulty": "difícil",
    "clue": "Objeto de grafito que aparece disimulado al comienzo de una frase sobre una pizarra. (5)",
    "answer": "LAPIZ",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Objeto para escribir",
    "fodder": "la pizarra",
    "indicators": ["aparece disimulado"],
    "explanation": "«Objeto de grafito» define LAPIZ. LAPIZ aparece en «la pizarra»."
  },
  {
    "id": "d046",
    "difficulty": "difícil",
    "clue": "Felino de cuatro letras que se infiltró en una orden doméstica. (4)",
    "answer": "GATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "El felino",
    "fodder": "paga todo",
    "indicators": ["se infiltró en"],
    "explanation": "«Felino» define GATO. GATO aparece en «paga todo»."
  },
  {
    "id": "d047",
    "difficulty": "difícil",
    "clue": "Instrumento de cuerda que ocra devuelve al cambiar de sentido. (4)",
    "answer": "ARCO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Instrumento",
    "fodder": "ocra",
    "indicators": ["devuelve"],
    "explanation": "«Instrumento» define ARCO. OCRA, al revés, forma ARCO."
  },
  {
    "id": "d048",
    "difficulty": "difícil",
    "clue": "Prenda que queda cuando unas aves regresan sobre sus pasos. (4)",
    "answer": "SACO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Prenda",
    "fodder": "ocas",
    "indicators": ["regresan sobre sus pasos"],
    "explanation": "«Prenda» define SACO. OCAS, al revés, forma SACO."
  },
  {
    "id": "d049",
    "difficulty": "difícil",
    "clue": "Roedor que notar pierde el orden y, sin añadir nada, se transforma. (5)",
    "answer": "RATON",
    "mechanisms": [
      "anagram"
    ],
    "definition": "El roedor",
    "fodder": "notar",
    "indicators": ["pierde el orden"],
    "explanation": "«Roedor» define RATON. NOTAR, desordenado, forma RATON."
  },
  {
    "id": "d050",
    "difficulty": "difícil",
    "clue": "Herramienta para trabajar madera: el clima pierde su entrada. (4)",
    "answer": "LIMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Herramienta de carpintero",
    "fodder": "clima",
    "indicators": ["pierde su entrada"],
    "explanation": "«Herramienta para trabajar madera» define LIMA. CLIMA, sin su primera letra, queda LIMA."
  },
  {
    "id": "d051",
    "difficulty": "difícil",
    "clue": "Puede dejarte pasar una puerta o una pelota por encima de una línea. (4)",
    "answer": "PASE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser un permiso",
    "fodder": "",
    "indicators": [],
    "explanation": "PASE tiene dos definiciones independientes: permiso para pasar y acción/jugada de pasar una pelota."
  },
  {
    "id": "d052",
    "difficulty": "difícil",
    "clue": "Puede mirar desde una pared o pertenecer a una persona. (4)",
    "answer": "CARA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser la de una pared",
    "fodder": "",
    "indicators": [],
    "explanation": "CARA tiene dos definiciones independientes: superficie de una pared y rostro de una persona."
  },
  {
    "id": "d053",
    "difficulty": "difícil",
    "clue": "Puede aparecer en una manga o tenderse para ayudar. (4)",
    "answer": "MANO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser parte del cuerpo",
    "fodder": "",
    "indicators": [],
    "explanation": "MANO tiene dos sentidos: parte del cuerpo y ayuda ofrecida a alguien."
  },
  {
    "id": "d054",
    "difficulty": "difícil",
    "clue": "Puede llevarla un rey o dibujarla un volcán nevado. (6)",
    "answer": "CORONA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lo lleva el rey",
    "fodder": "",
    "indicators": [],
    "explanation": "CORONA tiene dos definiciones: ornamento de un rey y corona como formación o cumbre que rodea la parte alta de una montaña/volcán."
  },
  {
    "id": "d055",
    "difficulty": "difícil",
    "clue": "Metal precioso que queda cuando un loro se queda sin cabeza. (3)",
    "answer": "ORO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "El metal",
    "fodder": "loro",
    "indicators": ["se queda sin cabeza"],
    "explanation": "«Metal precioso» define ORO. LORO, sin su primera letra, queda ORO."
  },
  {
    "id": "d056",
    "difficulty": "difícil",
    "clue": "Prenda de cuatro letras que unas ocas dejan al regresar. (4)",
    "answer": "SACO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Prenda",
    "fodder": "ocas",
    "indicators": ["al regresar"],
    "explanation": "«Prenda» define SACO. OCAS, al revés, forma SACO."
  },
  {
    "id": "d057",
    "difficulty": "difícil",
    "clue": "Fruta que una palabra áspera entrega al perder una de sus erres. (4)",
    "answer": "PERA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "El fruto",
    "fodder": "perra",
    "indicators": ["al perder una de sus erres"],
    "explanation": "«Fruta» define PERA. PERRA, sin una R, queda PERA."
  },
  {
    "id": "d058",
    "difficulty": "difícil",
    "clue": "Lugar de descanso que quedó camuflado en una llegada tardía. (4)",
    "answer": "CAMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "El lugar de descanso",
    "fodder": "la camarera",
    "indicators": ["quedó camuflado en"],
    "explanation": "«Lugar de descanso» define CAMA. CAMA aparece consecutivamente dentro de «la camarera»."
  },
  {
    "id": "d059",
    "difficulty": "difícil",
    "clue": "Arma curva que el barco puede dejar si pierde su cabeza. (4)",
    "answer": "ARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "La herramienta",
    "fodder": "barco",
    "indicators": ["puede dejar si pierde su cabeza"],
    "explanation": "«Arma curva» define ARCO. BARCO, sin su primera letra, queda ARCO."
  },
  {
    "id": "d060",
    "difficulty": "difícil",
    "clue": "Afirmación breve que, al pronunciarla, comparte sonido con una nota musical. (2)",
    "answer": "SI",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Una afirmación",
    "fodder": "sí",
    "indicators": ["al pronunciarla"],
    "explanation": "«Afirmación» define SÍ. La palabra SI, nota musical, comparte la pronunciación."
  }
];
