import React, { useState } from "react";
import "../../Style/LandingPage.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; import 'react-toastify/dist/ReactToastify.css';
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
    // 
  };
  

  return (
    <>
      <nav class="navbar">
        <div class="logo">
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
              <button className="btn button  btnU" id="btn1">
                Search
              </button>
            </form>
          </div>
        </div>
        <ul class="nav-links Link">
          <li>
            <Link className="Link btn Link_BTN" >Location</Link>
            <ul className="submenu">
              <li>
                <Link to={""}   className="Link">
                  1.Kondhawa
                </Link>
              </li>
              <li>
                <Link to={""} className="Link">
                  2.GokhaleNagar
                </Link>
              </li>
              <li>
                <Link to={""} className="Link">
                  3.Karvenagar
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default LandingPage;
