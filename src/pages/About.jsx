import React from "react";
import "../styles/About.css";
import BackgroundAbout from "../assets/About-HaLongBay.webp";
import Icon from "../assets/blogIcon.png";
import IdeaIcon from "../assets/IdeaIcon.png";
function About() {
  return (
    <>
      <div className="profile">
        <div className="name">
          <img src={Icon} alt="Icon" />

          <h2>Khang Huynh</h2>
        </div>

        <div className="info">
          <div className="content">
            <h2>Who are we?</h2>
            <p>
              We are Mixi Vivu Mixivivu.com is the official product of Mixi Vivu
              Tourism and Services Company Limited. With a passion for travel
              and exploration, we have built a website together - where
              customers can easily choose a memorable vacation for themselves
              and their loved ones. Mixi Vivu selects cruise ships, hotels and
              partners with airlines to provide the best and most diverse
              services to tourists.
            </p>
          </div>

          <img src={IdeaIcon} alt="" />
        </div>
      </div>

      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${BackgroundAbout})` }}
        ></div>
        <div className="aboutBottom">
          <h1>Why choose us?</h1>
          <p>
          We want visitors to enjoy quality travel services with real-life experiences from Mixi Vivu's own team. We will also introduce videos about yachts, hotels or flights that we have recorded to visitors. From these images, you can choose the most meaningful trips for yourself, your family, friends, and colleagues. We will definitely bring visitors memorable vacations.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
