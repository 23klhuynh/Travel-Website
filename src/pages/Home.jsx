import React, { useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BackgroundVideo from "../video/backgroundVideo.mp4";
import SearchIcon from "@mui/icons-material/Search";
import { ContentCopy } from "@mui/icons-material";
import HomeLocation from "../components/HomeLocation";

function Home() {
  const [destination, setDestination] = useState(false);
  const [price, setPrice] = useState(false);

  const toggleDestination = () => {
    setDestination(!destination);
  };
  const togglePrice = () => {
    setPrice(!price);
  };

  return (
    <>
      <div className="home">
        <div className="background">
          <video src={BackgroundVideo} autoPlay loop muted></video>
        </div>

        <div className="header">
          <div className="content">
            <h1>Which Ha Long cruise do you choose?</h1>
            <p>
              More than 100 luxury cruise tours at good prices are waiting for
              you
            </p>
          </div>

          <div className="option">
            
            <input type="text" placeholder="Enter your cruise" />

            <div className="location">
              <button onClick={toggleDestination} className="dropdown-content">
                Island Destinations
              </button>
              {destination && (
                <div className="dropdown-content">
                  <ul>
                    <li>Vinh Ha Long</li>
                    <li>Vinh Lan Ha</li>
                    <li>Dao Cat Ba</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="cost">
              <button onClick={togglePrice} className="dropdown-price">
                Cruise Prices
              </button>
              {price && (
                <div className="dropdown-price">
                  <ul>
                    <li>From $50 to $150</li>
                    <li>From $150 to $300</li>
                    <li>More than $300</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="link">
              <Link to="/book">
                <button>Book Now!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HomeLocation></HomeLocation>
    </>
  );
}

export default Home;
