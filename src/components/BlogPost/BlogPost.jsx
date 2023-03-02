import React from "react";
import { blogdata } from "../../hooks/blogdata";
import { useNavigate, useParams} from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import './Blogpost.css';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  
  const auth = useAuth();

  const blogpost = blogdata.find(post => post.slug === slug);

  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const returnToBlog = () => {
    navigate('/blog');
  }

  const deleteBlog = (title) => {
    const index = blogdata.findIndex(blog => blog.slug === 'que-es-angular');
    console.log(index)
    // const data = blogdata.filter(blog => blog.slug === 'que-es-angular')
    console.log(blogdata);
    // Borra elementos, crear un hook para compartir los datos
    // blogdata.splice(index, index+1)
    // console.log(blogdata);
  }

  return (
    <div className="blogpost">
      <h2 className="blogpost__title">{blogpost.title}</h2>
      <p className="blogpost__author">Author: {blogpost.author}</p>
      <p className="blogpost__content">{blogpost.content}</p>
      <button className="blogpost__button" onClick={returnToBlog}>Volver al blog</button>

      {canDelete && (
        <button className="blogpost__button" onClick={deleteBlog}>Eliminar Blogpost</button>
      )}
    </div>
  );
}

export { BlogPost };