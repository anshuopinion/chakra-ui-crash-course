import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Flex
        h="75px"
        bg="brand.800"
        justify="space-between"
        align="center"
        px={4}
      >
        <IconButton
          onClick={onOpen}
          ref={btnRef}
          variant="ghost"
          color="white"
          _hover={{ bg: "main.400" }}
          fontSize="3xl"
        >
          <FaBars />
        </IconButton>
        <Menu>
          <MenuButton>
            <Avatar />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Setting</MenuItem>
          </MenuList>
        </Menu>
        {/* <Popover>
          <PopoverTrigger>
            <Avatar />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              <List>
                <ListItem>Profile</ListItem>
                <ListItem>Setting</ListItem>
              </List>
            </PopoverBody>
          </PopoverContent>
        </Popover> */}
      </Flex>
    </>
  );
};

export default NavBar;
