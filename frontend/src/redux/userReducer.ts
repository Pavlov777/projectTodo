import { State } from '../features/users/types/State';
import Action from '../types/Action';

const initialState: State = {
    users: [],
};

const userReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
            };
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            };
            default:
                return state;
    }
};

export default userReducer;
