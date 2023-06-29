import React, { useContext, useEffect } from "react";
import { Icon, Link, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { VendorBookingContext } from "../context/vendorBooking"
import EditEvent from './EditEvent'
import { CiMusicNote1 } from 'react-icons/ci'
import LeaveReviewModal from "./LeaveReviewModal"
import { format, compareAsc } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

const EventCards = ({ event }) => {
  const { events, setEvents, vendors, setVendors, setShowReviewButton, showReviewButton } = useContext(VendorBookingContext)
  // const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')
  const eventDate = new Date(event.date)

  // const date = new Date('2018-09-01T16:01:36.386Z')
  // const timeZone = 'America/New_York'
  // const zonedDate = utcToZonedTime(eventDate, timeZone)
  // const test = formatInTimeZone(eventDate, 'America/New_York')
  // const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' }
  // const dateTimeFormat3 = new Intl.DateTimeFormat('en-US', dateOptions);

  // useEffect(() => {
  //   if (event.review !== null) {
  //     setShowReviewButton(false)
  //   }
  // }, [])

  const handleDeletedEvent = (deletedEvent) => {
    const updatedEvents = events.filter((event) => event.id !== deletedEvent.id)
    setEvents(updatedEvents)

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
        />
        <Stack mt='6' spacing='3'>
          {/* <Text fontSize='2xl'>{dateTimeFormat3.format(eventDate)}</Text> */}
          <Heading size='md'>{event.event_name}</Heading>
          <Text>
            <Icon marginRight='2' as={CiMusicNote1} /> {event.vendor.name}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <EditEvent event={event} />
          {event.review === null && showReviewButton && <LeaveReviewModal event={event} />}
          <Button size='md' variant='ghost' colorScheme='grey' onClick={handleDeleteClick}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default EventCards
