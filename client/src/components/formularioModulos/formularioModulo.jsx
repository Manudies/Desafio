import React, { useState } from "react";
import questions from "./preguntasModulo.js";
import "./formularioModulo.css";
import ActionButton from "../../components/actionButton/actionButton";
import BarraProgreso from "../../components/barraProgreso/BarraProgreso";
import "../../components/barraProgreso/BarraProgreso.css";
import { formacion } from "../../utils/fetch.js";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/modal.jsx";
import { useLoaderData } from "react-router-dom";

const Main = () => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modulo, setModulo] = useState(null);
  const modulos = useLoaderData();
  console.log("modulos", modulos);

  const navigate = useNavigate();

  const formulario = questions[index];

  // Función para avanzar a la siguiente pregunta
  const handleNext = () => {
    if (index < questions.length - 1 && answers[index] !== undefined) {
      setIndex(index + 1);
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  // Función para retroceder a la pregunta anterior
  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    if (index === 0) {
      navigate("/formacion");
    }
  };

  // Función para guardar las respuestas del formulario
  const handleAnswer = (key) => {
    const newAnswers = [...answers];
    newAnswers[index] = key;
    setAnswers(newAnswers);
    setShowWarning(false);
  };

  // // Función para manejar el envío del formulario
  // const handleSubmit = () => {
  //   console.log("Respuestas enviadas:", answers);
  //   // Aquí puedes agregar lógica para enviar las respuestas, por ejemplo, a una API
  // };

  const handleAnswerRemove = () => {
    setAnswers([]);
  };

  const handleFormacion = async () => {
    if (answers.length === questions.length && !answers.includes(undefined)) {
      console.log("Respuestas enviadas:", answers);
      const result = {};
      for (let i = 0; i < answers.length; i++) {
        result[`p${i + 1}`] = answers[i];
      }
      const response = await formacion(result);
      handleAnswerRemove();
      console.log("La RESPUESTA DE DATA ES:", response.prediction);
      setModulo(response.prediction);
      setIsModalOpen(true); // Abre el modal en lugar de navegar directamente
    } else {
      setShowWarning(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/formacion", { state: { scrollTo: "moduloMainRef" } });
  };

  const flecha = () => {
    return (
      <p>
        <span className="flecha-atras">←</span>Atrás
      </p>
    );
  };
  const getPhaseName = (phaseName) => {
    let parts = phaseName.split(":");
    console.log(parts);
    parts = parts[1].split(" ");
    return parts.length > 1 ? parts[1] : phaseName;
  };

  return (
    <div className="content-modulo">
      <div className="question-header-modulo">
        <ActionButton
          label={flecha()}
          onClick={handlePrev}
          disabled={index === 0}
          className="button-atras"
        />
        <BarraProgreso
          className="progress-bar-modulo "
          currentQuestion={index + 1}
          totalQuestions={questions.length}
        />
      </div>

      <section className="section-form-modulo">
        <div className="questionForm-modulo">{formulario.question}</div>
        {showWarning && (
          <div className="warning">Por favor, responde todas las preguntas</div>
        )}
        <div className="answers-container-modulo">
          {Object.entries(formulario.answers).map(([key, value]) => (
            <div className="answers-modulo" key={key}>
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

      <div className="navigation-buttons">
        {index === questions.length - 1 ? (
          <ActionButton
            label="Enviar"
            onClick={handleFormacion}
            className="button"
            disabled={answers[questions.length - 1] === undefined}
          />
        ) : (
          <ActionButton
            label="Siguiente"
            onClick={handleNext}
            className="button-siguiente"
          />
        )}
      </div>
      <div>
        <button onClick={handleAnswerRemove}>Borrar respuestas</button>
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div id="modalNombre">
            <div id="divModalNombre">
              <h2 className="modal-phase-h2">¡Gracias por rellenar el test!</h2>
              <div className="modal-phase-primero">
                <div className="basandonos">
                <h2>Basándonos en tus respuestas, te recomendamos</h2>
                </div>
                <p className="modal-phase-name">{getPhaseName(modulos[modulo].phaseName)}</p>
              </div>
              <p className="modal-description">
                Descripción: {modulos[modulo].description}
              </p>
            </div>
            <div id="modalInferior">
              {/* <div id="divModalIMG">
                <img src="/path-to-your-image.jpg" alt="Imagen informativa" />
              </div> */}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Main;
