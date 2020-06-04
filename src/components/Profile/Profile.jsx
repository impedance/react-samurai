import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = ({ posts, addPost }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost} />
    </div>
  );
};
