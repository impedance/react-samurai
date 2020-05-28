import React from "react";
import cn from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div>
      <h2>Profile</h2>
      <div className={cn.profile_background}>
        <img
          src="https://www.pixelstalk.net/wp-content/uploads/2016/04/Nature-water-wallpaper-widescreen.jpg"
          width="100"
          height="100"
        />
      </div>
      <div className={cn.description}>ava + description</div>
    </div>
  );
};
