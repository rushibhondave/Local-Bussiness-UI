import React from "react";
import Restaurant_Img from '../../Img/Restaurant_Img.png'
function Shop_Get_Info() {
  return (
    <>
      <div className="menu-item">
        <img src={Restaurant_Img} alt="ShopsPic" className="Awited_IMg" />
        <div className="item-details">
          <h6 className="h2">Shops Name</h6>
          <div className="item_info">
            <div className="item-Star">⭐⭐⭐⭐</div>
            <div className="item-Categery">Restaurant</div>
            <div className="item-Loction">KarveNagar</div>
          </div>
          <p>Ipsum ipsum clita erat amet dolor justo diam...</p>
        </div>
      </div>
    </>
  );
}

export default Shop_Get_Info;

