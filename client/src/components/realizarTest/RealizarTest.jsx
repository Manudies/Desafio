import './RealizarTest.css';
import { useNavigate } from 'react-router-dom';


const realizarTest = () => {
    const navigate = useNavigate();
    const showAll = () => {
        navigate('/formularioPack');
    }


  return (
    <main className="realizarTestContainer">
        <section className="realizarContainer">
            <div className='realizarTexto'>
                <h1>Conoce nuestra sugerencia de pack mas adecuado a ti</h1>
            </div>

            <div className='realizarTest'>
                <button onClick={showAll} className='button'>Realizar test</button>
            </div>



        </section>
    </main>
  );
}

export default realizarTest;