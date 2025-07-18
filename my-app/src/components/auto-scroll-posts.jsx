import React, { useEffect, useRef } from "react";

const posts = [
  {
    headline: "We love cats!",
    text: "Cats are super duper cool! They formed a symbiotic relationship with humans.",
    avatar: "cavatar.jpg", // replace with your actual image path or import
  },
  {
    headline: "Welcome to the new tribe!",
    text: "We are so happy to welcome ServiceNow to our tribe!",
    avatar: "avatar.jpg",
  },
  // add more posts here if needed
];

function Post({ headline, text, avatar }) {
  return (
    <div style={{ display: "flex", gap: 12, padding: 16, alignItems: "center" }}>
      <img
        src={avatar}
        alt="avatar"
        style={{ width: 50, height: 50, borderRadius: "50%" }}
      />
      <div>
        <h3 style={{ margin: 0 }}>{headline}</h3>
        <p style={{ margin: 0 }}>{text}</p>
      </div>
    </div>
  );
}

export default function AutoScrollPosts() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollPos = 0;

    // scroll speed in pixels per frame
    const scrollSpeed = 1;

    // duplicate the posts so we can loop seamlessly
    container.innerHTML += container.innerHTML;

    function step() {
      scrollPos += scrollSpeed;
      if (scrollPos >= container.scrollHeight / 2) {
        scrollPos = 0; // reset scroll to top when scrolled halfway (due to duplication)
      }
      container.scrollTop = scrollPos;
      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

    // Cleanup on unmount
    return () => cancelAnimationFrame(step);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: 200,
        overflow: "hidden",
        border: "1px solid #ccc",
      }}
    >
      <div>
        {posts.map((post, i) => (
          <Post
            key={i}
            headline={post.headline}
            text={post.text}
            avatar={post.avatar}
          />
        ))}
      </div>
    </div>
  );
}
