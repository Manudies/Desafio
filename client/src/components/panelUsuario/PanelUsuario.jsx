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
      <h1>Packs Recomendados</h1>
      {user.pack && user.pack.length > 0 ? (
        <ul>
          {user.pack.map((pack, index) => (
            <li key={index}>{pack.packName}</li>
          ))}
        </ul>
      ) : (
        <p>No tienes packs recomendados</p>
      )}
      <h1>Modulos Recomendados</h1>
      {user.modulos && user.modulos.length > 0 ? (
        <ul>
          {user.modulo.map((modulo, index) => (
            <li key={index}>
              {modulo.phaseName}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes modulos recomendados</p>
      )}
    </div>
  );
};

export default panelUsuario;
