// FloatingWhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsAppButton.css";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+información" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp size={33} />
    </a>
  );
};

export default FloatingWhatsAppButton;

