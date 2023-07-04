import React, { useState, useContext } from "react";
import { Alert, AlertIcon, Container, Center, VStack, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { VendorBookingContext } from "../context/vendorBooking";

const CreateAccount = () => {
  const { setUser, setAllUsers, allUsers } = useContext(VendorBookingContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUserData = {
      username,
      password
    }

    fetch('/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
      .then((r) => {
        if (r.ok) {
          r.json()
            .then((newUser) => {
              setUser(newUser)
            })
        } else {
          r.json()
            .then((errorData) => setErrors(errorData.errors))
        }
      })
  }

  return(
    <Container marginTop='24'>
      <Center>
        <VStack spacing='12'>
          <Heading color='purple.600' size='3xl'>
            Create an Account
          </Heading>

          {errors.length > 0 && 
          <Alert status='error'>
            <AlertIcon />
            {errors}
          </Alert>}

          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input 
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />

            <FormLabel mt='2'>Password</FormLabel>
            <Input 
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Text>
            Already have an account? <a href="/login"><i>Login here!</i></a>
          </Text>

          <Button 
            colorScheme="purple"
            onClick={handleSubmit}
          >
            Create Account
          </Button>
        </VStack>
      </Center>
    </Container>
  )
}

export default CreateAccount