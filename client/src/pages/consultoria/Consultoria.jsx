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
const consultoria = () => {
  return (
    <div className="consultoria">
      <Navbar />
      <Noti />
      <Comienzo />
      <Beneficios />
      <Carrusel />
      <Herramientas />
      <h2>Otro Texto</h2>
      <RealizarTest />
      <PacksList />
      <Descubre />
      <Footer />
    </div>
  );
};

export default consultoria;
