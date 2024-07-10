import "./Consultoria.css";
import Navbar from "../../components/navbar/navbar";
import Noti from "../../components/noti/noti";
import Footer from "../../components/footer/footer";
import Carrusel from "../../components/consultoria/carrusel/Carrusel";
import Beneficios from "../../components/consultoria/beneficios/Beneficios";
import Herramientas from "../../components/consultoria/herramientas/Herramientas";
import RealizarTest from "../../components/consultoria/realizarTest/RealizarTest";
import PacksList from "../../components/packs/PacksList";
import Descubre from "../../components/consultoria/descubre/Descubre";
import Comienzo from "../../components/consultoria/comienzo/Comienzo";
import ScrollButton from "../../components/scrollButton/ScrollButton";
import Punto from "../../components/puntoAcesibilidad/Punto";
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
const consultoria = () => {
  const [defaultPack, setDefaultPack] = useState(0);
  const location = useLocation();
  const packsMainRef = useRef(null);

  useEffect(() => {
    console.log("location.state", location.state);
    if (location.state && location.state.packId) {
      setDefaultPack(location.state.packId);
    }
    if (location.state && location.state.scrollTo === "packsMain") {
      packsMainRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div className="consultoria">
      <Navbar />
      <Noti />
      <Comienzo />
      <Herramientas />
      <Carrusel />
      <Beneficios />
      <h2 className="descubrePacks">Descubre nuestros servicios</h2>
      <div ref={packsMainRef}>
        <PacksList defaultPack={defaultPack} />
      </div>
      <RealizarTest />
      <Descubre />
      <ScrollButton />
      <Footer />
      <Punto />
    </div>
  );
};

export default consultoria;
