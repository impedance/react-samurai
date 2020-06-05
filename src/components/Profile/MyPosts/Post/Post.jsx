import React from "react";
import cn from "./Post.module.css";
import AvatarLogo from "../../../../images/userava.webp";

export const Post = ({ message, likesCount }) => {
  return (
    <li className={cn.post}>
      <img src={AvatarLogo} alt="avatar" />
      <span className={cn.post_content}>{message}</span>
      <br />
      <span>likes {likesCount}</span>
    </li>
  );
};
