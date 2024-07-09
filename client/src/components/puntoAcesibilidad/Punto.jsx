import React, { useState } from "react";
import "./punto.css";

const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accessibility-button">
      <button onClick={toggleDropdown} className="accessibility-toggle">
        <img src="./acess.png" alt="accesibilidad" className="accessibility-icon"/>
      </button>
      {isOpen && (
        <div className="accessibility-options">
          <button onClick={() => alert("Modo oscuro activado")}>
            Modo oscuro
          </button>
          <button onClick={() => alert("Tamaño de letra ampliado")}>
            Ampliar tamaño de letra
          </button>
          <button onClick={() => alert("Tamaño del puntero aumentado")}>
            Aumentar el tamaño del puntero
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;
