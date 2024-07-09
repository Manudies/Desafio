import { useState } from "react";
import questions from "./preguntasPack.js";
import "./formularioPack.css";
import ActionButton from "../../components/actionButton/actionButton";
import Tooltip from "../tooltip/Tooltip.jsx";
import BarraProgreso from "../../components/barraProgreso/BarraProgreso";
import "../../components/barraProgreso/BarraProgreso.css";
import { consultoria } from "../../utils/fetch.js";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/modal.jsx";
import { useLoaderData } from "react-router-dom";
import recomendaciones from "./recomendacionPacks.js";

const Main = () => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pack, setpack] = useState(null);
  const packs = useLoaderData();
  console.log("packs del loader", packs);
  const navigate = useNavigate();

  const formulario = questions[index];
  const recomendacion = recomendaciones;

  const handleNext = () => {
    if (index < questions.length - 1 && answers[index] !== undefined) {
      setIndex(index + 1);
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    if (index === 0) {
      navigate("/formacion");
    }
  };

  const handleAnswer = (key) => {
    const newAnswers = [...answers];
    newAnswers[index] = key;
    setAnswers(newAnswers);
    setShowWarning(false);
  };

  const handleAnswerRemove = () => {
    setAnswers([]);
  };

  const handleConsultoria = async () => {
    if (answers.length === questions.length && !answers.includes(undefined)) {
      const result = {};
      for (let i = 0; i < answers.length; i++) {
        result[`p${i + 1}`] = answers[i];
      }
      const response = await consultoria(result);
      handleAnswerRemove();
      console.log("Respuesta API", response.prediction);
      setpack(response.prediction);
      setIsModalOpen(true);
    } else {
      setShowWarning(true);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/consultoria", { state: { scrollTo: "packsMain" } });
  };
  const flecha = () => {
    return (
      <p>
        <span className="flecha-atras">←</span>Atrás
      </p>
    );
  };

  const handleRepetirTest = () => {
    //Cerrar modal
    setIsModalOpen(false);
    navigate("/formularioPack");
    setIndex(0);
  }


  return (
    <div className="main-content-pack">
      <div className="question-header-pack">
        <ActionButton
          label={flecha()}
          onClick={handlePrev}
          disabled={index === 0}
          className="button-anterior"
        />
        <BarraProgreso
          className="progress-bar-pack"
          currentQuestion={index + 1}
          totalQuestions={questions.length}
        />
      </div>

      <section className="section-form-pack">
        <Tooltip text="¿¿Eres tan tonto que no entiendes la pregunta??. Te diré algo estás chocheando" />
        <div className="questionForm-pack">{formulario.question}</div>
        {showWarning && (
          <div className="warning">Por favor, responde todas las preguntas</div>
        )}
        <div className="answers-container-pack">
          {Object.entries(formulario.answers).map(([key, value]) => (
            <div className="answers-pack" key={key}>
              <button
                onClick={() => handleAnswer(key)}
                className={answers[index] === key ? "selected" : ""}
              >
                {value}
              </button>
            </div>
          ))}
        </div>
      </section>

      <div>
        {index === questions.length - 1 ? (
          <ActionButton
            label="Enviar"
            onClick={handleConsultoria}
            className="button"
            disabled={answers[questions.length - 1] === undefined}
          />
        ) : (
          <ActionButton
            label="Siguiente"
            onClick={handleNext}
            className="button-siguiente"
            disabled={answers[index] === undefined}
          />
        )}
      </div>

      {/* <div>
        <button onClick={handleAnswerRemove}>Borrar respuestas</button>
      </div> */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div id="modalNombre">
            <div id="divModalNombre">
              <h2 className="modal-phase-h2">¡Gracias por rellenar el test!</h2>
              <div className="modal-phase-primero">
                <div className="basandonos">
                  <h2>Basándonos en tus respuestas, te recomendamos</h2>
                </div>
                <p className="modal-phase-name">{packs[pack].packName}</p>
              </div>
              <div className="modal-phase-primero">
                <div className="basandonos">
                  <h2>Por qué te lo recomendamos</h2>
                </div>
                <p className="modal-description">{recomendacion[pack].recomendacion}</p>
              </div>
            </div>
            <ActionButton 
            label="Repetir test"
            onClick={handleRepetirTest}
            className="button-modal-repeat"/>
            <ActionButton 
            label="Continuar"
            onClick={handleCloseModal}
            className="button-modal-continue"/>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Main;
