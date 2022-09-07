import React from "react";
import s from "./MyPosts.module.sass";
import Post from "./Post/Post";

function MyPosts() {
  let posts = [
    { message: "Hi, how are you?", likesCount: "0" },
    { message: "It is my first post", likesCount: "24" },
    { message: "Hello, my name is Andrew", likesCount: "17" },
  ];

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {posts.map(({ message, likesCount }, i) => (
          <Post key={Math.random()} message={message} likesCount={likesCount} />
        ))}
      </div>
    </div>
  );
}

export default MyPosts;
