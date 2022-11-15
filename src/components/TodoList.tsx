import React from 'react';
import { Todo } from '../common/types';
import TodoRow from './TodoRow';

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <>
      {todos.map(todo => {
        return <TodoRow todo={todo} />
      })}
    </>
  )
}

export default TodoList
