import React from "react";
import Add from "../../assets/add-image.png";

const Card = () => {
  return (
    <div className="card">
      <img src={Add} alt="" srcset="" className="card-img" />
      <h4>Item Name</h4>
      <p>Item Description</p>
      <h4>$ 100.00</h4>
    </div>
  );
};

export default Card;
