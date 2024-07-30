import React from "react";
import Local_Buussiness_India from "../../Img/local_Business/Plumber.jpg";
import "../../Style/Data_card.css";
function Service_Data_Card() {
  return (
    <>
      <main class="Card-list">
        <div class="bus">
          <img src={Local_Buussiness_India} alt="ShopsPic" className="ShopsPic" />
          <div className="bus_data">
            <h3>Service Name</h3>
            <div className="bus_info">
              <div>⭐⭐⭐⭐</div>
              <div>Plumber</div>
              <div>Deccan Gymkhana, Pune</div>
              <div>₹₹ 1000</div>
              <div className="MobNo">12345678910</div>

              <div className="line"></div>
              <p>Ipsum ipsum clita erat amet dolor justo diam...</p>
            </div>
          </div>
          <div className="Pro_Data">
          <button className="button21">Add</button>
          <button className="button2 button21">Schedule</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Service_Data_Card;
