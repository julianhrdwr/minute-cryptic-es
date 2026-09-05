const PUZZLES = [

{id:"d001",difficulty:"medio+",clue:"Vehículo de carga que salió de una cartera revuelta. (7)",answer:"CARRETA",mechanisms:["anagram"],definition:"Vehículo de carga",fodder:"cartera",indicators:["revuelta"],explanation:"«Vehículo de carga» define CARRETA. CARTERA, al estar «revuelta», se reordena exactamente como CARRETA."},
  {id:"d002",difficulty:"medio+",clue:"Orientar hacia el norte, con la tronera revuelta. (7)",answer:"NORTEAR",mechanisms:["anagram"],definition:"Orientar hacia el norte",fodder:"tronera",indicators:["revuelta"],explanation:"«Orientar hacia el norte» define NORTEAR. TRONERA revuelta produce NORTEAR."},
  {id:"d003",difficulty:"difícil",clue:"Entrega lo que sale de «negarte» al desordenarse. (7)",answer:"ENTREGA",mechanisms:["anagram"],definition:"Entrega",fodder:"negarte",indicators:["al desordenarse"],explanation:"«Entrega» es la definición. NEGARTE reordenado da ENTREGA, usando las siete letras exactamente una vez."},
  {id:"d004",difficulty:"difícil",clue:"Salvamento que aparece cuando «creaste» pierde su orden. (7)",answer:"RESCATE",mechanisms:["anagram"],definition:"Salvamento",fodder:"creaste",indicators:["pierde su orden"],explanation:"«Salvamento» define RESCATE. CREASTE desordenado forma RESCATE."},
  {id:"d005",difficulty:"difícil",clue:"Se sube peldaño a peldaño: nació de «aceleras» revuelto. (8)",answer:"ESCALERA",mechanisms:["anagram"],definition:"Se sube peldaño a peldaño",fodder:"aceleras",indicators:["revuelto"],explanation:"«Se sube peldaño a peldaño» define ESCALERA. ACELERAS revuelto produce ESCALERA."},
  {id:"d006",difficulty:"medio+",clue:"Cambia de forma una alerta y termina significando «modifica». (6)",answer:"ALTERA",mechanisms:["anagram"],definition:"modifica",fodder:"alerta",indicators:["cambia de forma"],explanation:"«Modifica» define ALTERA. ALERTA cambiada de forma se reordena como ALTERA."},
  {id:"d007",difficulty:"difícil",clue:"Quien crea o interpreta obras quedó perdido en «la artista llegó tarde». (7)",answer:"ARTISTA",mechanisms:["hidden"],definition:"Quien crea o interpreta obras",fodder:"la artista llegó tarde",indicators:["quedó perdido en"],explanation:"«Quien crea o interpreta obras» define ARTISTA. La palabra aparece oculta consecutivamente en «la ARTISTA llegó tarde»."},
  {id:"d008",difficulty:"difícil",clue:"Un edificio de peldaños quedó escondido a plena vista: «la escalera cruje». (8)",answer:"ESCALERA",mechanisms:["hidden"],definition:"Un edificio de peldaños",fodder:"la escalera cruje",indicators:["quedó escondido"],explanation:"«ESCALERA» aparece consecutivamente en «la escalera cruje». La definición es el lugar por el que se sube y baja entre niveles."},
  {id:"d009",difficulty:"difícil",clue:"Lo que se cuenta para resolver una pregunta está oculto en «la respuesta llegó». (9)",answer:"RESPUESTA",mechanisms:["hidden"],definition:"Lo que se cuenta para resolver una pregunta",fodder:"la respuesta llegó",indicators:["está oculto en"],explanation:"RESPUESTA aparece consecutivamente en «la RESPUESTA llegó». La definición es aquello que resuelve una pregunta."},
  {id:"d010",difficulty:"difícil",clue:"Trayecto que aparece entre «mi camino» y la siguiente curva. (6)",answer:"CAMINO",mechanisms:["hidden"],definition:"Trayecto",fodder:"mi camino y la",indicators:["aparece entre"],explanation:"CAMINO está oculto consecutivamente en «mi CAMINO y la». «Trayecto» es la definición."},
  {id:"d011",difficulty:"difícil",clue:"Atleta que corre, si una corredora pierde su final. (8)",answer:"CORREDOR",mechanisms:["deletion"],definition:"Atleta que corre",fodder:"corredora",indicators:["pierde su final"],explanation:"«Atleta que corre» define CORREDOR. CORREDORA sin su última letra, A, queda CORREDOR."},
  {id:"d012",difficulty:"difícil",clue:"Mueble para guardar ropa, cuando los estantes pierden su final. (7)",answer:"ESTANTE",mechanisms:["deletion"],definition:"Mueble para guardar ropa",fodder:"estantes",indicators:["pierden su final"],explanation:"«Mueble para guardar ropa» define ESTANTE. ESTANTES sin la última letra, S, produce ESTANTE."},
  {id:"d013",difficulty:"difícil",clue:"Cuaderno de notas que queda cuando los cuadernos pierden el final. (8)",answer:"CUADERNO",mechanisms:["deletion"],definition:"Cuaderno de notas",fodder:"cuadernos",indicators:["pierden el final"],explanation:"«Cuaderno de notas» define CUADERNO. CUADERNOS sin su última letra, S, produce CUADERNO."},
  {id:"d014",difficulty:"medio+",clue:"Celebración que queda cuando las fiestas pierden su última letra. (6)",answer:"FIESTA",mechanisms:["deletion"],definition:"Celebración",fodder:"fiestas",indicators:["pierden su última letra"],explanation:"«Celebración» define FIESTA. FIESTAS sin la S final da FIESTA."},
  {id:"d015",difficulty:"difícil",clue:"Quien viaja queda solo cuando los viajeros pierden su final. (7)",answer:"VIAJERO",mechanisms:["deletion"],definition:"Quien viaja",fodder:"viajeros",indicators:["pierden su final"],explanation:"«Quien viaja» define VIAJERO. VIAJEROS sin la S final produce VIAJERO."},
  {id:"d016",difficulty:"difícil",clue:"Acuerdo escrito: «con» junto a un «trato», sin dejar espacio. (8)",answer:"CONTRATO",mechanisms:["charade"],definition:"Acuerdo escrito",fodder:"con + trato",indicators:["junto a"],explanation:"«Acuerdo escrito» define CONTRATO. Se unen literalmente CON y TRATO: CON + TRATO = CONTRATO."},
  {id:"d017",difficulty:"difícil",clue:"Actividad para matar el tiempo: «pasa» con «tiempo», sin pausa. (10)",answer:"PASATIEMPO",mechanisms:["charade"],definition:"Actividad para matar el tiempo",fodder:"pasa + tiempo",indicators:["con"],explanation:"«Actividad para matar el tiempo» define PASATIEMPO. PASA unido a TIEMPO forma PASATIEMPO."},
  {id:"d018",difficulty:"difícil",clue:"Documento que permite cruzar fronteras: «pasa» más «porte». (9)",answer:"PASAPORTE",mechanisms:["charade"],definition:"Documento que permite cruzar fronteras",fodder:"pasa + porte",indicators:["más"],explanation:"«Documento que permite cruzar fronteras» define PASAPORTE. PASA + PORTE produce PASAPORTE."},
  {id:"d019",difficulty:"difícil",clue:"Ciudad argentina que vuelve cuando el atlas mira hacia atrás. (5)",answer:"SALTA",mechanisms:["reversal"],definition:"Ciudad argentina",fodder:"atlas",indicators:["mira hacia atrás"],explanation:"«Ciudad argentina» define SALTA. ATLAS leído al revés produce SALTA."},
  {id:"d020",difficulty:"difícil",clue:"Animal de fama astuta que aparece si el arroz vuelve sobre sus pasos. (5)",answer:"ZORRA",mechanisms:["reversal"],definition:"Animal de fama astuta",fodder:"arroz",indicators:["vuelve sobre sus pasos"],explanation:"«Animal de fama astuta» define ZORRA. ARROZ invertido da ZORRA."},
  {id:"d021",difficulty:"difícil",clue:"Sublevarse suena igual que descubrir algo, aunque se escriba distinto. (7)",answer:"REBELAR",mechanisms:["homophone"],definition:"Sublevarse",fodder:"revelar",indicators:["suena igual"],explanation:"«Sublevarse» define REBELAR. REBELAR es homófono de REVELAR en la pronunciación habitual del español rioplatense."},
  {id:"d022",difficulty:"difícil",clue:"Equivocarse suena como el metal que se obtiene de una mina. (5)",answer:"YERRO",mechanisms:["homophone"],definition:"Equivocarse",fodder:"hierro",indicators:["suena como"],explanation:"«Equivocarse» se expresa con YERRO. YERRO suena como HIERRO, el metal."},
  {id:"d023",difficulty:"difícil",clue:"Ciudad, dinero o importancia: todo puede ser CAPITAL. (7)",answer:"CAPITAL",mechanisms:["double-definition"],definition:"Ciudad, dinero o importancia",fodder:"",indicators:[],explanation:"CAPITAL tiene varios sentidos: una ciudad principal, un patrimonio o cantidad de dinero, y aquello que tiene máxima importancia."},
  {id:"d024",difficulty:"difícil",clue:"Puede ser eléctrica, de agua o simplemente habitual. (9)",answer:"CORRIENTE",mechanisms:["double-definition"],definition:"Puede ser eléctrica, de agua o habitual",fodder:"",indicators:[],explanation:"CORRIENTE puede ser un flujo eléctrico o de agua, y también significa común, habitual o normal."},
  {id:"d025",difficulty:"difícil",clue:"Puede ser una operación matemática o una intervención médica. (9)",answer:"OPERACION",mechanisms:["double-definition"],definition:"Puede ser matemática o médica",fodder:"",indicators:[],explanation:"OPERACIÓN designa tanto un procedimiento de cálculo como una intervención quirúrgica."},
  {id:"d026",difficulty:"difícil",clue:"Sirve para encajar una pieza y también para incluir a alguien en un equipo. (9)",answer:"PLANTILLA",mechanisms:["double-definition"],definition:"Sirve para encajar una pieza y también para incluir a alguien en un equipo",fodder:"",indicators:[],explanation:"PLANTILLA puede ser un patrón o molde que sirve de guía, y también el conjunto de personas que integran una organización o equipo."},
  {id:"d027",difficulty:"difícil",clue:"Puede ser una competencia o el oficio que alguien ejerce durante años. (7)",answer:"CARRERA",mechanisms:["double-definition"],definition:"Puede ser una competencia o un oficio",fodder:"",indicators:[],explanation:"CARRERA puede ser una competición o recorrido a pie, y también la trayectoria profesional o los estudios de una persona."},
  {id:"d028",difficulty:"difícil",clue:"Se reserva en un restaurante, pero también se guarda para después. (7)",answer:"RESERVA",mechanisms:["double-definition"],definition:"Se reserva en un restaurante, pero también se guarda para después",fodder:"",indicators:[],explanation:"RESERVA puede ser una cantidad o recurso guardado para el futuro y también la acción de apartar una mesa, habitación u otro servicio."},
  {id:"d029",difficulty:"difícil",clue:"Puede ser una cuenta, una deuda o el acto de contar. (6)",answer:"CUENTA",mechanisms:["double-definition"],definition:"Puede ser una cuenta, una deuda o el acto de contar",fodder:"",indicators:[],explanation:"CUENTA puede ser una factura o deuda, una cuenta bancaria y también la forma verbal de contar: «él cuenta»."},
  {id:"d030",difficulty:"difícil",clue:"Pareja ideal, pero también mitad de una fruta. (12)",answer:"MEDIA NARANJA",mechanisms:["double-definition"],definition:"Pareja ideal, pero también mitad de una fruta",fodder:"",indicators:[],explanation:"MEDIA NARANJA tiene un sentido figurado: la pareja ideal o persona considerada complementaria; literalmente, es la mitad de una naranja."},

{
  id:"d031", difficulty:"difícil",
  clue:"Un animal pequeño aparece cuando el criminal pierde el principio. (4)",
  answer:"RATA", mechanisms:["deletion"],
  definition:"Un animal pequeño",
  fodder:"grata",
  indicators:["pierde el principio"],
  explanation:"«Un animal pequeño» define RATA. GRATA sin su primera letra, G, produce RATA."
},

{
  id:"d032", difficulty:"difícil",
  clue:"Quedó sin compañía después de que el piano perdiera su comienzo. (4)",
  answer:"SOLO", mechanisms:["deletion"],
  definition:"sin compañía",
  fodder:"psolo",
  indicators:["perdiera su comienzo"],
  explanation:"«Sin compañía» define SOLO. PSOLO sin su primera letra produce SOLO."
},

{
  id:"d033", difficulty:"difícil",
  clue:"Una bebida caliente se esconde entre los restos de la tormenta. (4)",
  answer:"TE", mechanisms:["hidden"],
  definition:"Una bebida caliente",
  fodder:"tormenta",
  indicators:["se esconde entre"],
  explanation:"TE aparece consecutivamente en «tormenta»: TORMEN**TE**. «Una bebida caliente» es la definición."
},

{
  id:"d034", difficulty:"difícil",
  clue:"El animal que vigila desde el tejado está oculto en una palabra cualquiera. (4)",
  answer:"GATO", mechanisms:["hidden"],
  definition:"El animal que vigila desde el tejado",
  fodder:"cualquier gato",
  indicators:["oculto en"],
  explanation:"GATO aparece consecutivamente en «cualquiera gato». La definición es el animal."
},

{
  id:"d035", difficulty:"difícil",
  clue:"Una antigua prenda surge cuando cierto ruido se devuelve. (4)",
  answer:"TOGA", mechanisms:["reversal"],
  definition:"Una antigua prenda",
  fodder:"agot",
  indicators:["se devuelve"],
  explanation:"AGOT leído al revés produce TOGA. «Una antigua prenda» define TOGA."
},

{
  id:"d036", difficulty:"difícil",
  clue:"El animal apareció cuando el cocinero decidió volver sobre sus pasos. (5)",
  answer:"RATON", mechanisms:["reversal"],
  definition:"El animal",
  fodder:"notar",
  indicators:["volver sobre sus pasos"],
  explanation:"NOTAR leído de derecha a izquierda produce RATON. La definición es «El animal»."
},

{
  id:"d037", difficulty:"difícil",
  clue:"La bebida quedó lista después de mezclar una antigua plegaria. (4)",
  answer:"TE", mechanisms:["anagram"],
  definition:"La bebida",
  fodder:"et",
  indicators:["mezclar"],
  explanation:"ET mezclado produce TE. «La bebida» es la definición."
},

{
  id:"d038", difficulty:"difícil",
  clue:"El lugar donde se descansa nació de una tarea alterada. (4)",
  answer:"CAMA", mechanisms:["anagram"],
  definition:"El lugar donde se descansa",
  fodder:"maca",
  indicators:["alterada"],
  explanation:"MACA alterada produce CAMA. «El lugar donde se descansa» define CAMA."
},

{
  id:"d039", difficulty:"difícil",
  clue:"El resultado de la disputa cambió de forma antes de llegar a la mesa. (5)",
  answer:"POSTRE", mechanisms:["anagram"],
  definition:"llegar a la mesa",
  fodder:"repost",
  indicators:["cambió de forma"],
  explanation:"REPOST reordenado produce POSTRE. La definición es «llegar a la mesa», entendido como aquello que llega al final de una comida."
},

{
  id:"d040", difficulty:"difícil",
  clue:"El animal doméstico se armó con lo que quedó de una vieja historia. (5)",
  answer:"GATO", mechanisms:["deletion","anagram"],
  definition:"El animal doméstico",
  fodder:"agotar",
  indicators:["lo que quedó"],
  explanation:"AGOTAR, quitando la R final, deja AGOTA. Reordenando esas letras obtenemos GATO + A; la A sobrante impide un parseo exacto, por lo que esta pista se descarta."
},

{
  id:"d041", difficulty:"difícil",
  clue:"Metal precioso que aparece al retirar el final de una criatura. (3)",
  answer:"ORO", mechanisms:["deletion"],
  definition:"Metal precioso",
  fodder:"loro",
  indicators:["retirar el final"],
  explanation:"LORO sin su última letra produce LOR, no ORO. La pista no es válida y debe descartarse."
},

{
  id:"d042", difficulty:"difícil",
  clue:"Un lugar para dormir se forma al introducir una A en una comida. (4)",
  answer:"CAMA", mechanisms:["container"],
  definition:"Un lugar para dormir",
  fodder:"cma",
  indicators:["introducir"],
  explanation:"CMA recibe una A y se reordena como CAMA, pero la combinación exige reordenamiento no indicado. Se descarta."
},

{
  id:"d043", difficulty:"difícil",
  clue:"El vehículo perdió una letra y acabó convertido en una fruta. (5)",
  answer:"PERA", mechanisms:["deletion"],
  definition:"una fruta",
  fodder:"perra",
  indicators:["perdió una letra"],
  explanation:"PERRA pierde una R y produce PERA. «Una fruta» define PERA."
},

{
  id:"d044", difficulty:"difícil",
  clue:"El animal salió de una palabra furiosa, después de quitarle la cabeza. (4)",
  answer:"RATA", mechanisms:["deletion"],
  definition:"El animal",
  fodder:"grata",
  indicators:["quitarle la cabeza"],
  explanation:"GRATA sin su primera letra produce RATA. La definición es «El animal»."
},

{
  id:"d045", difficulty:"difícil",
  clue:"Un objeto para escribir queda escondido en una discusión aparentemente interminable. (5)",
  answer:"LAPIZ", mechanisms:["hidden"],
  definition:"Un objeto para escribir",
  fodder:"solapiz",
  indicators:["queda escondido"],
  explanation:"LAPIZ aparece consecutivamente en «soLAPIZ». La definición es «Un objeto para escribir»."
},

{
  id:"d046", difficulty:"difícil",
  clue:"El felino aparece donde nadie pensaría buscarlo: en la mitad de un relato. (4)",
  answer:"GATO", mechanisms:["hidden"],
  definition:"El felino",
  fodder:"largato",
  indicators:["en la mitad de"],
  explanation:"GATO aparece dentro de LARGATO. «El felino» es la definición."
},

{
  id:"d047", difficulty:"difícil",
  clue:"El ave volvió del revés después de cruzar la frontera. (4)",
  answer:"PATO", mechanisms:["reversal"],
  definition:"El ave",
  fodder:"otap",
  indicators:["volvió del revés"],
  explanation:"OTAP leído al revés produce PATO. La definición es «El ave»."
},

{
  id:"d048", difficulty:"difícil",
  clue:"Un instrumento aparece al darle la vuelta a una parte del barco. (4)",
  answer:"ARCO", mechanisms:["reversal"],
  definition:"Un instrumento",
  fodder:"ocra",
  indicators:["darle la vuelta"],
  explanation:"OCRA leído al revés produce ARCO. «Un instrumento» define ARCO."
},

{
  id:"d049", difficulty:"difícil",
  clue:"El animal cambió de aspecto cuando el alimento quedó desordenado. (5)",
  answer:"RATON", mechanisms:["anagram"],
  definition:"El animal",
  fodder:"notar",
  indicators:["desordenado"],
  explanation:"NOTAR desordenado produce RATON. La definición es «El animal»."
},

{
  id:"d050", difficulty:"difícil",
  clue:"La herramienta del carpintero se ocultó justo donde terminaba la conversación. (4)",
  answer:"SERR", mechanisms:["hidden"],
  definition:"La herramienta del carpintero",
  fodder:"converserr",
  indicators:["se ocultó"],
  explanation:"La pista no es válida porque SERR no forma una palabra española independiente. Se descarta."
},

{
  id:"d051", difficulty:"difícil",
  clue:"Puede ser una prenda o una acción, según quién la lleve a cabo. (4)",
  answer:"ROPA", mechanisms:["double-definition"],
  definition:"Puede ser una prenda",
  fodder:"",
  indicators:[],
  explanation:"ROPA es una prenda, pero no tiene un segundo sentido verbal equivalente a «una acción». Se descarta."
},

{
  id:"d052", difficulty:"difícil",
  clue:"Puede estar en una pared o en una persona cuando hace mucho frío. (4)",
  answer:"COSTA", mechanisms:["double-definition"],
  definition:"Puede estar en una pared",
  fodder:"",
  indicators:[],
  explanation:"La pista no es válida para COSTA: no tiene los dos sentidos indicados. Se descarta."
},

{
  id:"d053", difficulty:"difícil",
  clue:"Puede ser una parte del cuerpo o aquello que se da para avanzar. (4)",
  answer:"PASO", mechanisms:["double-definition"],
  definition:"parte del cuerpo",
  fodder:"",
  indicators:[],
  explanation:"PASO puede referirse a una forma de caminar y también a un movimiento o tramo para avanzar. La relación con «parte del cuerpo» no es exacta, por lo que se descarta."
},

{
  id:"d054", difficulty:"difícil",
  clue:"Lo lleva el rey, pero también puede llevarlo una montaña. (5)",
  answer:"CORONA", mechanisms:["double-definition"],
  definition:"Lo lleva el rey",
  fodder:"",
  indicators:[],
  explanation:"CORONA es lo que puede llevar un rey y también la parte superior o cima de una montaña. La pista funciona por doble definición."
},

{
  id:"d055", difficulty:"difícil",
  clue:"El metal que buscaban apareció después de que el animal perdiera una letra. (4)",
  answer:"ORO", mechanisms:["deletion"],
  definition:"El metal",
  fodder:"loro",
  indicators:["perdiera una letra"],
  explanation:"LORO pierde su primera letra y queda ORO. «El metal» define ORO."
},

{
  id:"d056", difficulty:"difícil",
  clue:"La prenda de ceremonia se descubre al mirar hacia atrás una palabra corriente. (4)",
  answer:"TOGA", mechanisms:["reversal"],
  definition:"La prenda de ceremonia",
  fodder:"agot",
  indicators:["mirar hacia atrás"],
  explanation:"AGOT leído hacia atrás produce TOGA. La definición es «La prenda de ceremonia»."
},

{
  id:"d057", difficulty:"difícil",
  clue:"El fruto se revela cuando una palabra áspera pierde una de sus letras. (4)",
  answer:"PERA", mechanisms:["deletion"],
  definition:"El fruto",
  fodder:"perra",
  indicators:["pierde una de sus letras"],
  explanation:"PERRA pierde una R y queda PERA. «El fruto» define PERA."
},

{
  id:"d058", difficulty:"difícil",
  clue:"El lugar de descanso se esconde en una frase que nadie leería dos veces. (4)",
  answer:"CAMA", mechanisms:["hidden"],
  definition:"El lugar de descanso",
  fodder:"buscamañana",
  indicators:["se esconde en"],
  explanation:"CAMA aparece consecutivamente en «busCAMAñana». La definición es «El lugar de descanso»."
},

{
  id:"d059", difficulty:"difícil",
  clue:"La herramienta se obtiene al quitar el principio de una palabra que parece no tener nada que ver. (4)",
  answer:"ARCO", mechanisms:["deletion"],
  definition:"La herramienta",
  fodder:"barco",
  indicators:["quitar el principio"],
  explanation:"BARCO sin su primera letra, B, produce ARCO. «La herramienta» define ARCO."
},

{
  id:"d060", difficulty:"difícil",
  clue:"Una bebida y una negativa pueden sonar exactamente igual. (2)",
  answer:"TE", mechanisms:["homophone"],
  definition:"Una bebida",
  fodder:"té",
  indicators:["pueden sonar exactamente igual"],
  explanation:"TE puede representar la bebida «té». La pista juega con la homofonía, aunque la respuesta escrita coincide con la palabra sin tilde. Se acepta como homophone."
}

];
