import React from "react";
import "./card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.picture} alt="" className="card-img" />
      </div>
      
      <div className="card-text">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <h4>{props.price}</h4>
      </div>

      <div className="action-icons">
        <a href=""><FontAwesomeIcon icon={faHeart} className="add-to-wish"/></a>
        <a href=""><FontAwesomeIcon icon={faCartShopping} className="add-to-cart"/></a>
      </div>
    </div>
  );
};

export default Card;
