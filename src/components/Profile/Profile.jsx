import React from "react";
import { useAuth } from "../../hooks/auth";
import './Profile.css';

function Profile() {
  const { user } = useAuth();


  return (
    <div className="profile">
      <h1 className="profile__title">Perfil</h1>
      <p className="profile__user">Welcome: {user?.username}</p>
    </div>
  );
}

export { Profile };