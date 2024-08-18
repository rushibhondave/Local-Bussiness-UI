import React, { useState } from "react";
import "../../Style/Login.css";
import Vedio from  '../../Img/Vedio/RainForest.mp4';
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
  const [Rolebase, setRolebase] = useState("");
  const navigate = useNavigate();
  
  const validateMobileNo= (mobileNo) => {
    const mobilePattern = /^(?!([0-9])\1{9})[0-9]{10}$/;
    return mobilePattern.test(mobileNo);
  };

  const validatePassword = (password) => {
    const trimmedPassword = password.trim();
    const isValid = /^[a-zA-Z0-9@$_.]{4,}$/.test(trimmedPassword);
    return isValid;
  };

  const HandleForm =async (event) => {
    event.preventDefault();

    if (!validateMobileNo(MobileNo)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Mobile Number",
        text: "Please enter a valid 10-digit mobile number without repeating the same digit.",
      });
      return;
    }
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
    <div className="Servicebody">
      <div className="container">
        <div className="left-side">
          <video autoPlay muted loop id="background-video">
          <source src={Vedio} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay">
          <h1>Boost Your Local Business  Innovative Strategies for Growth.</h1>
            <p className="Acc">  Don't have an account ?</p>
            <button className="signup-btn"> <Link to={"/Shop_Service_Signup"} className=" Link" id="link">
              Sign Up
            </Link></button>
          </div>
        </div>
        <div className="right-side">
          <div className="login-box">
            <h2>Welcome Back!</h2>
            <form onSubmit={HandleForm}>
              <div className="input-box">
                <label htmlFor="MobileNo">Mobile No</label>
                <input
                  type="text"
                  id="MobileNo"
                  placeholder="Enter Username"
                  value={MobileNo}
                  autoComplete="off"
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </div>
              <div className="input-box">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  value={Password}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input_box">
                <label htmlFor="setRolebase">Role base</label>

                <select
                  id="pinCode"
                  className="select"
                  value={Rolebase}
                  onChange={(e) => setRolebase(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Choose Location
                  </option>
                  <option value="Shop">Shop</option>
                  <option value="Service">Service</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </div>

  );
}

export default Shop_Service_Login;
