import React from 'react';
import { Grid, Text, Box, HStack, Flex } from '@chakra-ui/react'
import NavDrawer from '../Components/NavDrawer';
import Dashboard from './Dashboard';

function App() {
  return (
    <Flex>
      <Box h='calc(100vh)' w='xs' boxShadow='lg' position='fixed'>
        <NavDrawer />
      </Box>

      <Box w='full' ml='320px'>
        <Dashboard />
      </Box>
    </Flex>
  );
}

export default App;
