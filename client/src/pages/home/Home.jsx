import "./Home.css";
import Navbar from "../../components/navbar/navbar";
const home = () => {
  return (
    <div>
      <Navbar />
      <img
        className="fondo"
        src="../../public/Captura.png"
        alt="Foto de fondo"
      />
    </div>
  );
};

export default home;
