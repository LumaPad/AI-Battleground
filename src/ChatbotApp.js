import React, { useState } from 'react';
import './ChatbotApp.css';

const ChatbotApp = () => {
  const [apiKey1, setApiKey1] = useState('');
  const [apiKey2, setApiKey2] = useState('');
  const [topic, setTopic] = useState('');
  const [ready, setReady] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (apiKey1 && apiKey2) {
      setReady(true);
      alert('They are ready for communication.');
    } else {
      alert('Please enter both API keys.');
    }
  };

  const handleGo = async () => {
    if (ready && topic) {
      try {
        const convo = await simulateConversation(apiKey1, apiKey2, topic);
        setConversation(convo);
      } catch (err) {
        setError(err.message);
      }
    } else {
      alert('Please enter a topic and ensure both API keys are ready.');
    }
  };

  const simulateConversation = async (key1, key2, topic) => {
    const convo = [];
    let context = `Discuss the topic of ${topic}.`;

    for (let i = 0; i < 2; i++) {
      const response1 = await fetchResponse(key1, context);
      convo.push({ bot: 'Bot 1', message: response1 });
      context = response1;

      const response2 = await fetchResponse(key2, context);
      convo.push({ bot: 'Bot 2', message: response2 });
      context = response2;
    }

    return convo;
  };

  const fetchResponse = async (apiKey, prompt) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      throw new Error(`Failed to fetch response: ${error.message}`);
    }
  };

  return (
    <div className="card">
      <h1 className="neon-text">AI Battleground</h1>
      {!ready ? (
        <div className="card">
          <input
            type="text"
            placeholder="Enter API Key 1"
            value={apiKey1}
            onChange={(e) => setApiKey1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter API Key 2"
            value={apiKey2}
            onChange={(e) => setApiKey2(e.target.value)}
          />
          <button onClick={handleSubmit}>Start Battle</button>
        </div>
      ) : (
        <div className="card">
          <input
            type="text"
            placeholder="Enter topic for debate"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <button onClick={handleGo}>Go!</button>
          <div className="conversation-container">
            {conversation.map((msg, index) => (
              <div key={index} className={`message ${msg.bot}`}>
                <strong>{msg.bot}:</strong> {msg.message}
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default ChatbotApp;
