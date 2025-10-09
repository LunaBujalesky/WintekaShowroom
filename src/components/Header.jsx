
import TiendaLogo from "../assets/WintekaLogo.svg";

function Header() {
  return (
    <div style={{ width: "100vw",  height: "274px", background:"#322C26",display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: 0, 
        }}>
      <img
        src={TiendaLogo}
        alt=""
        style={{ width: "500px", height: "fit-content" }}
      />
    </div>
  );
}

export default Header;
