import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://e7.pngegg.com/pngimages/209/717/png-clipart-round-multicolored-logo-logo-3d-computer-graphics-coreldraw-abstract-hd-background-3d-computer-graphics-company.png' alt="" />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
