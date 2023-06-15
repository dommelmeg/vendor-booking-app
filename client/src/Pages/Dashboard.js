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
    if (!user) {
      navigate('/login')
    }

    fetch('/events')
      .then((r) => r.json())
      .then((allEvents) => {
        if (!user) return
        const user_events = allEvents.filter((event) => event.user_id === user.id)
        setEvents(user_events)
      })
  }, [user])

  return (
    <Box h='calc(100vh)' w='full' margin='4'>
      <HStack direction={['column', 'row']} spacing='24px'>
        <Text fontSize='3xl' fontWeight='bold'>Your Events</Text>
        <AddEventModal />
      </HStack>

      <HStack marginTop='12' gap='2'>
        {events.length > 0 ? (
          events.map((event) => {
            {
              return(<EventCards event={event} key={event.id} />)
            }
          })
        ) : (
          <Text>Get to planning!</Text>
        )}
      </HStack>
    </Box>
  )
}

export default Dashboard