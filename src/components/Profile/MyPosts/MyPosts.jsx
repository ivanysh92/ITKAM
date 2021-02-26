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
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
  )
}

export default MyPosts;
