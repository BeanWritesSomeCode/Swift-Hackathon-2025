import React, { useEffect, useRef } from "react";
import cavatar from "@/assets/cavatar.png";
import avatarOne from "@/assets/aiHeadshot.jpg";
import avatarTwo from "@/assets/aiHeadshot2.jpg";
import witAvatar from "@/assets/WIT.png";

const posts = [
  {
    headline: (
      <>
        Benjamin Johnson posted in the <strong>Cat Lovers</strong> group:
      </>
    ),
    text: "Cats are super duper cool! They formed a symbiotic relationship with humans.",
    avatar: cavatar,
  },
  {
    headline: "Welcome to the team!",
    text: "We are so happy to welcome Sydney McKeever to our company!",
    avatar: avatarOne,
  },
  {
    headline: "Welcome to the team!",
    text: "We are so happy to welcome Tomahito Mori to our company!",
    avatar: avatarTwo,
  },

  {
    headline: (
      <>
        Hailena Bian posted in the <strong>WIT</strong> group:
      </>
    ),
    text: "Reminder: There will be a community picnic this weekend, 8/1!",
    avatar: witAvatar,
  },
  // add more posts here if needed
];

function Post({ headline, text, avatar }) {
  return (
    <div
      className="post"
      style={{
        display: "flex",
        gap: 12,
        padding: 16,
        alignItems: "flex-start",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <img
        src={avatar}
        alt="avatar"
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          marginTop: "10px",
        }}
      />
      <div style={{ marginLeft: 20, textAlign: "left", flexGrow: 1 }}>
        <h3 style={{ margin: 0, fontWeight: 400 }}>{headline}</h3>
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
    const scrollSpeed = 0.5;

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

    return () => cancelAnimationFrame(step);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: 300,
        overflow: "hidden",
        border: "1px solid #ccc",
        width: 600,
        margin: "0 auto",
        display: "block",
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
