import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((json) => setPost(json));
  }, [id]);

  if (!post) {
    return null;
  }

  return (
    <div className="p-12">
      <h1 className="text-3xl text-center">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
