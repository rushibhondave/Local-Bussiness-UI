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
                <li>
                  <Link to={"/DataAdd"} className="Link">
                  DataAdd
                  </Link>
                </li>
             
              </ul>
            </li>
            <li>
              <Link to={"/About"} className="Link">
                About Us
              </Link>
            </li>

            <li>
              <Link  className="Link">
                Sign In
              </Link>
              <ul className="submenu">
                <li>
                  <Link to={"/MyProfile_DashBoard"} className="Link">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to={"/Login"} className="Link">
                    User Sign In
                  </Link>
                </li>
                
                <li>
                  <Link to={"/Shop_Service_Login"} className="Link">
                  Shop-Service Sign In
                  </Link>{" "}
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
          
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
