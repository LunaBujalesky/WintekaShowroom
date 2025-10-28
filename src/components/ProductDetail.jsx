import React, { useState, useEffect } from "react";
import CostoEnvio from "./CostoEnvio";
import "./ProductDetail.css";
import ItemCount from "./ItemCount";
function ProductDetail({ product, }) {
  const [variant, setVariant] = useState(product?.variants?.[0]);


  useEffect(() => {
    setVariant(product?.variants?.[0]);
  }, [product]);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }


  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
        color: "#322C26",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div> </div>
        <div>
          <img
            src={variant?.image}
            alt={product.title}
            style={{ width: "300px", Height: "300px" }}
          />
        </div>
      </div>

      <div
        style={{
          textAlign: "left",
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <h2 style={{ fontFamily: "QuencyDemo", fontSize: "48px", margin: "0" }}>
          {product.title}
        </h2>

        <h3 style={{ fontFamily: "QuencyDemo", fontSize: "22px", margin: "0" }}>
          ${product.price}
        </h3>

        <p style={{ fontFamily: "Georgia", fontSize: "18px", margin: "0", width: "50%" }}>
          {product.description}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            height: "40%",
            margin: "0px",
          }}
        >
          {" "}
          <p>Cantidad:</p> <p>Variante:</p>{" "}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            height: "fit-content",
            margin: "0px",
          }}
        >
          <ItemCount      product={product}
        variant={variant}
        setVariant={setVariant}
      
        />
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
         
          <button className="botonstyle1"> Comprar </button>
        </div>
        <CostoEnvio></CostoEnvio>
      </div>
    </div>
  );
}

export default ProductDetail;
