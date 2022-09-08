import React from "react";
import s from "./Message.module.sass";
import { NavLink } from "react-router-dom";

function Message({ name }) {
  return <div className={s.messages}>{name}</div>;
}

export default Message;
