import PropTypes from 'prop-types';
import './noti.css';

const Noti = ({ className= "noti" }) => {
    return (
    <div className={`noti-container ${className}`}>
        <div className="da-el-primer-container">
            {`¡Da el primer paso! Y solicita tu primera sesión estratégica gratuita `}
              <a href= "#cuestionario" className="aqui"> aquí.</a>
        </div>
        <div  className="close-container">
          <button className="arrowleft-icon">
            <img src="/arrowleft.svg" alt="close"></img>
          </button>
        </div>
    </div>
    )
};

Noti.propTypes = {
    className: PropTypes.string,
  };

export default Noti