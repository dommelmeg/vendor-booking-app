import React from "react";
import { Container, Center, VStack, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

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

          <Button colorScheme="purple">
            Sign In
          </Button>
        </VStack>
      </Center>
    </Container>
  )
}

export default Login