import React, { useState } from "react";
import s from "./MyPosts.module.sass";
import Post from "./Post/Post";

const MyPosts = ({ posts }) => {
  const [newPosts, setNewPosts] = useState(posts);

  const postElements = newPosts.map((post, i) => (
    <Post key={post.id} {...post} />
  ));
  let newPostElement = React.createRef();

  const addPost = () => {
    const newPost = {
      id: Math.random(),
      message: newPostElement.current.value,
      likesCount: Math.floor(Math.random() * 10),
    };
    setNewPosts([...newPosts, newPost]);
    newPostElement.current.value = "";
  };

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
