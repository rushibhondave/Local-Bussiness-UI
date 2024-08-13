import React, { useEffect, useState } from "react";
import "../../Style/Login.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function User_Login_Register() {
  const [MobileNo, setMobileNo] = useState("");
  const [Password, setPassword] = useState("");
  const [Eroor, setError] = useState(false);

  useEffect=()=>
  {

  }
  const HandleForm = (event) => {
    console.log(MobileNo, Password);
    if (event) event.preventDefault();
    try {
      if (!MobileNo) {
      }
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a >Why do I have this issue?</a>",
      });
    }
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
              <h2>Login / Sign-Up</h2>
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
                Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default User_Login_Register;
