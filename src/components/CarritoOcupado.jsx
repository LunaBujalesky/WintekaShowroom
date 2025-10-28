import React from "react";
import "./CarritoOcupado.css";

export default function CarritoOcupado({ cart, setCart, onClose, variant, quantity   }) {
  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQty) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(newQty, 10) } : item
      )
    );
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const envio = 20.0;
  const total = subtotal + envio;

  return (
    <div className="cart-full-container">
      <div className="cart-full-header">
        <h2>Tu carrito de compras</h2>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="divider"></div>

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-img" />

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <div className="cart-item-controls">
                <label>
                  Cantidad:
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </label>
                <p>${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="cart-item">
            <p>Variante: {item.color}</p>
              <p>{quantity}</p>
            </div>
            <button
              className="remove-button"
              onClick={() => handleRemove(item.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="divider"></div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Descuentos</span>
          <span>–</span>
        </div>
        <div className="summary-row">
          <span>Envío</span>
          <span>${envio.toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="buy-button">Comprar</button>
    </div>
  );
}
