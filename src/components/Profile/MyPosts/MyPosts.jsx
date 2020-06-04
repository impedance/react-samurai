import React, { useState } from "react";
import cn from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = ({ posts, addPost }) => {
  const [text, setText] = useState("");

  const postElements = posts.map(({ message, likesCount, id }) => {
    return <Post message={message} key={id} likesCount={likesCount} />;
  });
  const onAddPost = () => {
    addPost(text);
    setText("");
  };

  return (
    <div className={cn.container}>
      <h3>My posts</h3>
      <div className={cn.posts_form}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          name=""
          cols="30"
          rows="5"
          value={text}
        ></textarea>
        <br />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <ul className={cn.posts_list}>{postElements}</ul>
    </div>
  );
};
