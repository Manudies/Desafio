import React, { useState } from "react";
import questions from "./preguntasPack.js";
import "./formularioPack.css";
import ActionButton from "../../components/actionButton/actionButton";
import Tooltip from "../tooltip/Tooltip.jsx";
import BarraProgreso from "../../components/barraProgreso/BarraProgreso";
import "../../components/barraProgreso/BarraProgreso.css";
import { consultoria } from "../../utils/fetch.js";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate(); 

  const formulario = questions[index];

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
      console.log("Respuestas enviadas:", answers);
      const result = {};
      for (let i = 0; i < answers.length; i++) {
        result[`p${i + 1}`] = answers[i];
      }
      const response = await consultoria(result);
      handleAnswerRemove();
      console.log("Respuesta API", response);
      navigate("/consultoria", { state: { scrollTo: "packsMain" } });
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="main-content-pack">
      <div className="question-header-pack">
        <ActionButton
          label="← Atras"
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
                className={answers[index] === key ? 'selected' : ''}
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

      <div>
        <button onClick={handleAnswerRemove}>Borrar respuestas</button>
      </div>
    </div>
  );
};

export default Main;