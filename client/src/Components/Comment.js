import React, { useState, useContext } from "react";
import { VStack, HStack, Divider, Text, useEditableControls, IconButton, ButtonGroup, Flex, Editable, EditablePreview, Input, EditableInput } from "@chakra-ui/react"
import { CheckIcon, CloseIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { VendorBookingContext } from "../context/vendorBooking"
import { AiFillStar } from 'react-icons/ai'

const Comment = ({ event, isLast }) => {
  const { 
    user, 
    events, 
    setEvents, 
    vendors, 
    setVendors, 
    allUsers, 
    setShowReviewButton 
  } = useContext(VendorBookingContext)
  const [updatedReview, setUpdatedReview] = useState('')
  const eventRating = event.rating

  const handleUpdatedReview = () => {
    fetch(`/events/${event.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        review: updatedReview
      }),
    })
      .then((r) => r.json())
      .then((updatedReview) => {
        const updatedVendors = vendors.map((vendor) => {
          if (vendor.id === updatedReview.vendor_id) {
            const { events: vendorEvents, ...restVendor } = vendor
            const updatedVendorEvents = vendorEvents.map((event) => {
              if (event.id === updatedReview.id) {
                const { review, ...restEvent } = event
                return {
                  review: updatedReview,
                  ...restEvent
                }
              } else {
                return event
              }
            })
            return { events: updatedVendorEvents, ...restVendor }
          } else {
            return vendor
          }
        })
        setVendors(updatedVendors)
      })
  }

  const handleDeleteBtn = () => {
    setShowReviewButton(true)

    fetch(`/events/${event.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: null, review: null
      }),
    })
    .then((r) => r.json())
    .then((deletedReview) => {
      const updatedEvents = events.map((event) => {
        if (event.id === deletedReview.id) {
          const { rating, review, ...rest } = event
          return { 
            rating: null, 
            review: null, 
            ...rest 
          }
        } else {
          return event
        }
      })
      setEvents(updatedEvents)
  
      const updatedVendors = vendors.map((vendor) => {
        if (vendor.id === deletedReview.vendor_id) {
          const { events: vendorEvents, ...restVendor } = vendor
          const updatedVendorEvents = vendorEvents.map((event) => {
            if (event.id === deletedReview.id) {
              const { rating, review, ...restEvent } = event
              return {
                rating: null,
                review: null,
                ...restEvent
              }
            } else {
              return event
            }
          })
          return { events: updatedVendorEvents, ...restVendor }
        } else {
          return vendor
        }
      })
      setVendors(updatedVendors)
    })
  }

  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm' marginTop='2'>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent='center' marginTop='2'>
        <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
        <IconButton size='sm' marginLeft='2' icon={<DeleteIcon />} onClick={handleDeleteBtn} />
      </Flex>
    )
  }

  return (
    <VStack>
      <HStack marginTop='2' spacing='-1'>
         {eventRating > 0 && <AiFillStar color='orange' />}
         {eventRating > 1 && <AiFillStar color='orange' />}
         {eventRating > 2 && <AiFillStar color='orange' />}
         {eventRating > 3 && <AiFillStar color='orange' />}
         {eventRating > 4 && <AiFillStar color='orange' />}
      </HStack>
      <Editable
        textAlign='center'
        defaultValue={event.review}
        fontSize='sm'
        isPreviewFocusable={false}
        onSubmit={handleUpdatedReview}
        >
        <EditablePreview />
        <Input 
          as={EditableInput}
          value={updatedReview}
          onChange={(e) => setUpdatedReview(e.target.value)}
          />
          {allUsers.map((user) => {
            if (user.id === event.user_id) {
              return (
                <Text key={event.id} fontStyle='italic' fontSize='2xs' >
                  – {user.username}, {event.event_name}
                </Text>
              )
            }
          })}
      {user?.id === event.user_id && <EditableControls />}
        {!isLast && <Divider marginTop='2' />}
      </Editable>
    </VStack>
  )
}

export default Comment