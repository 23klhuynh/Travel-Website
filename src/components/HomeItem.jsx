import React from "react";

function HomeItem({ title, image }) {
  return (
    <div className="homeItem">
      <div
        className="background"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="content">
        <h2>{title}</h2>
        <button>View more</button>
      </div>
    </div>
  );
}

export default HomeItem;
