import React, { useState } from 'react';
import OpenAI from "openai";
import FullScreenSection from "./FullScreenSection";

const BioBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { content: input, role: 'user' };
    setMessages([...messages, userMessage]);

    try {
      const completion = await openai.chat.completions.create({
        messages: [
            ...messages,
            { content: input, role: 'user' },
          ],
        model: "gpt-3.5-turbo",
        stream: true,
      });

      // Handle each chunk of the response
      for await (const part of completion) {
        const content = part.choices[0].delta.content;
        if (content) {
            setMessages(m => {
              const lastMessage = m[m.length - 1];
              // Check if the last message is from'ai, append content to it
              if (lastMessage && lastMessage.role === 'system') {
                return [...m.slice(0, -1), { ...lastMessage, content: lastMessage.content + content }];
              } else {
                // If the last message is not from ai, add a new message
                return [...m, { content: content, role: 'system' }];
              }
            });
        }
      }
    } catch (error) {
      console.error('Error while calling OpenAI:', error);
    }

    setInput('');
  };

  return (
    <FullScreenSection
      isDarkBackground = {false}
      backgroundColor="white"
      py={8}
      px={4}
      spacing={8}
      minHeight="50vh"
    >
        <div>
        <div>
            {messages.map((msg, index) => (
            <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                {msg.content}
            </div>
            ))}
        </div>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
        </div>
    </FullScreenSection>
  );
};

export default BioBot;
