import lupa from "../assets/SearchIcon.svg";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="searchbarContainer" >
    
        <input
          className="searchInput" type="text" placeholder="Buscar..."
          />
     

      <button className="botonSearch" >
        <img src={lupa} alt="" style= {{ width:"20px",
    height:"20px", boxShadow: "inset 4px 4px 8px #1e1e1e, inset -4px -4px 8pxrgb(32, 32, 32)", } }/>
      </button>
    </div>
  );
}
export default SearchBar;
