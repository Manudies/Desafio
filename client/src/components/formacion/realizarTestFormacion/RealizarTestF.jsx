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
                <h1 className='realizarFText'>Te asesoramos en la búsqueda del mejor módulo de formación para ti.</h1>
            </div>

            <div className='realizarFTest'>
                <button onClick={showAll} className='buttonTest'> Haz el test</button>
            </div>
        </section>
    </div>
  );
}

export default realizarTestFormacion;