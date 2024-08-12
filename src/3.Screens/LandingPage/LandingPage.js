import React, { useEffect, useState } from "react";
import "../../Style/LandingPage.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function LandingPage() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
   
 
  }, [inputValue]);

  const handleSearch = (event) => {
    if (event) event.preventDefault(); // Prevent the default form submission behavior.
    console.log(inputValue);
    // Add your search logic here
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <div className="landing_Center">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                id="search-bar"
                name="Search_Bar_Landing_Page"
                value={inputValue}
                placeholder=" Search product, shop name and more...!"
                className="searchcontainer"
                onChange={(e) => setInputValue(e.target.value)} // Use onChange instead of onChangeCapture
              />
              <button className="btn button btnU" id="btn1">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LandingPage;
