import React from "react";
import { Card, CardBody, Heading, Text, HStack, Link, VStack, Divider } from "@chakra-ui/react";


const ReviewCards = () => {
  return(
    <Card maxW='sm'>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Text color='purple.700' fontSize='2xl'>
            {dateTimeFormat3.format(eventDate)}
          </Text>
          <Heading size='md'>{event.event_name}</Heading>
          <Text>
            <Icon marginRight='2' as={CiMusicNote1} /> {event.vendor.name}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <EditEvent event={event} />
          <Button variant='ghost' colorScheme='grey' onClick={handleDeleteClick}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default ReviewCards