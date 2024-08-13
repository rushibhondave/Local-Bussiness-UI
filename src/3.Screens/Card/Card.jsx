import React from "react";
import "../../Style/Card.css";
import "../../Style/index.css";
import { Link, useNavigate } from "react-router-dom";

function Card({ Service, info, fileName }) {
  return (
    <>
      <div className="Card_Box">
        <div className="Card_Grid_item">
          <span>
            <img src="" alt="" />
          </span>
          <span className="Service">{Service}</span>
          <div className="Service_Info">
            <p className="info">{info}</p>
          </div>
          <button className="btn11">
            <Link to={"/About"} className="Link">
              Read More
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
