import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";

const LeaveReviewModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button size='md' onClick={onOpen} variant='solid' colorScheme='purple'>
        Write a Review
      </Button>
    </>
  )
}

export default LeaveReviewModal