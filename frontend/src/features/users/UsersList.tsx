import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import UserItem from './UserItem';

function UsersList(): JSX.Element {
  const { users } = useSelector((store: RootState) => store.users);
  console.log(users);
  return (
    <div>
        {users.map((user) => (<UserItem key={user.id} user={user} />))}
    </div>
  );
}

export default UsersList;
