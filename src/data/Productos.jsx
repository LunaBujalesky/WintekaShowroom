import "../App.css";

export const products = [
  {
    id: 1,
    title: "Mono",
    price: 2500,
    category: "accesorios",
    description:
      "Moño bordado a mano con flores lila. Tela de fibra y lino. Hilo de poliéster.",
    variants: [
      {
        color: "verde",
        image: "/assets/MonoVerde.jpg",
      },
      {
        color: "beige",
        image: "/assets/MonoBeige.jpg",
      },
      {
        color: "negro",
        image: "/assets/MonoNegro.jpg",
      },
      {
        color: "rojo",
        image: "/assets/MonoRojo.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Enterito",
    price: 32000,
    category: "ropa",
    description: "Tela de corderoy finita, transpirable y muy suave.",
    variants: [
      {
        color: "verde",
        image: "/assets/EnteritoVerde.jpg",
      },
      {
        color: "violeta",
        image: "/assets/EnteritoVioleta.jpg",
      },
   
    ],
    Size: [
      {
        talle: "S",
      },
      {
        talle: "XL",
      },
      {
        talle: "M",
      },
    ],
  },
  {
    id: 3,
    title: "Sweatter Coffe",
    price: 21000,
    category: "Ropa",
    description: "Sweatter hilo de algodon bordado. Color unico.",
    Size: [
      {
        talle: "S",
      },
      {
        talle: "XL",
      },
      {
        talle: "M",
      },
    ],
  },
  {
    id: 4,
    title: "PoliPin",
    price: 10000,
    category: "Accesorios",
    description: "Sweatter hilo de algodon bordado. Color unico.",
    variants: [
      {
        color: "white",
      },
      {
        color: "beige",
      },
      {
        color: "verde",
      },
    ],
  },
  {
    id: 5,
    title: "Acolchado MOSS",
    price: 100000,
    category: "Hogar",
    description: "Acolchado poliester peluche color verde musgo.Muy abrigado y cozy.Viene en 1/2 plaza y dos plazas",
    Size: [
      {
        talle: "KingSize",
      },
      {
        talle: "QueenSize",
      },
    ],
  },
  {
    id: 6,
    title: "Lampara Lily",
    price: 80000,
    category: "Hogar",
    description: "Lampara con forma de campanita, viene en 3 variantes segun el tipo de iluminacion. En vidrio y ceramica.",
    variants: [
      {
        tamano: "Aplique Pared",
      },
      {
        tamano:  "Candelabro",
      },
      {
        tamano:  "Velador",
      },
    ],
  },
];

export default products;