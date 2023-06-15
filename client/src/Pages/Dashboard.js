import React, { useEffect, useContext } from "react";
import { HStack, Text, Box, Stack } from '@chakra-ui/react'
import EventCards from "../Components/EventCards";
import { useNavigate } from 'react-router-dom'
import AddEventModal from "../Components/AddEventModal";
import { VendorBookingContext } from "../context/vendorBooking"

const Dashboard = () => {
  const { user, events, setEvents } = useContext(VendorBookingContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/events')
      .then((r) => r.json())
      .then((allEvents) => setEvents(allEvents))
  }, [])

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  console.log(events)

  return (
    <Box h='calc(100vh)' w='full' ml='320px' backgroundColor='blackAlpha.100'>
      <Box margin='12'>
        <HStack direction={['column', 'row']} spacing='24px'>
          <Text fontSize='3xl' fontWeight='bold'>Your Events</Text>
          <AddEventModal />
        </HStack>

        <Stack marginTop='12' gap='2'>
           {events.map((event) => {
              return(
                <EventCards event={event} key={event.id} />
              )
           })}
        </Stack>
      </Box>
    </Box>
  )
}

export default Dashboard