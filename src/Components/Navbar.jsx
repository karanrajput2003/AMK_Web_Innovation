import React, { useState } from 'react';
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import '../CSS/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <h1>Finova</h1>
      </div>

      {/* Desktop Nav */}
      <div className='navitems desktop-menu'>
        <h6>Home</h6>
        <h6>About</h6>
        <h6>Services</h6>
        <h6>Projects</h6>
        <h6>Contact Us</h6>
      </div>

      <div className="nav-buttons desktop-menu">
        <button className='get-a-demo'>Get a Demo</button>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <h6>Home</h6>
        <h6>About</h6>
        <h6>Services</h6>
        <h6>Projects</h6>
        <h6>Contact Us</h6>
        <button className='get-a-demo'>Get a Demo</button>
      </div>
    </div>
  )
}

export default Navbar;
