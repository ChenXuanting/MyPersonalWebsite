import React, { useEffect } from 'react';
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
  useBreakpointValue
} from '@chakra-ui/react';
import TwitterDetection from '../images/TwitterDetection.png';

const ProjectsSection = () => {
  const isBase = useBreakpointValue({ base: true, md: false });
  const { isOpen: isOpen0, onToggle: onToggle0 } = useDisclosure();
  const { isOpen: isOpen1, onToggle: onToggle1 } = useDisclosure();

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
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="elevated"
          my={1}
          id="project-1"
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
              <Heading size="md" fontFamily="'Montserrat', sans-serif">Twitter Offensive Language Detection</Heading>
              <Text py={2} fontFamily="'Montserrat', sans-serif">
                Utilized ensembles of transformer-based models like BERT, ALBERT, and RoBERTa to identify offensive languages in over 14000 Twitter (now X) posts with an accuracy of 93.9% and an F1 score of 0.919.
                {!isBase && ' This work is a fine-tuning of the pre-trained BERT family for sequence classification. Our fine-tuned model performs equivalently to the solution positioned at the third place of SemEval-2020 (82 teams).'}
              </Text>
              </Stack>
              </HStack>
            </CardHeader>
            <Collapse in={isOpen0} animateOpacity>
              <CardBody display="flex" alignItems="flex-end" flexDirection="column">
                <Box w={{ base: '95%', sm: '85%' }}>
                <Heading size="sm">Motivation</Heading>
                <Text py={2}>
                Semantic analysis is a significant field within natural language processing, extensively applied in applications such as spam detection, social media monitoring, and voice of the customer (VOC) analysis, among others. Our project plays a crucial role in social monitoring and, consequently, represents vital interests.
                </Text>
                <Heading size="sm">Approach</Heading>
                <Text py={2}>
                Sample input:
                </Text>
                <TableContainer w="100%" overflowX="auto">
                  <Table size='sm'>
                    <Thead>
                      <Tr>
                        <Th fontSize={["xs", "sm"]}>Sentence</Th>

                        <Th fontSize={["xs", "sm"]}>Label</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">I guess Netflix is now the best channel for a TV adaptation of the video game series Half Life.</Td>
                        <Td fontSize={["xs", "sm"]}>NOT</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">@USER Thank you Chris it was very fun to make !</Td>
                        <Td fontSize={["xs", "sm"]}>NOT</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">@USER What the fuck</Td>
                        <Td fontSize={["xs", "sm"]}>OFF</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">all i wanted was a jikook gc and they ended up sending that disgusting video 😭</Td>
                        <Td fontSize={["xs", "sm"]}>NOT</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">@USER Yeah - respect for the country. No one respects you though you fat traitor</Td>
                        <Td fontSize={["xs", "sm"]}>OFF</Td>
                      </Tr>
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th fontSize={["xs", "sm"]}>Sentence</Th>

                        <Th fontSize={["xs", "sm"]}>Label</Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
                <Text py={2}>
                  Flow: raw data &rarr; preprocessed data &rarr; tokenized data &rarr; fine-tuning &rarr; prediction &rarr; ensemble.
                </Text>
                <Text py={2}>
                  Key code segment 0: model configuration<br />
                </Text>
                  <Code colorScheme="teal" variant="subtle" my={2}>
                    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{`Model_type = 'albert'     #All types: bert, roberta, albert, xlmroberta
Model_name = 'albert-base-v2'
            #All models: 'albert-base-v1', 'albert-large-v1', 'albert-xlarge-v1', 'albert-xxlarge-v1'
            #'albert-base-v2', 'albert-large-v2', 'albert-xlarge-v2', 'albert-xxlarge-v2'
            #'roberta-base', 'roberta-large'
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
config_class, model_class, tokenizer_class = AlbertConfig, AlbertForSequenceClassification, AlbertTokenizer`}</pre>
                  </Code><br />
                  Key code segment 1: customized weight decay optimizer
                    <Code colorScheme="orange" variant="subtle" my={2}>
                   <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{`no_decay = ['bias', 'LayerNorm.weight']
optimizer_grouped_parameters = [
  {'params': [p for n, p in model.named_parameters() if not any(nd in n for nd in no_decay)], 'weight_decay': weight_decay},
  {'params': [p for n, p in model.named_parameters() if any(nd in n for nd in no_decay)], 'weight_decay': 0.0}
]
optimizer = AdamW(optimizer_grouped_parameters, lr=LR, eps=adam_eps)`}</pre>
                    </Code>
                  Key code segment 2: ensemble<br />
                    <Code colorScheme="teal" variant="subtle" my={2}>
                    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{`merged_preds = np.concatenate(preds, axis = 1)
majority_preds = []
for i in range(merged_preds.shape[0]):
  majority_preds.append(Counter(merged_preds[i].astype(int)).most_common(1)[0][0])
final_preds = majority_preds`}</pre>
                    </Code>
                <Heading size="sm">Result</Heading>
                <TableContainer w="100%" overflowX="auto" py={2}>
                  <Table size='sm'>
                    <Thead>
                      <Tr>
                        <Th fontSize={["xs", "sm"]}>Model</Th>
                        <Th fontSize={["xs", "sm"]}>Macro F1</Th>
                        <Th fontSize={["xs", "sm"]}>Accuracy</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">All NOT</Td>
                        <Td fontSize={["xs", "sm"]}>41.93</Td>
                        <Td fontSize={["xs", "sm"]}>72.21</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">All OFF</Td>
                        <Td fontSize={["xs", "sm"]}>21.74</Td>
                        <Td fontSize={["xs", "sm"]}>27.79</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]}></Td>
                        <Td fontSize={["xs", "sm"]} fontWeight="bold">Single Models</Td>
                        <Td fontSize={["xs", "sm"]}></Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">BERT-base</Td>
                        <Td fontSize={["xs", "sm"]}>90.93</Td>
                        <Td fontSize={["xs", "sm"]}>92.26</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">BERT-large</Td>
                        <Td fontSize={["xs", "sm"]}>91.42</Td>
                        <Td fontSize={["xs", "sm"]}>92.74</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">RoBERTa-base</Td>
                        <Td fontSize={["xs", "sm"]}>91.70</Td>
                        <Td fontSize={["xs", "sm"]}>92.87</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">RoBERTa-large</Td>
                        <Td fontSize={["xs", "sm"]} fontWeight="bold">91.86</Td>
                        <Td fontSize={["xs", "sm"]} fontWeight="bold">93.10</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">RoBERTa-large MLM</Td>
                        <Td fontSize={["xs", "sm"]} textDecoration="underline">91.99</Td>
                        <Td fontSize={["xs", "sm"]} textDecoration="underline">93.21</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">ALBERT-large-v1</Td>
                        <Td fontSize={["xs", "sm"]}>91.50</Td>
                        <Td fontSize={["xs", "sm"]}>92.15</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">ALBERT-large-v2</Td>
                        <Td fontSize={["xs", "sm"]}>91.49</Td>
                        <Td fontSize={["xs", "sm"]}>92.13</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">ALBERT-xxlarge-v1</Td>
                        <Td fontSize={["xs", "sm"]}>91.39</Td>
                        <Td fontSize={["xs", "sm"]}>92.42</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">ALBERT-xxlarge-v2</Td>
                        <Td fontSize={["xs", "sm"]}>91.55</Td>
                        <Td fontSize={["xs", "sm"]}>92.91</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]}></Td>
                        <Td fontSize={["xs", "sm"]} fontWeight="bold">Ensembles</Td>
                        <Td fontSize={["xs", "sm"]}></Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">BERT</Td>
                        <Td fontSize={["xs", "sm"]}>91.60</Td>
                        <Td fontSize={["xs", "sm"]}>93.15</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">RoBERTa</Td>
                        <Td fontSize={["xs", "sm"]}>91.83</Td>
                        <Td fontSize={["xs", "sm"]}>93.03</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">ALBERT-all</Td>
                        <Td fontSize={["xs", "sm"]} fontWeight="bold">91.90</Td>
                        <Td fontSize={["xs", "sm"]} fontWeight="bold">93.49</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">ALBERT-xxlargea</Td>
                        <Td fontSize={["xs", "sm"]}>91.58</Td>
                        <Td fontSize={["xs", "sm"]}>93.27</Td>
                      </Tr>
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th fontSize={["xs", "sm"]}>Model</Th>
                        <Th fontSize={["xs", "sm"]}>Macro F1</Th>
                        <Th fontSize={["xs", "sm"]}>Accuracy</Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
                <Heading size="sm">Comment</Heading>
                <Text py={2}>
                  In this project we successfully fine-tuned pre-trained language models on our specific task and accquired excellent result.
                </Text>
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
      </Box>
      </Stack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
