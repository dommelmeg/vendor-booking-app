import React from "react";
import { Button, HStack, Text, Box, Stack, Flex } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import BandCards from "../Components/BandCards";

const AllBands = () => {
  const handleClick = () => {
    console.log('hi')
  }

  return (
    <Box h='calc(100vh)' w='full' ml='320px' backgroundColor='blackAlpha.100'>
      <Box margin='12'>
        
        <HStack direction={['column', 'row']} spacing='24px'>
          <Text fontSize='3xl' fontWeight='bold'>All Bands</Text>
          <Button onClick={handleClick} colorScheme='green'>
            <AddIcon />
          </Button>
        </HStack>

        <Stack marginTop='12' gap='2'>
          <BandCards />
          <BandCards />
          <BandCards />
          <BandCards />
          <BandCards />
        </Stack>
      </Box>
    </Box>
  )
}


export default AllBands