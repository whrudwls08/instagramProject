import NavOptions from "./navOption"

function NavMenu(props) {
  return (
    <div className="navMenu">
      <div className="navTitle"
      //  onClick={()=>{props.navigate('/home')}}
      >
        Jostagram
      </div>
      <div className="navInput">
        <input placeholder="검색" id="search" />
      </div>
      <NavOptions navigate={props.navigate} option={props.option} />
    </div>
  )
}

export default NavMenu