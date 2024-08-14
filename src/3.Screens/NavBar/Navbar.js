import React from "react";
import { Link } from "react-router-dom";
import "../../Style/Navbar.css";
import Seller from '../../Img/Social/Shops.svg'
import profile from '../../Img/Social/profile-52e0dc.svg'
import DownArorw from '../../Img/Social/DownArorw.svg'
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
              <Link to={"/ProductsDataDisplay"} className="Link">
                Products
              </Link>
            </li>
            <li>
              <Link to={"/Service_Data_Display"} className="Link">
                Services
              </Link>
            </li>
            <li>
              <Link to={"/About"} className="Link">
                About Us
              </Link>
            </li>

            <li>
              <Link className="Link"> <span className="">
                <img src={profile} alt="" className="shopimg" />
              </span>Account
              <span className="">
                <img src={DownArorw} alt="" className="shopimg" />
              </span></Link>
              <ul className="submenu">
                <li>
                  <Link to={"/DashBoadUser"} className="Link">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to={"/Login"} className="Link">
                    User Sign In
                  </Link>
                </li>
                <li>
                  <Link to={"/Signup"} className="Link">
                    User Signup
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="Link Shops">
              <span className="">
                <img src={Seller} alt="" className="shopimg" />
              </span>
              Become a Seller</Link>
              <ul className="submenu">
                <li>
                  <Link to={"/DashBoard"} className="Link">
                  DashBoard
                  </Link>
                </li>
                <li>
                  <Link to={"/Shop_Service_Login"} className="Link">
                   Seller Sign In
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
