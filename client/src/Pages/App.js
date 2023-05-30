import React from 'react';
import { Grid, Text, Box, HStack, Flex, ChakraProvider } from '@chakra-ui/react'
import NavDrawer from '../Components/NavDrawer';
import Dashboard from './Dashboard';
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <ChakraProvider>

      <Flex>
        <Box h='calc(100vh)' w='xs' boxShadow='lg' position='fixed'>
          <NavDrawer />
        </Box>

        <Box w='full' ml='320px'>
          <Dashboard />
        </Box>
      </Flex>
      
    </ChakraProvider>
  );
}

export default App;
