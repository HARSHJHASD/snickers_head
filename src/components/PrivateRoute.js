import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ Component, auth }) => {
return auth ? <Component /> : <Navigate to="/" />
}

export default PrivateRoute;
