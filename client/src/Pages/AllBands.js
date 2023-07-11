import React, { useContext } from "react";
import { HStack, Text, Box, SimpleGrid } from '@chakra-ui/react'
import BandCard from "../Components/BandCard";
import { VendorBookingContext } from "../context/vendorBooking"
import Header from "../Components/Header";

const AllBands = () => {
  const { 
    vendors, 
    vendorLength 
  } = useContext(VendorBookingContext)

  return (
    <Box h='calc(100vh)' margin='4'>
      <Box>
        
        <HStack direction={['column', 'row']} spacing='auto' >
          <Text fontSize='3xl' fontWeight='bold'>All Vendors</Text>
          <Header />
        </HStack>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' marginTop='4' >
          {vendorLength && vendors.map((vendor) => {
            return(
              <BandCard
                key={vendor.id} 
                vendor={vendor}
              />
            )})}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default AllBands