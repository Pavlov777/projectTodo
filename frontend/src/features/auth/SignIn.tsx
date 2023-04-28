import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const response = await fetch('/auth/signin', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    // console.log(data);
    dispatch({ type: 'SIGN_IN', payload: data });
    navigate('/');
  };

  return (
    <form className='form' onSubmit={onHandleSubmit}>
      <label htmlFor='email'>
        Email
        <input
          className='input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        />
      </label>
      <label htmlFor='password'>
        Password
        <input
          className='input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
        />
      </label>
      <button className='btn' type='submit'>
        Go!
      </button>
    </form>
  );
}

export default SignIn;
