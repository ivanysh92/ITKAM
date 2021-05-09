import React from 'react';
import s from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";


const Friends = (props) => {
    let friendsElements = props.friendsData
        .map(userInf => <FriendsItem name={userInf.name} id={userInf.id} icon={userInf.icon}/>)


    return (
        <div className={s.friendsBar}>
            <h2>Friends</h2>
            <div className={s.friendsBarUser}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;
