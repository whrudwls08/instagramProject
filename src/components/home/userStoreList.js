function UserStoreList(props) {
  return (
    <div className='userStoreListuserList'>
      <div className={'userStoreListuserList' + props.index + ' userImage'}>
        <img src={'./img/' + props.val + '.png'}></img>
      </div>
      <div className='userStoreListName'>
      </div>
      <span>{props.val}</span>
    </div>
  )
}

export default UserStoreList;