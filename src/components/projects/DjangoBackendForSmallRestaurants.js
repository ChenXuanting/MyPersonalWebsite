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
    useDisclosure,
    useBreakpointValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
import RestaurantBackend from '../../images/RestaurantBackend.png'
import PeerReview1 from '../../images/PeerReview1.png';
import PeerReview2 from '../../images/PeerReview2.png';
import PeerReview3 from '../../images/PeerReview3.png';
import PeerReview4 from '../../images/PeerReview4.png';
import PeerReview5 from '../../images/PeerReview5.png';
import PeerReview6 from '../../images/PeerReview6.png';
import PeerReview7 from '../../images/PeerReview7.png';

function PeerReviewModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Text color="blue.500" cursor="pointer" onClick={onOpen}>
          Click here to see the review.
        </Text>

        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Peer Review</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={PeerReview1} alt="Peer Review pic 1" />
              <Image src={PeerReview2} alt="Peer Review pic 2" />
              <Image src={PeerReview3} alt="Peer Review pic 3" />
              <Image src={PeerReview4} alt="Peer Review pic 4" />
              <Image src={PeerReview5} alt="Peer Review pic 5" />
              <Image src={PeerReview6} alt="Peer Review pic 6" />
              <Image src={PeerReview7} alt="Peer Review pic 7" />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }

const PorjectBody = () => {
    const isBase = useBreakpointValue({ base: true, md: false });
    const { isOpen, onToggle } = useDisclosure();

    return(
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="elevated"
          my={1}
          id="project-4"
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
                Created a fully functioning API project for small restaurants so that the client application developers can use the APIs to develop web and mobile applications.
                {!isBase && ' People with different roles will be able to browse, add and edit menu items, place orders, browse orders, assign delivery crew to orders and finally deliver the orders. '}
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
                    <Table size={['xs','sm']}>
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
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">No role required</Td>
                            <Td fontSize={["xs", "sm"]}>POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Creates a new user with name, email and password</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/users/users/me/</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Anyone with a valid user token</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Displays only the current user</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/token/login/</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Anyone with a valid username and password</Td>
                            <Td fontSize={["xs", "sm"]}>POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Generates access tokens that can be used in other API calls in this project</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Text py={2}>
                    Menu-items endpoints:
                </Text>
                <TableContainer w="100%" overflowX="auto">
                    <Table size={['xs','sm']}>
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
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Customer, delivery crew</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Lists all menu items. Return a 200 – Ok HTTP status code</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Customer, delivery crew</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">POST, PUT, PATCH, DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Denies access and returns 403 – Unauthorized HTTP status code</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items/{"{menuItem}"}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Customer, delivery crew</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Lists single menu item</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items/{"{menuItem}"}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" >Customer, delivery crew</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">POST, PUT, PATCH, DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Returns 403 - Unauthorized</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Manager</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Lists all menu items</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Manager</Td>
                            <Td fontSize={["xs", "sm"]}>POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Creates a new menu item and returns 201 - Created</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items/{"{menuItem}"}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Manager</Td>
                            <Td fontSize={["xs", "sm"]}>GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Lists single menu item</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items/{"{menuItem}"}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">PUT, PATCH</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Updates single menu item</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/menu-items/{"{menuItem}"}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Manager</Td>
                            <Td fontSize={["xs", "sm"]}>DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Deletes menu item</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Text py={2}>
                  User group management endpoints:
                </Text>
                <TableContainer w="100%" overflowX="auto">
                    <Table size={['xs','sm']}>
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
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Returns all managers</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/groups/manager/users</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Assigns the user in the payload to the manager group and returns 201-Created</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/groups/manager/users/{"{userId}"}</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Removes this particular user from the manager group and returns 200 – Success if everything is okay. If the user is not found, returns 404 – Not found</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/groups/delivery-crew/users</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Returns all delivery crew</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/groups/delivery-crew/users</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Assigns the user in the payload to the delivery crew group and returns 201-Created</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/groups/delivery-crew/users/{"{userId}"}</Td>
                            <Td fontSize={["xs", "sm"]}>Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Removes this user from the manager group and returns 200 – Success if everything is okay. If the user is not found, returns 404 – Not found</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Text py={2}>
                  Cart management endpoints:
                </Text>
                <TableContainer w="100%" overflowX="auto">
                    <Table size={['xs','sm']}>
                        <Thead>
                        <Tr>
                            <Th fontSize={["xs", "sm"]} whiteSpace="normal">Endpoint</Th>
                            <Th fontSize={["xs", "sm"]} whiteSpace="normal">Role</Th>
                            <Th fontSize={["xs", "sm"]} whiteSpace="normal">Method</Th>
                            <Th fontSize={["xs", "sm"]} whiteSpace="normal">Purpose</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/cart/menu-items</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Customer</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Returns current items in the cart for the current user token</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/cart/menu-items</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Customer</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Adds the menu item to the cart. Sets the authenticated user as the user id for these cart items</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/cart/menu-items</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Customer</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Deletes all menu items created by the current user token</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Text py={2}>
                  Order management endpoints:
                </Text>
                <TableContainer w="100%" overflowX="auto">
                    <Table size={['xs', 'sm']}>
                        <Thead>
                        <Tr>
                            <Th fontSize={["xs", "sm"]} whiteSpace="normal">Endpoint</Th>
                            <Th fontSize={["xs", "sm"]} whiteSpace="normal">Role</Th>
                            <Th fontSize={["xs", "sm"]} whiteSpace="normal">Method</Th>
                            <Th fontSize={["xs", "sm"]} whiteSpace="normal">Purpose</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Customer</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Returns all orders with order items created by this user</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Customer</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">POST</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Creates a new order item for the current user. Gets current cart items from the cart endpoints and adds those items to the order items table. Then deletes all items from the cart for this user.</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders/{'{'}orderId{'}'}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Customer</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Returns all items for this order id. If the order ID doesn’t belong to the current user, it displays an appropriate HTTP error status code.</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Returns all orders with order items by all users</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders/{'{'}orderId{'}'}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Customer</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">PUT, PATCH</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Updates the order. A manager can use this endpoint to set a delivery crew to this order, and also update the order status to 0 or 1.</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders/{'{'}orderId{'}'}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Manager</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">DELETE</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Deletes this order</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Delivery crew</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">GET</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Returns all orders with order items assigned to the delivery crew</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal" wordBreak="break-word">/api/orders/{'{'}orderId{'}'}</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">Delivery crew</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">PATCH</Td>
                            <Td fontSize={["xs", "sm"]} whiteSpace="normal">A delivery crew can use this endpoint to update the order status to 0 or 1. The delivery crew will not be able to update anything else in this order.</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>

                <Heading size="sm">Comment</Heading>
                    <HStack w="100%">
                    <Text py={2}>
                        The project has been peer reviewed:
                    </Text>
                    <PeerReviewModal />
                    </HStack>
                </Box>
              </CardBody>
            </Collapse>
            <CardFooter pt={0} gap={4} display='flex' alignContent='center' justifyContent='center'>
              <Heading display='flex' flexDirection='column' alignContent='center' justifyContent='center' size='xs'>Jul 2023</Heading>
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