import React, { useState } from "react";
import WidgetCarritoIMG from '../assets/IconocarroCompra.svg';

export default function CartWidget() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div 
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }} 
      onClick={handleClick} 
    >
      <img src={WidgetCarritoIMG} alt="Carrito" />
      <p style={{ marginLeft: "8px" }}>{count}</p>
    </div>
  );
}