import React, { useState, useEffect } from "react";

const VendorBookingContext = React.createContext()

const VendorBookingProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [vendors, setVendors] = useState([])
  const [events, setEvents] = useState([])
  const [userEvents, setUserEvents] = useState([])
  const [eventNameInput, setEventNameInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [imageUrlInput, setImageUrlInput] = useState('')
  const [vendorInput, setVendorInput] = useState('')

  const vendorLength = vendors.length > 0

  useEffect(() => {
    fetch('/events')
      .then((r) => r.json())
      .then((allEvents) => setEvents(allEvents))
  }, [])
  
  return (
    <VendorBookingContext.Provider value={{ user, setUser, vendors, setVendors, events, setEvents, vendorLength, eventNameInput, setEventNameInput, dateInput, setDateInput, imageUrlInput, setImageUrlInput, vendorInput, setVendorInput, userEvents, setUserEvents }} >
      {children}
    </VendorBookingContext.Provider>
  )
}

export { VendorBookingContext, VendorBookingProvider }