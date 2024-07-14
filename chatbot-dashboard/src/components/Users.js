/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faBook, faUser, faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './styles/Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    fullName: '',
    status: '',
    role: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleAddUser = (user) => {
    axios.post('http://localhost:8080/api/users', user)
      .then(response => {
        setUsers([...users, response.data]);
        setShowAddForm(false);
        setNewUser({
          username: '',
          email: '',
          fullName: '',
          status: '',
          role: ''
        });
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddUser(newUser);
  };

  const handleEdit = (id) => {
    // Fetch user data for editing
    const editedUser = users.find(user => user.id === id);
    // Example: Populate a form or perform other edit logic
    console.log(`Editing user with id ${id}`, editedUser);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error(`Error deleting user with id ${id}:`, error);
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
      <div className="users-container">
        <h2>Users</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Full Name</th>
              <th>Status</th>
              <th>Date Created</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.fullName}</td>
                <td>{user.status}</td>
                <td>{user.dateCreated}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button 
          style={{ backgroundColor: 'lightblue', padding: '10px', margin: '10px 0' }} 
          onClick={() => setShowAddForm(true)}
        >
          Add
        </button>
        {showAddForm && (
          <form className="add-user-form" onSubmit={handleSubmit}>
            <h3>Add New User</h3>
            <label>
              Username:
              <input 
                type="text" 
                name="username" 
                value={newUser.username} 
                onChange={handleInputChange} 
                required 
              />
            </label>
            <label>
              Email:
              <input 
                type="email" 
                name="email" 
                value={newUser.email} 
                onChange={handleInputChange} 
                required 
              />
            </label>
            <label>
              Full Name:
              <input 
                type="text" 
                name="fullName" 
                value={newUser.fullName} 
                onChange={handleInputChange} 
                required 
              />
            </label>
            <label>
              Status:
              <input 
                type="text" 
                name="status" 
                value={newUser.status} 
                onChange={handleInputChange} 
                required 
              />
            </label>
            <label>
              Role:
              <input 
                type="text" 
                name="role" 
                value={newUser.role} 
                onChange={handleInputChange} 
                required 
              />
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Users;
