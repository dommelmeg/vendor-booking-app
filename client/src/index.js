import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import { BrowserRouter } from "react-router-dom"
import { ColorModeScript } from '@chakra-ui/react'
import { VendorBookingProvider } from "./context/vendorBooking"
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <VendorBookingProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </VendorBookingProvider>
    </BrowserRouter>
);
