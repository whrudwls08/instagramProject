import './App.css';
import { useState } from 'react';

function App() {
  let [option] = useState(['home','dm','new','star','heart','myPage'])
  let [users] = useState(['조경진','김종국','유재석','강호동'])
  return (
    <div className="App">
      
      <div className="navMenu">
        <div className="navTitle">
          Jostagram
        </div>
        <div className="navInput">
          <input placeholder="검색" id="search"/>
        </div>
        <div className="navOption">
          {
            option.map((val, index)=>{
              return(
                <NavOption val={val} index={index}/>
              )
            })   
          }
        </div>
      </div>
        <div className="section">
          <div className='usersPost'>
            <div className='userStore'> 
              <div className='userStoreList'>
              {
                users.map((val, index)=>{
                  return(
                    <UserStoreList val={val} index={index}/>
                  )
                })
              }
              </div>
            </div>
            <div className='userPost'>
            </div>
          </div>
          <div className="newFriend">

          </div>
        </div>
    </div>
  );
}
function NavOption(props){
  return(
    <div className={'navOption' + props.val +' subOption'} >
      <img src={'./img/'+props.val+'.png'} alt="optionList" onClick={()=>{
      }}></img>
    </div> 
  )
}

function UserStoreList(props){
  return(
    <div className='userStoreListuserList'>
      <div className={'userStoreListuserList'+props.index+' userImage'}>
      </div>
      <div className='userStoreListName'>
        <span>{props.val}</span>
      </div>
    </div>
  )
}
export default App;
