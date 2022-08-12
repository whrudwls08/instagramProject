import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/home.js'
import MyPage from './pages/myPage.js'
import ErrorPage from  './pages/error.js'
import NavOptions from './components/home/navOption';
import Login from './pages/login'
import NavMenu from './components/home/navMenu';

function App() {
  let [option] = useState(['home','dm','new','star','heart','myPage'])
  let [login, setLogin] = useState('false')
  let navigate = useNavigate();
  return (
    <div className="App">
      {/* {login}
      <Login login={login} setLogin={setLogin}/> */}
      {
        login == true ?
        <>
        <NavMenu navigate={navigate} option={option}></NavMenu>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/myPage" element={<MyPage/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
      </>
      :<Login login={login} setLogin={setLogin}/>
      }
      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/myPage" element={<MyPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
