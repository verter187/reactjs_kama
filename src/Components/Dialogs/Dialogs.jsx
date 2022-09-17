import s from "./Dialogs.module.sass";

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

  return (
    <div className={s.dialogsbox}>
      <div className={s.dialogs}>
        {state.dialogs.map((dialog, i) => (
          <Dialog key={dialog.id} {...dialog} />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((message) => (
          <Message key={`${userId}_${message.id}`} name={message.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
