import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
import './Menu.css';

const routes = [];
routes.push({
  to: '/',
  text: 'Home',
  private: false,
});
routes.push({
  to: '/profile',
  text: 'Profile',
  private: true,
});
routes.push({
  to: '/blog',
  text: 'Blog',
  private: false,
});
routes.push({
  to: '/login',
  text: 'Login',
  private: false,
});
routes.push({
  to: '/logout',
  text: 'Logout',
  private: true,
});


function Menu() {
  const auth = useAuth();

  return (
    <header className="header">
      <nav>
        <ul>
          {routes.map(route => {
            if(route.private && !auth.user) return null;
            if(auth.user && route.text === "Login") return null;

            return (
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
          )
          })}
        </ul>
      </nav>
    </header>
  );
}


export { Menu };