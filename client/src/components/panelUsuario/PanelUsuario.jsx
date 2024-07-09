import { useContext } from "react";
import "./panelUsuario.css";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const panelUsuario = () => {
  const { user, logOut, handlefetchUserData } = useContext(UserContext);
  const navigate = useNavigate();


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
              {pack.packName}
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