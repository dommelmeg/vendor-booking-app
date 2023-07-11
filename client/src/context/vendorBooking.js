import React, { useState } from "react";

const VendorBookingContext = React.createContext()

const VendorBookingProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [vendors, setVendors] = useState([])
  const [userEvents, setUserEvents] = useState([])
  const [vendorNameInput, setVendorNameInput] = useState('')
  const [genreInput, setGenreInput] = useState('')

  const vendorLength = vendors.length > 0
  
  return (
    <VendorBookingContext.Provider 
      value={{ 
        user, setUser, 
        vendors, setVendors, 
        vendorLength, 
        userEvents, setUserEvents, 
        vendorNameInput, setVendorNameInput, 
        genreInput, setGenreInput 
      }} 
    >
      {children}
    </VendorBookingContext.Provider>
  )
}

export { VendorBookingContext, VendorBookingProvider }