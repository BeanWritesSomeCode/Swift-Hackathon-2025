import jsImage from "@/assets/jsImage.png";
import cppImage from "@/assets/cppImage.png";
import { Link } from "react-router-dom";
function KnowledgeZone() {
  return (
    <>
      <div className="main-container">
        <h1>Knowledge Zone</h1>
        <p className="zone-sub-text">Discover Connections in SWIFT</p>

        <Link to="/knowledge/js-forum">
          <div className="forum-container green">
            <img className="forum-logo" src={jsImage} />
            <div className="forum-text-div">
              <h1>JavaScript Group</h1>
              <p>"Asynchronous by nature, chaotic by design."</p>
            </div>
          </div>
        </Link>

        <div className="forum-container green">
          <img className="forum-logo" src={cppImage} />
          <div className="forum-text-div">
            <h1>C++ Group</h1>
            <p>“Control the machine, master the code.”</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default KnowledgeZone;
