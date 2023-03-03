import React from "react";
import { useAuth } from "../../hooks/auth";
import './Logout.css';

function Logout() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <main className="main">
      <section className="logout">
        <h2 className="logout__title">Logout</h2>
        <form className="logout__form" onSubmit={logout}>
          <label className="logout__form-text" id="user">¿Seguro  que quieres salir?</label>
          <button className="logout__form-button" type="submit">Salir</button>
        </form>
      </section>
    </main>
  );
}

export { Logout };