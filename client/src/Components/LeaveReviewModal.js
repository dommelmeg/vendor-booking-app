import React, { useContext, useState } from "react";
import { Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react"
import { VendorBookingContext } from "../context/vendorBooking"
import StarRating from "./StarRating";

const LeaveReviewModal = ({ event }) => {
  const { 
    setEvents, 
    events,
    setShowReviewButton,
    vendors,
    setVendors
  } = useContext(VendorBookingContext)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [reviewInput, setReviewInput] = useState('')
  const [ratingInput, setRatingInput] = useState(null)

  //test this!!!
  const handleSubmitClick = () => {
    fetch(`/events/${event.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: ratingInput,
        review: reviewInput
      }),
    })
      .then((r) => r.json())
      .then((newReview) => {
        console.log(newReview)
        const updatedEvents = events.map((oneEvent) => {
          if (oneEvent.id === newReview.id) {
            const { rating, review, ...rest } = oneEvent
            return {
              rating: newReview.rating,
              review: newReview.review,
              ...rest
            }
          } else {
            return oneEvent
          }
        })
        setEvents(updatedEvents)

        setShowReviewButton(false)

// this isnt working!!!

        const updatedVendors = vendors.map((oneVendor) => {
          if (oneVendor.id === newReview.vendor_id) {
            const { events: vendorEvents, ...restVendor } = oneVendor
            const updatedVendorEvents = vendorEvents.map((singleEvent) => {
              if (singleEvent.id === newReview.id) {
                const { rating, review, ...restEvent } = singleEvent
                return { 
                  rating: newReview.rating,
                  review: newReview.review,
                  ...restEvent
                }
            } else {
              return singleEvent
            }
          })
          return { events: updatedVendorEvents, ...restVendor }
        } else {
          return oneVendor
        }
      })
      setVendors(updatedVendors)
      })

    onClose()
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
        <ModalHeader>Write a Review for {event.vendor?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Rating</FormLabel>
            <StarRating setRatingInput={setRatingInput} />
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