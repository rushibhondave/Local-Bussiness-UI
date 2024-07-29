import React from "react";
import Local_Buussiness_India from "../../Img/local_Business/Local_Buussiness_India.jpg";
import "../../Style/Data_card.css";
function Data_Card() {
  return (
    <>
      <main class="Card-list">
        <div class="bus">
          <img src={Local_Buussiness_India} alt="ShopsPic" className="ShopsPic" />
          <div className="bus_data">
            <h3>Shops Name</h3>
            <div className="bus_info">
              <div>⭐⭐⭐⭐</div>
              <div>Restaurant</div>
              <div>KarveNagar</div>
              <div>Review 4.3 (100)</div>

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
