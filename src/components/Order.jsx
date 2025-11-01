import { useState } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { useCartContext } from "./CartContext"

export const Order = ({ buyerInfo, totalInfo}) => {
  const [orderId, setOrderId] = useState(null)
  const { cart, clearCart, totalPrice} = useCartContext()
  const [finalTotal, setFinalTotal] = useState(totalInfo)


  if (cart.length && buyerInfo) {
    const db = getFirestore()
    const order = {
      buyer: buyerInfo,
      items: cart,
      total: totalPrice
    }

    addDoc(collection(db, "order"), order).then((response) => {
      if (response.id) {
        setOrderId(response.id)
        setFinalTotal(totalPrice)
        clearCart()
      }
    })
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {orderId ? (
        <>
          <h3>Compra completada </h3>
          <p><strong>Email:</strong> {buyerInfo?.email}</p>
          <p><strong>Teléfono:</strong> {buyerInfo?.telefono}</p>
          <p><strong>Monto total:</strong> ${finalTotal}</p>
          <p><strong>ID de orden:</strong> {orderId}</p>
        </>
      ) : (
        <p>Generando tu orden...</p>
      )}
    </div>
  )
}