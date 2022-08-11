function ErrorPage(){
    return(
        <div className="section">
            <div style={{'display': "flex",'alignItems':'center','flexDirection':'column' }}>
                <h2>페이지를 사용할 수 없습니다.</h2><br/>
                <h4>클릭하신 링크가 잘못되었거나 페이지가 삭제되었습니다.</h4>
            </div>
        </div>
    )
}
export default ErrorPage