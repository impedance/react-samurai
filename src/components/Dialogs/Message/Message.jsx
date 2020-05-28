import React from "react";
import cn from "./Message.module.css";

export const Message = ({ message }) => {
  return <li className={cn.message}>{message}</li>;
};
