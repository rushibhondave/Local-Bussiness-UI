import React, { useState } from "react";
import "../../Style/LandingPage.css";
import swal from "sweetalert";
import Vegetables_Cat from "../../Img/Vegetables_Cat.png";


function LandingPage() {
  const [inputValue, setInputValue] = useState("");
  const [error, seterror] = useState(false);
  // Regular expression to match only letters and numbers
  const regex = /[a-zA-Z0-9]*$/;

  const ClickSearch = (e) => {
    e.preventDefault();

    if (inputValue.length <= 0) {
      seterror(true);
    } else {
      swal("Good job");
    }
  };

  return (
    <>
      <div className="container">
        <img src={Vegetables_Cat} alt="" className="LandingPage_Img" />
        <div className="wrap">
          <h1 className="Text_Header1">The Spectacle Before </h1>
          <p className="Text_Para">
            Apparently, we had reached a great height in the atmosphere, for the
            sky was a dead black, and which lifts the horizon
          </p>
          <div className="landing_Center">
            <form action="" onClick={ClickSearch}>
              <input
                type="text"
                id="search-bar"
                name="Search_Bar_Landing_Page"
                value={inputValue.Search_Bar_Landing_Page}
                placeholder=" Search product,shop name and more...!"
                className="searchcontainer"
                onChangeCapture={(e) => setInputValue(e.target.value)}
              />

              <button className="btn button  btnU" id="btn1">Search</button>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default LandingPage;
