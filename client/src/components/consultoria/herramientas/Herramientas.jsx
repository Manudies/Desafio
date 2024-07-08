import './Herramientas.css';


const Herramientas = () => {


  return (
    <div className="herramientasContainer">
        <h2>¿Cómo te beneficia tener un diseño accesible?</h2>
        <section className="herramientaContainer">
            <div className='herramienta'>
                <div className='imgHerramienta'>
                <span>90%</span>
                {/* <img src="./" alt="logo" /> */}
                </div>

                <div className='herramientaText'>
                    <p>De las llamadas de soporte de McAfee fueron reducidas como resultado de invertir en diseño UX/UI</p>
                </div>
            </div>

            <div className='herramienta'>
                <div className='imgHerramienta'>
                    <span>10M</span>
                {/* <img src="./" alt="logo" /> */}
                </div>

                <div className='herramientaText'>
                <p>Airbnb atribuye al diseño UX como factor clave para pasar de ser casi un fracaso a ser valorado en</p>      
                </div>
            </div>

            <div className='herramienta'>
                <div className='imgHerramienta'>
                  <span>35%</span>         
                {/* <img src="./" alt="logo" /> */}
                </div>

                <div className='herramientaText'>
                <p>Aumentaron los ingresos de ESPN tras implementar un UX/UI adecuado.</p>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Herramientas;
