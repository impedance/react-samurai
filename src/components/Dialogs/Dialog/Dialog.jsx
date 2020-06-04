import React from "react";
import cn from "./Dialog.module.css";
import { NavLink } from "react-router-dom";
import NinjaLogo from "../../../images/ninja.png";

export const Dialog = ({ id, name }) => {
  const path = `/dialogs/${id}`;
  return (
    <li className={cn.dialog}>
      <img src={NinjaLogo} alt="ninja" width="30" height="30" />
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};
