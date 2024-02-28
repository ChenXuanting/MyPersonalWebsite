import React, { useState, useEffect } from "react";
import { VStack, useBreakpointValue } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import portrait from "../images/portrait.jpg"
import portraitMobile from "../images/portraitMobile.jpg"
import TypingEffect from "./TypingEffect";
import '../css/LandingSection.css';

const LandingSection = (props) => {
  const [circleSize, setCircleSize] = useState(0);
  const [typingFinished, setTypingFinished] = useState(false);
  const isBase = useBreakpointValue({ base: true, md: false });
  const hasTouchScreen = () => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(hover: none)").matches
    );
  };

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

      if (hasTouchScreen()) {
        setCircleSize(100);
        document.documentElement.style.overflowY = "scroll"; // Enable scrolling on the html element
        window.removeEventListener('touchmove', handleScroll);
        props.setScrollingEnabled(true);
        return;
      }

      // Adjust the circle size based on the scroll
      setCircleSize(prevSize => {
        const size = parseFloat(prevSize) + e.deltaY * 0.05;
        return Math.min(Math.max(size, 0), 100);  // Clamp between 0% and 100%
      });

      if (circleSize === 100) {
        document.documentElement.style.overflowY = "scroll";
        window.removeEventListener('wheel', handleScroll);
        props.setScrollingEnabled(true);
      }
    };

    if (!typingFinished || circleSize < 100) {
      document.documentElement.style.overflowY = "hidden"; // Disable scrolling on the html element
    } else {
      document.documentElement.style.overflowY = "scroll"; // Enable scrolling on the html element
    }
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      document.documentElement.style.overflowY = "scroll";
    };
  }, [circleSize, typingFinished, hasTouchScreen, props]);

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
      src={isBase? portraitMobile : portrait}
      alt="Portrait"
      id="portraitDiv"
      style={{
        clipPath: `circle(${circleSize}% at 50% 100%)`, // Use clipPath for the reveal effect
        animation: typingFinished && hasTouchScreen() ? 'revealCircle 4s forwards' : undefined, // Apply the animation if typing is finished and on mobile
      }}
    />
    {circleSize >= 50 && <div className="text-overlay" style= {{top: isBase? "75%" : "65%", left: isBase? "78%" : "68%"}}>
        <h1>Xuanting Chen</h1>
        <p>Data Scientist | Full-stack developer</p>
    </div>}
    <VStack
      spacing={5}
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      {texts.map((text, index) => (circleSize !== '100%' &&
        <TypingEffect key={index} startDelay={120 * texts.slice(0, index).reduce((total, t) => total + t.length, 0)}>
          {text}
        </TypingEffect>
      ))}
    </VStack>
  </FullScreenSection>
);
}

export default LandingSection;