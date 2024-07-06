import PropTypes from 'prop-types';
import { useState } from 'react';
import './noti.css';

const Noti = ({ className = "noti" }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={`noti-container ${className}`}>
            <div className="da-el-primer-container">
                {`¡Da el primer paso! Y solicita tu primera sesión estratégica gratuita `}
                <a href= "./contacto" className="aqui"> aquí.</a>
            </div>
            <div className="close-container">
                <button className="arrowleft-icon" onClick={handleClose}>
                    <img src="/arrowleft.svg" alt="close"></img>
                </button>
            </div>
        </div>
    );
};

Noti.propTypes = {
    className: PropTypes.string,
};

export default Noti;