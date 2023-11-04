import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Divider, Card, CardHeader, CardBody, CardFooter, Text, Stack, Heading, Button, Image } from "@chakra-ui/react";
import TwitterDetection from "../images/TwitterDetection.png"

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor= "white"
      isDarkBackground = {false}
      alignItems="flex-start"
    >
      <Divider my={8} id="projects-section"/>
      <Box
        display="flex"
        flexDirection= "row"
        justifyContent="center"
        alignItems="flex-start"
        overflowX="auto"
        width="100%"
        style = {{marginTop: 0}}
      >
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src= {TwitterDetection}
            alt='Twitter Offensive Detection'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Twitter Offensive Language Detection</Heading>

              <Text py='2'>
              Twitter Offensive Language Detection.Twitter Offensive Language Detection.Twitter Offensive Language Detection.Twitter Offensive Language Detection.Twitter Offensive Language Detection.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Show detail
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
