import SobreDelante from "../assets/SobreDelante.svg";
/*import SobreDorso from "../assets/SobreDetras.png";*/
import EstampitaLogo from "../assets/EstampitaContacto.png";
import FondoMesaMadera from "../assets/FondoMesaMadera.svg";

function SobreContacto() {

  return (
    <div
      style={{
        backgroundImage: `url(${FondoMesaMadera})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
       Height: "2865px",
       marginTop:"-5%",
      }}
    >
      
      <div
        style={{
          position: "relative",
          width: "1302px",
          height: "663px",
          backgroundImage: `url(${SobreDelante})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"5%",
        }}
      >
      
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            margin:"0",
            color: "#565142",
            fontFamily: "Garcedo Alt Two",
            fontSize: "20px",
            
          }}
        >
          <div  style={{
           
            marginTop:"-8%",
            
          }}>
            <h4>Av. 51, e 18 y 19 La Plata, Provincia de Buenos Aires</h4>
            <h4>N°1164 - CP 1896</h4>
          </div>
          <div style={{
           
           marginTop:"-8%",
           
         }}>
            <img src={EstampitaLogo} alt="" style={{ height: "160px",  width: "fit-content", }} />
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            color: "#565142",
            fontFamily: "Garcedo Alt Two",
            marginTop:"0%",
          }}
        >
          <h2 style={{ fontSize:"50px", margin:"0",}}>Winteka Showroom</h2>
          <h3 style={{ fontSize:"20px",}}>wintekatienda@gmail.com</h3>
          <h4>+54 2901 401533</h4>
        </div>
      </div>
    </div>
  );
}
export default SobreContacto;
