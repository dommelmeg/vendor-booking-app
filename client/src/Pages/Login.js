import React, { useState, useContext } from "react";
import { AlertIcon, Alert, Container, Center, VStack, Heading, FormControl, FormLabel, Input, Button, Text, InputGroup, InputRightElement } from "@chakra-ui/react";
import { VendorBookingContext } from "../context/vendorBooking"

const Login = () => {
  const { setUser } = useContext(VendorBookingContext)

  const [show, setShow] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json()
          .then((user) => setUser(user));
      } else {
        r.json()
          .then((errorData) => setErrors(errorData.error.login))
      }
    })
  }

  return(
    <Container marginTop='24' h='calc(100vh)'>
      <Center>
        <VStack spacing='12'>
          <Heading color='purple.600' size='3xl'>
            Sign In
          </Heading>

          {errors.length > 0 && 
          <Alert status='error'>
            <AlertIcon />
            {errors}
          </Alert>}

          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder='Username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            
            <FormLabel mt='2'>Password</FormLabel>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Text>
            Don't have an account? <a href='/signup'><i>Sign up here!</i></a>
          </Text>

          <Button 
            colorScheme="purple"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </VStack>
      </Center>
    </Container>
  )
}

export default Login