import React, { useState, useEffect } from "react";
import { Container, Center, VStack, Heading, FormControl, FormLabel, Input, Button, Text, Link } from "@chakra-ui/react";

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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

    // fetch('/login', {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username }),
    // })
    //   .then((r) => r.json())
    //   .then((user) => setUser(user))
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
            
            <FormLabel>Password</FormLabel>
            <Input 
              type='text' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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