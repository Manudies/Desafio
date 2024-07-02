import React, { useState } from 'react';
import questions from './preguntasPack.js';
import './formularioPack.css';
import ActionButton from '../../components/actionButton/actionButton';
import BarraProgreso from '../../components/barraProgreso/BarraProgreso';

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
    console.log('Respuestas enviadas:', answers);
    // Aquí puedes agregar lógica para enviar las respuestas, por ejemplo, a una API
  };

  const handleAnswerRemove = () => {
    setAnswers([]);
  };

  return (
    <main className="main-content-pack ">
      <section className="section-form-pack ">
        <div className='question-header-pack '>
          <div className="navigation-buttons-pack ">
          <ActionButton label="Atras" onClick={handlePrev} disabled={index === 0} className="button-anterior" />
          {index === questions.length - 1 ? (
            <ActionButton label="Enviar" onClick={handleSubmit} className="button" />
          ) : (
            <ActionButton label="Siguiente" onClick={handleNext} className="button" disabled={answers[index] === undefined} />
          )}
        </div>
        <BarraProgreso className="progress-bar-pack " currentQuestion={index + 1} totalQuestions={questions.length} />
        </div>
        <div className='questionForm-pack '>{formulario.question}</div>
        {showWarning && <div className="warning">Por favor, responde todas las preguntas</div>}
        <div className='answers-container-pack '>
          {Object.entries(formulario.answers).map(([key, value]) => (
            <div className='answers-pack ' key={key}>
              <button onClick={() => handleAnswer(key)}>{value}</button>
            </div>
          ))}
        </div>
      </section>

     
      <div>
        <button onClick={handleAnswerRemove}>Borrar respuestas</button>
      </div>
      {/* <div className="answers-summary">
        <h3>Respuestas:</h3>
        <ul>
          {answers.map((answer, idx) => (
            <li key={idx}>Pregunta {idx + 1}: {answer}</li>
          ))}
        </ul>
      </div> */}
    </main>
  );
}

export default Main;
