import React from "react";
import { Button } from "@chakra-ui/react";

const EditEvent = () => {
  const handleEditClick = () => {
    console.log('LETS MAKE SOME CHANGES')
  }
  
  return(
    <Button variant='solid' colorScheme='purple' onClick={handleEditClick}>
      Edit Event
    </Button>
  )
}

export default EditEvent