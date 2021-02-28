import React from 'react';
import classes from './Post.module.css';



const Post = (props) => {
 return (
    <div>
      <div className={classes.post}>
        <div className={classes.item}>
          <img src="https://www.booksie.com/files/profiles/1/16384_USER_PROFILE_.jpg" alt="" />
            {props.message}
        </div>
        <div>
          <span>Like = {props.likeCount}</span>
        </div>
      </div>
    </div>
  )
}

export default Post;
