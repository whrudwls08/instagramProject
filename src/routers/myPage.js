function MyPage() {
  return (
    <div className="section">
      <div className="profile">
        <div className="topProfile">
          <div className="profileImg">
            <img src={ require('./../img/myProfile.png') }alt="프로필 사진"></img>
          </div>
          <div className="profileDetails">
            <div className='profileDeatilsTop'>
              <div className='userTagName'>jogyeongjin0801</div>
              <div className='userProfileUpdate'>
                <button>프로필 편집</button>
              </div>
              <div className='configuration'>
                <img src={ require('./../img/configuration.png') } alt="환경설정"></img>
              </div>
            </div>
            <div className='profileDeatilsMiddle'>
              <div className='userPosts'>게시물 0</div>
              <div className='userFollower'>팔로워 4</div>
              <div className='userFollow'>팔로우 10 </div>
            </div>
            <div className='profileDeatilsBottom'>
              나는 조경진!
            </div>
          </div>
        </div>
        <div className="profileMenu">

        </div>
        <div className="myPagePost">
        </div>
      </div>
    </div>
  )
}
export default MyPage;