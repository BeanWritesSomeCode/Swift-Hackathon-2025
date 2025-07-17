import avatar from '../assets/avatar.jpg'
import avatar2 from '../assets/cavatar.png'
import Post from "./Post"

function MainContainer({ sidebarOpen }) {
  return (
    <div className={`main-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <h1>Welcome to SPARK!</h1>
      <p>SWIFT Platform for Aligning Resources and Knowledge</p>
      <p>Recent Posts: </p>
      <Post headline="We love cats!" 
      text="Cats are super duper cool! They formed a symbiotic relationship with humans."
      avatar={avatar2}/>
      <Post headline="Welcome to the new tribe!" text="We are so happy to welcome ServiceNow to our tribe!"
      avatar={avatar}/>
      <p>Group Updates: </p>
      <Post headline="We love cats!" 
      text="Cats are super duper cool! They formed a symbiotic relationship with humans."
      avatar={avatar2}/>
      <Post headline="Welcome to the new tribe!" text="We are so happy to welcome ServiceNow to our tribe!"
      avatar={avatar}/>
    </div>
  );
}

export default MainContainer
