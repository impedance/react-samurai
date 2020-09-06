import React from 'react';
import cn from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Friends } from "../Friends/Friends";
import { connect } from 'react-redux'

const navbarItems = [ 
  {
    title: 'Profile',
    path: '/profile'
  },
  {
    title: 'Dialogs',
    path: '/dialogs'
  },
  {
    title: 'News',
    path: '/news'
  },
  {
    title: 'Music',
    path: '/music'
  },
  {
    title: 'Settings',
    path: '/settings'
  },
  {
    title: 'Videos',
    path: '/videos'
  },
 ]

export const NavbarContainer = ({ friends }) => {
  
    return (
      <nav className={cn.main__nav}>
        <ul>
          {navbarItems.map(item => {
            return (

          <li className={cn.nav__item}>
            <NavLink activeClassName={cn.link_active} to={item.path}>
            {item.title}
            </NavLink>
          </li>
            )
          })}
          <li className={cn.nav__item}>
            <a href="/friends">Friends</a>
            <Friends friends={friends} />
          </li>
        </ul>
      </nav>
    );
 
}

const mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  }
}

export const Navbar = connect(mapStateToProps, null)(NavbarContainer)