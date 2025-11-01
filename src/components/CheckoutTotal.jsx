import React from "react";
import { useCartContext } from "./CartContext";
import "./CheckoutResumen.css";

export default function CheckoutTotal() {
  const { totalPrice } = useCartContext();
  const envio = 20;
  const total = totalPrice + envio;

  return (
    <div className="checkout-total-container">
      <div className="fila">
        <span>Descuentos</span>
        <span>–</span>
      </div>
      <div className="fila">
        <span>Envío</span>
        <span>${envio.toFixed(2)}</span>
      </div>
      <div className="fila total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}