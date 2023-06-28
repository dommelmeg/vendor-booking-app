import React, { useContext } from 'react';
import { Button, Stack, Text, Icon, Box, VStack } from '@chakra-ui/react'
import { RxDashboard } from 'react-icons/rx'
import { CiMusicNote1 } from 'react-icons/ci'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { Link as RouteLink } from 'react-router-dom'
import { VendorBookingContext } from "../context/vendorBooking"
import { useNavigate, useLocation } from 'react-router-dom'

const NavDrawer = () => {
  const { setUser } = useContext(VendorBookingContext)
  const navigate = useNavigate()
  const location = useLocation()

  const dashboard = location.pathname === '/'
  const allBands = location.pathname === '/all-bands'

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
    <Box padding='4' h='full' bg='whiteAlpha.50' boxShadow='lg' position='fixed'>
      <Text fontSize='3xl' marginTop='4' >Upbeat Booking</Text>
      
      <Stack marginTop='12'>
          <Button variant='ghost' colorScheme={dashboard ? 'purple' : 'black'} justifyContent='left' size='md'>
            <RouteLink to="/"><Icon marginRight='2' as={RxDashboard} /> Dashboard</RouteLink>
          </Button>

          <Button variant='ghost' colorScheme={allBands ? 'purple' : 'black'} justifyContent='left'>
            <RouteLink to="all-bands"><Icon marginRight='2' as={CiMusicNote1} /> All Vendors</RouteLink>
          </Button>

        <Button 
          variant='ghost' 
          colorScheme='black' 
          size='md' 
          alignSelf='baseline'
          onClick={handleLogoutClick}
        >
          <Icon marginRight='2' as={RiLogoutBoxLine} /> Logout
        </Button>
      </Stack>

      {/* <Box>
        <Button 
          variant='ghost' 
          colorScheme='black' 
          size='md' 
          alignSelf='baseline'
          onClick={handleLogoutClick}
        >
          <Icon marginRight='2' as={RiLogoutBoxLine} /> Logout
        </Button>
      </Box> */}
    </Box>
  )
}

export default NavDrawer