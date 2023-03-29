import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div>
      <Image src={"/images/error.jpg"} width={1000} height={50}></Image>
      <Link href="/">
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </div>
  );
};

export default Error;
