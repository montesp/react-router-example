import React from "react";
import './Menu.css';

function Menu() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#/profile">Profile</a>
          </li>
          <li>
            <a href="/#/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Menu };