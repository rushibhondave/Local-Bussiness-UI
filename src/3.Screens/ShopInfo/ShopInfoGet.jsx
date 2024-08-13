import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../../Style/ShopInfo.css";
import { Link, useLocation } from "react-router-dom";
import ShopInfoCard from "./ShopInfoCard";
import ErrorCompoent from "../../2.Component/Error_Component/ErrorCompoent";

function ShopInfoGet() {
  const LoactionGet = useLocation();
  const shopName = LoactionGet.state?.shop;
  const [data, setdata] = useState([]);
  const [Prodata, setProdata] = useState([]);
  const [inputValue, setInputValue] = useState(shopName || '');
  const [error, setError] = useState("");


  useEffect(() => {
    getdatabyNameValue();
    getdataByProductShopName();
  }, [inputValue]);

  const getdatabyNameValue = (event) => {
    try {
      if (event) event.preventDefault();
      axios
        .get(
          `https://localhost:7063/api/SerachShop/${encodeURIComponent(
            inputValue
          )}`
        )
        .then((result) => {
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

  const getdataByProductShopName = (event) => {
    try {
      if (event) event.preventDefault();
      axios
        .get(
          `https://localhost:7063/api/SearchProduct/${encodeURIComponent(
            inputValue
          )}`
        )
        .then((result) => {
          setProdata(result.Prodata);
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
      <div className="main-body">
        <div className="layout-container">
          <nav className="side-navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  DashBoard
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Orders
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ShopInfoCard">
            {data && data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <ShopInfoCard
                    key={index}
                    shopName={item.shopName}
                    shopCategory={item.shopCategory}
                    shopTimings={item.shopTimings}
                    shopaddress={item.address}
                    mobileNo={item.mobileNo}
                    description={item.description}
                    area={item.area}
                    ownerName={item.ownerName}
                    ownerMobileNo={item.ownerMobileNo}
                  />
                );
              })
            ) : (
              <div className="errorcomp">
                <ErrorCompoent />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopInfoGet;
