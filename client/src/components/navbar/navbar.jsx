import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../context/userContext';
import PanelUsuario from '../panelUsuario/PanelUsuario';
import Modal from '../modal/modal';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut, handlefetchUserData } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    if (!user) {
      return;
    }
    setIsModalOpen(true);
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
            <NavLink to="/consultoria" className="navbar-link" activeClassName="active">
              Consultoría
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/formacion" className="navbar-link" activeClassName="active">
              Formación
            </NavLink>
          </li>
          <li className="navbar-item">
            <a to="#" className="navbar-link" activeClassName="active">
              Plataformas de reservas
            </a>
          </li>
          <li className="navbar-item">
            <a to="#" className="navbar-link" activeClassName="active">
              Sobre Seniority
            </a>
          </li>
          <li className="navbar-item">
            <NavLink to="/contacto" className="navbar-link" activeClassName="active">
              Contacto
            </NavLink>
          </li>
          {user && (
            <li className="navbar-item">
              <button onClick={openModal} className="navbar-button">{user.username}</button>
              {isModalOpen && (
                <Modal isOpen={true} onClose={() => setIsModalOpen(false)} className='modal-panel-usuario'>
                  <PanelUsuario user={user} />
                </Modal>
              )}
            </li>
          )}
          {!user && (
            <li className="navbar-item">
              <NavLink to="/register" className="navbar-button" onClick={toggleMenu}>
                Accede
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
