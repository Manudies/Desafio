import './RealizarTestF.css';
import { useNavigate } from 'react-router-dom';


const realizarTestFormacion = () => {
    const navigate = useNavigate();
    const showAll = () => {
        navigate('/formularioModulo');
    }


  return (
    <div className="realizarTestFContainer">
        <section className="realizarFContainer">
            <div className='realizarFTexto'>
                <h1>Conoce nuestra sugerencia de pack mas adecuado a ti</h1>
            </div>

            <div className='realizarFTest'>
                <button onClick={showAll} className='button'>Realizar test</button>
            </div>



        </section>
    </div>
  );
}

export default realizarTestFormacion;