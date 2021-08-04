import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../Utils/Validate/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your text"}
                       name={"newPostText"}
                       component={Textarea}
                       validate={[requiredField, maxLength10, minLength2]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddMyPostFormReduxForm = reduxForm({
    form: "AddNewPostForm"
})(AddNewPostForm);


const MyPosts = (props) => {

    let myPostElements = props.myPostData
        .map(userPosts => <Post message={userPosts.message} likeCount={userPosts.likeCount}/>)

    // let newPostElement = React.createRef();


    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddMyPostFormReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </div>
    )
}



export default MyPosts;
