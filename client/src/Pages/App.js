import React from 'react';
import { Grid, Text, Box, HStack, Flex, ChakraProvider } from '@chakra-ui/react'
import NavDrawer from '../Components/NavDrawer';
import Dashboard from './Dashboard';
import { Route, Routes } from "react-router-dom"
import AllBands from './AllBands';

function App() {
  return (
    <ChakraProvider>

      <Flex>
        <Box h='calc(100vh)' w='xs' boxShadow='lg' position='fixed'>
          <NavDrawer />
        </Box>

        <Box w='full' ml='320px'>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/all-bands' element={<AllBands />} />
          </Routes>
        </Box>
      </Flex>

    </ChakraProvider>
  );
}

export default App;
