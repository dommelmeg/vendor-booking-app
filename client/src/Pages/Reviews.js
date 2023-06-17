import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

const Reviews = () => {
  return(
    <Box h='calc(100vh)' margin='4'>
      <HStack direction={['column', 'row']} spacing='24px'>
          <Text fontSize='3xl' fontWeight='bold'>Reviews</Text>
          {/* <Button onClick={handleAddVendorClick} colorScheme='purple'>
            <AddIcon />
          </Button> */}
        </HStack>
    </Box>
  )
}

export default Reviews