import React, { useRef, useState } from 'react';
import './App.css'
import { Todo } from './common/types';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoNameRef = useRef<HTMLInputElement>(null);

  function handleAddTodo() {
    if (!todoNameRef?.current) return;
    const text: string = todoNameRef.current.value;
    if (!text) return;
    setTodos(previousTodos => [...previousTodos, {
      id: todos.length + 1,
      text,
      completed: false
    }]);
  };

  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add todo</button>
      <button>Clear completed todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App
