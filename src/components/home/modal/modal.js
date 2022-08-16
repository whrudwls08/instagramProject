function OpenModal(){
    return(
      <div className='modal'>
        <div className="modalTitle">
            <span>새 게시물 만들기</span>
        </div>
        <div className="modalDnDFile">
            <div className="modalImage">
            <img src={'./img/modalImg.png'} alt="optionList" ></img>
            </div>
            <div className="modalText">
              사진과 동영상을 여기에 끌어다 놓으세요.
            </div>
            <div className="modalButton">
              <button>컴퓨터에서 선택</button>
            </div>
        </div>
      </div>
    )
}

export default OpenModal