import React from "react";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={classes.main_nav}>
      <ul>
        <li className={classes.nav_item}>
          <a href="/profile">Profile</a>
        </li>
        <li className={classes.nav_item}>
          <a href="/dialogs">Messages</a>
        </li>
        <li className={classes.nav_item}>
          <a href="#">News</a>
        </li>
        <li className={classes.nav_item}>
          <a href="#">Music</a>
        </li>
      </ul>
    </nav>
  );
};
