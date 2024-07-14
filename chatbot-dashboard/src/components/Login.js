import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Auth.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faCircle } from '@fortawesome/free-solid-svg-icons'; // Updated icon import

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating a successful login without backend interaction
    // Replace this with actual backend integration in a real application
    setTimeout(() => {
      console.log('Login successful');
      navigate('/home'); // Redirect to home page
    }, 1000); // Simulating a delay for a more realistic scenario
  };

  return ( 
    <div className="auth-container">
      <FontAwesomeIcon icon={faCircle} size="2x" className="center-icon" />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><FontAwesomeIcon icon={faUser} /> Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label><FontAwesomeIcon icon={faLock} /> Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      <p>Are you admin? <Link to="/AdminLogin">Admin Login</Link></p>
    </div>
  );
};

export default Login;
