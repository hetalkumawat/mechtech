import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="./src/assets/logo.png" alt="Logo" className="logo" />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#footer">Contact us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
