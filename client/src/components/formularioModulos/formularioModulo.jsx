import React, { useState } from 'react';
import questions from './preguntasModulo.js';
import './formularioModulo.css';

const Main = () => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const formulario = questions[index];

  // Función para avanzar a la siguiente pregunta
  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
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
  };

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    console.log('Respuestas enviadas:', answers);
    // Aquí puedes agregar lógica para enviar las respuestas, por ejemplo, a una API
  };

  const handleAnswerRemove = (answer) => {
    const newAnswers = [];
    setAnswers(newAnswers);
  };

  return (
    <main className="main-content">
      <section className="section-form">
        <div className='questionForm'>{formulario.question}</div>
        <div className='answers-container'>
          {Object.entries(formulario.answers).map(([key, value]) => (
            <div className='answers' key={key}>
              <button onClick={() => handleAnswer(key)}className='{answers[index] === key] ? "selected" : ""}'>{value}</button>
            </div>
          ))}
        </div>
      </section>

      <div className="navigation-buttons">
        <button className="button" onClick={handlePrev} disabled={index === 0}>
          Anterior
        </button>
        {index === questions.length - 1 ? (
          <button className="button" onClick={handleSubmit}>
            Enviar
          </button>
        ) : (
          <button className="button" onClick={handleNext}>
            Siguiente
          </button>
        )}
      </div>
      <button onClick={handleAnswerRemove}>Borrar respuestas</button>

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
