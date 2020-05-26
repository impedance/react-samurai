import React from "react";
import cn from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = ({ id, name }) => {
  const path = `/dialogs/${id}`;
  return (
    <li className={cn.dialog}>
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};
const Message = ({ message }) => {
  return <li className={cn.message}>{message}</li>;
};
export const Dialogs = () => {
  return (
    <article className={cn.container}>
      <ul className={cn.dialogs}>
        <Dialog id={1} name="Dimych" />
        <Dialog id={2} name="Sveta" />
        <Dialog id={3} name="Andrey" />
        <Dialog id={4} name="Sergey" />
        <Dialog id={5} name="Yulia" />
        <Dialog id={6} name="Masha" />
        <Dialog id={7} name="Simon" />
      </ul>
      <ul className={cn.messages}>
        <Message message="Hello" />
        <Message message="Fine thank you" />
        <Message message="Heloo im fine" />
      </ul>
    </article>
  );
};
