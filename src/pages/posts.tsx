import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { maxLengthCreator } from "../utils/validators/validators";
import { useAppDispatch } from '../hoc/useAppDispatch';
import { useAppSelector } from '../hoc/useAppSelector';
import { addPost } from '../store/postsSlice';


const maxLength10 = maxLengthCreator(10);

type Inputs = {
  message: string
}

const AddPostForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => props.onSubmit(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        placeholder='Enter your post'
        name='message'
        {...register("message", { required: true })}
      />
      {errors.message && <span style={{ color: "red" }}>This field is required</span>}
      <input type='submit' />
    </form>
  );
}

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);

  let postElements =
    posts.map(p => <Post key={p} message={p.message} likesCount={p.likesCount} />)

  let addNewPost = (values: Inputs) => {
    dispatch(addPost(values.message));
  }

  return (
    <div>
      <h3>My posts</h3>
      <AddPostForm onSubmit={addNewPost} />
      <div>
        {postElements}
      </div>
    </div>
  );
}

const Post = (props) => (
  <div>
    <div>{props.message}</div>
    <div>{props.likesCount}</div>
  </div>
);

export default Posts;