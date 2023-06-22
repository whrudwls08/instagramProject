import OpenModal from './modal/modal'
import { useState } from 'react';

function NavOptions(props) {
  let [modal, setModal] = useState(false)
  return (
    <div className="navOption">
      {
        props.option.map((val, index) => {
          return (
            <NavOption key={"NavOption" + val} val={val} index={index} navigate={props.navigate} />
          )
        })
      }
      {
        modal === true ? <OpenModal /> : null
      }
      {/* <button onClick={()=>{
          console.log(modal);
          setModal(!modal)
        }}></button> */}
    </div>
  )
}

function NavOption(props) {
  return (
    <div className={'navOption' + props.val + ' subOption'} onClick={() => {
      if (props.val !== 'new') {
        props.navigate('/' + props.val)
      }
    }} >
      <img src={'./img/' + props.val + '.png'} alt="optionList" onClick={() => {
        props.val === 'new' ? <OpenModal /> : console.log('er');
      }} ></img>
    </div>
  )
}
export default NavOptions;