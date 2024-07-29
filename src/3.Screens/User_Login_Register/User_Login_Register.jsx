import React from "react";
import "../../Style/User_Login_Register.css";
function User_Login_Register() 
{
    const wrapper = document.querySelector('.wrapper');
    const signUpLink = document.querySelector('.signUp-link');
    const signInLink = document.querySelector('.signIn-link');
  //    const calllogin=()=>{
  //     signUpLink.addEventListener('click', () => {
  //       wrapper.classList.add('animate-signIn');
  //       wrapper.classList.remove('animate-signUp');
  //   });

  //   signInLink.addEventListener('click', () => {
  //       wrapper.classList.add('animate-signUp');
  //       wrapper.classList.remove('animate-signIn');
  //   });
  //    }

     
  // document.addEventListener('click',calllogin,true);
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
                  Already have an account?{" "}
                  <a href="" class="signIn-link">
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
                <input type="text" required />
                <label for="">Username</label>
              </div>
              <div class="input-group">
                <input type="password" required />
                <label for="">Password</label>
              </div>
              <div class="forgot-pass">
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" class="btn_Login">
                Login
              </button>
              <div class="sign-link">
                <p>
                  Don't have an account?{" "}
                  <a href="#" class="signUp-link">
                    Sign Up
                  </a>
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
