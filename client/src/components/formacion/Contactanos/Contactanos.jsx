import './Contactanos.css';
import { useNavigate } from 'react-router-dom';


const Contactanos = () => {
    const navigate = useNavigate();
    const showAll = () => {
        navigate('/contacto');
    }


  return (
    <div className="contactoontainer">
        <section className="contactoContainer">
            <div className='contactoTexto'>
                <h1>Solicita una reunion</h1>
            </div>

            <div className='contactoBoton'>
                <button onClick={showAll} className='button'>Contáctanos</button>
            </div>



        </section>
    </div>
  );
}

export default Contactanos;