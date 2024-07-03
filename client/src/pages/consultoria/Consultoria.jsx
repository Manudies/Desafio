import "./Consultoria.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Carrusel from "../../components/carrusel/Carrusel";
import Beneficios from "../../components/beneficios/Beneficios";
import Herramientas from "../../components/herramientas/Herramientas";


const consultoria = () => {
  return (
    <div>
      <Navbar />
      <Beneficios/>
      <Herramientas/>
      <Carrusel/>
      <Footer />
    </div>
  );
};

export default consultoria;
