import s from "./Navbar.module.sass";
import NavMenu from "./NavMenu";

const Navbar = ({ menuItems }) => (
  <div className={s.navbar}>
    {menuItems.map((item) => (
      <NavMenu key={item.id} item={item} />
    ))}
  </div>
);
export default Navbar;
