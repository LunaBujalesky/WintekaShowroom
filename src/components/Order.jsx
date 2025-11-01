import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const  Order = ({ buyerInfo, products, total }) => {
  const [orderId, setOrderId] = useState(null);

  const sendOrder = () => {
    const order = {
      buyer: buyerInfo,
      items: products,
      total, 
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then((response) => {
      if (response.id) {
        setOrderId(response.id);
      }
    });
  };

  return (
    <div>
      <button onClick={sendOrder}>Generar Orden</button>
      {orderId && <p>Su orden ha sido generada con ID: {orderId}</p>}
    </div>
  );
};