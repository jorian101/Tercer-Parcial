import React, { useState } from 'react';
import Home from '../component/Home';
import About from '../component/About';
import Dashboard from '../component/Dashboard';
import Header from '../component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Navigation = () => {
  const [selectedPage, setSelectedPage] = useState('');

  return (
    <BrowserRouter>
      <Header setSelectedPage={setSelectedPage} />
      <hr />
      <p>{selectedPage}</p>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<p>ERROR 404 RECURSO NO ENCONTRADO</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
