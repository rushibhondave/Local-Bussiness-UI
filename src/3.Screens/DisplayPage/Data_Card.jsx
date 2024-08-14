import React from "react";
import Local_Buussiness_India from "../../Img/LoacalShop/Support_Local_Buussiness.jpg";
import "../../Style/Data_card.css";
import { useNavigate } from "react-router-dom";
function Data_Card({ ShopName, shopCategory, shopTimings, shopaddress,description }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ShopInfoGet',{state:{shop:ShopName}});
  };
  return (
    <>
      <main className="Card-list">
        <div className="bus">
          <img
            src={Local_Buussiness_India}
            alt="ShopsPic"
            className="ShopsPic"
          />
          <div className="bus_data">
            <h3>{ShopName}</h3>
            <div className="bus_info">
              <div>⭐⭐⭐⭐</div>
              <div>{shopCategory}</div>
              <div>{shopaddress}</div>
              <div>{shopTimings}</div>

              <div className="line"></div>
              <p>{description}</p>
            </div>

            <div className="Pro_Data">
              <div className="bus_info">
                <button className="button21" onClick={handleClick}>
                Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Data_Card;
