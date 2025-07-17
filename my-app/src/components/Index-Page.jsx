function IndexPage({ sidebarOpen }) {
  return (
    <div className={`main-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <h1>Welcome to SPARK!</h1>
      <p>SWIFT Platform for Aligning Resources and Knowledge</p>
      <p>Recent Posts: </p>
      <p>Group Updates: </p>
    </div>
  );
}

export default IndexPage
