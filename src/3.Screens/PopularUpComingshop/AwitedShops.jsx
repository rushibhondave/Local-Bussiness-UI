import React from "react";
import "../../Style/PopularUpComing.css";
import Shop_Get_Info from "./Shop_Get_Info";

function AwitedShops() {
  return (
    <>
      <div className="PopularUpComing_Conatiner">
        <div className="head">
          <h1 className="text11">Most AWAITED </h1>
        </div>
        <div className="list_Shop">
          <ul className="ul">
            <li className="li Active">All Shop</li>
            <li className="li Active">Upcoming Shop</li>
            <li className="li Active">Most Popular Shop</li>
          </ul>
        </div>
        <div className="Shop_infoget">
          <Shop_Get_Info />
          <Shop_Get_Info />
          <Shop_Get_Info />
          <Shop_Get_Info />
          <Shop_Get_Info />
          <Shop_Get_Info />
        </div>
      </div>
    </>
  );
}

export default AwitedShops;
