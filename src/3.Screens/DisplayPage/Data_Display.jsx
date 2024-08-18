import "../../Style/DisplayPage.css";
import Data_Card from "./Data_Card.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import BoxLoading from "../LoadingPage/BoxLoading.jsx";
import { useLocation } from "react-router-dom";

function Data_Display() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [Location, setLocation] = useState("");
  const [Time, setTime] = useState("");
  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const shopName = query.get("name");

  const validateinput = (shopName) => {
    const trimmedShopName = shopName.trim();
    // Update regex to allow spaces between letters and numbers
    const isValid = /^[a-zA-Z0-9\s@$_]{2,}$/.test(trimmedShopName);
    return isValid;
  };

  const validateinputValue = (shopName) => {
    const trimmedShopName = shopName.trim();
    return /^[a-zA-Z\s]+$/.test(trimmedShopName);
  };

  useEffect(() => {
    getdata();
  }, [inputValue]);

  useEffect(() => {
    if (Location) {
      getdatabyLocation();
    }
  }, [Location]);

  useEffect(() => {
    if (Time) {
      getdatabyhandleShopCategory();
    }
  }, [Time]);

  // useEffect(() => {
  //   fetchShopData();
  // }, [shopName]);

  const fetchShopData = async () => {
    try {
      axios
        .get(
          `https://localhost:7063/api/SerachShop/${encodeURIComponent(
            shopName
          )}`
        )
        .then((result) => {
          setData(result.data);
          setError(""); // Clear any previous errors
        });
    } catch (error) {
      console.error("Error fetching shop data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getdata = () => {
    try {
      axios.get("https://localhost:7063/api/SerachShop").then((result) => {
        setData(result.data);
      });
    } catch (error) {
      handleError(error);
    }
  };

  const getdatabyLocation = () => {
    try {
      axios
        .get(`https://localhost:7063/api/SerachShop/location/${Location}`)
        .then((result) => {
          setData(result.data);
          setError(""); // Clear any previous errors
        });
    } catch (error) {
      handleError(error);
    }
  };

  const getdatabyhandleShopCategory = () => {
    try {
      axios
        .get(
          `https://localhost:7063/api/SerachShop/shopCategory/${encodeURIComponent(
            Time
          )}`
        )
        .then((result) => {
          setData(result.data);
          setError(""); // Clear any previous errors
        });
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response && error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: "Bad Request",
        text: "Invalid input. Please check your details and try again.",
      });
    } else if (error.message === "Network Error") {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Unable to connect. Please check your internet connection and try again.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while creating your account. Please try again later.",
      });
    }
  };

  const handleSearchByName = (event) => {
    if (event) event.preventDefault();

    // Validate shop name
    if (!validateinput(inputValue) || !validateinputValue(inputValue)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input Value",
        text: "Shop Name should only contain letters, and not include any numbers, @, $, or _.",
      });
      return;
    }

    try {
      axios
        .get(
          `https://localhost:7063/api/SerachShop/${encodeURIComponent(
            inputValue
          )}`
        )
        .then((result) => {
          setData(result.data);
          setError(""); // Clear any previous errors
        });
    } catch (error) {
      handleError(error);
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleShopCategory = (event) => {
    setTime(event.target.value);
  };

  return (
    <>
      <div className="shopData_Container">
        <div className="Search_Cotainer">
          <div className="search_div">
            <form>
              <input
                type="text"
                id="search-bar"
                placeholder=" Search product,shop name and more...!"
                className="searchcontainer1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
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
                  {[
                    "411052",
                    "411007",
                    "411016",
                    "411017",
                    "411021",
                    "411015",
                  ].map((loc) => (
                    <label key={loc}>
                      <input
                        type="radio"
                        value={loc}
                        checked={Location === loc}
                        onChange={handleLocationChange}
                      />
                      {loc === "411052"
                        ? "KarveNagar"
                        : loc === "411007"
                        ? "Pune University"
                        : loc === "411016"
                        ? "Aundh"
                        : loc === "411017"
                        ? "Baner"
                        : loc === "411021"
                        ? "Bavdhan"
                        : "Khothrud"}
                    </label>
                  ))}

                  <div className="loactionshow">
                    <h4>Selected Location:</h4>
                    <p>
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
                  {["StreetShop", "Medical", "FoodStall", "Grocery"].map(
                    (type) => (
                      <label key={type}>
                        <input
                          type="radio"
                          value={type}
                          checked={Time === type}
                          onChange={handleShopCategory}
                        />
                        {type === "StreetShop"
                          ? "Street Shop"
                          : type === "Medical"
                          ? "Medical"
                          : type === "FoodStall"
                          ? "Food Stall"
                          : "Grocery Shop"}
                      </label>
                    )
                  )}
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
                    TermsAndConditionsAccepted={item.TermsAndConditionsAccepted}
                  />
                );
              })
            ) : (
              <div className="errorcomp">
                <BoxLoading />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Data_Display;
