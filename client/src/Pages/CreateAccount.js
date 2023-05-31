import React from "react";
import { Container, Center, VStack, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

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

          <Button colorScheme="purple">
            Create Account
          </Button>
        </VStack>
      </Center>
    </Container>
  )
}

export default CreateAccount