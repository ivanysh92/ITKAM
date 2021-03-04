import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import Messages from "../../Dialogs/Messages/Messages";

const MyPosts = (props) => {

    const myPostData =  [
        {id: 1, message: "How are you?", likeCount: 15},
        {id: 1, message: "It's my first message", likeCount: 20},
        {id: 1, message: "It's a fail", likeCount: 30},
        {id: 1, message: "Hi, World", likeCount: 25},
        {id: 1, message: "You are welcome", likeCount: 1}
    ];

    let myPostElements = myPostData
        .map(userPosts => <Post message={userPosts.message} likeCount={userPosts.likeCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </div>
    )
}

export default MyPosts;
