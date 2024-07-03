import "./Consultoria.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Carrusel from "../../components/carrusel/Carrusel";
import Beneficios from "../../components/beneficios/Beneficios";
import Herramientas from "../../components/herramientas/Herramientas";
import RealizarTest from "../../components/realizarTest/RealizarTest";
import PacksList from "../../components/packs/PacksList";

const consultoria = () => {
  return (
    <div>
      <Navbar />
        <Beneficios/>
        <Carrusel/>
        <Herramientas/>
        <h2>Otro Texto</h2>
        <RealizarTest/>
        <PacksList/>
      {/* <Footer /> */}
    </div>
  );
};

export default consultoria;
