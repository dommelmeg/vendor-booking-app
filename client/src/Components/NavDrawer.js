import React from 'react';
import {
  Button,
  Stack,
  Text,
  Icon,
  Flex,
  Box
} from '@chakra-ui/react'
import { RxDashboard } from 'react-icons/rx'
import { CiMusicNote1 } from 'react-icons/ci'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { Link as RouteLink } from 'react-router-dom'

const NavDrawer = ({ setUser }) => {
  
  const handleLogoutClick = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then((r) => {
      if (r.ok) {
        setUser(null)
      }
    })
  }

  return (
    <Box padding='4' h='calc(100vh)' w='xs' boxShadow='lg' position='fixed' >
      <Flex>
        <Text fontSize='3xl'>Upbeat Booking</Text>
      </Flex>

      <Stack marginTop='12'>
        <Button variant='link' colorScheme='black' justifyContent='left' size='md'>
          <Icon as={RxDashboard} />
          <RouteLink to="/">Dashboard</RouteLink>
        </Button>

        <Button variant='link' colorScheme='black' justifyContent='left'>
          <Icon as={CiMusicNote1} />
          <RouteLink to="all-bands">All Vendors</RouteLink>
        </Button>
      </Stack>

      <Flex>
        <Button 
          variant='link' 
          colorScheme='black' 
          justifyContent='left' 
          size='md' 
          onClick={handleLogoutClick}
        >
          <Icon as={RiLogoutBoxLine} />
          Logout
        </Button>
      </Flex>
    </Box>
  )
}

export default NavDrawer