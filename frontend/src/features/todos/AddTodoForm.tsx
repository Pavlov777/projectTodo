import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTodoForm(): JSX.Element {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const onHandleAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const response = await fetch('/api/todos', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description }),
        });
        const data = await response.json();
        dispatch({ type: 'ADD_TODO', payload: data });
    };

  return (
    <form onSubmit={onHandleAdd}>
        <label htmlFor="title">Title
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
        </label>
        <label htmlFor="description">
            Description
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
        </label>
        <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
