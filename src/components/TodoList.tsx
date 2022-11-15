import React from 'react';
import { Todo } from '../common/types';
import TodoRow from './TodoRow';

function TodoList({ todos, toggleTodo }: { todos: Todo[], toggleTodo: (id: number) => void }) {
  return (
    <>
      {todos.map(todo => {
        return <TodoRow toggleTodo={toggleTodo} todo={todo} />
      })}
    </>
  )
}

export default TodoList
