import React, { useEffect, useState } from "react";
import "../../Style/Login.css";
import { Link, Outlet } from "react-router-dom";
import Swal from "sweetalert2";
function User_Login_Register() {
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
        <div className="wrapper">
          <div className="form-wrapper sign-up">
            <form action="">
              <h2>Sign Up</h2>
              <div className="input-group">
                <input type="text" required />
                <label htmlFor="">Mobile No</label>
              </div>
              <div className="input-group">
                <input type="password" required />
                <label htmlFor="">Password</label>
              </div>

              <button type="submit" className="btn_Login">
                Sign Up
              </button>
              <div className="sign-link">
                <p>
                  Already have an account?
                  <a className="signIn-link">Sign In</a>
                </p>
              </div>
            </form>
          </div>

          <div className="form-wrapper sign-in">
            <form onSubmit={HandleForm}>
              <h2>Login </h2>
              <div className="input-group">
                <input
                  type="number"
                  required
                  value={MobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
                <label htmlFor="">Mobile No</label>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  required
                  value={Password}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="">Password</label>
              </div>

              <div className="forgot-pass">
                <a>Forgot Password?</a>
              </div>
              <button type="submit" className="btn_Login">
              Login
              </button>

              <div class="sign-link">
                    <p>Don't have an account? <a href="#" class="signUp-link">Sign Up</a></p>
                </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default User_Login_Register;
