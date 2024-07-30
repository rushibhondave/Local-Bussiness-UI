import React from "react";
import car from "../../Img/local_Business/car.gif";
import bicycle from "../../Img/local_Business/bicycle.gif";
import { Link } from "react-router-dom";
function Titile() {
  return (
    <>
    <div className="gif">
        <marquee behavior="" direction="right" scrollamount="3">
          <img src={bicycle} alt="" className="BuildingsImg bicycle" />
        </marquee>
        <marquee behavior="" direction="right">
          <img src={car} alt="" className="BuildingsImg car" />
        </marquee>
      </div>
      <div className="TitleContainer">
        <div className="wrapTitle btnU ">
          <h4>WE WOULD LIKE TO GET ANY INFORMATION !</h4>
        </div>

        <Link to={"/DisplayPage"} className="btn btnU btn21 link">Lets Explore</Link>

        
      </div>
    </>
  );
}

export default Titile;
