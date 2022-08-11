import ProfileDeatilsMiddle from './topProfile/profileDeatilsMiddle'

function TopProfile() {
  return (
    <div className="topProfile">
      <div className="profileImg">
        <img src={require('./../../img/myProfile.png')} alt="프로필 사진"></img>
      </div>
      <div className="profileDetails">
        <div className='profileDeatilsTop'>
          <div className='userTagName'>jogyeongjin0801</div>
          <div className='userProfileUpdate'>
            <button>프로필 편집</button>
          </div>
          <div className='configuration'>
            <img src={require('./../../img/configuration.png')} alt="환경설정"></img>
          </div>
        </div>
        <ProfileDeatilsMiddle/>
        <div className='profileDeatilsBottom'>
          나는 조경진!
        </div>
      </div>
    </div>
  )
}
export default TopProfile