import React from "react";
import { useAuth } from "../../hooks/auth";
import { Navigate } from "react-router-dom";

function Login() {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');

  const login = (e) => {
    e.preventDefault();
    auth.login({username});
  };

  if (auth.user){
    return <Navigate to="/profile"/>
  }

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