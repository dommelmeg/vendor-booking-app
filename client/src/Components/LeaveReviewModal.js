import React, { useContext } from "react";
import { Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react"
import { VendorBookingContext } from "../context/vendorBooking";

const LeaveReviewModal = ({ event }) => {
  const { vendors, reviewInput, setReviewInput } = useContext(VendorBookingContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleSubmitClick = () => {
    console.log('hey there')
  }

  return (
    <>
      <Button size='md' onClick={onOpen} variant='solid' colorScheme='purple'>
        Write a Review
      </Button>

      <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Write a Review for {event.vendor.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Rating</FormLabel>
            {/* <Input 
              ref={initialRef} 
              placeholder='Event Name' 
              onChange={(e) => setEventNameInput(e.target.value)}
              type="text"
              value={eventNameInput}
            /> */}
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Review</FormLabel>
            <Input 
              placeholder='Review'
              onChange={(e) => setReviewInput(e.target.value)}
              type="text"
              value={reviewInput}
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

export default LeaveReviewModal