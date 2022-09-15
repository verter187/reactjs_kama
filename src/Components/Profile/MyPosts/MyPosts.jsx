import React from "react";
import s from "./MyPosts.module.sass";
import Post from "./Post/Post";

const MyPosts = ({ posts }) => (
  <div className={s.postsBlock}>
    My posts
    <div>
      <div>
        <textarea></textarea>
      </div>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
      {posts.map(({ id, message, likesCount }, i) => (
        <Post key={id} message={message} likesCount={likesCount} />
      ))}
    </div>
  </div>
);

export default MyPosts;
