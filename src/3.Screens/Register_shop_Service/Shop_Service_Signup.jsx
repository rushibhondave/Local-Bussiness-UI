import React, { useState } from "react";
import "../../Style/Login.css";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Vedio from "../../Img/Vedio/RainForest.mp4";

function Shop_Service_Signup() {
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [roleBase, setRoleBase] = useState("");
  const [shopName, setShopName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const navigate = useNavigate();

  const validateMobileNo = (mobileNo) => {
    const mobilePattern = /^(?!([0-9])\1{9})[0-9]{10}$/;
    return mobilePattern.test(mobileNo);
  };

  const validatePassword = (password) => {
    const trimmedPassword = password.trim();
    return /^[a-zA-Z0-9@$_.]{4,}$/.test(trimmedPassword);
  };

  const handleForm = (event) => {
    event.preventDefault();

    // Validate mobile number
    if (!validateMobileNo(mobileNo)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Mobile Number",
        text: "Please enter a valid 10-digit mobile number without repeating the same digit.",
      });
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 4 characters and include only letters, numbers, @, $, _.",
      });
      return;
    }

    // Validate role-specific inputs
    if (roleBase === "Shop" && !shopName) {
      Swal.fire({
        icon: "error",
        title: "Missing Shop Name",
        text: "Please enter the shop name.",
      });
      return;
    }

    if (roleBase === "Service" && !serviceName) {
      Swal.fire({
        icon: "error",
        title: "Missing Service Name",
        text: "Please enter the service name.",
      });
      return;
    }

    if (roleBase === "Both" && (!shopName || !serviceName)) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please enter both shop name and service name.",
      });
      return;
    }

    // Submit the form
    const url = "https://localhost:7063/api/ShopServiceLogins";
    const data = {
      mobileNo,
      password,
      roleBase,
      shopName: roleBase === "Shop" || roleBase === "Both" ? shopName : null,
      serviceName: roleBase === "Service" || roleBase === "Both" ? serviceName : null,
    };

    axios.post(url, data)
      .then(() => {
        Swal.fire({
          title: "Account Created Successfully!",
          text: "Redirecting to the Dashboard page...",
          icon: "success",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          navigate("/DashBoard");
        });
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire("Error", error.response.data.message, "error");
        } else if (error.message === "Network Error") {
          Swal.fire({
            icon: "error",
            title: "Network Error",
            text: "Unable to connect. Please check your internet connection and try again.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Registration failed! Please try again later.",
          });
        }
      });
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
            <h1>
              Transform Your Business  Effective Strategies for Local Success
            </h1>
            <p className="Acc">Already have an account?</p>
            <button className="signup-btn">
              <Link to="/Shop_Service_Login" className=" Link" id="link">Sign In</Link>
            </button>
          </div>
        </div>
        <div className="right-side">
          <div className="login-box">
            <h2>Welcome Create Account  !</h2>
            <form onSubmit={handleForm}>
              <div className="input-box">
                <label htmlFor="mobileNo">Mobile No</label>
                <input
                  type="text"
                  id="mobileNo"
                  placeholder="Enter Mobile No"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </div>
              <div className="input-box">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-box">
                <label htmlFor="roleBase">Role Base</label>
                <select
                  id="roleBase"
                  value={roleBase}
                  className="select"
                  onChange={(e) => setRoleBase(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Choose Role
                  </option>
                  <option value="Shop">Shop</option>
                  <option value="Service">Service</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              {roleBase === "Shop" || roleBase === "Both" ? (
                <div className="input-box">
                  <label htmlFor="shopName">Shop Name</label>
                  <input
                    type="text"
                    id="shopName"
                    placeholder="Enter Shop Name"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    required={roleBase === "Shop" || roleBase === "Both"}
                  />
                </div>
              ) : null}
              {roleBase === "Service" || roleBase === "Both" ? (
                <div className="input-box">
                  <label htmlFor="serviceName">Service Name</label>
                  <input
                    type="text"
                    id="serviceName"
                    placeholder="Enter Service Name"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    required={roleBase === "Service" || roleBase === "Both"}
                  />
                </div>
              ) : null}
              <button type="submit" className="login-btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop_Service_Signup;
