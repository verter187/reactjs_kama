import s from "./Post.module.sass";

const Post = ({ message, likesCount }) => (
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
export default Post;
