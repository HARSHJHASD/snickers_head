import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import Dashboard from './Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';

const RoutesFile = ({isAuthenticated,setIsAuthenticated}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstPage setIsAuthenticated={setIsAuthenticated}/>} />
        


        {/* this  is route that will depend on whether the user is logged in or not. if not logged in then the state value we get is false,else true */}
        {/* on path /dashboard we will render element based on value os isAuthenticated. */}
        <Route exact path="/dashboard" element={<PrivateRoute Component={Dashboard} auth={isAuthenticated} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesFile
