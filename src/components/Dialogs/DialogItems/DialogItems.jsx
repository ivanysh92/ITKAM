import React from "react";
import s from './DialogItems.module.css';
import {NavLink} from "react-router-dom";


const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogsItems}>
            <div>
                <img className= {s.userIcon} src= {props.icon} alt="User avatar" />
            </div>
            <div className={s.dialog + " " + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>

        </div>
    )
}

export default DialogItems;