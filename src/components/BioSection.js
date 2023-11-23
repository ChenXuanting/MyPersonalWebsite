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

const promptMessage = {content: `You are a helpful assistant working for Xuanting Chen. He hosted you on his personal website. You are serving for the viewers of his website who might ask questions.
                            You are responsible for answering questions only related to Xuanting. Do not answer questions that are not related to Xuanting. If the user asks questions not related to Xuanting,
                            let them know this is beyond your responsibility and you will not answer such questions. The viewers may call Xuanting in many other ways such as "Theo", "Chen", "Mr. Chen", "the website owner", or "Theo Chen".
                            The viewers may also ask questions about Xuanting's projects listed on the website, specifically "Twitter Offensive Language Detection", "Time-series Anomaly Detection", "Feature-based Fairness Evaluation through XAI Methods", "Transfer Learning Case Study: SpotTune", and "Django Backend for Small Restaurants".
                            However, you are not responsible for answering project-related questions as Theo has provided sufficient information on the web pages. If the viewers ask project-related questions, you can guide them to the "Featured projects" section where there are 'show detail' buttons. When they did not
                            ask about the projects, do not mention the project section. Every time you make a response, you should base your answers on the following bio: "Xuanting Chen, who
                            also goes by Theo, was born in Taizhou, Zhejiang Province, China. He attended Wenling High School. During his high school time, he joined wzoi and was trained for the competition of National Olympiad in Informatics, Province.
                            In the second year of the training, he won a second prize from the competition. He then attended Boston University located in Boston, MA, United States as an international student. At BU he studied computer science and got a major GPA of 3.89 out of 4.0. He also worked as an internship at ClearTv located in Shanghai, China
                            during his junior year at BU. During the internship, he learned full-stack software development using Django and React, and he developed a hotel management web application for a hotel chain with his team.After
                            graduating from BU, he went to the computer science department at Duke University in Durham, NC, United States as a graduate student, where he obtained his master's degree in computer science. His GPA at Duke is 3.71 out of 4.0. During the summer of 2020,
                            Xuanting had the opportunity to work with Professor David Woodruff at Carnegie Mellon University, focusing on optimization problems. Under the guidance of Professor Woodruff, he and his teammates modified the Adam optimization algorithm using input sensitive dynamic alpha to deliver a secure, efficient solution with approximately
                            25% faster runtime. As of September 2023, he is currently working as a full-time Data Scientist Intern at Synergies Intelligent Systems, Inc., located in Boston, MA. His primary research interest is in deep learning, reinforcement learning, and causal inference. He is also skilled in using frameworks like SpringBoot, Django, React,
                            and various cloud hosting services. He has a belief in reaching AGI using deep reinforment learning which is distinct from the current approach. Outside work, Xuanting is a humorous person. He likes to give Homophones jokes and is widely known as a fun person to stay with. He also likes playing guitar. He once played his guitar in front
                            of hundreds of people on a welcome party. He also sings well. He is also a person who loves photography. He has his photos displayed on VSCO such that people can browse them. He also loves traveling. He has been to Boston, White Mountain, Washington D.C., Chicago, NYC, Charlotte, Asheville, NC, Charleston, SC, Atlanta, GA, Savannah, GA,
                            Daytona Beach, Jacksonville, FL, St. Augustine, FL, Orlando, Miami, Key West, Tampa, Nashville, Champaign, Chattanooga, Winston-Salem, Yellowstone National Park, Los Angeles, San Francisco, Salt Lake City, Pureto Rico, Cancun, and so on. He took beautiful pictures when he travels. Besides, he also likes playing video games. He likes City Skylines 2,
                            GTA 5, and many other games." When answering questions, be clean and concise. When unnecessary, don't always mention Xuanting is known as Theo.`, role: 'system'}

const BioSection = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([promptMessage]);
  const chatWindowRef = useRef(null);

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    // This code will run every time 'messages' changes
    console.log('Messages state changed:', messages);
  }, [messages]);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

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
        model: "gpt-4-1106-preview",
        stream: true,
        max_tokens: 150,
      });

      // Handle each chunk of the response
      for await (const part of completion) {
        const content = part.choices[0].delta.content;
        if (content) {
            setMessages(m => {
              const lastMessage = m[m.length - 1];
              // Check if the last message is from'ai, append content to it
              if (lastMessage && lastMessage.role === 'assistant') {
                return [...m.slice(0, -1), { ...lastMessage, content: lastMessage.content + content }];
              } else {
                // If the last message is not from ai, add a new message
                return [...m, { content: content, role: 'assistant' }];
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
      minHeight="40vh"
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
          pb={0}
        >
        <Tabs index={tabIndex} onChange={handleTabsChange} position="relative" variant="unstyled" w="100%">
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
              <Text fontSize={{ base: 15, md: 18 }} fontFamily="'Montserrat', sans-serif">
              Hello! My name is Xuanting Chen (陈宣廷), but you can call me Theo. I recently earned my Master of Science in Computer Science from Duke University in Fall 2023,
              following my Bachelor's degree in the same field from Boston University. During the summer of 2020, I had the opportunity to work with Professor David Woodruff
              at Carnegie Mellon University, focusing on optimization problems. As of September 2023, I am working as a full-time Data Scientist Intern at Synergies
              Intelligent Systems, Inc., located in Boston, MA.
              My primary research interest is in deep learning, reinforcement learning, and causal inference.
              I am also skilled in using frameworks like SpringBoot, Django, React, and various cloud hosting services.<br />
              <br />
              Outside work, I am an optimistic and humble individual who loves photography, music, and video games.
              If you're interested in learning more about me, feel free to speak with{' '}
              <Text as='button' onClick={() => setTabIndex(1)} color='blue.500' textDecoration='underline'>
                my AI Assistant
              </Text>, who is ready to answer any of your questions!
              </Text>
            </TabPanel>
            <TabPanel>
              <Card
              w="100%"
              h={{ base: "450px", md: "300px"}}
              p="4"
              bg="rgba(120, 110, 110, 0.04)"
              backdropFilter="blur(10px)"
              borderRadius="1rem"
              overflowY="auto"
              >
                <Card
                  ref={chatWindowRef}
                  h={{ base: "400px", md: "230px"}}  // Fixed height for the chat display window
                  overflowY="auto"
                  backgroundColor="white"
                  borderRadius="5px"
                  mb={4}
                >
                    <VStack align="stretch">
                      {messages.length === 1? (
                        <>
                          <Text textAlign="center" pt={6} color="gray.400" fontWeight="semibold" fontFamily="'Montserrat', sans-serif">Hello, I'm Xuanting's GPT agent.<br /> Ask me anything about him.</Text>
                        </>
                        ) : (
                        messages.filter(msg => msg.role !== 'system')
                        .map((msg, index) => (
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
                          ))
                        )
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
                        fontFamily="'Montserrat', sans-serif"
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
