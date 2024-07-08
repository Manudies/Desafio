import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../../context/userContext';
import PanelUsuario from '../panelUsuario/PanelUsuario';

import Modal from '../modal/modal'
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut, handlefetchUserData } = useContext(UserContext);
  const[isModalOpen, setIsModalOpen] = useState(false)

  function openModal(){
    if (!user) {
      return
    }
    setIsModalOpen(true)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 960) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-wrapper">
          <img src="./seniority_logoblanco_sinfondo_uso_en_fondo_oscuro2.png" className="logo-image" alt="logo" />
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
            <a href="#" className="navbar-link">Plataformas de reservas</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Sobre Seniority</a>
          </li>
          <li className="navbar-item">
            <a href="/contacto" className="navbar-link">Contacto</a>
          </li>


        {user && (
            <li className="navbar-item">
              <button onClick = {openModal}className="navbar-button">{user.username}</button>
              {isModalOpen &&
                <Modal isOpen={true} onClose={()=> {
                  setIsModalOpen(false)
                  }}>
                    <PanelUsuario user={user} ></PanelUsuario>
                </Modal>
              }

            </li>
          )}
          {!user && (
          <li className="navbar-item">
            <Link to="/register" className="navbar-button" onClick={toggleMenu}>
              Accede
            </Link>
          </li>
            
          )}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;