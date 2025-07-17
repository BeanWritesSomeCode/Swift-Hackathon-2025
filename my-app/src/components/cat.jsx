import cat from "@/assets/cat1.jpeg"
function Cat() {
    return (
        <>
        <div className="main-container">
            <div className="grid-container-3x2">
                <div><img alt="cat" src={cat}></img>
                    <h3>Cat appreciation day</h3>
                    <p>Come share your love for cats!</p>
                </div>
                <div><img alt="cat" src={cat}></img>
                        <h3>orange cat awareness day</h3>
                        <p>The shocking truth behind orange cat intelligence</p>
                </div>
                <div><img alt="cat" src={cat}></img>
                    <h3>placeholder_title</h3>
                    <p>placeholder_description</p>
                </div>
                <div><img alt="cat" src={cat}></img>
                    <h3>placeholder_title</h3>
                    <p>placeholder_description</p>
                </div>
                <div><img alt="cat" src={cat}></img>
                    <h3>placeholder_title</h3>
                    <p>placeholder_description</p>
                </div>
                <div><img alt="cat" src={cat}></img>
                    <h3>placeholder_title</h3>
                    <p>placeholder_description</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cat

function eventItem() {
    return (
        <div><img alt="cat" src={cat}></img>
            <h3>Cat appreciation day</h3>
            <p>Come share your love for cats!</p>
        </div>
    )
}