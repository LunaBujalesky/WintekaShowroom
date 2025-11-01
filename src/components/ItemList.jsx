
import CardItem from "./CardItem";

function ItemList({ items }) {
  if (!items.length) {
    return <p>No se encontraron productos.</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {items.map((product) => (
        <CardItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.variants?.[0]?.image}
        />
      ))}
    </div>
  );
}

export default ItemList;