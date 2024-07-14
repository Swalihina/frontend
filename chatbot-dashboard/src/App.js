/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InitialAssessment from './components/InitialAssessment';
import ResourcesSuggestions from './components/ResourcesSuggestions';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import Registration from './components/Registration';
import AdminDashboard from './components/AdminDashboard'; 
 import AdminProfile from './components/AdminProfile'
import Settings from './components/settings'; 
import AdminAssessment from './components/AdminAssessment';
import PrivateRoute from './components/PrivateRoutes';
import Users from './components/Users';
import Resource from './components/Resource';
import SettingPage from './components/SettingsPage'; 
import Chatbot from './components/chatbot'
import './styles/App.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/PrivateRoute" element={<PrivateRoute />} />
        <Route path="/initial-assessment" element={<InitialAssessment />} />
        <Route path="/resourcesSuggestion" element={<ResourcesSuggestions />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/settings" element={<Settings/>}/>
        <Route path='/resource' element={<Resource/>}/>
        <Route path='/AdminProfile' element={<AdminProfile/>}/>
        <Route path='/AdminAssessment' element={<AdminAssessment/>}/>
        <Route path="/users" element={<Users />} />
        <Route path="/settingPage" element={<SettingPage />} /> 
        <Route path="/chatbot" element={<Chatbot/>}/>
      </Routes>
    </div>
  );
}

export default App;
