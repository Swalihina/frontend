import React, { useState } from 'react';
import './SettingsPage.css';

const NotificationPreferences = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);

  const handleEmailNotificationsChange = () => {
    setEmailNotifications(!emailNotifications);
    // Logic to update user preferences in backend/database
  };

  const handlePushNotificationsChange = () => {
    setPushNotifications(!pushNotifications);
    // Logic to update user preferences in backend/database
  };

  const handleInAppNotificationsChange = () => {
    setInAppNotifications(!inAppNotifications);
    // Logic to update user preferences in backend/database
  };

  return (
    <div class="setting">
      <h3>Notification Preferences</h3>
      <label>
        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={handleEmailNotificationsChange}
        />
        Email Notifications
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={pushNotifications}
          onChange={handlePushNotificationsChange}
        />
        Push Notifications
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={inAppNotifications}
          onChange={handleInAppNotificationsChange}
        />
        In-App Notifications
      </label>
    </div>
  );
};

export default NotificationPreferences;
