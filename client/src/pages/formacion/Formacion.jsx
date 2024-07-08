import "./formacion.css";
import Navbar from "../../components/navbar/navbar";
import Noti from "../../components/noti/noti";
import Footer from "../../components/footer/footer";
import Timeline from "../../components/timeLine/Timeline";
import Fcomienzo from "../../components/formacion/ComienzoF/ComienzoF";
import Programas from "../../components/formacion/Programas/Programas";
import HerramientasF from "../../components/formacion/herramientasF/HerramientasF";
import RealizarTestF from "../../components/formacion/realizarTestFormacion/RealizarTestF";
import DescubreF from "../../components/formacion/DescubreF/DescubreF";

import Contactanos from "../../components/formacion/Contactanos/Contactanos";
import ScrollButton from "../../components/scrollButton/ScrollButton";
import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

const consultoria = () => {
  const location = useLocation();
  const moduloMainRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.scrollTo === "moduloMainRef") {
      moduloMainRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className="formacion">
      <Navbar />
      <Noti />
      <Fcomienzo />
      <Programas/>
      <div className="formacionImagen">
        <img src="./public/logos.png" alt="logos" className="logosFormacion"/>
      </div>
      <HerramientasF />
      <div ref={moduloMainRef} className="timelineContainer">
        <Timeline />
      </div>
      <RealizarTestF />
      <div className="frase">
        <h1 className="fraseTitle">
          No dejes que tu idea se quede en sólo una idea.
        </h1>
        <h1 className="fraseTitle">
          Únete a nuestro programa y déjanos ayudarte a hacerla realidad
        </h1>
      </div>
      <DescubreF/>
      <ScrollButton />
      <Footer />
    </div>
  );
};

export default consultoria;
