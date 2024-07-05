import ActionButton from '../../actionButton/actionButton';
import './Descubre.css';


const Descubre = () => {


  return (
    <div className="descubrirContainer">
        <section className="descubreContainer">
            <div className='descubre'>
                <div className='descubreText'>
                    <h2>Da el primer paso</h2>
                    <p>Proporciona a tus usuarios senior la mejor atención posible con tecnología amigable.</p>
                </div>
                <ActionButton label="Descubre" className={"descubreButton"}/>
            </div>

            <div className='descubreImg'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dX6q2MfKutTNiyNUQlZ9sgBWnYfbwR5pUg&s" alt="señora" />
            </div>
        </section>

    </div>
  );
}

export default Descubre;
