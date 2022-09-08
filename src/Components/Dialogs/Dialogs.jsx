import React from "react";
import s from "./Dialogs.module.sass";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

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
        {dialogs.map((dialog, i) => (
          <Dialog key={Math.random()} name={dialog} index={i + 1} />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((message) => (
          <Message key={Math.random()} name={message} />
        ))}
      </div>
    </div>
  );
}

export default Dialogs;
