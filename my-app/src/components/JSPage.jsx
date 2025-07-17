import MainContainer from './Main-Container'
import App from "@/App.jsx";
import '../css/jspage.css'
import thing from "@/assets/sparkDarker.png"
function JSPage() {
    return (
        <>
            <div className="forum-container">
                <div className='forum-row'><img alt='img' src={thing}></img><p>How 2 React</p></div>
                <div className='forum-row'>2</div>
                <div className='forum-row'>3</div>
                <div className='forum-row'>4</div>
                <div className='forum-row'>5</div>
            </div>
        </>
    )
}

export default JSPage