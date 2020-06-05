import React from "react";
import cn from "./ProfileInfo.module.css";
import ProfileImage from "../../../images/profileNature.jpg";

export const ProfileInfo = () => {
  return (
    <div>
      <h2>Profile</h2>
      <div className={cn.profile_background}>
        <img src={ProfileImage} alt="profileImg" width="100" height="100" />
      </div>
      <div className={cn.description}>ava + description</div>
    </div>
  );
};
