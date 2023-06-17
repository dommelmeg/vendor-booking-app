import React, { useState, useContext } from "react";
import { Input, Modal, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Select } from '@chakra-ui/react'
import { VendorBookingContext } from "../context/vendorBooking";

const EditEvent = ({ event }) => {
  const { vendors, events, setEvents, vendorLength } = useContext(VendorBookingContext)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [eventNameInput, setEventNameInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [imageUrlInput, setImageUrlInput] = useState('')
  const [vendorInput, setVendorInput] = useState('')

  const handleSubmitClick = () => {
    console.log('Changes are being made')
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
      <Button onClick={onOpen} variant='solid' colorScheme='purple'>
        Edit Event
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
                placeholder='Event Name' 
                onChange={(e) => setEventNameInput(e.target.value)}
                type="text"
                value={event.event_name}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <Input 
                placeholder='October 3, 2023'
                onChange={(e) => setDateInput(e.target.value)}
                type="text"
                value={event.date}
                />
            </FormControl>

            {/* Fix value - should be set to the current vendor */}
            <FormControl>
              <FormLabel>Vendor</FormLabel>
              <Select placeholder={event.vendor.name} onChange={handleVendorSelect}>
                <option value='Select Vendor'>Add a New Vendor</option>
                {vendorLength ? vendors.map((vendor) => {return(<option value={vendor.id} key={vendor.id}>{vendor.name}</option>)}) : console.log('no vendors')}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input 
                placeholder='Image URL'
                onChange={(e) => setImageUrlInput(e.target.value)}
                type="text"
                value={event.image_url}
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