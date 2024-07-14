import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faBook, faUser, faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import './styles/UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'swalihina machano',
    email: 'swalihinamachano@gmail.com',
    activityLog: [
      'Completed initial assessment on 2024-05-31',
      'Viewed resources on managing anxiety',
      'Updated profile information'
    ],
    privacySettings: {
      shareData: true,
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

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
            <Link to="/resource">
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
            <Link to="/SettingPage">
              <FontAwesomeIcon icon={faCog} /> Settings Page
            </Link>
          </li>
        </ul>
      </nav>
      <div className="profile-container">
        <h1>Admin Profile</h1>
        <form onSubmit={handleSave}>
          <div className="profile-info">
          <div className="profile-field">
              <label>Username
                :</label>
              {isEditing ? (
                <input type="text" name="username" value={editedUser.name} onChange={handleChange} />
              ) : (
                <p>{user.name}</p>
              )}
            </div>
            <div className="profile-field">
              <label>Email:</label>
              {isEditing ? (
                <input type="email" name="email" value={editedUser.name} onChange={handleChange} />
              ) : (
                <p>{user.name}</p>
              )}
            </div>
            <div className="profile-field">
              <label>Password:</label>
              {isEditing ? (
                <input type="password" name="password" value={editedUser.email} onChange={handleChange} />
              ) : (
                <p>{user.email}</p>
              )}
            </div>
          </div>
          <div className="activity-log">
            <h2>Activity Log</h2>
            <div className="activity-log-items">
              {user.activityLog.map((activity, index) => (
                <div key={index} className="activity-log-item">{activity}</div>
              ))}
            </div>
          </div>
          <div className="privacy-settings">
            <h2>Privacy Settings</h2>
            {isEditing ? (
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="shareData"
                    checked={editedUser.privacySettings.shareData}
                    onChange={handleChange}
                  />
                  Share my data for research purposes
                </label>
              </div>
            ) : (
              <p>
                Share my data for research purposes: {user.privacySettings.shareData ? 'Yes' : 'No'}
              </p>
            )}
          </div>
          <div className="profile-actions">
            {isEditing ? (
              <button type="submit">Save</button>
            ) : (
              <button type="button" onClick={handleEdit}>Edit Profile</button>
            )}
          </div>
        </form>
        <ul>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
