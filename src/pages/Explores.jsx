import React from "react";
import { ExploresList } from "../helpers/exploresList";
import ExploresItem from "../components/ExploresItem";
import "../styles/Explores.css";

function Explores() {
  return (
    <div className="explores-container">
      <div className="title">
        <h1 explores-title>
          Ha Long: Discover the Uniqueness and Update the latest news
        </h1>
        <p>
          Ha Long: Secrets and Life in the Bay - Explore and Update exciting
          news from this wonderful destination.
        </p>
      </div>

      <div className="explores-item">
        {ExploresList.map((exploreItem, key) => {
          return (
            <ExploresItem
              key={key}
              title={exploreItem.title}
              image={exploreItem.image}
              text={exploreItem.text}
              date={exploreItem.date}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Explores;
