import React from "react";
import { Card, CardBody, Heading, Text, HStack, Link, VStack, Divider } from "@chakra-ui/react";
import { AiFillStar } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'

const BandCards = ({ vendor }) => {
  const price_range = vendor.price_range
  const vendorEvents = vendor.events

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
            {!price_range && <em>No Reviews Yet</em>}
            {price_range > 0 && <AiFillStar color='orange' />}
            {price_range > 1 && <AiFillStar color='orange' />}
            {price_range > 2 && <AiFillStar color='orange' />}
            {price_range > 3 && <AiFillStar color='orange' />}
            {price_range > 4 && <AiFillStar color='orange' />}
          </HStack>
        </VStack>

        <Divider marginTop='2' />
        {vendorEvents.map((event) => {
          return(
            <HStack marginTop='2' spacing='-1'>
            {!event.rating && <em>No Reviews Yet</em>}
            {event.rating > 0 && <BsCurrencyDollar />}
            {event.rating > 1 && <BsCurrencyDollar />}
            {event.rating > 2 && <BsCurrencyDollar />}
            {event.rating > 3 && <BsCurrencyDollar />}
            {event.rating > 4 && <BsCurrencyDollar />}
            </HStack>

            // <Text key={event.id}>{event.rating}<Link>{vendorEvents.length}</Link></Text>
          )
        })}
        <Link>Read Reviews ({vendorEvents.length})</Link>

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