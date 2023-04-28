import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './styles/navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function NavBar(): JSX.Element {
  const dispatch = useDispatch();
  const { auth } = useSelector((store: RootState) => store.auth);

  console.log('=========', auth);

  const logOut = (): void => {
    fetch('/auth/logout')
      .then((res) => res.json())
      .then(() => dispatch({ type: 'LOG_OUT' }));
  };

  return (
    <div className='nav__container'>
      {auth && <h3>Hello, {auth.name}</h3>}
      <ul className='nav__menu'>
        <li>
          <NavLink to='/'>Main</NavLink>
        </li>

        <li>
          <NavLink to='/todos'>Todos</NavLink>
        </li>
        <li>
          <NavLink to='/users'>Users</NavLink>
        </li>
        {!auth ? (
          <>
            <li>
              <NavLink to='/signin'>SignIn</NavLink>
            </li>
            <li>
              <NavLink to='/signup'>SignUp</NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink onClick={logOut} to='#'>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
      <Outlet />
    </div>
  );
}

export default NavBar;
