import React, { useState } from "react";
import "../../Style/Login.css";
import { Link } from "react-router-dom";
function User_Login_Register() 
{
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
            <form action="">
              <h2>Login</h2>
              <div class="input-group">
                <input type="email" required />
                <label for="">Email</label>
              </div>
              <div class="input-group">
                <input type="password" required />
                <label for="">Password</label>
              </div>
              <div class="input-group" id="Login_Select">
              <div className="Bussniess_box input_box GST">
                    <label for="name"></label>
                    <select name="" id="" className="select">
                        <option value=""  disabled  >Choose Location</option>
                        <option value="">KarveNagar Lane No 1</option>
                        <option value="">Kondhwa Budruk Lane No 6</option>
                        <option value="">Gokhale Nagar Lane No 5</option>
                        <option value="">VIT COLLEGE</option>
                    </select>
                </div>
              </div>
              <div class="forgot-pass">
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" class="btn_Login">
                Login
              </button>
              <div class="sign-link">
                <p>
                  Don't have an account
                  <Link to={"/Register"} className="signUp-link">
                    Sign Up
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

export default User_Login_Register;