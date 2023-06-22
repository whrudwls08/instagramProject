function LoginButton(props) {
  return (
    <button onClick={() => {
      var copy = JSON.parse([props.login])
      copy = !copy
      // console.log(props.login)
      props.setLogin(copy)
      // console.log(props.login)
    }}>
      로그인
    </button>
  )
}

export default LoginButton