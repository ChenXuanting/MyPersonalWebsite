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
    UnorderedList,
    ListItem,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react';
import RecommendationPhoto from '../../images/RecommendationSystem.png'
import NCF from '../../images/NCF.png'
import DFM from '../../images/DFM.png'

const PorjectBody = () => {
    const isBase = useBreakpointValue({ base: true, md: false });
    const { isOpen, onToggle } = useDisclosure();

    return(
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="elevated"
          my={1}
          id="project-6"
        >
          <Stack>
            <CardHeader pb={0}>
              <HStack alignItems="flex-start">
              <Image
                objectFit="cover"
                maxW={{ base: '150px', sm: '200px' }}
                src={RecommendationPhoto}
                alt="Deep Learning Recommendation System"
              />
              <Stack>
              <Heading size="md" fontFamily="'Montserrat', sans-serif">Deep Learning Recommendation System</Heading>
              <Text py={2} fontFamily="'Montserrat', sans-serif">
              This project is a clean and lightweight implementation of two popular recommendation system algorithms: Neural Collaborative Filtering (NCF) and Deep Factorization Machine (DFM) in PyTorch. We incorperate code to access the Amazon Review dataset.
                {!isBase && ' The project is designed to be easy to understand and use for anyone interested in the field of recommendation systems.'}
              </Text>
              </Stack>
              </HStack>
            </CardHeader>
            <Collapse in={isOpen} animateOpacity>
              <CardBody display="flex" alignItems="flex-end" flexDirection="column">
                <Box w={{ base: '95%', sm: '85%' }}>
                <Heading size="sm">Models</Heading>
                <Text py={2}>
                Neural Collaborative Filtering:
                </Text>
                <Image
                  objectFit="cover"
                  src={NCF}
                  alt="NCF"
                  maxW={{base:"100%", xl:"80%"}}
                />
                <Text py={2}>
                Deep Factorization Machine:
                </Text>
                <Image
                  objectFit="cover"
                  src={DFM}
                  alt="DFM"
                  maxW={{base:"100%", xl:"80%"}}
                />
                <Heading size="sm">Datasets</Heading>
                <Text py={2}>
                The project comes with a preprocessed version of the classic MovieLens 100K dataset in CSV format, located in the dataset folder.
                Additionally, you can use Amazon review datasets by modifying the ratings_name variable in main.py. The available Amazon dataset names can be checked at <Link href="https://snap.stanford.edu/data/amazon/productGraph/categoryFiles/" isExternal color="blue.500">
                  Amazon Review Datasets
                  </Link>.
                </Text>
                <Heading size="sm">Evaluation</Heading>
                <Text py={2}>
                The performance of the models is evaluated using two metrics:
                    <UnorderedList>
                        <ListItem>Hit Rate at K</ListItem>
                        <ListItem>Normalized Discounted Cumulative Gain (NDCG) at K</ListItem>
                    </UnorderedList>
                We have implemented negative sampling and leave-one-out evaluation as proposed in the <Link href="https://arxiv.org/abs/1708.05031" isExternal color="blue.500">
                    original papers
                  </Link>. Related parameters, such as the number of negative samples, can be adjusted in the main.py file.
                </Text>
                <Heading size="sm">Result</Heading>
                <Text py={2}>
                The performance is evaluated as a 10-time average on the MovieLens 100K dataset. The matrix sparsity is 0.937.
                </Text>
                <TableContainer w="100%" overflowX="auto" py={2}>
                  <Table size='sm'>
                    <Thead>
                      <Tr>
                        <Th fontSize={["xs", "sm"]}>Model</Th>
                        <Th fontSize={["xs", "sm"]}>Hit rate @ 10</Th>
                        <Th fontSize={["xs", "sm"]}>NDCG @ 10</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">NCF</Td>
                        <Td fontSize={["xs", "sm"]}>0.5815</Td>
                        <Td fontSize={["xs", "sm"]}>0.460</Td>
                      </Tr>
                      <Tr>
                        <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">DFM</Td>
                        <Td fontSize={["xs", "sm"]}>0.6036</Td>
                        <Td fontSize={["xs", "sm"]}>0.486</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                </Box>
              </CardBody>
            </Collapse>
            <CardFooter pt={0} gap={4} display='flex' alignContent='center' justifyContent='center'>
              <Heading display='flex' flexDirection='column' alignContent='center' justifyContent='center' size='xs'>Jan 2024</Heading>
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