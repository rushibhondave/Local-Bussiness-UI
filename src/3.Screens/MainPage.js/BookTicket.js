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
        <h2 className="wordColor ">Choose Your Route</h2> </div>
          <div className="ticket_block">
         
            <div className="book">
              <select name="" id="" className="selction wordColor">
              <option value="">Pickup point </option>
                <option value="Shivajinagar">Shivajinagar</option>
                <option value="Pune Station">Pune Station</option>
                <option value="Swargate ">Swargate </option>
                <option value="Katraj  ">Katraj  </option>
              </select>
              <select name="" id="" className="selction wordColor" >
              <option value="">dropping point </option>
                <option value="Pune Station">Pune Station</option>
                <option value="Shivajinagar">Shivajinagar</option>
                <option value="Swargate  ">Swargate  </option>
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
