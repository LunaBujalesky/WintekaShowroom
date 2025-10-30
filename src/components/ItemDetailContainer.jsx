import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { products } from "../data/Productos"; 
import ProductDetail from "./ProductDetail";

import { getFirestore, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "productos", id); 

    getDoc(refDoc).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      } else {
        console.log("Producto no encontrado");
      }
    });
  }, [id]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <div style={{ padding: "50px", display: "flex", justifyContent: "center" }}>
      <ProductDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;