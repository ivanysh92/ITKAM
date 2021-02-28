import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink activeClassName = {s.activeLink} to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName = {s.activeLink} to="/dialogs">Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName = {s.activeLink}  to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName = {s.activeLink} to="/music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName = {s.activeLink} to="/settings">Settings</NavLink>
      </div>
    </nav>
  )
}

export default Nav;
