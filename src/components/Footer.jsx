import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css";
import { colors } from "@mui/material";
import Image from '../assets/footer-logo.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        <div className="footer-logo" style={{backgroundImage: `url(${Image})`}}>
        </div>
        <div className="introduce">
          <ul>
            <li style={{ color: "grey" }}>Introduce</li>
            <li>About us</li>
            <li>Terms and condition</li>
            <li>Privacy policy</li>
            <li>User manual</li>
            <li>Payments</li>
            <li>Contact</li>
            <li>Hotline: +1 (123)-456-6890</li>
            <li>Email: info@halongbay.com</li>
          </ul>
        </div>
        <div className="destination">
          <ul>
            <li style={{ color: "grey" }}>Destination</li>
            <li>Ha Long Bay</li>
            <li>Lan Ha Bay</li>
            <li>Cat Ba island</li>
          </ul>
        </div>
        <div className="cruises">
          <ul>
            <li style={{ color: "grey" }}>Cruises</li>
            <li>Book</li>
            <li>General regulations and notes</li>
            <li>Frequently asked questions</li>
          </ul>
        </div>
      </div>

      <div className="conclusion">
      <p>&copy; 2024 Mixivivu. All rights reserved.</p>
        <div className="socialMedia">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
