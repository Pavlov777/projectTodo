import React from 'react';
import { Todo } from './types/Todo';

function TodoItem({ todo }: { todo: Todo }): JSX.Element {
  return (
    <div className="div_todo">
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <button type="button">Удалить</button>
      <button type="button"><img src="https://st18.stpulscen.ru/images/localized/002/772/784_original.jpg" style={{ width: '20px', height: '20px' }} alt="galka" /></button>
    </div>
  );
}

export default TodoItem;
