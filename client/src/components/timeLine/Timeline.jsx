import { useLoaderData } from "react-router-dom";
import ModuloCard from "../modulosCard/ModuloCard";
import "./timeline.css";

const timelime = () => {
  const modulos = useLoaderData();
  console.log("modulos", modulos);
  return (
    <div className="timeline">
      <div className="timeline-titulo">
        <h2 className="timeline-tituloh2">Descubre nuestra metodología:</h2>
      </div>
      <div className="timeline-line"></div>
      <div className="timeline-phases">
        <section className="modulos_container">
          {modulos.map((modulo) => (
            <ModuloCard key={modulo._id} modulo={modulo} />
            
          ))}
        </section>
      </div>
    </div>
  );
};

export default timelime;
