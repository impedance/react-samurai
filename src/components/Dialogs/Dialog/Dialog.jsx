import React from "react";
import cn from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

export const Dialog = ({ id, name }) => {
  const path = `/dialogs/${id}`;
  return (
    <li className={cn.dialog}>
      <img
        src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
        alt="ninja"
        width="30"
        height="30"
      />
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};
