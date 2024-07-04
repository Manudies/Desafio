import "./formacion.css";
import Navbar from "../../components/navbar/navbar";
import Noti from "../../components/noti/noti";
import Footer from "../../components/footer/footer";
import Timeline from "../../components/timeLine/Timeline";
import ComienzoF from "../../components/formacion/ComienzoF/ComienzoF";
import HerramientasF from "../../components/formacion/herramientasF/HerramientasF";
import RealizarTestF from "../../components/formacion/realizarTestFormacion/RealizarTestF";
import Contactanos from "../../components/formacion/Contactanos/Contactanos";

const consultoria = () => {
  return (
    <div className="formacion">
      <Navbar />
      <Noti />
      <ComienzoF />
      <div className="formacionTexto">

        <h1 className="formacionTitle">Programa de desarrollo de empresas en la Silver Economy</h1>
        
        <p className="formacionText"><span className="negrita">Seniority</span>, junto a <span className="negrita">Xenior Studio</span>, colabora en un prestigioso <span className="negrita">programa de creación de productos y servicios</span> en la reciente Economía Plateada o Silver Economy. Este programa surge ante la necesidad, y la poca experiencia del sector, de crear soluciones para una generación de consumidores mayores de 55 años, también conocida como la Generación Silver.</p>
        <p className="formacionText">Muchos expertos en materia de marketing, negocio, diseño de productos... nos hemos alineado para dar la posibilidad a emprendedores y empresas a innovar de forma guiada y eficiente en esta economía.</p>
        <p className="formacionText">Gracias al apoyo de las Instituciones públicas <span className="negrita">, este programa puede desarrollar pruebas de usabilidad y testeo de productos en pruebas piloto controladas,</span> algo muy poco frecuente en las conocidas "Venture Builders" que existen en el mercado.</p>
        <p className="formacionText">Si tienes interés en emprender o en innovar en una economía con un alto impacto social y económico <span className="negrita">¡Sigue leyendo!</span></p>     
      </div>
      <div className="formacionImagen">
        <img src="./public/logos.png" alt="logos" />

      </div>

      <div className="formacionHerramientas">            
        <h1 className="formacionHerramientasTitle">¿Por qué es un programa especial?</h1>
      </div>
      <HerramientasF />
      <RealizarTestF />
      {/* <Timeline/> */}
      <RealizarTestF />
      <div className="frase">
        <h1 className="fraseTitle">No dejes que tu idea se quede en sólo una idea.</h1>
        <h1 className="fraseTitle">Únete a nuestro programa y déjanos ayudarte a hacerla realidad</h1>
      </div>
      <Contactanos/>
      <Footer />
    </div>
  );
};

export default consultoria;