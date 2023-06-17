import React, { useState, useContext } from "react";
import { Container, Center, VStack, Heading, FormControl, FormLabel, Input, Button, Text, InputGroup, InputRightElement } from "@chakra-ui/react";
import { VendorBookingContext } from "../context/vendorBooking"

const Login = () => {
  const { setUser } = useContext(VendorBookingContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = React.useState(false)

  const handleClick = () => setShow(!show)

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
        r.json().then((user) => setUser(user));
      } else {
        // r.json().then((err) => setErrors(err.errors));
        console.log('whomp whomp')
      }
    })
  }

  return(
    <Container marginTop='24'>
      <Center>
        <VStack spacing='12'>
          <Heading color='purple.600' size='3xl'>
            Sign In
          </Heading>

          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Text>
            Don't have an account? <a href="http://localhost:4000/signup">Sign up here!</a>
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