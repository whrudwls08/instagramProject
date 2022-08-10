import { useState } from 'react';
// import './../App.css'

function Home(props){
    let [users] = useState(['조경진','김종국','유재석','강호동'])
    return(
        <div className="section">
          <div className="usersPost">
            <div className="userStore">
              <div className="userStoreList">
                {users.map((val, index) => {
                  return <UserStoreList val={val} index={index} />;
                })} 
              </div>
            </div>
            <div className="userPost"></div>
          </div>
          <div className="newFriend"></div>
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

  export default Home;