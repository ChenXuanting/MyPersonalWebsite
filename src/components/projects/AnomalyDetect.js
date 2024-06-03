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
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Code,
    Link,
    useDisclosure,
    useBreakpointValue,
  } from '@chakra-ui/react';
import AnomalyDetection from '../../images/AnomalyDetection.png'
import ADTrainSample from '../../images/ADTrainSample.png';
import ADTestSample from '../../images/ADTestSample.png'
import ADTrainingError from '../../images/ADTrainingError.png'
import ADTestingError from '../../images/ADTestingError.png'
import ADOutputSample from '../../images/ADOutputSample.png'

const PorjectBody = () => {
    const isBase = useBreakpointValue({ base: true, md: false });
    const { isOpen, onToggle } = useDisclosure();

    return(
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="elevated"
          my={1}
          id="project-5"
        >
          <Stack>
            <CardHeader pb={0}>
              <HStack alignItems="flex-start">
              <Image
                objectFit="cover"
                maxW={{ base: '150px', sm: '200px' }}
                src={AnomalyDetection}
                alt="Anomaly Detection in time-series signals"
              />
              <Stack>
              <Heading size="md" fontFamily="'Montserrat', sans-serif">Time-series Anomaly Detection</Heading>
              <Text py={2} fontFamily="'Montserrat', sans-serif">
                Implemented and deployed autoencoders to help clients detect anomalous data points in time-series signals collected from reflow ovens in production environments. Obatined an accuracy rate of 0.84.
                {!isBase && ' This project applied deep learning algorithms to industrial data and achieved exceptional results without requiring extensive training resources.'}
              </Text>
              </Stack>
              </HStack>
            </CardHeader>
            <Collapse in={isOpen} animateOpacity>
              <CardBody display="flex" alignItems="flex-end" flexDirection="column">
                <Box w={{ base: '95%', sm: '85%' }}>
                <Heading size="sm">Motivation</Heading>
                <Text py={2}>
                A reflow oven is primarily used to reflow solder surface-mounted electronic components onto printed circuit boards (PCBs). In commercial mass production, these ovens are structured as elongated tunnels equipped with a conveyor belt for transporting PCBs. They feature several zones, each with individually controlled heating temperatures.
                As PCBs progress through the oven, they are exposed to different thermal zones at a regulated speed. Technicians fine-tune the conveyor speed and temperatures of each zone to meet specific thermal profiles, making precise control of temperature patterns crucial.
                In this context, we employed autoencoders to enhance stability control, ensuring reliable management of temperature variations.
                </Text>
                <Heading size="sm">Approach</Heading>
                <Text py={2}>
                  Training sample:
                </Text>
                <Image
                  objectFit="cover"
                  src={ADTrainSample}
                  alt="Anomaly Detection training sample"
                  maxW={{base:"100%", xl:"80%"}}
                />
                <Text py={2}>
                  Test sample (human labeled):
                </Text>
                <Image
                  objectFit="cover"
                  src={ADTestSample}
                  alt="Anomaly Detection testing sample"
                  maxW={{base:"100%", xl:"80%"}}
                />
                <Text py={2}>
                  Flow: train data &rarr; fitted autoencoder &rarr; feed test data &rarr; reconstruction error &rarr; analyze errors &rarr; mark anomalies.
                </Text>
                <Text py={2}>
                We utilized training data as reference samples to calibrate our autoencoder, carefully monitoring reconstruction errors throughout the process.
                When the model processes test data, it exhibits a distinct distribution of reconstruction errors compared to the training phase.
                Patterns not represented in the training data typically result in higher reconstruction errors. By examining these discrepancies, we successfully identify anomalous points.
                </Text>
                <Text py={2}>
                  Key code segment 0: model structure<br />
                </Text>
                  <Code colorScheme="teal" variant="subtle" my={2}>
                    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{`model = keras.Sequential(
    [
        layers.Input(shape=(x_train.shape[1], x_train.shape[2])),
        layers.Conv1D(
            filters=32, kernel_size=7, padding="same", strides=2, activation="relu"
        ),
        layers.Dropout(rate=0.2),
        layers.Conv1D(
            filters=16, kernel_size=7, padding="same", strides=2, activation="relu"
        ),
        layers.Conv1DTranspose(
            filters=16, kernel_size=7, padding="same", strides=2, activation="relu"
        ),
        layers.Dropout(rate=0.2),
        layers.Conv1DTranspose(
            filters=32, kernel_size=7, padding="same", strides=2, activation="relu"
        ),
        layers.Conv1DTranspose(filters=1, kernel_size=7, padding="same"),
    ]
)`}</pre>
                  </Code><br />
                  <Text py={2}>
                  Key code segment 1: resonstruction error analysis
                  </Text>
                    <Code colorScheme="orange" variant="subtle" my={2}>
                   <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{`# data i is an anomaly if samples [(i - timesteps + 1) to (i)] are anomalies
anomalous_data_indices = []
anomaly_threshold = 0.35 * TIME_STEPS
for data_idx in range(TIME_STEPS - 1, len(test_value) - TIME_STEPS + 1):
    if np.sum(anomalies[data_idx - TIME_STEPS + 1 : data_idx]) >= anomaly_threshold:
        anomalous_data_indices.append(data_idx)`}</pre>
                    </Code>
                    <Text py={2}>
                   Sample discrepancy in construction errors:
                  </Text>
                    <HStack spacing={4} w='100%'>
                    <Image
                      objectFit="cover"
                      src={ADTrainingError}
                      alt="Anomaly Detection training error"
                      maxW={{base:"50%", xl:"40%"}}
                    />
                    <Image
                      objectFit="cover"
                      src={ADTestingError}
                      alt="Anomaly Detection testing error"
                      maxW={{base:"50%", xl:"40%"}}
                    />
                    </HStack>
                <Heading size="sm">Result</Heading>
                <TableContainer w="100%" overflowX="auto" py={2}>
                  <Table size='sm'>
                    <Thead>
                      <Tr>
                        <Th fontSize={["xs", "sm"]}>Label</Th>
                        <Th fontSize={["xs", "sm"]}>Precision</Th>
                        <Th fontSize={["xs", "sm"]}>Recall</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Normal</Td>
                        <Td fontSize={["xs", "sm"]}>0.86</Td>
                        <Td fontSize={["xs", "sm"]}>0.94</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Abnormal</Td>
                        <Td fontSize={["xs", "sm"]}>0.76</Td>
                        <Td fontSize={["xs", "sm"]}>0.54</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <Image
                objectFit="cover"
                maxW={{base:"100%", xl:"80%"}}
                src={ADOutputSample}
                alt="Anomaly Detection Output Sample"
              />
                <Heading size="sm">Comment</Heading>
                <Text py={2}>
                  In our project, we effectively employed an autoencoder to detect anomalies in time-series data.
                  Our approach aligns with the methodologies benchmarked in the paper{' '}
                  <Link href="https://openreview.net/pdf?id=r8IvOsnHchr" isExternal color="blue.500">
                    "Revisiting Time Series Outlier Detection: Definitions and Benchmarks."
                  </Link>{' '}
                  by Lai et al.
                </Text>
                </Box>
              </CardBody>
            </Collapse>
            <CardFooter pt={0} gap={4} display='flex' alignContent='center' justifyContent='center'>
              <Heading display='flex' flexDirection='column' alignContent='center' justifyContent='center' size='xs'>Sep 2023</Heading>
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

export default PorjectBody;