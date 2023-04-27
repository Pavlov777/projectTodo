import Action from './Action';
import { Todo } from '../features/todos/types/Todo';
import { User } from '../features/users/types/User';

export type State = {
    todos: Todo[];
    users: User[];
    auth: User | undefined;
};

export type ContextState = {
    state: State;
    dispatch: (value: Action) => void;
};
