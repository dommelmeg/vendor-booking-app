import React, { useContext } from "react";
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { VendorBookingContext } from "../context/vendorBooking"

const EventCards = ({ event }) => {
  const { events, setEvents } = useContext(VendorBookingContext)

  const handleEditClick = () => {
    console.log('LETS MAKE SOME CHANGES')
  }

  const handleDeletedEvent = (deletedEvent) => {
    const updatedEvents = events.filter((event) => event.id !== deletedEvent.id)
    setEvents(updatedEvents)
  }

  const handleDeleteClick = () => {
    fetch(`/events/${event.id}`, {
      method: 'DELETE'
    })
    .then((r) => {
      if (r.ok){
        handleDeletedEvent(event)
      } else {
        console.log(r)
      }
    })
  }

  return(
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={event.image_url}
          alt={event.event_name}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{event.event_name}</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {event.date}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue' onClick={handleEditClick}>
            Edit Event
          </Button>
          <Button variant='ghost' colorScheme='blue' onClick={handleDeleteClick}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default EventCards
