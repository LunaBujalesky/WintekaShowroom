import React from "react";
import "./CarritoVacio.css";

const CarritoVacio = ({ onClose, onExplore }) => {
  return (
    <div className="empty-cart-container">
      <div className="empty-cart-header">
        <h2>Tu carrito de compras</h2>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="divider"></div>

      <div className="empty-cart-content">
        <p className="empty-text">Tu carrito está vacío :</p>
        <button className="explore-button" onClick={onExplore}>
          Explora Categorías
        </button>
      </div>
    </div>
  );
};

export default CarritoVacio;