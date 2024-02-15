import React from "react";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";

function MenuItem({ image, name, info, price }) {
  return (
    <div className="menuItem">
      <div
        className="card-background"
        style={{ backgroundImage: `url(${image})` }}></div>
      <h2>{name}</h2>

      <p className="subTitle">
        <DirectionsBoatIcon /> <span> {info}</span>
      </p>

      <div className="buy">
        <p>${price} per person</p>
        <button>Schedule</button>
      </div>
    </div>
  );
}

export default MenuItem;
