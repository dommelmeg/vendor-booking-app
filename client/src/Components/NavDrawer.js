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
import { VscComment } from 'react-icons/vsc'
import { Link as RouteLink } from 'react-router-dom'
import { VendorBookingContext } from "../context/vendorBooking"
import { useNavigate } from 'react-router-dom'
import { ChatIcon } from '@chakra-ui/icons'

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
    <Box padding='4' h='full' bg='whiteAlpha.50' boxShadow='lg' >
      <Flex>
        <Text fontSize='3xl'>Upbeat Booking</Text>
      </Flex>

      <Stack marginTop='12'>
        <Button variant='ghost' colorScheme='purple' justifyContent='left' size='md'>
          <Icon marginRight='2' as={RxDashboard} />
          <RouteLink to="/">Dashboard</RouteLink>
        </Button>

        <Button variant='ghost' colorScheme='black' justifyContent='left'>
          <Icon marginRight='2' as={CiMusicNote1} />
          <RouteLink to="all-bands">All Vendors</RouteLink>
        </Button>

        <Button variant='ghost' colorScheme='black' justifyContent='left'>
          <Icon marginRight='2' as={VscComment} />
          <RouteLink to="reviews">Your Reviews</RouteLink>
        </Button>
      </Stack>

      <Flex>
        <Button 
          variant='ghost' 
          colorScheme='black' 
          justifyContent='left' 
          size='md' 
          onClick={handleLogoutClick}
          >
          <Icon marginRight='2' as={RiLogoutBoxLine} />
          Logout
        </Button>
      </Flex>
    </Box>
  )
}

export default NavDrawer