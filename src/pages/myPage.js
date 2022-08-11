import MyPagePost from '../components/myPage/myPagePost';
import ProfileMenu from '../components/myPage/topProfile/profileMenu';
import TopProfile from './../components/myPage/topProfile'

function MyPage() {
  return (
    <div className="section">
      <div className="profile">
        <TopProfile/>
        <ProfileMenu/>
        <MyPagePost/>
      </div>
    </div>
  )
}
export default MyPage;