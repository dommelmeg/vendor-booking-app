import React, { useState } from "react"
import { Box } from "@chakra-ui/react"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const StarRating = () => {
  const [activeStar, setActiveStar] = useState(-1)
  const totalStars = 5

  const handleClick = (index) => {
    setActiveStar(index)
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
            onClick={() => setActiveStar(index)}
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