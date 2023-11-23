import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Tooltip, useToast } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    name: "Email",
    url: "mailto: bldcxt@gmail.com",
  },
  {
    icon: faGithub,
    name: "Github",
    url: "https://github.com/ChenXuanting",
  },
  {
    icon: faLinkedin,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/theochen1108/",
  },
];

const Header = (props) => {

  const toast = useToast()

  const handleClick = (anchor) => (e) => {
    if (!props.scrollingEnabled) {
      e.preventDefault();
      toast({
        title: "Please wait.",
        description: "Scorlling is disabled when the portrait is not revealed.",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left="50%"
      transform="translateX(-50%)"
      backgroundColor="white"
      borderBottom="1px" // Sets the border width
      borderColor="gray.100" // Sets the border color
      width = "100%"
      maxWidth="1504px"
      zIndex={1000}
    >
      <Box color="black" maxWidth="95%" margin="0 auto">
        <HStack
          px={{ base: 4, md: 16}}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack>
              {socials.map((social, index) => (
                <Tooltip key={social.name} label={social.name} aria-label='A tooltip'>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                </Tooltip>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={{base:"2", md:"8"}}>
              {/* Add links to Projects and Contact me section */}
                <a href="/#bio" onClick={handleClick('bio')} style={{ fontWeight: 'bold', fontFamily: "'Montserrat', sans-serif" }}>Bio</a>
                <a href="/#projects" onClick={handleClick('projects')} style={{ fontWeight: 'bold', fontFamily: "'Montserrat', sans-serif" }}>Projects</a>
                <a href="/#contact-me" onClick={handleClick('contactme')} style={{ fontWeight: 'bold', fontFamily: "'Montserrat', sans-serif" }}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
