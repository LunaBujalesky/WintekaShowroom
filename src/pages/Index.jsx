import CarrouselLanding from '../components/CarrouselLanding';
import ItemListContainer from '../components/ItemListContainer';
import { forwardRef } from 'react';

const Inicio = forwardRef((props, ref) => {
  return (
    <>
      <CarrouselLanding
        greeting={
          <>
            <h3 style={{ fontFamily: "QuencyDemo" }}>BIENVENIDO</h3>
            <p style={{ fontFamily: "QuencyDemo" }}>a tu tienda</p>
            <h1 style={{ fontFamily: "QuencyDemo" }}>Whismiscal</h1>
            <h4 style={{ fontFamily: "QuencyDemo" }}>Gothic de confianza</h4>
            <p style={{ fontFamily: "QuencyDemo" }}> Hoy 20% off con transferencia</p>
          </>
        }
      />
      <div ref={ref}>
        <ItemListContainer style={{ display: "flex", gap: "20px" }} />
      </div>
    </>
  );
});

export default Inicio;