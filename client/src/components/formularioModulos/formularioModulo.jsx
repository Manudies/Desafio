import React, { useState } from 'react';
import questions from './preguntasModulo.js';
import './formularioModulo.css';
import ActionButton from '../../components/actionButton/actionButton';

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
    }else{
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
    <main className="main-content">
      <>
        <section className="section-form">
          <div className='questionForm'>{formulario.question}</div>
          {showWarning && <div className="warning">Por favor, responde todas las preguntas</div>}
          <div className='answers-container'>
            {Object.entries(formulario.answers).map(([key, value]) => (
              <div className='answers' key={key}>
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

        <div className="navigation-buttons">
          <ActionButton label="Anterior" onClick={handlePrev} disabled={index === 0} className="button" />

          {index === questions.length - 1 ? (
            <ActionButton label="Enviar" onClick={handleSubmit} className="button" />
          ) : (
            <ActionButton label="Siguiente" onClick={handleNext} className="button" disabled={answers[index] === undefined} />
          )}
        </div>
        <div>
          <button onClick={handleAnswerRemove}>Borrar respuestas</button>
        </div>
      </>
    </main>
  );
}

export default Main;
