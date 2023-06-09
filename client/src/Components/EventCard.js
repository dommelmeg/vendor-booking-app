import React, { useContext, useEffect, useState } from "react";
import { Icon, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { VendorBookingContext } from "../context/vendorBooking"
import EditEvent from './EditEvent'
import { CiMusicNote1 } from 'react-icons/ci'
import LeaveReviewModal from "./LeaveReviewModal"

const EventCard = ({ event }) => {
  const { 
    user,
    userEvents, 
    setUserEvents, 
    vendors, 
    setVendors 
  } = useContext(VendorBookingContext)
  
  const [showReviewButton, setShowReviewButton] = useState(false)

  const eventDate = event.date
  const moment = require('moment')
  const formattedEventDate = moment(eventDate).format('ll')

  useEffect(() => {
    if (event.review === null) {
      setShowReviewButton(true)
    } else {
      setShowReviewButton(false)
    }
  }, [event.review, setShowReviewButton, user])
  
  const handleDeletedEvent = (deletedEvent) => {
    const updatedUserEvents = userEvents.filter((event) => event.id !== deletedEvent.id)
    setUserEvents(updatedUserEvents)
    
    const updatedVendors = vendors.map((vendor) => {
      if (vendor.id === deletedEvent.vendor_id) {
        const { events: deletedVendorEvents, ...rest } = vendor
        const updatedDeletedVendorEvents = deletedVendorEvents.filter((event) => event.id !== deletedEvent.id)
        return { events: updatedDeletedVendorEvents, ...rest }
      }
      else {
        return vendor
      }
    })
    setVendors(updatedVendors)
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
    <Card>
      <CardBody>
        <Image
          src={event.image_url}
          alt={event.event_name}
          borderRadius='lg'
          maxH='200px'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{event.event_name}</Heading>
          <Stack spacing='0'>
            <Text fontSize='xl' color='purple.500'><b>{formattedEventDate}</b></Text>
          </Stack>
          <Text>
            <Icon marginRight='2' as={CiMusicNote1} /> {event.vendor?.name}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <EditEvent event={event} />
          {event.review === null && showReviewButton && 
          <LeaveReviewModal 
            event={event} 
            showReviewButton={showReviewButton} 
            setShowReviewButton={setShowReviewButton} 
          />}
          <Button size='md' variant='ghost' colorScheme='grey' onClick={handleDeleteClick}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default EventCard
