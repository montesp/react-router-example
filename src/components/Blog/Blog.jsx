import React from "react";
import { Link, Outlet } from "react-router-dom";
import { data, useBlogData } from "../../hooks/useBlogData";
import './Blog.css';

function Blog() {
  const { blogData } = useBlogData();

  return (
    <main className="main">
      <section className="blog">
        <h1 className="blog__title">Blog</h1>
        {blogData.map(post => (
          <BlogLink key={post.slug} post={post}/>
        ))}
        <Outlet/>
      </section>
    </main>
  );
}

function BlogLink({ post }) {
  return (
    <li className="blog__link">
      <Link className="blog__link-anchor" to={`/blog/${post.slug}`} >{post.title}</Link>
    </li>
  );
}

export { Blog };