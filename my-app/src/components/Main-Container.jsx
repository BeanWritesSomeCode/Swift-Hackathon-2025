
import AutoScrollPosts from './auto-scroll-posts';

function MainContainer({ sidebarOpen }) {
  return (
    <div className={`main-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <h1>Welcome to SPARK!</h1>
      <h2>SWIFT Platform for Aligning Resources and Knowledge</h2>
      <h3>Recent Posts: </h3>

      <AutoScrollPosts/>
    </div>
  );
}

export default MainContainer
