import s from "./MyPosts.module.sass";
import Post from "./Post/Post";

const MyPosts = ({ posts }) => {
  const postElements = posts.map((post, i) => <Post key={post.id} {...post} />);

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
