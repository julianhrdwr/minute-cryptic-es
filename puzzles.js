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
    "difficulty": "medio+",
    "clue": "Vehículo de carga que salió de una cartera mezclada. (7)",
    "answer": "CARRETA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Vehículo de carga",
    "fodder": "cartera",
    "indicators": [
      "mezclada"
    ],
    "explanation": "«Vehículo de carga» define CARRETA. CARTERA, al estar «revuelta», se reordena exactamente como CARRETA."
  },
  {
    "id": "d002",
    "difficulty": "medio+",
    "clue": "Orientar hacia el norte, con la tronera alterada. (7)",
    "answer": "NORTEAR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Orientar hacia el norte",
    "fodder": "tronera",
    "indicators": [
      "alterada"
    ],
    "explanation": "«Orientar hacia el norte» define NORTEAR. TRONERA revuelta produce NORTEAR."
  },
  {
    "id": "d003",
    "difficulty": "difícil",
    "clue": "Entrega lo que sale de negarte al desordenarse. (7)",
    "answer": "ENTREGA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Entrega",
    "fodder": "negarte",
    "indicators": [
      "al desordenarse"
    ],
    "explanation": "«Entrega» es la definición. NEGARTE reordenado da ENTREGA, usando las siete letras exactamente una vez."
  },
  {
    "id": "d004",
    "difficulty": "difícil",
    "clue": "Salvamento que aparece cuando creaste pierde su orden. (7)",
    "answer": "RESCATE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Salvamento",
    "fodder": "creaste",
    "indicators": [
      "pierde su orden"
    ],
    "explanation": "«Salvamento» define RESCATE. CREASTE desordenado forma RESCATE."
  },
  {
    "id": "d005",
    "difficulty": "difícil",
    "clue": "Se sube peldaño a peldaño: nació de aceleras trastocadas. (8)",
    "answer": "ESCALERA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Se sube peldaño a peldaño",
    "fodder": "aceleras",
    "indicators": [
      "trastocadas"
    ],
    "explanation": "«Se sube peldaño a peldaño» define ESCALERA. ACELERAS revuelto produce ESCALERA."
  },
  {
    "id": "d006",
    "difficulty": "medio+",
    "clue": "Cambia de forma una alerta y termina significando modifica. (6)",
    "answer": "ALTERA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "modifica",
    "fodder": "alerta",
    "indicators": [
      "cambia de forma"
    ],
    "explanation": "«Modifica» define ALTERA. ALERTA cambiada de forma se reordena como ALTERA."
  },
  {
    "id": "d007",
    "difficulty": "difícil",
    "clue": "Quien crea o interpreta obras quedó perdido en la artista llegó tarde. (7)",
    "answer": "ARTISTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Quien crea o interpreta obras",
    "fodder": "la artista llegó tarde",
    "indicators": [
      "quedó perdido en"
    ],
    "explanation": "«Quien crea o interpreta obras» define ARTISTA. La palabra aparece oculta consecutivamente en «la ARTISTA llegó tarde»."
  },
  {
    "id": "d008",
    "difficulty": "difícil",
    "clue": "Un edificio de peldaños quedó escondido a plena vista: la escalera cruje. (8)",
    "answer": "ESCALERA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Un edificio de peldaños",
    "fodder": "la escalera cruje",
    "indicators": [
      "quedó escondido"
    ],
    "explanation": "«ESCALERA» aparece consecutivamente en «la escalera cruje». La definición es el lugar por el que se sube y baja entre niveles."
  },
  {
    "id": "d009",
    "difficulty": "difícil",
    "clue": "Lo que se cuenta para resolver una pregunta está oculto en la respuesta llegó. (9)",
    "answer": "RESPUESTA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Lo que se cuenta para resolver una pregunta",
    "fodder": "la respuesta llegó",
    "indicators": [
      "está oculto en"
    ],
    "explanation": "RESPUESTA aparece consecutivamente en «la RESPUESTA llegó». La definición es aquello que resuelve una pregunta."
  },
  {
    "id": "d010",
    "difficulty": "difícil",
    "clue": "Trayecto que aparece entre mi camino y la siguiente curva. (6)",
    "answer": "CAMINO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Trayecto",
    "fodder": "mi camino y la",
    "indicators": [
      "aparece entre"
    ],
    "explanation": "CAMINO está oculto consecutivamente en «mi CAMINO y la». «Trayecto» es la definición."
  },
  {
    "id": "d011",
    "difficulty": "difícil",
    "clue": "Atleta que corre, si una corredora pierde su final. (8)",
    "answer": "CORREDOR",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Atleta que corre",
    "fodder": "corredora",
    "indicators": [
      "pierde su final"
    ],
    "explanation": "«Atleta que corre» define CORREDOR. CORREDORA sin su última letra, A, queda CORREDOR."
  },
  {
    "id": "d012",
    "difficulty": "difícil",
    "clue": "Mueble para guardar ropa, cuando los estantes pierden su final. (7)",
    "answer": "ESTANTE",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Mueble para guardar ropa",
    "fodder": "estantes",
    "indicators": [
      "pierden su final"
    ],
    "explanation": "«Mueble para guardar ropa» define ESTANTE. ESTANTES sin la última letra, S, produce ESTANTE."
  },
  {
    "id": "d013",
    "difficulty": "difícil",
    "clue": "Cuaderno de notas que queda cuando los cuadernos pierden el final. (8)",
    "answer": "CUADERNO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Cuaderno de notas",
    "fodder": "cuadernos",
    "indicators": [
      "pierden el final"
    ],
    "explanation": "«Cuaderno de notas» define CUADERNO. CUADERNOS sin su última letra, S, produce CUADERNO."
  },
  {
    "id": "d014",
    "difficulty": "medio+",
    "clue": "Celebración que queda cuando las fiestas pierden su última letra. (6)",
    "answer": "FIESTA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Celebración",
    "fodder": "fiestas",
    "indicators": [
      "pierden su última letra"
    ],
    "explanation": "«Celebración» define FIESTA. FIESTAS sin la S final da FIESTA."
  },
  {
    "id": "d015",
    "difficulty": "difícil",
    "clue": "Quien viaja queda solo cuando los viajeros pierden su final. (7)",
    "answer": "VIAJERO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Quien viaja",
    "fodder": "viajeros",
    "indicators": [
      "pierden su final"
    ],
    "explanation": "«Quien viaja» define VIAJERO. VIAJEROS sin la S final produce VIAJERO."
  },
  {
    "id": "d016",
    "difficulty": "difícil",
    "clue": "Acuerdo escrito: con junto a un trato, sin dejar espacio. (8)",
    "answer": "CONTRATO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Acuerdo escrito",
    "fodder": "con + trato",
    "indicators": [
      "junto a"
    ],
    "explanation": "«Acuerdo escrito» define CONTRATO. Se unen literalmente CON y TRATO: CON + TRATO = CONTRATO."
  },
  {
    "id": "d017",
    "difficulty": "difícil",
    "clue": "Actividad para matar el tiempo: pasa con tiempo, sin pausa. (10)",
    "answer": "PASATIEMPO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Actividad para matar el tiempo",
    "fodder": "pasa + tiempo",
    "indicators": [
      "con"
    ],
    "explanation": "«Actividad para matar el tiempo» define PASATIEMPO. PASA unido a TIEMPO forma PASATIEMPO."
  },
  {
    "id": "d018",
    "difficulty": "difícil",
    "clue": "Documento que permite cruzar fronteras: pasa más porte. (9)",
    "answer": "PASAPORTE",
    "mechanisms": [
      "charade"
    ],
    "definition": "Documento que permite cruzar fronteras",
    "fodder": "pasa + porte",
    "indicators": [
      "más"
    ],
    "explanation": "«Documento que permite cruzar fronteras» define PASAPORTE. PASA + PORTE produce PASAPORTE."
  },
  {
    "id": "d019",
    "difficulty": "difícil",
    "clue": "Ciudad argentina que vuelve cuando el atlas mira hacia atrás. (5)",
    "answer": "SALTA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Ciudad argentina",
    "fodder": "atlas",
    "indicators": [
      "mira hacia atrás"
    ],
    "explanation": "«Ciudad argentina» define SALTA. ATLAS leído al revés produce SALTA."
  },
  {
    "id": "d020",
    "difficulty": "difícil",
    "clue": "Animal de fama astuta que aparece si el arroz vuelve sobre sus pasos. (5)",
    "answer": "ZORRA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Animal de fama astuta",
    "fodder": "arroz",
    "indicators": [
      "vuelve sobre sus pasos"
    ],
    "explanation": "«Animal de fama astuta» define ZORRA. ARROZ invertido da ZORRA."
  },
  {
    "id": "d021",
    "difficulty": "difícil",
    "clue": "Sublevarse suena igual que descubrir algo, aunque se escriba distinto. (7)",
    "answer": "REBELAR",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Sublevarse",
    "fodder": "revelar",
    "indicators": [
      "suena igual"
    ],
    "explanation": "«Sublevarse» define REBELAR. REBELAR es homófono de REVELAR en la pronunciación habitual del español rioplatense."
  },
  {
    "id": "d022",
    "difficulty": "difícil",
    "clue": "Equivocarse suena como el metal que se obtiene de una mina. (5)",
    "answer": "YERRO",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Equivocarse",
    "fodder": "hierro",
    "indicators": [
      "suena como"
    ],
    "explanation": "«Equivocarse» se expresa con YERRO. YERRO suena como HIERRO, el metal."
  },
  {
    "id": "d023",
    "difficulty": "difícil",
    "clue": "Ciudad, dinero o importancia: todo puede ser CAPITAL. (7)",
    "answer": "CAPITAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ciudad, dinero o importancia",
    "fodder": "",
    "indicators": [],
    "explanation": "CAPITAL tiene varios sentidos: una ciudad principal, un patrimonio o cantidad de dinero, y aquello que tiene máxima importancia."
  },
  {
    "id": "d024",
    "difficulty": "difícil",
    "clue": "Puede ser eléctrica, de agua o simplemente habitual. (9)",
    "answer": "CORRIENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser eléctrica, de agua o habitual",
    "fodder": "",
    "indicators": [],
    "explanation": "CORRIENTE puede ser un flujo eléctrico o de agua, y también significa común, habitual o normal."
  },
  {
    "id": "d025",
    "difficulty": "difícil",
    "clue": "Puede ser una operación matemática o una intervención médica. (9)",
    "answer": "OPERACION",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser matemática o médica",
    "fodder": "",
    "indicators": [],
    "explanation": "OPERACIÓN designa tanto un procedimiento de cálculo como una intervención quirúrgica."
  },
  {
    "id": "d026",
    "difficulty": "difícil",
    "clue": "Sirve para encajar una pieza y también para incluir a alguien en un equipo. (9)",
    "answer": "PLANTILLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sirve para encajar una pieza y también para incluir a alguien en un equipo",
    "fodder": "",
    "indicators": [],
    "explanation": "PLANTILLA puede ser un patrón o molde que sirve de guía, y también el conjunto de personas que integran una organización o equipo."
  },
  {
    "id": "d027",
    "difficulty": "difícil",
    "clue": "Puede ser una competencia o el oficio que alguien ejerce durante años. (7)",
    "answer": "CARRERA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser una competencia o un oficio",
    "fodder": "",
    "indicators": [],
    "explanation": "CARRERA puede ser una competición o recorrido a pie, y también la trayectoria profesional o los estudios de una persona."
  },
  {
    "id": "d028",
    "difficulty": "difícil",
    "clue": "Se reserva en un restaurante, pero también se guarda para después. (7)",
    "answer": "RESERVA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Se reserva en un restaurante, pero también se guarda para después",
    "fodder": "",
    "indicators": [],
    "explanation": "RESERVA puede ser una cantidad o recurso guardado para el futuro y también la acción de apartar una mesa, habitación u otro servicio."
  },
  {
    "id": "d029",
    "difficulty": "difícil",
    "clue": "Puede ser una cuenta, una deuda o el acto de contar. (6)",
    "answer": "CUENTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser una cuenta, una deuda o el acto de contar",
    "fodder": "",
    "indicators": [],
    "explanation": "CUENTA puede ser una factura o deuda, una cuenta bancaria y también la forma verbal de contar: «él cuenta»."
  },
  {
    "id": "d030",
    "difficulty": "difícil",
    "clue": "Pareja ideal, pero también mitad de una fruta. (12)",
    "answer": "MEDIA NARANJA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pareja ideal, pero también mitad de una fruta",
    "fodder": "",
    "indicators": [],
    "explanation": "MEDIA NARANJA tiene un sentido figurado: la pareja ideal o persona considerada complementaria; literalmente, es la mitad de una naranja."
  },
  {
    "id": "d031",
    "difficulty": "difícil",
    "clue": "Animal pequeño que aparece cuando grata pierde el principio. (4)",
    "answer": "RATA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Animal pequeño",
    "fodder": "grata",
    "indicators": [
      "pierde el principio"
    ],
    "explanation": "GRATA sin su primera letra, G, produce RATA. «Animal pequeño» define RATA."
  },
  {
    "id": "d032",
    "difficulty": "difícil",
    "clue": "Sin compañía o solamente. (4)",
    "answer": "SOLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sin compañía",
    "fodder": "",
    "indicators": [],
    "explanation": "SOLO significa «sin compañía» y también «solamente». Es una doble definición."
  },
  {
    "id": "d033",
    "difficulty": "difícil",
    "clue": "Una bebida caliente se esconde entre los restos de la tormenta. (2)",
    "answer": "TE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Una bebida caliente",
    "fodder": "tormenta",
    "indicators": [
      "se esconde entre"
    ],
    "explanation": "TE aparece consecutivamente en «tormenta»: TORMEN**TE**. «Una bebida caliente» es la definición."
  },
  {
    "id": "d034",
    "difficulty": "difícil",
    "clue": "El felino quedó oculto en una orden sencilla: paga todo. (4)",
    "answer": "GATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "El felino",
    "fodder": "paga todo",
    "indicators": [
      "quedó oculto en"
    ],
    "explanation": "GATO aparece consecutivamente en «paga todo»: PA**GATO**DO. «El felino» es la definición."
  },
  {
    "id": "d035",
    "difficulty": "difícil",
    "clue": "Ciudad italiana que aparece cuando el amor da la vuelta. (4)",
    "answer": "ROMA",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Ciudad italiana",
    "fodder": "amor",
    "indicators": [
      "da la vuelta"
    ],
    "explanation": "AMOR leído al revés produce ROMA. «Ciudad italiana» define ROMA."
  },
  {
    "id": "d036",
    "difficulty": "difícil",
    "clue": "Roedor que aparece cuando notar vuelve sobre sus pasos. (5)",
    "answer": "RATON",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Roedor",
    "fodder": "notar",
    "indicators": [
      "vuelve sobre sus pasos"
    ],
    "explanation": "NOTAR leído al revés produce RATON, es decir, RATÓN. «Roedor» define la respuesta."
  },
  {
    "id": "d037",
    "difficulty": "difícil",
    "clue": "Bebida caliente escondida dentro de una lenteja. (2)",
    "answer": "TE",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Bebida caliente",
    "fodder": "lenteja",
    "indicators": [
      "escondida dentro de"
    ],
    "explanation": "TE aparece en lenTEja. «Bebida caliente» define TE."
  },
  {
    "id": "d038",
    "difficulty": "difícil",
    "clue": "El lugar donde se descansa nació de una tarea mezclada. (4)",
    "answer": "CAMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "El lugar donde se descansa",
    "fodder": "maca",
    "indicators": [
      "mezclada"
    ],
    "explanation": "MACA alterada produce CAMA. «El lugar donde se descansa» define CAMA."
  },
  {
    "id": "d039",
    "difficulty": "difícil",
    "clue": "El final de una comida nació cuando presto quedó trastocado. (6)",
    "answer": "POSTRE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "El final de una comida",
    "fodder": "presto",
    "indicators": [
      "trastocado"
    ],
    "explanation": "PRESTO reordenado produce POSTRE. «El final de una comida» define POSTRE."
  },
  {
    "id": "d040",
    "difficulty": "difícil",
    "clue": "El animal doméstico nació de una gota mezclada. (4)",
    "answer": "GATO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "El animal doméstico",
    "fodder": "gota",
    "indicators": [
      "mezclada"
    ],
    "explanation": "GOTA alterada produce GATO. «El animal doméstico» define GATO."
  },
  {
    "id": "d041",
    "difficulty": "difícil",
    "clue": "Metal precioso que aparece cuando un loro pierde la cabeza. (3)",
    "answer": "ORO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Metal precioso",
    "fodder": "loro",
    "indicators": [
      "pierde la cabeza"
    ],
    "explanation": "LORO sin su primera letra, L, produce ORO. «Metal precioso» define ORO."
  },
  {
    "id": "d042",
    "difficulty": "difícil",
    "clue": "Un lugar para dormir nació de una nuca reordenada. (4)",
    "answer": "CUNA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Un lugar para dormir",
    "fodder": "nuca",
    "indicators": [
      "reordenada"
    ],
    "explanation": "NUCA alterada produce CUNA. «Un lugar para dormir» define CUNA."
  },
  {
    "id": "d043",
    "difficulty": "difícil",
    "clue": "El vehículo perdió una letra y acabó convertido en una fruta. (4)",
    "answer": "PERA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Una fruta",
    "fodder": "perra",
    "indicators": [
      "perdió una letra"
    ],
    "explanation": "PERRA pierde una R y produce PERA. «Una fruta» define PERA."
  },
  {
    "id": "d044",
    "difficulty": "difícil",
    "clue": "El animal salió cuando gatos perdió su final. (4)",
    "answer": "GATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "El animal",
    "fodder": "gatos",
    "indicators": [
      "perdió su final"
    ],
    "explanation": "GATOS sin su última letra, S, produce GATO. «El animal» define GATO."
  },
  {
    "id": "d045",
    "difficulty": "difícil",
    "clue": "Objeto para escribir, oculto cuando apareció la pizarra. (5)",
    "answer": "LAPIZ",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Objeto para escribir",
    "fodder": "la pizarra",
    "indicators": [
      "oculto cuando"
    ],
    "explanation": "LAPIZ aparece consecutivamente en «la pizarra». «Objeto para escribir» define LAPIZ."
  },
  {
    "id": "d046",
    "difficulty": "difícil",
    "clue": "El felino quedó oculto en una orden: paga todo. (4)",
    "answer": "GATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "El felino",
    "fodder": "paga todo",
    "indicators": [
      "quedó oculto en"
    ],
    "explanation": "GATO aparece consecutivamente en «paga todo»: PA**GATO**DO. «El felino» define GATO."
  },
  {
    "id": "d047",
    "difficulty": "difícil",
    "clue": "Instrumento que aparece al volver ocra del revés. (4)",
    "answer": "ARCO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Instrumento",
    "fodder": "ocra",
    "indicators": [
      "volver del revés"
    ],
    "explanation": "OCRA leído al revés produce ARCO. «Instrumento» define ARCO."
  },
  {
    "id": "d048",
    "difficulty": "difícil",
    "clue": "Prenda que aparece cuando unas ocas vuelven del revés. (4)",
    "answer": "SACO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Prenda",
    "fodder": "ocas",
    "indicators": [
      "vuelven del revés"
    ],
    "explanation": "OCAS leído al revés produce SACO. «Prenda» define SACO."
  },
  {
    "id": "d049",
    "difficulty": "difícil",
    "clue": "El roedor cambió de aspecto cuando notar quedó desordenado. (5)",
    "answer": "RATON",
    "mechanisms": [
      "anagram"
    ],
    "definition": "El roedor",
    "fodder": "notar",
    "indicators": [
      "quedó desordenado"
    ],
    "explanation": "NOTAR desordenado produce RATON, es decir, RATÓN. «El roedor» define la respuesta."
  },
  {
    "id": "d050",
    "difficulty": "difícil",
    "clue": "Herramienta de carpintero que nace cuando el clima pierde el principio. (4)",
    "answer": "LIMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Herramienta de carpintero",
    "fodder": "clima",
    "indicators": [
      "pierde el principio"
    ],
    "explanation": "CLIMA sin su primera letra, C, produce LIMA. «Herramienta de carpintero» define LIMA."
  },
  {
    "id": "d051",
    "difficulty": "difícil",
    "clue": "Puede ser un permiso o una jugada. (4)",
    "answer": "PASE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser un permiso",
    "fodder": "",
    "indicators": [],
    "explanation": "PASE puede ser un permiso y también una jugada, como en un pase de pelota."
  },
  {
    "id": "d052",
    "difficulty": "difícil",
    "clue": "Puede ser la de una pared o la de una persona. (4)",
    "answer": "CARA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser la de una pared",
    "fodder": "",
    "indicators": [],
    "explanation": "CARA puede referirse a la superficie de una pared y también al rostro de una persona."
  },
  {
    "id": "d053",
    "difficulty": "difícil",
    "clue": "Puede ser parte del cuerpo o una ayuda que se ofrece. (4)",
    "answer": "MANO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Puede ser parte del cuerpo",
    "fodder": "",
    "indicators": [],
    "explanation": "MANO es una parte del cuerpo y también aparece en expresiones como «echar una mano», es decir, ofrecer ayuda."
  },
  {
    "id": "d054",
    "difficulty": "difícil",
    "clue": "Lo lleva el rey, pero también puede llevarlo una montaña. (6)",
    "answer": "CORONA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lo lleva el rey",
    "fodder": "",
    "indicators": [],
    "explanation": "CORONA es lo que puede llevar un rey y también puede designar la parte superior o cima de una montaña."
  },
  {
    "id": "d055",
    "difficulty": "difícil",
    "clue": "El metal que buscaban apareció después de que el animal perdiera una letra. (3)",
    "answer": "ORO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "El metal",
    "fodder": "loro",
    "indicators": [
      "perdiera una letra"
    ],
    "explanation": "LORO pierde su primera letra y queda ORO. «El metal» define ORO."
  },
  {
    "id": "d056",
    "difficulty": "difícil",
    "clue": "Prenda que aparece cuando unas ocas vuelven del revés. (4)",
    "answer": "SACO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Prenda",
    "fodder": "ocas",
    "indicators": [
      "vuelven del revés"
    ],
    "explanation": "OCAS leído al revés produce SACO. «Prenda» define SACO."
  },
  {
    "id": "d057",
    "difficulty": "difícil",
    "clue": "El fruto se revela cuando una palabra áspera pierde una de sus letras. (4)",
    "answer": "PERA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "El fruto",
    "fodder": "perra",
    "indicators": [
      "pierde una de sus letras"
    ],
    "explanation": "PERRA pierde una R y queda PERA. «El fruto» define PERA."
  },
  {
    "id": "d058",
    "difficulty": "difícil",
    "clue": "El lugar de descanso se esconde cuando la camarera llega tarde. (4)",
    "answer": "CAMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "El lugar de descanso",
    "fodder": "la camarera",
    "indicators": [
      "se esconde cuando"
    ],
    "explanation": "CAMA aparece consecutivamente en «la camarera»: LA **CAMA**RERA. «El lugar de descanso» define CAMA."
  },
  {
    "id": "d059",
    "difficulty": "difícil",
    "clue": "La herramienta se obtiene al quitar el principio de barco. (4)",
    "answer": "ARCO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "La herramienta",
    "fodder": "barco",
    "indicators": [
      "quitar el principio"
    ],
    "explanation": "BARCO sin su primera letra, B, produce ARCO. «La herramienta» define ARCO."
  },
  {
    "id": "d060",
    "difficulty": "difícil",
    "clue": "Una afirmación y una nota musical pueden sonar exactamente igual. (2)",
    "answer": "SI",
    "mechanisms": [
      "homophone"
    ],
    "definition": "Una afirmación",
    "fodder": "sí",
    "indicators": [
      "pueden sonar exactamente igual"
    ],
    "explanation": "SI puede representar la afirmación «sí» y también la nota musical si; ambas suenan igual."
  }
];
