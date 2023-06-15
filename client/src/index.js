import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import { BrowserRouter } from "react-router-dom"
import { VendorBookingProvider } from "./context/vendorBooking"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <VendorBookingProvider>
            <App />
        </VendorBookingProvider>
    </BrowserRouter>
);
