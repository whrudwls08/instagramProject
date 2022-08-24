import { useState } from "react";
import { SignUpName, SignUpPhone } from "./signUpInputList";
// import SignUpPhone from "./signUpInputList/signUpPhone";
/**
 * 
 * @param {*} props  val, index, signList[] 회원가입 정보 정보 값을 가져온다
 * @returns 
 */
function SignUpInput(props){
  return(
    <>
      <SignUpPhone signListTemp={props.signListTemp}/>
      <SignUpName signListTemp={props.signListTemp}/> 
      {/* <SignUpPhone signListTemp={props.signListTemp[0]}/>
      <SignUpPhone signListTemp={props.signListTemp[0]}/> */}
    </>
  )
}
export default SignUpInput