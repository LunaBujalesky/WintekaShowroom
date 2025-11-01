import { useState } from "react";
import "./FormularioContacto.css";

export default function FormularioContacto({ onDataChange }) {
  const [buyer, setBuyer] = useState({
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedBuyer = { ...buyer, [name]: value };
    setBuyer(updatedBuyer);
    if (onDataChange) {
      onDataChange(updatedBuyer);
    }
  };

  return (
    <form className="formulario-contacto">
      <div className="input-containers">
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={buyer.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={buyer.telefono}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
}