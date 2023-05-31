import React from "react";
import { Button, HStack, Text, Box, Stack, Flex } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import NavDrawer from "../Components/NavDrawer";
import BandCards from "../Components/BandCards";

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
          <BandCards />
          <BandCards />
          <BandCards />
          <BandCards />
          <BandCards />
        </Stack>
      </Box>
  )
}


export default AllBands