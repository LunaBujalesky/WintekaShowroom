import React from "react";
import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import userIcon from "../assets/userIcon.svg"; 

function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        width: "100%",
       background: "#322C26",
      }}
    >
      <SearchBar/>
       <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/talles">Talles</Link>
      <Link to="/contacto">Contacto</Link>
      <CartWidget />
      <img src={userIcon} alt="" style={{width:"71px", height:"fit-content", cursor: "pointer"}}/>
    </nav >
  );
}
export default NavBar;