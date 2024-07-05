import { useContext } from "react";
import "./panelUsuario.css";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { removePack, sendMail } from "../../utils/fetch";

const panelUsuario = ({ user }) => {
  const { handlefetchUserData, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handledeletefavoritos = async (pack) => {
    if (user) {
      console.log("pack._id", pack._id);
      console.log("user", user._id);
      const deleteFavoritos = await removePack(user._id, pack._id);
      handlefetchUserData();
    } else {
      alert("Debes iniciar sesión");
      navigate("/register");
    }
  };

  const handleBuyPack = async (pack) => {
    if (user) {
      try {
        const response = await sendMail( {
          to: user.email,
          subject: 'Confirmación de compra',
          text: `Hola ${user.username},\n\nGracias por comprar el viaje a ${pack.packName}. Disfruta de tu aventura!\n\nSaludos,\nEl equipo de Horizontes Lejanos`
        });
        alert(`Correo de confirmación enviado a ${user.email}!`);
        handledeletefavoritos(pack);
      } catch (error) {
        console.error("Error enviando el correo de confirmación", error);
        alert("Hubo un error al enviar el correo de confirmación.");
      }
    } else {
      alert("Debes iniciar sesión");
      navigate("/register");
    }
  };


  return (
    <div className="panel_usuario">
      <div className="cabecera_panel">
        <h1 className="userName">{user.username}</h1>
        <button className="logout_button" onClick={logOut}>
          Logout
        </button>
      </div>
      {/* <h2>Packs:</h2>
      <div className="user_favoritos">
        <ul className="favoritos">
          {user.packs.map((pack) => (
            <li>
              <p>{pack.packName}</p>
              <p>{pack.description}</p>
              <p>{pack.include}</p>
              <p>{pack.deliverables}</p>
              
              <div className="favoritos__buttons">
                <button className="button_packs" onClick={() => handleBuyPack(pack)}>Comprar</button>
                <button
                  className="button_packs"
                  onClick={() => handledeletefavoritos(pack)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default panelUsuario;
