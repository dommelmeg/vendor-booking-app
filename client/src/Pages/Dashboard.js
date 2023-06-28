import React, { useEffect, useContext } from "react";
import { HStack, Text, Box, SimpleGrid } from '@chakra-ui/react'
import EventCards from "../Components/EventCards";
import { useNavigate } from 'react-router-dom'
import AddEventModal from "../Components/AddEventModal";
import { VendorBookingContext } from "../context/vendorBooking"
import Header from "../Components/Header";

const Dashboard = () => {
  const { user, events, setEvents, userEvents, setUserEvents } = useContext(VendorBookingContext)
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

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' marginTop='12'>
        {userEvents.length > 0 ? (
          userEvents.map((event) => {
              return(<EventCards event={event} key={event.id} />)
          })
        ) : (
          <Text>Lets get planning!</Text>
        )}
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard