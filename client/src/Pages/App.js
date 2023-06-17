import React, { useEffect, useContext } from 'react';
import { Flex, ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
import Dashboard from './Dashboard';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import AllBands from './AllBands';
import CreateAccount from './CreateAccount';
import Login from './Login';
import NavDrawer from '../Components/NavDrawer';
import { VendorBookingContext } from "../context/vendorBooking"
import Header from '../Components/Header';

function App() {
  const { user, setUser, setVendors } = useContext(VendorBookingContext)

  const navigate = useNavigate()
  const location = useLocation()
  const isCreateAcct = location.pathname === '/signup'
  const isLogin = location.pathname === '/login'
  
  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        }
      })
  }, [])

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  useEffect(() => {
    fetch('/vendors')
      .then((r) => r.json())
      .then((vendors) => setVendors(vendors))
  }, [])

  const showNav = !isCreateAcct && !isLogin

  return ( 
    <ChakraProvider>
      <Grid
        h='full'
        templateRows='repeat(10, 1fr)'
        templateColumns='repeat(5, 1fr)'
        bg='blackAlpha.100'
      >
        {showNav && <GridItem rowSpan={10} colSpan={1}><NavDrawer /></GridItem>}
        {showNav && <GridItem colSpan={4}><Header /></GridItem>}
        <Routes>
          <Route path='/' element={<GridItem rowSpan={9} colSpan={4}><Dashboard /></GridItem>} />
          <Route path='/signup' element={<GridItem rowSpan={10} colSpan={5}><CreateAccount /></GridItem>} />
          <Route path='/login' element={<GridItem rowSpan={10} colSpan={5}><Login /></GridItem>} />
          <Route path='/all-bands' element={<GridItem rowSpan={9} colSpan={4}><AllBands /></GridItem>} />
        </Routes>
      </Grid>
    </ChakraProvider>
  )
}

export default App;
