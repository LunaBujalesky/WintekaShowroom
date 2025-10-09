import React, { useState } from "react";

 function ProductDetail({ product }) {
  const [variant, setVariant] = useState(product.variants?.[0]);

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <img src={variant?.image} alt={product.title} style={{ width: "300px" }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>

      {product.variants && (
        <div>
          {product.variants.map(v => (
            <button key={v.color} onClick={() => setVariant(v)}>
              {v.color}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export default ProductDetail;