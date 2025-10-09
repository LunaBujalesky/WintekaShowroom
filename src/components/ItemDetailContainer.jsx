import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/Productos"; 
import ProductDetail from "./ProductDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
 
    const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        const found = products.find(p => p.id === parseInt(id));
        resolve(found);
      }, 1000); 
    });

    getProduct.then((found) => {
      setProduct(found);
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