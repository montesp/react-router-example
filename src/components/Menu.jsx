import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css';

const routes = [];
routes.push({
  to: '/',
  text: 'Home',
});
routes.push({
  to: '/profile',
  text: 'Profile',
});
routes.push({
  to: '/blog',
  text: 'Blog',
});


function Menu() {
  return (
    <header className="header">
      <nav>
        <ul>
          {routes.map(route => (
            <li>
              <NavLink
                to={route.to}
                className={({ isActive })=> (
                isActive ? 'link--selected':'link'
              )}
              >
                {route.text}
              </NavLink>
            </li>
          ))}

          {/* <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/blog" className="link">Blog</Link>
          </li>
          <li>
            <Link to="/profile" className="link">Profile</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}


export { Menu };