import React, { useState } from 'react';

import TodoContainer from './components/TodoContainer';
import SearchTodo from './components/SearchTodo';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmitTodo = (todo) => {
    setTodos([...todos, { id: todos.length + 1, done: false, title: todo }]);
  };

  const filteredTodos = todos.filter((todo) => {
    return todo.title.includes(searchTerm);
  });

  const toggleTodo = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <SearchTodo setSearchTerm={setSearchTerm} />
      <TodoContainer todos={filteredTodos} toggleTodo={toggleTodo} />
      <AddTodo onSubmitTodo={onSubmitTodo} />
      <h5>Hint: click on a todo to mark it completed</h5>
    </div>
  );
};

export default App;
