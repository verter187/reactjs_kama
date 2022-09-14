import React from "react";
import s from "./Dialogs.module.sass";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useParams } from "react-router-dom";

function Dialogs() {
  const dialogs = [
    {
      name: "Andrew",
      id: "1",
      messages: [
        "Hi, i am Andrew",
        "Hi, how are you?",
        "It is my first post",
        "Hello, my name is Andrew",
      ],
    },
    {
      name: "Dmitry",
      id: "2",
      messages: [
        "Hi, i am Dmitry",
        "Hi, how are you?",
        "It is my first post",
        "Hello, my name is Andrew",
      ],
    },
    {
      name: "Sasha",
      id: "3",
      messages: [
        "Hi, i am Sasha",
        "Hi, how are you?",
        "It is my first post",
        "Hello, my name is Andrew",
      ],
    },
    {
      name: "Sveta",
      id: "4",
      messages: [
        "Hi, i am Sveta",
        "Hi, how are you?",
        "It is my first post",
        "Hello, my name is Andrew",
      ],
    },
    {
      name: "Valera",
      id: "5",
      messages: [
        "Hi, i am Valera",
        "Hi, how are you?",
        "It is my first post",
        "Hello, my name is Andrew",
      ],
    },
    {
      name: "Victor",
      id: "6",
      messages: [
        "Hi, i am Victor",
        "Hi, how are you?",
        "It is my first post",
        "Hello, my name is Andrew",
      ],
    },
  ];
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
}

export default Dialogs;
