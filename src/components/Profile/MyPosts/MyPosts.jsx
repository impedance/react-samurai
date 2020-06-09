import React from "react";
import cn from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../state";

export const MyPosts = ({ posts, dispatch, newPostText }) => {
  const postElements = posts.map(({ message, likesCount, id }) => {
    return <Post message={message} key={id} likesCount={likesCount} />;
  });
  const onAddPost = () => {
    dispatch(addPostActionCreator());
  };
  const onPostChange = (event) => {
    const action = updateNewPostTextActionCreator(event.target.value);
    dispatch(action);
  };

  return (
    <div className={cn.container}>
      <h3>My posts</h3>
      <div className={cn.posts_form}>
        <textarea
          onChange={onPostChange}
          name=""
          cols="30"
          rows="5"
          value={newPostText}
        />
        <br />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <ul className={cn.posts_list}>{postElements}</ul>
    </div>
  );
};
