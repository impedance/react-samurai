import React from "react";
import cn from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = ({ posts }) => {
  const postElements = posts.map(({ message, likesCount, id }) => {
    return <Post message={message} id={id} likesCount={likesCount} />;
  });
  return (
    <div className={cn.container}>
      <h3>My posts</h3>
      <div className={cn.posts_form}>
        <textarea name="" id="" cols="10" rows="3"></textarea>
        <br />
        <button>Add post</button>
      </div>
      <ul className={cn.posts_list}>{postElements}</ul>
    </div>
  );
};
