const Post = (props) => {

    return(
        <div className='post'>
            <div className='message'>{props.message}</div>
            <div className='likesCount'>{props.likesCount}</div>
        </div>
    );
}

export default Post