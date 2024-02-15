import React from "react";
import { HomeList } from "../helpers/homeList";
import HomeItem from "../components/HomeItem";
import "../styles/Location.css";

function HomeLocation() {
  return (
    <div className="card-container">
      <div className="title">
        <h1>Desire Destinations</h1>
        <p>
          Discover the wonderful beauty of Ha Long Cruise: Journey to natural
          paradise
        </p>
      </div>

      <div className="home-list">
        {HomeList.map((homeItem, key) => {
          return (
            <HomeItem key={key} title={homeItem.title} image={homeItem.image} />
          );
        })}
      </div>
    </div>
  );
}

export default HomeLocation;
