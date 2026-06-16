// src/App.js
import React from 'react';
import './App.css';
import ChatbotApp from './ChatbotApp';

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="App-header">
        <ChatbotApp />
      </div>
    </div>
  );
}

export default App;
