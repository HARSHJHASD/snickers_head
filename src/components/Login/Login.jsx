import React, { useState } from "react";
import "./Login.css";
//this is necessary to do for routing,after login sending to "/dashboard"
import { useNavigate } from "react-router-dom";
//just to handle api
import axios from "axios";

function Login() {
  //using navigate package from "react-router-dom" for sending to other page after login....
  const navigate = useNavigate();
  // Declare state variables for email and password using useState hook...
  //state variable for storing login email
  const [email, setEmail] = useState("");
  //state for storing password used during login..
  const [password, setPassword] = useState("");
  //state variable for storing name used during registration
  const [name, setRegisterName] = useState("");
  //this is a token used for performing conditional rendering for login and signup page
  const [token, setToken] = useState(true);
  //this is form logging out error based on input using regex
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // Define functions to update(using state) email and password incase of login
  function handleEmailChange(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }
  // /we are handling password change ,as user is entering password
  function handlePasswordChange(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }
  //define and handle email,name ,password incase of registration ..(using usestate)
  function handleRegisterName(event) {
    event.preventDefault();
    setRegisterName(event.target.value);
  }
  //
  function handleRegisterEmail(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }
  function handleRegisterPassword(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }
  // Define function to handle form submission(incase of login)
  function handleSubmitLogin(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    if (!email) {
      setErrorEmail("Email is required");
      return;
    }
    if (!password) {
      setErrorPassword("Password is required");
      return;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorEmail("Email is invalid");
      return;
    }

    if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long Atleast.");
      return;
    }
    if (password.length >= 8) {
      setErrorPassword("");
    }

    //performing login using the axios...
    axios
      .post("https://e604-49-249-44-114.in.ngrok.io/api/v1/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("api me gaya data")
        console.log(response.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("api me eeror aa data")
        // console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);
        console.log(errorMessage);
      });
    // Log email and password values to console
    console.log(`Login Email: ${email}, LoginPassword: ${password}`);
  }

  //define a function fot handling for submission incase of registration page..
  function handleSubmitRegister(event) {
    console.log("submission clicked");
    event.preventDefault();
    const nameRegex = /^[A-Za-z\s]+$/i;
    if (!nameRegex.test(name)) {
      setNameError("Name should be alphabets only");
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorEmail("Email is invalid");
      return;
    }
    //if lenght of password is  smaller than 8 then  api me nhi jayga
    if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long.");
      return;
    }
    if (password.length >= 8) {
      setErrorPassword("");
    }

    axios
      .post("https://e604-49-249-44-114.in.ngrok.io/api/v1/register", {
        name,
        email,
        password,
      })
      .then((response) => {
        console.log("api me gaya data")
        console.log(response.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("api me error aa gaya")
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);
        console.log(errorMessage);
      });

    // Log email and password values to console
    console.log(
      ` Register Name: ${name} ,Register Email: ${email},Register Password: ${password}`
    );
  }
  //this is for changing value of token ,for rendering
  function handleRegisterButtonClick(event) {
    event.preventDefault();
    setErrorPassword("");
    setErrorEmail("");
    setNameError("");
    setEmail("");
    setPassword("");
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
              maxlength="40"
              class="form-control"
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="warning">{errorEmail}</div>
          </div>
          {/* Password input field */}
          <div className="form-group">
            <label>Password</label>
            <input
              required
              maxlength="25"
              class="form-control"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="warning">{errorPassword}</div>
          </div>
          {/* Submit button */}
          <div>
            <button id="loginButton" class="btn btn-block btn-lg btn-danger">
              <span class="glyphicon glyphicon-arrow-right"></span> Login
            </button>
            <a id="register" onClick={handleRegisterButtonClick} href="">
              Register
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
              maxlength="40"
              class="form-control"
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={handleRegisterName}
            />
            <div className="warning">{nameError}</div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              required
              maxlength="40"
              class="form-control"
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={handleRegisterEmail}
            />
            <div className="warning">{errorEmail}</div>
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
              onChange={handleRegisterPassword}
            />
            <div className="warning">{errorPassword}</div>
          </div>
          {/* Submit button */}
          <div>
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
