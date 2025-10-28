import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, variant, quantity) => {
    const existing = cart.find(
      (item) => item.id === product.id && item.variant === variant.color
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.variant === variant.color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.title,
          color: variant.color, 
          image: variant.image,
          price: product.price,
          quantity,
        },
      ]);
    }
  };

  const removeFromCart = (id, variant) => {
    setCart(cart.filter((item) => !(item.id === id && item.variant === variant)));
  };

  const clearCart = () => setCart([]);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, clearCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
