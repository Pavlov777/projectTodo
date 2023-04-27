import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    todos: todoReducer,
    users: userReducer,
    auth: authReducer,
});

export default rootReducer;
