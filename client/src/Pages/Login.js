import React from "react";
import { Container, Center, VStack, Heading, FormControl, FormLabel, Input, Button, Text, Link } from "@chakra-ui/react";

const Login = () => {
  return(
    <Container marginTop='24'>
      <Center>
        <VStack spacing='12'>
          <Heading color='purple.600' size='3xl'>
            Sign In
          </Heading>

          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input type='text' />
            
            <FormLabel>Password</FormLabel>
            <Input type='text' />
          </FormControl>

          <Text>
            Don't have an account? <a href="http://localhost:4000/create-an-account">Sign up here!</a>
          </Text>

          <Button colorScheme="purple">
            Sign In
          </Button>
        </VStack>
      </Center>
    </Container>
  )
}

export default Login