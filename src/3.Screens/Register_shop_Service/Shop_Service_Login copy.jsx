import React, { useState } from "react";
import "../../Style/Login.css";

import Swal from "sweetalert2";
function Shop_Service_Login() 
{
  const [MobileNo, setMobileNo] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const validateMobileNo = (mobile) => {
    const trimmedMobile = mobile.trim();
    const isValid = /^\d{10}$/.test(trimmedMobile);
    return isValid;
  };

  const validatePassword = (password) => {
    const trimmedPassword = password.trim();
    const isValid = /^[a-zA-Z0-9@$_.]{4,}$/.test(trimmedPassword);
    return isValid;
  };

  const HandleForm = (event) => {
    event.preventDefault();

    // Validate mobile number
    if (
      !MobileNo ||
      !validateMobileNo(MobileNo) ||
      (MobileNo.length > 0 && MobileNo == 10)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mobile No must be a valid 10-digit number!",
      });
      return;
    }

    // Validate password
    if (!Password || !validatePassword(Password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 4 characters and include only letters, numbers, @, $, _.",
      });
      return;
    }

    // Perform the rest of your login/signup logic here
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Form submitted successfully!",
    });

    // Reset the form after successful submission
    setMobileNo("");
    setPassword("");
  };
     
  return (
    <>

      <div className="body">
        <div class="wrapper">
          <div class="form-wrapper sign-up">
            <form action="">
              <h2>Sign Up</h2>
              <div class="input-group">
                <input type="text" required />
                <label for="">Mobile No</label>
              </div>
              <div class="input-group">
                <input type="password" required />
                <label for="">Password</label>
              </div>
              <button type="submit" class="btn_Login">
                Sign Up
              </button>
              <div class="sign-link">
                <p>
                  Already have an account?
                  <a href="" class="signIn-link" >
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div class="form-wrapper sign-in">
            <form onSubmit={HandleForm}>
              <h2> Sign In</h2>
              <div class="input-group">
                <input type="number" 
                 required
                  value={MobileNo}
                  autoComplete="off"
                  onChange={(e) => setMobileNo(e.target.value)} />
                <label for="">Mobile No</label>
              </div>
              <div class="input-group">
                <input type="password" 
                  required
                  value={Password}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  
                />
                <label for="">Password</label>
              </div>
              <div class="forgot-pass">
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" class="btn_Login">
                Login
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop_Service_Login;