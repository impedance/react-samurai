import React from "react";
import cn from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

export const Dialog = ({ id, name }) => {
  const path = `/dialogs/${id}`;
  return (
    <li className={cn.dialog}>
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};
