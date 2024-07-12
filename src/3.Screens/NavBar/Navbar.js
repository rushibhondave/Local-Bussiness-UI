import React from "react";
import "../../Style/Navbar.css";
function Navbar() {
  return (
    <div>
      <div class="contact-info">
        <div class="contact">
          <span>+44 45678908</span>
          <span>example@gmail.com</span>
        </div>
           <hr/>
        <div class="auth-buttons">
        <select name="" id="">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
        </select>
        
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
      <header>
        <div class="logo">
          <img src="" alt="PMPL Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href={"https://www.youtube.com/"}>Home</a>
            </li>
            <li>
              <a href={"https://www.youtube.com/"}>About</a>
            </li>
            <li>
              <a href={"https://www.youtube.com/"}>FAQs</a>
            </li>
            <li>
              <a href={"https://www.youtube.com/"}>Blog</a>
            </li>
            <li>
              <a href={"https://www.youtube.com/"}>Contact</a>
            </li>
          </ul>
        </nav>

        <button class=" btnU btn">BUY TICKETS</button>
      </header>
    </div>
  );
}

export default Navbar;
