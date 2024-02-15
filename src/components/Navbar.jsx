import React, { useState } from "react";
import Logo from "../assets/Logo-Halongbaycruise.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const handleClick = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftside" id={openLinks ? "open" : "close"}>
        <img src={Logo}></img>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/book">Book Tour</Link>
          <Link to="/explores">Explores</Link>
          <Link to="/about">Blog</Link>
        </div>
      </div>
      <div className="rightside">
        <Link to="/">Home</Link>
        <Link to="/book">Book Tour</Link>
        <Link to="/explores">Explores</Link>
        <Link to="/about">Blog</Link>
        <button onClick={handleClick}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
