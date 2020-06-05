import React from "react";
import cn from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { Dialog } from "./Dialog/Dialog";

export const Dialogs = ({
  newMessageText,
  messages,
  users,
  addMessage,
  updateNewMessageText,
}) => {
  const usersElements = users.map(({ name, id }) => {
    return <Dialog key={id} id={id} name={name} />;
  });
  const messageElements = messages.map(({ message, id }) => {
    return <Message message={message} key={id} />;
  });
  const sendMessage = () => {
    addMessage();
  };
  return (
    <section className={cn.container}>
      <section className={cn.dialogs}>
        <ul className={cn.dialogs_list}>{usersElements}</ul>
      </section>
      <section className={cn.messages}>
        <ul className={cn.messages_list}>{messageElements}</ul>
        <textarea
          onChange={(e) => updateNewMessageText(e.target.value)}
          className={cn.message_area}
          name=""
          id=""
          cols="30"
          rows="5"
          value={newMessageText}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </section>
    </section>
  );
};
