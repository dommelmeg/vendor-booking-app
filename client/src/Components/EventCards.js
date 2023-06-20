import React, { useContext } from "react";
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { VendorBookingContext } from "../context/vendorBooking"
import EditEvent from './EditEvent'

const EventCards = ({ event }) => {
  const { events, setEvents } = useContext(VendorBookingContext)
  const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' }
  const eventDate = new Date(event.date)

  const dateTimeFormat3 = new Intl.DateTimeFormat('en-US', dateOptions);

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
          <Text color='purple.700' fontSize='2xl'>
            {dateTimeFormat3.format(eventDate)}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <EditEvent event={event} />
          <Button variant='ghost' colorScheme='grey' onClick={handleDeleteClick}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default EventCards
