import React from "react";
import { Link } from "react-router-dom";
import { users } from "../../FakeData/FakeData";

const Posts = () => {
  return (
    <div className="gap-5 grid grid-cols-3">
      {users.map((post) => (
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
