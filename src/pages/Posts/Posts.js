import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div className="gap-5 grid grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="text-center bg-slate-600">
          <Link to={`/posts/post/${post.id}`}>
            <h2 className="text-3xl">{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
