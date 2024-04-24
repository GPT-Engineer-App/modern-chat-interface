import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

function Profile() {
  return (
    <VStack spacing={4} align="flex-start">
      <FormControl>
        <FormLabel htmlFor='email'>Email address</FormLabel>
        <Input id='email' type='email' />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='password'>Password</FormLabel>
        <Input id='password' type='password' />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='profilePicture'>Profile Picture</FormLabel>
        <Input id='profilePicture' type='file' />
      </FormControl>
      <Button colorScheme='blue'>Update Profile</Button>
    </VStack>
  );
}

export default Profile;