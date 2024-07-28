import React from "react";
import '../../Style/Footer.css'
import { Link } from "react-router-dom";
import facebook from "../../Img/facebook.svg";
import github from "../../Img/github.svg";
import linkedin from "../../Img/linkedin.svg";


function Footter() {
  return (
    <>
      <div className="Mainfooter">
        <div className="footer-content">
          <p>
            Copyright © <span id="year" /> 2024
             <span>  @Rushi_Bhondave</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footter;
