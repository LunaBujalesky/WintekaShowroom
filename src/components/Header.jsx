
import TiendaLogo from "../assets/WintekaLogo.svg";

function Header() {
  return (
    <div style={{ width: "100%",  height: "180px", background:"#322C26",display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: 0, }}>

     <div style={{ width: "257px", height: "248px",
      boxShadow: "inset 4px 4px 8px #1e1e1e, inset -4px -4px 8pxrgb(32, 32, 32)", 
      borderRadius:"50%", position: "relative",}}>
      
      <img
        src={TiendaLogo}
        alt=""
        style={{ width: "300px", height: "fit-content", position: "absolute", top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", }}
      />
      </div> 
    </div>
  );
}

export default Header;
