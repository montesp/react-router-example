import React from "react";
import { useAuth } from "../../hooks/auth";
import { Navigate } from "react-router-dom";
import './Login.css';

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
    <main className="main">
      <section className="login">
        <h2 className="login__title">Login</h2>
        <form className="login__form" onSubmit={login}>
          <label className="login__form-text" id="user">Usuario:</label>
          <input
            className="login__form-input"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <button className="login__form-button " type="submit">Entrar</button>
        </form>
      </section>
    </main>
  );
}

export { Login };