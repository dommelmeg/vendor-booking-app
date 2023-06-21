import React, { useContext } from "react";
import { Box, HStack, Text, SimpleGrid } from "@chakra-ui/react";
import { VendorBookingContext } from "../context/vendorBooking";

const Reviews = () => {
  const { events, setEvents, vendors, setVendors } = useContext(VendorBookingContext)
  const allReviews = events.map((event) => event.review)
  const allRatings = events.map((event) => event.rating)
  const reviews = allReviews.filter((review) => review !== null)
  const ratings = allRatings.filter((rating) => rating !== null)
  console.log(reviews)
  console.log(ratings)

  return(
    <Box h='calc(100vh)' margin='4'>
      <HStack direction={['column', 'row']} spacing='24px'>
        <Text fontSize='3xl' fontWeight='bold'>Reviews</Text>
      </HStack>

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))' marginTop='12'>

      </SimpleGrid>
    </Box>
  )
}

export default Reviews