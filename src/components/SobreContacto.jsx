import SobreDelante from "../assets/SobreDelante.svg"
/*import SobreDorso from "../assets/SobreDetras.png";*/
import EstampitaLogo from "../assets/EstampitaContacto.png";

function SobreContacto ( ) {
  return (
    <div style={{ backgroundImage: `url(${SobreDelante})` }}>
    <h4>Av. 51, e 18 y 19 La Plata, 
    Provincia de Buenos Aires</h4>
    <h4>N°1164 - CP 1896</h4>
    <h2>Winteka Showroom</h2>
    <h3>wintekatienda@gmail.com</h3>
    <h4>+54 2901 401533</h4>
    <img src={EstampitaLogo}  alt="" />
    </div>
  );
}
export default SobreContacto;