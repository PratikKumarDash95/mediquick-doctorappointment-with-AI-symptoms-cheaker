import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Gemini API

// ✅ Use the correct API Key (Replace with your actual key)
const genAI = new GoogleGenerativeAI("AIzaSyDNxqFBg2HLIwvAD6ZemUiO5eUgK5ITww8");

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [ayurvedicMode, setAyurvedicMode] = useState(false);

  // ✅ Function to call Gemini-2.0-Flash API
  const fetchGeminiResponse = async (userInput) => {
    try {
      // ✅ Use "gemini-2.0-flash" model
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const result = await model.generateContent(userInput);
      const response = await result.response;

      return response.text();
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Sorry, I couldn't fetch a response.";
    }
  };

  // Handle user input
  const handleSendMessage = async () => {
    if (input.trim() !== "") {
      const userMessage = { text: input, type: "user" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");

      // Show bot typing indicator
      const botThinking = { text: "Thinking...", type: "bot" };
      setMessages((prevMessages) => [...prevMessages, botThinking]);

      // ✅ Generate bot response using Gemini-2.0-Flash
      const botReplyText = await fetchGeminiResponse(input);

      // Update messages with bot response
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), // Remove "Thinking..." message
        { text: botReplyText, type: "bot" },
      ]);
    }
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row rounded-lg p-8 md:p-14 lg:p-16 my-10 md:mx-10 transition-all duration-500 ${ayurvedicMode ? "bg-green-500" : "bg-primary"
        }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ------- Left Side: Chat Interface ------- */}
      <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-8 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            AI Symptom Analysis
          </h2>

          {/* Ayurvedic Mode Toggle */}
          <div className="flex items-center">
            <p className="text-gray-600 text-sm mr-2">Ayurvedic Mode</p>
            <div
              className={`relative w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-500 ${ayurvedicMode ? "bg-green-500" : "bg-blue-500"
                }`}
              onClick={() => setAyurvedicMode(!ayurvedicMode)}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: ayurvedicMode ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Describe your symptoms and let our AI assist you with preliminary analysis.
        </p>

        {/* Chat Messages */}
        <div className="flex-1 overflow-auto max-h-80 space-y-2 bg-gray-100 p-4 rounded-lg">
          {messages.length === 0 ? (
            <p className="text-gray-400 text-center">Start describing your symptoms...</p>
          ) : (
            messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-3 rounded-lg text-sm max-w-xs ${msg.type === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-800 self-start"
                  }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {msg.text}
              </motion.div>
            ))
          )}
        </div>

        {/* Input Field */}
        <div className="mt-4 flex items-center">
          <input
            type="text"
            className="flex-1 border rounded-lg p-3 outline-none"
            placeholder="Type your symptoms..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="ml-3 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>

      {/* ------- Right Side: Image ------- */}
      <div className="hidden md:flex md:w-1/3 justify-center items-center">
        <motion.img
          className="w-full max-w-md rounded-lg"
          src={assets.appointment_img}
          alt="Appointment"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default Chatbot;