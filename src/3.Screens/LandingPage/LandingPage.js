import React, { useEffect, useState } from "react";
import "../../Style/LandingPage.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Service_Data_Display from "../DisplayPageService/Service_Data_Display";

function LandingPage() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <div className="landing_Center">
            <button className="btn button btnU " id="BtnC1">
              <Link to={"/DisplayPage"} className="Link">
                Shops
              </Link>
            </button>
            <button className="btn button btnU" id="BtnC2">
              <Link to={"/ProductsDataDisplay"} className="Link">
                Product
              </Link>
            </button>
            <button className="btn button btnU" id="BtnC3">
              <Link to={"/Service_Data_Display"} className="Link">
                Service
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LandingPage;
