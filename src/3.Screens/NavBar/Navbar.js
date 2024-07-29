import React from "react";
import { Link } from "react-router-dom";
import "../../Style/Navbar.css";
function Navbar() {
  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <Link to={"/"} className="logo_Link">
              Logo
            </Link>
          </div>

          <ul id="menu">
            <li>
              <Link to={"/"} className="Link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/DisplayPage"} className="Link">
                Shops
              </Link>
            </li>
            <li>
              <Link to={"/Service"} className="Link">
                Services
              </Link>
              <ul className="submenu">
                <li>
                  <Link to={"/Service"} className="Link">
                    Pulmber
                  </Link>
                </li>
                <li>
                  <Link to={"/Service"} className="Link">
                    Carpainter
                  </Link>
                </li>
                <li>
                  <Link to={"/Service"} className="Link">
                    Electrician
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/About"} className="Link">
                About
              </Link>
            </li>

            <li>
              <a href="#contact" className="Link">
                Login
              </a>
              <ul className="submenu">
                <li>
                  <Link to={"/MyProfile_DashBoard"} className="Link">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to={"/User_Login_Register"} className="Link">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to={"/User_Login_Register"} className="Link">
                    Sign Up
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/RegisterShop"} className="Link">
                    Register Shop
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/RegisterServiceCompo"} className="Link">
                    Register Service
                  </Link>{" "}
                </li>
              </ul>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
