import { Todo, TodoId } from '../features/todos/types/Todo';
import { User, UserId } from '../features/users/types/User';

type Action =
| { type: 'GET_TODOS'; payload: Todo[] }
| { type: 'ADD_TODO'; payload: Todo }
| { type: 'REMOVE_TODO'; payload: TodoId }
| { type: 'GET_USERS'; payload: User[] }
| { type: 'ADD_USER'; payload: User }
| { type: 'REMOVE_USER'; payload: UserId }
| { type: 'SIGN_IN'; payload: User }
| { type: 'SIGN_UP'; payload: User }
| { type: 'LOGOUT' }
| { type: 'CHEK_USER'; payload: User };

export default Action;
