import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../redux/store';

function NavBar(): JSX.Element {
  // const dispatch = useDispatch();

  return (
   <div className="nav__container">
        <ul className="nav__menu">
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/todos">My Todos</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/signin">SignIn</NavLink>
          </li>
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
          {/* <li> */}
            {/* <NavLink to="/logout">Logout</NavLink> */}
          {/* </li> */}
        </ul>
        <Outlet />
   </div>
  );
}

export default NavBar;
