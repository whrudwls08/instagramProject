function MyPagePost() {
  let temp = ["1", "2", "3", "4", "5", "6"]
  return (
    <div className="myPagePosts">
      {
        temp.map((val, index) => {
          return (
            <MyPage val={val} index={index} key={val}></MyPage>
          )
        })
      }
    </div>
  )
}
function MyPage(props) {
  return (
    <div className={"myPagePost" + props.index} key="{props.key}">
      <img src={'./img/zoo' + props.val + '.jpg'}></img>
    </div>
  )
}

export default MyPagePost