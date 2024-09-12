'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'luigi';
}

const LuigiChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    // Initial message from Luigi
    setMessages([{ text: "So I hear you're looking to learn Italian. What do you want to focus on?", sender: 'luigi' }]);
  }, []);

  useEffect(() => {
    // Scroll to bottom of chat
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');

    // TODO: Implement actual API call to Claude LLM here
    // For now, we'll just simulate a response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I'm sorry, but I'm just a placeholder response. The actual Luigi AI hasn't been implemented yet!", sender: 'luigi' }]);
    }, 1000);
  };

  return (
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
      <div className="h-96 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500' : 'bg-green-500'}`}>
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 rounded-l-lg text-gray-800"
          placeholder="Type your message..."
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition duration-300">
          Send
        </button>
      </form>
    </div>
  );
};

export default LuigiChat;