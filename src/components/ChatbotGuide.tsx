import React, { useState } from 'react';

const ChatbotGuide: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userInput.trim()) {
            setChatHistory([...chatHistory, `User: ${userInput}`]);
            // Simulate a chatbot response
            setChatHistory(prev => [...prev, `Chatbot: That's a great idea! Keep it up!`]);
            setUserInput('');
        }
    };

    return (
        <div className="chatbot-guide">
            <h2>Chatbot Guide</h2>
            <div className="chat-history">
                {chatHistory.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Ask me about upskilling..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatbotGuide;