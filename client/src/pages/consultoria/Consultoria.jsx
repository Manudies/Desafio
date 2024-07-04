import "./Consultoria.css";
import Navbar from "../../components/navbar/navbar";
import Noti from "../../components/noti/noti";
import Footer from "../../components/footer/footer";
import Carrusel from "../../components/carrusel/Carrusel";
import Beneficios from "../../components/beneficios/Beneficios";
import Herramientas from "../../components/herramientas/Herramientas";
import RealizarTest from "../../components/realizarTest/RealizarTest";
import PacksList from "../../components/packs/PacksList";
import Descubre from "../../components/descubre/Descubre";
import Comienzo from "../../components/comienzo/Comienzo";
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
