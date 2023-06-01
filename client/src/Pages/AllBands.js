import React, { useEffect, useState } from "react";
import { Button, HStack, Text, Box, Stack, SimpleGrid } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import BandCards from "../Components/BandCards";

const AllBands = () => {
  const [bands, setBands] = useState([])

  useEffect(() => {
    fetch('/vendors')
      .then((r) => r.json())
      .then((bands) => setBands(bands))
  }, [])

  const handleClick = () => {
    console.log('hi')
  }

  console.log(bands)

  return (
    <Box h='calc(100vh)' w='full' ml='320px' backgroundColor='blackAlpha.100'>
      <Box margin='12'>
        
        <HStack direction={['column', 'row']} spacing='24px'>
          <Text fontSize='3xl' fontWeight='bold'>All Bands</Text>
          <Button onClick={handleClick} colorScheme='purple'>
            <AddIcon />
          </Button>
        </HStack>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(350px, 1fr))' marginTop='12' >

          {bands.map((band) => {
            return(
              <BandCards key={band.id} band={band} />
            )
          })}
        </SimpleGrid>
      </Box>
    </Box>
  )
}


export default AllBands