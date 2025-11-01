import React from "react";
import { useCartContext } from "./CartContext";
import "./CheckoutResumen.css";

export default function CheckoutResumen() {
  const { cart } = useCartContext();

  return (
    <div className="checkout-resumen-container">
      {cart.map((item) => (
        <div className="checkout-item" key={item.variantKey}>
          <img src={item.image} alt={item.name} className="checkout-item-img" />

          <div className="checkout-item-info">
            <p className="nombre">{item.name}</p>
            <p className="detalle">
              Talle {item.size} – {item.color}
            </p>
            <p className="cantidad">Cantidad: {item.quantity}</p>
          </div>

          <div className="checkout-item-precio">
            <p>Transf. 20% off</p>
            <p>${item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}