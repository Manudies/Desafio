import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-wrapper">
          
            <img src="./seniority_logoprincipal_sinfondo.svg" className="logo-image" alt="logo" />
            <a href="#" className="navbar-logo">
            <div className="logo-overlay"></div>
          </a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#inicio" className="navbar-link">Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#consultoria" className="navbar-link">Consultoria</a>
          </li>
          <li className="navbar-item">
            <a href="#formacion" className="navbar-link">Formacion</a>
          </li>
          <li className="navbar-item">
            <a href="#reservas" className="navbar-link">Plataforma de reservas</a>
          </li>
          <li className="navbar-item">
            <a href="#sobre" className="navbar-link">Sobre Seniority</a>
          </li>
          <li className="navbar-item">
            <a href="#blog" className="navbar-link">Blog</a>
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