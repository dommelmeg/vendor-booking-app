import React, { useContext } from "react";
import { Box, Switch, AbsoluteCenter, Avatar, useRadio, Text, HStack, Flex } from "@chakra-ui/react";
import { VendorBookingContext } from "../context/vendorBooking";

const Header = () => {
  const { user } = useContext(VendorBookingContext)

  return (
    <Flex h='20' bg='white' boxShadow='md' position='sticky' justify='right'>
      <AbsoluteCenter axis='vertical' p='2' >
        <HStack padding='4'>
          <Text>Welcome, <b>{user.username}</b>!</Text>
          <Avatar name={user.username} />
        </HStack>
      </AbsoluteCenter>
    </Flex>
  )
}

export default Header