import React from 'react';
import { Flex, ChakraProvider, Box } from '@chakra-ui/react'
import Dashboard from './Dashboard';
import { Route, Routes } from "react-router-dom"
import AllBands from './AllBands';
import CreateAccount from './CreateAccount';
import Login from './Login';
import NavDrawer from '../Components/NavDrawer';
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation()
  const isCreateAcct = location.pathname === '/create-an-account'
  const isLogin = location.pathname === '/login'

  return (
    <ChakraProvider>

      <Flex>
        {isCreateAcct || isLogin ? null : <NavDrawer />}

        <Routes>
          <Route path='/create-an-account' element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/all-bands' element={<AllBands />} />
        </Routes>
      </Flex>

    </ChakraProvider>
  );
}

export default App;
