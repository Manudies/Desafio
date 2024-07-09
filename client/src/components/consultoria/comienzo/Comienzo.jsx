import ActionButton from '../../actionButton/actionButton';
import { useNavigate } from 'react-router-dom';

import './Comienzo.css';


const Comienzo = () => {
  const navigate = useNavigate();
  const showAll = () => {
    navigate('/formularioPack');
}


  return (
    <div className="comienzoContainer">
        <div className='comienzotexto'>
            <h2>Impulsa tu negocio con diseño accesible</h2>
            <h3>Descubre el pack de servicios perfecto para ti.</h3>
            <ActionButton label="Haz el test" className={"comienzoButton" } onClick={showAll} />
        </div>

    </div>
  );
}

export default Comienzo;