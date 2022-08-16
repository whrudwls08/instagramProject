import { useState } from 'react';
import UserStoreList from '../components/home/userStoreList'
// import './../App.css'

function Home(props){
    let [users] = useState(['조경진','김종국','유재석','강호동','유재석',])
    return(
        <div className="section">
          <div className="usersPost">
            <div className="userStore">
              <div className="userStoreList">
                {
                users.map((val, index) => {
                  return <UserStoreList val={val} index={index} />;
                })
                } 
              </div>
            </div>
            <div className="userPost"></div>
          </div>
          <div className="newFriend"></div>
        </div>
    )
}

  export default Home;