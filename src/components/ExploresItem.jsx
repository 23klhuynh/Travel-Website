import React from "react";

function ExploresItem({ title, text, image, date }) {
  return (
    <div className="item-container">
      <div
        className="background"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
    </div>
  );
}

export default ExploresItem;
