import React, { useState } from "react";

const VendorBookingContext = React.createContext()

const VendorBookingProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [vendors, setVendors] = useState([])
  const [events, setEvents] = useState([])
  
  return (
    <VendorBookingContext.Provider value={{ user, setUser, vendors, setVendors, events, setEvents }} >
      {children}
    </VendorBookingContext.Provider>
  )
}

export { VendorBookingContext, VendorBookingProvider }