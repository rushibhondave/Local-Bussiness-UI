import React from "react";
import Local_Buussiness_India from "../../Img/local_Business/Plumber.jpg";
import "../../Style/Data_card.css";
function Service_Data_Card({
  serviceName,
  firstName,
  lastName,
  serviceCategory,
  serviceAmount,
  jobTimings,
  address,
  mobileNo,
  additionalInformation,
  gender,
}) {
  const HandleSchedule = () => {};
  return (
    <>
      <main className="Card-list" id="servicecard">
        <div className="bus">
          <div className="serviceImg">
            <img
              src={Local_Buussiness_India}
              alt="ShopsPic"
              className="ShopsPic"
            />
          </div>

          <div className="bus_data">
            <h3>{serviceName}</h3>
            <div className="bus_info">
              <div>⭐⭐⭐⭐</div>
              <div className="Service1 Name">
                {firstName} {lastName}
              </div>
              <div className="Service1">{gender}</div>
              <div className="Service1">{serviceCategory}</div>
              <div className="Service1">{jobTimings}</div>
              <div className="Service1 red">₹₹ {serviceAmount}</div>
              <div className=" MobNo ">{mobileNo}</div>
              <hr />
            </div>
          </div>

          <div className="Pro_Data">
            <div className="Service1 line">{address}</div>
            <div className="Service1 line">
              <p>{additionalInformation}</p>
            </div>
            <div className="Schedulebtn">
              <button className=" button21" onClick={HandleSchedule}>
                Schedule
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Service_Data_Card;
