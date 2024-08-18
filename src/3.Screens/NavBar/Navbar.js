import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/Navbar.css";
import Seller from "../../Img/Social/Shops.svg";
import profile from "../../Img/Social/profile-52e0dc.svg";
import DownArorw from "../../Img/Social/DownArorw.svg";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Swal from "sweetalert2";

function Navbar() {
  const {
    user,
    loginWithRedirect,
    isAuthenticated,
    logout,
    getAccessTokenSilently,
  } = useAuth0();
  const navigate = useNavigate();
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          await axios.post(
            "https://localhost:7063/api/Users",
            {
              email: user.email,
              name: user.name,
              familyName: user.family_name,
              GivenName: user.GivenName,
              Name: user.Name,
              nickname: user.nickname,
              picture: user.picture,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Successfully added data");
        } catch (error) {
          console.error("Error storing user data:", error);
        }
      }
    };

    fetchUserData();
  }, [isAuthenticated, getAccessTokenSilently, user]);

  useEffect(() => {
    const handlePopState = () => {
      // When the back button is pressed
      setShowLoginOverlay(true);
      window.history.pushState(null, null, window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleLoginRedirect = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      Swal.fire({
        icon: "warning",
        title: "Already Logged In",
        text: "You are already logged in. Please log out before signing in again.",
      });
    } else {
      navigate("/Shop_Service_Login");
    }
  };

  const handleAuthRedirect = (path) => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in to access this page.",
        timer: 3000, // 3 seconds
        showConfirmButton: false,
      }).then(() => {
        loginWithRedirect();
      });
    } else {
      navigate(path);
    }
  };
  const handleAuthRedirectDashboard = (path) => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in to access this page.",
        timer: 3000, // 3 seconds
        showConfirmButton: false,
      }).then(() => {
        navigate("/Shop_Service_Login");
      });
    } else {
      navigate("/Shop_Service_Login");
    }
  };

  return (
    <>
      {showLoginOverlay && (
        <div className="login-overlay">
          <div className="login-box">
            <h2>Login Required</h2>
            <button
              className="login-btn"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </div>
        </div>
      )}
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
              <Link
                className="Link"
                onClick={() => handleAuthRedirect("/DashBoadUser")}
              >
                <span className="">
                  <img src={profile} alt="" className="shopimg" />
                </span>
                {isAuthenticated ? <span>{user.given_name}</span> : "Profile"}
                <span className="">
                  <img src={DownArorw} alt="" className="shopimg" />
                </span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link
                    to={"/DashBoadUser"}
                    className="Link"
                    onClick={(e) => handleAuthRedirect("/DashBoadUser")}
                  >
                    My Profile
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="Link Shops">
                <span className="">
                  <img src={Seller} alt="" className="shopimg" />
                </span>
                Become a Seller
              </Link>
              <ul className="submenu">
                <li>
                  <Link
                    to={"/DashBoard"}
                    className="Link"
                    onClick={(e) => handleAuthRedirectDashboard("/DashBoard")}
                  >
                    DashBoard
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Shop_Service_Login"}
                    className="Link"
                    onClick={handleLoginRedirect}
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </li>

            {isAuthenticated ? (
              <button
                className="AuthButton btnC logout"
                onClick={() => logout()}
              >
                Logout
              </button>
            ) : (
              <button
                className="AuthButton btnC login"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
