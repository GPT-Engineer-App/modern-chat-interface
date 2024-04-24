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
    <Flex height="100vh" direction="column" bg="black">
      <Flex p="4" bg="linear-gradient(to right, #FF007F, #E100FF, #FF7F00)" color="white" justifyContent="space-between" alignItems="center">
        <IconButton icon={<FaBars />} variant="outline" colorScheme="whiteAlpha" onClick={onOpen} />
        <Text fontSize="2xl">ChatGPT iOS App</Text>
        <Avatar as="a" href="/profile" name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMzk5OTgxMXww&ixlib=rb-4.0.3&q=80&w=1080" />
      </Flex>

      <VStack flex="1" p="4" spacing="4" overflowY="auto">
        {/* Example messages */}
        <Box alignSelf="flex-start" bg="white" p="3" borderRadius="lg" marginLeft="70px">
          <Text fontWeight="bold">Hello! How can I help you today?</Text>
        </Box>
        <Box alignSelf="flex-end" bg="linear-gradient(to right, #FF007F, #E100FF, #FF7F00)" p="3" borderRadius="lg">
          <Text color="white" fontWeight="bold">
            Can you show me the latest tech news?
          </Text>
        </Box>
      </VStack>

      <Flex p="4" alignItems="center" justifyContent="flex-end" ml="70px">
        <Input placeholder="Type a message..." flex="1" color="white" fontWeight="bold" />
        <IconButton ml="2" icon={<FaFileUpload />} onClick={uploadFile} />
        <IconButton ml="2" icon={<FaPaperPlane />} colorScheme="blue" onClick={sendMessage} mr="2" />
      </Flex>

      <Box position="fixed" left="10px" top="60px" height="calc(100vh - 60px)" width="60px" bg="gray.100" borderRadius="10px">
        <VStack spacing="4" p="4">
          <IconButton icon={<FaHistory />} color="green.500" variant="ghost" />
          <IconButton icon={<FaCog />} color="blue.500" variant="ghost" />
          <IconButton icon={<FaSignInAlt />} color="red.500" variant="ghost" />
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;
