import React from "react";
import "../../Style/Card.css";
import "../../Style/index.css";
function Card({CardHead,CardInfo}) {
  return (
    <>
      <div className="card">
        <div className="cardbox cardbox1">
     
        <div className="para wordColor">
        <span><h1>ICon</h1></span>
        <span className='h1'>{CardHead}</span>
           <p>{CardInfo}</p>
           </div>
        </div>
      </div>
    </>
  );
}

export default Card;
