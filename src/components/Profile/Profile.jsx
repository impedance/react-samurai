import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = ({ posts, addPost, updateNewPostText, newPostText }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        addPost={addPost}
        newPostText={newPostText}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};
