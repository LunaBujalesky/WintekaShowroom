/*Utilitarios*/
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Productos from "./data/Productos";

/*Componentes*/
import "./App.css";
import "./index.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/Itemlistcontainer";
import CarrouselLanding from "./components/CarrouselLanding";
import CardItem from "./components/CardItem";
import Header from "./components/Header";
/*import Footer from "./components/Footer";*/

/*Pages*/
import Inicio from "./pages/Index";
import Talles from "./pages/Talles";
import Contacto from "./pages/Contacto";
import ProductDetail from "./components/ProductDetailPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
       <header>
       <Header /> 
        <NavBar />
      </header>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/categoria/:category" element={<ItemListContainer />} />
          <Route path="/talles" element={<Talles />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <main>
        <CarrouselLanding
          greeting={
            <>
              <h3 style={{ fontFamily: "QuencyDemo" }}>BIENVENIDO</h3>
              <p style={{ fontFamily: "QuencyDemo" }}>a tu tienda</p>
              <h1 style={{ fontFamily: "QuencyDemo" }}>Whismiscal</h1>
              <h4 style={{ fontFamily: "QuencyDemo" }}>Gothic de confianza</h4>
            </>
          }
        />

        <CarrouselLanding greeting="Hoy 20% off con transferencia" />
        <ItemListContainer style={{ display: "flex", gap: "20px" }} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
