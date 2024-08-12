import React from "react";
import Local_Buussiness_India from "../../Img/LoacalShop/Support_Local_Buussiness.jpg";
import "../../Style/Data_card.css";
function Data_Card({ShopName,shopCategory,shopTimings,shopaddress}) {
  return (
    <>
      <main className="Card-list">
        <div className="bus">
          <img src={Local_Buussiness_India} alt="ShopsPic" className="ShopsPic" />
          <div className="bus_data">
            <h3>{ShopName}</h3>
            <div className="bus_info">
              <div>⭐⭐⭐⭐</div>
              <div>{shopCategory}</div>
              <div>{shopaddress}</div>
              <div>{shopTimings}</div>

              <div className="line"></div>
              <p>Ipsum ipsum clita erat amet dolor justo diam...</p>
            </div>
          </div>
          <div className="Pro_Data">
            
          <div className="bus_data">
            <h3>Prodcut Details</h3>
            <div className="bus_info">
              <div>⭐⭐⭐⭐</div>
              <div>Restaurant</div>
              <div>KarveNagar</div>
              <div>₹₹ 1000</div>

              <div className="line"></div>
              <button className="button21">Buy</button>
              <button className="button2 button21">Add to Cart</button>
              
            </div>
          </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Data_Card;
