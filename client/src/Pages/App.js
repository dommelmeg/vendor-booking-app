import React, { useEffect, useState } from 'react';
import { Flex, ChakraProvider } from '@chakra-ui/react'
import Dashboard from './Dashboard';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import AllBands from './AllBands';
import CreateAccount from './CreateAccount';
import Login from './Login';
import NavDrawer from '../Components/NavDrawer';

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const isCreateAcct = location.pathname === '/signup'
  const isLogin = location.pathname === '/login'

  const [currentUser, setCurrentUser] = useState(null)
  
  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setCurrentUser(user));
  //     }
  //   });
  // }, []);

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])

  return ( 
    <ChakraProvider>
      <Flex>
        {isCreateAcct || isLogin ? null : <NavDrawer setUser={setCurrentUser} />}
        <Routes>
          <Route path='/' element={<Dashboard user={currentUser} />} />
          <Route path='/signup' element={<CreateAccount user={currentUser} setUser={setCurrentUser} />} />
          <Route path='/login' element={<Login user={currentUser} setUser={setCurrentUser} />} />
          <Route path='/all-bands' element={<AllBands />} />
        </Routes>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
