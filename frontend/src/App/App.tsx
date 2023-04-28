import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TodosList from '../features/todos/TodosList';
import NavBar from '../features/nav/NavBar';
import * as api from './api';
// import MainPage from '../features/main/MainPage';
import UsersList from '../features/users/UsersList';
import SignUp from '../features/auth/SignUp';
import SignIn from '../features/auth/SignIn';
import MainPage from '../features/main/MainPage';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .getTodos()
      .then((data) => dispatch({ type: 'GET_TODOS', payload: data }));
    api
      .getUsers()
      .then((data) => dispatch({ type: 'GET_USERS', payload: data }));
    api
      .checkUser()
      .then((data) => dispatch({ type: 'CHECK_USER', payload: data }));
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/todos' element={<TodosList />} />
          <Route path='/users' element={<UsersList />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
