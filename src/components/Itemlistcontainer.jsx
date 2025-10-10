
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/Productos';
import CardItem from './CardItem';
import CargandoGif from '../assets/Cargando.gif';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    getProducts.then((res) => {
      setItems(res);
      setLoading(false);
    });
  }, []);

  if (loading) return  <div
  style={{
    position: "fixed", 
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, 
  }}
>  <p style={{ color: "#fff", fontSize: "18px" }}>Cargando...</p><img src={CargandoGif} alt="" style={{ top:"20%", position:"relative", }}/>  </div>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {items.map(product => (
        <Link to={`/ProductDetail/${product.id}`} key={product.id}>
          <CardItem 
            title={product.title}
            price={product.price}
            image={product.variants?.[0]?.image}
          />
        </Link>
      ))}
    </div>
  );
}
export default ItemListContainer;