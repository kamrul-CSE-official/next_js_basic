import Post from "@/components/Post/Post";
import React from "react";

const posts = ({ posts }) => {
  // clg
  console.log(posts);
  return (
    <div>
      <h1 className="text-2xl">The number of posts: {posts.length}</h1>

      {posts ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <progress className="progress w-56"></progress>
      )}
    </div>
  );
};

export default posts;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};
