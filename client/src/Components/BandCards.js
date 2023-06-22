import React from "react";
import { Card, CardBody, Heading, Text, HStack, Link, VStack, Divider, Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow, PopoverBody,PopoverHeader, PopoverCloseButton, PopoverFooter } from "@chakra-ui/react";
import { AiFillStar } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'

const BandCards = ({ vendor }) => {
  const price_range = vendor.price_range
  const vendorEvents = vendor.events
  const vendorReviews = vendorEvents.filter((event) => {
    if(event.rating !== null) {
      return event
    }
  })
  const sum = vendorReviews.reduce(
    (acc, currVal) => acc + currVal.rating,
     0,
  )
  const avgRating = Math.floor(sum/vendorReviews.length)

  return(
    <Card
      size='sm'
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <CardBody>
        <VStack  alignItems='left'>
          <Text color='purple.400' fontWeight='bold' fontSize='xs'>{vendor.genre.toUpperCase()}</Text>
          <Heading size='md'>{vendor.name}</Heading>
          <HStack marginTop='2' spacing='-1'>
          {!avgRating && <em>No Reviews Yet</em>}
          {avgRating === 0 && <em>No Reviews Yet</em>}
          {avgRating > 0 && <AiFillStar color='orange' />}
          {avgRating > 1 && <AiFillStar color='orange' />}
          {avgRating > 2 && <AiFillStar color='orange' />}
          {avgRating > 3 && <AiFillStar color='orange' />}
          {avgRating > 4 && <AiFillStar color='orange' />}
          </HStack>
        </VStack>

        {vendorReviews.length > 0 && <Popover>
          <PopoverTrigger>
            <Button variant='outline' marginTop='2' colorScheme='purple'>Read Reviews ({vendorReviews.length})</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Header</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button colorScheme='blue'>Button</Button>
              </PopoverBody>
              <PopoverFooter>This is the footer</PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>}
        {/* {vendorEvents.map((event) => {
          return(
            <Text key={event.id}>{event.review}</Text>
          )
        })}         */}

      </CardBody>
    </Card>
  )
}

export default BandCards