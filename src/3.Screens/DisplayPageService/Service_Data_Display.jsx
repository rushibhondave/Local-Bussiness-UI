import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../../Style/DisplayPage.css";
import Service_Data_Card from "./Service_Data_Card";
function Service_Data_Display() 
{
  const [data, setdata] = useState("");
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {}, [inputValue]);

  useEffect(() => {
    getdata();
  }, [inputValue]);
  const getdata = (event) => {
    try {
      if (event) event.preventDefault();
      axios.get("https://localhost:7063/api/Serach").then((result) => {
        setdata(result.data);
        console.log(result);
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error while fetching data.",
      });
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
                placeholder=" Search product,shop name and more...!"
                className="searchcontainer1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
              <button className="button" >Search</button>
            </form>
          </div>
        </div>
        <div className="data_show">
          <div className="filter_column">
            <div className="filter_data">
            <aside class="filters">
            <h2>Filter</h2>
            <div className="line"><hr /></div>
            <div class="filter-section">
                <h3>Vehicle Type</h3>
                <label><input type="checkbox"/> Classic</label>
                <label><input type="checkbox"/> Coach</label>
                <label><input type="checkbox"/> AC</label>
            </div>
            <div className="line"><hr /></div>
            <div class="filter-section">
                <h3>Routes</h3>
                <label><input type="checkbox"/> Kansas to Echo Bass</label>
                <label><input type="checkbox"/> Witchita to Echo Bass</label>
            </div>
            <div className="line"><hr /></div>
            <div class="filter-section">
                <h3>Schedules</h3>
                <label><input type="checkbox"/> 06:00 am - 03:30 pm</label>
                <label><input type="checkbox"/> 07:00 am - 04:00 pm</label>
                <label><input type="checkbox"/> 08:00 am - 04:30 pm</label>
            </div>
        </aside>
            </div>
          </div>
          <div className="Display_Card">
            <Service_Data_Card />
            <Service_Data_Card />
            <Service_Data_Card />
          
          
        
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Service_Data_Display;
