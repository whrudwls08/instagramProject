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

  export default UserStoreList;