import MonoVerde from "../assets/MonoVerde.jpg"; 
import CardItem from "./CardItem";
function ItemListContainer() {
  return (
    <div>
      <CardItem title="MonoVerde" price="$2500" img src={MonoVerde} alt=""/>
      <CardItem title="MonoVerde" price="$3200" img src={MonoVerde}/>
    </div>
    
  );
  
}

export default ItemListContainer;