import './RealizarTest.css';
import { useNavigate } from 'react-router-dom';


const realizarTest = () => {
    const navigate = useNavigate();
    const showAll = () => {
        navigate('/formularioPack');
    }


  return (
    <div className="realizarTestContainer">
        <section className="realizarContainer">
            <div className='realizarTexto'>
                <h1 className='realizarText'>Conoce nuestra sugerencia de pack mas adecuado a ti</h1>
            </div>

            <div className='realizarTest'>
                <button onClick={showAll} className='buttonTest'>Realizar test</button>
            </div>



        </section>
    </div>
  );
}

export default realizarTest;