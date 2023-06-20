import React from "react";
import { Card, CardBody, Heading, Text, HStack, Circle, VStack, Divider } from "@chakra-ui/react";
import { AiFillDollarCircle } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'

const BandCards = ({ vendor }) => {
  const price_range = vendor.price_range
  const vendorEvents = vendor.events

  console.log(vendorEvents)

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
          {vendorEvents.map((event) => {
          return(
            <Text>{event.rating}</Text>
          )
        })} 
          <Heading size='md'>{vendor.name}</Heading>

          <HStack marginTop='2' spacing='-1'>
          {!price_range && <em>No Reviews Yet</em>}
          {price_range > 0 && <BsCurrencyDollar />}
          {price_range > 1 && <BsCurrencyDollar />}
          {price_range > 2 && <BsCurrencyDollar />}
          {price_range > 3 && <BsCurrencyDollar />}
          {price_range > 4 && <BsCurrencyDollar />}
          </HStack>
        </VStack>

        <Divider marginTop='2' />

        {vendorEvents.map((event) => {
          return(
            <Text>{event.review}</Text>
          )
        })}        

      </CardBody>
    </Card>
  )
}

export default BandCards