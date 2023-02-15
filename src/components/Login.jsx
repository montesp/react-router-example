import React from "react";
import { useAuth } from "./auth";

function Login() {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');

  const login = (e) => {
    e.preventDefault();
    auth.login({username});
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={login}>
        <label id="user">Escribe tu nombre de usuario:</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export { Login };