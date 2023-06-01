import React from "react";
import { Card, CardBody, Heading, Text, Badge, HStack, Circle, VStack } from "@chakra-ui/react";
import { AiOutlineDollarCircle, AiFillDollarCircle } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'

const BandCards = ({ band }) => {
  const price_range = band.price_range
  const band_all_caps = band.genre.toUpperCase()

  return(
    <Card
      size='sm'
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <CardBody>
        <HStack>
        <Circle size='80px' bg='grey' color='white'>
          <AiFillDollarCircle />
        </Circle>
        <VStack  alignItems='left'>

        <Text color='purple.400' fontWeight='bold' fontSize='xs'>{band.genre.toUpperCase()}</Text>
        <Heading size='md'>{band.name}</Heading>
        <HStack marginTop='2' spacing='-1'>
        {!price_range && <em>No Reviews Yet</em>}
        {price_range > 0 && <BsCurrencyDollar />}
        {price_range > 1 && <BsCurrencyDollar />}
        {price_range > 2 && <BsCurrencyDollar />}
        {price_range > 3 && <BsCurrencyDollar />}
        {price_range > 4 && <BsCurrencyDollar />}
        </HStack>
        </VStack>
        </HStack>

      </CardBody>
    </Card>
  )
}

export default BandCards