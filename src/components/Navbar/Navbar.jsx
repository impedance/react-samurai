import React from "react";
import cn from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={cn.main__nav}>
      <ul>
        <li className={cn.nav__item}>
          <NavLink activeClassName={cn.link_active} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={cn.nav__item}>
          <NavLink activeClassName={cn.link_active} to="/dialogs">
            Dialogs
          </NavLink>
        </li>
        <li className={cn.nav__item}>
          <NavLink activeClassName={cn.link_active} to="/news">
            News
          </NavLink>
        </li>
        <li className={cn.nav__item}>
          <NavLink activeClassName={cn.link_active} to="/music">
            Music
          </NavLink>
        </li>
        <li className={cn.nav__item}>
          <NavLink activeClassName={cn.link_active} to="/settings">
            Settings
          </NavLink>
        </li>
        <li className={cn.nav__item}>
          <NavLink activeClassName={cn.link_active} to="/friends">
            Friends
          </NavLink>
        </li>
        <li className={cn.nav__item}>
          <NavLink activeClassName={cn.link_active} to="/videos">
            Videos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
