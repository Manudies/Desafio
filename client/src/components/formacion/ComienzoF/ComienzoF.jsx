import ActionButton from '../../actionButton/actionButton';
import { useNavigate } from 'react-router-dom';

import './ComienzoF.css';


const Fcomienzo = () => {
  const navigate = useNavigate();
  const showAll = () => {
    navigate('/formularioModulo');
}


  return (
    <div className="FcomienzoContainer">
        <div className='Fcomienzotexto'>
            <h2>Programa de formación en Silver Economy</h2>
            <h3>Te asesoramos en la búsqueda del mejor módulo de formación para ti.</h3>
            <ActionButton label="Haz el test" className={"FcomienzoButton" } onClick={showAll} />
        </div>

    </div>
  );
}

export default Fcomienzo;