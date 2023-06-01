import React from "react";
import { Container, Center, VStack, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";

const CreateAccount = () => {

  return(
    <Container marginTop='24'>
      <Center>
        <VStack spacing='12'>
          <Heading color='purple.600' size='3xl'>
            Create an Account
          </Heading>

          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type='text' />
            
            <FormLabel>Last Name</FormLabel>
            <Input type='text' />

            <FormLabel>Username</FormLabel>
            <Input type='text' />

            <FormLabel>Password</FormLabel>
            <Input type='text' />
          </FormControl>

          <Text>
            Already have an account? <a href="http://localhost:4000/login">Login here!</a>
          </Text>

          <Button colorScheme="purple">
            Create Account
          </Button>
        </VStack>
      </Center>
    </Container>
  )
}

export default CreateAccount