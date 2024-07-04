import "./Home.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import FondoHome from "../../components/fondohome/FondoHome";

const home = () => {
  return (
    <div  className="home">
      <Navbar />
      <FondoHome />
      <Footer />
    </div>
  );
};

export default home;
