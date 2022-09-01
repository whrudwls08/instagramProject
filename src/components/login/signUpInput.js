import { useState } from "react";
import { SignUpName } from "./signUpInputList/signUpName";
import { SignUpPhone } from "./signUpInputList/signUpPhone";
import { SignUpUserId } from "./signUpInputList/signUpUserId";
import { SignUpUserPass } from "./signUpInputList/signUpUserPass";
import { useDispatch } from "react-redux";
import {addUser} from "../../store/slices/loginData";
/**
 * 
 * @param {*} props  val, index, signList[] 회원가입 정보 정보 값을 가져온다
 * @returns 
 */
function SignUpInput(props){
  let [userPhone, setUserPhone] = useState();
  let [userId, setUserId] = useState();
  let [userPass, setUserPass] = useState();
  let [userName, setUserName] = useState();
  let dispatch = useDispatch();
  dispatch(addUser({id : 1, name : 'Grey Yordan', count : 1}))
  return(
    <>
      <SignUpPhone signListTemp={props.signListTemp} userPhone={userPhone} setUserPhone={setUserPhone}/>
      <SignUpName signListTemp={props.signListTemp} userId={userId} setUserId={setUserId}/> 
      <SignUpUserId signListTemp={props.signListTemp} userPass={userPass} setUserPass={setUserPass}/>
      <SignUpUserPass signListTemp={props.signListTemp} userName={userName} setUserName={setUserName}/> 
      {/* <SignUpPhone signListTemp={props.signListTemp[0]}/>
      <SignUpPhone signListTemp={props.signListTemp[0]}/> */}
    </>
  )
}
export default SignUpInput