import React, { useState, useContext } from "react";
import { Input, Modal, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Select } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import events_default from '../images/events_default.jpeg'
import { VendorBookingContext } from "../context/vendorBooking"

const AddEventModal = () => {
  const { vendors, events, setEvents, vendorLength, eventNameInput, setEventNameInput, dateInput, setDateInput, imageUrlInput, setImageUrlInput, vendorInput, setVendorInput } = useContext(VendorBookingContext)
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  console.log(events)

  const addNewVendorSelect = vendorInput === 'addNewVendor'

  const handleSubmitClick = (e) => {
    e.preventDefault()

    const formData = {
      event_name: eventNameInput,
      date: dateInput,
      image_url: imageUrlInput,
      vendor_id: vendorInput
    }
    
    fetch('/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then((newEvent) => setEvents([...events, newEvent]))
    
    setEventNameInput('')
    setDateInput('')
    setImageUrlInput(`${events_default}`)
    setVendorInput('')
    onClose()
  }

  return(
    <>
      <Button onClick={onOpen} colorScheme='purple'><AddIcon /></Button>

      <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add an Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name of Event</FormLabel>
            <Input 
              ref={initialRef} 
              placeholder='Event Name' 
              onChange={(e) => setEventNameInput(e.target.value)}
              type="text"
              value={eventNameInput}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Date</FormLabel>
            <Input 
              placeholder='October 3, 2023'
              onChange={(e) => setDateInput(e.target.value)}
              type="text"
              value={dateInput}
              />
          </FormControl>

          <FormControl>
            <FormLabel>Vendor</FormLabel>
            <Select placeholder='Select Vendor' onChange={(e) => setVendorInput(e.target.value)}>
              <option value='addNewVendor'>Add a New Vendor</option>
              {vendorLength && vendors.map((vendor) => {
                return(<option value={vendor.id} key={vendor.id}>{vendor.name}</option>)
                })}
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Image</FormLabel>
            <Input 
              placeholder='Image URL'
              onChange={(e) => setImageUrlInput(e.target.value)}
              type="text"
              value={imageUrlInput}
              />
          </FormControl>

          {/* {addNewVendorSelect ? {return(
            <FormControl>
              <FormLabel>New Vendor</FormLabel>
              <Input 
                placeholder='Image URL'
                onChange={(e) => setImageUrlInput(e.target.value)}
                type="text"
                value={imageUrlInput}
              />
            </FormControl>
          )} : console.log('vendor selected')} */}
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

export default AddEventModal