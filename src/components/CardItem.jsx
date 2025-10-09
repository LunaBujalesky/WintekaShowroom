import '../App.css';
import fondo from "../assets/FondoCardProducto.svg"; 

const  CardItem = ({ title = "Título", price = "$$$$", image = null }) => {
        return (
          <div className="product-card" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="image-container">
              {image ? (
                <img src={image} alt={title} className="product-image" />
              ) : (
                <div className="placeholder">Cargar imagen</div>
              )}
            </div>
            <div className="info">
              <h3>{title}</h3>
              <p>{price}</p>
            </div>
          </div>
        );
      };
      
      
  export default  CardItem;