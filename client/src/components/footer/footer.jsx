import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className='footer-icons'>
          <a href="https://www.instagram.com" className='icon-link' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} size="2x" className="footer-icon" />
          </a>
          <a href="https://www.facebook.com" className='icon-link' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebook} size='2x' className='footer-icon' />
          </a>
          <a href="https://www.youtube.com" className='icon-link' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faYoutube} size='2x' className='footer-icon' />
          </a>
          <a href="https://www.whatsapp.com" className='icon-link' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faWhatsapp} size='2x' className='footer-icon' />
          </a>
        </div>

        <div className='footer-logo'>
          <img src="./seniority_logoblanco_sinfondo_uso_en_fondo_oscuro.png" alt="logo" />
        </div>

        <p className="footer-text">Copyright © 2023 | Seniority AI, S.L. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;