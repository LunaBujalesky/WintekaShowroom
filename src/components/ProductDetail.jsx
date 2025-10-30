import React, { useState, useEffect } from "react";
import CostoEnvio from "./CostoEnvio";
import "./ProductDetail.css";
import ItemCount from "./ItemCount";
import { useNavigate, useParams } from "react-router-dom";


import { doc, getDoc } from "firebase/firestore";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [variant, setVariant] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "productos", id); 
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          const data = productSnap.data();
          setProduct(data);
          setVariant(data.variants?.[0]);
        } else {
          console.error("Producto no encontrado en Firebase");
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <p style={{ textAlign: "center", marginTop: "10%" }}>
        Producto no encontrado o cargando...
      </p>
    );
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
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
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
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            height: "40%",
            margin: "0px",
          }}
        >
          <p>Cantidad:</p> <p>Variante:</p>
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
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <CostoEnvio />
          <button className="botonstyle1" onClick={() => navigate("/checkout")}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;