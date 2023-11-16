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
    Card,
    Stack,
    Heading,
    Tabs,
    TabList,
    Tab,
    TabIndicator,
    TabPanels,
    TabPanel
  } from "@chakra-ui/react";

const BioSection = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatWindowRef = useRef(null);

  const openai = new OpenAI({apiKey: "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", dangerouslyAllowBrowser: true});
  // const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

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
      px={4}
      spacing={8}
      minHeight="55vh"
      alignItems="flex-end"
      id="bio-section"
    >
      <Divider my={8} id="bio-section" />
      <Stack
        w="100%"
        direction={{ base: 'column', md: 'row' }}
        display="flex"
        justifyContent="center"
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        <Heading
          fontSize={{ base: '3xl', sm: '3xl', md: '4xl', lg: '4xl' }}
          textOverflow="ellipsis"
          flex="2"
          textAlign="center"
          my={4}
          fontFamily="'Montserrat', sans-serif"
        >
            About me
        </Heading>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-end"
          overflowX="auto"
          width="100%"
          style={{ marginTop: 0 }}
          flex="6"
          p={4}
        >
        <Tabs position="relative" variant="unstyled" w="100%">
          <TabList>
            <Tab fontFamily="'Montserrat', sans-serif">Bio</Tab>
            <Tab fontFamily="'Montserrat', sans-serif">My AI assistant</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Text fontSize={18} fontFamily="'Montserrat', sans-serif">
                Hello! My name is Xuanting Chen (陈宣廷), and I go by Theo!
                I was confered the master of science in Computer Science degree from Duke University in fall 2023.
                Prior to that, I obtained my bachelor's degree in Computer Science from Boston University.
                In fall 2020, I had the luck to study with Prof. David Woodruff from Carnegie Mellon on problems involving optimization.
              </Text>
            </TabPanel>
            <TabPanel>
              <Card
              w="100%"
              h="400px"
              p="4"
              bg="rgba(120, 110, 110, 0.04)"
              backdropFilter="blur(10px)"
              borderRadius="1rem"
              overflowY="auto"
              >
                <Card
                  ref={chatWindowRef}
                  h="300px"  // Fixed height for the chat display window
                  overflowY="auto"
                  backgroundColor="white"
                  borderRadius="5px"
                  mb={4}
                >
                    <VStack align="stretch">
                      {messages.length === 0? (
                        <>
                          <Text textAlign="center" pt={6} color="gray.400" fontWeight="semibold" fontFamily="'Montserrat', sans-serif">Hello, I'm Xuanting's GPT agent.<br /> Ask me anything about him.</Text>
                        </>
                        ) : (
                        messages.map((msg, index) => (
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
                                mx={1}
                            >
                                {msg.content}
                            </Box>
                            </VStack>
                        )))
                      }
                    </VStack>
                </Card>
                <Flex >
                    <Input
                        variant='flushed'
                        flex="1"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder=" Type your message..."
                    />
                    <Button onClick={sendMessage} ml="2" colorScheme="blue">Send</Button>
                </Flex>
              </Card>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
      </Stack>
    </FullScreenSection>
  );
};

export default BioSection;
