import React, { useEffect, useState } from 'react';
import { Flex, ChakraProvider } from '@chakra-ui/react'
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

  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  return (
    <ChakraProvider>
      <Flex>
        {isCreateAcct || isLogin ? null : <NavDrawer />}

        <Routes>
          <Route path='/create-an-account' element={<CreateAccount user={currentUser} setUser={setCurrentUser} />} />
          <Route path='/login' element={<Login user={currentUser} setUser={setCurrentUser} />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/all-bands' element={<AllBands />} />
        </Routes>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
