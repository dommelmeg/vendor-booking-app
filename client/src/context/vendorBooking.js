import React, { useState, useEffect } from "react";

const VendorBookingContext = React.createContext()

const VendorBookingProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [vendors, setVendors] = useState([])
  const [events, setEvents] = useState([])
  const [userEvents, setUserEvents] = useState([])
  const [allUsers, setAllUsers] = useState([])

  const vendorLength = vendors.length > 0
  
  return (
    <VendorBookingContext.Provider value={{ user, setUser, vendors, setVendors, events, setEvents, vendorLength, userEvents, setUserEvents, allUsers, setAllUsers }} >
      {children}
    </VendorBookingContext.Provider>
  )
}

export { VendorBookingContext, VendorBookingProvider }