import { NavLink } from "react-router-dom";
import s from "./NavMenu.module.sass";

const NavMenu = ({ item }) => (
  <div className={s.item}>
    <NavLink
      to={`/${item.name}`}
      className={({ isActive }) => (isActive ? s.activeLink : "")}
    >
      {item.name}
    </NavLink>
  </div>
);

export default NavMenu;
