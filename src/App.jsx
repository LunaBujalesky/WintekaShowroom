/*Utilitarios*/
import { useState, useRef  } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


/*Componentes*/
import "./App.css";
import "./index.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

/*Pages*/
import Inicio from "./pages/Index";
import Talles from "./pages/Talles";
import Contacto from "./pages/Contacto";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";

function App() {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter basename="/WintekaShowroom">
      <header>
        <Header />
        <NavBar scrollToProducts={scrollToProducts} />
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Inicio ref={productsRef} />} />
          <Route path="/categoria/:category" element={<ItemListContainer />} />
          <Route path="/talles" element={<Talles />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>


      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
