import React, { useState, useContext } from "react";
import { Input, Modal, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Select } from '@chakra-ui/react'
import { VendorBookingContext } from "../context/vendorBooking";

const EditEvent = ({ event }) => {
  const { vendors, events, setEvents, vendorLength, eventNameInput, setEventNameInput, dateInput, setDateInput, imageUrlInput, setImageUrlInput, vendorInput, setVendorInput } = useContext(VendorBookingContext)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleSubmitClick = (e) => {
    e.preventDefault()

    const formData = {
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
      body: JSON.stringify(formData),
    })
    .then((r) => r.json())
    .then((updatedEvent) => console.log(updatedEvent))
    }

  const handleVendorSelect = (e) => {
    if(e.target.value === 'addNewVendor') {
      console.log('you did it!')
    }
    else {
      setVendorInput(e.target.value)
    }
  }

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
                defaultValue={event.event_name} 
                placeholder={event.event_name}
                onChange={(e) => setEventNameInput(e.target.value)}
                type="text"
                // value={eventNameInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <Input
                // defaultValue={event.date}
                placeholder={event.date}
                onChange={(e) => setDateInput(e.target.value)}
                type="text"
                value={dateInput}
                />
            </FormControl>

            {/* Fix value - should be set to the current vendor */}
            <FormControl>
              <FormLabel>Vendor</FormLabel>
              <Select 
                // defaultValue={event.vendor.name}
                placeholder='Select a Vendor' onChange={handleVendorSelect}>
                <option value='Select Vendor'>Add a New Vendor</option>
                {vendorLength && vendors.map((vendor) => {return(<option value={vendor.id} key={vendor.id}>{vendor.name}</option>)})}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input 
                defaultValue={event.image_url}
                placeholder={event.image_url}
                onChange={(e) => setImageUrlInput(e.target.value)}
                type="text"
                // value={imageUrlInput}
                />
            </FormControl>
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