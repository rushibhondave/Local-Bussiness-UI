import React from "react";
import "../../Style/DisplayPage.css";
import Data_Card from "./Data_Card";
function Data_Display() {
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
              />
              <button className="button">Search</button>
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
                <label><input type="radio"/> Classic</label>
                <label><input type="radio"/> Coach</label>
                <label><input type="radio"/> AC</label>
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
            <Data_Card />
            <Data_Card />
            <Data_Card />   
          </div>
        </div>
      </div>
    </>
  );
}

export default Data_Display;
