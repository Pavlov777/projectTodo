import { State } from '../features/auth/types/Auth';
import Action from '../types/Action';

const initialState: State = {
    auth: undefined,
};

const authReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                auth: action.payload,
            };
        case 'SIGN_UP':
            return {
                ...state,
                auth: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                auth: undefined,
            };
        case 'CHEK_USER':
            return {
                ...state,
                auth: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
