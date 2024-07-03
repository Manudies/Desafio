import PropTypes from "prop-types";
import "./footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-content">
        <div className="footer-top">
          <div className="contact">
            <b className="text">Contacta</b>
            <div className="contact-links">
              <div className="link">
                <img
                  className="svg-icon"
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
                <div className="infosenioritycom">info@seniority.com</div>
              </div>
              <div className="link1">
                <img className="svg-icon1" alt="" src="/svg-1.svg" />
                <div className="div">+34 603 180 484</div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-media-container">
          <img
            className="youtube-icon"
            loading="lazy"
            alt=""
            src="/youtube.svg"
          />
          <div className="social-media">
            <img
              className="social-placeholder-icon"
              loading="lazy"
              alt=""
              src="/frame-35.svg"
            />
          </div>
          <img
            className="social-icons"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
          <img
            className="facebook-icon"
            loading="lazy"
            alt=""
            src="/facebook.svg"
          />
        </div>
      </div>
      <div className="seniority-2024-parent">
        <div className="seniority-2024">© Seniority 2024</div>
        <div className="link2">Condiciones de Uso</div>
        <div className="link3">Política de privacidad</div>
        <div className="link4">Política de cookies</div>
      </div>
      <img
        className="footer-spacing-icon"
        loading="lazy"
        alt=""
        src="/frame-31@2x.png"
      />
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;