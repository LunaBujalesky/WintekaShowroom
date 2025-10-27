/*Utilitarios*/
import { useState, useRef  } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Productos from "./data/Productos";

/*Componentes*/
import "./App.css";
import "./index.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import CarrouselLanding from "./components/CarrouselLanding";
import CardItem from "./components/CardItem";
import Header from "./components/Header";
import Footer from "./components/Footer";

/*Pages*/
import Inicio from "./pages/Index";
import Talles from "./pages/Talles";
import Contacto from "./pages/Contacto";
import ProductDetail from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";

function App() {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
    <BrowserRouter basename="/WintekaShowroom">
       <header>
       <Header /> 
        <NavBar scrollToProducts={scrollToProducts} />
      </header>
     
      
        <Routes>
        <Route path="/" element={
            <>
              <CarrouselLanding
                greeting={
                  <>
                    <h3 style={{ fontFamily: "QuencyDemo" }}>BIENVENIDO</h3>
                    <p style={{ fontFamily: "QuencyDemo" }}>a tu tienda</p>
                    <h1 style={{ fontFamily: "QuencyDemo" }}>Whismiscal</h1>
                    <h4 style={{ fontFamily: "QuencyDemo" }}>Gothic de confianza</h4>
                    <p style={{ fontFamily: "QuencyDemo" }}> Hoy 20% off con transferencia</p>
                  </>
                }
              />
              <div ref={productsRef}>
              <ItemListContainer style={{ display: "flex", gap: "20px" }} />
              </div>
            </>
          } />
         
          <Route path="/categoria/:category" element={<ItemListContainer />} />
          <Route path="/talles" element={<Talles />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
          { /* <Route path="/productos/:id" element={<ProductDetailPage />} />*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <main>
        
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
   
    </>
  );
}

export default App;
