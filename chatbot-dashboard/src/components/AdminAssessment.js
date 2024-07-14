import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faBook, faUser, faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import './styles/Assessment.css';

const questions = [
  "How often have you felt down, depressed, or hopeless in the last 2 weeks?",
  "How often have you felt little interest or pleasure in doing things?",
  "How often have you felt tired or had little energy?",
  "How often have you had trouble falling or staying asleep, or sleeping too much?",
  "How often have you felt bad about yourself or that you are a failure or have let yourself or your family down?"
];

const Assessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      <img src="/2.png" alt="Chatbot Image" className="chatbot-image" />
      <h1>Welcome to the AI Chatbot</h1>
      <nav>
        <ul>
          <li>
            <Link to="/AdminAssessment">
              <FontAwesomeIcon icon={faClipboardList} /> Initial Assessment
            </Link>
          </li>
          <li>
            <Link to="/Resource">
              <FontAwesomeIcon icon={faBook} /> Resources
            </Link>
          </li>
          <li>
            <Link to="/AdminProfile">
              <FontAwesomeIcon icon={faUser} /> Profile
            </Link>
          </li>
          <li>
            <Link to="/chat">
              <FontAwesomeIcon icon={faComments} /> Chat
            </Link>
          </li>
          <li>
            <Link to="/SettingPage">
              <FontAwesomeIcon icon={faCog} /> Settings Page
            </Link>
          </li>
        </ul>
      </nav>
  
      <div className="assessment-container">
        <h1>Initial Assessment</h1>
        {currentQuestionIndex < questions.length ? (
          <div>
            <p>{questions[currentQuestionIndex]}</p>
            <button onClick={() => handleAnswer('Never')}>Never</button>
            <button onClick={() => handleAnswer('Several days')}>Several days</button>
            <button onClick={() => handleAnswer('More than half the days')}>More than half the days</button>
            <button onClick={() => handleAnswer('Nearly every day')}>Nearly every day</button>
          </div>
        ) : (
          <div>
            <h2>Thank you for completing the assessment!</h2>
            <p>Your responses have been recorded.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;
