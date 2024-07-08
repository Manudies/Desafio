import ActionButton from '../../actionButton/actionButton';
import { useNavigate } from 'react-router-dom';

import './ComienzoF.css';


const ComienzoF = () => {
  const navigate = useNavigate();
  const showAll = () => {
    navigate('/formularioModulos');
}

  return (
    <div className="comienzoFContainer">
        <div className='comienzoFTexto'>
            <h2>Programa de formación en Silver Economy</h2>
            <h3>Te asesoramos en la búsqueda del mejor módulo de formación para ti.</h3>
        </div>
            <ActionButton label="Haz el test" className="comienzoButtonF"/>
    </div>
  );
}

export default ComienzoF;