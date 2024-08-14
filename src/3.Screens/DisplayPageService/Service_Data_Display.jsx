import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../../Style/DisplayPage.css";
import Service_Data_Card from "./Service_Data_Card";
function Service_Data_Display() {
  const [data, setdata] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [Location, setLocation] = useState("");

  const validateinput = (shopName) => {
    const trimmedshopName = shopName.trim();
    const isValid = /^[a-zA-Z0-9@$_]{2,}$/.test(trimmedshopName);
    return isValid;
  };

  const validateinputValue = (shopName) => {
    const trimmedShopName = shopName.trim();
    return /^[a-zA-Z\s]+$/.test(trimmedShopName);
  };

  useEffect(() => {}, [inputValue]);

  useEffect(() => {
    getdata();
  }, [inputValue]);

  const getdata = (event) => {
    try {
      if (event) event.preventDefault();
      axios.get("https://localhost:7063/api/SearchService").then((result) => {
        setdata(result.data);
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error while fetching data.",
      });
    }
  };
  const getdatabyLoaction = (event) => {
    try {
      if (event) event.preventDefault();
      axios
        .get(`https://localhost:7063/api/SearchService/location/${Location}`)
        .then((result) => {
          setdata(result.data);
          setError(""); // Clear any previous errors
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error while fetching data.",
      });
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    getdatabyLoaction();
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
            `https://localhost:7063/api/SearchService/${encodeURIComponent(
              inputValue
            )}`
          )
          .then((result) => {
            setdata(result.data);
            setError(""); // Clear any previous errors
          });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response
            ? error.response.data
            : "Error while fetching data.",
        });
      }
    }
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
                placeholder=" Search Service name and more...!"
                className="searchcontainer1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
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

                  <div>
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
              </aside>
            </div>
          </div>
          <div className="Display_Card">
            {data && data.length > 0
              ? data.map((item, index) => {
                  return (
                    <Service_Data_Card
                      key={index}
                      serviceName={item.serviceName}
                      firstName={item.firstName}
                      lastName={item.lastName}
                      serviceCategory={item.serviceCategory}
                      serviceAmount={item.serviceAmount}
                      jobTimings={item.jobTimings}
                      mobileNo={item.mobileNo}
                      address={item.address}
                      additionalInformation={item.additionalInformation}
                      gender={item.gender}
                    />
                  );
                })
              : "Data is not available..."}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service_Data_Display;
