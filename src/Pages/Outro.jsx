import React from "react";
import "../CSS/Outro.css";
import { FaWhatsapp } from "react-icons/fa";

function Outro() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "9373380377";
    const message = "Hello";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="outro-container">
      <div className="outro-texts">
        <h1>Let’s Build the Future Together</h1>
        <p>
          Partner with <span className="highlight">AMK Web Innovation</span> for
          cutting-edge digital solutions. From websites to enterprise
          applications, we transform ideas into reality.
        </p>
        <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
          <FaWhatsapp className="whatsapp-icon" /> Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Outro;
