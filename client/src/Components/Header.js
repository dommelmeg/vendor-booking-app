import React, { useContext } from "react";
import { Box, Switch, AbsoluteCenter, Avatar, useRadio } from "@chakra-ui/react";
import { VendorBookingContext } from "../context/vendorBooking";

const Header = () => {
  const { user } = useContext(VendorBookingContext)

  return (
    <Box h='20' bg='white' boxShadow='lg' position='sticky' >
      <AbsoluteCenter axis='vertical' p='2'>
        {/* <Switch /> */}
        <Avatar name={user.username} />
      </AbsoluteCenter>
    </Box>
  )
}

export default Header