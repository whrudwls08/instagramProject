function SignUp(props){
  return(
    <button onClick={()=>{
      props.setSignUp(true)
      }}>
      회원가입
    </button>
  )
}

export default SignUp;