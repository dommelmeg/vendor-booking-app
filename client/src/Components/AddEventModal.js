import React, { useState } from "react";
import { Input, Modal, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Select } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import events_default from '../images/events_default.jpeg'


const AddEventModal = ({ events, setEvents, bands, setBands }) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [eventNameInput, setEventNameInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [imageUrlInput, setImageUrlInput] = useState(`${events_default}`)
  const [bandInput, setBandInput] = useState('')

  const handleBandSelect = (e) => {
    if(e.target.value === 'addNewBand') {
      console.log('you did it!')
    }
    else {
      setBandInput(e.target.value)
    }
  }
  
  const handleSubmitClick = (e) => {
    e.preventDefault()

    const formData = {
      event_name: eventNameInput,
      date: dateInput,
      image_url: imageUrlInput,
      band_id: bandInput
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
            <FormLabel>Band</FormLabel>
            <Select placeholder='Select Band' onChange={handleBandSelect}>
              <option value='addNewBand'>Add a New Band</option>
              {bands.map((band) => {
                return (
                  <option value={band.id} key={band.id}>{band.name}</option>
                )
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