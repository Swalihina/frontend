import React, { useState } from 'react';
import './SettingsPage.css';

const FeedbackAndSupport = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    // Logic to submit feedback to backend/database
    console.log("Feedback submitted:", feedback);
    setFeedback(''); // Clear feedback input after submission
  };

  return (
    <div>
      <h3>Feedback and Support</h3>
      <textarea
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder="Enter your feedback or support request"
      />
      <br />
      <button onClick={handleSubmitFeedback}>Submit Feedback</button>
    </div>
  );
};

export default FeedbackAndSupport;
