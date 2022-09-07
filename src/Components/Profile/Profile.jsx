import React from "react";
import MyPosts from "./MyPosts";
import s from "./Profile.module.sass";

function Profile() {
  return (
    <div className={s.profile}>
      <div>
        <img
          src="https://i.pinimg.com/originals/2a/50/33/2a503302694b29c18f4b1255b9372440.jpg"
          alt="img1"
        />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
}

export default Profile;
