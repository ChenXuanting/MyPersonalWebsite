import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      backgroundColor="white"
      maxWidth="1504px"
      ml="auto"
      mr="auto"
    >
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="black"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
          borderTop="1px" // Sets the border width
          borderColor="gray.100" // Sets the border color
        >
          <p>Theo • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
