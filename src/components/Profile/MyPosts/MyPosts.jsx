import React from "react";
import cn from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = ({ updateNewPostText, posts, newPostText, addPost }) => {
  const postElements = posts.map(({ message, likesCount, id }) => {
    return <Post message={message} key={id} likesCount={likesCount} />;
  });
  const newPostElement = React.createRef();
  const onAddPost = () => {
    addPost();
  };

  return (
    <div className={cn.container}>
      <h3>My posts</h3>
      <div className={cn.posts_form}>
        <textarea
          onChange={(e) => updateNewPostText(e.target.value)}
          ref={newPostElement}
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
