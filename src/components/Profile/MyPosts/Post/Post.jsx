import React from 'react';
import classes from './Post.module.css';

const Post = () => {
  return (
    <div>
      <div className={classes.post}>
        <div className={classes.item}>
          <img src="https://www.booksie.com/files/profiles/1/16384_USER_PROFILE_.jpg" alt="" />
            post 1
        </div>
        <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  )
}

export default Post;
