import './Beneficios.css';


const Beneficios = () => {


  return (
    <div className="beneficiosContainer">
        <h2>El éxito de las empresas con diseño accesible</h2>
        <section className="cardContainer">
            
            <div className='cardBeneficios'>
                <div className='encabezadoCard'>
                    <div className='imgEncabezado'>
                        <img src="./" alt="logo" />
                    </div>
                    <div className='textoEncabezado'>
                        <p>El 50% de las ventas </p>
                    </div>
                </div>
                <div className='textoCard'>
                    <p>se pierden porque los usuarios no encuentran la información que están buscando para poder tomar una decisión de compra, Según Forrester Research.</p>
                </div>
            </div>

            <div className='cardBeneficios'>
                <div className='encabezadoCard'>
                        <div className='imgEncabezado'>
                            <img src="./" alt="logo" />
                        </div>
                        <div className='textoEncabezado'>
                            <p>El 50% de las ventas </p>
                        </div>
                    </div>
                <div className='textoCard'>
                    <p>mundial vive con discapacidades según un informe de la ONU. Mejorar la usabilidad general disminuye la necesidad de soporte técnico.</p>      
                </div>
            </div>

            <div className='cardBeneficios'>
                <div className='encabezadoCard'>
                        <div className='imgEncabezado'>
                            <img src="./" alt="logo" />
                        </div>
                        <div className='textoEncabezado'>
                            <p>El 50% de las ventas </p>
                        </div>
                    </div>
            <div className='textoCard'>
                <p>tienen una destacable mejor opinión de las empresas que ofrecen una buena experiencia móvil, según un estudio de Google.</p>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Beneficios;
