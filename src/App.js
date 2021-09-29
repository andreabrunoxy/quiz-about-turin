import React, { useState } from 'react';
import click from '../src/assets/click.mp3';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: 'In which part of Italy Turin is located?',
      answerOptions: [
        { answerText: 'Northern Italy.', points: 1 },
        { answerText: 'Center of Italy.', points: 0 },
        { answerText: 'Southern Italy.', points: 0 }
      ]
    },
    {
      questionText: 'How many inhabitants does Turin have?',
      answerOptions: [
        { answerText: 'More than a million.', points: 0 },
        { answerText: 'Between 500k and one million.', points: 1 },
        { answerText: 'Less than 500k.', points: 0 }
      ]
    },
    {
      questionText: 'Which of these monuments is the symbol of Turin?',
      answerOptions: [
        { answerText: 'Sforzesco Castle.', points: 0 },
        { answerText: 'The Pantheon.', points: 0 },
        { answerText: 'Mole Antonelliana.', points: 1 }
      ]
    },
    {
      questionText: 'Which of these museums can you visit in Turin?',
      answerOptions: [
        { answerText: 'Wax Museum.', points: 0 },
        { answerText: 'Cinema Museum.', points: 1 },
        { answerText: 'Pinacoteca di Brera.', points: 0 }
      ]
    },
    {
      questionText: 'Which of these football teams is from Turin?',
      answerOptions: [
        { answerText: 'Inter.', points: 0 },
        { answerText: 'Juventus.', points: 1 },
        { answerText: 'Atalanta.', points: 0 }
      ]
    },
    {
      questionText: 'Which of these car manufacturers was founded in Turin?',
      answerOptions: [
        { answerText: 'Fiat.', points: 1 },
        { answerText: 'Ferrari.', points: 0 },
        { answerText: 'Dacia.', points: 0 }
      ]
    },
    {
      questionText: 'Which of these Nobel Prizes was born in Turin?',
      answerOptions: [
        { answerText: 'Enrico Fermi.', points: 0 },
        { answerText: 'Dario Fo.', points: 0 },
        { answerText: 'Rita Levi-Montalcini.', points: 1 }
      ]
    },
    {
      questionText: 'Which of these traditional foods is typical in Turin?',
      answerOptions: [
        { answerText: 'Bagna cauda.', points: 1 },
        { answerText: 'Parmigiana.', points: 0 },
        { answerText: 'Pasta alla carbonara.', points: 0 }
      ]
    },
    {
      questionText: 'In which year was Turin declared the capital of Italy?',
      answerOptions: [
        { answerText: '1848.', points: 0 },
        { answerText: '1861.', points: 1 },
        { answerText: 'Never.', points: 0 }
      ]
    },
    {
      questionText: 'Which mountains frame Turin?',
      answerOptions: [
        { answerText: 'The Apennines.', points: 0 },
        { answerText: 'The Alps.', points: 1 },
        { answerText: 'The Pyrenees.', points: 0 }
      ]
    }
  ];

  function handleAnswerButtonClick(points) {
    new Audio(click).play();
    if (points) {
      setScore(score + points);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  function handleReset() {
    new Audio(click).play();
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  //RENDERING JSX DELL'APP//
  if (showScore && score > 7) {
    return (
      <>
        <h1>QUIZ</h1>
        <h2>Do you know Turin?</h2>
        <div className="app">
          <div className="score-section">
            Your score is: <br /> {score} out of {questions.length}. <br />
            <br />
            Congratulations, you know Turin very well!
          </div>
          <button className="button-reset" onClick={() => handleReset()}>
            Restart
          </button>
        </div>
        <footer>Made with ❤️ by Andrea Bruno</footer>
      </>
    );
  } else if (showScore && score >= 5 && score <= 7) {
    return (
      <>
        <h1>QUIZ</h1>
        <h2>Do you know Turin?</h2>
        <div className="app">
          <div className="score-section">
            Your score is: <br />
            {score} out of {questions.length}. <br />
            <br />
            Not bad! You should come here to find out more!
          </div>
          <button className="button-reset" onClick={() => handleReset()}>
            Restart
          </button>
        </div>
        <footer>Made with ❤️ by Andrea Bruno</footer>
      </>
    );
  } else if (showScore && score < 5) {
    return (
      <>
        <h1>QUIZ</h1>
        <h2>Do you know Turin?</h2>
        <div className="app">
          <div className="score-section">
            Your score is: <br /> {score} out of {questions.length}. <br />
            <br />
            You should definitely come and visit Turin!
          </div>
          <button className="button-reset" onClick={() => handleReset()}>
            Ricomincia
          </button>
        </div>
        <footer>Made with ❤️ by Andrea Bruno</footer>
      </>
    );
  } else {
    return (
      <>
        <h1>QUIZ</h1>
        <h2>Do you know Turin?</h2>
        <div className="app">
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                className="button-answer"
                onClick={() => handleAnswerButtonClick(answerOption.points)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
        <footer>Made with ❤️ by Andrea Bruno</footer>
      </>
    );
  }
}
