import { NavLink } from "react-router-dom";
import s from "./NavMenu.module.sass";

const NavMenu = ({ item }) => {
  let name = Object.keys(item)[0];

  return (
    <div className={s.item}>
      <NavLink
        to={`/${name}`}
        className={({ isActive }) => (isActive ? s.activeLink : "")}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </NavLink>
    </div>
  );
};

export default NavMenu;
