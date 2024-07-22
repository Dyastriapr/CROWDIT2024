import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

const Chat = ({ isOpen, toggleChat }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-20 right-4 w-80 h-3/4 bg-white shadow-lg border border-gray-300 rounded-t-lg flex flex-col">
      <div className="flex justify-between items-center bg-primary text-white p-3 rounded-t-lg">
        <h3 className="text-lg">Bantuan</h3>
        <button onClick={toggleChat}>
          <FaTimes className="text-white" />
        </button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1 overflow-y-auto p-3">
          {messages.map((message, index) => (
            <div key={index} className={`chat ${message.sender === 'user' ? 'chat-end' : 'chat-start'}`}>
              <div className="chat-bubble chat-bubble-primary bg-primary text-white">{message.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-3 border-t border-gray-300 flex items-center">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="w-full p-2 border border-gray-300 rounded-l-lg"
            placeholder="Tulis pesan..."
          />
          <button
            onClick={handleSendMessage}
            className="py-2 px-4 bg-primary text-white rounded-r-lg"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
