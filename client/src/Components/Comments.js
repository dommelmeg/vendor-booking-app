import React, { useState, useContext } from "react";
import { VStack, Divider, Text, useEditableControls, IconButton, ButtonGroup, Flex, Editable, EditablePreview, Input, EditableInput } from "@chakra-ui/react"
import { CheckIcon, CloseIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { VendorBookingContext } from "../context/vendorBooking";

const Comments = ({ event }) => {
  const [updatedReview, setUpdatedReview] = useState('')
  const { user } = useContext(VendorBookingContext)

  const handleDeletedReview = () => {
    console.log(event)

  }

  const handleDeleteBtn = () => {
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
    .then((deletedReview) => handleDeletedReview(deletedReview))
  }

  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent='left' size='sm' marginTop='2'>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent='left'>
        <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
        <IconButton size='sm' marginLeft='2' icon={<DeleteIcon />} onClick={handleDeleteBtn} />
      </Flex>
    )
  }

  return (
    <Editable
      textAlign='left'
      defaultValue={event.review}
      fontSize='sm'
      isPreviewFocusable={false}
    >
      <EditablePreview />
      {/* Here is the custom input
       */}
      <Input 
        as={EditableInput}
        value={updatedReview}
        onChange={(e) => setUpdatedReview(e.target.value)}
      />
     {user?.id === event.user_id && <EditableControls />}
      <Divider marginTop='2' />
    </Editable>
  )
}

export default Comments