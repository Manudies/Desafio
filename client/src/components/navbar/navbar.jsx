import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src="./Seniority_logoprincipal_sinfondo.png" className="logo-image" alt="logo" />
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">Consultoria</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link">Formacion</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Plataforma de reservas</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Sobre Seniority</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Blog</a>
          </li>
          <li className="navbar-item">
            <button className='contact-button'>CONTACTA</button>
          </li>
          <li className="navbar-item">
            <button className='register-button'>Registrar</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;