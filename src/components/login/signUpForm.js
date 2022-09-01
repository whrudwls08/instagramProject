import { useState } from "react"
import "./../../css/signUp.css"
import SignUpFormButton from "./signUpFormButton"
import SignUpInput from "./signUpInput"

function SignUpForm(props) {
  var [signList] = useState([{"phone":"휴대폰 번호 또는 이메일 주소"},{"name":"성명"},{"userId":"사용자 이름"},{"userPass":"비밀번호"}])
  var [signListTemp] = useState({"0":"휴대폰 번호 또는 이메일 주소","1":"성명","2":"사용자 이름","3":"비밀번호"})
  // var 
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
           <span>instagram</span>
         </div>
         <div>
          <SignUpInput signListTemp={signListTemp}/>
         </div>
         <SignUpFormButton/>
       </div>
     </div>
  )
}
export default SignUpForm