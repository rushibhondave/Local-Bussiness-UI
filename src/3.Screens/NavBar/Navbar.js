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
              <Link className="Link">
                Services
              </Link>
              <ul className="submenu">
                <li>
                  <Link to={"/Service_Data_Display"} className="Link">
                    Pulmber
                  </Link>
                </li>
                <li>
                  <Link to={"/Service_Data_Display"} className="Link">
                    Carpainter
                  </Link>
                </li>
                <li>
                  <Link to={"/Service_Data_Display"} className="Link">
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
              <Link  className="Link">
                Login
              </Link>
              <ul className="submenu">
                <li>
                  <Link to={"/MyProfile_DashBoard"} className="Link">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to={"/Login"} className="Link">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to={"/Register"} className="Link">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to={"/Register_Shop"} className="Link">
                    Register Shop
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/Register_Service"} className="Link">
                    Register Service
                  </Link>{" "}
                </li>

                
              </ul>
            </li>
            <li>
              <Link className="Link">
                Location
              </Link>
              <ul className="submenu">
              
                <li>
                  <Link to={""} className="Link">
                     1.Kondhawa
                  </Link>
                </li>
                <li>
                  <Link to={""} className="Link">
                  2.GokhaleNagar
                  </Link>
                </li>
                <li>
                  <Link to={""} className="Link">
                   3.Karvenagar
                  </Link>
                </li>
             

                
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
