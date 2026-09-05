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
    "clue": "Vehículo de carga que sale cuando cartera queda patas arriba. (7)",
    "answer": "CARRETA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Vehículo de carga",
    "fodder": "CARTERA",
    "indicators": [
      "patas arriba"
    ],
    "explanation": "«Vehículo de carga» define CARRETA. Las letras de CARTERA se reordenan con el indicador «patas arriba» para formar CARRETA."
  },
  {
    "id": "d002",
    "difficulty": "medio",
    "clue": "Orientar hacia el norte que sale cuando tronera queda fuera de sitio. (7)",
    "answer": "NORTEAR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Orientar hacia el norte",
    "fodder": "TRONERA",
    "indicators": [
      "fuera de sitio"
    ],
    "explanation": "«Orientar hacia el norte» define NORTEAR. Las letras de TRONERA se reordenan con el indicador «fuera de sitio» para formar NORTEAR."
  },
  {
    "id": "d003",
    "difficulty": "medio",
    "clue": "Cesión o entrega que sale cuando negarte queda sin concierto. (7)",
    "answer": "ENTREGA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Cesión",
    "fodder": "NEGARTE",
    "indicators": [
      "sin concierto"
    ],
    "explanation": "«Cesión o entrega» define ENTREGA. Las letras de NEGARTE se reordenan con el indicador «sin concierto» para formar ENTREGA."
  },
  {
    "id": "d004",
    "difficulty": "medio",
    "clue": "Salvamento que sale cuando creaste queda deshecho. (7)",
    "answer": "RESCATE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Salvamento",
    "fodder": "CREASTE",
    "indicators": [
      "deshecho"
    ],
    "explanation": "«Salvamento» define RESCATE. Las letras de CREASTE se reordenan con el indicador «deshecho» para formar RESCATE."
  },
  {
    "id": "d005",
    "difficulty": "medio",
    "clue": "Acceso entre niveles que sale cuando aceleras queda descolocadas. (8)",
    "answer": "ESCALERA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Acceso entre niveles",
    "fodder": "ACELERAS",
    "indicators": [
      "descolocadas"
    ],
    "explanation": "«Acceso entre niveles» define ESCALERA. Las letras de ACELERAS se reordenan con el indicador «descolocadas» para formar ESCALERA."
  },
  {
    "id": "d006",
    "difficulty": "medio",
    "clue": "Modifica que sale cuando alerta queda cambiada de sitio. (6)",
    "answer": "ALTERA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Modifica",
    "fodder": "ALERTA",
    "indicators": [
      "cambiada de sitio"
    ],
    "explanation": "«Modifica» define ALTERA. Las letras de ALERTA se reordenan con el indicador «cambiada de sitio» para formar ALTERA."
  },
  {
    "id": "d007",
    "difficulty": "medio",
    "clue": "Enigma difícil de explicar que sale cuando remistio queda revuelto. (8)",
    "answer": "MISTERIO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Enigma difícil de explicar",
    "fodder": "REMISTIO",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Enigma difícil de explicar» define MISTERIO. Las letras de REMISTIO se reordenan con el indicador «revuelto» para formar MISTERIO."
  },
  {
    "id": "d008",
    "difficulty": "medio",
    "clue": "Lugar donde se aprende que sale cuando secuele queda mezclado. (7)",
    "answer": "ESCUELA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Lugar donde se aprende",
    "fodder": "SECUELE",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Lugar donde se aprende» define ESCUELA. Las letras de SECUELE se reordenan con el indicador «mezclado» para formar ESCUELA."
  },
  {
    "id": "d009",
    "difficulty": "medio",
    "clue": "Prenda de vestir que sale cuando mecatisa queda alterado. (8)",
    "answer": "CAMISETA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Prenda de vestir",
    "fodder": "MECATISA",
    "indicators": [
      "alterado"
    ],
    "explanation": "«Prenda de vestir» define CAMISETA. Las letras de MECATISA se reordenan con el indicador «alterado» para formar CAMISETA."
  },
  {
    "id": "d010",
    "difficulty": "medio",
    "clue": "Persona que trabaja en un barco que sale cuando remaniro queda desordenado. (8)",
    "answer": "MARINERO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Persona que trabaja en un barco",
    "fodder": "REMANIRO",
    "indicators": [
      "desordenado"
    ],
    "explanation": "«Persona que trabaja en un barco» define MARINERO. Las letras de REMANIRO se reordenan con el indicador «desordenado» para formar MARINERO."
  },
  {
    "id": "d011",
    "difficulty": "medio",
    "clue": "Objeto para guardar papeles que sale cuando repacta queda mezclado. (7)",
    "answer": "CARPETA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Objeto para guardar papeles",
    "fodder": "REPACTA",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Objeto para guardar papeles» define CARPETA. Las letras de REPACTA se reordenan con el indicador «mezclado» para formar CARPETA."
  },
  {
    "id": "d012",
    "difficulty": "medio",
    "clue": "Superficie para escribir que sale cuando zaparri queda revuelto. (7)",
    "answer": "PIZARRA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Superficie para escribir",
    "fodder": "ZAPARRI",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Superficie para escribir» define PIZARRA. Las letras de ZAPARRI se reordenan con el indicador «revuelto» para formar PIZARRA."
  },
  {
    "id": "d013",
    "difficulty": "medio",
    "clue": "Extensión de tierra que sale cuando retenor queda trastocado. (7)",
    "answer": "TERRENO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Extensión de tierra",
    "fodder": "RETENOR",
    "indicators": [
      "trastocado"
    ],
    "explanation": "«Extensión de tierra» define TERRENO. Las letras de RETENOR se reordenan con el indicador «trastocado» para formar TERRENO."
  },
  {
    "id": "d014",
    "difficulty": "medio",
    "clue": "Animal del desierto que sale cuando mecollo queda revuelto. (7)",
    "answer": "CAMELLO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Animal del desierto",
    "fodder": "MECOLLO",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Animal del desierto» define CAMELLO. Las letras de MECOLLO se reordenan con el indicador «revuelto» para formar CAMELLO."
  },
  {
    "id": "d015",
    "difficulty": "medio",
    "clue": "Abertura en una pared que sale cuando navetan queda mezclado. (7)",
    "answer": "VENTANA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Abertura en una pared",
    "fodder": "NAVETAN",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Abertura en una pared» define VENTANA. Las letras de NAVETAN se reordenan con el indicador «mezclado» para formar VENTANA."
  },
  {
    "id": "d016",
    "difficulty": "medio",
    "clue": "Ciudad italiana cuando amor aparece de vuelta. (4)",
    "answer": "ROMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Ciudad italiana",
    "fodder": "AMOR",
    "indicators": [
      "de vuelta"
    ],
    "explanation": "«Ciudad italiana» define ROMA. AMOR se reordena con «de vuelta» para obtener ROMA."
  },
  {
    "id": "d017",
    "difficulty": "medio",
    "clue": "Arma curva cuando cora aparece revuelto. (4)",
    "answer": "ARCO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Arma curva",
    "fodder": "CORA",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Arma curva» define ARCO. CORA se reordena con «revuelto» para obtener ARCO."
  },
  {
    "id": "d018",
    "difficulty": "medio",
    "clue": "Piedra cuando caro aparece alterado. (4)",
    "answer": "ROCA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Piedra",
    "fodder": "CARO",
    "indicators": [
      "alterado"
    ],
    "explanation": "«Piedra» define ROCA. CARO se reordena con «alterado» para obtener ROCA."
  },
  {
    "id": "d019",
    "difficulty": "medio",
    "clue": "Prenda para cubrir el cuerpo cuando ocas aparece mezclado. (4)",
    "answer": "SACO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Prenda para cubrir el cuerpo",
    "fodder": "OCAS",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Prenda para cubrir el cuerpo» define SACO. OCAS se reordena con «mezclado» para obtener SACO."
  },
  {
    "id": "d020",
    "difficulty": "medio",
    "clue": "Vivienda cuando saca aparece revuelto. (4)",
    "answer": "CASA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Vivienda",
    "fodder": "SACA",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Vivienda» define CASA. SACA se reordena con «revuelto» para obtener CASA."
  },
  {
    "id": "d021",
    "difficulty": "medio",
    "clue": "Movimiento al caminar cuando sopa aparece desordenada. (4)",
    "answer": "PASO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Movimiento al caminar",
    "fodder": "SOPA",
    "indicators": [
      "desordenada"
    ],
    "explanation": "«Movimiento al caminar» define PASO. SOPA se reordena con «desordenada» para obtener PASO."
  },
  {
    "id": "d022",
    "difficulty": "medio",
    "clue": "Comida líquida cuando opas aparece revuelta. (4)",
    "answer": "SOPA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Comida líquida",
    "fodder": "OPAS",
    "indicators": [
      "revuelta"
    ],
    "explanation": "«Comida líquida» define SOPA. OPAS se reordena con «revuelta» para obtener SOPA."
  },
  {
    "id": "d023",
    "difficulty": "medio",
    "clue": "Extremidad de un animal cuando tapa aparece alterada. (4)",
    "answer": "PATA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Extremidad de un animal",
    "fodder": "TAPA",
    "indicators": [
      "alterada"
    ],
    "explanation": "«Extremidad de un animal» define PATA. TAPA se reordena con «alterada» para obtener PATA."
  },
  {
    "id": "d024",
    "difficulty": "medio",
    "clue": "Cubierta cuando pata aparece trastocada. (4)",
    "answer": "TAPA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Cubierta",
    "fodder": "PATA",
    "indicators": [
      "trastocada"
    ],
    "explanation": "«Cubierta» define TAPA. PATA se reordena con «trastocada» para obtener TAPA."
  },
  {
    "id": "d025",
    "difficulty": "medio",
    "clue": "Roedor cuando atar aparece revuelto. (4)",
    "answer": "RATA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Roedor",
    "fodder": "ATAR",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Roedor» define RATA. ATAR se reordena con «revuelto» para obtener RATA."
  },
  {
    "id": "d026",
    "difficulty": "medio",
    "clue": "Sujetar con un nudo cuando rata aparece mezclada. (4)",
    "answer": "ATAR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Sujetar con un nudo",
    "fodder": "RATA",
    "indicators": [
      "mezclada"
    ],
    "explanation": "«Sujetar con un nudo» define ATAR. RATA se reordena con «mezclada» para obtener ATAR."
  },
  {
    "id": "d027",
    "difficulty": "medio",
    "clue": "Comida nocturna cuando nace aparece reordenado. (4)",
    "answer": "CENA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Comida nocturna",
    "fodder": "NACE",
    "indicators": [
      "reordenado"
    ],
    "explanation": "«Comida nocturna» define CENA. NACE se reordena con «reordenado» para obtener CENA."
  },
  {
    "id": "d028",
    "difficulty": "medio",
    "clue": "Viene al mundo cuando cena aparece revuelto. (4)",
    "answer": "NACE",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Viene al mundo",
    "fodder": "CENA",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Viene al mundo» define NACE. CENA se reordena con «revuelto» para obtener NACE."
  },
  {
    "id": "d029",
    "difficulty": "medio",
    "clue": "Castigo o tristeza cuando pane aparece mezclado. (4)",
    "answer": "PENA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Castigo",
    "fodder": "PANE",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Castigo o tristeza» define PENA. PANE se reordena con «mezclado» para obtener PENA."
  },
  {
    "id": "d030",
    "difficulty": "medio",
    "clue": "Masa de agua interior cuando gola aparece trastocada. (4)",
    "answer": "LAGO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Masa de agua interior",
    "fodder": "GOLA",
    "indicators": [
      "trastocada"
    ],
    "explanation": "«Masa de agua interior» define LAGO. GOLA se reordena con «trastocada» para obtener LAGO."
  },
  {
    "id": "d031",
    "difficulty": "medio",
    "clue": "Adorno del cuello cuando lago aparece revuelta. (4)",
    "answer": "GOLA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Adorno del cuello",
    "fodder": "LAGO",
    "indicators": [
      "revuelta"
    ],
    "explanation": "«Adorno del cuello» define GOLA. LAGO se reordena con «revuelta» para obtener GOLA."
  },
  {
    "id": "d032",
    "difficulty": "medio",
    "clue": "Parte espiritual cuando mala aparece alterada. (4)",
    "answer": "ALMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Parte espiritual",
    "fodder": "MALA",
    "indicators": [
      "alterada"
    ],
    "explanation": "«Parte espiritual» define ALMA. MALA se reordena con «alterada» para obtener ALMA."
  },
  {
    "id": "d033",
    "difficulty": "medio",
    "clue": "De calidad deficiente cuando alma aparece revuelta. (4)",
    "answer": "MALA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "De calidad deficiente",
    "fodder": "ALMA",
    "indicators": [
      "revuelta"
    ],
    "explanation": "«De calidad deficiente» define MALA. ALMA se reordena con «revuelta» para obtener MALA."
  },
  {
    "id": "d034",
    "difficulty": "medio",
    "clue": "Expresión de alegría cuando asir aparece trastocada. (4)",
    "answer": "RISA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Expresión de alegría",
    "fodder": "ASIR",
    "indicators": [
      "trastocada"
    ],
    "explanation": "«Expresión de alegría» define RISA. ASIR se reordena con «trastocada» para obtener RISA."
  },
  {
    "id": "d035",
    "difficulty": "medio",
    "clue": "Agarrar cuando risa aparece mezclada. (4)",
    "answer": "ASIR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Agarrar",
    "fodder": "RISA",
    "indicators": [
      "mezclada"
    ],
    "explanation": "«Agarrar» define ASIR. RISA se reordena con «mezclada» para obtener ASIR."
  },
  {
    "id": "d036",
    "difficulty": "medio",
    "clue": "Sin rugosidades cuando isla aparece revuelta. (4)",
    "answer": "LISA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Sin rugosidades",
    "fodder": "ISLA",
    "indicators": [
      "revuelta"
    ],
    "explanation": "«Sin rugosidades» define LISA. ISLA se reordena con «revuelta» para obtener LISA."
  },
  {
    "id": "d037",
    "difficulty": "medio",
    "clue": "Tierra rodeada de agua cuando lisa aparece desordenada. (4)",
    "answer": "ISLA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Tierra rodeada de agua",
    "fodder": "LISA",
    "indicators": [
      "desordenada"
    ],
    "explanation": "«Tierra rodeada de agua» define ISLA. LISA se reordena con «desordenada» para obtener ISLA."
  },
  {
    "id": "d038",
    "difficulty": "medio",
    "clue": "Trozo de madera cuando lopa aparece mezclado. (4)",
    "answer": "PALO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Trozo de madera",
    "fodder": "LOPA",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Trozo de madera» define PALO. LOPA se reordena con «mezclado» para obtener PALO."
  },
  {
    "id": "d039",
    "difficulty": "medio",
    "clue": "Animal cánido cuando bolo aparece trastocado. (4)",
    "answer": "LOBO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Animal cánido",
    "fodder": "BOLO",
    "indicators": [
      "trastocado"
    ],
    "explanation": "«Animal cánido» define LOBO. BOLO se reordena con «trastocado» para obtener LOBO."
  },
  {
    "id": "d040",
    "difficulty": "medio",
    "clue": "Comida o juego según el contexto cuando lobo aparece revuelto. (4)",
    "answer": "BOLO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Comida",
    "fodder": "LOBO",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Comida o juego según el contexto» define BOLO. LOBO se reordena con «revuelto» para obtener BOLO."
  },
  {
    "id": "d041",
    "difficulty": "medio-difícil",
    "clue": "Acción de cantar cuando tacon aparece desordenado. (5)",
    "answer": "CANTO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Acción de cantar",
    "fodder": "TACON",
    "indicators": [
      "desordenado"
    ],
    "explanation": "«Acción de cantar» define CANTO. TACON se reordena con «desordenado» para obtener CANTO."
  },
  {
    "id": "d042",
    "difficulty": "medio-difícil",
    "clue": "Parte del calzado cuando canto aparece mezclado. (5)",
    "answer": "TACON",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Parte del calzado",
    "fodder": "CANTO",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Parte del calzado» define TACON. CANTO se reordena con «mezclado» para obtener TACON."
  },
  {
    "id": "d043",
    "difficulty": "medio-difícil",
    "clue": "Categoría o nivel cuando grano aparece revuelto. (5)",
    "answer": "RANGO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Categoría",
    "fodder": "GRANO",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Categoría o nivel» define RANGO. GRANO se reordena con «revuelto» para obtener RANGO."
  },
  {
    "id": "d044",
    "difficulty": "medio-difícil",
    "clue": "Semilla pequeña cuando rango aparece alterado. (5)",
    "answer": "GRANO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Semilla pequeña",
    "fodder": "RANGO",
    "indicators": [
      "alterado"
    ],
    "explanation": "«Semilla pequeña» define GRANO. RANGO se reordena con «alterado» para obtener GRANO."
  },
  {
    "id": "d045",
    "difficulty": "medio-difícil",
    "clue": "Asiento real cuando norto aparece mezclado. (5)",
    "answer": "TRONO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Asiento real",
    "fodder": "NORTO",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Asiento real» define TRONO. NORTO se reordena con «mezclado» para obtener TRONO."
  },
  {
    "id": "d046",
    "difficulty": "medio-difícil",
    "clue": "Apunte breve cuando tona aparece revuelta. (4)",
    "answer": "NOTA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Apunte breve",
    "fodder": "TONA",
    "indicators": [
      "revuelta"
    ],
    "explanation": "«Apunte breve» define NOTA. TONA se reordena con «revuelta» para obtener NOTA."
  },
  {
    "id": "d047",
    "difficulty": "medio-difícil",
    "clue": "Altura de un sonido cuando noto aparece alterado. (4)",
    "answer": "TONO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Altura de un sonido",
    "fodder": "NOTO",
    "indicators": [
      "alterado"
    ],
    "explanation": "«Altura de un sonido» define TONO. NOTO se reordena con «alterado» para obtener TONO."
  },
  {
    "id": "d048",
    "difficulty": "medio-difícil",
    "clue": "Mueble cuando sema aparece mezclado. (4)",
    "answer": "MESA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Mueble",
    "fodder": "SEMA",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Mueble» define MESA. SEMA se reordena con «mezclado» para obtener MESA."
  },
  {
    "id": "d049",
    "difficulty": "medio-difícil",
    "clue": "Cavidad profunda cuando misa aparece revuelta. (4)",
    "answer": "SIMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Cavidad profunda",
    "fodder": "MISA",
    "indicators": [
      "revuelta"
    ],
    "explanation": "«Cavidad profunda» define SIMA. MISA se reordena con «revuelta» para obtener SIMA."
  },
  {
    "id": "d050",
    "difficulty": "medio-difícil",
    "clue": "Celebración religiosa cuando sima aparece desordenada. (4)",
    "answer": "MISA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Celebración religiosa",
    "fodder": "SIMA",
    "indicators": [
      "desordenada"
    ],
    "explanation": "«Celebración religiosa» define MISA. SIMA se reordena con «desordenada» para obtener MISA."
  },
  {
    "id": "d051",
    "difficulty": "medio-difícil",
    "clue": "Primate cuando nomo aparece mezclado. (4)",
    "answer": "MONO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Primate",
    "fodder": "NOMO",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Primate» define MONO. NOMO se reordena con «mezclado» para obtener MONO."
  },
  {
    "id": "d052",
    "difficulty": "medio-difícil",
    "clue": "Regla o norma cuando mono aparece revuelto. (4)",
    "answer": "NOMO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Regla",
    "fodder": "MONO",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Regla o norma» define NOMO. MONO se reordena con «revuelto» para obtener NOMO."
  },
  {
    "id": "d053",
    "difficulty": "medio-difícil",
    "clue": "Persona o animal capturado cuando peras aparece desordenadas. (5)",
    "answer": "PRESA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Persona",
    "fodder": "PERAS",
    "indicators": [
      "desordenadas"
    ],
    "explanation": "«Persona o animal capturado» define PRESA. PERAS se reordena con «desordenadas» para obtener PRESA."
  },
  {
    "id": "d054",
    "difficulty": "medio-difícil",
    "clue": "Frutas cuando presa aparece revuelto. (5)",
    "answer": "PERAS",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Frutas",
    "fodder": "PRESA",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Frutas» define PERAS. PRESA se reordena con «revuelto» para obtener PERAS."
  },
  {
    "id": "d055",
    "difficulty": "medio-difícil",
    "clue": "Parte de un árbol cuando amar aparece trastocada. (4)",
    "answer": "RAMA",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Parte de un árbol",
    "fodder": "AMAR",
    "indicators": [
      "trastocada"
    ],
    "explanation": "«Parte de un árbol» define RAMA. AMAR se reordena con «trastocada» para obtener RAMA."
  },
  {
    "id": "d056",
    "difficulty": "medio-difícil",
    "clue": "Querer cuando rama aparece revuelta. (4)",
    "answer": "AMAR",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Querer",
    "fodder": "RAMA",
    "indicators": [
      "revuelta"
    ],
    "explanation": "«Querer» define AMAR. RAMA se reordena con «revuelta» para obtener AMAR."
  },
  {
    "id": "d057",
    "difficulty": "medio-difícil",
    "clue": "Relativo a la conducta cuando ramol aparece mezclado. (5)",
    "answer": "MORAL",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Relativo a la conducta",
    "fodder": "RAMOL",
    "indicators": [
      "mezclado"
    ],
    "explanation": "«Relativo a la conducta» define MORAL. RAMOL se reordena con «mezclado» para obtener MORAL."
  },
  {
    "id": "d058",
    "difficulty": "medio-difícil",
    "clue": "Conjunto de flores cuando roma aparece revuelto. (4)",
    "answer": "RAMO",
    "mechanisms": [
      "anagram"
    ],
    "definition": "Conjunto de flores",
    "fodder": "ROMA",
    "indicators": [
      "revuelto"
    ],
    "explanation": "«Conjunto de flores» define RAMO. ROMA se reordena con «revuelto» para obtener RAMO."
  },
  {
    "id": "d059",
    "difficulty": "medio-difícil",
    "clue": "Acuerdo quedó perdido en «reTRATO familiar». (5)",
    "answer": "TRATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Acuerdo",
    "fodder": "reTRATO familiar",
    "indicators": [
      "perdido en"
    ],
    "explanation": "«Acuerdo» define TRATO. Las letras de TRATO aparecen consecutivamente ocultas en «reTRATO familiar»."
  },
  {
    "id": "d060",
    "difficulty": "medio-difícil",
    "clue": "Lugar para dormir quedó camuflado en «la CAMArera llegó». (4)",
    "answer": "CAMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Lugar para dormir",
    "fodder": "la CAMArera llegó",
    "indicators": [
      "camuflado en"
    ],
    "explanation": "«Lugar para dormir» define CAMA. Las letras de CAMA aparecen consecutivamente ocultas en «la CAMArera llegó»."
  },
  {
    "id": "d061",
    "difficulty": "medio-difícil",
    "clue": "Recipiente metálico quedó oculto en «pla LATAzo cayó». (4)",
    "answer": "LATA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Recipiente metálico",
    "fodder": "pla LATAzo cayó",
    "indicators": [
      "oculto en"
    ],
    "explanation": "«Recipiente metálico» define LATA. Las letras de LATA aparecen consecutivamente ocultas en «pla LATAzo cayó»."
  },
  {
    "id": "d062",
    "difficulty": "medio-difícil",
    "clue": "Ave acuática quedó perdido entre «emPA TOdavía». (4)",
    "answer": "PATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Ave acuática",
    "fodder": "emPA TOdavía",
    "indicators": [
      "perdido entre"
    ],
    "explanation": "«Ave acuática» define PATO. Las letras de PATO aparecen consecutivamente ocultas en «emPA TOdavía»."
  },
  {
    "id": "d063",
    "difficulty": "medio-difícil",
    "clue": "Cantidad que se mide quedó metido en «un PE SOñado». (4)",
    "answer": "PESO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Cantidad que se mide",
    "fodder": "un PE SOñado",
    "indicators": [
      "metido en"
    ],
    "explanation": "«Cantidad que se mide» define PESO. Las letras de PESO aparecen consecutivamente ocultas en «un PE SOñado»."
  },
  {
    "id": "d064",
    "difficulty": "medio-difícil",
    "clue": "Flor quedó camuflada en «micRO SAbio». (4)",
    "answer": "ROSA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Flor",
    "fodder": "micRO SAbio",
    "indicators": [
      "camuflada en"
    ],
    "explanation": "«Flor» define ROSA. Las letras de ROSA aparecen consecutivamente ocultas en «micRO SAbio»."
  },
  {
    "id": "d065",
    "difficulty": "medio-difícil",
    "clue": "Período breve quedó escondido en «paRATOdos». (4)",
    "answer": "RATO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Período breve",
    "fodder": "paRATOdos",
    "indicators": [
      "escondido en"
    ],
    "explanation": "«Período breve» define RATO. Las letras de RATO aparecen consecutivamente ocultas en «paRATOdos»."
  },
  {
    "id": "d066",
    "difficulty": "medio-difícil",
    "clue": "Fruta cítrica quedó oculta entre «ca LIMA ñana». (4)",
    "answer": "LIMA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Fruta cítrica",
    "fodder": "ca LIMA ñana",
    "indicators": [
      "oculta entre"
    ],
    "explanation": "«Fruta cítrica» define LIMA. Las letras de LIMA aparecen consecutivamente ocultas en «ca LIMA ñana»."
  },
  {
    "id": "d067",
    "difficulty": "medio-difícil",
    "clue": "Vehículo de dos ruedas quedó camuflado en «coMOTOdo». (4)",
    "answer": "MOTO",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Vehículo de dos ruedas",
    "fodder": "coMOTOdo",
    "indicators": [
      "camuflado en"
    ],
    "explanation": "«Vehículo de dos ruedas» define MOTO. Las letras de MOTO aparecen consecutivamente ocultas en «coMOTOdo»."
  },
  {
    "id": "d068",
    "difficulty": "medio-difícil",
    "clue": "Sustancia de las velas quedó perdida en «pa CERA melo». (4)",
    "answer": "CERA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Sustancia de las velas",
    "fodder": "pa CERA melo",
    "indicators": [
      "perdida en"
    ],
    "explanation": "«Sustancia de las velas» define CERA. Las letras de CERA aparecen consecutivamente ocultas en «pa CERA melo»."
  },
  {
    "id": "d069",
    "difficulty": "medio-difícil",
    "clue": "Montón o batería quedó escondida en «tran PILA r». (4)",
    "answer": "PILA",
    "mechanisms": [
      "hidden"
    ],
    "definition": "Montón",
    "fodder": "tran PILA r",
    "indicators": [
      "escondida en"
    ],
    "explanation": "«Montón o batería» define PILA. Las letras de PILA aparecen consecutivamente ocultas en «tran PILA r»."
  },
  {
    "id": "d070",
    "difficulty": "medio-difícil",
    "clue": "Asunto queda cuando atema pierde su cabeza. (4)",
    "answer": "TEMA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Asunto",
    "fodder": "ATEMA",
    "indicators": [
      "pierde su cabeza"
    ],
    "explanation": "«Asunto» define TEMA. Al quitar la letra indicada por «pierde su cabeza», ATEMA queda TEMA."
  },
  {
    "id": "d071",
    "difficulty": "medio-difícil",
    "clue": "Felino doméstico queda cuando gatos pierde su cola. (4)",
    "answer": "GATO",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Felino doméstico",
    "fodder": "GATOS",
    "indicators": [
      "pierde su cola"
    ],
    "explanation": "«Felino doméstico» define GATO. Al quitar la letra indicada por «pierde su cola», GATOS queda GATO."
  },
  {
    "id": "d072",
    "difficulty": "medio-difícil",
    "clue": "Objeto o asunto queda cuando cosas pierde su cola. (4)",
    "answer": "COSA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Objeto",
    "fodder": "COSAS",
    "indicators": [
      "pierde su cola"
    ],
    "explanation": "«Objeto o asunto» define COSA. Al quitar la letra indicada por «pierde su cola», COSAS queda COSA."
  },
  {
    "id": "d073",
    "difficulty": "medio-difícil",
    "clue": "Fruta seca queda cuando pasas pierde su cola. (4)",
    "answer": "PASA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Fruta seca",
    "fodder": "PASAS",
    "indicators": [
      "pierde su cola"
    ],
    "explanation": "«Fruta seca» define PASA. Al quitar la letra indicada por «pierde su cola», PASAS queda PASA."
  },
  {
    "id": "d074",
    "difficulty": "medio-difícil",
    "clue": "Instrumento para pesar queda cuando pesas pierde su cola. (4)",
    "answer": "PESA",
    "mechanisms": [
      "deletion"
    ],
    "definition": "Instrumento para pesar",
    "fodder": "PESAS",
    "indicators": [
      "pierde su cola"
    ],
    "explanation": "«Instrumento para pesar» define PESA. Al quitar la letra indicada por «pierde su cola», PESAS queda PESA."
  },
  {
    "id": "d075",
    "difficulty": "medio-difícil",
    "clue": "Comida mexicana que aparece cuando ocat va retornado. (4)",
    "answer": "TACO",
    "mechanisms": [
      "reversal"
    ],
    "definition": "Comida mexicana",
    "fodder": "OCAT",
    "indicators": [
      "retornado"
    ],
    "explanation": "«Comida mexicana» define TACO. Al leer OCAT retornado, se obtiene TACO."
  },
  {
    "id": "d076",
    "difficulty": "medio-difícil",
    "clue": "Asiento… y también entidad financiera. (5)",
    "answer": "BANCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Asiento",
    "fodder": "Asiento",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen BANCO: «Asiento» y «entidad financiera»."
  },
  {
    "id": "d077",
    "difficulty": "medio-difícil",
    "clue": "Mensaje escrito… y también menú. (5)",
    "answer": "CARTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mensaje escrito",
    "fodder": "Mensaje escrito",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen CARTA: «Mensaje escrito» y «menú»."
  },
  {
    "id": "d078",
    "difficulty": "medio-difícil",
    "clue": "Llave… y también dato que permite acceder. (5)",
    "answer": "CLAVE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Llave",
    "fodder": "Llave",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen CLAVE: «Llave» y «dato que permite acceder»."
  },
  {
    "id": "d079",
    "difficulty": "medio-difícil",
    "clue": "Adorno real… y también enfermedad causada por un virus. (6)",
    "answer": "CORONA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Adorno real",
    "fodder": "Adorno real",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen CORONA: «Adorno real» y «enfermedad causada por un virus»."
  },
  {
    "id": "d080",
    "difficulty": "medio-difícil",
    "clue": "Vegetal… y también piso de un edificio. (6)",
    "answer": "PLANTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vegetal",
    "fodder": "Vegetal",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen PLANTA: «Vegetal» y «piso de un edificio»."
  },
  {
    "id": "d081",
    "difficulty": "medio-difícil",
    "clue": "Roedor… y también dispositivo de ordenador. (5)",
    "answer": "RATON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Roedor",
    "fodder": "Roedor",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen RATON: «Roedor» y «dispositivo de ordenador»."
  },
  {
    "id": "d082",
    "difficulty": "medio-difícil",
    "clue": "Ciudad principal… y también dinero invertido. (7)",
    "answer": "CAPITAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ciudad principal",
    "fodder": "Ciudad principal",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen CAPITAL: «Ciudad principal» y «dinero invertido»."
  },
  {
    "id": "d083",
    "difficulty": "medio-difícil",
    "clue": "Parte de una herramienta… y también fruta tropical. (5)",
    "answer": "MANGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de una herramienta",
    "fodder": "Parte de una herramienta",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen MANGO: «Parte de una herramienta» y «fruta tropical»."
  },
  {
    "id": "d084",
    "difficulty": "medio-difícil",
    "clue": "Saco flexible… y también mercado de valores. (5)",
    "answer": "BOLSA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Saco flexible",
    "fodder": "Saco flexible",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen BOLSA: «Saco flexible» y «mercado de valores»."
  },
  {
    "id": "d085",
    "difficulty": "medio-difícil",
    "clue": "Parte de un ave… y también cima puntiaguda. (4)",
    "answer": "PICO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de un ave",
    "fodder": "Parte de un ave",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen PICO: «Parte de un ave» y «cima puntiaguda»."
  },
  {
    "id": "d086",
    "difficulty": "medio-difícil",
    "clue": "Herramienta dentada… y también cordillera. (6)",
    "answer": "SIERRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Herramienta dentada",
    "fodder": "Herramienta dentada",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen SIERRA: «Herramienta dentada» y «cordillera»."
  },
  {
    "id": "d087",
    "difficulty": "medio-difícil",
    "clue": "Objeto que arde… y también pieza de un barco. (4)",
    "answer": "VELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que arde",
    "fodder": "Objeto que arde",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen VELA: «Objeto que arde» y «pieza de un barco»."
  },
  {
    "id": "d088",
    "difficulty": "medio-difícil",
    "clue": "Recipiente para comer… y también parte de una balanza. (5)",
    "answer": "PLATO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recipiente para comer",
    "fodder": "Recipiente para comer",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen PLATO: «Recipiente para comer» y «parte de una balanza»."
  },
  {
    "id": "d089",
    "difficulty": "medio-difícil",
    "clue": "Aparato de comunicación… y también segmento del círculo. (5)",
    "answer": "RADIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Aparato de comunicación",
    "fodder": "Aparato de comunicación",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen RADIO: «Aparato de comunicación» y «segmento del círculo»."
  },
  {
    "id": "d090",
    "difficulty": "medio-difícil",
    "clue": "Parte delantera… y también línea de combate. (6)",
    "answer": "FRENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte delantera",
    "fodder": "Parte delantera",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen FRENTE: «Parte delantera» y «línea de combate»."
  },
  {
    "id": "d091",
    "difficulty": "medio-difícil",
    "clue": "Embarcación… y también espacio de una iglesia. (4)",
    "answer": "NAVE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Embarcación",
    "fodder": "Embarcación",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen NAVE: «Embarcación» y «espacio de una iglesia»."
  },
  {
    "id": "d092",
    "difficulty": "medio-difícil",
    "clue": "Tira… y también grupo musical. (5)",
    "answer": "BANDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tira",
    "fodder": "Tira",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen BANDA: «Tira» y «grupo musical»."
  },
  {
    "id": "d093",
    "difficulty": "medio-difícil",
    "clue": "Terreno rural… y también ámbito de actividad. (5)",
    "answer": "CAMPO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Terreno rural",
    "fodder": "Terreno rural",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen CAMPO: «Terreno rural» y «ámbito de actividad»."
  },
  {
    "id": "d094",
    "difficulty": "medio-difícil",
    "clue": "Sacerdote… y también remedio. (4)",
    "answer": "CURA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sacerdote",
    "fodder": "Sacerdote",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen CURA: «Sacerdote» y «remedio»."
  },
  {
    "id": "d095",
    "difficulty": "medio-difícil",
    "clue": "Nivel… y también unidad de temperatura. (5)",
    "answer": "GRADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Nivel",
    "fodder": "Nivel",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen GRADO: «Nivel» y «unidad de temperatura»."
  },
  {
    "id": "d096",
    "difficulty": "medio-difícil",
    "clue": "Señal… y también empresa comercial. (5)",
    "answer": "MARCA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Señal",
    "fodder": "Señal",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen MARCA: «Señal» y «empresa comercial»."
  },
  {
    "id": "d097",
    "difficulty": "medio-difícil",
    "clue": "Desplazamiento… y también funcionamiento. (6)",
    "answer": "MARCHA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Desplazamiento",
    "fodder": "Desplazamiento",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen MARCHA: «Desplazamiento» y «funcionamiento»."
  },
  {
    "id": "d098",
    "difficulty": "medio-difícil",
    "clue": "Señal pequeña… y también momento determinado. (5)",
    "answer": "PUNTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Señal pequeña",
    "fodder": "Señal pequeña",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen PUNTO: «Señal pequeña» y «momento determinado»."
  },
  {
    "id": "d099",
    "difficulty": "medio-difícil",
    "clue": "Espacio público… y también puesto de trabajo. (5)",
    "answer": "PLAZA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio público",
    "fodder": "Espacio público",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen PLAZA: «Espacio público» y «puesto de trabajo»."
  },
  {
    "id": "d100",
    "difficulty": "medio-difícil",
    "clue": "Máquina… y también alrededor de. (5)",
    "answer": "TORNO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Máquina",
    "fodder": "Máquina",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen TORNO: «Máquina» y «alrededor de»."
  },
  {
    "id": "d101",
    "difficulty": "medio-difícil",
    "clue": "Acción de cortar… y también tribunal real. (5)",
    "answer": "CORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de cortar",
    "fodder": "Acción de cortar",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen CORTE: «Acción de cortar» y «tribunal real»."
  },
  {
    "id": "d102",
    "difficulty": "medio-difícil",
    "clue": "Orilla del mar… y también precio que algo tiene. (5)",
    "answer": "COSTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Orilla del mar",
    "fodder": "Orilla del mar",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen COSTA: «Orilla del mar» y «precio que algo tiene»."
  },
  {
    "id": "d103",
    "difficulty": "medio-difícil",
    "clue": "Parte posterior del pie… y también recibo numerado. (5)",
    "answer": "TALON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte posterior del pie",
    "fodder": "Parte posterior del pie",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen TALON: «Parte posterior del pie» y «recibo numerado»."
  },
  {
    "id": "d104",
    "difficulty": "medio-difícil",
    "clue": "Pieza alargada… y también local de bebidas. (5)",
    "answer": "BARRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza alargada",
    "fodder": "Pieza alargada",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen BARRA: «Pieza alargada» y «local de bebidas»."
  },
  {
    "id": "d105",
    "difficulty": "medio-difícil",
    "clue": "Conjunto de pilas… y también grupo de instrumentos. (7)",
    "answer": "BATERIA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de pilas",
    "fodder": "Conjunto de pilas",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen BATERIA: «Conjunto de pilas» y «grupo de instrumentos»."
  },
  {
    "id": "d106",
    "difficulty": "medio-difícil",
    "clue": "Objeto que abre… y también solución. (5)",
    "answer": "LLAVE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que abre",
    "fodder": "Objeto que abre",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen LLAVE: «Objeto que abre» y «solución»."
  },
  {
    "id": "d107",
    "difficulty": "medio-difícil",
    "clue": "Altura… y también instrumento para comprobar horizontalidad. (5)",
    "answer": "NIVEL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Altura",
    "fodder": "Altura",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen NIVEL: «Altura» y «instrumento para comprobar horizontalidad»."
  },
  {
    "id": "d108",
    "difficulty": "medio-difícil",
    "clue": "Parte de una prenda… y también fruta tropical. (5)",
    "answer": "MANGA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de una prenda",
    "fodder": "Parte de una prenda",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen MANGA: «Parte de una prenda» y «fruta tropical»."
  },
  {
    "id": "d109",
    "difficulty": "medio-difícil",
    "clue": "Fragmento de texto… y también lugar para pasar. (6)",
    "answer": "PASAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fragmento de texto",
    "fodder": "Fragmento de texto",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen PASAJE: «Fragmento de texto» y «lugar para pasar»."
  },
  {
    "id": "d110",
    "difficulty": "medio-difícil",
    "clue": "Lanzamiento… y también edición impresa. (6)",
    "answer": "TIRADA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lanzamiento",
    "fodder": "Lanzamiento",
    "indicators": [],
    "explanation": "Las dos partes de la pista definen TIRADA: «Lanzamiento» y «edición impresa»."
  },
  {
    "id": "d111",
    "difficulty": "difícil",
    "clue": "Trayecto: ca + mi + no, encadenado con. (6)",
    "answer": "CAMINO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Trayecto",
    "fodder": "CA + MI + NO",
    "indicators": [
      "encadenado con"
    ],
    "explanation": "«Trayecto» define CAMINO. Un trayecto se arma con CA, MI y NO, unidos sin separación."
  },
  {
    "id": "d112",
    "difficulty": "difícil",
    "clue": "Del mar: mar + ino, seguido de. (6)",
    "answer": "MARINO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Del mar",
    "fodder": "MAR + INO",
    "indicators": [
      "seguido de"
    ],
    "explanation": "«Del mar» define MARINO. MAR seguido de INO forma MARINO."
  },
  {
    "id": "d113",
    "difficulty": "difícil",
    "clue": "Prenda de vestir: ca + misa, junto a. (6)",
    "answer": "CAMISA",
    "mechanisms": [
      "charade"
    ],
    "definition": "Prenda de vestir",
    "fodder": "CA + MISA",
    "indicators": [
      "junto a"
    ],
    "explanation": "«Prenda de vestir» define CAMISA. CA junto a MISA forma CAMISA."
  },
  {
    "id": "d114",
    "difficulty": "difícil",
    "clue": "Caminata: pa + seo, junto a. (5)",
    "answer": "PASEO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Caminata",
    "fodder": "PA + SEO",
    "indicators": [
      "junto a"
    ],
    "explanation": "«Caminata» define PASEO. PA junto a SEO forma PASEO."
  },
  {
    "id": "d115",
    "difficulty": "difícil",
    "clue": "Acción de salir: sal + ida, seguido de. (6)",
    "answer": "SALIDA",
    "mechanisms": [
      "charade"
    ],
    "definition": "Acción de salir",
    "fodder": "SAL + IDA",
    "indicators": [
      "seguido de"
    ],
    "explanation": "«Acción de salir» define SALIDA. SAL seguido de IDA forma SALIDA."
  },
  {
    "id": "d116",
    "difficulty": "difícil",
    "clue": "Acción publicitaria: cam + paña, seguido de. (7)",
    "answer": "CAMPAÑA",
    "mechanisms": [
      "charade"
    ],
    "definition": "Acción publicitaria",
    "fodder": "CAM + PAÑA",
    "indicators": [
      "seguido de"
    ],
    "explanation": "«Acción publicitaria» define CAMPAÑA. CAM seguido de PAÑA forma CAMPAÑA."
  },
  {
    "id": "d117",
    "difficulty": "difícil",
    "clue": "Herramienta: mar + tillo, seguido de. (8)",
    "answer": "MARTILLO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Herramienta",
    "fodder": "MAR + TILLO",
    "indicators": [
      "seguido de"
    ],
    "explanation": "«Herramienta» define MARTILLO. MAR seguido de TILLO forma MARTILLO."
  },
  {
    "id": "d118",
    "difficulty": "difícil",
    "clue": "Dulce: car + amelo, encadenado con. (8)",
    "answer": "CARAMELO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Dulce",
    "fodder": "CAR + AMELO",
    "indicators": [
      "encadenado con"
    ],
    "explanation": "«Dulce» define CARAMELO. CAR unido a AMELO forma CARAMELO."
  },
  {
    "id": "d119",
    "difficulty": "difícil",
    "clue": "Actividad para entretenerse: pasa + tiempo, seguido de. (10)",
    "answer": "PASATIEMPO",
    "mechanisms": [
      "charade"
    ],
    "definition": "Actividad para entretenerse",
    "fodder": "PASA + TIEMPO",
    "indicators": [
      "seguido de"
    ],
    "explanation": "«Actividad para entretenerse» define PASATIEMPO. PASA seguido de TIEMPO forma PASATIEMPO."
  },
  {
    "id": "d120",
    "difficulty": "difícil",
    "clue": "Objeto puntiagudo… pero también indicador de un reloj. (5)",
    "answer": "AGUJA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto puntiagudo",
    "fodder": "Objeto puntiagudo",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a AGUJA: «Objeto puntiagudo» y «indicador de un reloj»."
  },
  {
    "id": "d121",
    "difficulty": "difícil",
    "clue": "Extremidades para volar… pero también piezas laterales. (4)",
    "answer": "ALAS",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremidades para volar",
    "fodder": "Extremidades para volar",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a ALAS: «Extremidades para volar» y «piezas laterales»."
  },
  {
    "id": "d122",
    "difficulty": "difícil",
    "clue": "De gran altura… pero también detención. (4)",
    "answer": "ALTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "De gran altura",
    "fodder": "De gran altura",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a ALTO: «De gran altura» y «detención»."
  },
  {
    "id": "d123",
    "difficulty": "difícil",
    "clue": "Material de playa… pero también recinto deportivo. (5)",
    "answer": "ARENA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material de playa",
    "fodder": "Material de playa",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a ARENA: «Material de playa» y «recinto deportivo»."
  },
  {
    "id": "d124",
    "difficulty": "difícil",
    "clue": "Instrumento para atacar… pero también verbo armar. (4)",
    "answer": "ARMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Instrumento para atacar",
    "fodder": "Instrumento para atacar",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a ARMA: «Instrumento para atacar» y «verbo armar»."
  },
  {
    "id": "d125",
    "difficulty": "difícil",
    "clue": "Lugar para sentarse… pero también acción de asentar. (7)",
    "answer": "ASIENTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar para sentarse",
    "fodder": "Lugar para sentarse",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a ASIENTO: «Lugar para sentarse» y «acción de asentar»."
  },
  {
    "id": "d126",
    "difficulty": "difícil",
    "clue": "Advertencia… pero también acción de avisar. (5)",
    "answer": "AVISO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Advertencia",
    "fodder": "Advertencia",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a AVISO: «Advertencia» y «acción de avisar»."
  },
  {
    "id": "d127",
    "difficulty": "difícil",
    "clue": "Proyectil… pero también unidad de heno. (4)",
    "answer": "BALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Proyectil",
    "fodder": "Proyectil",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a BALA: «Proyectil» y «unidad de heno»."
  },
  {
    "id": "d128",
    "difficulty": "difícil",
    "clue": "Embarcación… pero también pieza de un juego. (5)",
    "answer": "BARCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Embarcación",
    "fodder": "Embarcación",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a BARCO: «Embarcación» y «pieza de un juego»."
  },
  {
    "id": "d129",
    "difficulty": "difícil",
    "clue": "Contacto afectuoso… pero también marca de humedad. (4)",
    "answer": "BESO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Contacto afectuoso",
    "fodder": "Contacto afectuoso",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a BESO: «Contacto afectuoso» y «marca de humedad»."
  },
  {
    "id": "d130",
    "difficulty": "difícil",
    "clue": "Pieza maciza… pero también grupo de edificios. (6)",
    "answer": "BLOQUE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza maciza",
    "fodder": "Pieza maciza",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a BLOQUE: «Pieza maciza» y «grupo de edificios»."
  },
  {
    "id": "d131",
    "difficulty": "difícil",
    "clue": "Parte del cuerpo… pero también entrada. (4)",
    "answer": "BOCA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte del cuerpo",
    "fodder": "Parte del cuerpo",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a BOCA: «Parte del cuerpo» y «entrada»."
  },
  {
    "id": "d132",
    "difficulty": "difícil",
    "clue": "Calzado… pero también recipiente de cuero. (4)",
    "answer": "BOTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Calzado",
    "fodder": "Calzado",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a BOTA: «Calzado» y «recipiente de cuero»."
  },
  {
    "id": "d133",
    "difficulty": "difícil",
    "clue": "Parte del cuerpo… pero también lado de una grúa. (5)",
    "answer": "BRAZO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte del cuerpo",
    "fodder": "Parte del cuerpo",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a BRAZO: «Parte del cuerpo» y «lado de una grúa»."
  },
  {
    "id": "d134",
    "difficulty": "difícil",
    "clue": "Viento suave… pero también nombre propio poético. (5)",
    "answer": "BRISA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Viento suave",
    "fodder": "Viento suave",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a BRISA: «Viento suave» y «nombre propio poético»."
  },
  {
    "id": "d135",
    "difficulty": "difícil",
    "clue": "Salida de una planta… pero también aparición repentina. (5)",
    "answer": "BROTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Salida de una planta",
    "fodder": "Salida de una planta",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a BROTE: «Salida de una planta» y «aparición repentina»."
  },
  {
    "id": "d136",
    "difficulty": "difícil",
    "clue": "Conductor… pero también cuerda gruesa. (5)",
    "answer": "CABLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conductor",
    "fodder": "Conductor",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CABLE: «Conductor» y «cuerda gruesa»."
  },
  {
    "id": "d137",
    "difficulty": "difícil",
    "clue": "Recipiente… pero también institución de ahorro. (4)",
    "answer": "CAJA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recipiente",
    "fodder": "Recipiente",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CAJA: «Recipiente» y «institución de ahorro»."
  },
  {
    "id": "d138",
    "difficulty": "difícil",
    "clue": "Vía urbana… pero también expresión de paso. (5)",
    "answer": "CALLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vía urbana",
    "fodder": "Vía urbana",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CALLE: «Vía urbana» y «expresión de paso»."
  },
  {
    "id": "d139",
    "difficulty": "difícil",
    "clue": "Temperatura elevada… pero también afecto. (5)",
    "answer": "CALOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Temperatura elevada",
    "fodder": "Temperatura elevada",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CALOR: «Temperatura elevada» y «afecto»."
  },
  {
    "id": "d140",
    "difficulty": "difícil",
    "clue": "Conducto… pero también estación de televisión. (5)",
    "answer": "CANAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conducto",
    "fodder": "Conducto",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CANAL: «Conducto» y «estación de televisión»."
  },
  {
    "id": "d141",
    "difficulty": "difícil",
    "clue": "Rostro… pero también superficie. (4)",
    "answer": "CARA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Rostro",
    "fodder": "Rostro",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CARA: «Rostro» y «superficie»."
  },
  {
    "id": "d142",
    "difficulty": "difícil",
    "clue": "Peso transportado… pero también acción de cargar. (5)",
    "answer": "CARGA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Peso transportado",
    "fodder": "Peso transportado",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CARGA: «Peso transportado» y «acción de cargar»."
  },
  {
    "id": "d143",
    "difficulty": "difícil",
    "clue": "Tejido animal… pero también parte carnosa. (5)",
    "answer": "CARNE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tejido animal",
    "fodder": "Tejido animal",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CARNE: «Tejido animal» y «parte carnosa»."
  },
  {
    "id": "d144",
    "difficulty": "difícil",
    "clue": "Protección para la cabeza… pero también parte de una nave. (5)",
    "answer": "CASCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Protección para la cabeza",
    "fodder": "Protección para la cabeza",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CASCO: «Protección para la cabeza» y «parte de una nave»."
  },
  {
    "id": "d145",
    "difficulty": "difícil",
    "clue": "Motivo… pero también proceso judicial. (5)",
    "answer": "CAUSA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Motivo",
    "fodder": "Motivo",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CAUSA: «Motivo» y «proceso judicial»."
  },
  {
    "id": "d146",
    "difficulty": "difícil",
    "clue": "Firmamento… pero también techo pintado. (5)",
    "answer": "CIELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Firmamento",
    "fodder": "Firmamento",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CIELO: «Firmamento» y «techo pintado»."
  },
  {
    "id": "d147",
    "difficulty": "difícil",
    "clue": "Tira flexible… pero también película grabada. (5)",
    "answer": "CINTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tira flexible",
    "fodder": "Tira flexible",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CINTA: «Tira flexible» y «película grabada»."
  },
  {
    "id": "d148",
    "difficulty": "difícil",
    "clue": "Grupo de alumnos… pero también categoría. (5)",
    "answer": "CLASE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Grupo de alumnos",
    "fodder": "Grupo de alumnos",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CLASE: «Grupo de alumnos» y «categoría»."
  },
  {
    "id": "d149",
    "difficulty": "difícil",
    "clue": "Pieza metálica… pero también verbo clavar. (5)",
    "answer": "CLAVO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza metálica",
    "fodder": "Pieza metálica",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CLAVO: «Pieza metálica» y «verbo clavar»."
  },
  {
    "id": "d150",
    "difficulty": "difícil",
    "clue": "Parte trasera… pero también fila. (4)",
    "answer": "COLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte trasera",
    "fodder": "Parte trasera",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a COLA: «Parte trasera» y «fila»."
  },
  {
    "id": "d151",
    "difficulty": "difícil",
    "clue": "Tono visual… pero también sustancia para teñir. (5)",
    "answer": "COLOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tono visual",
    "fodder": "Tono visual",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a COLOR: «Tono visual» y «sustancia para teñir»."
  },
  {
    "id": "d152",
    "difficulty": "difícil",
    "clue": "Pintura… pero también cuadrícula. (6)",
    "answer": "CUADRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pintura",
    "fodder": "Pintura",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CUADRO: «Pintura» y «cuadrícula»."
  },
  {
    "id": "d153",
    "difficulty": "difícil",
    "clue": "Soga… pero también conjunto de notas. (6)",
    "answer": "CUERDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Soga",
    "fodder": "Soga",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CUERDA: «Soga» y «conjunto de notas»."
  },
  {
    "id": "d154",
    "difficulty": "difícil",
    "clue": "Trayectoria… pero también año académico. (5)",
    "answer": "CURSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Trayectoria",
    "fodder": "Trayectoria",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a CURSO: «Trayectoria» y «año académico»."
  },
  {
    "id": "d155",
    "difficulty": "difícil",
    "clue": "Cubo de juego… pero también participio de dar. (4)",
    "answer": "DADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cubo de juego",
    "fodder": "Cubo de juego",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a DADO: «Cubo de juego» y «participio de dar»."
  },
  {
    "id": "d156",
    "difficulty": "difícil",
    "clue": "Mujer distinguida… pero también pieza de ajedrez. (4)",
    "answer": "DAMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mujer distinguida",
    "fodder": "Mujer distinguida",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a DAMA: «Mujer distinguida» y «pieza de ajedrez»."
  },
  {
    "id": "d157",
    "difficulty": "difícil",
    "clue": "Información… pero también plural de dado en algunos usos técnicos. (4)",
    "answer": "DATO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Información",
    "fodder": "Información",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a DATO: «Información» y «plural de dado en algunos usos técnicos»."
  },
  {
    "id": "d158",
    "difficulty": "difícil",
    "clue": "Parte de la mano… pero también pequeña cantidad. (4)",
    "answer": "DEDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de la mano",
    "fodder": "Parte de la mano",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a DEDO: «Parte de la mano» y «pequeña cantidad»."
  },
  {
    "id": "d159",
    "difficulty": "difícil",
    "clue": "Pieza dental… pero también saliente de una sierra. (6)",
    "answer": "DIENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza dental",
    "fodder": "Pieza dental",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a DIENTE: «Pieza dental» y «saliente de una sierra»."
  },
  {
    "id": "d160",
    "difficulty": "difícil",
    "clue": "Dos veces… pero también persona que sustituye a otra. (5)",
    "answer": "DOBLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Dos veces",
    "fodder": "Dos veces",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a DOBLE: «Dos veces» y «persona que sustituye a otra»."
  },
  {
    "id": "d161",
    "difficulty": "difícil",
    "clue": "Sensación física… pero también pena moral. (5)",
    "answer": "DOLOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sensación física",
    "fodder": "Sensación física",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a DOLOR: «Sensación física» y «pena moral»."
  },
  {
    "id": "d162",
    "difficulty": "difícil",
    "clue": "Espalda… pero también reverso. (5)",
    "answer": "DORSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espalda",
    "fodder": "Espalda",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a DORSO: «Espalda» y «reverso»."
  },
  {
    "id": "d163",
    "difficulty": "difícil",
    "clue": "Sabor… pero también persona amable. (5)",
    "answer": "DULCE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sabor",
    "fodder": "Sabor",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a DULCE: «Sabor» y «persona amable»."
  },
  {
    "id": "d164",
    "difficulty": "difícil",
    "clue": "Repetición de un sonido… pero también reverberación. (3)",
    "answer": "ECO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Repetición de un sonido",
    "fodder": "Repetición de un sonido",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a ECO: «Repetición de un sonido» y «reverberación»."
  },
  {
    "id": "d165",
    "difficulty": "difícil",
    "clue": "Tiempo vivido… pero también época. (4)",
    "answer": "EDAD",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Tiempo vivido",
    "fodder": "Tiempo vivido",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a EDAD: «Tiempo vivido» y «época»."
  },
  {
    "id": "d166",
    "difficulty": "difícil",
    "clue": "Utensilio… pero también figura que se estrecha. (6)",
    "answer": "EMBUDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Utensilio",
    "fodder": "Utensilio",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a EMBUDO: «Utensilio» y «figura que se estrecha»."
  },
  {
    "id": "d167",
    "difficulty": "difícil",
    "clue": "Serie graduada… pero también parada intermedia. (6)",
    "answer": "ESCALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Serie graduada",
    "fodder": "Serie graduada",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a ESCALA: «Serie graduada» y «parada intermedia»."
  },
  {
    "id": "d168",
    "difficulty": "difícil",
    "clue": "Superficie reflectante… pero también persona que refleja otra. (6)",
    "answer": "ESPEJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie reflectante",
    "fodder": "Superficie reflectante",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a ESPEJO: «Superficie reflectante» y «persona que refleja otra»."
  },
  {
    "id": "d169",
    "difficulty": "difícil",
    "clue": "Lugar de trenes… pero también época del año. (8)",
    "answer": "ESTACION",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar de trenes",
    "fodder": "Lugar de trenes",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a ESTACION: «Lugar de trenes» y «época del año»."
  },
  {
    "id": "d170",
    "difficulty": "difícil",
    "clue": "Prenda… pero también parte baja de una montaña. (5)",
    "answer": "FALDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda",
    "fodder": "Prenda",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a FALDA: «Prenda» y «parte baja de una montaña»."
  },
  {
    "id": "d171",
    "difficulty": "difícil",
    "clue": "Torre luminosa… pero también punto de referencia. (4)",
    "answer": "FARO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Torre luminosa",
    "fodder": "Torre luminosa",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a FARO: «Torre luminosa» y «punto de referencia»."
  },
  {
    "id": "d172",
    "difficulty": "difícil",
    "clue": "Pieza de juego… pero también registro. (5)",
    "answer": "FICHA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza de juego",
    "fodder": "Pieza de juego",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a FICHA: «Pieza de juego» y «registro»."
  },
  {
    "id": "d173",
    "difficulty": "difícil",
    "clue": "Nombre escrito… pero también empresa. (5)",
    "answer": "FIRMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Nombre escrito",
    "fodder": "Nombre escrito",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a FIRMA: «Nombre escrito» y «empresa»."
  },
  {
    "id": "d174",
    "difficulty": "difícil",
    "clue": "Parte inferior… pero también dinero disponible. (5)",
    "answer": "FONDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte inferior",
    "fodder": "Parte inferior",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a FONDO: «Parte inferior» y «dinero disponible»."
  },
  {
    "id": "d175",
    "difficulty": "difícil",
    "clue": "Figura… pero también manera. (5)",
    "answer": "FORMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Figura",
    "fodder": "Figura",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a FORMA: «Figura» y «manera»."
  },
  {
    "id": "d176",
    "difficulty": "difícil",
    "clue": "Combustión… pero también pasión. (5)",
    "answer": "FUEGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Combustión",
    "fodder": "Combustión",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a FUEGO: «Combustión» y «pasión»."
  },
  {
    "id": "d177",
    "difficulty": "difícil",
    "clue": "Anteojos… pero también protección visual. (5)",
    "answer": "GAFAS",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Anteojos",
    "fodder": "Anteojos",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a GAFAS: «Anteojos» y «protección visual»."
  },
  {
    "id": "d178",
    "difficulty": "difícil",
    "clue": "Ave doméstica… pero también persona cobarde. (7)",
    "answer": "GALLINA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ave doméstica",
    "fodder": "Ave doméstica",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a GALLINA: «Ave doméstica» y «persona cobarde»."
  },
  {
    "id": "d179",
    "difficulty": "difícil",
    "clue": "Material elástico… pero también borrador. (4)",
    "answer": "GOMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material elástico",
    "fodder": "Material elástico",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a GOMA: «Material elástico» y «borrador»."
  },
  {
    "id": "d180",
    "difficulty": "difícil",
    "clue": "Pequeña cantidad líquida… pero también gotera. (4)",
    "answer": "GOTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pequeña cantidad líquida",
    "fodder": "Pequeña cantidad líquida",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a GOTA: «Pequeña cantidad líquida» y «gotera»."
  },
  {
    "id": "d181",
    "difficulty": "difícil",
    "clue": "Voz fuerte… pero también acción de gritar. (5)",
    "answer": "GRITO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Voz fuerte",
    "fodder": "Voz fuerte",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a GRITO: «Voz fuerte» y «acción de gritar»."
  },
  {
    "id": "d182",
    "difficulty": "difícil",
    "clue": "Hebra… pero también secuencia. (4)",
    "answer": "HILO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Hebra",
    "fodder": "Hebra",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a HILO: «Hebra» y «secuencia»."
  },
  {
    "id": "d183",
    "difficulty": "difícil",
    "clue": "Parte de una planta… pero también lámina. (4)",
    "answer": "HOJA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de una planta",
    "fodder": "Parte de una planta",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a HOJA: «Parte de una planta» y «lámina»."
  },
  {
    "id": "d184",
    "difficulty": "difícil",
    "clue": "Parte dura del cuerpo… pero también pieza de fruta. (5)",
    "answer": "HUESO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte dura del cuerpo",
    "fodder": "Parte dura del cuerpo",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a HUESO: «Parte dura del cuerpo» y «pieza de fruta»."
  },
  {
    "id": "d185",
    "difficulty": "difícil",
    "clue": "Producto de combustión… pero también señal engañosa. (4)",
    "answer": "HUMO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Producto de combustión",
    "fodder": "Producto de combustión",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a HUMO: «Producto de combustión» y «señal engañosa»."
  },
  {
    "id": "d186",
    "difficulty": "difícil",
    "clue": "Concepto… pero también ocurrencia. (4)",
    "answer": "IDEA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Concepto",
    "fodder": "Concepto",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a IDEA: «Concepto» y «ocurrencia»."
  },
  {
    "id": "d187",
    "difficulty": "difícil",
    "clue": "Representación… pero también apariencia. (6)",
    "answer": "IMAGEN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación",
    "fodder": "Representación",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a IMAGEN: «Representación» y «apariencia»."
  },
  {
    "id": "d188",
    "difficulty": "difícil",
    "clue": "Actividad lúdica… pero también conjunto de piezas. (5)",
    "answer": "JUEGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Actividad lúdica",
    "fodder": "Actividad lúdica",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a JUEGO: «Actividad lúdica» y «conjunto de piezas»."
  },
  {
    "id": "d189",
    "difficulty": "difícil",
    "clue": "Órgano… pero también idioma. (6)",
    "answer": "LENGUA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Órgano",
    "fodder": "Órgano",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a LENGUA: «Órgano» y «idioma»."
  },
  {
    "id": "d190",
    "difficulty": "difícil",
    "clue": "Trazo… pero también servicio de transporte. (5)",
    "answer": "LINEA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Trazo",
    "fodder": "Trazo",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a LINEA: «Trazo» y «servicio de transporte»."
  },
  {
    "id": "d191",
    "difficulty": "difícil",
    "clue": "Animal andino… pero también fuego. (5)",
    "answer": "LLAMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Animal andino",
    "fodder": "Animal andino",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a LLAMA: «Animal andino» y «fuego»."
  },
  {
    "id": "d192",
    "difficulty": "difícil",
    "clue": "Iluminación… pero también claridad mental. (3)",
    "answer": "LUZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Iluminación",
    "fodder": "Iluminación",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a LUZ: «Iluminación» y «claridad mental»."
  },
  {
    "id": "d193",
    "difficulty": "difícil",
    "clue": "Parte del cuerpo… pero también ayuda. (4)",
    "answer": "MANO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte del cuerpo",
    "fodder": "Parte del cuerpo",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a MANO: «Parte del cuerpo» y «ayuda»."
  },
  {
    "id": "d194",
    "difficulty": "difícil",
    "clue": "Representación geográfica… pero también esquema. (4)",
    "answer": "MAPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación geográfica",
    "fodder": "Representación geográfica",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a MAPA: «Representación geográfica» y «esquema»."
  },
  {
    "id": "d195",
    "difficulty": "difícil",
    "clue": "Masa de agua… pero también abundancia. (3)",
    "answer": "MAR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Masa de agua",
    "fodder": "Masa de agua",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a MAR: «Masa de agua» y «abundancia»."
  },
  {
    "id": "d196",
    "difficulty": "difícil",
    "clue": "Borde… pero también estructura. (5)",
    "answer": "MARCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde",
    "fodder": "Borde",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a MARCO: «Borde» y «estructura»."
  },
  {
    "id": "d197",
    "difficulty": "difícil",
    "clue": "Cantidad de materia… pero también mezcla culinaria. (4)",
    "answer": "MASA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cantidad de materia",
    "fodder": "Cantidad de materia",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a MASA: «Cantidad de materia» y «mezcla culinaria»."
  },
  {
    "id": "d198",
    "difficulty": "difícil",
    "clue": "Máquina… pero también causa que impulsa. (5)",
    "answer": "MOTOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Máquina",
    "fodder": "Máquina",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a MOTOR: «Máquina» y «causa que impulsa»."
  },
  {
    "id": "d199",
    "difficulty": "difícil",
    "clue": "Pared… pero también límite. (4)",
    "answer": "MURO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pared",
    "fodder": "Pared",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a MURO: «Pared» y «límite»."
  },
  {
    "id": "d200",
    "difficulty": "difícil",
    "clue": "Masa atmosférica… pero también servicio informático. (4)",
    "answer": "NUBE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Masa atmosférica",
    "fodder": "Masa atmosférica",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a NUBE: «Masa atmosférica» y «servicio informático»."
  },
  {
    "id": "d201",
    "difficulty": "difícil",
    "clue": "Cantidad… pero también publicación periódica. (6)",
    "answer": "NUMERO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cantidad",
    "fodder": "Cantidad",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a NUMERO: «Cantidad» y «publicación periódica»."
  },
  {
    "id": "d202",
    "difficulty": "difícil",
    "clue": "Creación artística… pero también trabajo. (4)",
    "answer": "OBRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Creación artística",
    "fodder": "Creación artística",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a OBRA: «Creación artística» y «trabajo»."
  },
  {
    "id": "d203",
    "difficulty": "difícil",
    "clue": "Movimiento del mar… pero también saludo. (3)",
    "answer": "OLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Movimiento del mar",
    "fodder": "Movimiento del mar",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a OLA: «Movimiento del mar» y «saludo»."
  },
  {
    "id": "d204",
    "difficulty": "difícil",
    "clue": "Mandato… pero también disposición. (5)",
    "answer": "ORDEN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mandato",
    "fodder": "Mandato",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a ORDEN: «Mandato» y «disposición»."
  },
  {
    "id": "d205",
    "difficulty": "difícil",
    "clue": "Herramienta… pero también parte de una hélice. (4)",
    "answer": "PALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Herramienta",
    "fodder": "Herramienta",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PALA: «Herramienta» y «parte de una hélice»."
  },
  {
    "id": "d206",
    "difficulty": "difícil",
    "clue": "Árbol… pero también parte de la mano. (5)",
    "answer": "PALMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Árbol",
    "fodder": "Árbol",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PALMA: «Árbol» y «parte de la mano»."
  },
  {
    "id": "d207",
    "difficulty": "difícil",
    "clue": "Muro… pero también frontera. (5)",
    "answer": "PARED",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Muro",
    "fodder": "Muro",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PARED: «Muro» y «frontera»."
  },
  {
    "id": "d208",
    "difficulty": "difícil",
    "clue": "Porción… pero también informe. (5)",
    "answer": "PARTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Porción",
    "fodder": "Porción",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PARTE: «Porción» y «informe»."
  },
  {
    "id": "d209",
    "difficulty": "difícil",
    "clue": "Cabello… pero también fibra. (4)",
    "answer": "PELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cabello",
    "fodder": "Cabello",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PELO: «Cabello» y «fibra»."
  },
  {
    "id": "d210",
    "difficulty": "difícil",
    "clue": "Extremidad… pero también base. (3)",
    "answer": "PIE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremidad",
    "fodder": "Extremidad",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PIE: «Extremidad» y «base»."
  },
  {
    "id": "d211",
    "difficulty": "difícil",
    "clue": "Elemento… pero también habitación. (5)",
    "answer": "PIEZA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Elemento",
    "fodder": "Elemento",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PIEZA: «Elemento» y «habitación»."
  },
  {
    "id": "d212",
    "difficulty": "difícil",
    "clue": "Apariencia… pero también unidad de líquido. (5)",
    "answer": "PINTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Apariencia",
    "fodder": "Apariencia",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PINTA: «Apariencia» y «unidad de líquido»."
  },
  {
    "id": "d213",
    "difficulty": "difícil",
    "clue": "Suelo… pero también planta de edificio. (4)",
    "answer": "PISO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Suelo",
    "fodder": "Suelo",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PISO: «Suelo» y «planta de edificio»."
  },
  {
    "id": "d214",
    "difficulty": "difícil",
    "clue": "Sin relieve… pero también dibujo técnico. (5)",
    "answer": "PLANO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sin relieve",
    "fodder": "Sin relieve",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PLANO: «Sin relieve» y «dibujo técnico»."
  },
  {
    "id": "d215",
    "difficulty": "difícil",
    "clue": "Plumaje… pero también instrumento para escribir. (5)",
    "answer": "PLUMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Plumaje",
    "fodder": "Plumaje",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PLUMA: «Plumaje» y «instrumento para escribir»."
  },
  {
    "id": "d216",
    "difficulty": "difícil",
    "clue": "Entrada… pero también oportunidad. (6)",
    "answer": "PUERTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Entrada",
    "fodder": "Entrada",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a PUERTA: «Entrada» y «oportunidad»."
  },
  {
    "id": "d217",
    "difficulty": "difícil",
    "clue": "Parte de una planta… pero también origen. (4)",
    "answer": "RAIZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de una planta",
    "fodder": "Parte de una planta",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a RAIZ: «Parte de una planta» y «origen»."
  },
  {
    "id": "d218",
    "difficulty": "difícil",
    "clue": "Descarga eléctrica… pero también haz de luz. (4)",
    "answer": "RAYO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Descarga eléctrica",
    "fodder": "Descarga eléctrica",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a RAYO: «Descarga eléctrica» y «haz de luz»."
  },
  {
    "id": "d219",
    "difficulty": "difícil",
    "clue": "Malla… pero también sistema de comunicación. (3)",
    "answer": "RED",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Malla",
    "fodder": "Malla",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a RED: «Malla» y «sistema de comunicación»."
  },
  {
    "id": "d220",
    "difficulty": "difícil",
    "clue": "Instrumento para medir el tiempo… pero también persona que vigila. (5)",
    "answer": "RELOJ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Instrumento para medir el tiempo",
    "fodder": "Instrumento para medir el tiempo",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a RELOJ: «Instrumento para medir el tiempo» y «persona que vigila»."
  },
  {
    "id": "d221",
    "difficulty": "difícil",
    "clue": "Desafío… pero también verbo retar. (4)",
    "answer": "RETO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Desafío",
    "fodder": "Desafío",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a RETO: «Desafío» y «verbo retar»."
  },
  {
    "id": "d222",
    "difficulty": "difícil",
    "clue": "Parte circular… pero también acción de rodar. (4)",
    "answer": "RODA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte circular",
    "fodder": "Parte circular",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a RODA: «Parte circular» y «acción de rodar»."
  },
  {
    "id": "d223",
    "difficulty": "difícil",
    "clue": "Color… pero también semáforo en alto. (4)",
    "answer": "ROJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Color",
    "fodder": "Color",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a ROJO: «Color» y «semáforo en alto»."
  },
  {
    "id": "d224",
    "difficulty": "difícil",
    "clue": "Objeto circular… pero también rueda de prensa. (5)",
    "answer": "RUEDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto circular",
    "fodder": "Objeto circular",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a RUEDA: «Objeto circular» y «rueda de prensa»."
  },
  {
    "id": "d225",
    "difficulty": "difícil",
    "clue": "Habitación… pero también reunión judicial. (4)",
    "answer": "SALA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Habitación",
    "fodder": "Habitación",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a SALA: «Habitación» y «reunión judicial»."
  },
  {
    "id": "d226",
    "difficulty": "difícil",
    "clue": "Condimento… pero también verbo salir. (3)",
    "answer": "SAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Condimento",
    "fodder": "Condimento",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a SAL: «Condimento» y «verbo salir»."
  },
  {
    "id": "d227",
    "difficulty": "difícil",
    "clue": "Brinco… pero también desnivel. (5)",
    "answer": "SALTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Brinco",
    "fodder": "Brinco",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a SALTO: «Brinco» y «desnivel»."
  },
  {
    "id": "d228",
    "difficulty": "difícil",
    "clue": "Indicio… pero también signo convencional. (5)",
    "answer": "SENAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Indicio",
    "fodder": "Indicio",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a SENAL: «Indicio» y «signo convencional»."
  },
  {
    "id": "d229",
    "difficulty": "difícil",
    "clue": "Asiento… pero también silla de montar. (5)",
    "answer": "SILLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Asiento",
    "fodder": "Asiento",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a SILLA: «Asiento» y «silla de montar»."
  },
  {
    "id": "d230",
    "difficulty": "difícil",
    "clue": "Superficie… pero también esperanza de caer. (5)",
    "answer": "SUELO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie",
    "fodder": "Superficie",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a SUELO: «Superficie» y «esperanza de caer»."
  },
  {
    "id": "d231",
    "difficulty": "difícil",
    "clue": "Cubierta superior… pero también máximo. (5)",
    "answer": "TECHO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cubierta superior",
    "fodder": "Cubierta superior",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a TECHO: «Cubierta superior» y «máximo»."
  },
  {
    "id": "d232",
    "difficulty": "difícil",
    "clue": "Material textil… pero también pantalla. (4)",
    "answer": "TELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Material textil",
    "fodder": "Material textil",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a TELA: «Material textil» y «pantalla»."
  },
  {
    "id": "d233",
    "difficulty": "difícil",
    "clue": "Planeta… pero también suelo. (6)",
    "answer": "TIERRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Planeta",
    "fodder": "Planeta",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a TIERRA: «Planeta» y «suelo»."
  },
  {
    "id": "d234",
    "difficulty": "difícil",
    "clue": "Construcción alta… pero también pieza de ajedrez. (5)",
    "answer": "TORRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Construcción alta",
    "fodder": "Construcción alta",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a TORRE: «Construcción alta» y «pieza de ajedrez»."
  },
  {
    "id": "d235",
    "difficulty": "difícil",
    "clue": "Argumento… pero también tejido. (5)",
    "answer": "TRAMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Argumento",
    "fodder": "Argumento",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a TRAMA: «Argumento» y «tejido»."
  },
  {
    "id": "d236",
    "difficulty": "difícil",
    "clue": "Parte del árbol… pero también cuerpo sin extremidades. (6)",
    "answer": "TRONCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte del árbol",
    "fodder": "Parte del árbol",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a TRONCO: «Parte del árbol» y «cuerpo sin extremidades»."
  },
  {
    "id": "d237",
    "difficulty": "difícil",
    "clue": "Sentido… pero también panorama. (5)",
    "answer": "VISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sentido",
    "fodder": "Sentido",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a VISTA: «Sentido» y «panorama»."
  },
  {
    "id": "d238",
    "difficulty": "difícil",
    "clue": "Sonido humano… pero también derecho a opinar. (3)",
    "answer": "VOZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Sonido humano",
    "fodder": "Sonido humano",
    "indicators": [],
    "explanation": "Las dos lecturas de la pista apuntan a VOZ: «Sonido humano» y «derecho a opinar»."
  },
  {
    "id": "d239",
    "difficulty": "difícil",
    "clue": "Signo ortográfico… pero también énfasis al hablar. (6)",
    "answer": "ACENTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Signo ortográfico",
    "fodder": "Signo ortográfico",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ACENTO: «Signo ortográfico» y «énfasis al hablar»."
  },
  {
    "id": "d240",
    "difficulty": "difícil",
    "clue": "Documento de una reunión… pero también registro oficial. (4)",
    "answer": "ACTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Documento de una reunión",
    "fodder": "Documento de una reunión",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ACTA: «Documento de una reunión» y «registro oficial»."
  },
  {
    "id": "d241",
    "difficulty": "difícil",
    "clue": "Persona que actúa por otra… pero también sustancia activa. (6)",
    "answer": "AGENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que actúa por otra",
    "fodder": "Persona que actúa por otra",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a AGENTE: «Persona que actúa por otra» y «sustancia activa»."
  },
  {
    "id": "d242",
    "difficulty": "difícil",
    "clue": "Disminución de un dolor… pero también sensación de descanso. (6)",
    "answer": "ALIVIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Disminución de un dolor",
    "fodder": "Disminución de un dolor",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ALIVIO: «Disminución de un dolor» y «sensación de descanso»."
  },
  {
    "id": "d243",
    "difficulty": "difícil",
    "clue": "De sabor desagradable… pero también persona resentida. (6)",
    "answer": "AMARGO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "De sabor desagradable",
    "fodder": "De sabor desagradable",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a AMARGO: «De sabor desagradable» y «persona resentida»."
  },
  {
    "id": "d244",
    "difficulty": "difícil",
    "clue": "Objeto que fija una embarcación… pero también punto de referencia. (5)",
    "answer": "ANCLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que fija una embarcación",
    "fodder": "Objeto que fija una embarcación",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ANCLA: «Objeto que fija una embarcación» y «punto de referencia»."
  },
  {
    "id": "d245",
    "difficulty": "difícil",
    "clue": "Aro para el dedo… pero también estructura circular. (6)",
    "answer": "ANILLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Aro para el dedo",
    "fodder": "Aro para el dedo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ANILLO: «Aro para el dedo» y «estructura circular»."
  },
  {
    "id": "d246",
    "difficulty": "difícil",
    "clue": "Ayuda… pero también pieza que sostiene. (5)",
    "answer": "APOYO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Ayuda",
    "fodder": "Ayuda",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a APOYO: «Ayuda» y «pieza que sostiene»."
  },
  {
    "id": "d247",
    "difficulty": "difícil",
    "clue": "Borde de un sólido… pero también cualidad distintiva. (6)",
    "answer": "ARISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde de un sólido",
    "fodder": "Borde de un sólido",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ARISTA: «Borde de un sólido» y «cualidad distintiva»."
  },
  {
    "id": "d248",
    "difficulty": "difícil",
    "clue": "Cuerpo celeste… pero también persona célebre. (5)",
    "answer": "ASTRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cuerpo celeste",
    "fodder": "Cuerpo celeste",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ASTRO: «Cuerpo celeste» y «persona célebre»."
  },
  {
    "id": "d249",
    "difficulty": "difícil",
    "clue": "Camino más corto… pero también solución rápida. (5)",
    "answer": "ATAJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Camino más corto",
    "fodder": "Camino más corto",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ATAJO: «Camino más corto» y «solución rápida»."
  },
  {
    "id": "d250",
    "difficulty": "difícil",
    "clue": "Patio de entrada… pero también espacio delantero de una iglesia. (5)",
    "answer": "ATRIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Patio de entrada",
    "fodder": "Patio de entrada",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ATRIO: «Patio de entrada» y «espacio delantero de una iglesia»."
  },
  {
    "id": "d251",
    "difficulty": "difícil",
    "clue": "Adelanto… pero también parte inicial de una obra. (6)",
    "answer": "AVANCE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Adelanto",
    "fodder": "Adelanto",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a AVANCE: «Adelanto» y «parte inicial de una obra»."
  },
  {
    "id": "d252",
    "difficulty": "difícil",
    "clue": "Golpe fuerte… pero también persona que causa problemas. (5)",
    "answer": "AZOTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Golpe fuerte",
    "fodder": "Golpe fuerte",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a AZOTE: «Golpe fuerte» y «persona que causa problemas»."
  },
  {
    "id": "d253",
    "difficulty": "difícil",
    "clue": "Pelota de juego… pero también persona que halaga en exceso. (5)",
    "answer": "BALON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pelota de juego",
    "fodder": "Pelota de juego",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a BALON: «Pelota de juego» y «persona que halaga en exceso»."
  },
  {
    "id": "d254",
    "difficulty": "difícil",
    "clue": "Zona de una ciudad… pero también conjunto de viviendas. (6)",
    "answer": "BARRIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Zona de una ciudad",
    "fodder": "Zona de una ciudad",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a BARRIO: «Zona de una ciudad» y «conjunto de viviendas»."
  },
  {
    "id": "d255",
    "difficulty": "difícil",
    "clue": "Palo de béisbol… pero también verbo batir. (4)",
    "answer": "BATE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Palo de béisbol",
    "fodder": "Palo de béisbol",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a BATE: «Palo de béisbol» y «verbo batir»."
  },
  {
    "id": "d256",
    "difficulty": "difícil",
    "clue": "Herraje móvil… pero también elemento decisivo de una situación. (7)",
    "answer": "BISAGRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Herraje móvil",
    "fodder": "Herraje móvil",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a BISAGRA: «Herraje móvil» y «elemento decisivo de una situación»."
  },
  {
    "id": "d257",
    "difficulty": "difícil",
    "clue": "Lado de una embarcación… pero también superficie superior. (5)",
    "answer": "BORDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lado de una embarcación",
    "fodder": "Lado de una embarcación",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a BORDO: «Lado de una embarcación» y «superficie superior»."
  },
  {
    "id": "d258",
    "difficulty": "difícil",
    "clue": "Instrumento de orientación… pero también persona que guía. (7)",
    "answer": "BRUJULA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Instrumento de orientación",
    "fodder": "Instrumento de orientación",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a BRUJULA: «Instrumento de orientación» y «persona que guía»."
  },
  {
    "id": "d259",
    "difficulty": "difícil",
    "clue": "Caja para correo… pero también espacio de mensajes. (5)",
    "answer": "BUZON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Caja para correo",
    "fodder": "Caja para correo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a BUZON: «Caja para correo» y «espacio de mensajes»."
  },
  {
    "id": "d260",
    "difficulty": "difícil",
    "clue": "Extremo… pero también rango militar. (4)",
    "answer": "CABO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremo",
    "fodder": "Extremo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CABO: «Extremo» y «rango militar»."
  },
  {
    "id": "d261",
    "difficulty": "difícil",
    "clue": "Conjunto de cables… pero también disposición de conexiones. (8)",
    "answer": "CABLEADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto de cables",
    "fodder": "Conjunto de cables",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CABLEADO: «Conjunto de cables» y «disposición de conexiones»."
  },
  {
    "id": "d262",
    "difficulty": "difícil",
    "clue": "Cantidad de agua… pero también patrimonio. (6)",
    "answer": "CAUDAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cantidad de agua",
    "fodder": "Cantidad de agua",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CAUDAL: «Cantidad de agua» y «patrimonio»."
  },
  {
    "id": "d263",
    "difficulty": "difícil",
    "clue": "Alimento para atraer animales… pero también engaño. (4)",
    "answer": "CEBO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Alimento para atraer animales",
    "fodder": "Alimento para atraer animales",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CEBO: «Alimento para atraer animales» y «engaño»."
  },
  {
    "id": "d264",
    "difficulty": "difícil",
    "clue": "Elevación pequeña… pero también acumulación de tierra. (5)",
    "answer": "CERRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Elevación pequeña",
    "fodder": "Elevación pequeña",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CERRO: «Elevación pequeña» y «acumulación de tierra»."
  },
  {
    "id": "d265",
    "difficulty": "difícil",
    "clue": "Serie de fases… pero también período que se repite. (5)",
    "answer": "CICLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Serie de fases",
    "fodder": "Serie de fases",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CICLO: «Serie de fases» y «período que se repite»."
  },
  {
    "id": "d266",
    "difficulty": "difícil",
    "clue": "Parte más alta… pero también punto máximo. (4)",
    "answer": "CIMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte más alta",
    "fodder": "Parte más alta",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CIMA: «Parte más alta» y «punto máximo»."
  },
  {
    "id": "d267",
    "difficulty": "difícil",
    "clue": "Recorrido cerrado… pero también conjunto eléctrico. (8)",
    "answer": "CIRCUITO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recorrido cerrado",
    "fodder": "Recorrido cerrado",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CIRCUITO: «Recorrido cerrado» y «conjunto eléctrico»."
  },
  {
    "id": "d268",
    "difficulty": "difícil",
    "clue": "Articulación… pero también curva de una tubería. (4)",
    "answer": "CODO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Articulación",
    "fodder": "Articulación",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CODO: «Articulación» y «curva de una tubería»."
  },
  {
    "id": "d269",
    "difficulty": "difícil",
    "clue": "Astro con cola… pero también juguete volador. (6)",
    "answer": "COMETA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Astro con cola",
    "fodder": "Astro con cola",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a COMETA: «Astro con cola» y «juguete volador»."
  },
  {
    "id": "d270",
    "difficulty": "difícil",
    "clue": "Persona que acompaña… pero también miembro de un equipo. (9)",
    "answer": "COMPANERO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que acompaña",
    "fodder": "Persona que acompaña",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a COMPANERO: «Persona que acompaña» y «miembro de un equipo»."
  },
  {
    "id": "d271",
    "difficulty": "experto",
    "clue": "Canal para transportar algo… pero también vía de paso. (8)",
    "answer": "CONDUCTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Canal para transportar algo",
    "fodder": "Canal para transportar algo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CONDUCTO: «Canal para transportar algo» y «vía de paso»."
  },
  {
    "id": "d272",
    "difficulty": "experto",
    "clue": "Acuerdo legal… pero también pacto. (8)",
    "answer": "CONTRATO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acuerdo legal",
    "fodder": "Acuerdo legal",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CONTRATO: «Acuerdo legal» y «pacto»."
  },
  {
    "id": "d273",
    "difficulty": "experto",
    "clue": "Vaso con pie… pero también parte superior de un árbol. (4)",
    "answer": "COPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Vaso con pie",
    "fodder": "Vaso con pie",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a COPA: «Vaso con pie» y «parte superior de un árbol»."
  },
  {
    "id": "d274",
    "difficulty": "experto",
    "clue": "Recinto para animales… pero también espacio cercado. (6)",
    "answer": "CORRAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recinto para animales",
    "fodder": "Recinto para animales",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CORRAL: «Recinto para animales» y «espacio cercado»."
  },
  {
    "id": "d275",
    "difficulty": "experto",
    "clue": "Lado del cuerpo… pero también flanco. (7)",
    "answer": "COSTADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lado del cuerpo",
    "fodder": "Lado del cuerpo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a COSTADO: «Lado del cuerpo» y «flanco»."
  },
  {
    "id": "d276",
    "difficulty": "experto",
    "clue": "Objeto formado por dos líneas… pero también intersección. (4)",
    "answer": "CRUZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto formado por dos líneas",
    "fodder": "Objeto formado por dos líneas",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CRUZ: «Objeto formado por dos líneas» y «intersección»."
  },
  {
    "id": "d277",
    "difficulty": "experto",
    "clue": "Parte del cuerpo… pero también parte estrecha de una botella. (6)",
    "answer": "CUELLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte del cuerpo",
    "fodder": "Parte del cuerpo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CUELLO: «Parte del cuerpo» y «parte estrecha de una botella»."
  },
  {
    "id": "d278",
    "difficulty": "experto",
    "clue": "Pendiente… pero también acción de costar. (6)",
    "answer": "CUESTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pendiente",
    "fodder": "Pendiente",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CUESTA: «Pendiente» y «acción de costar»."
  },
  {
    "id": "d279",
    "difficulty": "experto",
    "clue": "Línea no recta… pero también tramo de carretera. (5)",
    "answer": "CURVA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea no recta",
    "fodder": "Línea no recta",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a CURVA: «Línea no recta» y «tramo de carretera»."
  },
  {
    "id": "d280",
    "difficulty": "experto",
    "clue": "Discusión pública… pero también acción de debatir. (6)",
    "answer": "DEBATE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Discusión pública",
    "fodder": "Discusión pública",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a DEBATE: «Discusión pública» y «acción de debatir»."
  },
  {
    "id": "d281",
    "difficulty": "experto",
    "clue": "Salida de una nave… pero también llegada de tropas. (10)",
    "answer": "DESEMBARCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Salida de una nave",
    "fodder": "Salida de una nave",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a DESEMBARCO: «Salida de una nave» y «llegada de tropas»."
  },
  {
    "id": "d282",
    "difficulty": "experto",
    "clue": "Lugar al que se llega… pero también suerte futura. (7)",
    "answer": "DESTINO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar al que se llega",
    "fodder": "Lugar al que se llega",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a DESTINO: «Lugar al que se llega» y «suerte futura»."
  },
  {
    "id": "d283",
    "difficulty": "experto",
    "clue": "Acción de disparar… pero también lanzamiento de un mecanismo. (7)",
    "answer": "DISPARO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Acción de disparar",
    "fodder": "Acción de disparar",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a DISPARO: «Acción de disparar» y «lanzamiento de un mecanismo»."
  },
  {
    "id": "d284",
    "difficulty": "experto",
    "clue": "Separación espacial… pero también diferencia. (9)",
    "answer": "DISTANCIA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Separación espacial",
    "fodder": "Separación espacial",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a DISTANCIA: «Separación espacial» y «diferencia»."
  },
  {
    "id": "d285",
    "difficulty": "experto",
    "clue": "Poder sobre algo… pero también campo de internet. (7)",
    "answer": "DOMINIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Poder sobre algo",
    "fodder": "Poder sobre algo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a DOMINIO: «Poder sobre algo» y «campo de internet»."
  },
  {
    "id": "d286",
    "difficulty": "experto",
    "clue": "Línea alrededor de la cual gira algo… pero también idea central. (3)",
    "answer": "EJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea alrededor de la cual gira algo",
    "fodder": "Línea alrededor de la cual gira algo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a EJE: «Línea alrededor de la cual gira algo» y «idea central»."
  },
  {
    "id": "d287",
    "difficulty": "experto",
    "clue": "Fuerza hacia delante… pero también impulso. (6)",
    "answer": "EMPUJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuerza hacia delante",
    "fodder": "Fuerza hacia delante",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a EMPUJE: «Fuerza hacia delante» y «impulso»."
  },
  {
    "id": "d288",
    "difficulty": "experto",
    "clue": "Unión entre piezas… pero también ingreso en un lugar. (6)",
    "answer": "ENCAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Unión entre piezas",
    "fodder": "Unión entre piezas",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ENCAJE: «Unión entre piezas» y «ingreso en un lugar»."
  },
  {
    "id": "d289",
    "difficulty": "experto",
    "clue": "Unión… pero también vínculo web. (6)",
    "answer": "ENLACE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Unión",
    "fodder": "Unión",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ENLACE: «Unión» y «vínculo web»."
  },
  {
    "id": "d290",
    "difficulty": "experto",
    "clue": "Protección… pero también símbolo heráldico. (6)",
    "answer": "ESCUDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Protección",
    "fodder": "Protección",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ESCUDO: «Protección» y «símbolo heráldico»."
  },
  {
    "id": "d291",
    "difficulty": "experto",
    "clue": "Lugar disponible… pero también separación. (7)",
    "answer": "ESPACIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar disponible",
    "fodder": "Lugar disponible",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ESPACIO: «Lugar disponible» y «separación»."
  },
  {
    "id": "d292",
    "difficulty": "experto",
    "clue": "Representación resumida… pero también plan. (7)",
    "answer": "ESQUEMA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Representación resumida",
    "fodder": "Representación resumida",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ESQUEMA: «Representación resumida» y «plan»."
  },
  {
    "id": "d293",
    "difficulty": "experto",
    "clue": "Rastro luminoso… pero también huella dejada al pasar. (6)",
    "answer": "ESTELA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Rastro luminoso",
    "fodder": "Rastro luminoso",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ESTELA: «Rastro luminoso» y «huella dejada al pasar»."
  },
  {
    "id": "d294",
    "difficulty": "experto",
    "clue": "Dispositivo que separa… pero también criterio de selección. (6)",
    "answer": "FILTRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Dispositivo que separa",
    "fodder": "Dispositivo que separa",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a FILTRO: «Dispositivo que separa» y «criterio de selección»."
  },
  {
    "id": "d295",
    "difficulty": "experto",
    "clue": "Seguro… pero también superficie sólida. (5)",
    "answer": "FIRME",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Seguro",
    "fodder": "Seguro",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a FIRME: «Seguro» y «superficie sólida»."
  },
  {
    "id": "d296",
    "difficulty": "experto",
    "clue": "Objeto lanzado con arco… pero también señal direccional. (6)",
    "answer": "FLECHA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto lanzado con arco",
    "fodder": "Objeto lanzado con arco",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a FLECHA: «Objeto lanzado con arco» y «señal direccional»."
  },
  {
    "id": "d297",
    "difficulty": "experto",
    "clue": "Fuente de luz… pero también centro de atención. (4)",
    "answer": "FOCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuente de luz",
    "fodder": "Fuente de luz",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a FOCO: «Fuente de luz» y «centro de atención»."
  },
  {
    "id": "d298",
    "difficulty": "experto",
    "clue": "Impacto… pero también turno en algunos juegos. (5)",
    "answer": "GOLPE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Impacto",
    "fodder": "Impacto",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a GOLPE: «Impacto» y «turno en algunos juegos»."
  },
  {
    "id": "d299",
    "difficulty": "experto",
    "clue": "Escalón para espectadores… pero también nivel. (5)",
    "answer": "GRADA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Escalón para espectadores",
    "fodder": "Escalón para espectadores",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a GRADA: «Escalón para espectadores» y «nivel»."
  },
  {
    "id": "d300",
    "difficulty": "experto",
    "clue": "Pieza que sujeta… pero también broche. (5)",
    "answer": "GRAPA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que sujeta",
    "fodder": "Pieza que sujeta",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a GRAPA: «Pieza que sujeta» y «broche»."
  },
  {
    "id": "d301",
    "difficulty": "experto",
    "clue": "Prenda para la mano… pero también protección. (6)",
    "answer": "GUANTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Prenda para la mano",
    "fodder": "Prenda para la mano",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a GUANTE: «Prenda para la mano» y «protección»."
  },
  {
    "id": "d302",
    "difficulty": "experto",
    "clue": "Pieza que gira para impulsar… pero también curva espiral. (6)",
    "answer": "HELICE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza que gira para impulsar",
    "fodder": "Pieza que gira para impulsar",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a HELICE: «Pieza que gira para impulsar» y «curva espiral»."
  },
  {
    "id": "d303",
    "difficulty": "experto",
    "clue": "Casa… pero también lugar de origen. (5)",
    "answer": "HOGAR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Casa",
    "fodder": "Casa",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a HOGAR: «Casa» y «lugar de origen»."
  },
  {
    "id": "d304",
    "difficulty": "experto",
    "clue": "Línea aparente del cielo… pero también límite de una expectativa. (9)",
    "answer": "HORIZONTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Línea aparente del cielo",
    "fodder": "Línea aparente del cielo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a HORIZONTE: «Línea aparente del cielo» y «límite de una expectativa»."
  },
  {
    "id": "d305",
    "difficulty": "experto",
    "clue": "Marca dejada por un pie… pero también rastro. (6)",
    "answer": "HUELLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Marca dejada por un pie",
    "fodder": "Marca dejada por un pie",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a HUELLA: «Marca dejada por un pie» y «rastro»."
  },
  {
    "id": "d306",
    "difficulty": "experto",
    "clue": "Objeto que atrae metales… pero también persona muy atractiva. (4)",
    "answer": "IMAN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que atrae metales",
    "fodder": "Objeto que atrae metales",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a IMAN: «Objeto que atrae metales» y «persona muy atractiva»."
  },
  {
    "id": "d307",
    "difficulty": "experto",
    "clue": "Fuerza inicial… pero también deseo repentino. (7)",
    "answer": "IMPULSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Fuerza inicial",
    "fodder": "Fuerza inicial",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a IMPULSO: «Fuerza inicial» y «deseo repentino»."
  },
  {
    "id": "d308",
    "difficulty": "experto",
    "clue": "Recipiente con asa… pero también medida aproximada de líquido. (5)",
    "answer": "JARRA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Recipiente con asa",
    "fodder": "Recipiente con asa",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a JARRA: «Recipiente con asa» y «medida aproximada de líquido»."
  },
  {
    "id": "d309",
    "difficulty": "experto",
    "clue": "Persona que juzga… pero también árbitro. (4)",
    "answer": "JUEZ",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Persona que juzga",
    "fodder": "Persona que juzga",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a JUEZ: «Persona que juzga» y «árbitro»."
  },
  {
    "id": "d310",
    "difficulty": "experto",
    "clue": "Costado… pero también aspecto. (4)",
    "answer": "LADO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Costado",
    "fodder": "Costado",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a LADO: «Costado» y «aspecto»."
  },
  {
    "id": "d311",
    "difficulty": "experto",
    "clue": "Hoja delgada… pero también dibujo impreso. (6)",
    "answer": "LAMINA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Hoja delgada",
    "fodder": "Hoja delgada",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a LAMINA: «Hoja delgada» y «dibujo impreso»."
  },
  {
    "id": "d312",
    "difficulty": "experto",
    "clue": "Luz portátil… pero también dispositivo de señalización. (8)",
    "answer": "LINTERNA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Luz portátil",
    "fodder": "Luz portátil",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a LINTERNA: «Luz portátil» y «dispositivo de señalización»."
  },
  {
    "id": "d313",
    "difficulty": "experto",
    "clue": "Frontera… pero también punto máximo. (6)",
    "answer": "LIMITE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Frontera",
    "fodder": "Frontera",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a LIMITE: «Frontera» y «punto máximo»."
  },
  {
    "id": "d314",
    "difficulty": "experto",
    "clue": "Lugar comercial… pero también relativo a un sitio. (5)",
    "answer": "LOCAL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar comercial",
    "fodder": "Lugar comercial",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a LOCAL: «Lugar comercial» y «relativo a un sitio»."
  },
  {
    "id": "d315",
    "difficulty": "experto",
    "clue": "Borde… pero también cantidad de diferencia. (6)",
    "answer": "MARGEN",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde",
    "fodder": "Borde",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a MARGEN: «Borde» y «cantidad de diferencia»."
  },
  {
    "id": "d316",
    "difficulty": "experto",
    "clue": "Objeto que cubre la cara… pero también apariencia engañosa. (7)",
    "answer": "MASCARA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que cubre la cara",
    "fodder": "Objeto que cubre la cara",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a MASCARA: «Objeto que cubre la cara» y «apariencia engañosa»."
  },
  {
    "id": "d317",
    "difficulty": "experto",
    "clue": "Cantidad determinada… pero también acción de medir. (6)",
    "answer": "MEDIDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Cantidad determinada",
    "fodder": "Cantidad determinada",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a MEDIDA: «Cantidad determinada» y «acción de medir»."
  },
  {
    "id": "d318",
    "difficulty": "experto",
    "clue": "Facultad de pensar… pero también persona muy inteligente. (5)",
    "answer": "MENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Facultad de pensar",
    "fodder": "Facultad de pensar",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a MENTE: «Facultad de pensar» y «persona muy inteligente»."
  },
  {
    "id": "d319",
    "difficulty": "experto",
    "clue": "Forma para fabricar algo… pero también modelo rígido. (5)",
    "answer": "MOLDE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Forma para fabricar algo",
    "fodder": "Forma para fabricar algo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a MOLDE: «Forma para fabricar algo» y «modelo rígido»."
  },
  {
    "id": "d320",
    "difficulty": "experto",
    "clue": "Pieza de dinero… pero también unidad de un sistema monetario. (6)",
    "answer": "MONEDA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Pieza de dinero",
    "fodder": "Pieza de dinero",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a MONEDA: «Pieza de dinero» y «unidad de un sistema monetario»."
  },
  {
    "id": "d321",
    "difficulty": "experto",
    "clue": "Armado de piezas… pero también puesta en escena. (7)",
    "answer": "MONTAJE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Armado de piezas",
    "fodder": "Armado de piezas",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a MONTAJE: «Armado de piezas» y «puesta en escena»."
  },
  {
    "id": "d322",
    "difficulty": "experto",
    "clue": "Construcción junto al agua… pero también resorte. (6)",
    "answer": "MUELLE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Construcción junto al agua",
    "fodder": "Construcción junto al agua",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a MUELLE: «Construcción junto al agua» y «resorte»."
  },
  {
    "id": "d323",
    "difficulty": "experto",
    "clue": "Lugar de aves… pero también centro de actividad. (4)",
    "answer": "NIDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lugar de aves",
    "fodder": "Lugar de aves",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a NIDO: «Lugar de aves» y «centro de actividad»."
  },
  {
    "id": "d324",
    "difficulty": "experto",
    "clue": "Punto de conexión… pero también elemento de una red. (4)",
    "answer": "NODO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Punto de conexión",
    "fodder": "Punto de conexión",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a NODO: «Punto de conexión» y «elemento de una red»."
  },
  {
    "id": "d325",
    "difficulty": "experto",
    "clue": "Palabra que identifica… pero también reputación. (6)",
    "answer": "NOMBRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Palabra que identifica",
    "fodder": "Palabra que identifica",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a NOMBRE: «Palabra que identifica» y «reputación»."
  },
  {
    "id": "d326",
    "difficulty": "experto",
    "clue": "Órgano de la vista… pero también abertura. (3)",
    "answer": "OJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Órgano de la vista",
    "fodder": "Órgano de la vista",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a OJO: «Órgano de la vista» y «abertura»."
  },
  {
    "id": "d327",
    "difficulty": "experto",
    "clue": "Borde del agua… pero también límite. (6)",
    "answer": "ORILLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Borde del agua",
    "fodder": "Borde del agua",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a ORILLA: «Borde del agua» y «límite»."
  },
  {
    "id": "d328",
    "difficulty": "experto",
    "clue": "Espacio elevado para espectadores… pero también compartimento. (5)",
    "answer": "PALCO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio elevado para espectadores",
    "fodder": "Espacio elevado para espectadores",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a PALCO: «Espacio elevado para espectadores» y «compartimento»."
  },
  {
    "id": "d329",
    "difficulty": "experto",
    "clue": "Superficie de visualización… pero también protección. (8)",
    "answer": "PANTALLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Superficie de visualización",
    "fodder": "Superficie de visualización",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a PANTALLA: «Superficie de visualización» y «protección»."
  },
  {
    "id": "d330",
    "difficulty": "experto",
    "clue": "Detención… pero también lugar donde se detiene un transporte. (6)",
    "answer": "PARADA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Detención",
    "fodder": "Detención",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a PARADA: «Detención» y «lugar donde se detiene un transporte»."
  },
  {
    "id": "d331",
    "difficulty": "experto",
    "clue": "Espacio abierto… pero también zona interior de una casa. (5)",
    "answer": "PATIO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Espacio abierto",
    "fodder": "Espacio abierto",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a PATIO: «Espacio abierto» y «zona interior de una casa»."
  },
  {
    "id": "d332",
    "difficulty": "experto",
    "clue": "Inclinación… pero también asunto sin resolver. (9)",
    "answer": "PENDIENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Inclinación",
    "fodder": "Inclinación",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a PENDIENTE: «Inclinación» y «asunto sin resolver»."
  },
  {
    "id": "d333",
    "difficulty": "experto",
    "clue": "Contorno lateral… pero también descripción de una persona. (6)",
    "answer": "PERFIL",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Contorno lateral",
    "fodder": "Contorno lateral",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a PERFIL: «Contorno lateral» y «descripción de una persona»."
  },
  {
    "id": "d334",
    "difficulty": "experto",
    "clue": "Rastro… pero también superficie para competir. (5)",
    "answer": "PISTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Rastro",
    "fodder": "Rastro",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a PISTA: «Rastro» y «superficie para competir»."
  },
  {
    "id": "d335",
    "difficulty": "experto",
    "clue": "Extremo de un eje… pero también prenda deportiva. (4)",
    "answer": "POLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Extremo de un eje",
    "fodder": "Extremo de un eje",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a POLO: «Extremo de un eje» y «prenda deportiva»."
  },
  {
    "id": "d336",
    "difficulty": "experto",
    "clue": "Construcción sobre un obstáculo… pero también conexión. (6)",
    "answer": "PUENTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Construcción sobre un obstáculo",
    "fodder": "Construcción sobre un obstáculo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a PUENTE: «Construcción sobre un obstáculo» y «conexión»."
  },
  {
    "id": "d337",
    "difficulty": "experto",
    "clue": "Latido arterial… pero también ritmo de una acción. (5)",
    "answer": "PULSO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Latido arterial",
    "fodder": "Latido arterial",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a PULSO: «Latido arterial» y «ritmo de una acción»."
  },
  {
    "id": "d338",
    "difficulty": "experto",
    "clue": "Imagen reflejada… pero también reacción automática. (7)",
    "answer": "REFLEJO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Imagen reflejada",
    "fodder": "Imagen reflejada",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a REFLEJO: «Imagen reflejada» y «reacción automática»."
  },
  {
    "id": "d339",
    "difficulty": "experto",
    "clue": "Anotación… pero también sonido vocal. (8)",
    "answer": "REGISTRO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Anotación",
    "fodder": "Anotación",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a REGISTRO: «Anotación» y «sonido vocal»."
  },
  {
    "id": "d340",
    "difficulty": "experto",
    "clue": "Mecanismo elástico… pero también impulso para actuar. (7)",
    "answer": "RESORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Mecanismo elástico",
    "fodder": "Mecanismo elástico",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a RESORTE: «Mecanismo elástico» y «impulso para actuar»."
  },
  {
    "id": "d341",
    "difficulty": "experto",
    "clue": "Lo que queda… pero también resultado de una resta. (5)",
    "answer": "RESTO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Lo que queda",
    "fodder": "Lo que queda",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a RESTO: «Lo que queda» y «resultado de una resta»."
  },
  {
    "id": "d342",
    "difficulty": "experto",
    "clue": "Camino establecido… pero también itinerario. (4)",
    "answer": "RUTA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Camino establecido",
    "fodder": "Camino establecido",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a RUTA: «Camino establecido» y «itinerario»."
  },
  {
    "id": "d343",
    "difficulty": "experto",
    "clue": "Habitación amplia… pero también aula. (5)",
    "answer": "SALON",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Habitación amplia",
    "fodder": "Habitación amplia",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a SALON: «Habitación amplia» y «aula»."
  },
  {
    "id": "d344",
    "difficulty": "experto",
    "clue": "Parte de un conjunto… pero también zona. (6)",
    "answer": "SECTOR",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de un conjunto",
    "fodder": "Parte de un conjunto",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a SECTOR: «Parte de un conjunto» y «zona»."
  },
  {
    "id": "d345",
    "difficulty": "experto",
    "clue": "Marca estampada… pero también pieza que cierra. (5)",
    "answer": "SELLO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Marca estampada",
    "fodder": "Marca estampada",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a SELLO: «Marca estampada» y «pieza que cierra»."
  },
  {
    "id": "d346",
    "difficulty": "experto",
    "clue": "Significado… pero también capacidad sensorial. (7)",
    "answer": "SENTIDO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Significado",
    "fodder": "Significado",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a SENTIDO: «Significado» y «capacidad sensorial»."
  },
  {
    "id": "d347",
    "difficulty": "experto",
    "clue": "Conjunto ordenado… pero también programa de televisión. (5)",
    "answer": "SERIE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Conjunto ordenado",
    "fodder": "Conjunto ordenado",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a SERIE: «Conjunto ordenado» y «programa de televisión»."
  },
  {
    "id": "d348",
    "difficulty": "experto",
    "clue": "Señal… pero también símbolo del zodiaco. (5)",
    "answer": "SIGNO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Señal",
    "fodder": "Señal",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a SIGNO: «Señal» y «símbolo del zodiaco»."
  },
  {
    "id": "d349",
    "difficulty": "experto",
    "clue": "Encima de algo… pero también envoltorio de carta. (5)",
    "answer": "SOBRE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Encima de algo",
    "fodder": "Encima de algo",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a SOBRE: «Encima de algo» y «envoltorio de carta»."
  },
  {
    "id": "d350",
    "difficulty": "experto",
    "clue": "Objeto que sostiene… pero también medio de almacenamiento. (7)",
    "answer": "SOPORTE",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Objeto que sostiene",
    "fodder": "Objeto que sostiene",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a SOPORTE: «Objeto que sostiene» y «medio de almacenamiento»."
  },
  {
    "id": "d351",
    "difficulty": "experto",
    "clue": "Botón del teclado… pero también tecla de piano. (5)",
    "answer": "TECLA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Botón del teclado",
    "fodder": "Botón del teclado",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a TECLA: «Botón del teclado» y «tecla de piano»."
  },
  {
    "id": "d352",
    "difficulty": "experto",
    "clue": "Duración… pero también estado meteorológico. (6)",
    "answer": "TIEMPO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Duración",
    "fodder": "Duración",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a TIEMPO: «Duración» y «estado meteorológico»."
  },
  {
    "id": "d353",
    "difficulty": "experto",
    "clue": "Nombre de una obra… pero también grado académico. (6)",
    "answer": "TITULO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Nombre de una obra",
    "fodder": "Nombre de una obra",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a TITULO: «Nombre de una obra» y «grado académico»."
  },
  {
    "id": "d354",
    "difficulty": "experto",
    "clue": "Parte de un recorrido… pero también segmento. (5)",
    "answer": "TRAMO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Parte de un recorrido",
    "fodder": "Parte de un recorrido",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a TRAMO: «Parte de un recorrido» y «segmento»."
  },
  {
    "id": "d355",
    "difficulty": "experto",
    "clue": "Grada de espectadores… pero también espacio de opinión. (7)",
    "answer": "TRIBUNA",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Grada de espectadores",
    "fodder": "Grada de espectadores",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a TRIBUNA: «Grada de espectadores» y «espacio de opinión»."
  },
  {
    "id": "d356",
    "difficulty": "experto",
    "clue": "Orden de intervención… pero también jornada laboral. (5)",
    "answer": "TURNO",
    "mechanisms": [
      "double-definition"
    ],
    "definition": "Orden de intervención",
    "fodder": "Orden de intervención",
    "indicators": [
      "pero también"
    ],
    "explanation": "Las dos lecturas de la pista apuntan a TURNO: «Orden de intervención» y «jornada laboral»."
  }
];
