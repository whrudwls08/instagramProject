import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/home.js'
import MyPage from './pages/myPage.js'
import ErrorPage from  './pages/error.js'
import NavOptions from './components/home/navOption';
import Login from './pages/login'

function App() {
  let [option] = useState(['home','dm','new','star','heart','myPage'])
  let navigate = useNavigate();
  return (
    <div className="App">
      <Login/>
      {/* <div className="navMenu">
        <div className="navTitle" onClick={()=>{navigate('/home')}}>
          Jostagram
        </div>
        <div className="navInput">
          <input placeholder="검색" id="search"/>
        </div>
        <NavOptions navigate={navigate} option={option}/>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/myPage" element={<MyPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
