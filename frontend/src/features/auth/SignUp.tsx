import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignUp(): JSX.Element {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const response = await fetch('/auth/signup', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();
        dispatch({ type: 'SIGN_UP', payload: data });
        navigate('/');
    };

  return (
    <form className="form" onSubmit={onHandleSubmit}>
        <label htmlFor="name">Name
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" />
        </label>
        <label htmlFor="email">Email
            <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
        </label>
        <label htmlFor="password">Password
            <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
        </label>
        <button className="btn" type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default SignUp;
