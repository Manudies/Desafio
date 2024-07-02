import React from 'react';
import './BarraProgreso.css';

const BarraProgreso = ({ currentQuestion, totalQuestions }) => {
    const progressPercentage = (currentQuestion / totalQuestions) * 100;

    return (
        <div className="progress-bar-container-pack ">
            <div className="progress-bar-pack ">
                <div className="progress-pack " style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <span className="progress-text-pack ">{currentQuestion} de {totalQuestions}</span>
        </div>
    );
};

export default BarraProgreso;
