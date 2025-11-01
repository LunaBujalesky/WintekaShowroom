import React, { useState } from "react";
import { useCartContext } from "./CartContext";
import "./SelectorVarianteCantidad.css";

export default function ItemCount({ product, variant, setVariant }) {
  const { cart, addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");

  const itemEnCarrito = cart.find(
    (item) => item.variantKey === `${product.id}-${variant?.prueba}`
  );

  const stockDisponible = variant?.stock ?? product.stock ?? 0;

  const stockRestanteReal =
    stockDisponible - (itemEnCarrito?.quantity ?? 0);

  const aumentarCantidad = () => {
    if (quantity < stockRestanteReal) {
      setQuantity((q) => q + 1);
      setErrorMsg("");
    } else {
      setErrorMsg("No hay suficiente stock disponible");
    }
  };

  const disminuirCantidad = () => {
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
    if (quantity > stockRestanteReal) {
      setErrorMsg("No hay suficiente stock disponible");
      return;
    }
    setErrorMsg("");
    addToCart(product, variant, quantity);
  };

 
  let stockTexto = "";
  let stockColor = "#777";

  if (errorMsg) {
    stockTexto = errorMsg;
    stockColor = "#999";
  } else if (stockRestanteReal === 0) {
    stockTexto = "No hay stock disponible";
  } else if (stockRestanteReal === 1) {
    stockTexto = "¡Último disponible!";
    stockColor = "#d67a00";
  } else {
    stockTexto = `Stock disponible: ${stockRestanteReal}`;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        
        <div className="selector-group number-wrapper">
          <label htmlFor="quantity" className="selector-label"></label>
          <input
            id="quantity"
            type="number"
            min="1"
            max={stockRestanteReal}
            value={quantity}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > stockRestanteReal) {
                setErrorMsg("No hay suficiente stock disponible");
              } else {
                setErrorMsg("");
              }
              setQuantity(Math.min(Math.max(1, value), stockRestanteReal));
            }}
            className="selector-input-number"
          />
          <div className="number-arrows">
            <button
              type="button"
              onClick={aumentarCantidad}
              className="arrow up"
            />
            <button
              type="button"
              onClick={disminuirCantidad}
              className="arrow down"
            />
          </div>
        </div>

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
                setQuantity(1);
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

      <div style={{ fontSize: "0.9rem", color: stockColor, minHeight: "1.2em" }}>
        {stockTexto}
      </div>

      <button
        className="botonstyle1"
        onClick={handleAddToCart}
        disabled={stockRestanteReal === 0}
      >
        {stockRestanteReal === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
}
