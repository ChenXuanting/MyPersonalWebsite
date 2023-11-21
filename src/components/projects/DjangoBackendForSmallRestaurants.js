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
import RestaurantBackend from '../../images/RestaurantBackend.png'
import AnomalyDetection from '../../images/AnomalyDetection.png'
import ADTrainSample from '../../images/ADTrainSample.png';
import ADTestSample from '../../images/ADTestSample.png'
import ADTrainingError from '../../images/ADTrainingError.png'
import ADTestingError from '../../images/ADTestingError.png'
import ADOutputSample from '../../images/ADOutputSample.png'

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
                src={RestaurantBackend}
                alt="Django backend for small restaurants"
              />
              <Stack>
              <Heading size="md" fontFamily="'Montserrat', sans-serif">Django Backend for Small Restaurants</Heading>
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
                    This project is the final project of the coursera course "APIs" offered by Meta.
                </Text>
                <Heading size="sm">API endpoints</Heading>
                <Text py={2}>
                    User registration and token generation:
                </Text>
                <TableContainer w="100%">
                    <Table size='sm'>
                        <Thead>
                        <Tr>
                            <Th fontSize={["xs", "sm"]}>Endpoint</Th>
                            <Th fontSize={["xs", "sm"]}>Role</Th>
                            <Th fontSize={["xs", "sm"]}>Method</Th>
                            <Th fontSize={["xs", "sm"]}>Purpose</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/users</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">No role required</Td>
                            <Td fontSize={["xs", "sm"]}>POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Creates a new user with name, email and password</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/users/users/me/</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Anyone with a valid user token</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Displays only the current user</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/token/login/</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Anyone with a valid username and password</Td>
                            <Td fontSize={["xs", "sm"]}>POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Generates access tokens that can be used in other API calls in this project</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Text py={2}>
                    Menu-items endpoints:
                </Text>
                <TableContainer w="100%" overflowX="auto">
                    <Table size='sm'>
                        <Thead>
                        <Tr>
                            <Th fontSize={["xs", "sm"]}>Endpoint</Th>
                            <Th fontSize={["xs", "sm"]}>Role</Th>
                            <Th fontSize={["xs", "sm"]}>Method</Th>
                            <Th fontSize={["xs", "sm"]}>Purpose</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Customer, delivery crew</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Lists all menu items. Return a 200 – Ok HTTP status code</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Customer, delivery crew</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">POST, PUT, PATCH, DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Denies access and returns 403 – Unauthorized HTTP status code</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items/{"{menuItem}"}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Customer, delivery crew</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Lists single menu item</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items/{"{menuItem}"}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Customer, delivery crew</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">POST, PUT, PATCH, DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Returns 403 - Unauthorized</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Manager</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Lists all menu items</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Manager</Td>
                            <Td fontSize={["xs", "sm"]}>POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Creates a new menu item and returns 201 - Created</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items/{"{menuItem}"}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Manager</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Lists single menu item</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items/{"{menuItem}"}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Manager</Td>
                            <Td fontSize={["xs", "sm"]}>PUT, PATCH</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Updates single menu item</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items/{"{menuItem}"}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Manager</Td>
                            <Td fontSize={["xs", "sm"]}>DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Deletes menu item</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Text py={2}>
                  User group management endpoints:
                </Text>
                <TableContainer w="100%" overflowX="auto">
                    <Table size='sm'>
                        <Thead>
                        <Tr>
                            <Th fontSize={["xs", "sm"]}>Endpoint</Th>
                            <Th fontSize={["xs", "sm"]}>Role</Th>
                            <Th fontSize={["xs", "sm"]}>Method</Th>
                            <Th fontSize={["xs", "sm"]}>Purpose</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/groups/manager/users</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Returns all managers</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/groups/manager/users</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Assigns the user in the payload to the manager group and returns 201-Created</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/groups/manager/users/{"{userId}"}</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Removes this particular user from the manager group and returns 200 – Success if everything is okay. If the user is not found, returns 404 – Not found</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/groups/delivery-crew/users</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Returns all delivery crew</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/groups/delivery-crew/users</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Assigns the user in the payload to the delivery crew group and returns 201-Created</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/groups/delivery-crew/users/{"{userId}"}</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Removes this user from the manager group and returns 200 – Success if everything is okay. If the user is not found, returns 404 – Not found</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Text py={2}>
                  Cart management endpoints:
                </Text>
                <TableContainer w="100%" overflowX="auto">
                    <Table size='sm'>
                        <Thead>
                        <Tr>
                            <Th fontSize={["xs", "sm"]}>Endpoint</Th>
                            <Th fontSize={["xs", "sm"]}>Role</Th>
                            <Th fontSize={["xs", "sm"]}>Method</Th>
                            <Th fontSize={["xs", "sm"]}>Purpose</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/cart/menu-items</Td>
                            <Td fontSize={["xs", "sm"]}>Customer</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Returns current items in the cart for the current user token</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/cart/menu-items</Td>
                            <Td fontSize={["xs", "sm"]}>Customer</Td>
                            <Td fontSize={["xs", "sm"]}>POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Adds the menu item to the cart. Sets the authenticated user as the user id for these cart items</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/cart/menu-items</Td>
                            <Td fontSize={["xs", "sm"]}>Customer</Td>
                            <Td fontSize={["xs", "sm"]}>DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Deletes all menu items created by the current user token</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Text py={2}>
                  Order management endpoints:
                </Text>
                <TableContainer w="100%" overflowX="auto">
                    <Table size='sm'>
                        <Thead>
                        <Tr>
                            <Th fontSize={["xs", "sm"]}>Endpoint</Th>
                            <Th fontSize={["xs", "sm"]}>Role</Th>
                            <Th fontSize={["xs", "sm"]}>Method</Th>
                            <Th fontSize={["xs", "sm"]}>Purpose</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders</Td>
                            <Td fontSize={["xs", "sm"]}>Customer</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Returns all orders with order items created by this user</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders</Td>
                            <Td fontSize={["xs", "sm"]}>Customer</Td>
                            <Td fontSize={["xs", "sm"]}>POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Creates a new order item for the current user. Gets current cart items from the cart endpoints and adds those items to the order items table. Then deletes all items from the cart for this user.</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders/{'{'}orderId{'}'}</Td>
                            <Td fontSize={["xs", "sm"]}>Customer</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Returns all items for this order id. If the order ID doesn’t belong to the current user, it displays an appropriate HTTP error status code.</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Returns all orders with order items by all users</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders/{'{'}orderId{'}'}</Td>
                            <Td fontSize={["xs", "sm"]}>Customer</Td>
                            <Td fontSize={["xs", "sm"]}>PUT, PATCH</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Updates the order. A manager can use this endpoint to set a delivery crew to this order, and also update the order status to 0 or 1.</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders/{'{'}orderId{'}'}</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]}>DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Deletes this order</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders</Td>
                            <Td fontSize={["xs", "sm"]}>Delivery crew</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">Returns all orders with order items assigned to the delivery crew</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders/{'{'}orderId{'}'}</Td>
                            <Td fontSize={["xs", "sm"]}>Delivery crew</Td>
                            <Td fontSize={["xs", "sm"]}>PATCH</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">A delivery crew can use this endpoint to update the order status to 0 or 1. The delivery crew will not be able to update anything else in this order.</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>

                <Heading size="sm">Comment</Heading>
                
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

export default OffenEval;