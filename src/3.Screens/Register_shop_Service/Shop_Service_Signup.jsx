import React, { useEffect, useState } from "react";
import "../../Style/Login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Shop_Service_Signup() 
{
  const [MobileNo, setMobileNo] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  
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
    else
    {
      try {
        const url = "https://localhost:7063/api/ShopServiceLogins";
        const data = {
          mobileNo: MobileNo,
          password: Password,
        };
        axios.post(url, data).then((result) => {
        
        const timer = setTimeout(() => {
          setFadeOut(true);
        }, 3000); // 1000ms = 1 second

        // Redirect after fade-out transition
        const redirectTimer = setTimeout(() => {
          navigate("/DashBoard");
        }, 4000); // 3000ms = 3 seconds
        Swal.fire({
          title: "Accout Created Successful!",
          text: "Redirecting to home page...",
          icon: "success",
          timer: 3000, // 3 seconds
          timerProgressBar: true,
          showConfirmButton: false,
          willClose: () => {},
        });

        return () => {
          clearTimeout(timer);
          clearTimeout(redirectTimer);
        };
        });

      

      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error while adding data.",
        });
      }
    }
    

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
              <h2> Sign Up</h2>
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

export default Shop_Service_Signup;