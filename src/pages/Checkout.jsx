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

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        // Paso 1: Resumen de la compra
        return (
          <>
            <CheckoutResumen />
           
            
          </>
        );

      case 2:
        // Paso 2: Envío
        return (
          <>
            <FormularioContacto />
            <CalcularEnvio />
          </>
        );

      case 3:
        // Paso 3: Pago (solo muestra lo necesario)
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

        {/* Barra superior de pasos */}
        <PasosCompra currentStep={currentStep} setCurrentStep={setCurrentStep} />

        {/* Contenido principal dinámico */}
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

        {/* Total (solo visible en pasos 1 y 2) */}
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

        {/* Botones navegación */}
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
          {/* Botón atrás o regreso */}
          {currentStep === 1 ? (
            <button className="botonstyle1" onClick={() => navigate("/")}>
              Regresar al Carrito
            </button>
          ) : (
            <button className="botonstyle1" onClick={handleBack}>
              Atrás
            </button>
          )}

          {/* Botón siguiente o finalizar */}
          <button
            className="botonstyle2"
            onClick={handleNext}
          >
            {currentStep === 3 ? "Finalizar compra" : "Continuar compra"}
          </button>
        </div>
      </div>
    </section>
  );
}
