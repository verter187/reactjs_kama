import s from "./Message.module.sass";

const Message = ({ name }) => <div className={s.messages}>{name}</div>;

export default Message;
