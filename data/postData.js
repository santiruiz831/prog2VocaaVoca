let users = require('./usersData')

let dbPost = {
  listaPosts: [
    {
      id: 1,
      descripcion: "Los gatos son mejores que los perros",
      imagenPost: "/images/img1.jpeg",
      user: users.list[1]
    },
    {
      id:2,
      descripcion: "Tenemos mucho que aprender de los perritos",
      imagenPost: "/images/img2.jpeg",
      user: users.list[2]
    },
    {
      id: 3,
      descripcion: "Mi perrito es lo mejor que hay",
      imagenPost: "/images/img3.jpeg",
      user: users.list[3]
    },
    {
      id: 4,
      descripcion: "Morfable el golden",
      imagenPost: "/images/img4.jpeg",
      user: users.list[4]
    },
    {
      id: 5,
      descripcion: "La importancia de hacer las cosas por nosotros mismos",
      imagenPost: "/images/img5.jpeg",
      user: users.list[4]
    },
    {
      id: 6,
      descripcion: "Gandi, un adelantado de la época",
      imagenPost: "/images/img6.jpeg",
      user: users.list[4]
    },
    {
      id: 7,
      descripcion: "Gran refelxión",
      imagenPost: "/images/img7.jpeg",
      user: users.list[4]
    },
    {
      id: 8,
      descripcion: "Cerati el mejor músico argentino de la historia",
      imagenPost: "/images/img8.jpeg",
      user: users.list[4]
    },
    {
      id: 9,
      descripcion: "La musica es un camino de ida",
      imagenPost: "/images/img9.jpeg",
      user: users.list[4]
    },
    {
      id: 10,
      descripcion: "No se si la música solucionará mis problemas, pero por lo menos me voy a olvidar de ellos",
      imagenPost: "/images/img10.jpeg",
      user: users.list[4]
    },
  ],
};

module.exports = dbPost;
