import React from "react";

import Card from "../../3.Screens/Card/Card.jsx";
import Data_Display from "../../3.Screens/DisplayPage/Data_Display.jsx";
function CardComp() {
  return (
    <>
      <div className="Container_Card">     
      <div className="text">
      <span className="text1"> WE OFFER YOU</span>  
      </div>
     
       <div className="Card_Grid_Box">
          <Card  Service="Grocery" info="Fresh produce, daily essentials available."  fileName={<Data_Display/>}/>
          <Card Service="Street Shop" info="Local goods, affordable prices daily."/>
          <Card Service="Medicals" info="Prescription drugs, healthcare products here."/>
          <Card Service="Services " info="Professional help, diverse offerings available."/>
        </div>
      </div>
    </>
  );
}

export default CardComp;
