import "../../Style/DisplayPage.css";
import ErrorCompoent from "../../2.Component/Error_Component/ErrorCompoent.jsx";
import Data_Card from "./Data_Card.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import Loader from "../About_Blog/Loader.jsx";

function Data_Display() {
  
  const [data, setdata] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [Location, setLocation] = useState("");
  const [Time, setTime] = useState("");
  const validateinput = (shopName) => {
    const trimmedshopName = shopName.trim();
    const isValid = /^[a-zA-Z0-9@$_]{2,}$/.test(trimmedshopName);
    return isValid;
  };

  const validateinputValue = (shopName) => {
    const trimmedShopName = shopName.trim();
    return /^[a-zA-Z\s]+$/.test(trimmedShopName);
  };

  useEffect(() => {
    getdata();
  }, [inputValue]);

  const getdata = (event) => {
    try {
      if (event) event.preventDefault();
      axios.get("https://localhost:7063/api/SerachShop").then((result) => {
        setdata(result.data);
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Bad Request",
          text: "Invalid input. Please check your details and try again.",
        });
      } 
      else if (error.message === "Network Error") {
        Swal.fire({
          icon: "error",
          title: "Network Error",
          text: "Unable to connect. Please check your internet connection and try again.",
        });
      }else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while creating your account. Please try again later.",
        });
      }
    }
  };

  const getdatabyLoaction = (event) => {
    try {
      if (event) event.preventDefault();
      axios
        .get(`https://localhost:7063/api/SerachShop/location/${Location}`)
        .then((result) => {
          setdata(result.data);
          setError(""); // Clear any previous errors
        });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Bad Request",
          text: "Invalid input. Please check your details and try again.",
        });
      } 
      else if (error.message === "Network Error") {
        Swal.fire({
          icon: "error",
          title: "Network Error",
          text: "Unable to connect. Please check your internet connection and try again.",
        });
      }else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while creating your account. Please try again later.",
        });
      }
    }
  };

  const handleSearchByName = (event) => {
    if (event) event.preventDefault();

    
    // Validate password
    if (!inputValue || !validateinput(inputValue)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Service Name is wrong insert and not include any numbers, @, $, _.",
      });
      return;
    }
    // Validate shop name
    if (!validateinputValue(inputValue)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input Value",
        text: "Service Name should only contain letters.",
      });
      return;
    } else {
    try {
      if (!inputValue.trim() || !inputValue < 0) {
        setError("Please enter a search term.");
        return;
      }

     
      axios
        .get(
          `https://localhost:7063/api/SerachShop/${encodeURIComponent(
            inputValue
          )}`
        )
        .then((result) => {
          setdata(result.data);
          setError(""); // Clear any previous errors
        });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Bad Request",
          text: "Invalid input. Please check your details and try again.",
        });
      } 
      else if (error.message === "Network Error") {
        Swal.fire({
          icon: "error",
          title: "Network Error",
          text: "Unable to connect. Please check your internet connection and try again.",
        });
      }else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while creating your account. Please try again later.",
        });
      }
    }

  }
  };

  const getdatabyhandleShopCategory = (event) => {
    if (event) event.preventDefault();
    try {
      if (!inputValue.trim() || !inputValue < 0) {
        setError("Please enter a search term.");
        return;
      }

      axios
        .get(
          `https://localhost:7063/api/SerachShop/shopCategory/${encodeURIComponent(
            inputValue
          )}`
        )
        .then((result) => {
          setdata(result.data);
          setError(""); // Clear any previous errors
        });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Bad Request",
          text: "Invalid input. Please check your details and try again.",
        });
      } 
      else if (error.message === "Network Error") {
        Swal.fire({
          icon: "error",
          title: "Network Error",
          text: "Unable to connect. Please check your internet connection and try again.",
        });
      }else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while creating your account. Please try again later.",
        });
      }
    }
  };




  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    getdatabyLoaction();
  };
  const handleShopCategory = (event) => {
    setTime(event.target.value);
    console.log(Time)
    getdatabyhandleShopCategory();
  };



  return (
    <>

      <div className="shopData_Container">
        <div className="Search_Cotainer">
          <div className="search_div">
            <form action="">
              <input
                type="text"
                id="search-bar"
                placeholder=" Search product,shop name and more...!"
                className="searchcontainer1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Use onChange instead of onChangeCapture
              />
              <button className="button" onClick={handleSearchByName}>
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="data_show">
          <div className="filter_column">
            <div className="filter_data">
              <aside className="filters">
                <h2>Filter</h2>
                <div className="line">
                  <hr />
                </div>
                <div className="filter-section">
                  <h3>Location</h3>
                  <label>
                    <input
                      type="radio"
                      value="411052"
                      checked={Location === "411052"}
                      onChange={handleLocationChange}
                    />
                    KarveNagar
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="411007"
                      checked={Location === "411007"}
                      onChange={handleLocationChange}
                    />
                    Pune University
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="411016"
                      checked={Location === "411016"}
                      onChange={handleLocationChange}
                    />
                    Aundh
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="411017"
                      checked={Location === "411017"}
                      onChange={handleLocationChange}
                    />
                    Baner
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="411021"
                      checked={Location === "411021"}
                      onChange={handleLocationChange}
                    />
                    Bavdhan
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="411015"
                      checked={Location === "411015"}
                      onChange={handleLocationChange}
                    />
                    Khothrud
                  </label>

                  <div className="loactionshow">
                    <h4>Selected Location:</h4>
                    <p >
                      {Location
                        ? `Pin Code: ${Location}`
                        : "No location selected"}
                    </p>
                  </div>
                </div>
                <div className="line">
                  <hr />
                </div>

                <div className="filter-section">
                  <h3>Types</h3>
                  <label>
                    <input type="radio"
                    value="StreetShop"
                      checked={Time === "StreetShop"}
                      onChange={ handleShopCategory} /> Street Shop
                  </label>
                  <label>
                    <input type="radio" 
                      value="Medical"
                      checked={Time === "Medical"}
                      onChange={ handleShopCategory}
                    /> Medical
                  </label>
                  <label>
                    <input type="radio" 
                      value="FoodStall"
                      checked={Time === "FoodStall"}
                      onChange={ handleShopCategory}
                    /> Food Stall
                  </label>
                  <label>
                    <input type="radio" 
                      value="Grocery"
                      checked={Time === "Grocery"}
                      onChange={ handleShopCategory}
                    />Grocery Shop
                  </label>
                </div>
              </aside>
            </div>
          </div>
          <div className="Display_Card">
            {data && data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <Data_Card
                    key={index}
                    ShopName={item.shopName}
                    shopCategory={item.shopCategory}
                    shopTimings={item.shopTimings}
                    shopaddress={item.address}
                    description={item.description}
                  />
                );
              })
            ) : (
              <div className="errorcomp">
          
              <Loader />
                
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Data_Display;
