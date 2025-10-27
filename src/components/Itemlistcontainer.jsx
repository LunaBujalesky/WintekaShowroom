import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/Productos";
import CardItem from "./CardItem";
import CargandoGif from "../assets/Cargando.gif";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams(); 
  const categoryLower = category?.toLowerCase();

  useEffect(() => {
    setLoading(true);

    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    getProducts.then((res) => {
      
      const filtered = categoryLower
        ? res.filter(
            (product) => product.category.toLowerCase() === categoryLower
          )
        : res;

      setItems(filtered);
      setLoading(false);
    });
  }, [categoryLower]); 

  if (loading)
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <p style={{ color: "#fff", fontSize: "18px" }}>Cargando...</p>
        <img
          src={CargandoGif}
          alt="Cargando..."
          style={{ top: "20%", position: "relative" }}
        />
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {items.map((product) => (
        <CardItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.variants?.[0]?.image}
        />
      ))}
    </div>
  );
}

export default ItemListContainer;