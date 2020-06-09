import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = ({ dispatch, posts, newPostText }) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} dispatch={dispatch} newPostText={newPostText} />
    </div>
  );
};
