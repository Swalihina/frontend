import React, { useState } from 'react';
import './SettingsPage.css';

const AccessibilitySettings = () => {
  const [fontSize, setFontSize] = useState('Medium');
  const [colorContrast, setColorContrast] = useState('Normal');

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
    // Logic to update user preferences in backend/database
  };

  const handleColorContrastChange = (event) => {
    setColorContrast(event.target.value);
    // Logic to update user preferences in backend/database
  };

  return (
    <div>
      <h3>Accessibility Settings</h3>
      <label>
        Font Size:
        <select value={fontSize} onChange={handleFontSizeChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <br />
      <label>
        Color Contrast:
        <select value={colorContrast} onChange={handleColorContrastChange}>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
      </label>
    </div>
  );
};

export default AccessibilitySettings;
