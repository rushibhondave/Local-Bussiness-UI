import React from "react";
import "../../Style/Card.css";
import "../../Style/index.css";

function Card() {
  return (
    <>
      <div className="Card_Box">
        <div className="Card_Grid_item">
          <span>
            <img src="" alt="" />
          </span>
          <span className="Service">Service</span>
          <p className="Service_Info">Lorem ipsum dolor sit amet.</p>
          <button className="btn11">Read More</button>
        </div>
      </div>
    </>
  );
}

export default Card;
