import React from 'react';
import { Todo } from '../common/types';

function TodoRow({ todo }: { todo: Todo }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed}/>
        {todo.text}
      </label>
    </div>
  )
}

export default TodoRow
