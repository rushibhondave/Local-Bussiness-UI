import React, { useState } from "react";
import "../../Style/Register.css";
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
                <label for="">Username</label>
              </div>
              <div class="input-group">
                <input type="email" required />
                <label for="">Email</label>
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
              <h2>Sign Up</h2>
              <div class="input-group">
                <input type="email" required />
                <label for="">Email</label>
              </div>
              <div class="input-group">
                <input type="Password" required />
                <label for="">Password</label>
              </div>
              <button type="submit" class="btn_Login">
                Register
              </button>
              <div class="sign-link">
                <p>
                  Don't have an account
                  <Link to={"/Login"}class="signUp-link">
                    Sign In
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