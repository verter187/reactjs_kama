import s from "./Profile.module.sass";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = ({ state }) => (
  <div className={s.profile}>
    <ProfileInfo />
    <MyPosts posts={state.posts} />
  </div>
);

export default Profile;
