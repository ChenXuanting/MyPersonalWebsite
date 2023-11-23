import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function AlertDisplay() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"

  return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
            <AlertDialogHeader fontSize="2xl" fontWeight="bold" textAlign="center" style={{fontFamily: "'Montserrat', sans-serif" }}>
              {isSuccess ? 'All good!' : 'Oops!'}
            </AlertDialogHeader>
            <AlertDialogBody fontSize="xl" textAlign="center" style={{fontFamily: "'Montserrat', sans-serif" }}>
                {message}
              </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
  );
}

export default AlertDisplay;