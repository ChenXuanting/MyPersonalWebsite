import React, {useState} from "react";
import { useFormik } from "formik";
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Image,
  Link,
  Text,
  Card,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import {useAlertContext} from "../context/alertContext";
import reactLogo from "../images/React-icon.svg";
import chakraLogo from "../images/chakra-logo.svg"

const ContactMeSection = () => {
  const { onOpen } = useAlertContext();
  const [isSending, setIsSending] = useState(false);


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: async (values) => {
      setIsSending(true);
      console.log(values)
      try {
        const response = await axios.post('/api/send-email', values);
        onOpen('success', 'Message sent successfully!');
        formik.resetForm();
      } catch (error) {
        onOpen('error', 'Failed to send message.');
      } finally {
        setIsSending(false); // Stop loading
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      comment: Yup.string().required('Required')
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground = {false}
      backgroundColor="white"
      py={8}
      px={4}
      spacing={8}
      minHeight="50vh"
    >
      <Card w="100%" spacing={4} direction={{ base: 'column', md: 'row' }} alignItems="center" justifyItems="center"
          bg="rgba(120, 110, 110, 0.04)"
          backdropFilter="blur(10px)"
          borderRadius="1rem"
      >
        <VStack mw="1024px" alignItems="center" flex="6" py={8}>
          <Heading as="h1" id="contactme-section" style={{fontFamily: "'Montserrat', sans-serif" }}>
            Contact me
          </Heading>
          <Box p={6} rounded="md" w="100%" style={{maxWidth: "600px"}}>
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={2}>
                <HStack w="100%" spacing={2} align="flex-start">
                <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input variant='flushed'
                    {...formik.getFieldProps('firstName')}
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.lastName && !!formik.errors.lastName}>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input variant='flushed'
                    {...formik.getFieldProps('lastName')}
                  />
                  <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                </FormControl>
                </HStack>
                <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input variant='flushed'
                    {...formik.getFieldProps('email')}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.type && !!formik.errors.type}>
                  <FormLabel htmlFor="type">Reason</FormLabel>
                  <Select variant='flushed' placeholder='Select option' {...formik.getFieldProps('type')}>
                    <option value="hireMe">Recruitment</option>
                    <option value="business">
                      Business
                    </option>
                    <option value="bug">
                      Bug report
                    </option>
                    <option value="personal">
                      Personal
                    </option>
                    <option value="other">Other</option>
                  </Select>
                  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea variant='flushed'
                    {...formik.getFieldProps('comment')}
                    height={130}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="blue" width="full" isLoading={isSending}>
                  Send
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
        <Box
          flex="4"
          alignItems="center"
          justifyItems="center"
        >
          <VStack
            alignItems="center"
            justifyItems="center"
            w="60%"
            py={4}
          >
            <Heading style={{fontFamily: "'Montserrat', sans-serif" }}>
              Powered by
            </Heading>
            <VStack alignItems="center" justifyItems="center" py={{ base: 10, sm: 30 }} spacing={4}>
              <HStack>
                <Image src={reactLogo} alt='react-logo' width="100%" boxSize={{ base: '90px', sm: '60px', md:'60px', lg:'80px' }}/>
                <Text fontSize={{ base: '5xl', sm: '5xl' }} fontWeight="bold" fontFamily="Optimistic Display,-apple-system,ui-sans-serif,system-ui,BlinkMacSystemFont,Segoe UI,
                                  Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,
                                  Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">
                  React
                </Text>
              </HStack>
              <Link
                  href="https://chakra-ui.com/"
                  aria-label="Chakra UI Home"
                  mx={10}
                >
                <Image src={chakraLogo} alt='chakra-logo' width="300px"/>
              </Link>
            </VStack>
          </VStack>
        </Box>
      </Card>
    </FullScreenSection>
  );
};

export default ContactMeSection;
