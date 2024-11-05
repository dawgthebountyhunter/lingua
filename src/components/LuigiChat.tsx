import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

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
        setMessages([{ 
            text: "Ciao! 👋 I'm Luigi, your Italian tutor. I can help you practice conversation, learn grammar, or build vocabulary. What would you like to focus on today?", 
            sender: 'luigi' 
        }]);
    }, []);

    useEffect(() => {
        // Log environment variables
        console.log("API Endpoint:", process.env.CLAUDE_API_ENDPOINT);
        console.log("API Key:", process.env.CLAUDE_API_KEY);
    }, []);

    useEffect(() => {
        // Scroll to bottom of chat
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages(prev => [...prev, { text: input, sender: 'user' }]);
        setInput('');

        try {
            const response = await axios.post('/api/claude', {
                messages: [
                    {
                        role: "system",
                        content: "You are Luigi, a friendly and enthusiastic Italian language tutor. Your role is to:\n" +
                            "- Engage in Italian conversation practice when requested\n" +
                            "- Explain Italian grammar concepts clearly\n" +
                            "- Teach vocabulary and common phrases\n" +
                            "- Correct language mistakes gently\n" +
                            "- Respond in Italian when appropriate, always providing English translations\n" +
                            "- Adapt your teaching style based on the student's level and needs"
                    },
                    { role: "user", content: input }
                ],
                model: "claude-3-opus-20240229",
                max_tokens: 1000
            });

            const aiResponse = response.data;
            setMessages(prev => [...prev, { text: aiResponse.content[0].text, sender: 'luigi' }]);
        } catch (error) {
            console.error("Error calling Claude API:", error);
            if (axios.isAxiosError(error)) {
                console.error("Full error response:", error.response);
            }
            setMessages(prev => [...prev, { text: "Error communicating with AI. Please try again later.", sender: 'luigi' }]);
        }
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