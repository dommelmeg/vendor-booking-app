import React from 'react';
import { Flex, ChakraProvider, Box } from '@chakra-ui/react'
import Dashboard from './Dashboard';
import { Route, Routes } from "react-router-dom"
import AllBands from './AllBands';
import CreateAccount from './CreateAccount';
import Login from './Login';
import NavDrawer from '../Components/NavDrawer';

function App() {
  return (
    <ChakraProvider>

      

      <Flex>
        <Box h='calc(100vh)' w='xs' boxShadow='lg' position='fixed'>
          <NavDrawer />
        </Box>

        <Box w='full' ml='320px' backgroundColor='blackAlpha.100'>
          <Routes>
            <Route path='/create-an-account' element={<CreateAccount />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/all-bands' element={<AllBands />} />
          </Routes>
        </Box>
      </Flex>

    </ChakraProvider>
  );
}

export default App;
