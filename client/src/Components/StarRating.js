import React, { useState, useContext } from "react"
import { Box } from "@chakra-ui/react"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { VendorBookingContext } from "../context/vendorBooking"

const StarRating = () => {
  const { setRatingInput } = useContext(VendorBookingContext)
  const [activeStar, setActiveStar] = useState(-1)
  const totalStars = 5

  const handleClick = (index) => {
    setActiveStar(index)
    setRatingInput(index + 1)
  }

  return (
    <Box
      display='inline-flex'
      position='relative'
      cursor='pointer'
      textAlign='left'
    >
      {[...new Array(totalStars)].map((arr, index) => {
        return (
          <Box
            key={Math.random()}
            cursor='pointer'
            position='relative'
            onClick={() => handleClick(index)}
          >
            <Box
              w={index <= activeStar ? '100%' : '0%'}
              overflow='hidden'
              position='absolute'
            >
              <AiFillStar color='orange' />
            </Box>
            <Box>
              <AiOutlineStar />
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default StarRating