import React from "react";
import s from "./Dialogs.module.sass";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useParams } from "react-router-dom";

const Dialogs = ({ dialogs }) => {
  const params = useParams(),
    userId = parseInt(params.userId);

  let messages = [];
  if (Number.isInteger(userId)) {
    messages = dialogs[userId - 1].messages;
  }

  return (
    <div className={s.dialogsbox}>
      <div className={s.dialogs}>
        {dialogs.map((dialog, i) => (
          <Dialog key={dialog.id} name={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((message) => (
          <Message key={Math.random()} name={message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
