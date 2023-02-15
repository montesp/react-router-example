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
routes.push({
  to: '/login',
  text: 'Login',
});
routes.push({
  to: '/logout',
  text: 'Logout',
});


function Menu() {
  return (
    <header className="header">
      <nav>
        <ul>
          {routes.map(route => (
            <li key={route.to}>
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
        </ul>
      </nav>
    </header>
  );
}


export { Menu };