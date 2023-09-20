const categoriasOracle = [
  {
      "id": 1,
      "nombre": "Aurora Estelar",
      "descripcion": "Un objeto celestial que brilla intensamente en la noche",
      "color": "Cielo Nocturno",
      "codigoSeguridad": "ASTR0123"
  },
  {
      "id": 2,
      "nombre": "Melodía Encantada",
      "descripcion": "Una canción mágica que te hace bailar sin parar",
      "color": "Arco Iris Sonoro",
      "codigoSeguridad": "SONG7890"
  },
  {
      "id": 3,
      "nombre": "Diamante Danzante",
      "descripcion": "Un cristal que se mueve al ritmo de la música",
      "color": "Brillo de Disco",
      "codigoSeguridad": "GEM4567"
  },
  {
      "id": 4,
      "nombre": "Luna de Chocolate",
      "descripcion": "Un satélite natural hecho de chocolate dulce",
      "color": "Cacao Celestial",
      "codigoSeguridad": "CHOC7890"
  },
  {
      "id": 5,
      "nombre": "Pincel Mágico",
      "descripcion": "Un pincel que pinta cuadros que cobran vida",
      "color": "Paleta de Sueños",
      "codigoSeguridad": "ART1234"
  },
  {
      "id": 6,
      "nombre": "Zapatos Voladores",
      "descripcion": "Calzado que te lleva a lugares lejanos con un paso",
      "color": "Alas de Pies",
      "codigoSeguridad": "FLY5678"
  },
  {
      "id": 7,
      "nombre": "Espejo Encantado",
      "descripcion": "Un espejo que refleja tus deseos más profundos",
      "color": "Reflejo Mágico",
      "codigoSeguridad": "MIRR9012"
  },
  {
      "id": 8,
      "nombre": "Poción de la Risas",
      "descripcion": "Una bebida que te hace reír incontrolablemente",
      "color": "Burbujas Felices",
      "codigoSeguridad": "LAUG3456"
  },
  {
      "id": 9,
      "nombre": "Sombrero de las Ideas",
      "descripcion": "Un sombrero que te inspira con pensamientos brillantes",
      "color": "Mente Creativa",
      "codigoSeguridad": "IDEA7890"
  },
  {
      "id": 10,
      "nombre": "Pluma de las Historias",
      "descripcion": "Una pluma que escribe cuentos épicos por sí sola",
      "color": "Tinta de Imaginación",
      "codigoSeguridad": "STORY1234"
  }
]


const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  categoriasOracle,
  authors
};
