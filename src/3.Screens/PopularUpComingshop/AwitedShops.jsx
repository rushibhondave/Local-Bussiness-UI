import React, { useEffect, useState } from "react";
import "../../Style/PopularUpComing.css";
import Shop_Get_Info from "./Shop_Get_Info";
import axios from "axios";
import Swal from "sweetalert2";
import ErrorCompoent from "../../2.Component/Error_Component/ErrorCompoent";

function AwitedShops() {
  const [inputValue, setInputValue] = useState("");
  const [data, setdata] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getdata();
  }, []);
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

 
  return (
    <>
      <div className="PopularUpComing_Conatiner">
        <div className="head">
          <h1 className="text11">Most AWAITED </h1>
        </div>
        <div className="Shop_infoget">

        {data && data.length > 0 ? (
              data.map((item, index) => {
                return (
                  < Shop_Get_Info 
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
             "Loading..."
            )}
     
        </div>
      </div>
    </>
  );
}

export default AwitedShops;
