import React from "react";
import MyPosts from "./MyPosts";
import s from "./Profile.module.sass";
import ProfileInfo from "./ProfileInfo";

function Profile({ posts }) {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
}

export default Profile;
