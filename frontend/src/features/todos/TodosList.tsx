import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import TodoItem from './TodoItem';

function TodosList(): JSX.Element {
  const { todos } = useSelector((store: RootState) => store.todos);

  return (
    <div>
      {todos.map((todo) => (<TodoItem key={todo.id} todo={todo} />))}
    </div>
  );
}

export default TodosList;
