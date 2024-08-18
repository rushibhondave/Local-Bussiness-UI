import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export var token=false;

function LoginLogout() {
  const [MobileNo, setMobileNo] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  useEffect(() => {
    // Check if the user is already logged in (e.g., using a token in localStorage)
   
  }, []);

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

  const HandleForm = async (event) => {
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


    
  }
  };

  return (
    <>
      <div className="body">
        <div className="wrapper">
          <div className="form-wrapper sign-up"></div>

          <div className="form-wrapper sign-in">
            <form onSubmit={HandleForm}>
              <h2>Sign-In</h2>
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

              <button type="submit" className="btn_Login">
                Signup
              </button>

              <div className="sign-link">
                <p>
                  Don't have an account ?
                  <Link to={"/Signup"} className="signUp-link">
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

export default LoginLogout;
