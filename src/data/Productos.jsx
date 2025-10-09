import "../App.css";


import MonoVerde from "../assets/MonoVerde.jpg";
import MonoBeige from "../assets/MonoBeige.jpg";
import MonoNegro from "../assets/MonoNegro.jpg";
import MonoRojo from "../assets/MonoRojo.jpg";
import EnteritoVerde from "../assets/EnteritoVerde.jpg";
import EnteritoVioleta from "../assets/EnteritoVioleta.jpg";
import Sweatter1 from "../assets/Sweatter1.jpg";
import sweater3 from "../assets/sweater3.jpg";
import imanespolilla from "../assets/imanespolilla.jpg";
import Acolchado from "../assets/Acolchado.jpg";
import Lampara from "../assets/Lampara.jpg";
import candelabroLily from "../assets/candelabroLily.jpg";
import DepieLily from "../assets/DepieLily.jpg";

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
        image: MonoVerde,
      },
      {
        color: "beige",
        image: MonoBeige,
      },
      {
        color: "negro",
        image: MonoNegro,
      },
      {
        color: "rojo",
        image: MonoRojo,
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
        image: EnteritoVerde,
      },
      {
        color: "violeta",
        image: EnteritoVioleta,
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
    variants: [
      {
        image: Sweatter1,
      },
      { 
        image: sweater3,
      },
      { 
        image: sweater3,
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
    id: 4,
    title: "PoliPin",
    price: 10000,
    category: "Accesorios",
    description: "Dijes de polillas que tambien pueden ser usados de pin. Ceramica, acero y piedra.",
    variants: [
      {
        color: "white",
        image: imanespolilla,
      },
      {
        color: "beige",
        image: imanespolilla,
      },
      {
        color: "verde",
        image: imanespolilla,
      },
    ],
  },
  {
    id: 5,
    title: "Acolchado MOSS",
    price: 100000,
    category: "Hogar",
    description: "Acolchado poliester peluche color verde musgo.Muy abrigado y cozy.Viene en 1/2 plaza y dos plazas",
    variants: [  
      {
        Size: "KingSize",
        image: Acolchado
      },
      {
        Size: "QueenSize",
        image: Acolchado
      }],
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
        image: Lampara,
      },
      {
        tamano: "Candelabro",
        image: candelabroLily,
      },
      {
        tamano: "Velador",
        image: DepieLily,
      },
    ],
  },
];

export default products;