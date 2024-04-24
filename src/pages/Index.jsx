// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Flex, IconButton, Input, Text, VStack, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, List, ListItem, ListIcon, Avatar, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useToast } from "@chakra-ui/react";
import { FaPaperPlane, FaBars, FaHistory, FaCog, FaSignInAlt, FaUserCircle, FaFileUpload } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const sendMessage = () => {
    toast({
      title: "Message sent.",
      description: "Your message has been sent successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const uploadFile = () => {
    toast({
      title: "File uploaded.",
      description: "Your file has been uploaded successfully!",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex height="100vh" direction="column">
      <Flex p="4" bg="gray.800" color="gray.100" justifyContent="space-between" alignItems="center">
        <IconButton icon={<FaBars />} variant="outline" colorScheme="whiteAlpha" onClick={onOpen} />
        <Text fontSize="2xl">ChatGPT iOS App</Text>
        <Avatar name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMzk5OTgxMXww&ixlib=rb-4.0.3&q=80&w=1080" />
      </Flex>

      <VStack flex="1" p="4" spacing="4" overflowY="auto">
        {/* Example messages */}
        <Box alignSelf="flex-start" bg="gray.600" p="3" borderRadius="lg" borderLeft="6px solid transparent" borderRight="20px solid gray.600" _after={{ content: '""', position: "absolute", top: "50%", left: "-10px", width: "0", height: "0", border: "10px solid transparent", borderRightColor: "gray.600", transform: "translateY(-50%)" }}>
          <Text>Hello! How can I help you today?</Text>
        </Box>
        <Box alignSelf="flex-end" bg="blue.700" p="3" borderRadius="lg" borderLeft="20px solid blue.700" borderRight="6px solid transparent" _after={{ content: '""', position: "absolute", top: "50%", right: "-10px", width: "0", height: "0", border: "10px solid transparent", borderLeftColor: "blue.700", transform: "translateY(-50%)" }}>
          <Text>Can you show me the latest tech news?</Text>
        </Box>
      </VStack>

      <Flex p="4" alignItems="center">
        <Input placeholder="Type a message..." flex="1" />
        <IconButton ml="2" icon={<FaFileUpload />} onClick={uploadFile} />
        <IconButton ml="2" icon={<FaPaperPlane />} colorScheme="blue" onClick={sendMessage} />
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <List spacing="4">
              <ListItem>
                <ListIcon as={FaHistory} color="green.500" />
                Previous Chats
              </ListItem>
              <ListItem>
                <ListIcon as={FaCog} color="blue.500" />
                Settings
              </ListItem>
              <ListItem>
                <ListIcon as={FaSignInAlt} color="red.500" />
                Login
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Index;
