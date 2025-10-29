import PasosCompra from "../components/PasosCompra";
import "../components/ProductDetail.css";
import { useNavigate } from "react-router-dom";


function Checkout() {
    const navigate = useNavigate();
  return (
    <section>
        <div style={{ display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center', height: 'fit-content', width: '70%', margin: '5% auto', backgroundColor: '#5A6648', }}>
          <h2 style={{ fontFamily: 'QuencyDemo',}}>• Completa tu compra •</h2>
            <PasosCompra />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                height: '600px', width: '64%', margin: '3% auto', backgroundColor: '#7B8C69',}}>
                </div>
                <div style={{  height: '78px', width: '64%', marginBottom: '3%', backgroundColor: '#2D3226',}}></div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', height: 'fit-content', width: '64%', marginBottom: '3%', gap: '15px',}}>
                <button className="botonstyle1" onClick={() => navigate("/")}>Regresar al Carrito</button>
                <button className="botonstyle2" >Iniciar Compra</button>
                </div>
           </div>
         
           </section>
      
  );
}

export default  Checkout;