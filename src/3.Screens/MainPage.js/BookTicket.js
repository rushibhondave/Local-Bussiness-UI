import React from "react";
import "../../Style/MainPage.css";
import BusImg from "../../Img/BusImg.png";
import Title from "../Title/Title";
import TitleComp from "../../2.Component/Title/TitleComp";
function BookTicket() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="ticket_info">
            <h1 className="h1 wordColor">
              Get Your Ticket Online, Easy and Safely
            </h1>
            <button className="btn btnU"> GET TICKET NOW </button>
          </div>

          <div className="ticket_Card">
            <div className="ticket_block ">
              <div className="book">
                <select name="" id="" className="selction wordColor" required>
                  <option value="">From</option>
                  <option value="Shivajinagar">Shivajinagar</option>
                  <option value="Pune Station">Pune Station</option>
                  <option value="Swargate ">Swargate </option>
                  <option value="Katraj  ">Katraj </option>
                </select>
                <select name="" id="" className="selction wordColor" required>
                  <option value="">To</option>
                  <option value="Pune Station">Pune Station</option>
                  <option value="Shivajinagar">Shivajinagar</option>
                  <option value="Swargate  ">Swargate </option>
                </select>
                <input
                  className="btnL"
                  type="text"
                  placeholder="Adhar No"
                  required
                />
                <div className="btnC wordColor">
                  <button className="btn button">Find Tickets</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="build_img">
        <marquee behavior="" direction="">
          <img src={BusImg} alt="" />
        </marquee>
      </div>

    </>
  );
}

export default BookTicket;
