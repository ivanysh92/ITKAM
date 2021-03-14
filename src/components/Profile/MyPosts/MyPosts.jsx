import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
/*import Messages from "../../Dialogs/Messages/Messages";*/

const MyPosts = (props) => {

    let myPostElements = props.postData
        .map(userPosts => <Post message={userPosts.message} likeCount={userPosts.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

     let onPostChange = () =>{
         let text = newPostElement.current.value;
         props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value = {props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </div>
    )
}

export default MyPosts;
