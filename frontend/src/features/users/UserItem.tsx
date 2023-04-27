import React from 'react';
import { User } from './types/User';

function UserItem({ user }: { user: User }): JSX.Element {
  return (
    <div className="div_user">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button type="button">X</button>
    </div>
  );
}

export default UserItem;
