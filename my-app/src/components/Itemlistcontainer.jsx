import ItemListContainer from './components/ItemListContainer';

function ItemListContainer({ greeting }) {
  return (
    <div>
      {greeting}
      {/* lo puse como elementos de texto para poder conformar la frase mas estéticamente integrada con el diseño */}
    </div>
    
  );
}
{/* si no como la consigna: */}
function ItemListContainer(props) {
    return (
      <h2>{props.greeting}</h2>
    );
  }
  

export default ItemListContainer;