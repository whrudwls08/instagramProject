function MyPagePost() {
  let temp = ["1", "2", "3", "4", "5", "6"]
  return (
    <div className="myPagePosts">
      {
        temp.map((val, index) => {
          return (
            <MyPage val={val} index={index}></MyPage>
          )
        })
      }
    </div>
  )
}
function MyPage(props) {
  console.log(props)
  return (
    <div className={"myPagePost" + props.index}>
      <img src={'./img/zoo' + props.val + '.jpg'}></img>
    </div>
  )
}

export default MyPagePost