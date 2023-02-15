import React from "react";
import { blogdata } from "./blogdata";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { slug } = useParams();
  
  const blogpost = blogdata.find(post => post.slug === slug);
  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
    </>
  );
}

export { BlogPost };