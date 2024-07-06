import React from 'react';
import './footer.css';
import { FiYoutube } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-left">
          <div className="footer-logo">
            <img src="./seniority_logoblanco_sinfondo_uso_en_fondo_oscuro.png" alt="logo" />
          </div>
          <div className="policy-text">
            <p className="footer-text">© Seniority 2024</p>
            <a href="#condiciones" className="footer-text-link"><p>Condiciones de Uso</p></a>
            <a href="#privacidad" className="footer-text-link"><p>Política de Privacidad</p></a>
            <a href="#cookies" className="footer-text-link"><p>Política de Cookies</p></a>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-icons">
            <a href="https://www.youtube.com" className='icon-link' target='_blank' rel='noopener noreferrer'>
              <FiYoutube className='footer-icon' />
            </a>
            <a href="https://www.facebook.com" className='icon-link' target='_blank' rel='noopener noreferrer'>
              <AiOutlineFacebook className='footer-icon' />
            </a>
            <a href="https://www.whatsapp.com" className='icon-link' target='_blank' rel='noopener noreferrer'>
              <AiOutlineWhatsApp className='footer-icon' />
            </a>
            <a href="https://www.instagram.com" className='icon-link' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className="footer-icon" />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="contact-text">
            <p className='heading'>Contacta</p>
            <p><CiMail className='contact-icon' /> info@seniority.com</p>
            <p><AiOutlinePhone className='contact-icon' /> +34 603 180 484</p>
          </div>
          </div>

        <div className='enisa-contaner'>
            <img src="./Sello_Enisa_Horizontal_Color-removebg.png" alt="enisa-logo" className='enisa-png'/>
          </div>

      </div>
    </footer>
  );
};

export default Footer;