import React, { useState } from "react";
import WidgetCarritoIMG from "../assets/IconocarroCompra.svg";
import CarritoVacio from "./CarritoVacio";
export default function CartWidget() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]); // simulación del carrito por ahora vacío

  const handleCartClick = () => {
    setShowCart((prev) => !prev); // alterna mostrar/ocultar el carrito
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Ícono del carrito */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleCartClick}
      >
        <img
          src={WidgetCarritoIMG}
          alt="Carrito"
          style={{ width: "20px", height: "fit-content" }}
        />
      </div>

      {/* Panel del carrito (condicional) */}
      {showCart && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "40px",
            zIndex: 100,
          }}
        >
          {cart.length === 0 ? (
            <CarritoVacio
              onClose={() => setShowCart(false)}
              onExplore={() => navigate("/productos")}
            />
          ) : (
            <CarritoConCosas
              cart={cart}
              setCart={setCart}
              onClose={() => setShowCart(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}
