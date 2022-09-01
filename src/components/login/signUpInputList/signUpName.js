export const SignUpName= (props) =>{
  return (
    <input className='signUpNameInput' 
        placeholder={props.signListTemp[1]}
        onChange={(e)=>{console.log(props.userserName);
          // console.log(props.userName);
        }}
        />
  )
}