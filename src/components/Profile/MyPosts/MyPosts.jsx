import React, { useState } from "react";
import cn from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = ({ posts }) => {
  const [text, setText] = useState("");
  const [myPosts, setMyPosts] = useState(posts);

  const postElements = myPosts.map(({ message, likesCount, id }) => {
    return <Post message={message} key={id} likesCount={likesCount} />;
  });
  const newPostElement = React.createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    setMyPosts([...myPosts, { id: 1, message: text, likesCount: 100 }]);
  };

  return (
    <div className={cn.container}>
      <h3>My posts</h3>
      <div className={cn.posts_form}>
        <textarea
          ref={newPostElement}
          onChange={(e) => setText(e.target.value)}
          name=""
          cols="30"
          rows="5"
        >
          {text}
        </textarea>
        <br />
        <button onClick={addPost}>Add post</button>
      </div>
      <ul className={cn.posts_list}>{postElements}</ul>
    </div>
  );
};
