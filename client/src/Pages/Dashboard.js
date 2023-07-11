import React, { useEffect, useContext } from "react";
import { HStack, Text, Box, SimpleGrid } from '@chakra-ui/react'
import EventCard from "../Components/EventCard";
import { useNavigate } from 'react-router-dom'
import AddEventModal from "../Components/AddEventModal";
import { VendorBookingContext } from "../context/vendorBooking"
import Header from "../Components/Header";

const Dashboard = ({ showReviewButton, setShowReviewButton }) => {
  const { 
    user, 
    userEvents
  } = useContext(VendorBookingContext)
  
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <Box h='full' margin='4'>
      <HStack direction={['column', 'row']} spacing='auto' >
        <HStack>
          <Text fontSize='3xl' fontWeight='bold'>Your Events</Text>
          <AddEventModal />
        </HStack>
        <Header />
      </HStack>

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' marginTop='4'>
        {userEvents.length > 0 ? (
          userEvents.map((event) => {
            return (
              <EventCard
                event={event} 
                key={event.id} 
                showReviewButton={showReviewButton} 
                setShowReviewButton={setShowReviewButton} 
              />
            )
          })
        ) : (
          <Text>No events created – add an event above!</Text>
        )}
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard