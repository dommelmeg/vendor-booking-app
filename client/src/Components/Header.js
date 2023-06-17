import React, { useContext } from "react";
import { Box, Switch, AbsoluteCenter, Avatar, useRadio, Text, HStack, Flex, useColorMode } from "@chakra-ui/react";
import { VendorBookingContext } from "../context/vendorBooking";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { user } = useContext(VendorBookingContext)

  return (
    <Flex h='20' bg='whiteAlpha.50' boxShadow='sm' position='sticky' justify='right'>
      <AbsoluteCenter axis='vertical' p='2' >
        <HStack padding='4'>
          <Text>Welcome, <b>{user?.username ?? 'user'}</b>!</Text>
          <Avatar name={user?.username ?? 'user'} />
          <Switch colorScheme='purple' onChange={toggleColorMode} />
        </HStack>
      </AbsoluteCenter>
    </Flex>
  )
}

export default Header