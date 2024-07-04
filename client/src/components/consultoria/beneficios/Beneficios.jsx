import './Beneficios.css';


const Beneficios = () => {


  return (
    <div className="beneficiosContainer">
        <h2>¿Cómo beneficia tener un diseño accesible?</h2>
        <section className="cardContainer">
            <div className='cardBeneficios'>
                <p>Según Forrester Research, el 50% de las ventas se pierden porque los usuarios no encuentran la información que están buscando para poder tomar una decisión de compra.</p>
            </div>

            <div className='cardBeneficios'>
                <p> Más del 15% de la población mundial vive con discapacidades. Mejorar la accesibilidad y usabilidad general disminuye la necesidad de soporte técnico y mejora considerablemente la experiencia del potencial cliente.</p>      
            </div>

            <div className='cardBeneficios'>
                <p>El 57% de los usuarios no recomendarían una empresa con un sitio mal diseñado para móviles. Una buena interfaz aumenta la probabilidad de que los visitantes se conviertan en clientes.</p>
            </div>
        </section>
    </div>
  );
}

export default Beneficios;
