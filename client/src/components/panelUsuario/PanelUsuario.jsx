import { useContext } from "react";
import "./panelUsuario.css";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
// import { removePack, sendMail } from "../../utils/fetch";

const panelUsuario = () => {
  const { user, logOut } = useContext(UserContext);
  // const navigate = useNavigate();

  return (
    <div className="panel_usuario">
      <div className="cabecera_panel">
        <h1 className="userName">{user.username}</h1>
        <button className="logout_button" onClick={logOut}>
          Logout
        </button>
      </div>
      <h1>Packs Contratados</h1>
      {user.pack}


            {/* {user.packs && user.packs.length > 0 ? (
                <ul>
                    {user.packs.map((pack, index) => (
                        <li key={index}>{pack.packName}</li>
                    ))}
                </ul>
            ) : (
                <p>No has contratado ningún pack</p>
            )} */}
        </div>
  );
};

export default panelUsuario;