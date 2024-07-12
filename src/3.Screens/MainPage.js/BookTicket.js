import React from "react";
import "../../Style/MainPage.css";
import BusImg from "../../Img/BusImg.png";
function BookTicket() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="ticket_info">
          <h1 className="h1 wordColor">Get Your Ticket Online, Easy and Safely</h1>
          <button className="btn btnU"> GET TICKET NOW </button>
        </div>

        <div className="ticket_Card">
        <div className="WordCenter">
        <h2 className="wordColor ">Choose Your Ticket</h2> </div>
          <div className="ticket_block">
         
            <div className="book">
              <select name="" id="" className="selction">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Marathi">Marathi</option>
              </select>
              <select name="" id="" className="selction">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Marathi">Marathi</option>
              </select>
              <div className="btnC">
              <button className="btn button">Find Tickets</button>
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
    </div>

    
  );
}

export default BookTicket;
