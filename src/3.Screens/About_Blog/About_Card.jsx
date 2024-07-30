import React from "react";
import local_Bussness from "../../Img/local_Business/i_Love_buy_Loacal.jpg";
function About_Card() {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img
              src={local_Bussness}
              alt="Licensed Therapist"
              className="Service_Img"
            />
          </div>
          <h3>Licensed Therapist</h3>
          <p>
            Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum
            accusamus,
          </p>
        </div>
      </div>
    </>
  );
}

export default About_Card;
