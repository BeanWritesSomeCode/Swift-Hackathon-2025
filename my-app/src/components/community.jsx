import { Link, Routes, Route } from "react-router-dom"
import Community_Dashboard from "../components/Community_Dashboard"
//import Cat from "../components/Cat"
import bingus from "@/assets/bingus.jpeg";

function Community() {
    return (
        <>
        <div className="main-container community-post-container">
            <div className="grid-container">
                <div className="grid-item">
                    <div className="comm-item-img">
                        <img alt="bingus" src={bingus}></img>
                    </div>
                    <div className="comm-item-text">
                        <h3>Cat Lovers</h3>
                        <p>A community for cat lovers</p>
                        <Link to="/community/cat"><button>Button</button></Link>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="comm-item-img">
                        <img alt="bingus" src={bingus}></img>
                    </div>
                    <div className="comm-item-text">
                        <h3>Cat Lovers</h3>
                        <p>A community for cat lovers</p>
                        <button>Button</button>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="comm-item-img">
                        <img alt="bingus" src={bingus}></img>
                    </div>
                    <div className="comm-item-text">
                        <h3>Cat Lovers</h3>
                        <p>A community for cat lovers</p>
                        <button>Button</button>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="comm-item-img">
                        <img alt="bingus" src={bingus}></img>
                    </div>
                    <div className="comm-item-text">
                        <h3>Cat Lovers</h3>
                        <p>A community for cat lovers</p>
                        <button>Button</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Community