import React, { useContext } from "react";
import { Box, Switch, AbsoluteCenter, Avatar, useRadio, Text, HStack, Flex, useColorMode } from "@chakra-ui/react";
import { VendorBookingContext } from "../context/vendorBooking";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { user } = useContext(VendorBookingContext)

  return (
    <HStack padding='4' justify='right'>
      <Text>Welcome, <b>{user?.username ?? 'user'}</b>!</Text>
      <Avatar name={user?.username ?? 'user'} />
      <Switch colorScheme='purple' onChange={toggleColorMode} />
    </HStack>
  )
}

export default Header