import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <img src={user.avatarUrl} alt={user.name} className="user-icon" />
      <h2 className="user-name">{user.name}</h2>
      <p className="user-description">{user.description}</p>
    </div>
  );
}

export default UserProfile;