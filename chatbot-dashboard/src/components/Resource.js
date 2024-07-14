/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faBook, faUser, faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './styles/Resources.css';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [currentResource, setCurrentResource] = useState({
    id: '',
    title: '',
    description: '',
    link: ''
  });

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/resources');
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  const handleAddResource = async (resource) => {
    try {
      const response = await axios.post('http://localhost:8080/api/resources', resource);
      setResources([...resources, response.data]);
      setShowAddForm(false);
      resetCurrentResource();
    } catch (error) {
      console.error('Error adding resource:', error);
    }
  };

  const handleUpdateResource = async (resource) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/resources/${resource.id}`, resource);
      setResources(resources.map((r) => (r.id === resource.id ? response.data : r)));
      setShowUpdateForm(false);
      resetCurrentResource();
    } catch (error) {
      console.error('Error updating resource:', error);
    }
  };

  const handleDeleteResource = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/resources/${id}`);
      setResources(resources.filter((resource) => resource.id !== id));
    } catch (error) {
      console.error('Error deleting resource:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showAddForm) {
      handleAddResource(currentResource);
    } else if (showUpdateForm) {
      handleUpdateResource(currentResource);
    }
  };

  const resetCurrentResource = () => {
    setCurrentResource({
      id: '',
      title: '',
      description: '',
      link: ''
    });
  };

  const handleChange = (e) => {
    setCurrentResource({
      ...currentResource,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = (resource) => {
    setCurrentResource(resource);
    setShowUpdateForm(true);
  };

  return (
    <div className="resources">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faClipboardList} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/resources">
                <FontAwesomeIcon icon={faBook} />
                Resources
              </Link>
            </li>
            <li>
              <Link to="/users">
                <FontAwesomeIcon icon={faUser} />
                Users
              </Link>
            </li>
            <li>
              <Link to="/chatbot">
                <FontAwesomeIcon icon={faComments} />
                Chats
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <FontAwesomeIcon icon={faCog} />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Resources</h1>
        <button onClick={() => setShowAddForm(true)}>Add Resource</button>
        <div className="resource-list">
          {resources.map((resource) => (
            <div key={resource.id} className="resource-item">
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.link}
              </a>
              <button onClick={() => handleEdit(resource)}>Edit</button>
              <button onClick={() => handleDeleteResource(resource.id)}>Delete</button>
            </div>
          ))}
        </div>
        {showAddForm && (
          <form onSubmit={handleSubmit}>
            <h2>Add Resource</h2>
            <label>
              Title:
              <input type="text" name="title" value={currentResource.title} onChange={handleChange} />
            </label>
            <label>
              Description:
              <textarea name="description" value={currentResource.description} onChange={handleChange}></textarea>
            </label>
            <label>
              Link:
              <input type="text" name="link" value={currentResource.link} onChange={handleChange} />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setShowAddForm(false)}>
              Cancel
            </button>
          </form>
        )}
        {showUpdateForm && (
          <form onSubmit={handleSubmit}>
            <h2>Update Resource</h2>
            <label>
              Title:
              <input type="text" name="title" value={currentResource.title} onChange={handleChange} />
            </label>
            <label>
              Description:
              <textarea name="description" value={currentResource.description} onChange={handleChange}></textarea>
            </label>
            <label>
              Link:
              <input type="text" name="link" value={currentResource.link} onChange={handleChange} />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setShowUpdateForm(false)}>
              Cancel
            </button>
          </form>
        )}
      </main>
    </div>
  );
};

export default Resources;
