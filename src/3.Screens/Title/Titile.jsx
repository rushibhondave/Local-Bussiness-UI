import React from "react";

import { Link } from "react-router-dom";
function Titile() {
  return (
    <>
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
