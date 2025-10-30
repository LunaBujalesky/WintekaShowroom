import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import FondoProducto from "../assets/fondoProductDetail.svg";

import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";


function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "productos", id);

    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("Producto no encontrado");
        }
      })
  }, [id]);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }



  return (
    <div
      style={{
       
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={FondoProducto}
        alt="Fondo producto"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "90%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div>
          <ProductDetail product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;