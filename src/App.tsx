import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Cancel from './pages/cancel/Cancel';
import Home from './pages/home/Home';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Success from './pages/success/Success';

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="*" element={<PageNotFound />} />
     </Routes>
    </>
  );
}

export default App;
