import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.sass";

function Navbar({ menuItems }) {
  return (
    <div className={s.navbar}>
      {menuItems.map((item) => {
        let name = Object.keys(item)[0];
        return (
          <div key={Math.random()} className={s.item}>
            <NavLink to={`/${name}`}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
