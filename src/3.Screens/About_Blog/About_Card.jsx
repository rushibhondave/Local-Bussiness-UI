import React from "react";
import local_Bussness from "../../Img/local_Business/i_Love_buy_Loacal.jpg";
function About_Card({title,description}) {
  return (
    <>
      <div className="cards">
        <div className="card" id="card">
          <div className="icon">
            <img
              src={local_Bussness}
              alt="Licensed Therapist"
              className="Service_Img"
            />
          </div>
          <h3>{title}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default About_Card;
