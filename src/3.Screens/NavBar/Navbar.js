import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/Navbar.css";
import Seller from '../../Img/Social/Shops.svg'
import profile from '../../Img/Social/profile-52e0dc.svg'
import DownArorw from '../../Img/Social/DownArorw.svg'
import {token } from '../../3.Screens/Register_shop_Service/Shop_Service_Login';
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () =>
 {
  setIsLoggedIn(token)
  };
  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <Link to={"/"} className="logo_Link">
              Local
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
                {!token ? (
                  <li>
                    <Link to={"/LoginLogout"} className="Link">
                      User Sign In
                    </Link>
                  </li>
                ) : (
                  <li>
                    <button onClick={handleLogout} className="Link logout-btn">
                      Logout
                    </button>
                  </li>
                )}
                
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

                {!token ? (
                  <li>
                    <Link to={"/Shop_Service_Login"} className="Link">
                    Seller Sign In
                    </Link>
                  </li>
                ) : (
                  <li>
                    <button onClick={handleLogout} className="Link logout-btn">
                      Logout
                    </button>
                  </li>
                )}
              
              
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
