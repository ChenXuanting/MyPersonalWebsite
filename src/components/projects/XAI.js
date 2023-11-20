import {
    Box,
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
    HStack,
    Link,
    useDisclosure,
    useBreakpointValue,
  } from '@chakra-ui/react';
import XAI from '../../images/XAI.png'
import Def1 from '../../images/XAIDef1.png'
import Def1Sample from '../../images/XAI-DPSample.png'
import Def2 from '../../images/XAIDef2.png'
import Def2Sample from '../../images/XAI-CFSample.png'
import Def3 from '../../images/XAIDef3.png'
import Def3Sample from '../../images/XAI-IFSample.png'
import RacialAdult from '../../images/RacialAdult.png'
import RacialCOMPAS from '../../images/RacialCOMPAS.png'

const OffenEval = () => {
    const isBase = useBreakpointValue({ base: true, md: false });
    const { isOpen, onToggle } = useDisclosure();

    return(
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
                src={XAI}
                alt="Fairness in XAI"
              />
              <Stack>
              <Heading size="md" fontFamily="'Montserrat', sans-serif">Feature-based Fairness Evaluation through XAI Methods</Heading>
              <Text py={2} fontFamily="'Montserrat', sans-serif">
                In this project we delve into feature-level fairness using Explainable Artificial Intelligence (XAI) techniques in order to address the critical challenge of ensuring fairness in machine learning models, particularly those used in high-stakes decision-making.
                {!isBase && ' We came up with three fairness definitions as well as the respective algorithms and successfully verified the method on real datasets.'}
              </Text>
              </Stack>
              </HStack>
            </CardHeader>
            <Collapse in={isOpen} animateOpacity>
              <CardBody display="flex" alignItems="flex-end" flexDirection="column">
                <Box w={{ base: '95%', sm: '85%' }}>
                <Heading size="sm">Motivation</Heading>
                <Text py={2}>
                We were awared of the need to ensure fairness in machine learning models used in critical decision-making, particularly in addressing the biases in "black-box" models.
                We aim to leverage Explainable Artificial Intelligence (XAI) methods, focusing on feature-level fairness, to provide a deeper understanding and mitigation of biases in these systems.
                This approach goes beyond traditional outcome-level analysis, offering a more nuanced examination of biases at the feature level, and proposes new fairness definitions tailored for the XAI context.
                </Text>
                <Heading size="sm">Definition</Heading>
                <Text py={2}>
                  Demographic Parity:
                </Text>
                <Image
                  objectFit="cover"
                  src={Def1}
                  alt="XAI-DP"
                  maxW={{base:"100%", xl:"80%"}}
                />
                <Text py={2}>
                  XAI-DP sample:
                </Text>
                <Image
                  objectFit="cover"
                  src={Def1Sample}
                  alt="XAI-DP sample"
                  maxW={{base:"100%", xl:"80%"}}
                />
                <Text py={2}>
                Counterfactual Fairness:
                </Text>
                <Image
                  objectFit="cover"
                  src={Def2}
                  alt="XAI-CF"
                  maxW={{base:"100%", xl:"80%"}}
                />
                <Text py={2}>
                  XAI-DP sample:
                </Text>
                <Image
                  objectFit="cover"
                  src={Def2Sample}
                  alt="XAI-CF sample"
                  maxW={{base:"100%", xl:"80%"}}
                />
                <Text py={2}>
                Interventional Fairness:
                </Text>
                <Image
                  objectFit="cover"
                  src={Def3}
                  alt="XAI-IF"
                  maxW={{base:"100%", xl:"80%"}}
                />
                <Text py={2}>
                  XAI-IF sample:
                </Text>
                <Image
                  objectFit="cover"
                  src={Def3Sample}
                  alt="XAI-IF sample"
                  maxW={{base:"100%", xl:"80%"}}
                />
                <Heading size="sm">Result</Heading>
                <Text py={2}>
                  We successfully indentified the racial bias and gender bias in the <Link href="https://archive.ics.uci.edu/dataset/2/adult" isExternal color="blue.500">
                    Adult Income Dataset
                  </Link>,{' '}the racial bias in the <Link href="https://github.com/propublica/compas-analysis" isExternal color="blue.500">
                    COMPAS Dataset
                  </Link>,{' '}and the foreigner bias in the <Link href="https://archive.ics.uci.edu/dataset/144/statlog+german+credit+data" isExternal color="blue.500">
                    German Credit Dataset
                  </Link>. The following are a few examples.
                </Text>
                <Text py={2}>
                  Racial bias in the Adult Income Dataset in the scope of demographic parity, where the marital status feature suggests non-trivial discrepancy:
                </Text>
                <Image
                    objectFit="cover"
                    maxW={{base:"100%", xl:"80%"}}
                    src={RacialAdult}
                    alt="Racial bias detected from the Adult income dataset using XAI-DP"
                />
                <Text py={2}>
                  Racial bias in the COMPAS Dataset in the scope of Interventional Fairness, where the age factor suggests non-trivial discrepancy:
                </Text>
                <Image
                    objectFit="cover"
                    maxW={{base:"100%", xl:"80%"}}
                    src={RacialCOMPAS}
                    alt="Racial bias detected from the COMPAS dataset using XAI-IF"
                />
                <Heading size="sm">Comment</Heading>
                <Text py={2}>
                In our project, we developed an effective method to assess and quantify model unfairness using post-hoc explanation techniques like SHAP.
                This approach yielded robust experimental results that substantiate its efficacy.
                </Text>
                </Box>
              </CardBody>
            </Collapse>
            <CardFooter pt={0} gap={4} display='flex' alignContent='center' justifyContent='center'>
              <Heading display='flex' flexDirection='column' alignContent='center' justifyContent='center' size='xs'>Apr 2023</Heading>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={onToggle}
              >
                {isOpen ? 'Hide detail' : 'Show detail'}
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        )
}

export default OffenEval;