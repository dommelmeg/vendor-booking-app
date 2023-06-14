import React, { useEffect, useState } from "react";
import { Button, HStack, Text, Box, Stack, SimpleGrid } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import BandCards from "../Components/BandCards";

const AllBands = () => {
  const [vendors, setVendors] = useState([])

  useEffect(() => {
    fetch('/vendors')
      .then((r) => r.json())
      .then((vendors) => setVendors(vendors))
  }, [])

  const handleClick = () => {
    console.log('hi')
  }

  return (
    <Box h='calc(100vh)' w='full' ml='320px' backgroundColor='blackAlpha.100'>
      <Box margin='12'>
        
        <HStack direction={['column', 'row']} spacing='24px'>
          <Text fontSize='3xl' fontWeight='bold'>All Vendors</Text>
          <Button onClick={handleClick} colorScheme='purple'>
            <AddIcon />
          </Button>
        </HStack>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(350px, 1fr))' marginTop='12' >

          {vendors.map((vendor) => {
            return(
              <BandCards key={vendor.id} vendor={vendor} />
            )
          })}
        </SimpleGrid>
      </Box>
    </Box>
  )
}


export default AllBands