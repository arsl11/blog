import React from 'react'
import Post from './Post'



const MyPosts = (props) => {
    let postElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostText = props.newPostText;
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
      <div className='postBlock'>
          <h3>My posts</h3>
          <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} placeholder='Enter your post'/>
          </div>
          <div>
              <button onClick={ onAddPost }>Add post</button>
          </div>
          <div className='posts'>
              {postElements}
          </div>
      </div>
    );
}

export default MyPosts;