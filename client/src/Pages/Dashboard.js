import React, { useEffect, useState } from "react";
import { Button, HStack, Text, Box, Stack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import EventCards from "../Components/EventCards";
import { useNavigate } from 'react-router-dom'
import AddEventModal from "../Components/AddEventModal";

const Dashboard = ({ user, bands, setBands }) => {
  const navigate = useNavigate()
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/events')
      .then((r) => r.json())
      .then((allEvents) => setEvents(allEvents))
  }, [])

  useEffect(() => {
    console.log(user)
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <Box h='calc(100vh)' w='full' ml='320px' backgroundColor='blackAlpha.100'>
      <Box margin='12'>
        <HStack direction={['column', 'row']} spacing='24px'>
          <Text fontSize='3xl' fontWeight='bold'>Your Events</Text>
          <AddEventModal events={events} setEvents={setEvents} bands={bands} setBands={setBands} />
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