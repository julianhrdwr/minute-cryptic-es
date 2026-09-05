const PUZZLES = [

  {
    id: 1,
    answer: "ORO",
    clue: "Metal precioso que deja al loro sin cabeza. (3)",
    difficulty: "medium",
    mechanisms: ["deletion"],
    definition: "Metal precioso",
    fodder: "LORO",
    indicators: ["sin cabeza"],
    explanation:
      "ORO es un metal precioso. Partimos de LORO y quitamos su primera letra (la cabeza): L + ORO → ORO."
  },

  {
    id: 2,
    answer: "MORA",
    clue: "Fruta que aparece escondida en una palabra oscura. (4)",
    difficulty: "medium",
    mechanisms: ["hidden"],
    definition: "Fruta",
    fodder: "MO[RA]DO",
    indicators: ["escondida"],
    explanation:
      "MORA está escondida dentro de MORADO."
  },

  {
    id: 3,
    answer: "COPA",
    clue: "Vaso que también puede encontrarse en lo más alto de un árbol. (4)",
    difficulty: "medium",
    mechanisms: ["double-definition"],
    definition: "Vaso / parte alta de un árbol",
    fodder: null,
    indicators: null,
    explanation:
      "COPA tiene dos definiciones: puede ser un vaso para beber y también la parte superior de un árbol."
  },

  {
    id: 4,
    answer: "LOBO",
    clue: "Animal que queda cuando a lobos le quitan el final. (4)",
    difficulty: "medium",
    mechanisms: ["deletion"],
    definition: "Animal",
    fodder: "LOBOS",
    indicators: ["le quitan el final"],
    explanation:
      "LOBOS sin su última letra, S, queda LOBO."
  },

  {
    id: 5,
    answer: "AMOR",
    clue: "Sentimiento que puede encontrarse dentro de una vieja palabra. (4)",
    difficulty: "medium",
    mechanisms: ["hidden"],
    definition: "Sentimiento",
    fodder: "PAL[ABRA]",
    indicators: ["dentro de"],
    explanation:
      "La respuesta AMOR aparece escondida en la expresión '...'? Esta pista es provisional."
  },

  {
    id: 6,
    answer: "ARO",
    clue: "Objeto circular formado con los principios de algunas aves roban ocas. (3)",
    difficulty: "medium",
    mechanisms: ["initials"],
    definition: "Objeto circular",
    fodder: "Algunas aves roban ocas",
    indicators: ["principios"],
    explanation:
      "Tomamos las letras iniciales de Algunas, Roban y Ocas: A + R + O = ARO."
  },

  {
    id: 7,
    answer: "RISA",
    clue: "Alegría sonora que nace de risueña, alterada. (4)",
    difficulty: "medium",
    mechanisms: ["anagram"],
    definition: "Alegría sonora",
    fodder: "RISA",
    indicators: ["alterada"],
    explanation:
      "La palabra RISUEÑA contiene las letras necesarias para construir RISA. Pista provisional para el sistema de anagramas."
  },

  {
    id: 8,
    answer: "TELA",
    clue: "Material que se encuentra al principio de telaraña. (4)",
    difficulty: "medium",
    mechanisms: ["hidden"],
    definition: "Material",
    fodder: "TELARAÑA",
    indicators: ["al principio de"],
    explanation:
      "TELA aparece al comienzo de TELARAÑA."
  },

  {
    id: 9,
    answer: "NUBE",
    clue: "Lo que cubre el cielo, según una palabra que vuelve. (4)",
    difficulty: "medium",
    mechanisms: ["reversal"],
    definition: "Lo que cubre el cielo",
    fodder: "EBUN",
    indicators: ["vuelve"],
    explanation:
      "EBUN al revés da NUBE. Esta pista se usará como ejemplo de inversión."
  },

  {
    id: 10,
    answer: "BELLO",
    clue: "Bonito, según suena 'vello'. (5)",
    difficulty: "medium",
    mechanisms: ["homophone"],
    definition: "Bonito",
    fodder: "vello",
    indicators: ["según suena"],
    explanation:
      "BELLO y VELLO/Vello tienen el mismo sonido en muchas variedades del español. La definición es 'Bonito'."
  }

];
