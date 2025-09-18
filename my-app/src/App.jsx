import { useState } from 'react'
{/*import reactLogo from './assets/wintekalogoborrador.png'*/}
import viteLogo from './assets/wintekalogoborrador.png'
import './App.css'
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/Itemlistcontainer";

function App() {
  

  return (
    <>
     {/* logo */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Winteka Showroom</h1>
      <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/talles">Talles</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
     {/* carrito de compra*/}
    <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> 
    </>
  )
}

export default App
