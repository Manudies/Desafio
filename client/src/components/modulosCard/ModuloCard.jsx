import { useState, useEffect, useContext } from "react";
import "./moduloCard.css";

import UserContext from "../../context/userContext";
import { useNavigate } from "react-router";

import Modal from "../modal/modal";
import ActionButton from "../actionButton/actionButton";
import { addModulo, removeModulo } from "../../utils/fetch";
import { useLoaderData } from "react-router-dom";
import saberMas from "./SaberMas.js";

const TarjetaModulo = ({ modulo }) => {
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const navigate = useNavigate();

  const openModal = () => {
    console.log("saberMas", saberMas,modulo)
    const faseInfo = saberMas.find(fase => fase.nombre === modulo.phaseName);
    if (faseInfo) {
      setModalContent(faseInfo);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    // navigate("/formacion", { state: { scrollTo: "moduloMainRef" } });

  };
  useEffect(() => {
    // Este efecto se ejecutará cada vez que cambie modulo.phaseName
    setIsModalOpen(false);
    setModalContent(null);
  }, [modulo.phaseName]);

  return (
    <div className="modulo-card">
      <details className="modulo-card-content">
        <summary className="card-title">
          {modulo.phaseName}
          {/* {getPhaseName(modulo.phaseName.toUpperCase())} */}
        </summary>
        <div className="main-container-card">
          <div className="learn-more-container">
            <button className="learn-more-button" onClick={openModal}>Quiero saber más</button>
          </div>
          <div className="modulo-card-content">
            {/* <h2 className="card-title">
            {getPhaseName(modulo.phaseName.toUpperCase())}
            </h2> */}
            <p className="description">{modulo.description}</p>
            <div className="details">
              <div className="detail-item-title">
                <p className="detail-title">Objetivo</p>
                <p className="detail-content">{modulo.objetive}</p>
              </div>
              <div className="detail-item-duration">
                <p className="detail-title">Duración</p>
                <p className="detail-content">{modulo.duration} semanas</p>
              </div>
            </div>
          </div>
        </div>
      </details>
      {isModalOpen && modalContent && (
        <Modal onClose={closeModal} className="modal-body-modulos">
          <div className="modalSaber-body">
            <div className="modalSaber-header">
              <h2>{modalContent.nombre}</h2>
            </div>
            <div className="modalSaber-objetivo">
              <p className="objetivo">{modalContent.objetivo}</p>
            </div>
            <div className="modalSaber-container">
              <div className="modalSaber-desarrollo">
                <h3 className="desarrolloTitulo">Desarrollo:</h3>
                <ul className="desarrolloContent">
                  {Object.values(modalContent.desarrollo).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="modalSaber-izquierda">
                <div className="modalSaber-duracion">
                  <h3 className="duracionTitulo">Duración:</h3>
                  <p className="duracionContent">{modalContent.duracion}</p>
                </div>
                <ActionButton
                  label="Solicita más información"
                  // onClick={handleRepetirTest}
                  className="buttonSaberMas" />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TarjetaModulo;
