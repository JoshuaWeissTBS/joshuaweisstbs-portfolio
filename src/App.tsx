import React, { useEffect, useRef, useState } from 'react';
import './App.css'
import { Todo } from './common/types';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "null") || []);
  const todoNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id: number) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    if (!todo) {
      return
    }
    todo.completed = !todo?.completed
    setTodos(newTodos);
  };

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

  function clearTodos() {
    setTodos([]);
    localStorage.setItem(LOCAL_STORAGE_KEY, "");
  };
  
  function clearCompletedTodos() {
    setTodos(prevTodos => {
      const filteredTodos: Todo[] = prevTodos.filter(todo => !todo.completed)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredTodos));
      return filteredTodos;
    }
    );
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={clearTodos}>Clear all todos</button>
      <button onClick={clearCompletedTodos}>Clear completed todos</button>
      <div>{todos.filter(todo => !todo.completed).length} left to do</div>
    </>
  )
}

export default App
