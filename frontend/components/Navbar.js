import styles from "../styles//Navbar.module.css";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

//Components
import { AdminContext } from "./context/AdminProvider";
import Login from "./Login";

const Navbar = () => {
  const { admin } = useContext(AdminContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className={styles.container}>
      <div className={styles.nav_links}>
        {admin ? (
          <Button>
            <Link href="/create">Create new poll</Link>
          </Button>
        ) : (
          <>
            <Button onClick={onOpen}>Admin Login</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <Login onClose={onClose} />
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
