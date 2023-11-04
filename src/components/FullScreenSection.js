import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1504px" width="100%" minHeight="75vh" {...boxProps} backgroundColor={boxProps.subBackgroundColor}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
