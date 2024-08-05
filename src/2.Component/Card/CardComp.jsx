import React from "react";

import Card from "../../3.Screens/Card/Card.jsx";
function CardComp() {
  return (
    <>
      <div className="Container_Card">     
      <div className="text">
      <span className="text1"> WE OFFER YOU</span>  
      </div>
     
       <div className="Card_Grid_Box">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
       
      
        </div>
      </div>
    </>
  );
}

export default CardComp;
