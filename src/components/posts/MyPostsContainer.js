import React from 'react'
import {addPostActionCreator} from "../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getPosts} from "../../redux/selectors/myposts-selectors";

let mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;