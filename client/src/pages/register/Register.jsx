import { useState, useContext } from "react";
import { register, login } from "../../utils/fetch";
import { saveToken } from "../../utils/local";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../components/actionButton/actionButton";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import UserContext from "../../context/userContext";
import "./Register.css";

const initialUserData = {
  username: "",
  email: "",
  password: "",
  passwordRepeat: "",
};

const Register = ({}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(initialUserData);
  const navigate = useNavigate();
  const { handlefetchUserData } = useContext(UserContext);

  const handleUserData = (e) => {
    e.preventDefault();
    const data = e.target.value;
    const key = e.target.name;
    setUserData((userData) => {
      return {
        ...userData,
        [key]: data,
      };
    });
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  };
  //maximo numero de caracteres 18, y no se aceptán caracteres especiales
  const validateUserName = (username) => {
    if (username.length > 18 || /\W/.test(username)) {
      setError(
        "El usuario debe tener menos de 18 caracteres y no aceptar caracteres especiales"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister) {
      if (!validateUserName(userData.username)) {
        return;
      }
      if (!validateEmail(userData.email)) {
        setError("El formato de mail no es válido");
        return;
      }
      if (!validatePassword(userData.password)) {
        setError(
          "La contrena debe tener al menos 8 caracteres, una mayúscula, un número y un caracter especial"
        );
        return;
      }
      if (userData.password !== userData.passwordRepeat) {
        setError("Las contraseñas no coinciden");
        return;
      }
    }

    let result;
    if (isRegister) {
      result = await register(userData);
      if (!result.error) {
        setIsRegister(false);
        setError("Usuario registrado correctamente");
      } else {
        setError(result.error);
      }
    } else {
      result = await login(userData);
      if (!result.error) {
        setError("Login correcto");
        saveToken(result.token);
        handlefetchUserData();
        navigate("/");
      } else {
        setError(result.error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <section className="register-login">
        <div className="aquí-button">
          <ActionButton
            onClick={() => setIsRegister((register) => !register)}
            label={isRegister ? "¿Ya tienes cuenta? Entra" : "Ve al registro"}
            className="register-login-button"
          />
        </div>
        <h2>¡Te damos la bienvenida a Seniority!</h2>
        <p>
          Nos gustaría conocer un poco tu negocio antes de enviarte el acceso a
          Seniority.
        </p>
        {/* <h2>{isRegister ? "Register" : "Login"}</h2> */}
        {error && <div className="error-message">{error}</div>}
        <form className="register-login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              name="username"
              type="text"
              placeholder="Nombre de usuario"
              value={userData.username}
              onChange={handleUserData}
              required
            />
          </div>
          {isRegister && (
            <div className="input-group">
              <label htmlFor="email">@ Correo electrónico</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleUserData}
                required
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="password"> Contraseña</label>
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              value={userData.password}
              onChange={handleUserData}
              required
            />
          </div>
          {isRegister && (
            <div className="input-group">
              <label htmlFor="passwordRepeat">Repite la Contraseña</label>
              <input
                name="passwordRepeat"
                type="password"
                placeholder="Repite la contraseña"
                value={userData.passwordRepeat}
                onChange={handleUserData}
                required
              />
          <div className="password-requirements">
            La contraseña debe contener:
            <ul>
              <li>8 letras</li>
              <li>1 mayúscula</li>
              <li>1 número</li>
              <li>1 caracter especial</li>
            </ul>
          </div>
          <div className="terms-checkbox">
              <div>
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  Aceptar las Condiciones Generales, la Política de Privacidad y
                  recibir novedades y promociones.
                </label>
              </div>

          </div>
            </div>
          )}
          <ActionButton
            label={isRegister ? "Crear cuenta" : "Entrar"}
            className={"final-button"}
          />
        </form>
        <div className="existing-user"></div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
