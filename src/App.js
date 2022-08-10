import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './routers/home.js'
import MyPage from './routers/myPage.js'

function App() {
  let [option] = useState(['home','dm','new','star','heart','myPage'])
  let navigate = useNavigate();
  return (
    <div className="App">
      
      <div className="navMenu">
        <div className="navTitle" onClick={()=>{navigate('/home')}}>
          Jostagram
        </div>
        <div className="navInput">
          <input placeholder="검색" id="search"/>
        </div>
        <div className="navOption">
          {
            option.map((val, index)=>{
              return(
                <NavOption val={val} index={index} navigate={navigate} />
              )
            })   
          }
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/myPage" element={<MyPage/>}/>
        {/* <Route path="/cart" element={<div></div>}/>
        <Route path="/cart" element={<div></div>}/>
        <Route path="/cart" element={<div></div>}/> */}
      </Routes>
    </div>
  );
}
function NavOption(props){
  return(
    <div className={'navOption' + props.val +' subOption'} onClick ={()=>{props.navigate('/'+props.val)}} >
      <img src={'./img/'+props.val+'.png'} alt="optionList" ></img>
    </div> 
  )
}

export default App;
