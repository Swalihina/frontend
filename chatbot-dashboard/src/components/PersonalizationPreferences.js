import React, { useState } from 'react';
import './SettingsPage.css';

const PersonalizationPreferences = () => {
  const [language, setLanguage] = useState('English');
  const [chatbotStyle, setChatbotStyle] = useState('Casual');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    // Logic to update user preferences in backend/database
  };

  const handleChatbotStyleChange = (event) => {
    setChatbotStyle(event.target.value);
    // Logic to update user preferences in backend/database
  };

  return (
    <div>
      <h3>Personalization Preferences</h3>
      <label>
        Preferred Language:
        <select value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          {/* Add more languages as needed */}
        </select>
      </label>
      <br />
      <label>
        Chatbot Style:
        <select value={chatbotStyle} onChange={handleChatbotStyleChange}>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          {/* Add more styles as needed */}
        </select>
      </label>
    </div>
  );
};

export default PersonalizationPreferences;
