import React from "react";
import s from "./Dialogs.module.sass";
function Dialogs(props) {
  const dialogs = ["Andrew", "Dmitry", "Sasha", "Sveta", "Valera", "Victor"];
  const messages = [
    "Hi, how are you?",
    "It is my first post",
    "Hello, my name is Andrew",
  ];

  return (
    <div className={s.dialogsbox}>
      <div className={s.dialogs}>
        {dialogs.map((dialog) => (
          <div
            className={s.dialog + " " + (dialog === "Sasha" ? s.active : "")}
          >
            {dialog}
          </div>
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((message) => (
          <div className={s.message}>{message}</div>
        ))}
      </div>
    </div>
  );
}

export default Dialogs;
