import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";

export const MyPostsContainer = ({ store }) => {
  const state = store.getState();
  const addPost = () => {
    store.dispatch(addPostActionCreator());
  };
  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};
