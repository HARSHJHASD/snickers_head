import React, { useState } from "react";
import './Login.css'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
</style>

function Login() {
  // Declare state variables for email and password using useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Define functions to update email and password state variables when input fields change
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  // Define function to handle form submission
  function handleSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    // Log email and password values to console
    console.log(`Email: ${email}, Password: ${password}`);
  }

  // Render the login form
  return (
    <div className="container my-font">
      {/*  */}
      <form onSubmit={handleSubmit}>
        {/* Email input field */}
        <div className="form-group">
          <div>
          <h3>Login Form</h3> 
          </div>
          <label>Email</label>
          <input id="input"  maxlength="10" class="form-control"
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
          <input id="input" maxlength="10" class="form-control"
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {/* Submit button */}
        <button class="btn btn-block btn-lg btn-danger"><span class="glyphicon glyphicon-arrow-right"></span> Login</button>
         
      </form>
    </div>
  );
}

export default Login;
