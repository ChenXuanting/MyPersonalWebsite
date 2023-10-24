import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      boxShadow="lg"
      rounded="xl"
      backgroundColor="white"
      spacing={4}
      alignItems="start"
      width={["110vw", "39vw"]}  // Adjust for smaller screens and cap at a maximum for larger screens
      height={["110vw", "39vw"]}
      maxWidth="500px"  // Maximum width for the card
      maxHeight="500px"  // Maximum height to maintain the square shape
      overflow="hidden"
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="xl"
        width="100%"
        height="26vw"  // setting a fixed height to cover the top 2/3 of the container
        objectFit="cover"
      />


      <VStack
        p="2"
        spacing={2}
        width="100%"
        alignItems="start"
        flex="1"
        paddingBottom={3}
        paddingLeft={3}
      >
          <Heading as="h3" size="sm" color="black" noOfLines={1}>
              {title}
          </Heading>

        <Text color="gray.500" noOfLines={2} fontSize="xs">
          {description}
        </Text>
        
        <HStack spacing={2} mt="auto">
          <Text color="black" fontSize="xs">See more</Text>
          <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
