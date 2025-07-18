import { Link, Routes, Route } from "react-router-dom"
import bingus from "@/assets/bingus.jpeg";
import nsbe from "@/assets/NSBE.png"
import wit from "@/assets/WIT.png"
import swit from "@/assets/swit.png"

function Community() {
    return (
        <>
        <div className="main-container">
            <h1>Our Communities</h1>
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
                        <img alt="bingus" src={swit}></img>
                    </div>
                    <div className="comm-item-text">
                        <h3>WIT</h3>
                        <p>Women In Technology</p>
                        <button>Button</button>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="comm-item-img">
                        <img alt="bingus" src={nsbe}></img>
                    </div>
                    <div className="comm-item-text">
                        <h3>NSBE</h3>
                        <p>Supporting Black Engineers and Scientists</p>
                        <button>Button</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Community