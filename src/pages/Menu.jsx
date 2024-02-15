import React from "react";
import "../styles/Menu.css";
import { MenuList } from "../helpers/menuList";
import MenuItem from "../components/MenuItem";
import Sponsor from "../menuPages/Sponsor";

function Menu() {
  return (
    <>
      <div className="menu">
        <h1 className="menuTitle">Reservations</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
                info={menuItem.info}
              />
            );
          })}
        </div>
      </div>
      <Sponsor/>
      
      
    </>
  );
}

export default Menu;
