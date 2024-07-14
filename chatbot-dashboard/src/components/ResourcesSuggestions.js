import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faBook, faUser, faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import './styles/Resources.css';

const resources = [
  { title: "Managing Anxiety", description: "Tips and strategies for managing anxiety.", link: "https://www.overcomefeartoday.com/overcoming-fear?gad_source=1&gclid=Cj0KCQjwpZWzBhC0ARIsACvjWRP4a249INNgIKQNDR7IdtpSEPdxdu1w63jdIL6uPhoIouhjS9HBZWEaAvh1EALw_wcB" },
  { title: "Understanding Depression", description: "Learn more about depression and how to cope.", link: "https://www.nhs.uk/mental-health/self-help/tips-and-support/cope-with-depression/" },
  { title: "Stress Management Techniques", description: "Effective techniques for managing stress.", link: "https://www.webmd.com/balance/stress-management/stress-management" }
];

const ResourcesSuggestions = () => {
  return (
    <div>
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
            <Link to="/resources">
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
      <div className="resources-container">
        <h1>Resources and Suggestions</h1>
        <div className="resource-list">
          {resources.map((resource, index) => (
            <div key={index} className="resource-item">
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <a href={resource.link}>Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSuggestions;
