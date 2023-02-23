import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import Dashboard from './Dashboard/Dashboard';

const RoutesFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesFile
