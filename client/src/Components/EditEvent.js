import React, { useContext, useState } from "react";
import { Input, Modal, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Select } from '@chakra-ui/react'
import { VendorBookingContext } from "../context/vendorBooking";
import AddVendorHiddenInput from "./AddVendorHiddenInput";

const EditEvent = ({ event }) => {
  const { 
    vendors,
    vendorLength, 
    userEvents,
    setUserEvents,
    setVendors
  } = useContext(VendorBookingContext)
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [eventNameInput, setEventNameInput] = useState(event.event_name)
  const [dateInput, setDateInput] = useState(event.date)
  const [imageUrlInput, setImageUrlInput] = useState(event.image_url)
  const [vendorInput, setVendorInput] = useState(event.vendor_id)

  const handleSubmitClick = (e) => {
    e.preventDefault()

    const eventData = {
      event_name: eventNameInput,
      date: dateInput,
      image_url: imageUrlInput,
      vendor_id: vendorInput
    }

    fetch(`/events/${event.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((r) => r.json())
      .then((updatedEvent) => {
        const updatedUserEvents = userEvents.map((event) => {
          if (event.id === updatedEvent.id) {
            return updatedEvent
          } else {
            return event
          }
        })
        setUserEvents(updatedUserEvents)

        const updatedVendors = vendors.map((vendor) => {
          if (vendor.id === updatedEvent.vendor_id) {
            const { events: vendorEvents, ...restVendor } = vendor
            const updatedVendorEvents = vendorEvents.map((event) => {
              if (event.id === updatedEvent.id) {
                return updatedEvent
              } else {
                return event
              }
            })
            return { events: updatedVendorEvents, ...restVendor}
          } else {
            return vendor
          }
        })
        setVendors(updatedVendors)
      })
      onClose()
    }

    console.log(dateInput)
  return(
    <>
      <Button size='md' onClick={onOpen} variant='solid' colorScheme='purple'>
        Edit
      </Button>

      <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name of Event</FormLabel>
              <Input 
                ref={initialRef}
                placeholder={event.event_name}
                onChange={(e) => setEventNameInput(e.target.value)}
                type="text"
                value={eventNameInput}
              />
            </FormControl>

            <FormControl mt={4}>
            <FormLabel>Date</FormLabel>
            <Input
              onChange={(e) => setDateInput(e.target.value)}
              type="date"
              value={dateInput}
            />
          </FormControl>

            {event.review === null && 
              <FormControl>
                <FormLabel>Vendor</FormLabel>
                <Select 
                  defaultValue={event.vendor.id} 
                  onChange={(e) => setVendorInput(e.target.value)}
                >
                  <option value='addNewVendor'>Add a New Vendor</option>
                  {vendorLength && vendors.map((vendor) => {return(<option value={vendor.id} key={vendor.id}>{vendor?.name}</option>)})}
                </Select>
              </FormControl>
            }

            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input 
                placeholder={event.image_url}
                onChange={(e) => setImageUrlInput(e.target.value)}
                type="text"
                value={imageUrlInput}
                />
            </FormControl>

            {vendorInput === 'addNewVendor' && <AddVendorHiddenInput />}

          </ModalBody>

          <ModalFooter>
            <Button 
              colorScheme='purple' 
              mr={3}
              onClick={handleSubmitClick}
              >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditEvent