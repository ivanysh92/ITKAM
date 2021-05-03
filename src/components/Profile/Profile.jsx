import React from 'react';
/*import classes from './Profile.module.css';*/
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts'
import {addPost} from "../../Redux/store";


const Profile = (props) => {

     return (
        <div>
            <ProfileInfo/>
            <MyPosts postData = {props.postData}
                     dispatch = {props.dispatch}
                     newPostText = {props.newPostText}/>
        </div>
    )
}

export default Profile;
