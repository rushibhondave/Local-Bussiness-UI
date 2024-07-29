import React from "react";
import "../../Style/Navbar.css";
function Navbar() {

  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home">
             Logo
            </a>
          </div>

          <ul id="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Shops</a>
            </li>
            <li>
              <a href="#about">Services</a>
            </li>
            <li>
              <a href="#contact">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#contact">Blog</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="menuIcon">
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className="overlay-menu">
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
