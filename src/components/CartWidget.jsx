import React, { useState } from "react";
import WidgetCarritoIMG from "../assets/IconocarroCompra.svg";
import CarritoVacio from "./CarritoVacio";
import CarritoConCosas from "./CarritoOcupado";
import { useCart } from "./CartContext";

export default function CartWidget() {
  const [showCart, setShowCart] = useState(false);
  const { cart, totalQuantity } = useCart();

  const handleCartClick = () => setShowCart((prev) => !prev);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: "8px",
        }}
        onClick={handleCartClick}
      >
        <img
          src={WidgetCarritoIMG}
          alt="Carrito"
          style={{ width: "20px", height: "fit-content" }}
        />
        {totalQuantity > 0 && (
          <span style={{ fontSize: "0.9rem", color: "#e6d8a8" }}>
            {totalQuantity}
          </span>
        )}
      </div>

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
              onExplore={() => console.log("Ir a explorar")}
            />
          ) : (
            <CarritoConCosas
              cart={cart}
              setCart={() => {}}
              onClose={() => setShowCart(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}