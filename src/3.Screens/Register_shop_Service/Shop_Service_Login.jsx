import React, { useState } from "react";
import "../../Style/Login.css";

import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export var token=false
function Shop_Service_Login() {

  const [MobileNo, setMobileNo] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const navigate = useNavigate();
  
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

  const HandleForm =async (event) => {
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
    else{


      try {
        const url = `https://localhost:7063/api/ShopServiceLogins/${encodeURIComponent(
          MobileNo
        )},${encodeURIComponent(Password)}`;
  
        const response = await axios.get(url);
  
        if (response.data) {
   
  
          Swal.fire({
            title: "Successfully Logged In!",
            text: "Redirecting to DashBoard page...",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
  
          // Start fade-out transition after 1 second
          const timer = setTimeout(() => {
            setFadeOut(true);
          }, 3000); // 1000ms = 1 second
  
          // Redirect after fade-out transition
          const redirectTimer = setTimeout(() => {
            navigate("/DashBoard");
          }, 4000); // 3000ms = 3 seconds
        } else {
          Swal.fire("Error", "User not found!", "error");
        }
        // Reset the form after successful submission
        setMobileNo("");
        setPassword("");
      } catch (error) {
        if (error.message === "Network Error") {
          Swal.fire({
            icon: "error",
            title: "Network Error",
            text: "Unable to connect. Please check your internet connection and try again.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while Cheacking your account. Please try again later.",
          });
        }
  
        if (!error.response) {
          // Backend is not running or network error occurred
          Swal.fire({
            icon: "error",
            title: "Network Error",
            text: "Failed to connect to the server. Please try again later.",
          });
        } else {
          // Other errors (e.g., 404, 500)
          Swal.fire({
            icon: "error",
            title: "Bad Request",
            text: "Invalid input. Please check your details and try again.",
          });
        }
      }
    }

  

    // Reset the form after successful submission
    setMobileNo("");
    setPassword("");
  };

  return (
    <>
      <div className="body">
        <div  className="wrapper">
          <div  className="form-wrapper sign-up"></div>

          <div  className="form-wrapper sign-in">
            <form onSubmit={HandleForm}>
              <h2> Sign In</h2>
              <div  className="input-group">
                <input
                  type="number"
                  required
                  value={MobileNo}
                  autoComplete="off"
                  onChange={(e) => setMobileNo(e.target.value)}
                />
                <label htmlFor="">Mobile No</label>
              </div>
              <div  className="input-group">
                <input
                  type="password"
                  required
                  value={Password}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
                    <label htmlFor="">Password</label>
              </div>
              <button type="submit"  className="btn_Login">
                Login
              </button>
              <div className="sign-link">
                <p>
                  Don't have an account ?
                  <Link to={"/Shop_Service_Signup"} className="signUp-link">
                    Here...!
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop_Service_Login;
