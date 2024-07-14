import React, { useState } from 'react';
import './SettingsPage.css';

const AccountManagement = () => {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Logic to update user email in backend/database
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Logic to update user password in backend/database
  };

  const handlePasswordReset = () => {
    // Logic to reset user password
  };

  return (
    <div>
      <h3>Account Management</h3>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button onClick={handlePasswordReset}>Reset Password</button>
    </div>
  );
};

export default AccountManagement;
