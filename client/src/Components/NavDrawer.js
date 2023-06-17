import React, { useContext } from 'react';
import {
  Button,
  Stack,
  Text,
  Icon,
  Flex,
  Box,
  HStack
} from '@chakra-ui/react'
import { RxDashboard } from 'react-icons/rx'
import { CiMusicNote1 } from 'react-icons/ci'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { Link as RouteLink } from 'react-router-dom'
import { VendorBookingContext } from "../context/vendorBooking"
import { useNavigate } from 'react-router-dom'

const NavDrawer = () => {
  const { setUser } = useContext(VendorBookingContext)
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then((r) => {
      if (r.ok) {
        setUser(null)
        navigate('/login')
      }
    })
  }

  return (
    <Box padding='4' h='full' bg='white' boxShadow='lg' >
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