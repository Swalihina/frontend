import React from 'react';
import './SettingsPage.css';

const DataManagement = () => {
  const handleViewData = () => {
    // Logic to view user data
  };

  const handleRequestDataDeletion = () => {
    // Logic to request data deletion
  };

  return (
    <div>
      <h3>Data Management</h3>
      <button onClick={handleViewData}>View Data</button>
      <br />
      <button onClick={handleRequestDataDeletion}>Request Data Deletion</button>
    </div>
  );
};

export default DataManagement;
