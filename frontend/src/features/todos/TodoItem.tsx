import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Todo, TodoId } from './types/Todo';

function TodoItem({ todo }: { todo: Todo }): JSX.Element {
  const dispatch = useDispatch();

  const onHandleRemove = async (todoId: number): Promise<void> => {
    const response = await fetch(`/api/todos/${todoId}`, { method: 'delete' });
    const data = await response.json();
    dispatch({ type: 'REMOVE_TODO', payload: Number(data) });
  };

  const [modal, setModal] = useState(false);

  return (
    <div className='div_todo'>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <button type='button' onClick={() => onHandleRemove(todo.id)}>
        Удалить
      </button>
      <button type='button'>
        <img
          src='https://st18.stpulscen.ru/images/localized/002/772/784_original.jpg'
          style={{ width: '20px', height: '20px' }}
          alt='galka'
        />
      </button>
      <button type='button' onClick={() => setModal(!modal)}>
        <img
          src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png'
          style={{ width: '20px', height: '20px' }}
          alt='logo'
        />
      </button>
      {modal ? (
        <form>
          <label htmlFor='title'>
            Title
            <input type='text' />
          </label>
          <label htmlFor='description'>
            Description
            <input type='text' />
          </label>
          <button type='submit'>Update</button>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TodoItem;
