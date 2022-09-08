import React from "react";
import s from "./Dialog.module.sass";
import { NavLink } from "react-router-dom";

function Dialog({ name, index }) {
  return (
    <div className={s.dialog}>
      <NavLink
        to={`/dialogs/${index}`}
        className={({ isActive }) => (isActive ? s.active : "")}
      >
        {name}
      </NavLink>
    </div>
  );
}

export default Dialog;
