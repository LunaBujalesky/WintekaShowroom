import { useState } from 'react';
{/*import reactLogo from './assets/wintekalogoborrador.png'*/}
import TiendaLogo from './assets/wintekalogoborrador.png';
import './App.css';
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/Itemlistcontainer";
import Header from "./components/Header";
import Footer from "./components/Header";


function App() {
  return (
    <>
     {/* logo */}
      <div>
          <img src={TiendaLogo} alt="" />
      </div>
      <NavBar />
       {/* lo puse como elementos de texto para poder conformar la frase mas estéticamente integrada con el diseño */}
      <ItemListContainer
        greeting={
          <>
            <h3 style={{ fontFamily: 'QuencyDemo' }}>Bienvenido</h3>
            <p style={{ fontFamily: 'QuencyDemo' }}>a tu tienda</p>
            <h1 style={{ fontFamily: 'QuencyDemo' }}>Whismiscal</h1>
            <h4 style={{ fontFamily: 'QuencyDemo' }}>Gothic de confianza</h4>
          </>
        }
      />
      {/* aqui va la de string que se pedia por consigna*/}
      <ItemListContainer greeting="Bienvenido a mi tienda" />
    </>
  )
}

export default App
