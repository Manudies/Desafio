import "./formacion.css";
import Navbar from "../../components/navbar/navbar";
import Noti from "../../components/noti/noti";
import Footer from "../../components/footer/footer";
import Timeline from "../../components/timeLine/Timeline";

const consultoria = () => {
  return (
    <div className="formacion">
      <Navbar />
      <Noti />
      <Timeline/>
      <Footer />
    </div>
  );
};

export default consultoria;