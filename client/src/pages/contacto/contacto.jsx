import Navbar from "../../components/navbar/navbar";
import Noti from "../../components/noti/noti";
import Footer from "../../components/footer/footer";
import "./contacto.css";
import tuImagen from "../../../public/llamada.jpg";
import ScrollButton from "../../components/scrollButton/ScrollButton";

const contacto = () => {
    const backgroundImage ={
    backgroundImage: `url(${tuImagen})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: 'calc(100vh + 150px)',
    };

    return (
        <div style={backgroundImage}>
            <Navbar />
            <div className="main-contacto">
                <div className="contacto-container">
                    <div className="contactanos">
                        <h1>Contáctanos</h1>
                    </div>
                    <div className="contactos">
                        <h2>Vías de contacto:</h2>
                        <p><strong>Teléfono:</strong> <a href="tel:603180484">603 18 04 84</a></p>
                        <p><strong>Email:</strong> <a href="mailto:info@seniorityai.com">info@seniorityai.com</a></p>
                        <p><strong>Dirección:</strong> Parque Tecnológico de Málaga - CADE</p>
                    </div>

                    <div className="redes-sociales">
                        <h2>Redes Sociales:</h2>
                        <p><a href="https://www.instagram.com/seniority_ai/" target="_blank">Instagram</a></p>
                        <p><a href="https://www.youtube.com/@seniority_ai" target="_blank">YouTube</a></p>
                        <p><a href="https://www.linkedin.com/company/seniorityai/" target="_blank">LinkedIn</a></p>
                        <p><a href="https://www.facebook.com/profile.php?id=100089844576324" target="_blank">Facebook</a></p>
                    </div>
                </div>
            </div>
            <ScrollButton />
            <Footer />
        </div>
    );
};

export default contacto;