import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faBook, faUser, faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import NotificationPreferences from './NotificationPreferences';
import PrivacySettings from './PrivacySettings';
import PersonalizationPreferences from './PersonalizationPreferences';
import DataManagement from './DataManagement';
import AccessibilitySettings from './AccessibilitySettings';
import ChatHistoryPreferences from './ChatHistoryPreferences';
import AccountManagement from './AccountManagement';
import FeedbackAndSupport from './FeedbackAndSupport';
import './SettingsPage.css';

const SettingsPage = () => {
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
            <Link to="/chatbot">
              <FontAwesomeIcon icon={faComments} /> Chat
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FontAwesomeIcon icon={faCog} /> Settings Page
            </Link>
          </li>
        </ul>
      </nav>
      <div className="settings-container">
        <h2>User Settings</h2>
        <div className="settings-section">
          <NotificationPreferences />
        </div>
        <hr />
        <div className="settings-section">
          <PrivacySettings />
        </div>
        <hr />
        <div className="settings-section">
          <PersonalizationPreferences />
        </div>
        <hr />
        <div className="settings-section">
          <DataManagement />
        </div>
        <hr />
        <div className="settings-section">
          <AccessibilitySettings />
        </div>
        <hr />
        <div className="settings-section">
          <ChatHistoryPreferences />
        </div>
        <hr />
        <div className="settings-section">
          <AccountManagement />
        </div>
        <hr />
        <div className="settings-section">
          <FeedbackAndSupport />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
