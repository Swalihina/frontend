import React, { useEffect, useState } from 'react';
import articleService from '../services/articleService'; // Corrected path
import '../styles/ArticlesPage.css'; // Corrected path

const ArticlesPage = () => {
  const [subtopicId, setSubtopicId] = useState(1); // default subtopicId
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newArticle, setNewArticle] = useState({ title: '', content: '' });
  const [editingArticle, setEditingArticle] = useState(null);

  useEffect(() => {
    fetchArticles(subtopicId);
  }, [subtopicId]);

  const fetchArticles = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await articleService.getArticlesBySubtopic(id);
      setArticles(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching articles');
      setLoading(false);
    }
  };

  const handleSubtopicChange = (event) => {
    setSubtopicId(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingArticle({ ...editingArticle, [name]: value });
  };

  const handleCreateArticle = async (e) => {
    e.preventDefault();
    try {
      await articleService.createArticle({ ...newArticle, subtopicId });
      fetchArticles(subtopicId);
      setNewArticle({ title: '', content: '' });
    } catch (err) {
      setError('Error creating article');
    }
  };

  const handleUpdateArticle = async (e) => {
    e.preventDefault();
    try {
      await articleService.updateArticle(editingArticle.id, editingArticle);
      fetchArticles(subtopicId);
      setEditingArticle(null);
    } catch (err) {
      setError('Error updating article');
    }
  };

  const handleDeleteArticle = async (id) => {
    try {
      await articleService.deleteArticle(id);
      fetchArticles(subtopicId);
    } catch (err) {
      setError('Error deleting article');
    }
  };

  return (
    <div className="articles-page">
      <h1>Articles Page</h1>
      <div className="subtopic-selector">
        <label htmlFor="subtopic">Select Subtopic: </label>
        <select id="subtopic" value={subtopicId} onChange={handleSubtopicChange}>
          <option value="1">Depression</option>
          <option value="2">Anxiety</option>
          <option value="3">Stress Management</option>
          {/* Add more subtopics as needed */}
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <form onSubmit={editingArticle ? handleUpdateArticle : handleCreateArticle}>
            <h2>{editingArticle ? 'Edit Article' : 'Add New Article'}</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={editingArticle ? editingArticle.title : newArticle.title}
              onChange={editingArticle ? handleEditChange : handleInputChange}
              required
            />
            <textarea
              name="content"
              placeholder="Content"
              value={editingArticle ? editingArticle.content : newArticle.content}
              onChange={editingArticle ? handleEditChange : handleInputChange}
              required
            ></textarea>
            <button type="submit">{editingArticle ? 'Update Article' : 'Add Article'}</button>
          </form>

          <div className="article-table">
            <h2>Articles</h2>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id}>
                    <td>{article.title}</td>
                    <td>{article.content}</td>
                    <td>
                      <button onClick={() => setEditingArticle(article)}>Edit</button>
                      <button onClick={() => handleDeleteArticle(article.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticlesPage;
