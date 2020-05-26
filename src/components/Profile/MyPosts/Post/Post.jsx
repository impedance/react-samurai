import React from "react";
import cn from "./Post.module.css";

export const Post = ({ message, likesCount }) => {
  return (
    <li className={cn.post}>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GsBCU0ZsTBaCcAzTjpWU0QHaHa%26pid%3DApi&f=1" />
      <span className={cn.post_content}>{message}</span>
      <br />
      <span>likes {likesCount}</span>
    </li>
  );
};
