import React from "react";
import cn from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { Dialog } from "./Dialog/Dialog";

export const Dialogs = ({ messages, users }) => {
  const usersElements = users.map(({ name, id }) => {
    return <Dialog key={id} id={id} name={name} />;
  });
  const messageElements = messages.map(({ message, id }) => {
    return <Message message={message} key={id} />;
  });
  return (
    <article className={cn.container}>
      <ul className={cn.dialogs}>{usersElements}</ul>
      <ul className={cn.messages}>{messageElements}</ul>
    </article>
  );
};
