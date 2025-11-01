import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasosCompra from "../components/PasosCompra";
import CheckoutResumen from "../components/CheckoutResumen";
import FormularioContacto from "../components/FormularioContacto";
import CalcularEnvio from "../components/CostoEnvio";
import CheckoutTotal from "../components/CheckoutTotal";
import "../components/ProductDetail.css";

export default function Checkout() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false); // 🔸 Nuevo estado

  const handleNext = () => {
    if (currentStep === 2 && !isFormValid) {
      alert("Por favor completá correctamente el formulario antes de continuar.");
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <CheckoutResumen />;

      case 2:
        return (
          <>
            <FormularioContacto onValidChange={setIsFormValid} />
            <CalcularEnvio />
          </>
        );

      case 3:
        return (
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontFamily: "QuencyDemo" }}>Paso final: Pago</h3>
            <p>Acá irá la información o integración de pago.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "fit-content",
          width: "70%",
          margin: "5% auto",
          backgroundColor: "#5A6648",
        }}
      >
        <h2 style={{ fontFamily: "QuencyDemo" }}>• Completa tu compra •</h2>

        <PasosCompra currentStep={currentStep} setCurrentStep={setCurrentStep} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "600px",
            width: "64%",
            margin: "3% auto",
            backgroundColor: "#7B8C69",
          }}
        >
          {renderStepContent()}
        </div>

        {currentStep !== 3 && (
          <div
            style={{
              height: "78px",
              width: "64%",
              marginBottom: "3%",
              backgroundColor: "#2D3226",
            }}
          >
            <CheckoutTotal />
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "fit-content",
            width: "64%",
            marginBottom: "3%",
            gap: "15px",
          }}
        >
          {currentStep === 1 ? (
            <button className="botonstyle1" onClick={() => navigate("/")}>
              Regresar al Carrito
            </button>
          ) : (
            <button className="botonstyle1" onClick={handleBack}>
              Atrás
            </button>
          )}

          <button className="botonstyle2" onClick={handleNext}>
            {currentStep === 3 ? "Finalizar compra" : "Continuar compra"}
          </button>
        </div>
      </div>
    </section>
  );
}
