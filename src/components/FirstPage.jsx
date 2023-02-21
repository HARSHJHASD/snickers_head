import React from "react";
import './FirstPage.css'
import Shoes from './Shoes/Shoes';
import Login from './Login/Login'



const FirstPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="firstPage" className="col-sm-6 col-md-6 col-lg-6">
          <Shoes/>
        </div>
        <div id="loginPage" className="col-sm-6 col-md-6 col-lg-6">
          <Login/>
        </div>
      </div>
    </div>
  );
};

export default FirstPage
