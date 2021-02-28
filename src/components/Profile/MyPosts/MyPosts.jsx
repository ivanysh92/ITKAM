import React from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
        My posts
      <div>
          <textarea></textarea>
          <button>Add post</button>
      </div>
        <Post message = "How are you?"  likeCount = "15"/>
        <Post message = "It's my first messsage" likeCount = "20"/>
        <Post message = "It's a fail" likeCount = "30"/>
        <Post message = "Hi, World" likeCount = "25"/>
        <Post message = "You are welcome" likeCount = "1"/>
      </div>
  )
}

export default MyPosts;
