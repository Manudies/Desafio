import Navbar from "../../components/navbar/navbar";
import Noti from "../../components/noti/noti";
import Footer from "../../components/footer/footer";
import "./contacto.css";

const contacto = () => {
    return (
        <div>
            <Navbar />
            <Noti />
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contáctanos</h1>
      <p><strong>Email:</strong> <a href="mailto:info@seniorityai.com">info@seniorityai.com</a></p>
      <p><strong>Teléfono:</strong> <a href="tel:+34603180484">+34 603 18 04 84</a></p>
      <p><strong>Dirección:</strong> Parque Tecnológico de Málaga - CADE</p>
      
      <h2>Redes Sociales</h2>
      <ul>
        <li><a href="https://www.instagram.com">Instagram</a></li>
        <li><a href="https://www.youtube.com">YouTube</a></li>
        <li><a href="https://www.linkedin.com">LinkedIn</a></li>
        <li><a href="https://www.facebook.com">Facebook</a></li>
      </ul>

      <h2>WhatsApp</h2>
      <p><a href="https://api.whatsapp.com/send?phone=34603180484">603 18 04 84</a></p>
    </div>
            <Footer />
        </div>
    );
};

export default contacto;