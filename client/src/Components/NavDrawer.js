import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  Button,
  Stack,
  Text,
  Link,
  Icon,
  Flex,
  Box
} from '@chakra-ui/react'
import { RxDashboard } from 'react-icons/rx'
import { CiMusicNote1 } from 'react-icons/ci'
import { RiLogoutBoxLine } from 'react-icons/ri'

const NavDrawer = () => {
  return (
      <Box padding='4' h='calc(100vh)'>
        <Flex>
          <Text fontSize='3xl'>Upbeat Booking</Text>
        </Flex>

        <Stack marginTop='12'>
          <Button variant='link' colorScheme='black' justifyContent='left'>
            <Icon as={RxDashboard} />
            Dashboard
          </Button>

          <Button variant='link' colorScheme='black' justifyContent='left'>
            <Icon as={CiMusicNote1} />
            All Bands
          </Button>
        </Stack>
        
        <Flex position='fixed'>
          <Link>
            <Icon as={RiLogoutBoxLine} />
            Logout
          </Link>
        </Flex>
      </Box>
  )
}

export default NavDrawer