import React, { useState, useEffect } from "react";
import CostoEnvio from "./CostoEnvio";
import "./ProductDetail.css";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";

function ProductDetail({ product }) {
  const [variant, setVariant] = useState(product?.variants?.[0]);
  const navigate = useNavigate();

  useEffect(() => {
    setVariant(product?.variants?.[0]);
  }, [product]);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="container-images" >
        <div className="left-images">
          {product.variants?.map((v, index) => (
            <img
              key={index}
              src={v.image}
              alt={v.prueba}
              onClick={() => setVariant(v)}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "6px",
                cursor: "pointer",
                border:
                  variant?.image === v.image
                    ? "3px solid rgb(115, 135, 96)"
                    : "3px solid #ccc",
                transition: "0.2s",
              }}
            />
          ))}
        </div>
        <div>
          <img
            src={variant?.image}
            alt={product.title}
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      </div>

      <div className="container-detail">
           <h2 style={{ fontFamily: "QuencyDemo", fontSize: "48px", margin: "0" }}>
          {product.title} </h2>

           <h3 style={{ fontFamily: "QuencyDemo", fontSize: "22px", margin: "0" }}>
          ${product.price} </h3>

           <p
          style={{
            fontFamily: "Georgia",
            fontSize: "18px",
            margin: "0",
            width: "50%",
          }}
           >
          {product.description}
           </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "100%",
            height: "40%",
            margin: "0px",
          }}
        >
          <div  style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%", height: "fit-content", margin: "0px",}} >
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
           <ItemCount
            product={product}
            variant={variant}
            setVariant={setVariant}
          />
          <button className="botonstyle1" onClick={() => navigate("/checkout")} style={{ marginTop: "8%" }}>
            {" "}
            Comprar{" "}
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <CostoEnvio></CostoEnvio>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;
