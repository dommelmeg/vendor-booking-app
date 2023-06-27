import React from "react";
import { Card, CardBody, Heading, Text, HStack, VStack, Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow, PopoverBody,PopoverHeader, PopoverCloseButton } from "@chakra-ui/react";
import { AiFillStar } from 'react-icons/ai'
import Comment from "./Comment";

const BandCards = ({ vendor }) => {
  const vendorEvents = vendor.events
  const eventsWithReviews = vendorEvents.filter((event) => {
    if(event.rating != null) {
      return event
    }
  })

  const sum = eventsWithReviews.reduce(
    (acc, currVal) => acc + currVal.rating,
     0,
  )
  const avgRating = Math.floor(sum/eventsWithReviews.length)

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

        {eventsWithReviews.length > 0 && <Popover>
          <PopoverTrigger>
            <Button variant='outline' marginTop='2' colorScheme='purple'>Read Reviews ({eventsWithReviews.length})</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Reviews</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                {eventsWithReviews.map((event, idx) => event.review && <Comment key={event.id} event={event} isLast={eventsWithReviews.length - 1 === idx}/>)}
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>}

      </CardBody>
    </Card>
  )
}

export default BandCards