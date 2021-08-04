import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status = "Hello my friends"/>
                <div>Fullname: {props.profile.fullName}</div>
                <div>
                    <span>Contacts:</span>
                    <ul>
                        <li>github: {props.profile.contacts.github}</li>
                        <li>vk: {props.profile.contacts.vk}</li>
                        <li>facebook: {props.profile.contacts.facebook}</li>
                        <li>instagram: {props.profile.contacts.instagram}</li>
                        <li>twitter: {props.profile.contacts.twitter}</li>
                        <li>website: {props.profile.contacts.website}</li>
                        <li>youtube: {props.profile.contacts.youtube}</li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default ProfileInfo;
