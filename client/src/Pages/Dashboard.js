import React, { useEffect, useState } from "react";
import { HStack, Text, Box, Stack } from '@chakra-ui/react'
import EventCards from "../Components/EventCards";
import { useNavigate } from 'react-router-dom'
import AddEventModal from "../Components/AddEventModal";

const Dashboard = ({ user, vendors, setVendors }) => {
  const navigate = useNavigate()
  const [events, setEvents] = useState([])

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

  return (
    <Box h='calc(100vh)' w='full' ml='320px' backgroundColor='blackAlpha.100'>
      <Box margin='12'>
        <HStack direction={['column', 'row']} spacing='24px'>
          <Text fontSize='3xl' fontWeight='bold'>Your Events</Text>
          <AddEventModal events={events} setEvents={setEvents} vendors={vendors} setVendors={setVendors} />
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