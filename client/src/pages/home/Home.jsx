import "./Home.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import FondoHome from "../../components/fondohome/FondoHome";
import Noti from "../../components/noti/noti";

const home = () => {
  return (
    <div  className="home">
      <Navbar />
      <FondoHome />
      <Noti />
    </div>
  );
};

export default home;
