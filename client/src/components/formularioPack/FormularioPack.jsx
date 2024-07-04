import React, { useState } from "react";
import questions from "./preguntasPack.js";
import "./formularioPack.css";
import ActionButton from "../../components/actionButton/actionButton";
import Tooltip from "../tooltip/Tooltip.jsx";
import BarraProgreso from "../../components/barraProgreso/BarraProgreso";
import "../../components/barraProgreso/BarraProgreso.css";

const Main = () => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showWarning, setShowWarning] = useState(false);

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
  };

  // Función para guardar las respuestas del formulario
  const handleAnswer = (key) => {
    const newAnswers = [...answers];
    newAnswers[index] = key;
    setAnswers(newAnswers);
    setShowWarning(false);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    console.log("Respuestas enviadas:", answers);
    // Aquí puedes agregar lógica para enviar las respuestas, por ejemplo, a una API
  };

  const handleAnswerRemove = () => {
    setAnswers([]);
  };

  return (
    <main className="main-content-pack ">
      <div className="question-header-pack ">
        <ActionButton
          label="← Atras"
          onClick={handlePrev}
          disabled={index === 0}
          className="button-anterior"
        />
        <BarraProgreso
          className="progress-bar-pack "
          currentQuestion={index + 1}
          totalQuestions={questions.length}
        />
      </div>

      <section className="section-form-pack ">
        <Tooltip text="¿¿Eres tan tonto que no entiendes la pregunta??. Te diré algo estás chocheando" />
        <div className="questionForm-pack ">{formulario.question}</div>
        {showWarning && (
          <div className="warning">Por favor, responde todas las preguntas</div>
        )}
        <div className="answers-container-pack ">
          {Object.entries(formulario.answers).map(([key, value]) => (
            <div className="answers-pack " key={key}>
              <button onClick={() => handleAnswer(key)}>{value}</button>
            </div>
          ))}
        </div>
      </section>

      <div>
        {index === questions.length - 1 ? (
          <ActionButton
            label="Enviar"
            onClick={handleSubmit}
            className="button"
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

      <div>
        <button onClick={handleAnswerRemove}>Borrar respuestas</button>
      </div>
    </div>
  );
};

export default Main;
