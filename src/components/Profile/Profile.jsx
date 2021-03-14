import React from 'react';
/*import classes from './Profile.module.css';*/
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts'
import {addPost} from "../../Redux/state";


const Profile = (props) => {

     return (
        <div>
            <ProfileInfo/>
            <MyPosts postData = {props.postData}
                     addPost = {props.addPost}
                     newPostText = {props.newPostText}
                     updateNewPostText = {props.updateNewPostText}/>
        </div>
    )
}

export default Profile;
