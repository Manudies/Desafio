import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-wrapper">
          <img src="./seniority_logoblanco_sinfondo_uso_en_fondo_oscuro.png" className="logo-image" alt="logo" />
          <a href="/" className="navbar-logo">
            <div className="logo-overlay"></div>
          </a>
        </div>

        {/* Hamburger menu icon */}
        <div className={`navbar-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="navbar-toggle-icon"></div>
        </div>

        {/* Navbar Menu */}
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="/consultoria" className="navbar-link">Consultoría</a>
          </li>
          <li className="navbar-item">
            <a href="/formacion" className="navbar-link">Formación</a>
          </li>
          <li className="navbar-item">
            <a href="#reservas" className="navbar-link">Plataformas de reservas</a>
          </li>
          <li className="navbar-item">
            <a href="#sobre" className="navbar-link">Sobre Seniority</a>
          </li>
          <li className="navbar-item">
            <a href="/contacto" className="navbar-link">Contacto</a>
          </li>
          <li className="navbar-item">
            <button className='accede-button'>Accede</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;