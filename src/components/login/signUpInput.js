function SignUpInput(props){
  console.log(props.val)
  return(
    <input className={"signUpInput"+Object.keys(props.signList)[props.index]}></input>
  )
}
export default SignUpInput