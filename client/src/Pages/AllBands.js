import React from "react";
import { Button, HStack, Text, Box, Stack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

const AllBands = () => {
  const handleClick = () => {
    console.log('hi')
  }

  return (
    <Box margin='4'>
      <HStack direction={['column', 'row']} spacing='24px'>
        <Text fontSize='3xl' fontWeight='bold'>All Bands</Text>
        <Button onClick={handleClick} colorScheme='green'>
          <AddIcon />
        </Button>
      </HStack>
      <Stack marginTop='12' gap='2'>
        
      </Stack>
    </Box>
  )
}


export default AllBands