import React, { useContext, useState } from "react";
import { VendorBookingContext } from "../context/vendorBooking"
import { VStack, Alert, AlertIcon, Input, Modal, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Select } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import AddVendorHiddenInput from "./AddVendorHiddenInput";

const AddEventModal = () => {
  const {  
    vendors, 
    setVendors, 
    events, 
    setEvents, 
    setUserEvents, 
    userEvents, 
    vendorLength,
  } = useContext(VendorBookingContext)
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [eventNameInput, setEventNameInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [imageUrlInput, setImageUrlInput] = useState('')
  const [vendorInput, setVendorInput] = useState('')
  const [vendorNameInput, setVendorNameInput] = useState('')
  const [genreInput, setGenreInput] = useState('')

  const [errors, setErrors] = useState([])

  const handleClose = () => {
    setEventNameInput('')
    setDateInput('')
    setImageUrlInput('')
    setVendorInput('')
    setGenreInput('')
    setVendorNameInput('')

    onClose()
  }

  const handleCreateEvent = (formData, response) => {

    fetch('/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((newEvent) => {
            setEvents([...events, newEvent])
            setUserEvents([...userEvents, newEvent])
            
            const updatedVendors = vendors.map((vendor) => {
              if (vendor.id === newEvent.vendor_id) {
                const { events: vendorEvents, ...restVendor } = vendor
                const updatedVendorEvents = [...vendorEvents, newEvent]
                return {
                  events: updatedVendorEvents,
                  ...restVendor
                }
              } else {
                return vendor
              }
            })
            setVendors(updatedVendors)
            setVendors([...vendors, response])
          })
          handleClose()
        } else {
          r.json().then((errorData) => setErrors(errorData.errors))
        }
      })
  }

  const handleCreateVendor = async () => {
    const vendorData = {
      name: vendorNameInput,
      genre: genreInput
    }

    let response = await fetch('/vendors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(vendorData)
    })
      .then((r) => r.json())
      .then((newVendor) => {
        return newVendor
      })
    
    const formData = {
      event_name: eventNameInput,
      date: dateInput,
      image_url: imageUrlInput,
      vendor_id: response.id
    }
      
    handleCreateEvent(formData, response)
  }

  const handleSubmitClick = (e) => {
    e.preventDefault()

    if (vendorInput === 'addNewVendor') {
      handleCreateVendor()
    } else {
      const formData = {
        event_name: eventNameInput,
        date: dateInput,
        image_url: imageUrlInput,
        vendor_id: vendorInput
      }
      handleCreateEvent(formData)
    }
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme='purple'><AddIcon /></Button>

      <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={() => handleClose()}
      >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add an Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>

          {errors.length > 0 && 
          <Alert status='error'>

            <AlertIcon />
            <VStack marginLeft='4'>
            <ul>
            {errors.map((error) => {
              return (
                  <li key={error}>{error}</li>
                  )
                })}
              </ul>
            </VStack>
          </Alert>}

          <FormControl>
            <FormLabel mt='2'>Name of Event</FormLabel>
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
              onChange={(e) => setDateInput(e.target.value)}
              type="date"
              value={dateInput}
              />
          </FormControl>

          <FormControl>
            <FormLabel mt='2'>Vendor</FormLabel>
            <Select placeholder='Select Vendor' onChange={(e) => setVendorInput(e.target.value)}>
              <option value='addNewVendor'>Add a New Vendor</option>
              {vendorLength && vendors.map((vendor) => {
                return(<option value={vendor.id} key={vendor.id}>{vendor?.name}</option>)
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

          {vendorInput === 'addNewVendor' && <AddVendorHiddenInput genreInput={genreInput} setGenreInput={setGenreInput} vendorNameInput={vendorNameInput} setVendorNameInput={setVendorNameInput} />}
        </ModalBody>

        <ModalFooter>
          <Button 
            colorScheme='purple' 
            mr={3}
            onClick={handleSubmitClick}
            >
            Save
          </Button>
          <Button onClick={() => handleClose()}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
      </Modal>
    </>
  )
}

export default AddEventModal