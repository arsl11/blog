import React from 'react'
import Post from './Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter your post' name='newPostBody' component={Textarea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const AddPostFormRedux = reduxForm({form: 'addPostFormRedux'})(AddPostForm);

const MyPosts = (props) => {
    let postElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }

    return(
        <div className='postBlock'>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className='posts'>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;