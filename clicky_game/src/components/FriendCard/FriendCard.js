import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={() =>props.imgClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.img} />
    </div>    
  </div>
);

export default FriendCard;