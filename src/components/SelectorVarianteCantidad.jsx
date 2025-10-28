import React from "react";
import "./SelectorVarianteCantidad.css";

function SelectorVarianteCantidad({  quantity, setQuantity, variant, setVariant, product,}) 

{

  return (
    <div className="selector-container">
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
            value={variant?.color || ""}
            onChange={(e) => {
              const selected = product.variants.find(
                (v) => v.color === e.target.value
              );
              setVariant(selected);
            }}
            className="selector-input-select"
          >
            {product.variants.map((v) => (
              <option key={v.color} value={v.color}>
                {v.color}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default SelectorVarianteCantidad;
