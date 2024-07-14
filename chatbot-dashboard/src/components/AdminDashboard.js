// src/components/AdminDashboard.js
import React from 'react';
import './styles/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faBook, faComments, faCog } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src="/2.png" alt="Chatbot Image" className="chatbot-image" />
        <h1>Al Chatbot</h1>
        
        <nav className="dashboard-nav">
          <ul>
            <li><a href="/admin-dashboard"><FontAwesomeIcon icon={faUser} /> Home</a></li>
            <li><a href="/users"><FontAwesomeIcon icon={faUser} /> Users</a></li>
            <li><a href="/AdminAssessment"><FontAwesomeIcon icon={faClipboardList} />AdminAssessment</a></li>
            <li><a href="/resource"><FontAwesomeIcon icon={faBook} /> Resources</a></li>
            <li><a href="/chatbot"><FontAwesomeIcon icon={faComments} /> Chat Logs</a></li>
            <li><a href="/settings"><FontAwesomeIcon icon={faCog} /> Settings</a></li>
            
          </ul>
        </nav>
      </header>

      <main className="dashboard-main">
        <section className="welcome-section">
          <h2>Welcome, Admin!</h2>
          <p>Here's an overview of the current activity in your app.</p>
        </section>

        <section className="stats-section">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>120</p>
          </div>
          <div className="stat-card">
            <h3>Completed Assessments</h3>
            <p>80</p>
          </div>
          <div className="stat-card">
            <h3>Active Resources</h3>
            <p>45</p>
          </div>
        </section>

        <section className="recent-activities">
          <h3>Recent Activities</h3>
          <ul>
            <li>User John Doe completed an assessment</li>
            <li>New resource on anxiety management added</li>
            <li>User Jane Smith updated profile information</li>
          </ul>
        </section>

        <section className="quick-actions">
          <h3>Quick Actions</h3>
          <button>Add New Assessment</button>
          <button>Add New Resource</button>
          <button>Update Resource</button>
          <button>Delete Resource</button>
          <button>Manage Users</button>
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
