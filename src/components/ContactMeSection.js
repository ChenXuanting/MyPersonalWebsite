import React, {useEffect} from "react";
import { useFormik } from "formik";
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
  Stack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import reactLogo from "../images/React-icon.svg";
import chakraLogo from "../images/chakra-logo.svg"

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: async (values) => {
      await submit("some-url", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
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
      spacing={8}
      minHeight="50vh"
    >
      <Stack w="100%" spacing={4} direction={{ base: 'column', md: 'row' }} alignItems="center" justifyItems="center">
        <VStack mw="1024px" alignItems="center" flex="6">
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
                    <option value="freelance">
                      Freelance project
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
                <Button type="submit" colorScheme="blue" width="full" isLoading={isLoading}>
                  Send
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
        <VStack flex="4" alignItems="center" justifyItems="center">
          <Heading style={{fontFamily: "'Montserrat', sans-serif" }}>
            Powered by
          </Heading>
          <VStack alignItems="center" justifyItems="center" py={{ base: 10, sm: 30 }} spacing={4}>
            <HStack>
              <Image src={reactLogo} alt='react-logo' width="100%" boxSize={{ base: '90px', sm: '40px', md: '60px', lg:'90px' }}/>
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
      </Stack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
