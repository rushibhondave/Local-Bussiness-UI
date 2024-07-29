import React from "react";
import "../../Style/LandingPage.css";
import Vegetables_Cat from "../../Img/Vegetables_Cat.png";
function LandingPage() {
  return (
    <>
      <div className="container">
        <img src={Vegetables_Cat} alt="" />
        <div className="wrap">
          <h1 className="Text_Header1">The Spectacle Before </h1>
          <p className="Text_Para">
            Apparently, we had reached a great height in the atmosphere, for the
            sky was a dead black, and which lifts the horizon
          </p>
           <div className="landing_Center">
           <form action="" >
              <input
                type="text"
                id="search-bar"
                placeholder=" Search product,shop name and more...!"
                className="searchcontainer" 
              />
              <button className="btn button btn1 btnU">Search</button>
            </form>
           </div>
           
     
        </div>
      </div>
    </>
  );
}

export default LandingPage;
