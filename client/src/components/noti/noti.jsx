import PropTypes from 'prop-types';
import './noti.css';

const Noti = ({ className= "" }) => {
    return (
        <div className={`noti ${className}`}>
        <div className="hero">
        <div className="hero-content-parent">
          <div className="hero-content">
            <div className="da-el-primer-container">
              {`Da el primer paso y solicita `}
              <span className="aqui">aquí</span>
              {` tu primera sesión estratégica gratuita. `}
            </div>
          </div>
          <img
            className="arrowleft-icon"
            alt=""
            src="/arrowleft.svg"
          />
        </div>
      </div>
    </div>
    )
};

Noti.propTypes = {
    className: PropTypes.string,
  };

export default Noti