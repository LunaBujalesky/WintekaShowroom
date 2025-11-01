import React, { useState } from "react";
import { useCartContext } from "./CartContext";
import "./SelectorVarianteCantidad.css";


export default function ItemCount({ product, variant, setVariant }) {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((q) => Math.min(10, q + 1));
  const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1));




  const handleAddToCart = () => {
    if (!variant) return alert("Selecciona una variante");
    addToCart(product, variant, quantity);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        
        <div className="selector-group number-wrapper">
          <label htmlFor="quantity" className="selector-label"></label>
          <input
            id="quantity"
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="selector-input-number"
          />
          <div className="number-arrows">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(10, q + 1))}
              className="arrow up"
            />
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
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

      <button className="botonstyle1" onClick={handleAddToCart}>
        Agregar al carrito{" "}
      </button>
      
    </div>
  );
};