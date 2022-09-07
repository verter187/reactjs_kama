import React from "react";
import s from "./Post.module.sass";

function Post({ message, likesCount }) {
  return (
    <div className={s.post}>
      <img
        className={s.post_img}
        src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
        alt="avatar"
      />
      {message}
      <br />
      <br />
      likes: {likesCount}
    </div>
  );
}

export default Post;
