import React, { useState, useEffect } from "react";
import "./punto.css";

const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargePointer, setIsLargePointer] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePointerSize = () => {
    setIsLargePointer(!isLargePointer);
  };

  useEffect(() => {
    if (isLargePointer) {
      document.body.classList.add("large-pointer");
    } else {
      document.body.classList.remove("large-pointer");
    }
  }, [isLargePointer]);

  return (
    <div className="accessibility-button">
      <button onClick={toggleDropdown} className="accessibility-toggle">
        <img src="./acess.png" alt="accesibilidad" className="accessibility-icon" />
      </button>
      {isOpen && (
        <div className="accessibility-options">
          <button onClick={() => alert("Modo oscuro activado")}>
            Modo oscuro
          </button>
          <button onClick={() => alert("Tamaño de letra ampliado")}>
            Ampliar tamaño de letra
          </button>
          <button onClick={handlePointerSize}>
            {isLargePointer ? "Restaurar tamaño del puntero" : "Aumentar el tamaño del puntero"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;
