import React, { useState, useEffect } from "react";
import { VStack , Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import portrait from "../images/portrait.jpg"
import TypingEffect from "./TypingEffect";

const LandingSection = () => {
  const [opacity, setOpacity] = useState(0);
  const [typingFinished, setTypingFinished] = useState(false);

  const texts = [
    "Hello, I am Theo! ",
    "Welcome to my website."
  ];

  const totalTypingDelay = texts.reduce((total, text) => total + 120 * text.length, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingFinished(true);
    }, totalTypingDelay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      if (!typingFinished) {  // Prevent any effect if typing is not finished
        e.preventDefault();
        return;
      }

      if (opacity < 1) {
        e.preventDefault(); // Prevent scrolling while the image is not fully shown

        if (e.deltaY > 0) {  // Only process downward scrolls
          setOpacity((prevOpacity) => Math.min(prevOpacity + 0.15, 1));
        }
      }

      if (typingFinished && opacity >= 1) {
        document.body.style.overflowY = "auto";  // Enable default scrolling
        window.removeEventListener('wheel', handleScroll); // Remove the scroll listener
      }
    };

    document.body.style.overflowY = "hidden";
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [opacity, typingFinished]);

  return (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground = {false}
    backgroundColor="white"
    position="relative"
    zIndex="0"
  >
    <Box
      position="absolute"
      top="0"
      right="0"
      bottom="0"
      left="0"
      backgroundImage={`url(${portrait})`}
      backgroundSize="cover"  // Temporarily set this for troubleshooting
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      opacity={opacity}
      zIndex="-1" // Adjust this from -1 to 0
    />
    <VStack
        spacing={5}
        height="100%"
        justifyContent="center"
        alignItems="center"
    >
        {texts.map((text, index) => (
          <TypingEffect key={index} startDelay={120 * texts.slice(0, index).reduce((total, t) => total + t.length, 0)}>
            {text}
          </TypingEffect>
        ))}
    </VStack>
  </FullScreenSection>
);
}

export default LandingSection;
