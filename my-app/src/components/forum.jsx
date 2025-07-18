import { useState } from "react";
import "@/css/forum-page.css";

function ForumPage() {
  const [posts, setPosts] = useState([
    {
      title: "Welcome to the Forum!",
      content: "This is a place to share thoughts, ask questions, and connect with others.",
    },
    {
      title: "How do I add a sidebar?",
      content: "Anyone know how to keep the sidebar closed by default? Having trouble with it.",
    },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handlePost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      setPosts([newPost, ...posts]);
      setNewPost({ title: "", content: "" });
    }
  };

  return (
    <div className="main-container">
      <h2 className="forum-title">JavaScript Q&A Forum</h2>

      <div className="post-box">
        <input
          type="text"
          placeholder="Post Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="post-title-input"
        />
        <textarea
          placeholder="Write your message..."
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          className="post-content-input"
        />
        <button onClick={handlePost} className="post-btn">
          Post
        </button>
      </div>

      <div className="forum-posts-grid">
        {posts.map((post, index) => (
          <div key={index} className="forum-post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForumPage;