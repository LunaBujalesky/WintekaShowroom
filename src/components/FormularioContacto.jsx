import React, { useState } from "react";
import "./FormularioContacto.css";

export default function FormularioContacto() {
  const [formData, setFormData] = useState({
    email: "",
    telefono: "",
  });

  const [errors, setErrors] = useState({});


  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido.";
    }

    if (!formData.telefono) {
      newErrors.telefono = "El teléfono es obligatorio.";
    } else if (!/^[0-9+\s-]{6,15}$/.test(formData.telefono)) {
      newErrors.telefono = "Ingresa un número válido.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Formulario enviado correctamente ");
      setFormData({ email: "", telefono: "" });
      setErrors({});
    }
  };

  return (
    <form className="formulario-contacto" onSubmit={handleSubmit}>
      <div className="input-containers">
      <div className="input-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div className="input-group">
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          className={errors.telefono ? "input-error" : ""}
        />
        {errors.telefono && <p className="error-text">{errors.telefono}</p>}
      </div>
</div>
      <button type="submit" className="botonstyle1" style={{alignSelf: "flex-end"}}>
        Enviar
      </button>
    </form>
  );
}
