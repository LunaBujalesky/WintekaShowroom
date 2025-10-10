import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import userIcon from "../assets/userIcon.svg";

function NavBar() {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const submenuStyle = {
    position: "absolute",
    top: "100%",
    background: "#322C26",
    display: showSubmenu ? "flex" : "none",
    flexDirection: "column",
    padding: "10px",
    gap: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    borderRadius: "0 0 4px 4px",
  };

  const linkStyle = {
    padding: "8px 16px",
    transition: "background 0.3s ease",
    ":hover": {
      background: "#433832",
    },
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        padding: "30px 30px 0",
        left: 0,
        zIndex: 1000,
        width: "100%",
        background: "#322C26",
      }}
    >
      <SearchBar />
      <Link to="/" style={linkStyle}>
        INICIO
      </Link>
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setShowSubmenu(true)}
        onMouseLeave={() => setShowSubmenu(false)}
      >
        <span></span>
        <Link to="/productos" style={linkStyle}>
          PRODUCTOS
        </Link>
        <div style={submenuStyle}>
          <Link to="/categoria/accesorios" style={linkStyle}>
            ACCESORIOS
          </Link>
          <Link to="/categoria/ropa" style={linkStyle}>
            ROPA
          </Link>
          <Link to="/categoria/hogar" style={linkStyle}>
            HOGAR
          </Link>
        </div>
      </div>
      <span></span>
      <Link to="/talles" style={linkStyle}>
        TALLES
      </Link>
      <span></span>
      <Link to="/contacto" style={linkStyle}>
        CONTACTO
      </Link>
      <CartWidget />
      <img
        src={userIcon}
        alt=""
        style={{ width: "30px", height: "fit-content", cursor: "pointer" }}
      />
    </nav>
  );
}
export default NavBar;
