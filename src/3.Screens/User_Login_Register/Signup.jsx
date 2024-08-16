import React, { useEffect, useState } from "react";
import "../../Style/Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
function Signup() {
  const [MobileNo, setMobileNo] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {}, []);

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
    } else {
      try {
        const url = "https://localhost:7063/api/UserLogins";
        const data = {
          mobileNo: MobileNo,
          password: Password,
        };
        axios.post(url, data).then((result) => {
          // Start fade-out transition after 1 second
          const timer = setTimeout(() => {
            setFadeOut(true);
          }, 3000); // 1000ms = 1 second

          // Redirect after fade-out transition
          const redirectTimer = setTimeout(() => {
            navigate("/ProductsDataDisplay");
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
        if (error.response && error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Bad Request",
            text: "Invalid input. Please check your details and try again.",
          });
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
            text: "An error occurred while creating your account. Please try again later.",
          });
        }
      }
    }
  };

  return (
    <>
      <div className="body">
        <div className="wrapper">
          <div className="form-wrapper sign-up"></div>

          <div className="form-wrapper sign-in">
            <form onSubmit={HandleForm}>
              <h2>Sign-Up</h2>
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
                  Already have an account ?
                  <Link to={"/LoginLogout"} className="signUp-link">
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

export default Signup;
