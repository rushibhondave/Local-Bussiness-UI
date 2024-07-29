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
            <li className="li Active Shop_Name">All Shop</li>
          
            <li className="li Active Shop_Name">Upcoming Shop
            <form action="">
              <ul className="submenu_shop">
                <li><a href=""  className="Link">1.Kondhawa</a></li>
                <li><a href="" className="Link">2.GokhaleNagar</a></li>
                <li><a href="" className="Link">3.Karvenagar</a></li>
              </ul>
              </form>
            </li>
            <li className="li Active Shop_Name">Most Popular Shop
            <form action="">
              <ul className="submenu_shop">
                <li><a href=""  className="Link">1.Kondhawa</a></li>
                <li><a href="" className="Link">2.GokhaleNagar</a></li>
                <li><a href="" className="Link">3.Karvenagar</a></li>
              </ul>
              </form>
            </li>
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
