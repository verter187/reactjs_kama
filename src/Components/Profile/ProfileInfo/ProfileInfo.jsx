import React from "react";
import s from "./ProfileInfo.module.sass";

const ProfileInfo = () => (
  <div className={s.profileInfo}>
    <div>
      <img
        src="https://i.pinimg.com/originals/2a/50/33/2a503302694b29c18f4b1255b9372440.jpg"
        alt="img1"
      />
    </div>
    <div className={s.descriptionBlock}>avatar + description</div>
  </div>
);

export default ProfileInfo;
