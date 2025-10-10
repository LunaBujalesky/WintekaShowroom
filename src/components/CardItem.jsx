import './CardItem.css';
import { Link } from "react-router-dom";


const CardItem = ({ id, title = "Título", price = "$$$$", image = null }) => {
  return (
    <Link to={`/productos/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="product-card" >
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
    </Link>
  );
};

export default CardItem;