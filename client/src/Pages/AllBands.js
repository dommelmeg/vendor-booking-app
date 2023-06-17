import React, { useEffect, useContext } from "react";
import { Button, HStack, Text, Box, SimpleGrid } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import BandCards from "../Components/BandCards";
import { VendorBookingContext } from "../context/vendorBooking"

const AllBands = () => {
  const { vendors, setVendors, vendorLength } = useContext(VendorBookingContext)

  const handleAddVendorClick = () => {
    console.log('hi')
  }

  return (
    <Box h='calc(100vh)' margin='4'>
      <Box>
        
        <HStack direction={['column', 'row']} spacing='24px'>
          <Text fontSize='3xl' fontWeight='bold'>All Vendors</Text>
          {/* <Button onClick={handleAddVendorClick} colorScheme='purple'>
            <AddIcon />
          </Button> */}
        </HStack>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' marginTop='12' >
          {vendorLength ? vendors.map((vendor) => {return(<BandCards key={vendor.id} vendor={vendor} />)}) : console.log('no vendors')}
        </SimpleGrid>
      </Box>
    </Box>
  )
}


export default AllBands