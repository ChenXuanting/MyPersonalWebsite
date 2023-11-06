import React, { useState } from 'react';
import FullScreenSection from './FullScreenSection';
import {
  Box,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  Button,
  Image,
  Collapse,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
import TwitterDetection from '../images/TwitterDetection.png';

const ProjectsSection = () => {
  const { isOpen: isOpen0, onToggle: onToggle0 } = useDisclosure();
  const { isOpen: isOpen1, onToggle: onToggle1 } = useDisclosure();

  return (
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground={false}
      alignItems="flex-start"
    >
      <Divider my={8} id="projects-section" />
      <Stack
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
      >
          Featured Projects
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
      >
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="elevated"
          my={1}
        >
          <Stack>
            <CardHeader pb={0}>
              <HStack alignItems="flex-start">
              <Image
                objectFit="cover"
                maxW={{ base: '150px', sm: '200px' }}
                src={TwitterDetection}
                alt="Twitter Offensive Detection"
              />
              <Stack>
              <Heading size="md">Twitter Offensive Language Detection</Heading>
              <Text py={2}>
                Utilized emsembles of transformer-based models like BERT, ALBERT, and RoBERTa to identify offensive langues in over 14000 Twitter (now X) posts with an accuracy of 93.9% and an F1 score of 0.9349.
              </Text>
              </Stack>
              </HStack>
            </CardHeader>
            <Collapse in={isOpen0} animateOpacity>
              <CardBody>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
              </CardBody>
            </Collapse>
            <CardFooter pt={0} gap={4} display='flex' alignContent='center' justifyContent='center'>
              <Heading display='flex' flexDirection='column' alignContent='center' justifyContent='center' size='xs'>Duke CS590 Natural Language Processing</Heading>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={onToggle0}
              >
                {isOpen0 ? 'Hide detail' : 'Show detail'}
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="elevated"
          my={1}
        >
          <Stack>
            <CardHeader>
              <HStack alignItems="flex-start">
              <Image
                objectFit="cover"
                maxW={{ base: '150px', sm: '200px' }}
                src={TwitterDetection}
                alt="Twitter Offensive Detection"
              />
              <Stack>
              <Heading size="md">Twitter Offensive Language Detection</Heading>
              <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
              </Text>
              </Stack>
              </HStack>
            </CardHeader>
            <Collapse in={isOpen1} animateOpacity>
              <CardBody>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
              </CardBody>
            </Collapse>
            <CardFooter>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={onToggle1}
              >
                {isOpen1 ? 'Hide detail' : 'Show detail'}
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
      </Stack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
