import React, { useState } from "react";
import "./Login.css";
function Login() {
  // Declare state variables for email and password using useState hook
  //state variable for storing login email
  const [email, setEmail] = useState("");
  //state for storing password used during login..
  const [password, setPassword] = useState("");
  //state variable for storing registering email
  const [registerEmail, setRegisterEmail] = useState("");
  //state variable for storing name used during registration 
  const [registerName, setRegisterName] = useState("");
  //state variable for storing registration password
  const [registerPassword, setRegisterPassword] = useState("");
  //this is a token used for performing conditional rendering for login and signup page
  const [token, setToken] = useState(true);

  // Define functions to update(using state) email and password incase of login
  function handleEmailChange(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }


  //define and handle email,name ,password incase of registration ..(using usestate)
  function handleRegisterName(event) {
    event.preventDefault();
    setRegisterName(event.target.value);
  }
  function handleRegisterEmail(event) {
    event.preventDefault();
    setRegisterEmail(event.target.value);
  }
  function handleRegisterPassword(event) {
    event.preventDefault();
    setRegisterPassword(event.target.value);
  }

  // Define function to handle form submission(incase of login)
  function handleSubmitLogin(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    // Log email and password values to console
    console.log(`Login Email: ${email}, LoginPassword: ${password}`);
  }


  //define a fucntion fot handling for submission incase of registration page..
  function handleSubmitRegister(event) {
    event.preventDefault();
    // Log email and password values to console
    console.log(
      ` Register Name: ${registerName} ,Register Email: ${registerEmail},Register Password: ${registerPassword}`
    );
  }
//this is for changing value of token ,for rendering 
  function handleRegisterButtonClick(event) {
    event.preventDefault();
    setToken((prevState) => !prevState);
  }

  // Render the login form,when the page loads up an d  token value is "true"
  if (token) {
    return (
      <div id="loginSignup" className="container my-font">
        {/*  */}
        <form onSubmit={handleSubmitLogin}>
          {/* Email input field */}
          <div className="form-group">
            <div>
              <h3>Login Form</h3>
            </div>
            <label>Email</label>
            <input
              required
              id="input"
              maxlength="40"
              class="form-control"
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {/* Password input field */}
          <div className="form-group">
            <label>Password</label>
            <input
              required
              id="input"
              maxlength="25"
              class="form-control"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {/* Submit button */}
          <div>
          <button id="loginButton" class="btn btn-block btn-lg btn-danger">
            <span class="glyphicon glyphicon-arrow-right"></span> Login
          </button>
          <a id="register" onClick={handleRegisterButtonClick} href="">
          Register.
          </a>
          </div>
          


        </form>
      </div>
    );
  }

  // Render the login form,when the page loads up an d  token value is "
  if (!token) {
    return (
      <div className="container my-font">
        {/*  */}
        <form onSubmit={handleSubmitRegister}>
          {/* Email input field */}
          <div className="form-group">
            <div>
              <h3>Register Form</h3>
            </div>
            <label>Name</label>
            <input
              required
              id="input"
              maxlength="40"
              class="form-control"
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={registerName}
              onChange={handleRegisterName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              required
              id="input"
              maxlength="40"
              class="form-control"
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={registerEmail}
              onChange={handleRegisterEmail}
            />
          </div>

          {/* Password input field */}
          <div className="form-group">
            <label>Password</label>
            <input
              required
              id="input"
              maxlength="25"
              class="form-control"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={registerPassword}
              onChange={handleRegisterPassword}
            />
          </div>
          {/* Submit button */}
          <div className="container">
          <button id="loginButton" class="btn btn-block btn-lg btn-danger">
            <span class="glyphicon glyphicon-arrow-right"></span> Register
          </button>
          <a id="register" onClick={handleRegisterButtonClick} href="">
            Login Here
          </a>
          </div>
         
        </form>
      </div>
    );
  }
}

export default Login;
