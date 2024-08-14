import React from "react";
import Restaurant_Img from '../../Img/Restaurant_Img.png'
function Shop_Get_Info({ShopName,shopCategory,shopTimings,shopaddress,description}) {
  return (
    <>
      <div className="menu-item">
        <img src={Restaurant_Img} alt="ShopsPic" className="Awited_IMg" />
        <div className="item-details">
          <h6 className="h2">{ShopName}</h6>
          <div className="item_info">
            <div className="item-Star">⭐⭐⭐⭐</div>
            <div className="item-Categery">{shopCategory}</div>
            <div className="item-Loction">{shopaddress}</div>
          </div>
          <div className="description">
          <p className=""> {description}</p>
          </div>
       
        </div>
      </div>
    </>
  );
}

export default Shop_Get_Info;

