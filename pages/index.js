import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import React from "react";

const index = ({ posts }) => {
  return (
    <div className="text-center">
      <Banner />
      <div>
        {posts ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="card mt-10 bg-base-100 shadow-xl my-10 mx-10"
            >
              <div className="card-body">
                <h2 className="card-title">{post?.title}</h2>
                <p>{post?.body}</p>
              </div>
            </div>
          ))
        ) : (
          <progress className="progress w-56"></progress>
        )}
        <Link href="/posts">
          <button className="btn btn-outline btn-success">See more</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};

export default index;
