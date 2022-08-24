import LoginButton from "../components/login/loginButton"
import SignUp from "../components/login/signUpButton"
import "../css/login.css"

function Login(props) {
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
        <LoginButton login = {props.login} setLogin = {props.setLogin}/>
        <SignUp navigate={props.navigate} signUp={props.signUp} setSignUp={props.setSignUp}/>
      </div>
    </div>
  )
}
export default Login