import React from "react";
import "../../Style/Navbar.css";
function Navbar() {
  // let menuIcon = document.querySelector('.menuIcon');
  //       let nav = document.querySelector('.overlay-menu');

  //       menuIcon.addEventListener('click', () => {
  //           if (nav.style.transform != 'translateX(0%)') {
  //               nav.style.transform = 'translateX(0%)';
  //               nav.style.transition = 'transform 0.2s ease-out';
  //           } else {
  //               nav.style.transform = 'translateX(-100%)';
  //               nav.style.transition = 'transform 0.2s ease-out';
  //           }
  //       });

  //       // Toggle Menu Icon ========================================
  //       let toggleIcon = document.querySelector('.menuIcon');

  //       toggleIcon.addEventListener('click', () => {
  //           if (toggleIcon.classNameName != 'menuIcon toggle') {
  //               toggleIcon.classNameName += ' toggle';
  //           } else {
  //               toggleIcon.classNameName = 'menuIcon';
  //           }
  //       });
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
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
