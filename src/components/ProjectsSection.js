import React from 'react';
import FullScreenSection from './FullScreenSection';
import {
  Box,
  Divider,
  Stack,
  Heading,
} from '@chakra-ui/react';

import OffenEval from './projects/OffenEval';
import AnomalyDetection from './projects/AnomalyDetect';
import XAI from './projects/XAI';
import TransferLearning from './projects/TransferLearning'
import DjangoBackendForSmallRestaurants from './projects/DjangoBackendForSmallRestaurants'

const ProjectsSection = () => {

  return (
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground={false}
      alignItems="flex-start"
      id="projects-section"
    >
      <Divider my={8}/>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        display="flex"
        justifyContent="center"
        alignItems={{ base: 'center', md: 'flex-start' }}
        w="100%"
      >
      <Heading
        fontSize={{ base: '3xl', sm: '3xl', md: '4xl', lg: '4xl' }}
        textOverflow="ellipsis"
        flex="2"
        textAlign="center"
        my={4}
        fontFamily="'Montserrat', sans-serif"
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
        p={4}
      >
        <OffenEval />
        <AnomalyDetection />
        <XAI />
        <TransferLearning />
        <DjangoBackendForSmallRestaurants />
      </Box>
      </Stack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
