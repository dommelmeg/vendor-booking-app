import React from "react";
import { Card, CardBody, Image, Stack, Heading, Badge, Link } from '@chakra-ui/react'

const EventCards = ({ event }) => {
  return(
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={event.image_url}
        alt={event.event_name}
      />
      <Stack>
        <CardBody>
          <Badge colorScheme='purple'>{event.date}</Badge>
          <Heading size='md'>{event.event_name}</Heading>

          <Link>
            Band: {event.vendor.name}
          </Link>
        </CardBody>

        {/* <CardFooter>
          <Button variant='solid' colorScheme='purple'>
            Book a Vendor
          </Button>
        </CardFooter> */}
      </Stack>
    </Card>
  )
}

export default EventCards
