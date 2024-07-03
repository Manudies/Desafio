import PropTypes from 'prop-types';
import './noti.css';

const Noti = ({ className= "noti" }) => {
    return (
    <div className={`noti-container ${className}`}>
        <div className="da-el-primer-container">
            {`¡Da el primer paso! Y solicita tu primera sesión estratégica gratuita `}
              <a href= "#cuestionario" className="aqui"> aquí.</a>
        </div>
          <button
            className="arrowleft-icon"
            alt=""
            src="/arrowleft.svg"
          />
    </div>
    )
};

Noti.propTypes = {
    className: PropTypes.string,
  };

export default Noti