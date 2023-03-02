import React from "react";
import { useAuth } from "../../hooks/auth";

function Logout() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
      <h2>Logout</h2>
      <form onSubmit={logout}>
        <label id="user">¿Seguro  que quieres salir?</label>
        <button type="submit">Salir</button>
      </form>
    </>
  );
}

export { Logout };