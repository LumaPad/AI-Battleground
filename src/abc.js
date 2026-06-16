// // chatbot.js
// const axios = require('axios');
// const readline = require('readline');

// // Replace with your actual Gemini API key
// const API_KEY = 'AIzaSyDBvCy294_yyhebGBBrfXyMYjS9g7cHo3o';
// const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// }); 
 
// const promptUser = () => {
//   rl.question('You: ', async (userInput) => {
//     if (userInput.toLowerCase() === 'exit') {
//       rl.close();
//       return;
//     }

//     const response = await getChatbotResponse(userInput);
//     console.log('Chatbot:', response);
//     promptUser();
//   });
// };

// const getChatbotResponse = async (userInput) => {
//   try {
//     const response = await axios.post(
//       API_URL,
//       {
//         prompt: {
//           text: userInput, // Adjust to match the API's expected format
//         },
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     // Accessing the nested response content
//     const content = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
//     if (content) {
//       return content;
//     } else {
//       return 'Sorry, no response received from the API.';
//     }
//   } catch (error) {
//     console.error('Error communicating with the Gemini API:', error.response?.data || error.message);
//     return 'Sorry, I encountered an error. Please try again.';
//   }
// };

// console.log('Welcome to the Gemini Chatbot! Type "exit" to end the conversation.');
// promptUser();
