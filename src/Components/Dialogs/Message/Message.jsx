import React from "react";
import s from "./Message.module.sass";

function Message({ name }) {
  return <div className={s.messages}>{name}</div>;
}

export default Message;
