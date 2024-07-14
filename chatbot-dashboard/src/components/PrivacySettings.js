import React, { useState } from 'react';
import './SettingsPage.css';

const PrivacySettings = () => {
  const [shareWithDataPartners, setShareWithDataPartners] = useState(true);
  const [anonymizeData, setAnonymizeData] = useState(false);

  const handleShareWithDataPartnersChange = () => {
    setShareWithDataPartners(!shareWithDataPartners);
    // Logic to update user preferences in backend/database
  };

  const handleAnonymizeDataChange = () => {
    setAnonymizeData(!anonymizeData);
    // Logic to update user preferences in backend/database
  };

  return (
    <div>
      <h3>Privacy Settings</h3>
      <label>
        <input
          type="checkbox"
          checked={shareWithDataPartners}
          onChange={handleShareWithDataPartnersChange}
        />
        Share data with third parties
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={anonymizeData}
          onChange={handleAnonymizeDataChange}
        />
        Anonymize my data
      </label>
    </div>
  );
};

export default PrivacySettings;
