import React, { useEffect, useState } from "react";
import { Container, Center, VStack, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'

const CreateAccount = ({ user, setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    console.log(user)
    if (user) {
      navigate('/')
    }
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUserData = {
      username,
      password
    }

    fetch('/create-an-account', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
      .then((r) => r.json())
      .then((newUser) => setUser(newUser))
  }


  return(
    <Container marginTop='24'>
      <Center>
        <VStack spacing='12'>
          <Heading color='purple.600' size='3xl'>
            Create an Account
          </Heading>

          <FormControl isRequired>

            <FormLabel>Username</FormLabel>
            <Input 
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />

            <FormLabel>Password</FormLabel>
            <Input 
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <FormLabel>Password Confirmation</FormLabel>
            <Input 
              type='password'
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </FormControl>

          <Text>
            Already have an account? <a href="http://localhost:4000/login">Login here!</a>
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