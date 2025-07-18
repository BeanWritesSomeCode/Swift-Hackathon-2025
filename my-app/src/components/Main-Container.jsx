import avatar from '../assets/avatar.jpg'
import cavatar from '../assets/cavatar.png'
import Post from "./Post"
import AutoScrollPosts from './auto-scroll-posts';

function MainContainer({ sidebarOpen }) {
  return (
    <div className={`main-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <h1>Welcome to SPARK!</h1>
      <p>SWIFT Platform for Aligning Resources and Knowledge</p>
      <p>Recent Posts: </p>

      <AutoScrollPosts/>
    </div>
  );
}

export default MainContainer
