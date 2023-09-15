import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import TempPage from '../Components/TempPage';

// Router Component Functionality
function Router() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/link1" element={<TempPage />} />
          <Route path="/link2" element={<TempPage />} />
          <Route path="/link3" element={<TempPage />} />
          <Route path="/link4" element={<TempPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
