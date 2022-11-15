import React from 'react';
import { Todo } from '../common/types';

function TodoRow({ todo, toggleTodo }: { todo: Todo, toggleTodo: (id: number) => void }) {
  
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={handleTodoClick} />
        {todo.text}
      </label>
    </div>
  )
}

export default TodoRow
