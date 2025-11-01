import React, { useState } from "react";
import { useCartContext } from "./CartContext";
import "./SelectorVarianteCantidad.css";

export default function ItemCount({ product, variant, setVariant }) {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");

  // Stock según variante o producto
  const stockDisponible = variant?.stock ?? product.stock ?? 0;

  const handleIncrease = () => {
    if (quantity < stockDisponible) {
      setQuantity((q) => q + 1);
      setErrorMsg("");
    } else {
      setErrorMsg("No hay suficiente stock disponible");
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
      setErrorMsg("");
    }
  };

  const handleAddToCart = () => {
    if (!variant) {
      setErrorMsg("Selecciona una variante");
      return;
    }
    if (quantity > stockDisponible) {
      setErrorMsg("No hay suficiente stock disponible");
      return;
    }
    setErrorMsg("");
    addToCart(product, variant, quantity);
  };

  // Calcular cuántos quedan después de seleccionar cantidad
  const stockRestante = stockDisponible - quantity;

  // Texto del estado de stock
  let stockTexto = "";
  let stockColor = "#777"; // gris por defecto

  if (errorMsg) {
    stockTexto = errorMsg;
    stockColor = "#999";
  } else if (stockDisponible === 0) {
    stockTexto = "No hay stock disponible";
  } else if (stockRestante === 1) {
    stockTexto = "¡Último disponible!";
    stockColor = "#d67a00"; // tono cálido para resaltar
  } else {
    stockTexto = `Stock disponible: ${stockRestante}`;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Selector de cantidad */}
        <div className="selector-group number-wrapper">
          <label htmlFor="quantity" className="selector-label"></label>
          <input
            id="quantity"
            type="number"
            min="1"
            max={stockDisponible}
            value={quantity}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > stockDisponible) {
                setErrorMsg("No hay suficiente stock disponible");
              } else {
                setErrorMsg("");
              }
              setQuantity(
                Math.min(Math.max(1, value), stockDisponible)
              );
            }}
            className="selector-input-number"
          />
          <div className="number-arrows">
            <button type="button" onClick={handleIncrease} className="arrow up" />
            <button type="button" onClick={handleDecrease} className="arrow down" />
          </div>
        </div>

        {/* Selector de variantes */}
        {product.variants && (
          <div className="selector-group">
            <label htmlFor="variant-select" className="selector-label"></label>
            <select
              id="variant-select"
              value={variant?.prueba || ""}
              onChange={(e) => {
                const selected = product.variants.find(
                  (v) => v.prueba === e.target.value
                );
                setVariant(selected);
                setQuantity(1); // reset cantidad
                setErrorMsg("");
              }}
              className="selector-input"
            >
              {product.variants.map((v) => (
                <option key={v.prueba} value={v.prueba}>
                  {v.prueba}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Mensaje de stock */}
      <div style={{ fontSize: "0.9rem", color: stockColor, minHeight: "1.2em" }}>
        {stockTexto}
      </div>

      <button
        className="botonstyle1"
        onClick={handleAddToCart}
        disabled={stockDisponible === 0}
      >
        {stockDisponible === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
}
