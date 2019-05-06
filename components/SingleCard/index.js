import React from "react";
import "./style.css";

const SingleCard = (props) => {
  return (
    <div 
      className="card"
      // value={props.id}
      onClick={() => props.handleClick(props.id)}>
        <div className="img-container">
          <img className={(props.score === 0 && props.message !== "Click an image to begin!" ? "shake" : "")} alt={props.name} src={props.image} />
        </div>
      </div>
  );
}


export default SingleCard;