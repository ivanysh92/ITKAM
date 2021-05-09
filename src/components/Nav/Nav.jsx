import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

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
        <div className={s.item}>
            <NavLink activeClassName = {s.activeLink} to="/users">Users</NavLink>
        </div>
        <div>
            {/*<FriendsContainer/>*/}
        </div>
    </nav>
  )
}

export default Nav;
