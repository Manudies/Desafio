import { useLoaderData } from "react-router-dom"
import ModuloCard from "../modulosCard/ModuloCard";
import "./timeline.css";

const timelime = () => {
    const modulos = useLoaderData();
    console.log("modulos",modulos)
    return (
        <div className="timeline">
            <section className="modulos_container">
                {modulos.map((modulo) => (
                    <ModuloCard key={modulo._id} modulo={modulo} />
                ))}
            </section>

        </div>
    )
}

export default timelime