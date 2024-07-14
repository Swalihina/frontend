import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faBook, faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <img src="/2.png" alt="Chatbot Image" className="chatbot-image" />
      <h1>Welcome to the AI Chatbot</h1>
      <nav>
        <ul>
          <li>
            <Link to="/initial-assessment">
              <FontAwesomeIcon icon={faClipboardList} /> Initial Assessment
            </Link>
          </li>
          <li>
            <Link to="/resourcesSuggestion">
              <FontAwesomeIcon icon={faBook} /> Resources
            </Link>
          </li>
          <li>
            <Link to="/profile">
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
    </div>
  );
};

export default HomePage;
