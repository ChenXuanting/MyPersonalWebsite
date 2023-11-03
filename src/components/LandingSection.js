import React, { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import portrait from "../images/portrait.jpg"
import TypingEffect from "./TypingEffect";
import '../css/LandingSection.css';

const LandingSection = () => {
  const [circleSize, setCircleSize] = useState('0%');
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
      if (!typingFinished) {
        e.preventDefault();
        return;
      }

      // Adjust the circle size based on the scroll
      setCircleSize(prevSize => {
        const size = parseFloat(prevSize) + e.deltaY * 0.05;
        return `${Math.min(Math.max(size, 0), 100)}%`;  // Clamp between 0% and 100%
      });

      if (circleSize === '100%') {
        document.body.style.overflowY = "auto";
        window.removeEventListener('wheel', handleScroll);
      }
    };

    document.body.style.overflowY = "hidden";
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [circleSize, typingFinished]);

  return (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground = {false}
    backgroundColor="white"
    position="relative"
    zIndex="0"
  >
    <img
      src={portrait}
      alt="Portrait"
      id="portraitDiv"
      style={{
        clipPath: `circle(${circleSize} at 50% 100%)`, // Use clipPath for the reveal effect
      }}
    />
    {(circleSize >= '50%' || circleSize === '100%' ) && <div className="text-overlay">
        <h1>Xuanting Chen</h1>
        <p>Data Scientist | Full-stack developer</p>
    </div>}
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
