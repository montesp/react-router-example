import React from "react";
import { useAuth } from "../../hooks/auth";

function Profile() {
  const { user } = useAuth();


  return (
    <>
      <h1>Perfil</h1>
      <p>Welcome: {user?.username}</p>
    </>
  );
}

export { Profile };