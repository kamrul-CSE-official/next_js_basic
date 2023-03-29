import React from "react";
// https://web.programming-hero.com/update-1/video/update-1-82-9-difference-between-pages-and-components-in-next-js-and-explore-built-in-css-support
const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => (
        <h1 className="my-10 mx-5 text-3xl" key={comment?.id}>
          {" "}
          Comment body: {comment?.body}
        </h1>
      ))}
    </div>
  );
};

export default Comments;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  return {
    props: {
      comments: data,
    },
  };
};
