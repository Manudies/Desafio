import { useContext } from "react";
import "./panelUsuario.css";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { removePack, sendMail } from "../../utils/fetch";

const panelUsuario = () => {
  const { user, logOut, handlefetchUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handledeleteContratar = async (pack) => {
    if (user) {
      const deleteContratar = await removePack(user._id, pack._id);
      handlefetchUserData();
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
      <h1>Packs Contratados</h1>
      {user.pack && user.pack.length > 0 ? (
        <ul>
          {user.pack.map((pack, index) => (
            <li key={index}>
              {pack.packName}      <div className="favoritos__buttons">
                <button className="button_packs" onClick={() => handleBuyPack(pack)}>Comprar</button>
                <button
                  className="button_packs"
                  onClick={() => handledeleteContratar(pack)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes packs contratados</p>
      )}
        </div>
  );
};

export default panelUsuario;