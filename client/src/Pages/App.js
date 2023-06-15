import React, { useEffect, useContext } from 'react';
import { Flex, ChakraProvider } from '@chakra-ui/react'
import Dashboard from './Dashboard';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import AllBands from './AllBands';
import CreateAccount from './CreateAccount';
import Login from './Login';
import NavDrawer from '../Components/NavDrawer';
import { VendorBookingContext } from "../context/vendorBooking"

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

  return ( 
    <ChakraProvider>
        <Flex>
          {isCreateAcct || isLogin ? null : <NavDrawer />}
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/signup' element={<CreateAccount />} />
            <Route path='/login' element={<Login />} />
            <Route path='/all-bands' element={<AllBands />} />
          </Routes>
        </Flex>
    </ChakraProvider>
  )
}

export default App;
