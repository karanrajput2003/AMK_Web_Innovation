import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "../CSS/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "9373380377";
    const message = "Hello";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Finova</h1>
      </div>

      {/* Desktop Nav */}
      <div className="navitems desktop-menu">
        <Link to="/" onClick={closeMenu}>
          <h6>Home</h6>
        </Link>
        <Link to="/about-us" onClick={closeMenu}>
          <h6>About</h6>
        </Link>
        <Link to="/services" onClick={closeMenu}>
          <h6>Services</h6>
        </Link>
        <Link to="/projects" onClick={closeMenu}>
          <h6>Projects</h6>
        </Link>
        <Link to="/contact-us" onClick={closeMenu}>
          <h6>Contact Us</h6>
        </Link>
      </div>

      <div className="nav-buttons desktop-menu">
        <button className="get-a-demo" onClick={handleWhatsAppClick}>
          <FaWhatsapp className="whatsapp-icon" /> Get in Touch
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          <h6>Home</h6>
        </Link>
        <Link to="/about-us" onClick={closeMenu}>
          <h6>About</h6>
        </Link>
        <Link to="/services" onClick={closeMenu}>
          <h6>Services</h6>
        </Link>
        <Link to="/projects" onClick={closeMenu}>
          <h6>Projects</h6>
        </Link>
        <Link to="/contact-us" onClick={closeMenu}>
          <h6>Contact Us</h6>
        </Link>
        <button className="get-a-demo" onClick={handleWhatsAppClick}>
          <FaWhatsapp className="whatsapp-icon" /> Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Navbar;
