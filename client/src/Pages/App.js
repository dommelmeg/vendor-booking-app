import React, { useEffect, useContext, useState } from 'react'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
import Dashboard from './Dashboard';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import AllBands from './AllBands';
import CreateAccount from './CreateAccount';
import Login from './Login';
import NavDrawer from '../Components/NavDrawer';
import { VendorBookingContext } from "../context/vendorBooking"

function App() {
  const { 
    user, 
    setUser, 
    setUserEvents,
    setVendors,
  } = useContext(VendorBookingContext)

  const navigate = useNavigate()
  const location = useLocation()
  const isCreateAcct = location.pathname === '/signup'
  const isLogin = location.pathname === '/login'
  
  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user)
          })
        }
      })
  }, [])
  
  useEffect(() => {
    if (user) {
      navigate('/')
      setUserEvents(user.events)
  
      fetch('/vendors')
        .then((r) => r.json())
        .then((vendors) => setVendors(vendors))
  
      // fetch("/userevents")
      //   .then((r) => {
      //     if (r.ok) {
      //       r.json().then((events) => setUserEvents(events))
      //     } else {
      //       r.json().then((errorData) => console.log(errorData.errors)) 
      //     }
      //   })
    }
  }, [user])

  const showNav = !isCreateAcct && !isLogin

  return ( 
    <ChakraProvider>
      <Grid
        h='full'
        templateRows='repeat(10, 1fr)'
        templateColumns='repeat(7, 1fr)'
      >
        {showNav && <GridItem rowSpan={10} colSpan={1}><NavDrawer /></GridItem>}
        <Routes>
          <Route path='/' element={
            <GridItem rowSpan={9} colSpan={6}>
              <Dashboard />
            </GridItem>} 
          />
          <Route path='/all-bands' element={
            <GridItem rowSpan={9} colSpan={6}>
              <AllBands />
            </GridItem>} 
          />
          <Route path='/signup' element={
            <GridItem rowSpan={10} colSpan={7}>
              <CreateAccount  />
            </GridItem>} 
          />
          <Route path='/login' element={
            <GridItem rowSpan={10} colSpan={7}>
              <Login />
            </GridItem>} 
          />
        </Routes>
      </Grid>
    </ChakraProvider>
  )
}

export default App;
