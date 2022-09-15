import s from "./Profile.module.sass";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = ({ posts }) => (
  <div className={s.profile}>
    <ProfileInfo />
    <MyPosts posts={posts} />
  </div>
);

export default Profile;
