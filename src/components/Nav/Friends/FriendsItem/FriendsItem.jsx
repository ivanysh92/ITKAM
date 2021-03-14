import React from 'react';
import s from './FriendsItem.module.css';
import {NavLink} from "react-router-dom";


const FriendsItem = (props) => {

    let path = "/user/" + props.id;

    return (
        <div className={s.friendsBar}>
            <div>
                <NavLink to={path}>
                    <img className={s.userIcon} src={props.icon} alt="User avatar"/>
                </NavLink>
                <div>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default FriendsItem;
