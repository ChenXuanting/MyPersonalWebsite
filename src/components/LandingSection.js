import React from "react";
import { Flex, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import portrait from "../images/portrait.jpg"
import TypingEffect from "./TypingEffect";

const LandingSection = () => {
  return (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground = {false}
    backgroundColor="white"
  >
  <Flex width="100%" height="100%" padding={5} justifyContent="center"
        alignItems="center">
      <VStack
        flex="4.8"
        spacing={5}
        marginRight={5}
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Box
          width= "100%"
          height= "100%"
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
        >
          <img
            src={portrait}
            alt="Theo"
            style={{
              width:'auto',
              height:'100%',
              borderRadius: '10px'
            }}
          />
        </Box> */}
        <Box
            width="100%"
            height="100%"
            position="relative"  // Make the Box a reference point for absolute positioning
        >
            <img
                src={portrait}
                alt="Theo"
                style={{
                    width: 'auto',
                    height: '60%',
                    borderRadius: '10px',
                    position: 'absolute',  // Absolute position the image
                    right: 0,  // Place it on the far right
                    top: '50%',  // Center it vertically
                    transform: 'translateY(-50%)'  // Adjust for the image's height to truly center it
                }}
            />
        </Box>

      </VStack>

      <VStack
        flex="5.2"
        spacing={5}
        height="100%"
        justifyContent="center"
        alignItems="start"
      >
        <TypingEffect startDelay={0}>Hello, I am Theo! </TypingEffect>
        <TypingEffect startDelay={120 * ("Hello, I am Theo! ".length + "Welco".length)}>I work with web apps.</TypingEffect>
        <TypingEffect startDelay={120 * ("Hello, I am Theo! ".length + "I work with web applications.".length  + "Welc".length)}>I work with deep learning.</TypingEffect>
      </VStack>
  </Flex>
  </FullScreenSection>
);
}

export default LandingSection;
