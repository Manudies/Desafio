import ActionButton from '../../actionButton/actionButton';
import './Comienzo.css';


const Comienzo = () => {


  return (
    <div className="comienzoContainer">
        <div className='comienzotexto'>
            <h2>Optimiza tu camino al éxito</h2>
            <h3>¡Descubre tu solución ideal!</h3>
        </div>
        <div className='botonComienzo'>
            <ActionButton label="Descúbrelo Ahora" className={"comienzoButton"}/>
        </div>
    </div>
  );
}

export default Comienzo;