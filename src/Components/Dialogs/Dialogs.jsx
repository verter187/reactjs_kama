import s from "./Dialogs.module.sass";
import React, { useState } from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useParams } from "react-router-dom";

const Dialogs = ({ state }) => {
  const params = useParams(),
    userId = parseInt(params.userId);

  let messages = [];
  if (Number.isInteger(userId)) {
    messages = state.dialogs[userId - 1].messages;
  }

  const [newMessages, setNewMessages] = useState(messages);
  console.log(777, messages);
  console.log(888, newMessages);
  const newMessageElement = React.createRef();

  const addMessage = () => {
    const newMessage = {
      id: Math.random(),
      message: newMessageElement.current.value,
    };
    setNewMessages([...newMessages, newMessage]);
    newMessageElement.current.value = "";
  };

  return (
    <div className={s.dialogsbox}>
      <div className={s.dialogs}>
        {state.dialogs.map((dialog, i) => (
          <Dialog key={dialog.id} {...dialog} />
        ))}
      </div>

      <div className={s.messages}>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <button onClick={addMessage}>Add message</button>

        {newMessages.map((message) => (
          <Message key={message.id} name={message.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
