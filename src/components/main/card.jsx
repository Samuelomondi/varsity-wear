import React from "react";
import "./card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.card_image} alt="" srcset="" className="card-img" />
      </div>
      
      <div className="card-text">
        <h4>{props.card_name}</h4>
        <p>{props.card_description}</p>
        <h4>{props.card_price}</h4>
      </div>
    </div>
  );
};

export default Card;
