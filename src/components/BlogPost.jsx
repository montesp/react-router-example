import React from "react";
import { blogdata } from "./blogdata";
import { useNavigate, useParams} from "react-router-dom";
import { useAuth } from "./auth";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  
  const auth = useAuth();

  const blogpost = blogdata.find(post => post.slug === slug);

  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const returnToBlog = () => {
    navigate('/blog');
  }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
      <button onClick={returnToBlog}>Volver al blog</button>

      {canDelete && (
        <button>Eliminar Blogpost</button>
      )}
    </>
  );
}

export { BlogPost };