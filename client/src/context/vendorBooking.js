import React, { useState } from "react";

const VendorBookingContext = React.createContext()

const VendorBookingProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [vendors, setVendors] = useState([])
  const [events, setEvents] = useState([])
  const [userEvents, setUserEvents] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [vendorNameInput, setVendorNameInput] = useState('')
  const [genreInput, setGenreInput] = useState('')

  const vendorLength = vendors.length > 0
  
  return (
    <VendorBookingContext.Provider value={{ user, setUser, vendors, setVendors, events, setEvents, vendorLength, userEvents, setUserEvents, allUsers, setAllUsers, vendorNameInput, setVendorNameInput, genreInput, setGenreInput }} >
      {children}
    </VendorBookingContext.Provider>
  )
}

export { VendorBookingContext, VendorBookingProvider }