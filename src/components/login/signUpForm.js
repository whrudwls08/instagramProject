import { useState } from "react"
import "./../../css/signUp.css"
import SignUpInput from "./signUpInput"

function SignUpForm() {
  var [signList] = useState({"phone":"휴대폰 번호 또는 이메일 주소","name":"성명","userId":"사용자 이름","userPass":"비밀번호"})

  return (

    /**
     * 1. 로고 
     * 2. 회원가입 영역 1. 휴대폰 번호 2. 성명 3. 사용자 이름 4 비밀번호 
     * 3.가입 버튼
     * 4. 계정이 있으신가요?
     */
    <div className="section">
      <div className="signUpForm">
        <div className="loginFormTitle">
          <span>Jostagram</span>
        </div>
        <div>
        {
          // var signList = 
          signList.map((val, index) => {
            return (
              <SignUpInput val={val} index={index} signList={signList}/>
            )
          })
        }
        </div>
        {/* <div className="loginFormId">
          <input placeholder="전화번호, 사용자 이름 또는 이메일" />
        </div>
        <div className="loginFormPw">
          <input placeholder="비밀번호" />
        </div> */}
      </div>
    </div>
  )
}
export default SignUpForm