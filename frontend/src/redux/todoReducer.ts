import { State } from '../features/todos/types/State';
import Action from '../types/Action';

const initialState: State = {
    todos: []
};

const todoReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload,
            };
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
            default:
                return state;
    }
};

export default todoReducer;
