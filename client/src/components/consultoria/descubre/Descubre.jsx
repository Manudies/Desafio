import ActionButton from '../../actionButton/actionButton';
import { useNavigate } from 'react-router-dom';
import './Descubre.css';


const Descubre = () => {
    const navigate = useNavigate();
    const showAll = () => {
      navigate('/contacto');
  }

  return (
    <div className="descubrirContainer">
        <section className="descubreContainer">
            <div className='descubre'>
                <div className='descubreText'>
                    <h2>Solicita tu primera sesión estratégica gratuita.</h2>
                </div>
                <ActionButton label="¡Da el primer paso!" className={"descubreButton"} onClick={showAll}/>
            </div>

            <div className='descubreImg'>
                <img src="/consultoria/descubre.webp" alt="señora" />
            </div>
        </section>

    </div>
  );
}

export default Descubre;
