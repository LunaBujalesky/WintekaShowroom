import { useState } from "react";
import "./PasosCompra.css";
import StarIcon from "../assets/StarPasosCompra.svg";

const steps = [
  { id: 1, label: "Resumen de tu compra" },
  { id: 2, label: "Envío" },
  { id: 3, label: "Pago" },
];

export default function StepIndicator() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="step-container">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`step ${activeStep === step.id ? "active" : ""}`}
          onClick={() => setActiveStep(step.id)}
        >
          <div className="star-glow">
            <img src={StarIcon} alt="" className="star-svg" />
            <span className="star-number">{step.id}</span>
          </div>
          <p className="step-label">{step.label}</p>
        </div>
      ))}
    </div>
  );
}
