import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Review from './Pages/Review/Review';
import Landing from './Pages/Landing/Landing';
import ViewCoop from './Pages/ViewCoop/ViewCoop';
import CompanyDetail from './Pages/CompanyDetail/CompanyDetail';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/reviews" element={<ViewCoop />} />
          <Route path="/create-review" element={<Review />} />
          
          <Route path="/review/:id" element={<CompanyDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
