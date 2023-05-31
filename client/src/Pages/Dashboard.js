import React from "react";
import { Button, HStack, Text, Box, Stack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import EventCards from "../Components/EventCards";

const Dashboard = () => {
  const handleClick = () => {
    console.log('hi')
  }

  return (
    <Box h='calc(100vh)' w='full' ml='320px' backgroundColor='blackAlpha.100'>
      <Box margin='12'>
        <HStack direction={['column', 'row']} spacing='24px'>
          <Text fontSize='3xl' fontWeight='bold'>Your Events</Text>
          <Button onClick={handleClick} colorScheme='purple'>
            <AddIcon />
          </Button>
        </HStack>

        <Stack marginTop='12' gap='2'>
          <EventCards />
          <EventCards />
          <EventCards />
          <EventCards />
          <EventCards />
          <EventCards />
        </Stack>
      </Box>
    </Box>
  )
}

export default Dashboard