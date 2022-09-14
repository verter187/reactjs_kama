import React from "react";
import s from "./MyPosts.module.sass";
import Post from "./Post/Post";

function MyPosts({ posts }) {
  // let posts = [
  //   { id: 1, message: "Hi, how are you?", likesCount: "0" },
  //   { id: 2, message: "It is my first post", likesCount: "25" },
  //   { id: 3, message: "Hello, my name is Andrew", likesCount: "17" },
  // ];

  return (
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
}

export default MyPosts;
