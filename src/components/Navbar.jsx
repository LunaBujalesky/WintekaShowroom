import React from "react";
import CartWidget from "./CartWidget";
{/* import SearchBarnav from "./SearchBar";*/}

 function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "#eee",
      }}
    >
      {/*<SearchBarnav />*/}
      {/* Enlaces */}
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          position: "fixed",
          top: 0,
          width: "100%",
        }}
      >
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="/contacto">Talles</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
}
export default NavBar;