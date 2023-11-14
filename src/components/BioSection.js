import React, { useState, useRef, useEffect } from 'react';
import OpenAI from "openai";
import FullScreenSection from "./FullScreenSection";
import {
    Box,
    Input,
    Button,
    VStack,
    Flex,
    Text,
    Divider,
  } from "@chakra-ui/react";

const BioSection = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatWindowRef = useRef(null);

  const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { content: input, role: 'user' };
    setMessages([...messages, userMessage]);

    try {
      setInput('');

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
  };

  useEffect(() => {
    const chatWindow = chatWindowRef.current;
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  return (
    <FullScreenSection
      isDarkBackground = {false}
      backgroundColor="white"
      py={8}
      px={4}
      spacing={8}
      minHeight="50vh"
      alignItems="flex-end"
    >
        <Box
            w={{ base: "90%", md: "1200px" }}
            h="400px"
            p="4"
            bg="rgba(120, 110, 110, 0.04)"
            backdropFilter="blur(10px)"
            borderRadius="1rem"
            overflowY="auto"
        >
        <Box
          ref={chatWindowRef}
          h="300px"  // Fixed height for the chat display window
          overflowY="auto"
          backgroundColor="white"
          borderRadius="5px"
          mb={4}
        >
            <VStack align="stretch" spacing="4">
                {messages.map((msg, index) => (
                <VStack key={index} alignItems={msg.role === 'user' ? 'flex-end' : 'flex-start'}>
                    <Text fontSize="sm" fontWeight="bold" mx={2}>
                        {msg.role === 'user' ? 'You:' : 'GPT:'}
                    </Text>
                    <Box
                        bg="rgba(120, 110, 110, 0.04)"
                        borderRadius="1rem"
                        backdropFilter="blur(10px)"
                        p="2"
                        maxW="70%"
                        m={1}
                    >
                        {msg.content}
                    </Box>
                    </VStack>
                ))}
            </VStack>
        </Box>
        <Flex >
            <Input
                flex="1"
                borderRadius="5px"
                backgroundColor="white"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
            />
            <Button onClick={sendMessage} ml="2" colorScheme="blue">Send</Button>
        </Flex>
        </Box>
    </FullScreenSection>
  );
};

export default BioSection;
