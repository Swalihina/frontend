import React, { useState } from 'react';
import axios from 'axios';
import './styles/ChatInterface.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (input.trim() === '') return;
        
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/api/chatbot/response', input, {
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
            setMessages([...messages, { user: 'You', text: input }, { user: 'Bot', text: response.data }]);
            setInput('');
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className="chat-message">
                        <strong>{msg.user}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    onKeyPress={handleKeyPress} 
                    disabled={loading}
                />
                <button onClick={sendMessage} disabled={loading}>Send</button>
            </div>
            {loading && <div>Loading...</div>}
        </div>
    );
};

export default Chatbot;
