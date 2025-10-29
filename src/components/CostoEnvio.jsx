import React, { useState } from "react";
import "./CalcularEnvio.css";

function CalcularEnvio() {
  const [codigoPostal, setCodigoPostal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Código postal ingresado:", codigoPostal);
    // Aquí iría la lógica para calcular el envío
  };

  return (
    
    <form className="envio-container" onSubmit={handleSubmit}>
    
      <label className="envio-label">Calcular Costo Envío</label>

      <div className="envio-input-group">
        <input   type="text" placeholder="Codigo Postal" value={codigoPostal}onChange={(e) => setCodigoPostal(e.target.value)}
          className="envio-input" />
       
        <button type="submit" className="envio-btn">  Calcular </button>
      
      </div>
    
    </form>
  
);
}

export default CalcularEnvio;