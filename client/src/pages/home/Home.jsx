import "./Home.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
const home = () => {
  return (
    <div>
      <Navbar />
      <img
        className="fondo"
        src="../../public/Captura.png"
        alt="Foto de fondo"
      />
      <Footer />
    </div>
  );
};

export default home;
