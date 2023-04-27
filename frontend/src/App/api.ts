import { Todo } from '../features/todos/types/Todo';
import { User } from '../features/users/types/User';

export const getTodos = (): Promise<Todo[]> => fetch('/api/todos').then((res) => res.json());

export const getUsers = (): Promise<User[]> => fetch('api/users').then((res) => res.json());

export const checkUser = (): Promise<User> =>
  fetch('/auth/checkUser', {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json());
