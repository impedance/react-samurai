import React from "react";
import cn from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div className={cn.posts_form}>
        <textarea name="" id="" cols="10" rows="3"></textarea>
        <button>Add post</button>
      </div>
      <ul className={cn.posts_list}>
        <Post message="Hi how are you" likesCount={10} />
        <Post message="Hello im fine" likesCount={3} />
        <Post message="Post 3" />
        <Post message="Post 4" />
      </ul>
    </div>
  );
};
