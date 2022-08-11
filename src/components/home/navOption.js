function NavOptions(props){
    return(
        <div className="navOption">
        {
          props.option.map((val, index)=>{
            return(
              <NavOption val={val} index={index} navigate={props.navigate} />
            )
          })   
        }
      </div> 
    )
  }
  
  function NavOption(props){
      return(
        <div className={'navOption' + props.val +' subOption'} onClick ={()=>{props.navigate('/'+props.val)}} >
          <img src={'./img/'+props.val+'.png'} alt="optionList" ></img>
        </div>
    )
}
export default NavOptions;