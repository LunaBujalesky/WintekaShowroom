
import { products } from "../data/Productos"; 
import CardItem from "./CardItem";  

function ItemListContainer() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {products.map(product => (
        <CardItem 
          key={product.id}
          title={product.title}
          price={`$${product.price}`}
          image={product.variants?.[0]?.image}
        />
      ))}
    </div>
    
  );
  
}

export default ItemListContainer;