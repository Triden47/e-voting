import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  useUpdateEffect,
  background,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { useState } from "react";

//Components
import Content from "./Content";
// import Title from "../Title";

const LinkItems = [
  { name: "Voter Registration", icon: FiHome },
  { name: "Voting Area", icon: FiTrendingUp },
  // { name: "Candidate List", icon: FiStar },
  // { name: "Change State", icon: FiCompass },
  // { name: "Settings", icon: FiSettings },
];

const SimpleSidebar = () => {
  const [item, setItem] = useState("Create");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        item={item}
        setItem={setItem}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} item={item} setItem={setItem} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Content item={item} />
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, item, setItem, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      {LinkItems.map((link, index) => (
        <NavItem
          key={index}
          icon={link.icon}
          onClick={() => setItem(link.name)}
          border={link.name === item ? "solid 2px" : "white solid 2px"}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "black",
        color: "white",
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

export default SimpleSidebar;
