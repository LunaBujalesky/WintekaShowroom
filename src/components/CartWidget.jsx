import React from "react";
import WidgetCarritoIMG from './assets/carritoBorrador.png';

export default function CartWidget() {
  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <img src={WidgetCarritoIMG} alt="" />
     <p>0</p>
    </div>
  );
}