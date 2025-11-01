// ItemListContainer.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import CargandoGif from "../assets/Cargando.gif";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const categoryLower = category?.toLowerCase();

  useEffect(() => {
    const db = getFirestore();
    const productosRef = collection(db, "productos");

    const q = categoryLower
      ? query(productosRef, where("category", "==", categoryLower))
      : productosRef;

    getDocs(q)
      .then((snapshot) => {
        const productos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(productos);
      })
      .catch((error) => console.error("Error al obtener productos:", error))
      .finally(() => setLoading(false));
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

  return <ItemList items={items} />;
}

export default ItemListContainer;
