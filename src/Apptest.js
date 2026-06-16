
// import React, { useState } from 'react';
// import './ChatbotApp.css';

// const ChatbotApp = () => {
//   const [apiKey1, setApiKey1] = useState('');
//   const [apiKey2, setApiKey2] = useState('');
//   const [topic, setTopic] = useState('');
//   const [ready, setReady] = useState(false);
//   const [conversation, setConversation] = useState([]);

//   const handleSubmit = () => {
//     if (apiKey1 && apiKey2) {
//       setReady(true);
//       alert('They are ready for communication.');
//     } else {
//       alert('Please enter both API keys.');
//     }
//   };

//   const handleGo = async () => {
//     if (ready && topic) {
//       const convo = await simulateConversation(apiKey1, apiKey2, topic);
//       setConversation(convo);
//     } else {
//       alert('Please enter a topic and ensure both API keys are ready.');
//     }
//   };

//   const simulateConversation = async (key1, key2, topic) => {
//     // Mock function to simulate conversation
//     const convo = [
//       { bot: 'Bot 1', message: `Bot 1: Let's talk about ${topic}.` },
//       { bot: 'Bot 2', message: `Bot 2: Sure, ${topic} is an interesting topic.` },
//       { bot: 'Bot 1', message: `Bot 1: I think ${topic} is fascinating.` },
//       { bot: 'Bot 2', message: `Bot 2: Absolutely, ${topic} has many aspects to explore.` },
//     ];
//     return convo;
//   };

//   return (
//     <div className="chatbot-app">
//       <h1>AI BATTLE-GROUND</h1>
//       <div className="api-keys">
//         <input
//           type="text"
//           placeholder="Enter Gemini API Key 1"
//           value={apiKey1}
//           onChange={(e) => setApiKey1(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter Gemini API Key 2"
//           value={apiKey2}
//           onChange={(e) => setApiKey2(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//       {ready && (
//         <div className="topic-input">
//           <input
//             type="text"
//             placeholder="Enter a topic"
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//           />
//           <button onClick={handleGo}>Go</button>
//         </div>
//       )}
//       {conversation.length > 0 && (
//         <div className="conversation">
//           <h2>Conversation:</h2>
//           {conversation.map((msg, index) => (
//             <div key={index} className={`message ${msg.bot}`}>
//               {msg.message}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatbotApp;
