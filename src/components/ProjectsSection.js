import React, { useState } from 'react';
import FullScreenSection from './FullScreenSection';
import {
  Box,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  Button,
  Image,
  Collapse,
  useDisclosure,
  HStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Code,
} from '@chakra-ui/react';
import TwitterDetection from '../images/TwitterDetection.png';

const ProjectsSection = () => {
  const { isOpen: isOpen0, onToggle: onToggle0 } = useDisclosure();
  const { isOpen: isOpen1, onToggle: onToggle1 } = useDisclosure();

  return (
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground={false}
      alignItems="flex-start"
    >
      <Divider my={8} id="projects-section" />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        display="flex"
        justifyContent="center"
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
      <Heading
        fontSize={{ base: '3xl', sm: '3xl', md: '4xl', lg: '4xl' }}
        textOverflow="ellipsis"
        flex="2"
        textAlign="center"
        my={4}
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
      >
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="elevated"
          my={1}
        >
          <Stack>
            <CardHeader pb={0}>
              <HStack alignItems="flex-start">
              <Image
                objectFit="cover"
                maxW={{ base: '150px', sm: '200px' }}
                src={TwitterDetection}
                alt="Twitter Offensive Detection"
              />
              <Stack>
              <Heading size="md">Twitter Offensive Language Detection</Heading>
              <Text py={2}>
                Utilized emsembles of transformer-based models like BERT, ALBERT, and RoBERTa to identify offensive languages in over 14000 Twitter (now X) posts with an accuracy of 93.9% and an F1 score of 0.919.
                This work is a fine-tuning of the pre-trained BERT family for sequence classification. Our fine-tuned model performs equivalently to the solution positioned at the third place of SemEval-2020 (82 teams).
              </Text>
              </Stack>
              </HStack>
            </CardHeader>
            <Collapse in={isOpen0} animateOpacity>
              <CardBody display="flex" alignItems="flex-end" flexDirection="column">
                <Box w="85%">
                <Heading size="sm">Motivation</Heading>
                <Text py={2}>
                Semantic analysis is a significant field within natural language processing, extensively applied in applications such as spam detection, social media monitoring, and voice of the customer (VOC) analysis, among others. Our project plays a crucial role in social monitoring and, consequently, represents vital interests.
                </Text>
                <Heading size="sm">Approach</Heading>
                <Text py={2}>
                Sample input:
                <TableContainer>
                  <Table size='sm' w="100%" overflowX="scroll">
                    <Thead>
                      <Tr>
                        <Th>Sentence</Th>

                        <Th>Label</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>I guess Netflix is now the best channel for a TV adaptation of the video game series Half Life.</Td>
                        <Td>NOT</Td>
                      </Tr>
                      <Tr>
                        <Td>@USER Thank you Chris it was very fun to make !</Td>
                        <Td>NOT</Td>
                      </Tr>
                      <Tr>
                        <Td>@USER What the fuck</Td>
                        <Td>OFF</Td>
                      </Tr>
                      <Tr>
                        <Td>all i wanted was a jikook gc and they ended up sending that disgusting video 😭</Td>
                        <Td>NOT</Td>
                      </Tr>
                      <Tr>
                        <Td>@USER Yeah - respect for the country. No one respects you though you fat traitor</Td>
                        <Td>OFF</Td>
                      </Tr>
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th>Sentence</Th>

                        <Th>Label</Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
                </Text>
                <Text py={2}>
                  Flow: raw data &rarr; preprocessed data &rarr; tokenized data &rarr; fine-tuning &rarr; prediction &rarr; ensemble.
                </Text>
                <Text py={2}>
                  Key code segment 0: model config<br />
                    <Code colorScheme="teal" variant="subtle" w="100%" overflowX="auto">
                    <pre>{`Model_type = 'albert'     #All types: bert, roberta, albert, xlmroberta`}
                    <br />
                    {`Model_name = 'albert-base-v2'`}
                    <br />
                    {`    #All models: 'albert-base-v1', 'albert-large-v1', 'albert-xlarge-v1', 'albert-xxlarge-v1'`}
                    <br />
                    {`                #'albert-base-v2', 'albert-large-v2', 'albert-xlarge-v2', 'albert-xxlarge-v2'`}
                    <br />
                    {`                #'roberta-base', 'roberta-large'`}
                    <br />
                    {`device = torch.device("cuda" if torch.cuda.is_available() else "cpu")`}
                    <br />
                    {`config_class, model_class, tokenizer_class = AlbertConfig, AlbertForSequenceClassification, AlbertTokenizer`}
                    </pre>
                    </Code><br />
                  Key code segment 1: customized weight decay optimizer
                    <Code colorScheme="orange" variant="subtle" w="100%" overflowX="auto">
                    <pre>{`no_decay = ['bias', 'LayerNorm.weight']`}
                    <br />
                    {`optimizer_grouped_parameters = [`}
                    <br />
                    {`  {'params': [p for n, p in model.named_parameters() if not any(nd in n for nd in no_decay)], 'weight_decay': weight_decay},`}
                    <br />
                    {`  {'params': [p for n, p in model.named_parameters() if any(nd in n for nd in no_decay)], 'weight_decay': 0.0}`}
                    <br />
                    {`]`}
                    <br />
                    {`optimizer = AdamW(optimizer_grouped_parameters, lr=LR, eps=adam_eps)`}</pre>
                    </Code>
                  Key code segment 2: ensemble<br />
                    <Code colorScheme="teal" variant="subtle" w="100%" overflowX="auto">
                    <pre>{`merged_preds = np.concatenate(preds, axis = 1)`}
                    <br />
                    <br />
                    {`majority_preds = []`}
                    <br />
                    {`for i in range(merged_preds.shape[0]):`}
                    <br />
                    {`   majority_preds.append(Counter(merged_preds[i].astype(int)).most_common(1)[0][0])`}
                    <br />
                    {`mean_preds = merged_preds.mean(axis=1)`}
                    <br />
                    {`final_preds = majority_preds`}</pre>
                    </Code>
                </Text>
                <Heading size="sm">Conclusion:</Heading>
                </Box>
              </CardBody>
            </Collapse>
            <CardFooter pt={0} gap={4} display='flex' alignContent='center' justifyContent='center'>
              <Heading display='flex' flexDirection='column' alignContent='center' justifyContent='center' size='xs'>Dec 2021</Heading>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={onToggle0}
              >
                {isOpen0 ? 'Hide detail' : 'Show detail'}
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="elevated"
          my={1}
        >
          <Stack>
            <CardHeader>
              <HStack alignItems="flex-start">
              <Image
                objectFit="cover"
                maxW={{ base: '150px', sm: '200px' }}
                src={TwitterDetection}
                alt="Twitter Offensive Detection"
              />
              <Stack>
              <Heading size="md">Twitter Offensive Language Detection</Heading>
              <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
              </Text>
              </Stack>
              </HStack>
            </CardHeader>
            <Collapse in={isOpen1} animateOpacity>
              <CardBody>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
                <Text py={2}>
                  An AI-driven tool that can detect offensive language on Twitter, providing a safer and more positive social media environment.
                </Text>
              </CardBody>
            </Collapse>
            <CardFooter>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={onToggle1}
              >
                {isOpen1 ? 'Hide detail' : 'Show detail'}
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
      </Stack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
