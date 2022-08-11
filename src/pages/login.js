function Login() {
  return(
    <div className="section">
      <div className="loginForm">
        <div className="loginFormTitle">
          <span>Jostagram</span>
        </div>
        <div className="loginFormId">
          <input placeholder="전화번호, 사용자 이름 또는 이메일"/>
        </div>
        <div className="loginFormPw">
          <input placeholder="비밀번호"/>
        </div>
        <button>
          로그인
        </button>
      </div>
    </div>
  )
}
export default Login