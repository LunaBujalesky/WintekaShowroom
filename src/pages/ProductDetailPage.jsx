import FondoProducto from "../assets/fondoProductDetail.svg";
import ProductDetail from "../components/ProductDetail";
import ItemDetailContainer from "../components/ItemDetailContainer";

function ProductDetailPage() {
  return (
    <div
      style={{
        backgroundColor: "rgba(90, 102, 72, 0.22)",
        width: "1797px",
        height: "1079px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={FondoProducto} alt="" />
      <p>Aqui va url producto <br />Variable titulo <br /> 
      Precio, Descripcion, etc</p>
      <ProductDetail/>
      <ItemDetailContainer />
    </div>
    
  );
}
export default ProductDetailPage;
