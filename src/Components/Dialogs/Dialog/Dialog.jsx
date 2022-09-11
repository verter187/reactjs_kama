import React from "react";
import s from "./Dialog.module.sass";
import { NavLink } from "react-router-dom";

function Dialog({ name, id }) {
  return (
    <div className={s.dialog}>
      <NavLink
        to={`/dialogs/${id}`}
        className={({ isActive }) => (isActive ? s.active : "")}
      >
        {name}
      </NavLink>
    </div>
  );
}

export default Dialog;
