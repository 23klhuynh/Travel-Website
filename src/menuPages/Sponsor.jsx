import React from "react";
import "../styles/Sponsor.css";
import Logo1 from "../assets/AmbassadorLogo.png";
import Logo2 from "../assets/EmperorLogo.png";
import Logo3 from "../assets/HeritageLogo.png";
import Logo4 from "../assets/MekoLogo.jpeg";
import Logo5 from "../assets/ParadiseLogo.png";
import Logo6 from "../assets/images.jpeg";
import Logo7 from "../assets/roseLogo.png";

function Sponsor() {
  return (
    <div className="sponsor-container">
      <div className="information">
        <h1>Partners Along the Big Cruise Line</h1>

        <p>
          Leading partners with reputable cruise lines: Exclusive offers just
          for you
        </p>
      </div>

      <div className="sponsor">
        <img src={Logo1} alt="Ambassador Logo" />
        <img src={Logo2} alt="Emperor Logo" />
        <img src={Logo3} alt="Heritage Logo" />
        <img src={Logo4} alt="Meko Logo" />
        <img src={Logo5} alt="Paradise Logo" />
        <img src={Logo6} alt="Cruise Logo" />
        <img src={Logo7} alt="Rose Logo" />
      </div>
    </div>
  );
}

export default Sponsor;
